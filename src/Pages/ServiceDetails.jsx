import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShieldCheck,
  Building2,
  Users,
  Coins,
  Wrench,
  Eye,
  AlertTriangle,
  Receipt,
  FileCheck2,
  Scale,
  LayoutDashboard,
  ChevronDown,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  Home,
  FileText,
  KeyRound,
  ArrowUpRight,
} from "lucide-react";

import EnquiryForm from "../Components/Enquire";
import Footer from "../Components/Footer";
import ServicesSection from "../Components/Services";
import FreeConsultation from "../Components/helpCenter";
import SEO from "../Components/SEO";
import Breadcrumb from "../Components/Breadcrumb";
import RelatedServices from "../Components/RelatedServices";

const serviceData = {
  selling: {
    title: "Selling Property",
    seoTitle: "Sell Property in India from Abroad | NRI Selling Services",
    seoDescription:
      "End-to-end NRI property selling services in India. Valuation, verified buyers, legal documentation, POA sale, and repatriation support for UK clients.",
    description:
      "At Pinnacle Group, we offer end-to-end Selling Property Services designed especially for NRIs and Indian residents who want a smooth, secure, and profitable selling experience. Our process begins with accurate property valuation based on current market trends to ensure you receive the best possible price. We handle professional property listing, marketing, buyer inquiries, and site visit coordination. Every potential buyer is carefully screened to avoid fraud and unnecessary delays. Our experts manage price negotiations, agreement drafting, legal documentation, and coordination with banks and authorities. From token amount to final registry and handover, we maintain complete transparency at every stage. For NRIs living abroad, our dedicated on-ground team acts as your trusted local representative, providing regular updates through calls, WhatsApp, and email. With strong legal backing and market expertise, we help you sell your property faster, safely, and with maximum returns while you remain stress-free anywhere in the world.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Selling%20Property.jpg?updatedAt=1769753331725",
  },

  buying: {
    title: "Buying Property",
    seoTitle: "Buy Property in India from Abroad | NRI Buying Services",
    seoDescription:
      "Safe and verified property buying services in India for UK NRIs. Due diligence, title search, RERA checks, POA registration, and price negotiation.",
    description:
      "Buying property in India requires thorough verification, legal clarity, and strong local coordination. Our Buying Property Services are designed to make the entire journey safe and hassle-free for both NRIs and resident Indians. We assist with property shortlisting based on your budget, location preference, and investment goals. Our team arranges site visits, conducts background checks, and verifies land records, approvals, and ownership history. We perform detailed legal due diligence to ensure the property is free from disputes, loans, or encumbrances. From price negotiation and agreement drafting to stamp duty calculation and final registration, we manage every step professionally. Whether you are purchasing residential, commercial, or agricultural property, our experts focus on long-term value and risk-free ownership. With transparent communication and complete documentation support, we ensure your investment remains secure, profitable, and legally compliant.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Buying%20Property.jpg?updatedAt=1769753330238",
  },

  leasing: {
    title: "Leasing Property",
    seoTitle: "Leasing Property in India for NRIs | Verified Tenants & Rent",
    seoDescription:
      "Professional property leasing services in India for overseas owners. Tenant screening, registered leave & license agreements, and rent remittance to NRO accounts.",
    description:
      "Our Leasing Property Services help property owners and tenants connect through a secure and professionally managed process. We assist landlords in finding verified tenants while ensuring tenants receive legally compliant rental agreements. Our services include tenant background verification, rent negotiation, agreement drafting, registration, and move-in coordination. For property owners, especially NRIs, we aim to reduce vacancy periods and maximize rental income. We manage renewals, periodic follow-ups, and coordination between both parties to avoid conflicts. With access to a strong network of corporate and individual tenants, we ensure faster closures and reliable occupancy. Our team also supports rent structuring, security deposit handling, and documentation compliance. Whether residential or commercial leasing, our transparent and organized approach provides peace of mind and steady rental returns.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Leasing%20Property.jpg?updatedAt=1769753330380",
  },

  "buy-sell": {
    title: "Buy & Sell Assistance",
    seoTitle: "Buy & Sell Property in India from UK | NRI Property Experts",
    seoDescription:
      "End-to-end buy and sell support for UK NRIs with valuation, legal checks, documentation, and registry coordination in India.",
    description:
      "Our Buy & Sell Assistance service is specially designed for NRIs who require complete end-to-end property support in India. From the initial planning stage to final ownership transfer, our experts manage every detail on your behalf. We assist with property verification, valuation, market analysis, negotiation strategy, and documentation preparation. Whether you are buying your first property or selling an inherited asset, our team ensures legal accuracy and financial safety. We coordinate with lawyers, government offices, and buyers or sellers to prevent delays and miscommunication. Regular updates, transparent reporting, and digital documentation allow you to stay informed while living abroad. With strong on-ground execution and trusted legal expertise, we simplify complex transactions and ensure smooth property ownership transfer without stress or risk.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/buy&sell.png?updatedAt=1769753340851",
  },

  legal: {
    title: "Legal Litigation",
    seoTitle: "NRI Property Legal Services India | Dispute Resolution & Litigation",
    seoDescription:
      "Legal advice and court coordination for UK NRIs. Resolve title disputes, illegal possession, inheritance issues, partition, and power of attorney challenges.",
    description:
      "Our Legal Litigation Services provide strong legal protection for NRIs facing property-related challenges in India. We handle disputes involving ownership conflicts, illegal possession, inheritance matters, succession certificates, and partition cases. Our experienced legal team assists with power of attorney drafting, title verification, registration support, and fraud prevention. We represent clients before courts and government authorities while maintaining complete transparency. Each case is handled with detailed documentation review and strategic legal planning. Our goal is to protect your property rights, recover assets where required, and ensure long-term legal security. With continuous updates and professional guidance, we help NRIs resolve complex legal matters efficiently and confidently.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/legal.png?updatedAt=1769753343762",
  },

  management: {
    title: "NRI Property Management Services in India",
    seoTitle: "NRI Property Management in India | Tenants, Rent & Maintenance",
    seoDescription:
      "NRI property management in India from the UK. We handle tenants, maintenance, rent, inspections and reporting for owners abroad.",
    description:
      "Our Property Management Services are designed to give NRIs complete peace of mind while owning property in India. We act as your local representative and manage everything from routine inspections to tenant coordination. Services include maintenance supervision, repair management, rent collection, utility bill payments, society coordination, and compliance handling. We ensure your property remains secure, well-maintained, and income-generating. Regular reports, photographs, and financial updates keep you informed at all times. Whether your property is rented, vacant, or under renovation, our professional management ensures long-term value preservation and stress-free ownership.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Management.png?updatedAt=1769753343827",
  },

  title: {
    title: "Property Title Clearing",
    seoTitle: "Property Title Clearing & Verification in India for NRIs",
    seoDescription:
      "Complete title clearing and verification for NRI properties in India. Revenue records, mutation entries, encumbrance certificates, and dispute resolution.",
    description:
      "Property title issues can delay transactions and create long-term legal risks. Our Property Title Clearing Services help resolve ownership problems through proper legal verification and documentation. We assist with land record verification, mutation entries, inheritance updates, encumbrance removal, and correction of government records. Our legal experts coordinate with revenue departments and registrars to ensure your property title becomes legally clean and transferable. This service is essential before selling, buying, or repatriating property assets. With accurate documentation and professional handling, we help eliminate disputes and secure your ownership rights permanently.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/title%20Clearing.png?updatedAt=1769753345500",
  },

  finance: {
    title: "NRI Tax & Finance Support",
    seoTitle: "NRI Tax & Financial Advisory | Repatriation & Capital Gains",
    seoDescription:
      "Specialist NRI tax and finance guidance for Indian properties. Capital gains calculation, Section 195 TDS reduction, Form 15CA/15CB, and NRE/NRO banking.",
    description:
      "Our NRI Tax & Finance Support services help clients stay compliant with Indian taxation laws while maximizing financial benefits. We assist with capital gains tax planning, TDS calculation and filing, DTAA benefits, repatriation approvals, and rental income taxation. Our experts also guide you on NRO and NRE account structuring for smooth fund transfers. Whether selling property, earning rental income, or transferring funds abroad, we ensure proper documentation and legal compliance. With accurate tax planning and professional advice, we help you reduce liabilities and protect your earnings.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/tax.png?updatedAt=1769753346511",
  },

  support: {
    title: "24X7 Support",
    seoTitle: "24/7 NRI Property Support & Advisory | India & UK Desk",
    seoDescription:
      "Dedicated 24/7 property support desk for UK and overseas NRIs. Get real-time updates via phone, WhatsApp, and video consultation on Indian properties.",
    description:
      "Our 24X7 Support service ensures you receive timely assistance regardless of your country or time zone. Our dedicated team is available through phone, WhatsApp, email, and video consultation to address your queries instantly. From transaction updates to urgent property matters, we remain accessible at all times. This continuous support model allows NRIs to manage Indian properties confidently without delays or uncertainty. Your peace of mind is our priority, and our team is always just one message away.",
    image: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/24%20x%207.png?updatedAt=1769753346293",
  },
};

