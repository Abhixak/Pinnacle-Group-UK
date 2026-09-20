import React, { useState } from "react";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/Enquire";
import SEO from "../Components/SEO";

const Support = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
      <SEO
        title="NRI Services Support for UK Clients | Legal, Docs, Disputes"
        description="NRI services support for UK clients covering buying, selling, leasing, legal documents, title issues, and litigation in India."
        path="/support"
        keywords="NRI property support UK, NRI property legal help India, NRI property documentation support, NRI property dispute and litigation support, NRI property buying and selling assistance"
      />
      <header className="bg-white border-b">
        <div className="max-w-6xl !mx-auto !px-6 !py-10 text-left">
          <div className="h-1 w-16 bg-[#7a1f2b] rounded-full !mb-3" />
          <h1 className="text-3xl font-semibold text-[#7a1f2b]">
            NRI Property Support
          </h1>
          <p className="text-gray-600 !mt-2 max-w-3xl">
            Get help with buying, selling, legal documentation, and property
            management in India from our UK-facing support team.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl !mx-auto !px-6 !py-10 flex flex-col gap-10">
        {/* Global Contacts */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm !p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 !mb-5">
            <div>
              <h2 className="text-2xl font-semibold text-[#7a1f2b]">
                Global Support Numbers
              </h2>
              <p className="text-sm text-slate-600 !mt-1">
                Tap to call the region closest to you.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { country: "🇬🇧 United Kingdom", number: "+44 7868 143558", link: "tel:+447868143558" },
              { country: "🇮🇳 India", number: "+91 92163 99808", link: "tel:+919216399808" },
              { country: "🇨🇦 Canada", number: "+1 613 295 6385", link: "tel:+16132956385" },
              { country: "🇺🇸 United States", number: "+1 414 690 6435", link: "tel:+14146906435" },
              { country: "🇪🇺 Europe", number: "+49 155 6303 0611", link: "tel:+4915563030611" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="group border border-slate-200 rounded-xl !p-4 text-center bg-white hover:bg-slate-50 transition"
              >
                <h3 className="font-medium text-gray-800 group-hover:text-[#7a1f2b]">
                  {item.country}
                </h3>
                <p className="text-[#7a1f2b] !mt-1 font-semibold">
                  {item.number}
                </p>
                <span className="text-xs text-gray-500 !mt-1 block">
                  Tap to call
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm !p-6">
          <h2 className="text-2xl font-semibold text-[#7a1f2b] !mb-2">
            Submit an Enquiry
          </h2>
          <p className="text-gray-600 !mb-6">
            Share your details and our advisor will contact you shortly.
          </p>

          <EnquiryForm />
        </section>

        {/* Trust Footer Note */}
        <div className="text-center text-gray-500 text-sm">
          We respect your privacy. Your information is kept secure and confidential.
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs !py-4">
        (c) {new Date().getFullYear()} NRIProperty.uk. All rights reserved.
      </div>
    </div>
  );
};

export default Support;

