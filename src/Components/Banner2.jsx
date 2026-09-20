import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bannerOne from "../assets/banner2.png";
import bannerTwo from "../assets/banner22.png";

// Video banner retained for possible future use.
// import DeferredVideo from "./DeferredVideo";
// const videoSrc =
//   "https://res.cloudinary.com/dksbdsixz/video/upload/f_auto,q_auto:eco,w_1280/v1769853312/Banner_hpkbjp.mp4";

const slides = [
  {
    src: bannerOne,
    alt: "Own property in India and manage it with confidence through NRI property services",
  },
  {
    src: bannerTwo,
    alt: "Expert legal, tax and financial property support for NRIs wherever they are",
  },
];

const Banner2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (isPaused || prefersReducedMotion) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      className="group relative aspect-[12/5] w-full overflow-hidden rounded-xl bg-slate-100 !my-4"
      aria-roledescription="carousel"
      aria-label="NRI property services highlights"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Previous video banner:
      <DeferredVideo
        src={videoSrc}
        className="w-full h-full object-contain"
        ariaLabel="NRI Property UK hero background video"
        playLabel="Play hero video"
        controls={false}
      />
      */}

      {slides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={
            "absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ease-in-out " +
            (index === activeSlide ? "opacity-100" : "pointer-events-none opacity-0")
          }
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          aria-hidden={index !== activeSlide}
        />
      ))}

      <button
        type="button"
        onClick={showPrevious}
        className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#1d3048] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white md:flex"
        aria-label="Show previous banner"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
      </button>

      <button
        type="button"
        onClick={showNext}
        className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#1d3048] shadow-md backdrop-blur-sm transition-all duration-200 hover:bg-white md:flex"
        aria-label="Show next banner"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
      </button>

      <div className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 gap-2 rounded-full bg-white/80 !px-3 !py-2 shadow-sm backdrop-blur-sm md:flex">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            className={
              "h-2 rounded-full transition-all duration-300 " +
              (index === activeSlide ? "w-6 bg-[#9d1c1a]" : "w-2 bg-slate-400")
            }
            aria-label={"Show banner " + (index + 1)}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner2;
