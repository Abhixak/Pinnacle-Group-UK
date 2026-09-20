import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  Home as HomeIcon,
  ArrowUpRight,
  KeyRound,
  Scale,
  FileText,
  PiggyBank,
} from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import FreeConsultation from "../Components/FreeConsultation";
import SEO from "../Components/SEO";
import LazySection from "../Components/LazySection";
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
      ? (cb) => window.requestIdleCallback(cb)
      : (cb) => setTimeout(cb, 400);
    schedule(() => setEnablePopup(true));
  }, []);

  const ldJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: ORG_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/NewLogo.png`,
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+44-7868143558",
            contactType: "customer service",
            areaServed: ["GB", "IN", "CA", "US", "EU"],
          },
        ],
      },
      {
        "@type": "WebSite",
        url: SITE_URL,
        name: ORG_NAME,
      },
      {
        "@type": "WebPage",
        url: `${SITE_URL}/`,
        name: "NRI Property UK - Home",
        description:
          "Helping NRIs to buy, sell, and invest in real estate in India. Legal assistance and personalized guidance.",
      },
    ],
  };

  return (
    <div className="w-full !p-5">
      <SEO
        title="NRI Property Services India | 100% Digital Support from Abroad"
        description="100% digital NRI property services in India for clients abroad. Buy, sell, manage, verify and protect your Indian property with remote legal and documentation support."
        path="/"
        keywords="NRI property services India, 100% digital property services India, manage property in India from abroad, buy property in India remotely, sell Indian property from abroad, NRI property management India, NRI property legal services, power of attorney for NRI property"
        structuredData={ldJson}
      />

      <FreeConsultation />
      <Suspense fallback={null}>
        {enablePopup && <PopUpEnquiry />}
        <Ad />
        <NriServicesScroller />
      </Suspense>

      <Link
        to="/contact"
        aria-label="Contact us for free consultation"
        className="block"
      >
        <Suspense fallback={null}>
          <Banner2 />
        </Suspense>
      </Link>

      <LazySection minHeight={200}>
        <Suspense fallback={null}>
          <PMS />
        </Suspense>
      </LazySection>
      <LazySection minHeight={200}>
        <Suspense fallback={null}>
          <Stories />
        </Suspense>
      </LazySection>
      <LazySection minHeight={200}>
        <Suspense fallback={null}>
          <Achievements />
        </Suspense>
      </LazySection>
      <LazySection minHeight={200}>
        <Suspense fallback={null}>
          <AboutSection />
        </Suspense>
      </LazySection>

      <section className="relative overflow-hidden !my-12 !p-6 md:!p-10 ">
        {/* <div className="absolute -top-28 -right-20 w-72 h-72 rounded-full  blur-3xl opacity-70" />
        <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-gradient-to-br from-[#bae6fd] to-[#fecaca] blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] [background-size:22px_22px] opacity-40" /> */}

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 !mb-6">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-600 uppercase">
              Guides Library
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 !mt-2">
              Popular UK NRI Property Guides
            </h2>
          </div>
          <p className="text-sm text-slate-700 md:max-w-lg">
            Handpicked resources to help you plan, verify, and execute property decisions in India with confidence.
          </p>
        </div>

        <div className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/buy-property-india-from-uk"
            className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur !p-5 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#dbeafe] opacity-60" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              Buying
            </p>
            <div className="!mt-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#e0ecff] text-[#1d4ed8]">
                <HomeIcon className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Ownership</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 !mt-2 group-hover:text-red-700 transition">
              Buy Property in India from UK
            </h3>
            <p className="text-sm text-slate-700 !mt-2">
              Step-by-step guidance on selecting, verifying, and purchasing remotely.
            </p>
            <div className="!mt-4 inline-flex items-center text-xs font-semibold text-slate-700 group-hover:text-red-700 transition">
              Explore guide
            </div>
          </Link>

          <Link
            to="/sell-property-india-from-uk"
            className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur !p-5 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#fee2e2] opacity-60" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              Selling
            </p>
            <div className="!mt-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#fee2e2] text-[#b91c1c]">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Exit Strategy</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 !mt-2 group-hover:text-red-700 transition">
              Sell Property in India from UK
            </h3>
            <p className="text-sm text-slate-700 !mt-2">
              Pricing, documentation, and safe transfer guidance for NRIs.
            </p>
            <div className="!mt-4 inline-flex items-center text-xs font-semibold text-slate-700 group-hover:text-red-700 transition">
              Explore guide
            </div>
          </Link>

          <Link
            to="/lease-property-india-for-nri"
            className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur !p-5 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#e9d5ff] opacity-60" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              Leasing
            </p>
            <div className="!mt-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ede9fe] text-[#6d28d9]">
                <KeyRound className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Tenancy</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 !mt-2 group-hover:text-red-700 transition">
              Lease Property in India for NRIs
            </h3>
            <p className="text-sm text-slate-700 !mt-2">
              Secure tenants, compliant agreements, and rent management tips.
            </p>
            <div className="!mt-4 inline-flex items-center text-xs font-semibold text-slate-700 group-hover:text-red-700 transition">
              Explore guide
            </div>
          </Link>

          <Link
            to="/nri-property-legal-litigation-india"
            className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur !p-5 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#bfdbfe] opacity-60" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              Legal
            </p>
            <div className="!mt-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#dbeafe] text-[#1d4ed8]">
                <Scale className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Compliance</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 !mt-2 group-hover:text-red-700 transition">
              NRI Property Legal and Litigation Services
            </h3>
            <p className="text-sm text-slate-700 !mt-2">
              Dispute resolution, title checks, and legal support for NRIs.
            </p>
            <div className="!mt-4 inline-flex items-center text-xs font-semibold text-slate-700 group-hover:text-red-700 transition">
              Explore guide
            </div>
          </Link>

          <Link
            to="/nri-property-documentation-services"
            className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur !p-5 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#fde68a] opacity-60" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              Documentation
            </p>
            <div className="!mt-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#fef3c7] text-[#92400e]">
                <FileText className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Paperwork</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 !mt-2 group-hover:text-red-700 transition">
              NRI Property Documentation Services
            </h3>
            <p className="text-sm text-slate-700 !mt-2">
              End-to-end paperwork support to avoid delays and errors.
            </p>
            <div className="!mt-4 inline-flex items-center text-xs font-semibold text-slate-700 group-hover:text-red-700 transition">
              Explore guide
            </div>
          </Link>

          <Link
            to="/nri-real-estate-investment-india-from-uk"
            className="group rounded-2xl border border-slate-200 bg-white/90 backdrop-blur !p-5 shadow-sm hover:shadow-lg transition relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#bbf7d0] opacity-60" />
            <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600 uppercase">
              Investment
            </p>
            <div className="!mt-3 inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#dcfce7] text-[#166534]">
                <PiggyBank className="h-4 w-4" />
              </span>
              <span className="text-xs font-semibold text-slate-700">Growth</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 !mt-2 group-hover:text-red-700 transition">
              NRI Real Estate Investment in India from UK
            </h3>
            <p className="text-sm text-slate-700 !mt-2">
              Strategies for long-term value and tax-efficient investing.
            </p>
            <div className="!mt-4 inline-flex items-center text-xs font-semibold text-slate-700 group-hover:text-red-700 transition">
              Explore guide
            </div>
          </Link>
        </div>
      </section>
      <Suspense fallback={null}>
        <Footer ref={footerRef} />
      </Suspense>
    </div>
  );
};

export default Home;
