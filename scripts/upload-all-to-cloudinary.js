import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const cloudName = 'dljubulyn';
const apiKey = '456138121456866';
const apiSecret = '-EGtSgSV6ERZ4ewmvt1c5JJrlLA';
const folder = 'pinnacle-uk';

const imagesToUpload = [
  { path: 'public/NewLogo.png', id: 'NewLogo', type: 'image/png' },
  { path: 'public/favicon.svg', id: 'favicon', type: 'image/svg+xml' },
  { path: 'src/assets/hero1.png', id: 'hero1', type: 'image/png' },
  { path: 'src/assets/hero2.png', id: 'hero2', type: 'image/png' },
  { path: 'src/assets/hero3.png', id: 'hero3', type: 'image/png' },
  { path: 'src/assets/contactus.png', id: 'contactus', type: 'image/png' },
  { path: 'src/assets/banner2.png', id: 'banner2', type: 'image/png' },
  { path: 'src/assets/banner22.png', id: 'banner22', type: 'image/png' },
  { path: 'src/assets/hero.jpeg', id: 'hero', type: 'image/jpeg' },
  { path: 'src/assets/about ref.jpeg', id: 'about-ref', type: 'image/jpeg' },
  { path: 'src/assets/home ref.jpeg', id: 'home-ref', type: 'image/jpeg' },
];

async function uploadImage(item) {
  const fullPath = path.join(projectRoot, item.path);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    return null;
  }

  const timestamp = Math.round(new Date().getTime() / 1000);
  const publicId = `${folder}/${item.id}`;
  const overwrite = 'true';

  // Sorted parameters for Cloudinary signature
  // folder, overwrite, public_id, timestamp
  // Alphabetical order: folder, overwrite, public_id, timestamp
  const paramsToSign = [
    `folder=${folder}`,
    `overwrite=${overwrite}`,
    `public_id=${publicId}`,
    `timestamp=${timestamp}`,
  ].sort().join('&');

  const signature = crypto
    .createHash('sha1')
    .update(paramsToSign + apiSecret)
    .digest('hex');

  const fileBuf = fs.readFileSync(fullPath);
  const base64Data = `data:${item.type};base64,${fileBuf.toString('base64')}`;

  console.log(`Uploading ${item.path} as ${publicId}...`);

  try {
    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        file: base64Data,
        api_key: apiKey,
        timestamp,
        folder,
        public_id: publicId,
        overwrite: true,
        signature,
      }),
    });

    const data = await res.json();
    if (data.secure_url) {
      console.log(`✓ Uploaded ${item.id} -> ${data.secure_url}`);
      return { id: item.id, url: data.secure_url, originalPath: item.path };
    } else {
      console.error(`Failed to upload ${item.id}:`, data);
      return null;
    }
  } catch (err) {
    console.error(`Error uploading ${item.id}:`, err);
    return null;
  }
}

async function run() {
  const results = {};
  for (const item of imagesToUpload) {
    const res = await uploadImage(item);
    if (res) {
      results[item.id] = res.url;
    }
  }

  console.log('\nAll uploaded URLs:');
  console.log(JSON.stringify(results, null, 2));

  // Write mapping file
  const outPath = path.join(projectRoot, 'src/config/cloudinaryImages.js');
  const code = `// Auto-generated Cloudinary asset mapping
export const CLOUDINARY_IMAGES = ${JSON.stringify(results, null, 2)};

export default CLOUDINARY_IMAGES;
`;
  fs.writeFileSync(outPath, code, 'utf8');
  console.log(`\nWrote configuration to ${outPath}`);
}

run();

