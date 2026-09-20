import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  ArrowUpRight,
  KeyRound,
  Scale,
  FileText,
  PiggyBank,
  ShieldCheck,
  ClipboardCheck,
  Users,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import Footer from "../Components/Footer";
import FreeConsultation from "../Components/FreeConsultation";
import SEO from "../Components/SEO";

const landingData = {
  buy: {
    path: "/buy-property-india-from-uk",
    title: "Buy Property in India from Abroad | Digital NRI Support",
    heading: "Buy Property in India from Abroad",
    description:
      "100% digital NRI buying support with verified title checks, due diligence, documentation, registration coordination and POA guidance from abroad.",
    keywords:
      "buy property in India from abroad, buy Indian property remotely, NRI buying property in India, digital NRI property service, legal verification for NRI property",
    intro:
      "Our team helps NRIs worldwide complete safe property purchases in India with transparent legal checks, title verification, and end-to-end digital transaction support.",
    bullets: [
      "Property shortlisting based on budget and city preference",
      "Title verification, encumbrance checks, and legal due diligence",
      "Agreement drafting, negotiation, and registry coordination",
      "Power of Attorney support for remote purchase",
    ],
  },
  sell: {
    path: "/sell-property-india-from-uk",
    title: "Sell Property in India from UK | Verified Buyers + Docs",
    heading: "Sell Property in India from UK",
    description:
      "End-to-end NRI sale support: valuation, verified buyers, legal documentation, registry coordination, and repatriation guidance.",
    keywords:
      "sell property in India from UK, NRI property sale India, NRI property selling service, NRI legal documentation for sale, repatriation support after property sale",
    intro:
      "We help UK NRIs sell Indian property remotely with verified buyers, proper legal paperwork, and secure completion from token to handover.",
    bullets: [
      "Market valuation and sale strategy for maximum returns",
      "Buyer qualification and negotiation support",
      "Legal documentation, compliance, and registry process",
      "Tax and repatriation guidance for sale proceeds",
    ],
  },
  lease: {
    path: "/lease-property-india-for-nri",
    title: "Lease Property in India for NRIs | Tenant Verification",
    heading: "Lease Property in India for NRIs",
    description:
      "NRI leasing support with verified tenants, compliant rent agreements, and rent management for UK-based owners.",
    keywords:
      "lease property in India for nri, NRI rental property management India, tenant verification India, rent agreement for NRIs, NRI leasing support",
    intro:
      "Our leasing team manages tenant onboarding, rental agreements, and ongoing coordination so NRIs in the UK can earn stable rental income.",
    bullets: [
      "Verified tenant sourcing and background checks",
      "Rental agreement drafting and registration assistance",
      "Rent collection and periodic follow-ups",
      "Renewal, escalation, and vacancy minimization support",
    ],
  },
  legal: {
    path: "/nri-property-legal-litigation-india",
    title: "NRI Property Legal & Litigation India | Disputes Help",
    heading: "NRI Property Legal & Litigation Services",
    description:
      "Support for title disputes, possession, inheritance, and court coordination in India, with UK-focused legal guidance for NRIs.",
    keywords:
      "NRI property legal services India, NRI property litigation services, property dispute resolution India, title conflict legal support, NRI court case property India",
    intro:
      "For UK NRIs facing property disputes or legal risks in India, we provide structured legal support and litigation coordination with experienced professionals.",
    bullets: [
      "Support for ownership disputes, possession, and inheritance cases",
      "Power of Attorney and legal documentation drafting",
      "Court and authority-level representation support",
      "Preventive legal checks to reduce future disputes",
    ],
  },
  docs: {
    path: "/nri-property-documentation-services",
    title: "NRI Property Documentation India | POA, Registry, Title",
    heading: "NRI Property Documentation Services",
    description:
      "POA drafting, title checks, registry paperwork, and compliance support to avoid delays for UK-based NRIs.",
    keywords:
      "NRI property documentation services, power of attorney for NRI property, title documentation India, mutation process for NRIs, registry documents for NRI",
    intro:
      "Documentation errors are a major cause of delays for NRIs. We help UK clients build legally strong documentation before buying, selling, leasing, or litigating.",
    bullets: [
      "POA drafting and attestation guidance",
      "Agreement and deed documentation checks",
      "Land record, title, and mutation document support",
      "Compliance and filing coordination with authorities",
    ],
  },
  investment: {
    path: "/nri-real-estate-investment-india-from-uk",
    title: "NRI Estate Investment in India from UK | Due Diligence",
    heading: "NRI Real Estate Investment in India from UK",
    description:
      "NRI estate investment screening with risk checks and legal due diligence for UK NRIs seeking high-growth Indian real estate.",
    keywords:
      "NRI real estate investment India from UK, property investment for NRIs, high ROI property India, NRI investment advisory India, legal due diligence property investment",
    intro:
      "We support UK-based NRIs with market-led property investment strategy in India, including risk review, documentation, and transaction execution.",
    bullets: [
      "Investment-focused location and project screening",
      "Yield and appreciation based opportunity analysis",
      "Legal and title due diligence before investment",
      "Exit planning for resale and repatriation readiness",
    ],
  },
};

const commonFaqs = [
  {
    q: "Can I complete property transactions in India without travelling?",
    a: "Yes. With proper documentation, POA support, and legal coordination, most transaction steps can be completed remotely.",
  },
  {
    q: "Do you support both legal and documentation work?",
    a: "Yes. We support title checks, agreements, POA, registry-related documentation, and legal process coordination.",
  },
  {
    q: "Do you help with litigation and dispute cases?",
    a: "Yes. We help NRIs handle property disputes with legal strategy, documentation support, and follow-up coordination.",
  },
];

