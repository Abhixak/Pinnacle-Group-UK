import fs from "fs";
import path from "path";
import { blogPosts } from "../src/data/blogPosts.js";

const SITE_URL = "https://www.nriproperty.uk";
const lastmod = new Date().toISOString().slice(0, 10);

const routes = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/contact", changefreq: "weekly", priority: "0.9" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/blogs", changefreq: "weekly", priority: "0.8" },
  ...blogPosts.map((post) => ({
    loc: `/blogs/${post.slug}`,
    changefreq: "monthly",
    priority: "0.7",
  })),
  { loc: "/nri-services", changefreq: "weekly", priority: "0.9" },
  { loc: "/gallery", changefreq: "weekly", priority: "0.8" },
  { loc: "/support", changefreq: "weekly", priority: "0.7" },
  { loc: "/faqs", changefreq: "weekly", priority: "0.8" },
  { loc: "/terms", changefreq: "yearly", priority: "0.3" },
  { loc: "/privacy", changefreq: "yearly", priority: "0.3" },
  { loc: "/cookies-policy", changefreq: "yearly", priority: "0.2" },
  { loc: "/buy-property-india-from-uk", changefreq: "weekly", priority: "0.9" },
  { loc: "/sell-property-india-from-uk", changefreq: "weekly", priority: "0.9" },
  { loc: "/lease-property-india-for-nri", changefreq: "weekly", priority: "0.8" },
  { loc: "/nri-property-legal-litigation-india", changefreq: "weekly", priority: "0.8" },
  { loc: "/nri-property-documentation-services", changefreq: "weekly", priority: "0.8" },
  { loc: "/nri-real-estate-investment-india-from-uk", changefreq: "weekly", priority: "0.8" },
  { loc: "/service-details/selling", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/buying", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/leasing", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/buy-sell", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/legal", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/management", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/title", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/finance", changefreq: "monthly", priority: "0.8" },
  { loc: "/service-details/support", changefreq: "monthly", priority: "0.8" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  routes
    .map((r) => {
      const loc = `${SITE_URL}${r.loc}`;
      return `  <url>\n` +
        `    <loc>${loc}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <changefreq>${r.changefreq}</changefreq>\n` +
        `    <priority>${r.priority}</priority>\n` +
        `  </url>`;
    })
    .join("\n") +
  `\n</urlset>\n`;

const outPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`sitemap written to ${outPath}`);
