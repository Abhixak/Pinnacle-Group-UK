import { createElement } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CircleDollarSign,
  FileCheck2,
  Handshake,
  Heart,
  Home,
  MapPin,
  Plane,
  Shield,
  Sparkles,
} from "lucide-react";
import heroImage from "../assets/hero.jpeg";
import Footer from "../Components/Footer";
import SEO from "../Components/SEO";

const values = [
  {
    title: "Trust",
    description: "We do the right thing, always.",
    icon: Shield,
  },
  {
    title: "Clarity",
    description: "Straight answers. No fine print.",
    icon: FileCheck2,
  },
  {
    title: "Care",
    description: "Your goals are personal to us.",
    icon: Heart,
  },
];

const statistics = [
  { value: "20+ Years", label: "Of Experience" },
  { value: "10,000+ Clients", label: "Trust Us Globally" },
  { value: "3×", label: "Industry Recognition" },
];

const services = [
  {
    title: "Property Management",
    description: "Enjoy professional support and round-the-year care for your property.",
    icon: Home,
  },
  {
    title: "Buy & Sell Support",
    description: "Make well-informed property decisions with our local insight.",
    icon: Handshake,
  },
  {
    title: "Legal & Documentation",
    description:
      "Get expert support for all important legal property procedures and coordination.",
    icon: FileCheck2,
  },
  {
    title: "Tax & Financial Guidance",
    description:
      "Understand the financial and tax aspects of owning property in India, clearly.",
    icon: CircleDollarSign,
  },
];

const SectionLabel = ({ children, centered = false }) => (
  <div className={"flex items-center gap-3 " + (centered ? "justify-center" : "")}>
    <span className="h-px w-7 bg-[#9f2638]" />
    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#24364f]">
      {children}
    </p>
    <span className="h-px w-7 bg-[#9f2638]" />
  </div>
);

