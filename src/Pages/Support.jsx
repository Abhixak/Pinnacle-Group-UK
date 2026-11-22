import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/Enquire";
import SEO from "../Components/SEO";
import {
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Scale,
  FileCheck2,
  Building2,
  Landmark,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  Globe,
  Lock,
  Headphones,
  Calendar,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const globalContacts = [
  {
    country: "United Kingdom",
    flag: "🇬🇧",
    number: "+44 7868 143558",
    tel: "tel:+447868143558",
    wa: "https://wa.me/447868143558?text=Hello%20Pinnacle%20Support%2C%20I%20am%20contacting%20from%20the%20UK%20regarding%20NRI%20property%20assistance.",
    tag: "Primary UK Desk",
    isPrimary: true,
  },
  {
    country: "India",
    flag: "🇮🇳",
    number: "+91 92163 99808",
    tel: "tel:+919216399808",
    wa: "https://wa.me/919216399808?text=Hello%20Pinnacle%20Support%2C%20I%20need%20on-ground%20property%20support%20in%20India.",
    tag: "Legal & Operations",
    isPrimary: false,
  },
  {
    country: "Canada",
    flag: "🇨🇦",
    number: "+1 613 295 6385",
    tel: "tel:+16132956385",
    wa: "https://wa.me/16132956385?text=Hello%20Pinnacle%20Support%2C%20I%20am%20contacting%20from%20Canada%20regarding%20property%20in%20India.",
    tag: "North America Line",
    isPrimary: false,
  },
  {
    country: "United States",
    flag: "🇺🇸",
    number: "+1 414 690 6435",
    tel: "tel:+14146906435",
    wa: "https://wa.me/14146906435?text=Hello%20Pinnacle%20Support%2C%20I%20am%20contacting%20from%20the%20USA%20regarding%20property%20in%20India.",
    tag: "US Advisory Line",
    isPrimary: false,
  },
  {
    country: "Europe",
    flag: "🇪🇺",
    number: "+49 155 6303 0611",
    tel: "tel:+4915563030611",
    wa: "https://wa.me/4915563030611?text=Hello%20Pinnacle%20Support%2C%20I%20am%20contacting%20from%20Europe%20regarding%20property%20in%20India.",
    tag: "EU Client Desk",
    isPrimary: false,
  },
];

const supportDomains = [
  {
    title: "Property Disputes & Litigation",
    icon: Scale,
    description:
      "Expert legal counsel for boundary conflicts, illegal encroachment, tenant eviction, and civil title disputes across all Indian courts.",
    features: [
      "Court case tracking & representation",
      "Stay orders & police complaints",
      "Ancestral partition resolution",
    ],
    cardBg: "bg-white border-blue-200/90 hover:border-blue-400 hover:shadow-md",
    iconBg: "bg-blue-50 text-blue-700 border border-blue-200",
  },
  {
    title: "Documentation & Title Due Diligence",
    icon: FileCheck2,
    description:
      "In-depth 30-year revenue title search, encumbrance certificate (EC) retrieval, and verification of original land ownership papers.",
    features: [
      "Mutation & Khata / Jamabandi records",
      "Encumbrance certificate search",
      "RERA & local authority verification",
    ],
    cardBg: "bg-white border-emerald-200/90 hover:border-emerald-400 hover:shadow-md",
    iconBg: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  },
  {
    title: "Power of Attorney (POA / SPA)",
    icon: ShieldCheck,
    description:
      "Draft, execute, and register legally binding General or Special Power of Attorney from the UK without requiring travel to India.",
    features: [
      "Hague Apostille & consular stamping",
      "Tailored POA drafting for property sale",
      "Local Sub-Registrar registration",
    ],
    cardBg: "bg-white border-amber-200/90 hover:border-amber-400 hover:shadow-md",
    iconBg: "bg-amber-50 text-amber-700 border border-amber-200",
  },
  {
    title: "Tax, FEMA & Repatriation (15CA/CB)",
    icon: Landmark,
    description:
      "Cross-border tax planning, lower TDS deduction certificates, and Chartered Accountant certification for safe repatriation to UK bank accounts.",
    features: [
      "Form 15CA & 15CB CA certification",
      "Capital gains tax calculation",
      "NRO to NRE / UK account transfers",
    ],
    cardBg: "bg-white border-rose-200/90 hover:border-rose-400 hover:shadow-md",
    iconBg: "bg-rose-50 text-rose-700 border border-rose-200",
  },
  {
    title: "Tenancy & Asset Management",
    icon: Building2,
    description:
      "Complete hands-off oversight for residential and commercial assets in India, including tenant screening, rental collection, and maintenance.",
    features: [
      "Verified lease deed drafting",
      "Periodic physical property visits",
      "Timely rent collection & monitoring",
    ],
    cardBg: "bg-white border-indigo-200/90 hover:border-indigo-400 hover:shadow-md",
    iconBg: "bg-indigo-50 text-indigo-700 border border-indigo-200",
  },
  {
    title: "Emergency Advisory & Case Review",
    icon: Headphones,
    description:
      "Urgent case review if you have received legal notices, tax inquiries, or suspicious claims regarding your properties in India.",
    features: [
      "Immediate senior advocate opinion",
      "24-48 hr fast-track document review",
      "Strategic defense action plan",
    ],
    cardBg: "bg-white border-purple-200/90 hover:border-purple-400 hover:shadow-md",
    iconBg: "bg-purple-50 text-purple-700 border border-purple-200",
  },
];

const resolutionSteps = [
  {
    step: "01",
    title: "Case Assessment & NDA",
    desc: "Connect via phone, WhatsApp, or form. Share property details under strict non-disclosure agreement (NDA) confidentiality.",
  },
  {
    step: "02",
    title: "Local On-Ground Investigation",
    desc: "Our verified advocates and land surveyors physically inspect registry offices, court records, and the site in India.",
  },
  {
    step: "03",
    title: "Resolution with Zero Travel",
    desc: "We manage legal proceedings, registrations, or sales transactions end-to-end while you receive regular UK status updates.",
  },
];

const faqs = [
  {
    q: "Can I resolve property litigation in India from the UK without travelling?",
    a: "Yes. By executing a properly drafted and apostilled Special Power of Attorney (SPA) from the UK, our authorized senior advocates represent you in Indian courts, file pleadings, and manage appearances on your behalf with zero travel required.",
  },
  {
    q: "How do I execute a Power of Attorney (POA) for Indian property in the UK?",
    a: "Our UK legal team drafts the POA specifically tailored to your property. You sign it before a UK Notary Public or the Indian High Commission in London / Birmingham, get it apostilled by the UK FCDO, and our team registers it with the Sub-Registrar in India.",
  },
  {
    q: "What is the typical timeframe for a property title search in India?",
    a: "A standard 30-year comprehensive title search and encumbrance verification typically takes between 5 to 7 business days, depending on whether records are digitized in that state's Sub-Registrar office.",
  },
  {
    q: "How do you assist with repatriating sale proceeds back to my UK account?",
    a: "We assist through licensed Chartered Accountants to secure Lower TDS Certificates from the Indian Income Tax Department, prepare Form 15CA and Form 15CB, and coordinate with your NRO bank for compliant outward remittance to your UK bank.",
  },
  {
    q: "How do you protect vacant Indian properties against illegal encroachment?",
    a: "We install legal warning signage, conduct quarterly verified physical inspections with geo-tagged photographic reports, verify municipality land tax receipts, and initiate prompt injunctive relief if any unauthorized activity is detected.",
  },
  {
    q: "How quickly does the Pinnacle UK support team respond?",
    a: "Our UK and global hotlines are available daily. All online enquiry submissions receive an initial evaluation and direct response from a senior relationship manager within 2 to 4 business hours.",
  },
];

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const scrollToContact = () => {
    document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-[#7a1f2b] selection:text-white">
      <SEO
        title="NRI Property Help & Support UK | Legal, Title Search, Disputes & Management"
        description="Dedicated NRI property support for UK & global clients. 24/7 legal counsel, title clearing, Power of Attorney, funds repatriation, and property management in India."
        path="/support"
        keywords="NRI property support UK, NRI legal help India, NRI property disputes London, POA execution UK, 15CA 15CB repatriation, Indian property management from UK"
        breadcrumbs={[{ name: "Help & Support", path: "/support" }]}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "NRI Property Help & Support Desk",
          description: "24/7 dedicated support desk for UK and global NRIs managing, buying, selling, or litigating property in India.",
          url: "https://www.nriproperty.uk/support",
          mainEntity: {
            "@type": "Organization",
            name: "Pinnacle Group UK",
            telephone: "+44-7868143558",
            email: "info@nriproperty.uk",
          },
        }}
      />

      {/* ================= LIGHT HERO HEADER ================= */}
      <section className="relative bg-gradient-to-b from-white via-[#f7f9fd] to-[#eef3f9] border-b border-slate-200/80 !pt-10 sm:!pt-14 !pb-12 sm:!pb-16 !px-4 sm:!px-6 lg:!px-8 overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-100/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl !mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 !mb-4">
            <Link to="/" className="hover:text-slate-800 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#7a1f2b] font-medium">Help & Support</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 !px-3.5 !py-1.5 rounded-full bg-[#7a1f2b]/10 border border-[#7a1f2b]/20 text-xs font-semibold text-[#7a1f2b] !mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Dedicated UK & Global NRI Support Desk</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-3xl leading-tight">
            Comprehensive Property Support for{" "}
            <span className="text-[#7a1f2b]">UK & Global NRIs</span>
          </h1>

          <p className="!mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Resolve property disputes, clear titles, execute Power of Attorney,
            and manage Indian real estate seamlessly with zero travel required.
          </p>

          {/* Trust Value Badges Strip */}
          <div className="!mt-7 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-center gap-2 bg-white border border-slate-200/90 rounded-lg !px-3.5 !py-2 shadow-2xs">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>2–4 Hr Response Guarantee</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200/90 rounded-lg !px-3.5 !py-2 shadow-2xs">
              <Lock className="w-4 h-4 text-emerald-600" />
              <span>100% Legal Confidentiality</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200/90 rounded-lg !px-3.5 !py-2 shadow-2xs">
              <Scale className="w-4 h-4 text-blue-600" />
              <span>Senior High Court Advocates</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-slate-200/90 rounded-lg !px-3.5 !py-2 shadow-2xs">
              <Globe className="w-4 h-4 text-[#7a1f2b]" />
              <span>5 Global Country Desks</span>
            </div>
          </div>

          {/* Quick Action Navigation Buttons */}
          <div className="!mt-8 flex flex-wrap items-center gap-3">
            <a
              href="tel:+447868143558"
              className="inline-flex items-center gap-2 !px-5 !py-3 rounded-xl bg-gradient-to-r from-[#7a1f2b] to-[#9d1c1a] text-white font-semibold text-sm shadow-md hover:brightness-105 active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call UK Desk: +44 7868 143558</span>
            </a>

            <button
              type="button"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 !px-5 !py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm shadow-2xs active:scale-95 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#7a1f2b]" />
              <span>Submit Enquiry Form</span>
            </button>

            <a
              href="https://wa.me/447868143558?text=Hello%20Pinnacle%20Support%2C%20I%20am%20seeking%20property%20assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 !px-5 !py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-2xs active:scale-95 transition-all"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="max-w-6xl !mx-auto !px-4 sm:!px-6 lg:!px-8 !pt-10 !space-y-14 !pb-16">
        {/* ================= GLOBAL SUPPORT HOTLINES ================= */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm !p-6 sm:!p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 !pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7a1f2b] !mb-1">
                <Globe className="w-4 h-4" />
                <span>Global Contact Centers</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900">
                Direct Regional Helplines
              </h2>
              <p className="text-sm text-slate-600 !mt-1">
                Call or message our specialized NRI property desks across the globe.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 !px-3 !py-1.5 rounded-full text-xs font-medium self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Lines Open for UK & International Callers</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 !mt-6">
            {globalContacts.map((contact, i) => (
              <div
                key={i}
                className={`relative flex flex-col justify-between !p-5 rounded-xl border transition-all duration-200 ${contact.isPrimary
                  ? "bg-gradient-to-br from-[#fdf7f7] to-white border-[#7a1f2b]/35 shadow-sm ring-1 ring-[#7a1f2b]/15"
                  : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 !mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl" role="img" aria-label={contact.country}>
                        {contact.flag}
                      </span>
                      <h3 className="font-bold text-slate-900 text-base">
                        {contact.country}
                      </h3>
                    </div>
                    <span
                      className={`text-[10px] font-semibold !px-2 !py-0.5 rounded-full ${contact.isPrimary
                        ? "bg-[#7a1f2b] text-white"
                        : "bg-slate-100 text-slate-700"
                        }`}
                    >
                      {contact.tag}
                    </span>
                  </div>

                  <p className="text-lg font-bold text-[#7a1f2b] tracking-wide !mt-2">
                    {contact.number}
                  </p>
                  <p className="text-xs text-slate-500 !mt-0.5">
                    Direct phone & WhatsApp support
                  </p>
                </div>

                <div className="flex items-center gap-2 !mt-5 !pt-4 border-t border-slate-100">
                  <a
                    href={contact.tel}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 !px-3 !py-2 rounded-lg bg-[#1d3d4f] hover:bg-[#152e3c] text-white text-xs font-semibold shadow-2xs active:scale-95 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={contact.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 !px-3 !py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-2xs active:scale-95 transition-all"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Notice */}
          <div className="!mt-6 !p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-slate-700">
              <Mail className="w-4 h-4 text-[#7a1f2b]" />
              <span>Official Support Email:</span>
              <a
                href="mailto:info@nriproperty.uk"
                className="font-semibold text-[#7a1f2b] hover:underline"
              >
                info@nriproperty.uk
              </a>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              <span>Monday – Saturday: 9:00 AM – 7:00 PM (GMT & IST)</span>
            </div>
          </div>
        </section>

        {/* ================= CORE SUPPORT PILLARS ================= */}
        <section className="!space-y-6">
          <div className="text-center max-w-2xl !mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a1f2b] bg-[#7a1f2b]/10 border border-[#7a1f2b]/15 !px-3 !py-1 rounded-full !mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>End-to-End Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How Can Our Advisory Team Assist You?
            </h2>
            <p className="text-sm text-slate-600 !mt-2">
              From contentious disputes to smooth title mutations, we safeguard
              your real estate investments in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {supportDomains.map((domain, i) => {
              const IconComp = domain.icon;
              return (
                <div
                  key={i}
                  className={`rounded-2xl border !p-6 flex flex-col justify-between transition-all duration-300 ${domain.cardBg}`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center !mb-4 ${domain.iconBg}`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 !mb-2">
                      {domain.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed !mb-4">
                      {domain.description}
                    </p>

                    <ul className="space-y-2 border-t border-slate-100 !pt-3">
                      {domain.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs text-slate-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={scrollToContact}
                    className="!mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#7a1f2b] hover:text-[#9d1c1a] group cursor-pointer"
                  >
                    <span>Request support for this</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= HOW SUPPORT WORKS (LIGHT THEME) ================= */}
        <section className="bg-white border border-slate-200/90 rounded-2xl !p-6 sm:!p-10 shadow-sm">
          <div className="max-w-2xl !mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#7a1f2b]">
              Clear & Transparent Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold !mt-1 text-slate-900">
              How We Resolve Your Property Matters
            </h2>
            <p className="text-sm text-slate-600 !mt-2">
              Our 3-step structured engagement ensures you remain in complete
              control of your Indian properties while residing in the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resolutionSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] border border-slate-200 rounded-xl !p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#7a1f2b]/40 !mb-2 font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 !mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="!mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Guaranteed Execution</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= ENQUIRY FORM EMBEDDED ================= */}
        <section className="scroll-!mt-10" id="Contact">
          <div className="text-center max-w-2xl !mx-auto !mb-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#7a1f2b] bg-[#7a1f2b]/10 border border-[#7a1f2b]/15 !px-3 !py-1 rounded-full !mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Fast-Track Response</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Submit Your Case Details
            </h2>
            <p className="text-sm text-slate-600 !mt-1">
              Provide brief details regarding your Indian property. Our senior
              advisor will review and arrange a call with you.
            </p>
          </div>

          <EnquiryForm />
        </section>

        {/* ================= INTERACTIVE FAQ SECTION ================= */}
        <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm !p-6 sm:!p-8">
          <div className="max-w-2xl !mb-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7a1f2b] !mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>Support Knowledge Base</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 !mt-1">
              Answers to critical questions UK clients ask regarding legal
              powers, litigation, and property management in India.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between !p-4 sm:!p-5 text-left bg-slate-50/70 hover:bg-slate-100/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-900 !pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#7a1f2b]" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="!p-4 sm:!p-5 text-xs sm:text-sm text-slate-600 bg-white border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= DIRECT URGENT HELP BANNER (LIGHT ACCENT THEME) ================= */}
        <section className="bg-gradient-to-br from-[#fff7f8] via-[#fcf1f3] to-[#fbf5f6] border-2 border-[#7a1f2b]/25 rounded-2xl !p-6 sm:!p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 !px-3 !py-1 rounded-full bg-[#7a1f2b]/10 border border-[#7a1f2b]/20 text-xs font-bold text-[#7a1f2b] !mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Immediate Support Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Have an Urgent Notice or Legal Issue in India?
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 !mt-1">
              Speak directly with our senior consultant to safeguard your rights
              before deadlines elapse.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:+447868143558"
              className="inline-flex items-center gap-2 !px-5 !py-3 rounded-xl bg-[#7a1f2b] hover:bg-[#631822] text-white font-bold text-sm shadow-sm active:scale-95 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call +44 7868 143558</span>
            </a>

            <a
              href="mailto:info@nriproperty.uk"
              className="inline-flex items-center gap-2 !px-4 !py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm shadow-2xs active:scale-95 transition-all"
            >
              <Mail className="w-4 h-4 text-[#7a1f2b]" />
              <span>Email Support</span>
            </a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default Support;
