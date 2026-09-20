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
  MessageSquareText,
  Scale,
  Settings2,
} from "lucide-react";
import Footer from "../Components/Footer";
import EnquiryForm from "../Components/Enquire";
import FreeConsultation from "../Components/FreeConsultation";
import SEO from "../Components/SEO";

const services = [
  {
    id: "buy-sell",
    title: "Buy & Sell Assistance",
    description:
      "From valuation and market checks to negotiation, documentation and ownership transfer.",
    highlights: ["Property valuation", "Buyer or seller coordination", "Registration support"],
    icon: Handshake,
  },
  {
    id: "management",
    title: "Property Management",
    description:
      "Reliable on-ground care for vacant, rented or occupied properties across India.",
    highlights: ["Property inspections", "Tenant coordination", "Maintenance oversight"],
    icon: Building2,
  },
  {
    id: "legal",
    title: "Legal & Litigation Support",
    description:
      "Practical legal coordination for documentation, disputes and protection of property rights.",
    highlights: ["Document review", "Dispute support", "Power of Attorney guidance"],
    icon: Scale,
  },
  {
    id: "title",
    title: "Title Clearing & Verification",
    description:
      "Detailed checks and assistance to establish clear, secure and transferable ownership.",
    highlights: ["Ownership verification", "Land record checks", "Mutation assistance"],
    icon: FileSearch,
  },
  {
    id: "finance",
    title: "Tax & Financial Guidance",
    description:
      "Clear guidance on the tax and financial aspects of Indian property ownership.",
    highlights: ["Capital gains guidance", "TDS coordination", "Repatriation support"],
    icon: CircleDollarSign,
  },
  {
    id: "support",
    title: "Dedicated NRI Support",
    description:
      "A dependable point of contact who keeps you informed across countries and time zones.",
    highlights: ["Regular progress updates", "Remote coordination", "Responsive assistance"],
    icon: Headphones,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Share your property location, current situation and desired outcome through the consultation form.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Consult with an expert",
    description:
      "We review your requirement, identify the relevant checks and explain the available options.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Approve a clear action plan",
    description:
      "You receive the scope, required documents, expected timeline and next steps before work begins.",
    icon: Check,
  },
  {
    number: "04",
    title: "Track execution remotely",
    description:
      "Our on-ground team coordinates the work while you receive clear updates and remain in control.",
    icon: Settings2,
  },
];

const NRI_Services = () => (
  <>
    <SEO
      title="NRI Property Services India | 100% Digital Support for NRIs"
      description="Complete 100% digital NRI property services in India: buying, selling, leasing, management, legal documentation, disputes, tax and repatriation support from abroad."
      path="/nri-services"
      keywords="NRI property services India, digital property management India, NRI property buying service, NRI property selling service, NRI leasing services India, NRI legal documentation India, NRI property dispute resolution, tax and repatriation support for NRIs"
      breadcrumbs={[{ name: "NRI Property Services", path: "/nri-services" }]}
    />
    <FreeConsultation />

    <main className="bg-white text-slate-800">
      <section className="relative overflow-hidden border-y border-slate-100 bg-[#f7f8fb]">
        <div className="absolute right-0 top-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#9d1c1a]/5" />
        <div className="max-w-7xl !mx-auto !px-6 !py-16 text-center md:!py-20 lg:!px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">
            NRI Property Services
          </p>
          <h1 className="max-w-4xl !mx-auto !mt-4 text-4xl font-bold leading-tight text-[#1d3048] md:text-5xl">
            Manage Your Indian Property
            <span className="block text-[#9d1c1a]">With Confidence From Anywhere</span>
          </h1>
          <p className="max-w-3xl !mx-auto !mt-6 text-base leading-8 text-slate-600 md:text-lg">
            End-to-end property support for NRIs, combining expert advice,
            transparent communication and trusted on-ground coordination in India.
          </p>
          <div className="!mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full bg-[#9d1c1a] !px-6 !py-3 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#761520]"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white !px-6 !py-3 font-semibold text-[#1d3048] transition-colors duration-200 hover:border-[#9d1c1a] hover:text-[#9d1c1a]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-28 max-w-7xl !mx-auto !px-6 !py-16 md:!py-20 lg:!px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">
            What We Do
          </p>
          <h2 className="!mt-3 text-3xl font-bold text-[#1d3048] md:text-4xl">
            Complete Support for Your Property in India
          </h2>
          <p className="!mt-4 text-lg leading-8 text-slate-600">
            Choose the support you need. Every service is delivered with clear
            ownership, regular updates and a dedicated point of contact.
          </p>
        </div>

        <div className="!mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white !p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#9d1c1a]/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#9d1c1a]/10 text-[#9d1c1a]">
                {createElement(service.icon, { className: "h-6 w-6", "aria-hidden": true })}
              </div>
              <h3 className="!mt-5 text-xl font-bold text-[#1d3048]">{service.title}</h3>
              <p className="!mt-3 leading-7 text-slate-600">{service.description}</p>

              <ul className="!mt-5 space-y-2.5">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check
                      className="!mt-0.5 h-4 w-4 shrink-0 text-[#9d1c1a]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              <Link
                to={"/service-details/" + service.id}
                className="!mt-6 inline-flex items-center gap-2 self-start font-semibold text-[#9d1c1a] transition-colors hover:text-[#6f1320]"
              >
                View Service
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f8fb]">
        <div className="max-w-7xl !mx-auto !px-6 !py-16 md:!py-20 lg:!px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">
              How It Works
            </p>
            <h2 className="!mt-3 text-3xl font-bold text-[#1d3048] md:text-4xl">
              A Clear Process, Wherever You Are
            </h2>
            <p className="!mt-4 text-lg leading-8 text-slate-600">
              You always know what is happening, what is required from you and
              what comes next.
            </p>
          </div>

          <ol className="!mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white !p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-wider text-[#9d1c1a]">
                    STEP {step.number}
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1d3048] text-white">
                    {createElement(step.icon, {
                      className: "h-5 w-5",
                      "aria-hidden": true,
                    })}
                  </span>
                </div>
                <h3 className="!mt-6 text-lg font-bold text-[#1d3048]">{step.title}</h3>
                <p className="!mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="!mt-8 flex flex-col gap-3 rounded-2xl bg-[#1d3048] !px-6 !py-5 text-white md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold">One team. One clear point of contact.</p>
              <p className="!mt-1 text-sm text-white/70">
                Consultations, documents and progress updates are coordinated remotely.
              </p>
            </div>
            <a
              href="#consultation"
              className="inline-flex shrink-0 items-center gap-2 font-semibold text-red-100 hover:text-white"
            >
              Start Your Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div id="consultation" className="scroll-mt-24 !py-10">
        <EnquiryForm />
      </div>
    </main>

    <Footer />
  </>
);

export default NRI_Services;
