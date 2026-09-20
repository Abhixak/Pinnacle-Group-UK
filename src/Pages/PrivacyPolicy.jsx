import React from "react";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-gray-800 font-sans">
      <SEO
        title="Privacy Policy | Pinnacle Group UK"
        description="Read how Pinnacle Group UK protects and handles personal data for Non-Resident Indians."
        path="/privacy"
        keywords="Pinnacle Group UK privacy, real estate privacy policy, UK GDPR compliance"
      />
      <header className="bg-white border-b">
        <div className="max-w-4xl !mx-auto !px-6 !py-12 text-left">
          <div className="h-1 w-16 bg-[#7a1f2b] rounded-full !mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-[#7a1f2b]">Privacy Policy</h1>
          <p className="text-gray-600 !mt-2">Last Updated: August 2026</p>
        </div>
      </header>

      <main className="max-w-4xl !mx-auto !px-6 !py-12">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm !p-8 sm:!p-12 flex flex-col gap-8 text-left leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">1. Introduction & Data Controller</h2>
            <p className="text-gray-600 text-sm">
              At Pinnacle Group UK ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal data. Under the UK General Data Protection Regulation (UK GDPR), Pinnacle Group UK operates as the **Data Controller** for the personal data collected from users on this website (<a href="https://www.nriproperty.uk" className="text-[#7a1f2b] hover:underline font-medium">nriproperty.uk</a>).
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">2. Legal Basis for Processing</h2>
            <p className="text-gray-600 text-sm">
              We process your personal data under the following legal bases:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 flex flex-col gap-1.5 pl-2">
              <li><strong>Consent:</strong> When you check the consent checkboxes on our enquiry forms or choose to accept cookies.</li>
              <li><strong>Performance of a Contract:</strong> When processing is necessary to respond to your inquiry, perform title searches, or arrange real estate consultancy.</li>
              <li><strong>Legitimate Interests:</strong> To optimize our website experience, analyze visitor traffic, and maintain security.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">3. Personal Data We Collect</h2>
            <p className="text-gray-600 text-sm">
              When you submit a query or use our services, we collect:
            </p>
            <ul className="list-disc list-inside text-gray-600 text-sm mt-2 flex flex-col gap-1.5 pl-2">
              <li>Identity details (Name, country of residence).</li>
              <li>Contact details (Email address, phone/WhatsApp number).</li>
              <li>Details of your property location, requirements, or legal disputes in India.</li>
              <li>Anonymized web usage analytics (IP addresses, traffic data via Google GTM/Google Ads).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">4. International Transfers of Data (UK to India)</h2>
            <div className="bg-amber-50/50 border-l-4 border-amber-500 !p-4 rounded-r-xl">
              <p className="text-gray-700 text-sm font-semibold mb-1">INTERNATIONAL DATA TRANSFERS:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Because we facilitate property services in India, the information you submit in our enquiry forms will be securely transferred to our legal and real estate operations team in India. We employ standard contractual clauses and strict access control measures to ensure that your data receives an equivalent level of protection as mandated by UK GDPR.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">5. Data Retention</h2>
            <p className="text-gray-600 text-sm">
              We retain your personal information only for as long as is necessary to fulfill the purposes for which it was collected, including satisfying any legal, accounting, or reporting requirements. Consultation enquiry details are typically stored securely for up to 3 years to assist returning clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">6. Your Rights & Access</h2>
            <p className="text-gray-600 text-sm">
              Under UK GDPR, you have the right to request access to your personal data, request correction or deletion (the "right to be forgotten"), restrict processing, or request data portability. You can withdraw your consent to our cookies or storage at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">7. Lodging a Complaint (UK ICO)</h2>
            <p className="text-gray-600 text-sm">
              If you have concerns about how we handle your personal data, you have the right to lodge a complaint with the **Information Commissioner's Office (ICO)**, the UK supervisory authority for data protection issues (visit <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#7a1f2b] underline">ico.org.uk</a>). We would, however, appreciate the opportunity to resolve your concerns directly before you approach the ICO.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-[#7a1f2b] !mb-3">8. How to Contact Us</h2>
            <p className="text-gray-600 text-sm">
              Please email us at <a href="mailto:info@nriproperty.uk" className="text-[#7a1f2b] underline">info@nriproperty.uk</a> to request data deletion or to ask questions regarding this policy.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