const managementFeatures = [
  {
    icon: Users,
    title: "Tenant Onboarding & Background Verification",
    desc: "Rigorous tenant screening including identity checks, employment validation, background verification, and police intimation filing for maximum tenant accountability.",
  },
  {
    icon: FileCheck2,
    title: "Lease Agreement Drafting & Registration",
    desc: "Legally enforceable Leave & License agreements drafted by property lawyers, incorporating protective clauses, digital signing, and official sub-registrar e-registration.",
  },
  {
    icon: Coins,
    title: "Rent Collection & Remittance to NRE/NRO",
    desc: "Automated monthly rent collection, digital receipts, persistent follow-up on overdue payments, and guidance on compliant crediting to your NRO or NRE accounts.",
  },
  {
    icon: Eye,
    title: "Periodic Inspections with Photo & Video Reports",
    desc: "Scheduled physical inspections conducted by our on-ground managers with high-resolution photo and video logs sent straight to your email or WhatsApp.",
  },
  {
    icon: Wrench,
    title: "Maintenance Supervision & Trusted Repairs",
    desc: "Prompt handling of plumbing, electrical, carpentry, and painting needs using verified local vendors, with itemized estimates pre-approved by you before any expenditure.",
  },
  {
    icon: ShieldCheck,
    title: "Vacant Property Care & Anti-Encroachment",
    desc: "Regular physical presence, perimeter audits, boundary checkups, key-holding services, and utility meter tracking to safeguard empty assets against unauthorized occupation.",
  },
  {
    icon: Receipt,
    title: "Utility Bills, Society Maintenance & Municipal Tax",
    desc: "Timely settlement of residential welfare society dues, municipal property taxes, water cess, and electricity bills to eliminate penalties and service cuts.",
  },
  {
    icon: AlertTriangle,
    title: "Tenant Move-In / Move-Out Condition Audits",
    desc: "Comprehensive photographic inventory audits before occupancy and at lease exit to reconcile security deposits accurately against genuine wear vs damages.",
  },
  {
    icon: Scale,
    title: "Dispute Prevention & Local Representation",
    desc: "Serving as your designated local representative to resolve neighbor queries, attend society meetings, and issue formal notices when contractual breaches occur.",
  },
  {
    icon: LayoutDashboard,
    title: "Transparent Digital Records & Financial Reports",
    desc: "Centralized repository for all lease documents, payment receipts, maintenance invoices, and tax filings for effortless annual accounting and peace of mind.",
  },
];