const About = () => {
  return (
    <>
      <SEO
        title="About Pinnacle Group | NRI Property Services"
        description="Learn how Pinnacle Group helps NRIs manage, trade and protect property in India through trusted local support, clear communication and expert guidance."
        path="/about"
        breadcrumbs={[{ name: "About Us", path: "/about" }]}
      />

      <main className="overflow-hidden bg-[#fffaf4] text-[#132a4a]">
        <section className="max-w-[1440px] !mx-auto grid items-stretch gap-8 !px-5 !py-8 md:!px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-0 lg:!py-10">
          <div className="flex flex-col justify-center !px-2 !py-8 sm:!px-6 lg:!px-10">
            <SectionLabel>Bridging homes. Bringing families closer.</SectionLabel>
            <h1 className="!mt-6 max-w-xl font-serif text-4xl font-semibold leading-[1.04] tracking-[-0.025em] sm:text-5xl xl:text-6xl">
              Your Trusted Partner for{" "}
              <span className="text-[#a32035]">Indian Property</span>
            </h1>
            <p className="!mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Pinnacle Group offers total property support to NRIs looking to manage, trade or
              protect property from abroad. With our on-ground assistance, clear communication and
              expert guidance, make every property decision effortless.
            </p>
            <Link
              to="/support"
              className="!mt-8 inline-flex w-fit items-center gap-4 rounded-md bg-[#a91f39] !px-7 !py-3.5 font-semibold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#83172c]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <p className="!mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#41516a]">
              People&nbsp;&nbsp; | &nbsp;&nbsp;Property&nbsp;&nbsp; | &nbsp;&nbsp;A stronger tomorrow
            </p>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] lg:min-h-[540px]">
            <img
              src={heroImage}
              alt="NRI property professional supporting clients from the United Kingdom"
              className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
              loading="eager"
              decoding="async"
            />
            <div className="absolute right-5 top-5 rounded-lg border border-white/60 bg-white/80 !px-4 !py-3 text-center text-[10px] font-semibold uppercase leading-5 tracking-[0.2em] text-[#263951] shadow-sm backdrop-blur-sm">
              Indian Roots
              <br />
              Global Horizons
            </div>
          </div>
        </section>

        <section className="max-w-[1380px] !mx-auto grid items-center gap-10 !px-6 !py-14 md:!py-20 lg:grid-cols-[0.72fr_1.28fr] lg:!px-10">
          <div className="relative min-h-[390px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d3555] to-[#081b35] !p-8 text-white shadow-xl">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full border border-white/10" />
            <Building2 className="h-12 w-12 text-[#f1c9b5]" aria-hidden="true" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-3xl leading-tight">
                People.
                <br />
                Places.
                <br />
                Possibilities.
              </p>
              <p className="!mt-5 text-sm leading-6 text-white/65">
                Local knowledge in India, with a clear understanding of the needs of NRIs abroad.
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="!mt-5 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Built for NRIs. Grounded in India.
            </h2>
            <p className="!mt-6 text-base leading-7 text-slate-600">
              Managing property from another country shouldn't leave you feeling helpless.
              Pinnacle Group was created to deliver trust and reliability for NRIs in India, while
              keeping you well-informed and in control, no matter where you are.
            </p>
            <p className="!mt-4 text-base leading-7 text-slate-600">
              By combining local market know-how with a truly client-centric approach, we support
              you in making well-informed property decisions with ease and confidence.
            </p>
            <p className="!mt-6 border-l-2 border-[#a32035] !pl-4 font-serif text-lg italic text-[#37465b]">
              A more connected tomorrow, always.
            </p>

            <div className="!mt-10 grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-xl border border-[#eadfd3] bg-white/60 !p-5">
              <div className="text-center">
                <MapPin className="!mx-auto h-6 w-6 text-[#a32035]" />
                <p className="!mt-1 text-xs font-bold tracking-wider">UK</p>
              </div>
              <div className="relative border-t border-dashed border-[#7d8897]">
                <Plane className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-12 bg-[#fffaf4] text-[#132a4a]" />
              </div>
              <div className="text-center">
                <MapPin className="!mx-auto h-6 w-6 text-[#a32035]" />
                <p className="!mt-1 text-xs font-bold tracking-wider">INDIA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-[1380px] !mx-auto !px-6 !pb-16 lg:!px-10">
          <SectionLabel>Our Values</SectionLabel>
          <h2 className="!mt-4 font-serif text-3xl font-semibold sm:text-4xl">What Guides Us</h2>

          <div className="!mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="flex items-center gap-5 rounded-xl border border-[#eadfd3] bg-white/50 !p-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fde8dc] text-[#a32035]">
                  {createElement(value.icon, { className: "h-7 w-7", "aria-hidden": true })}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#8e1c30]">{value.title}</h3>
                  <p className="!mt-1 leading-6 text-slate-600">{value.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f9d8c7]">
          <div className="max-w-[1380px] !mx-auto grid sm:grid-cols-3">
            {statistics.map((stat, index) => (
              <div
                key={stat.value}
                className={
                  "text-center !px-6 !py-8 " +
                  (index > 0 ? "border-t border-[#dcb6a5] sm:border-l sm:border-t-0" : "")
                }
              >
                <p className="font-serif text-3xl font-semibold text-[#8e1c30]">{stat.value}</p>
                <p className="!mt-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#37465b]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1380px] !mx-auto !px-6 !py-16 md:!py-20 lg:!px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <SectionLabel>Our Services</SectionLabel>
              <h2 className="!mt-5 font-serif text-3xl font-semibold sm:text-4xl lg:text-5xl">
                How We Support You
              </h2>
              <p className="!mt-5 max-w-lg text-lg leading-8 text-slate-600">
                We offer end-to-end property advisory to make your property journey in India smooth
                and secure.
              </p>
            </div>
            <div className="relative min-h-[230px] overflow-hidden rounded-2xl bg-[#132a4a] !p-8 text-white">
              <div className="absolute -right-10 -top-16 h-56 w-56 rounded-full bg-[#a32035]/35 blur-2xl" />
              <Sparkles className="relative h-8 w-8 text-[#f1c9b5]" />
              <p className="relative !mt-8 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
                Same roots. Brighter opportunities. Professional support across every property
                decision.
              </p>
            </div>
          </div>

          <div className="!mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="border-b border-[#dfd2c6] !pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fde8dc] text-[#a32035]">
                  {createElement(service.icon, {
                    className: "h-6 w-6",
                    "aria-hidden": true,
                  })}
                </div>
                <h3 className="!mt-5 font-serif text-xl font-semibold">{service.title}</h3>
                <p className="!mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#092440] text-white">
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />
          <div className="relative max-w-4xl !mx-auto !px-6 !py-14 text-center md:!py-16">
            <h2 className="font-serif text-3xl font-semibold sm:text-4xl">
              Let's Make Managing Property Simpler.
            </h2>
            <p className="!mt-4 text-white/70">
              Your property in India requires professional support that you can rely on, no matter
              where you are in the world.
            </p>
            <Link
              to="/support"
              className="!mt-7 inline-flex items-center gap-3 rounded-md bg-[#af203d] !px-7 !py-3.5 font-semibold text-white transition-colors hover:bg-[#8d1831]"
            >
              Book a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
