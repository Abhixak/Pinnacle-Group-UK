import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

import CLOUDINARY_IMAGES from "../cloudinaryImages";
import HeroSkeleton from "./HeroSkeleton";

const slides = [
  {
    id: "sell",
    badge: "UK NRI Property Sales Desk",
    image: CLOUDINARY_IMAGES.hero1,
    alt: "Sell your Indian property safely from the UK",
    titleLine1: "Sell Your",
    titleLine2: "Indian Property,",
    titleLine3: "From The UK.",
    description:
      "Fair market valuation, vetted buyers, remote Power of Attorney (POA) execution, and 100% compliant funds repatriation (15CA/15CB) back to your UK bank account.",
    primaryBtn: {
      text: "Sell Property from UK",
      to: "/sell-property-india-from-uk",
    },
    secondaryBtn: {
      text: "Book Free Consultation",
      to: "/support",
    },
    highlights: [
      "100% Remote Sale Process",
      "No Travel to India Required",
      "FEMA & 15CA/CB Tax Clearance",
    ],
  },
  {
    id: "buy",
    badge: "High-Growth Real Estate Investments",
    image: CLOUDINARY_IMAGES.hero2,
    alt: "Buy property in India from the UK - Property Investment",
    titleLine1: "Buy Property",
    titleLine2: "In India,",
    titleLine3: "From The UK.",
    description:
      "Curated A-grade residential and commercial investment opportunities across top Indian metros. Complete 30-year title verification, developer negotiations, and remote registration.",
    primaryBtn: {
      text: "Explore Property Investment",
      to: "/buy-property-india-from-uk",
    },
    secondaryBtn: {
      text: "Explore Our Services",
      to: "/nri-services",
    },
    highlights: [
      "RERA & Legal Verified Assets",
      "High Rental Yields & Capital Growth",
      "End-to-End Remote Buying",
    ],
  },
  {
    id: "manage",
    badge: "Complete On-Ground Asset Oversight",
    image: CLOUDINARY_IMAGES.hero3,
    alt: "Manage your property in India while living in the UK",
    titleLine1: "Manage Property In India,",
    titleLine2: "While Living In",
    titleLine3: "The UK.",
    description:
      "Full-service tenancy and asset care: verified tenant screening, registered lease agreements, timely rent collection, quarterly photo inspections, and boundary encroachment protection.",
    primaryBtn: {
      text: "Manage Property from UK",
      to: "/lease-property-india-for-nri",
    },
    secondaryBtn: {
      text: "Get Help & Support",
      to: "/support",
    },
    highlights: [
      "Tenant Screening & Lease Drafting",
      "Quarterly Geo-Tagged Reports",
      "Encroachment Protection",
    ],
  },
];

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);

  // Preload first hero image before revealing slideshow
  useEffect(() => {
    const img = new Image();
    img.src = CLOUDINARY_IMAGES.hero1;
    if (img.complete) {
      setFirstImageLoaded(true);
    } else {
      img.onload = () => setFirstImageLoaded(true);
      img.onerror = () => setFirstImageLoaded(true);
    }
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  // 5-second slideshow interval (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  if (!firstImageLoaded) {
    return <HeroSkeleton />;
  }

  const slide = slides[currentSlide];

  return (
    <section
      className="relative isolate w-full min-h-[580px] sm:min-h-[620px] lg:min-h-0 lg:aspect-[16/9] overflow-hidden rounded-b-2xl bg-slate-100  select-none group"
      aria-label="Hero Property Slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images - Native 16:9 Ratio Preserved Without Cropping */}
      <div className="absolute inset-0 -z-20 w-full h-full overflow-hidden">
        {slides.map((s, index) => {
          const isActive = currentSlide === index;
          return (
            <motion.img
              key={s.id}
              src={s.image}
              alt={s.alt}
              width="1670"
              height="942"
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 1.03,
              }}
              transition={{ duration: 0.85, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover object-right lg:object-center pointer-events-none"
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          );
        })}
      </div>

      {/* Gradient Overlays for Crystal Clear Text Legibility */}
      <div className="opacity-70 absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/35 md:via-white/90 md:to-white/20 lg:via-white/85 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-white/90 via-white/50 to-transparent sm:hidden pointer-events-none" />

      {/* Main Content Area with Animated Text Transition */}
      <div className="flex min-h-[580px] sm:min-h-[620px] lg:min-h-0 lg:h-full items-center !px-5 sm:!px-8 md:!px-10 lg:w-[62%] xl:w-[58%] lg:!px-[3.8vw]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full max-w-2xl py-8"
          >
            {/* Top Category Badge */}
            <div className="inline-flex items-center gap-2 !px-3.5 !py-1.5 rounded-full bg-[#9d1c1a]/10 border border-[#9d1c1a]/20 text-xs sm:text-sm font-semibold text-[#9d1c1a] mb-4 sm:mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{slide.badge}</span>
            </div>

            {/* Slide Heading */}
            <h1 className="font-serif text-[clamp(2.1rem,4.4vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#071d49]">
              {slide.titleLine1}
              <br />
              {slide.titleLine2}
              <br />
              <span className="text-[#a80f2c]">{slide.titleLine3}</span>
            </h1>

            {/* Slide Description */}
            <p className="max-w-xl !mt-4 sm:!mt-5 text-sm sm:text-base lg:text-[clamp(0.95rem,1.25vw,1.15rem)] leading-relaxed text-[#354868]">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="!mt-6 sm:!mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                to={slide.primaryBtn.to}
                className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#9d1c1a] to-[#c53030] !px-5 sm:!px-6 !py-3 sm:!py-3.5 font-semibold text-white shadow-lg shadow-red-950/20 hover:shadow-xl hover:brightness-105 active:scale-95 transition-all text-sm sm:text-base"
              >
                <span>{slide.primaryBtn.text}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to={slide.secondaryBtn.to}
                className="group inline-flex items-center gap-2 rounded-xl bg-white/90 hover:bg-white border border-slate-300/90 !px-4 sm:!px-5 !py-3 sm:!py-3.5 font-semibold text-[#071d49] hover:text-[#a80f2c] shadow-xs active:scale-95 transition-all text-sm sm:text-base"
              >
                <span>{slide.secondaryBtn.text}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Highlights List */}
            <ul className="!mt-7 flex flex-wrap gap-x-4 gap-y-2.5 text-xs sm:text-sm font-medium text-[#405577]">
              {slide.highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full bg-[#fae9ec] text-[#a80f2c]">
                    <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Manual Chevron Controls */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md flex items-center justify-center backdrop-blur-xs border border-white/60 active:scale-95 transition-all cursor-pointer opacity-70 group-hover:opacity-100 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white text-slate-800 shadow-md flex items-center justify-center backdrop-blur-xs border border-white/60 active:scale-95 transition-all cursor-pointer opacity-70 group-hover:opacity-100 z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators / Navigation Dots with Progress Bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-white/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-sm z-10">
        {slides.map((s, index) => {
          const isActive = currentSlide === index;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className="group flex items-center gap-1.5 cursor-pointer transition-all"
              aria-label={`Go to slide ${index + 1}: ${s.badge}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`relative h-2 rounded-full transition-all duration-300 overflow-hidden ${isActive ? "w-8 bg-[#9d1c1a]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
              >
                {/* 5-second progress fill when active & not paused */}
                {isActive && (
                  <motion.span
                    key={`progress-${currentSlide}-${isPaused}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: isPaused ? 0 : 5,
                      ease: "linear",
                    }}
                    className="absolute inset-0 bg-red-400/60"
                  />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default HeroSlideshow;