const managementFaqs = [
  {
    q: "How do you verify tenants before leasing my property in India?",
    a: "Every prospective tenant undergoes a multi-step screening process: government-issued ID verification (Aadhaar/PAN), proof of employment or corporate sponsor letter, permanent address verification, and mandatory local police intimation or verification according to state guidelines.",
  },
  {
    q: "How does rent collection work when I live in the UK?",
    a: "Tenants deposit monthly rent directly into your Indian NRO (Non-Resident Ordinary) bank account or via our secure rent collection system with automated digital receipts. We monitor payment timelines and issue formal reminders if delays occur, so you never have to chase payments remotely.",
  },
  {
    q: "What measures do you take to protect vacant properties from encroachment?",
    a: "Vacant homes and plots in India face heightened risk of illegal possession. We conduct bi-weekly or monthly on-site visits, post official advisory signage, maintain boundary fencing, inspect utility meters, collect physical mail, and provide GPS-tagged photographic proof of inspection to owners.",
  },
  {
    q: "How are maintenance requests and repair costs handled?",
    a: "Minor routine repairs under a pre-agreed threshold are resolved quickly. For larger repairs or refurbishments, we obtain itemized quotes from trusted local contractors, share photographic evidence of the issue with you, and only commence work upon your written approval.",
  },
  {
    q: "Can you assist with paying society maintenance and municipal property taxes?",
    a: "Yes. We track and settle regular housing society maintenance charges, municipal corporation property tax bills, water authority dues, and power charges, ensuring all receipts are logged in your records and no compounding interest penalties accrue.",
  },
  {
    q: "Do I need to travel to India to initiate property management services?",
    a: "No physical travel is required. Onboarding is completed 100% digitally through video consultations, electronic agreement signing, and authorization letters, allowing UK and overseas owners to hand over property oversight completely from abroad.",
  },
];

