import React from "react";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
      <SEO
        title="Terms & Conditions | Pinnacle Group UK"
        description="Review the terms and conditions for using the Pinnacle Group UK real estate services website."
        path="/terms"
        keywords="Pinnacle Group UK terms, NRI real estate terms, terms of service"
      />
      <header className="bg-white border-b">
        <div className="max-w-4xl !mx-auto !px-6 !py-12 text-left">
          <div className="h-1 w-16 bg-[#7a1f2b] rounded-full !mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#7a1f2b]">Terms & Conditions</h1>
          <p className="text-gray-600 !mt-2">Last Updated: August 2026</p>
        </div>
      </header>

      <main className="max-w-4xl !mx-auto !px-6 !py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm !p-8 sm:!p-12 flex flex-col gap-8 text-left leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">1. Business & Company Details</h2>
            <p className="text-gray-600 text-sm">
              This website (<a href="https://www.nriproperty.uk" className="text-[#7a1f2b] hover:underline font-medium">nriproperty.uk</a>) is operated by Pinnacle Group(referred to as "we", "our", or "us"). We specialize in providing advisory, legal documentation, and coordination services for Non-Resident Indians (NRIs) in the United Kingdom regarding properties located in India.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">2. Agreement to Terms</h2>
            <p className="text-gray-600 text-sm">
              By accessing, browsing, or using this website, or by submitting query forms to request a consultation, you agree to be bound by these Terms and Conditions and all applicable UK and Indian laws. If you do not accept these terms in full, you must not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">3. Professional Disclaimer (No Legal/Financial Advice)</h2>
            <div className="bg-red-50/50 border-l-4 border-[#7a1f2b] !p-4 rounded-r-xl">
              <p className="text-gray-700 text-sm font-semibold mb-1">IMPORTANT NOTICE:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pinnacle Group UK acts strictly as a property consultancy and liaison agent. The information, consultation, and guidance provided on this website or during free consultations do not constitute formal legal representation, tax advice, or financial advice. You are strongly advised to consult a qualified solicitor, independent legal counsel, or registered financial advisor before executing any binding real estate sales, purchases, or agreements.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">4. NRI Consultations & Services</h2>
            <p className="text-gray-600 text-sm">
              We facilitate title search reports, GPA/SPA legal documentation, property management, tax filing guidance, and dispute/litigation support in India. While we utilize trusted advocates and legal partners in India, the final service delivery is subject to the specific service agreement executed between you and the respective service providers.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">5. User Warranties & Registration</h2>
            <p className="text-gray-600 text-sm">
              When using the enquiry forms or logging into the client dashboard, you warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 flex flex-col gap-1.5 pl-2">
              <li>All information provided is true, accurate, current, and complete.</li>
              <li>You hold the legal right or Power of Attorney for any property you request us to clear or sell.</li>
              <li>You will not use the website for fraudulent enquiries or misrepresent ownership.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">6. Limitation of Liability</h2>
            <p className="text-gray-600 text-sm">
              To the maximum extent permitted by UK law, Pinnacle Group UK, its directors, and employees shall not be liable for any direct, indirect, incidental, or consequential losses, including financial losses, property disputes, or delays in legal processing by Indian government departments, resulting from the use of or reliance on our consulting services.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">7. Governing Law & Jurisdiction</h2>
            <p className="text-gray-600 text-sm">
              These Terms and Conditions are governed by the laws of England and Wales. Any legal disputes or claims arising out of the use of this website or our consulting services shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">8. Contact Information</h2>
            <p className="text-gray-600 text-sm">
              For any questions regarding these Terms, please write to us at <a href="mailto:info@nriproperty.uk" className="text-[#7a1f2b] underline">info@nriproperty.uk</a> or call our UK support number: <a href="tel:+447868143558" className="text-[#7a1f2b] underline font-semibold">+44 7868 143558</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
