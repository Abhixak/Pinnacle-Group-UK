import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

const faqData = [
  {
    question: "Can an NRI buy property in India?",
    answer: `
Yes. Non-Resident Indians (NRIs) can buy residential and commercial property in India under FEMA.

NRIs can purchase:
- Residential properties
- Commercial units such as offices or shops
- Industrial properties

NRIs cannot buy agricultural land, plantation property, or farmhouses unless inherited.

Payments must be made through proper banking channels such as NRE or NRO accounts or inward remittance. All transactions must comply with RBI guidelines.

Pinnacle Group supports NRIs with property selection, documentation, FEMA compliance, and end-to-end purchase support from abroad.
`,
  },
  {
    question: "Can an NRI sell property in India while living abroad?",
    answer: `
Yes. NRIs can sell property in India without traveling back.

The sale can be completed through:
- Power of Attorney (POA)
- Video verification
- Online documentation
- Digital coordination with buyers and authorities

Sale proceeds are credited to the NRO account and can be repatriated after tax and RBI compliance.

We handle buyer coordination, agreement drafting, registration assistance, and bank documentation so the process stays smooth and transparent.
`,
  },
  {
    question: "Is Power of Attorney mandatory for NRIs?",
    answer: `
Power of Attorney (POA) is not mandatory, but it is strongly recommended for NRIs.

A POA allows a trusted person in India to:
- Sign documents
- Attend registration
- Coordinate with banks and authorities
- Manage property matters

The POA should be executed abroad, attested by the Indian Embassy or Consulate, and adjudicated in India.

Using POA reduces travel costs and delays. Pinnacle Group provides POA drafting, attestation guidance, and registration support.
`,
  },
  {
    question: "What taxes apply when an NRI sells property in India?",
    answer: `
Tax treatment depends on the holding period and current tax rules.

Typically:
- Long-term capital gains apply to longer holding periods
- Short-term capital gains apply to shorter holding periods

Tax-saving options may include Section 54, Section 54EC, and DTAA benefits, subject to eligibility.

Our experts help NRIs calculate capital gains and plan legally compliant tax strategies.
`,
  },
  {
    question: "How much amount NRIs are allowed to repatriate?",
    answer: `
Repatriation is permitted, subject to RBI rules and documentation.

Common requirements include:
- Funds credited to the NRO account
- Form 15CA and 15CB submission
- Applicable tax payment

We provide assistance for CA certification, bank documentation, and smooth international fund transfers.
`,
  },
  {
    question: "Is rental income from India taxable for NRIs?",
    answer: `
Yes, rental income in India is taxable for NRIs. Eligible deductions may apply, including municipal taxes and home loan interest (Section 24(b)).

Rental income is credited to the NRO account and can be repatriated after tax compliance.

We assist with tenant management, rent collection, and income tax filing.
`,
  },
  {
    question: "Is investing in Indian real estate good for NRIs?",
    answer: `
Indian real estate can be a strong long-term investment for NRIs.

Potential advantages include:
- High rental demand in metro cities
- Capital appreciation
- Stable asset-backed investment
- Rupee depreciation benefit
- Emotional and future settlement value

With proper legal checks and expert guidance, Indian real estate can offer attractive long-term value.
`,
  },
  {
    question: "How does Pinnacle Group help NRIs?",
    answer: `
Pinnacle Group provides complete NRI property services, including:
- Property litigation and tax advice
- Buying and selling property remotely
- Title verification and due diligence
- Power of Attorney assistance
- Property management
- Rental services
- Tax planning and repatriation
- FEMA and RBI compliance

Our clients are based across the UK, USA, Canada, Europe, and Australia and manage their Indian properties without stress.
`,
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.replace(/\n/g, " ").trim(),
      },
    })),
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="NRI Property FAQs | Manage Indian Property from Abroad"
        description="Clear answers on buying, selling, POA, tax, repatriation and legal checks for NRIs managing property in India from anywhere abroad."
        path="/faqs"
        keywords="NRI property FAQs, manage Indian property from abroad, NRI property tax India, power of attorney NRI property, NRI property legal documentation, repatriation of sale proceeds for NRIs"
        structuredData={faqSchema}
        breadcrumbs={[{ name: "NRI Property FAQs", path: "/faqs" }]}
      />
      <section className="bg-gradient-to-b from-[#f1f5f9] via-[#f8f9fb] to-[#e0f7fa] rounded-xl !py-16 !px-4 md:!px-10 lg:!px-24">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-[#1a2e35] !mb-4">
          Frequently Asked{" "}
          <span className="text-[#e63946] underline underline-offset-8">
            Questions
          </span>
        </h1>
        <p className="text-center text-gray-600 !mb-12">
          Clear answers for UK-based NRIs on buying, selling, legal, tax, and
          property management in India.
        </p>

        {/* FAQs */}
        <div className="max-w-5xl !mx-auto flex flex-col gap-2">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center !p-6 text-left font-semibold text-[#006d77] text-base sm:text-lg"
              >
                {faq.question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="!px-6 !pb-6 text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

          {/* CONTACT CTA */}
          <div className="text-center !pt-12">
            <h3 className="text-xl font-semibold !mb-4 text-gray-800">
              Still have questions or need personal guidance?
            </h3>

            <button
              onClick={() => navigate("/contact")}
              className="bg-red-600 hover:bg-red-700 text-white !px-8 !py-3 rounded-full text-sm sm:text-base font-semibold shadow-md transition"
            >
              Book Free Consultation with Our Experts
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQs;
