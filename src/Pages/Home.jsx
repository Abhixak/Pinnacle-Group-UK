import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  FileText,
  Home as HomeIcon,
  KeyRound,
  PiggyBank,
  Scale,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import FreeConsultation from "../Components/FreeConsultation";
import LazySection from "../Components/LazySection";
import SEO from "../Components/SEO";

const Footer = lazy(() => import("../Components/Footer"));
const Ad = lazy(() => import("../Components/Ad"));
const PopUpEnquiry = lazy(() => import("../Components/PopUpEnquiry"));
const Banner2 = lazy(() => import("../Components/Banner2"));
const Achievements = lazy(() => import("../Components/Achievements"));
const Stories = lazy(() => import("../Components/Stories"));
const NriServicesScroller = lazy(() => import("../Components/NriServicesScroller"));
const PMS = lazy(() => import("../Components/PMS"));
const AboutSection = lazy(() => import("../Components/AboutSection"));

const SITE_URL = "https://www.nriproperty.uk";
const ORG_NAME = "Pinnacle Group UK";

const guides = [
  {
    label: "Buying",
    tag: "Ownership",
    title: "Buy Property in India from UK",
    description: "Step-by-step guidance on selecting, verifying, and purchasing remotely.",
    to: "/buy-property-india-from-uk",
    icon: HomeIcon,
  },
  {
    label: "Selling",
    tag: "Exit Strategy",
    title: "Sell Property in India from UK",
    description: "Pricing, documentation, and safe transfer guidance for NRIs.",
    to: "/sell-property-india-from-uk",
    icon: ArrowUpRight,
  },
  {
    label: "Leasing",
    tag: "Tenancy",
    title: "Lease Property in India for NRIs",
    description: "Secure tenants, compliant agreements, and rent management tips.",
    to: "/lease-property-india-for-nri",
    icon: KeyRound,
  },
  {
    label: "Legal",
    tag: "Compliance",
    title: "NRI Property Legal and Litigation Services",
    description: "Dispute resolution, title checks, and legal support for NRIs.",
    to: "/nri-property-legal-litigation-india",
    icon: Scale,
  },
  {
    label: "Documentation",
    tag: "Paperwork",
    title: "NRI Property Documentation Services",
    description: "End-to-end paperwork support to avoid delays and errors.",
    to: "/nri-property-documentation-services",
    icon: FileText,
  },
  {
    label: "Investment",
    tag: "Growth",
    title: "NRI Real Estate Investment in India from UK",
    description: "Strategies for long-term value and tax-efficient investing.",
    to: "/nri-real-estate-investment-india-from-uk",
    icon: PiggyBank,
  },
];

const Home = ({ footerRef }) => {
  const location = useLocation();
  const [enablePopup, setEnablePopup] = useState(false);

  useEffect(() => {
    if (location.state?.scrollToFooter && footerRef?.current) {
      setTimeout(() => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location, footerRef]);

  useEffect(() => {
    const schedule = window.requestIdleCallback
      ? (callback) => window.requestIdleCallback(callback)
      : (callback) => setTimeout(callback, 400);
    schedule(() => setEnablePopup(true));
  }, []);

  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
        logo: SITE_URL + "/NewLogo.png",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+44-7868143558",
            contactType: "customer service",
            areaServed: ["GB", "IN", "CA", "US", "EU"],
          },
        ],
      },
      { "@type": "WebSite", url: SITE_URL, name: ORG_NAME },
      {
        "@type": "WebPage",
        url: SITE_URL + "/",
        name: "NRI Property UK - Home",
        description:
          "Helping NRIs to buy, sell, and invest in real estate in India. Legal assistance and personalized guidance.",
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden bg-[#f4f8fb]">
      <SEO
        title="NRI Property Services India | 100% Digital Support from Abroad"
        description="100% digital NRI property services in India for clients abroad. Buy, sell, manage, verify and protect your Indian property with remote legal and documentation support."
        path="/"
        keywords="NRI property services India, 100% digital property services India, manage property in India from abroad, buy property in India remotely, sell Indian property from abroad, NRI property management India, NRI property legal services, power of attorney for NRI property"
        structuredData={ldJson}
      />

      <FreeConsultation />
      <Suspense fallback={null}>{enablePopup && <PopUpEnquiry />}</Suspense>

      <div className="max-w-[1600px] !mx-auto !px-3 sm:!px-5">
        <Suspense fallback={null}>
          <Ad />
          <NriServicesScroller />
        </Suspense>

        <LazySection minHeight={420}>
          <section className="!my-5 rounded-2xl border border-slate-200 bg-white !py-8">
            <div className="flex flex-col gap-3 !px-6 md:flex-row md:items-end md:justify-between lg:!px-10">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
                  Property Services
                </p>
                <h2 className="!mt-2 font-serif text-3xl font-semibold text-[#102a4c] md:text-4xl">
                  Expert guidance for every property need
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-right">
                Trusted on-ground support in India, with clear communication wherever you are.
              </p>
            </div>
            <Suspense fallback={null}>
              <PMS />
            </Suspense>
          </section>
        </LazySection>

        <Link to="/contact" aria-label="Contact us for free consultation" className="block">
          <Suspense fallback={null}>
            <Banner2 />
          </Suspense>
        </Link>

        <LazySection minHeight={420}>
          <Suspense fallback={null}>
            <Achievements />
          </Suspense>
        </LazySection>

        <LazySection minHeight={300}>
          <Suspense fallback={null}>
            <Stories />
          </Suspense>
        </LazySection>

        <section className="!my-8 rounded-2xl bg-white !px-6 !py-10 shadow-sm md:!px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
                Property Guidance
              </p>
              <h2 className="!mt-2 font-serif text-3xl font-semibold text-[#102a4c] md:text-4xl">
                Guidance for every stage
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600 md:text-right">
              Practical resources to help you plan, verify and execute property decisions in India
              with confidence.
            </p>
          </div>

          <div className="!mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {guides.map((guide) => (
              <Link
                key={guide.to}
                to={guide.to}
                className="group flex min-h-64 flex-col rounded-xl border border-slate-200 bg-[#fffdf9] !p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#9d1c1a]/30 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbe8e2] text-[#9d1c1a]">
                  {React.createElement(guide.icon, { className: "h-5 w-5", "aria-hidden": true })}
                </div>
                <p className="!mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#9d1c1a]">
                  {guide.label}
                </p>
                <h3 className="!mt-2 font-serif text-lg font-semibold leading-6 text-[#102a4c]">
                  {guide.title}
                </h3>
                <p className="!mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
                <span className="!mt-auto inline-flex items-center gap-2 !pt-5 text-sm font-semibold text-[#9d1c1a]">
                  Explore guide
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <LazySection minHeight={220}>
          <Suspense fallback={null}>
            <AboutSection />
          </Suspense>
        </LazySection>
      </div>

      <Suspense fallback={null}>
        <Footer ref={footerRef} />
      </Suspense>
    </div>
  );
};

export default Home;