export default function KeywordLanding({ pageKey }) {
  const page = landingData[pageKey];

  if (!page) return null;

  const pageMeta = {
    buy: {
      tag: "Buying",
      icon: HomeIcon,
      accent: "from-blue-600 to-indigo-600",
      soft: "bg-blue-50",
      ring: "ring-blue-100",
    },
    sell: {
      tag: "Selling",
      icon: ArrowUpRight,
      accent: "from-rose-600 to-red-600",
      soft: "bg-rose-50",
      ring: "ring-rose-100",
    },
    lease: {
      tag: "Leasing",
      icon: KeyRound,
      accent: "from-violet-600 to-fuchsia-600",
      soft: "bg-violet-50",
      ring: "ring-violet-100",
    },
    legal: {
      tag: "Legal",
      icon: Scale,
      accent: "from-sky-600 to-blue-700",
      soft: "bg-sky-50",
      ring: "ring-sky-100",
    },
    docs: {
      tag: "Documentation",
      icon: FileText,
      accent: "from-amber-600 to-orange-600",
      soft: "bg-amber-50",
      ring: "ring-amber-100",
    },
    investment: {
      tag: "Investment",
      icon: PiggyBank,
      accent: "from-emerald-600 to-green-700",
      soft: "bg-emerald-50",
      ring: "ring-emerald-100",
    },
  };

  const meta = pageMeta[pageKey] || pageMeta.buy;
  const PageIcon = meta.icon;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: page.heading,
        description: page.description,
        provider: {
          "@type": "Organization",
          name: "Pinnacle Group UK",
          url: "https://www.nriproperty.uk",
        },
        areaServed: ["India", "United Kingdom", "United States", "Canada", "Europe", "Australia"],
      },
      {
        "@type": "FAQPage",
        mainEntity: commonFaqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-white to-slate-100/60 min-h-screen">
      <SEO
        title={page.title}
        description={page.description}
        path={page.path}
        keywords={page.keywords}
        structuredData={structuredData}
        breadcrumbs={[{ name: page.heading, path: page.path }]}
      />

      <FreeConsultation />

      <div className="max-w-6xl !mx-auto !px-6 !py-10">
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 !p-8 md:!p-10 shadow-sm">
          <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#c7d2fe] to-[#fef3c7] blur-3xl opacity-60" />
          <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-gradient-to-br from-[#bae6fd] to-[#fecaca] blur-3xl opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.05)_1px,transparent_0)] [background-size:24px_24px] opacity-40" />

          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 !px-4 !py-2 shadow-sm">
                <span
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${meta.accent} text-white`}
                >
                  <PageIcon className="h-4 w-4" />
                </span>
                <div className="text-xs font-semibold tracking-[0.2em] text-slate-700 uppercase">
                  {meta.tag}
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 !mt-4">
                {page.heading}
              </h1>
              <p className="text-slate-700 text-lg !mt-4">
                {page.intro}
              </p>

              <div className="!mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${meta.accent} text-white !px-5 !py-2.5 text-sm font-semibold shadow-sm hover:opacity-95`}
                >
                  Book Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/nri-services"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white !px-5 !py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div className={`rounded-2xl border border-slate-200 ${meta.soft} !p-5 shadow-sm`}>
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Verified legal coverage</p>
                    <p className="text-sm text-slate-700 !mt-1">
                      Structured checks, documentation, and compliance handled by experts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white !p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200">
                    <ClipboardCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Remote-ready process</p>
                    <p className="text-sm text-slate-700 !mt-1">
                      Execute key steps from the UK with POA and guided coordination.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white !p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-700 ring-1 ring-slate-200">
                    <Users className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Dedicated relationship manager</p>
                    <p className="text-sm text-slate-700 !mt-1">
                      Single point of contact for updates, queries, and progress tracking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="!mt-10 content-auto">
          <div className="flex items-center justify-between !mb-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              What We Cover
            </h2>
            <div className={`hidden md:inline-flex items-center gap-2 rounded-full ${meta.soft} !px-3 !py-1 text-xs font-semibold text-slate-700 ring-1 ${meta.ring}`}>
              Guided checklist
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {page.bullets.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white !p-4 shadow-sm"
              >
                <span className={`mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full ${meta.soft} text-slate-700`}>
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="!mt-10 content-auto">
          <h2 className="text-2xl font-semibold text-slate-900 !mb-4">
            FAQs for NRIs Living Abroad
          </h2>
          <div className="grid gap-4">
            {commonFaqs.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white !p-5 shadow-sm"
              >
                <h3 className="font-semibold text-slate-900">{item.q}</h3>
                <p className="text-slate-700 !mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="!mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-rose-50 to-amber-50 !p-6 md:!p-8 shadow-sm content-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 !mb-2">
                Need Expert Help?
              </h2>
              <p className="text-slate-700">
                Speak with our team for buying, selling, leasing, investment,
                documentation, legal, and litigation support.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${meta.accent} text-white !px-5 !py-2.5 text-sm font-semibold shadow-sm hover:opacity-95`}
              >
                <PhoneCall className="h-4 w-4" />
                Book Consultation
              </Link>
              <Link
                to="/nri-services"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white !px-5 !py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
