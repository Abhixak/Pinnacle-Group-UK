const GTM_ID = "GTM-TVKVBRM2";
const GADS_ID = "AW-999905524";

let analyticsLoaded = false;

const ensureDataLayer = () => {
  window.dataLayer = window.dataLayer || [];
  return window.dataLayer;
};

const insertScript = (src) => {
  const script = document.createElement("script");
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
};

export const loadAnalytics = () => {
  if (analyticsLoaded) return;
  analyticsLoaded = true;

  const dataLayer = ensureDataLayer();

  insertScript(`https://www.googletagmanager.com/gtag/js?id=${GADS_ID}`);
  window.gtag = function gtag() {
    dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GADS_ID);

  dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  insertScript(`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
};
