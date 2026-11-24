import { createElement } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  ClipboardCheck,
  FileSearch,
  Handshake,
  Headphones,
  Home,
  KeyRound,
  MessageSquareText,
  PhoneCall,
  Scale,
  Settings2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/Enquire";
import FreeConsultation from "../Components/helpCenter";
import SEO from "../Components/SEO";
import Breadcrumb from "../Components/Breadcrumb";

const coreHubServices = [
  {
    id: "buy",
    title: "Buy Property in India",
    to: "/buy-property-india-from-uk",
    tag: "Remote Purchase",
    description:
      "A-grade residential and commercial asset shortlisting, builder legal audits, price negotiation, remote POA execution, and registration coordination.",
    highlights: ["RERA & builder verification", "Remote Power of Attorney purchase", "NRE/NRO remittance guidance"],
    icon: Home,
  },
  {
    id: "sell",
    title: "Sell Property in India",
    to: "/sell-property-india-from-uk",
    tag: "Exit Strategy",
    description:
      "Defensible market valuation, qualified buyer screening, legal documentation, Section 195 TDS planning, and 15CA/15CB fund repatriation to the UK.",
    highlights: ["Fair market valuation", "100% remote sale completion", "Repatriation & tax compliance"],
    icon: TrendingUp,
  },
  {
    id: "lease",
    title: "Lease Property in India",
    to: "/lease-property-india-for-nri",
    tag: "Tenancy Management",
    description:
      "Corporate and vetted tenant placement, registered 11-month lease agreements, timely rental collections, and zero-vacancy targets.",
    highlights: ["Tenant police & background checks", "Registered lease drafting", "Escrow & rent collection"],
    icon: KeyRound,
  },
  {
    id: "management",
    title: "NRI Property Management",
    to: "/service-details/management",
    tag: "Asset Care",
    description:
      "Comprehensive on-ground asset care for vacant, rented, or ancestral properties across Indian metros with quarterly photo reports.",
    highlights: ["Quarterly geo-tagged photo inspections", "Tenant coordination & repairs", "Encroachment protection"],
    icon: Building2,
  },
  {
    id: "legal",
    title: "Legal & Documentation Support",
    to: "/nri-property-legal-litigation-india",
    tag: "Disputes & POA",
    description:
      "Expert legal liaison for title conflicts, illegal possession recovery, succession certificates, family partition suits, and High Court representation.",
    highlights: ["Power of Attorney drafting & consular attestation", "Partition & inheritance assistance", "High Court & civil court liaison"],
    icon: Scale,
  },
  {
    id: "title",
    title: "Property Verification & Title Search",
    to: "/service-details/title",
    tag: "Due Diligence",
    description:
      "Rigorous 30-year chain-of-title verification, Encumbrance Certificate (EC) search, mutation entry checks, and revenue record clearance.",
    highlights: ["30-year Sub-Registrar record search", "Khata, Patta & mutation verification", "Independent advocate title report"],
    icon: FileSearch,
  },
  {
    id: "contact",
    title: "Contact or Free Consultation",
    to: "/contact",
    tag: "1-on-1 Guidance",
    description:
      "Speak directly with our UK and India property advisory team for transparent guidance and a personalized roadmap for your property matter.",
    highlights: ["24-hour response across time zones", "UK & India telephone support", "Confidential property review"],
    icon: PhoneCall,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your property location, current situation and desired outcome through our confidential consultation form.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Consult with an expert",
    description:
      "We review your property records, identify relevant legal and physical checks, and explain practical solutions.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Approve a clear action plan",
    description:
      "You receive the exact scope of work, required documents, estimated timelines, and transparent terms before work begins.",
    icon: Check,
  },
  {
    number: "04",
    title: "Track execution remotely",
    description:
      "Our on-ground specialists coordinate the work in India while you receive clear updates and maintain complete control.",
    icon: Settings2,
  },
];