const managementRelatedLinks = [
  {
    to: "/buy-property-india-from-uk",
    title: "Buy Property in India from Abroad",
    tag: "Buying Guide",
    description: "Guidance on legal due diligence, title verification, and remote registry from the UK.",
    icon: Home,
  },
  {
    to: "/sell-property-india-from-uk",
    title: "Sell Property in India from Abroad",
    tag: "Selling Guide",
    description: "Valuation, buyer screening, 195 TDS reduction certificates, and repatriation support.",
    icon: ArrowUpRight,
  },
  {
    to: "/lease-property-india-for-nri",
    title: "Lease Property in India for NRIs",
    tag: "Tenancy Service",
    description: "Tenant sourcing, police verification, and compliant registered rent agreements.",
    icon: KeyRound,
  },
  {
    to: "/nri-property-legal-litigation-india",
    title: "NRI Legal & Litigation Support",
    tag: "Legal Counsel",
    description: "Resolve title conflicts, illegal encroachment, partition suits, and court matters.",
    icon: Scale,
  },
  {
    to: "/nri-property-documentation-services",
    title: "Documentation & Title Verification",
    tag: "Documentation",
    description: "Power of Attorney drafting, title search reports, mutation, and registry paperwork.",
    icon: FileText,
  },
  {
    to: "/contact",
    title: "Book a Free NRI Property Consultation",
    tag: "Consultation",
    description: "Speak directly with our UK-India property advisors for personalized guidance.",
    icon: PhoneCall,
  },
];

