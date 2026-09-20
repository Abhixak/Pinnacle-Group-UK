import React from "react";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
      <SEO
        title="Cookies Policy | Pinnacle Group UK"
        description="Learn about our use of cookies and tracking scripts to optimize your experience."
        path="/cookies-policy"
        keywords="Pinnacle Group UK cookies, cookie preferences, manage cookies UK"
      />
      <header className="bg-white border-b">
        <div className="max-w-4xl !mx-auto !px-6 !py-12 text-left">
          <div className="h-1 w-16 bg-[#7a1f2b] rounded-full !mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#7a1f2b]">Cookies Policy</h1>
          <p className="text-gray-600 mt-2">Last Updated: August 2026</p>
        </div>
      </header>

      <main className="max-w-4xl !mx-auto !px-6 !py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm !p-8 sm:!p-12 flex flex-col gap-8 text-left leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">1. What Are Cookies?</h2>
            <p className="text-gray-600 text-sm">
              Cookies are small files composed of letters and numbers downloaded to your browser when you visit a website. Under UK PECR, we must inform you what cookies are set on our website, their purpose, and give you the choice to accept or reject them.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">2. Types of Cookies We Use</h2>
            <p className="text-gray-600 text-sm">
              We utilize both necessary session variables and optional tracking cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 flex flex-col gap-1.5 pl-2">
              <li>
                <strong>Strictly Necessary (Web Storage):</strong> Storing authentication state (tokens) and your dashboard preferences. These do not require cookie consent.
              </li>
              <li>
                <strong>Analytics & Metrics:</strong> We load Google Tag Manager to monitor general performance and understand how users navigate through our services.
              </li>
              <li>
                <strong>Advertising & Conversions:</strong> Google Ads scripts track conversion rates (such as forms submitted from advertisements) to calculate our marketing return on investment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">3. List of Cookies Set on Consent</h2>
            <p className="text-gray-600 text-sm">
              If you consent by clicking "Accept All" in our Cookie Banner, Google scripts will place:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 flex flex-col gap-1.5 pl-2">
              <li><code>_ga</code> and <code>_ga_*</code> (expires after 2 years): distinguishes unique visitors.</li>
              <li><code>_gcl_au</code> (expires after 9 months): measures ad conversion.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">4. Revoking Consent & Clearing Cookies</h2>
            <p className="text-gray-600 text-sm">
              We value your choice. If you wish to revoke consent or block cookies:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 flex flex-col gap-1.5 pl-2">
              <li>Open your web browser settings to block or delete cookies.</li>
              <li>You can reset your consent choice by clearing your browser's local cache storage, which will trigger the Cookie Consent Banner to slide up again on your next reload.</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