const NRI_Services = () => (
  <>
    <SEO
      title="NRI Property Services in India | Complete On-Ground & Legal Solutions"
      description="Central service hub for Non-Resident Indians: buying, selling, leasing, property management, title clearance, legal litigation, and tax repatriation."
      path="/nri-services"
      keywords="NRI property services India, buy property in India from UK, sell property in India, lease property India for NRI, NRI property management India, legal documentation support, property verification India"
      breadcrumbs={[{ name: "NRI Services", path: "/nri-services" }]}
    />
    <FreeConsultation />

    <main className="bg-white text-slate-800">
      <section className="relative overflow-hidden border-y border-slate-100 bg-[#f7f8fb]">
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#9d1c1a]/5" />
        <div className="max-w-7xl !mx-auto !px-6 !py-12 md:!py-16 text-center lg:!px-10">
          <div className="flex justify-center !mb-4">
            <Breadcrumb currentPage="NRI Services" customMiddle={null} />
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">
            Central NRI Services Hub
          </p>
          <h1 className="max-w-4xl !mx-auto !mt-3 text-3xl font-bold leading-tight text-[#1d3048] sm:text-4xl md:text-5xl">
            Complete Property Services in India
            <span className="block text-[#9d1c1a]">For Overseas Owners & Buyers</span>
          </h1>
          
          {/* Introduction explaining how these services help remote owners */}
          <div className="max-w-3xl !mx-auto !mt-6 text-sm sm:text-base leading-relaxed text-slate-600 bg-white/80 border border-slate-200/80 rounded-2xl !p-5 sm:!p-6 text-left shadow-xs">
            <p className="font-semibold text-slate-800 !mb-2">How Our Central Hub Supports NRIs Living Abroad:</p>
            <p>
              Managing Indian real estate from the UK, USA, Canada, or Europe presents significant challenges across time zones, local bureaucracy, and complex tenancy and property laws. Our central service hub connects overseas owners, buyers, and families with dedicated on-ground specialists and verified legal advocates in India. Whether you need proactive tenant placement, physical inspections, remote sale completion, title clearing, or Power of Attorney support, every service is delivered transparently without requiring you to travel.
            </p>
          </div>

          <div className="!mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-xl bg-[#9d1c1a] !px-6 !py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#761520] text-sm"
            >
              <span>Explore All 7 Core Services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white !px-6 !py-3 font-semibold text-[#1d3048] transition-colors duration-200 hover:border-[#9d1c1a] hover:text-[#9d1c1a] text-sm"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="scroll-mt-28 max-w-7xl !mx-auto !px-6 !py-14 md:!py-18 lg:!px-10">
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">
            Core Solutions
          </p>
          <h2 className="!mt-2 text-2xl sm:text-3xl font-bold text-[#1d3048] md:text-4xl">
            Choose the Support You Need in India
          </h2>
          <p className="!mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Every service is backed by transparent agreements, digital milestones, and dedicated relationship management across UK and India working hours.
          </p>
        </div>

        <div className="!mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coreHubServices.map((service) => (
            <article
              key={service.id}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white !p-6 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#9d1c1a]/40 hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between !mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9d1c1a]/10 text-[#9d1c1a]">
                    {createElement(service.icon, { className: "h-6 w-6", "aria-hidden": true })}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#9d1c1a] bg-[#fae9ec] !px-2.5 !py-1 rounded-full">
                    {service.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1d3048] group-hover:text-[#9d1c1a] transition-colors">
                  {service.title}
                </h3>
                <p className="!mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="!mt-4 space-y-2 border-t border-slate-100 !pt-3">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2 text-xs text-slate-600">
                      <Check
                        className="!mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9d1c1a]"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={service.to}
                className="!mt-6 inline-flex items-center gap-2 self-start font-semibold text-xs sm:text-sm text-[#9d1c1a] transition-colors hover:text-[#6f1320]"
              >
                <span>View service details</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 border-y border-slate-200 !py-14 md:!py-18">
        <div className="max-w-7xl !mx-auto !px-6 lg:!px-10">
          <div className="text-center max-w-2xl !mx-auto !mb-12">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">
              Transparent Execution
            </p>
            <h2 className="!mt-2 text-2xl sm:text-3xl font-bold text-[#1d3048]">
              How We Work With NRIs Remotely
            </h2>
            <p className="!mt-3 text-sm text-slate-600">
              Four straightforward steps from initial inquiry to complete on-ground resolution.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200/80 bg-white !p-6 shadow-xs relative"
              >
                <span className="text-3xl font-serif font-bold text-slate-200 absolute top-4 right-4">
                  {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9d1c1a]/10 text-[#9d1c1a] !mb-4">
                  {createElement(step.icon, { className: "h-5 w-5" })}
                </div>
                <h3 className="font-bold text-[#1d3048] text-base">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 !mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Anchor Section */}
      <section id="consultation" className="scroll-mt-24 !py-10">
        <EnquiryForm />
      </section>

      <Footer />
    </main>
  </>
);

export default NRI_Services;