export default function ServiceDetails() {
  const { serviceType } = useParams();
  const normalizedKey = serviceType?.toLowerCase();
  const service = serviceData[normalizedKey];
  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <>
        <SEO
          title="Service Not Found | NRI Property Services"
          description="The service you're looking for does not exist. Contact us for custom NRI real estate assistance in India."
          path="/service-details"
          noIndex
        />
        <div className="!m-5 !p-8 bg-red-50 border border-red-200 text-red-700 rounded-2xl text-center max-w-xl mx-auto !my-16">
          <h2 className="text-2xl font-bold">Service Not Found</h2>
          <p className="!mt-2 text-sm text-slate-600">The requested service link could not be located. Explore our comprehensive services hub or speak with our advisory team.</p>
          <div className="!mt-6 flex justify-center gap-3">
            <Link to="/nri-services" className="px-5 py-2.5 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700">
              View All NRI Services
            </Link>
            <Link to="/contact" className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50">
              Contact Advisory
            </Link>
          </div>
        </div>
        <ServicesSection />
        <Footer />
      </>
    );
  }

  const isManagement = normalizedKey === "management";

  const seoTitle = service.seoTitle || `${service.title} for NRIs | NRI Property Services`;
  const seoDescription = service.seoDescription || service.description.slice(0, 160);
  const canonicalPath = `/service-details/${normalizedKey}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "Pinnacle Group UK",
          url: "https://www.nriproperty.uk",
        },
        areaServed: ["United Kingdom", "India", "United States", "Canada", "Europe", "Australia"],
      },
      ...(isManagement
        ? [
            {
              "@type": "FAQPage",
              mainEntity: managementFaqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: f.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        path={canonicalPath}
        image={service.image}
        type="article"
        keywords={`${service.title} for NRIs, ${service.title} in India, NRI property services UK, property management in India for NRIs, NRI rental management, property care India`}
        breadcrumbs={[
          { name: "NRI Services", path: "/nri-services" },
          { name: isManagement ? "Property Management" : service.title, path: canonicalPath },
        ]}
        structuredData={structuredData}
      />
      <FreeConsultation />

      <main className="max-w-6xl !mx-auto !px-4 sm:!px-6 !py-8">
        <Breadcrumb
          currentPage={isManagement ? "Property Management" : service.title}
          customMiddle={{ name: "NRI Services", path: "/nri-services" }}
        />

        {/* HERO SECTION */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 !p-6 sm:!p-10 shadow-sm">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fae9ec] !px-3.5 !py-1 text-xs font-bold text-[#9d1c1a] uppercase tracking-wider !mb-3">
              <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
              Professional NRI Support
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102a4c] tracking-tight leading-tight">
              {isManagement ? "NRI Property Management Services in India" : `${service.title} for NRIs`}
            </h1>
            <p className="!mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              {isManagement
                ? "Dedicated end-to-end property oversight in India tailored for Non-Resident Indians in the UK, USA, Canada, and Europe. We manage tenant vetting, rent collection, routine physical inspections, maintenance repairs, and asset protection so you remain completely stress-free."
                : service.description}
            </p>

            <div className="!mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#9d1c1a] text-white !px-6 !py-3 text-sm font-semibold shadow hover:bg-[#801614] transition-all"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/447442111105?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20NRI%20Property%20Management%20Services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-600 bg-white !px-6 !py-3 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-all"
              >
                <span>WhatsApp Advisor</span>
              </a>
            </div>
          </div>
        </section>

        {/* PROPERTY MANAGEMENT SPECIFIC DETAILED CONTENT */}
        {isManagement && (
          <>
            {/* 10 CORE MANAGEMENT SERVICES */}
            <section className="!mt-12">
              <div className="text-center max-w-2xl !mx-auto !mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">Complete Coverage</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#102a4c] !mt-1">
                  10 Key Aspects of Our Property Management Service
                </h2>
                <p className="text-sm text-slate-600 !mt-2">
                  Transparent, professional, and on-the-ground representation across major Indian metropolitan hubs and Tier-1 cities.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
                {managementFeatures.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={feat.title}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white !p-6 shadow-sm hover:border-[#9d1c1a]/40 hover:shadow-md transition-all"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#fae9ec] text-[#9d1c1a]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#9d1c1a]">0{idx + 1}.</span>
                          <h3 className="text-base font-bold text-slate-800">{feat.title}</h3>
                        </div>
                        <p className="text-sm text-slate-600 !mt-2 leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* VACANT PROPERTY CARE HIGHLIGHT */}
            <section className="!mt-12 rounded-3xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 !p-6 sm:!p-8 shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 !px-3 !py-1 text-xs font-bold text-amber-900 uppercase tracking-wide !mb-2">
                    <ShieldCheck className="h-4 w-4 text-amber-700" aria-hidden="true" />
                    Specialized Protection for Unoccupied Real Estate
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    Vacant Property Care & Anti-Encroachment Monitoring
                  </h2>
                  <p className="!mt-2 text-sm text-slate-700 leading-relaxed">
                    Unattended properties and plots in India are susceptible to encroachment, unlawful possession, unauthorized utility tapping, and structural decay. We assign a local representative who conducts routine perimeter audits, inspects locks, verifies fence integrity, posts warning boards, and provides digital geo-tagged inspection reports to the owner abroad.
                  </p>
                  <ul className="!mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Regular physical boundary & lock checks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Legal advisory warning boards installation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Municipal tax & utility dues monitoring</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                      <span>Immediate notification of local issues</span>
                    </li>
                  </ul>
                </div>
                <div className="shrink-0 w-full lg:w-auto">
                  <Link
                    to="/contact"
                    className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-xl bg-slate-900 text-white !px-6 !py-3.5 text-sm font-semibold hover:bg-slate-800 transition-colors shadow"
                  >
                    <span>Secure Your Vacant Property</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="!mt-12">
              <div className="text-center max-w-xl !mx-auto !mb-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">Answers & Guidance</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#102a4c] !mt-1">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-slate-600 !mt-1">
                  Common questions from NRIs living in the UK, USA, Canada, and Europe regarding Indian property oversight.
                </p>
              </div>

              <div className="max-w-3xl !mx-auto space-y-3">
                {managementFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={faq.q}
                      className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full flex items-center justify-between !p-4 sm:!p-5 text-left text-sm sm:text-base font-semibold text-slate-900 hover:text-[#9d1c1a] transition-colors"
                        aria-expanded={isOpen}
                      >
                        <span className="pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#9d1c1a]" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && (
                        <div className="!px-4 !pb-4 sm:!px-5 sm:!pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 !pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {/* DEFAULT SERVICE CONTENT FOR NON-MANAGEMENT SERVICES */}
        {!isManagement && (
          <div className="!my-10 rounded-2xl border border-slate-200 bg-white !p-6 sm:!p-8 shadow-sm">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5">
                <img
                  src={service.image}
                  alt={`${service.title} in India for NRIs`}
                  className="w-full h-auto rounded-xl object-cover shadow-sm border border-slate-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl font-bold text-[#102a4c]">Overview & NRI Representation</h2>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{service.description}</p>
                <div className="!pt-4 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#9d1c1a] text-white !px-5 !py-2.5 text-sm font-semibold hover:bg-[#801614] transition-colors"
                  >
                    <span>Request Legal & Service Consultation</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                  <Link
                    to="/service-details/management"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-700 !px-5 !py-2.5 text-sm font-semibold hover:bg-slate-50 transition-colors"
                  >
                    <span>Explore NRI Property Management</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* RELATED SERVICES INTERNAL LINKING BLOCK */}
        <RelatedServices links={managementRelatedLinks} />
      </main>

      <ServicesSection />
      <EnquiryForm />
      <Footer />
    </>
  );
}
