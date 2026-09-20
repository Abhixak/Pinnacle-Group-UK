import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.nriproperty.uk";
const DEFAULT_OG_IMAGE = `${SITE_URL}/NewLogo.png`;
const ORGANIZATION = "Pinnacle Group UK";

function toAbsoluteUrl(path = "/") {
  if (!path) return SITE_URL;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function SEO({
  title = "NRI Property Services for UK NRIs | Buy, Sell, Legal Help",
  description = "End-to-end NRI property services for UK residents: buying, selling, legal support, and property management in India.",
  path = "/",
  keywords = "NRI property services UK, NRI property consultant UK, buy property in India from UK, sell property in India from UK, NRI property management India, NRI property legal services, NRI property documentation, NRI property litigation India, NRI real estate investment India",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  structuredData,
  breadcrumbs = [],
}) {
  const canonical = toAbsoluteUrl(path);
  const ogImage = toAbsoluteUrl(image);
  const baseStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: ORGANIZATION,
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      email: "info@nriproperty.uk",
      telephone: "+44-7868143558",
      areaServed: ["India", "United Kingdom", "United States", "Canada", "Europe", "Australia"],
      sameAs: [
        "https://www.facebook.com/pinnacleinfra.co.in",
        "https://www.instagram.com/nripropertyservices",
        "https://www.youtube.com/@NRIPropertyService",
      ],
      knowsAbout: ["NRI property services in India", "Indian property legal documentation", "Property management for NRIs", "Power of Attorney for Indian property", "NRI property tax and repatriation"],
      contactPoint: [{
        "@type": "ContactPoint",
        telephone: "+44-7868143558",
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Punjabi"],
        areaServed: ["GB", "IN", "US", "CA", "AU", "EU"],
      }],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Pinnacle Group UK",
      url: SITE_URL,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ];
  const breadcrumbData = breadcrumbs.length
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          ...breadcrumbs.map((crumb, index) => ({ "@type": "ListItem", position: index + 2, name: crumb.name, item: toAbsoluteUrl(crumb.path) })),
        ],
      }
    : null;
  const jsonLd = structuredData
    ? [
        ...baseStructuredData,
        ...(breadcrumbData ? [breadcrumbData] : []),
        ...(Array.isArray(structuredData) ? structuredData : [structuredData]),
      ]
    : [...baseStructuredData, ...(breadcrumbData ? [breadcrumbData] : [])];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={ORGANIZATION} />
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow, noarchive"
            : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        }
      />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en-GB" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      <meta property="og:site_name" content="Pinnacle Group UK" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
