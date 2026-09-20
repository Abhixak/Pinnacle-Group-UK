import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.jpeg";

const highlights = [
  "UK Based Support",
  "India Market Expertise",
  "Personalised Guidance",
];

const Ad = () => {
  return (
    <section
      className="relative isolate min-h-[590px] overflow-hidden rounded-xl bg-white sm:min-h-[650px] lg:min-h-0 lg:aspect-video"
      aria-labelledby="hero-heading"
    >
      <img
        src={heroImg}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[66%_center] lg:object-center"
        alt="NRI property advisor overlooking the London skyline"
        fetchPriority="high"
        decoding="async"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/95 to-white/25 lg:via-white/75 lg:to-transparent" />

      <div className="flex min-h-[590px] items-center !px-6 !py-12 sm:min-h-[650px] sm:!px-10 lg:min-h-0 lg:h-full lg:w-[56%] lg:!px-[4.2vw] lg:!py-[4vw]">
        <div className="w-full max-w-3xl">
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(2.6rem,5vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-[#071d49]"
          >
            Managing Your
            <br />
            Indian Property,
            <br />
            <span className="text-[#a80f2c]">From the UK.</span>
          </h1>

          <p className="max-w-2xl !mt-6 text-base leading-7 text-[#405577] sm:text-lg sm:leading-8 lg:text-[clamp(1rem,1.45vw,1.55rem)]">
            Trusted advisory, end-to-end support and complete peace of mind for
            NRIs managing property in India.
          </p>

          <div className="!mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <Link
              to="/support"
              className="inline-flex items-center gap-4 rounded-xl bg-[#b31635] !px-6 !py-3.5 font-semibold text-white shadow-lg shadow-[#b31635]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#8f102b] sm:text-lg"
            >
              Book a Free Consultation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>

            <Link
              to="/nri-services"
              className="group inline-flex items-center gap-3 border-b-2 border-[#071d49] !px-1 !py-2 font-semibold text-[#071d49] transition-colors duration-200 hover:border-[#a80f2c] hover:text-[#a80f2c] sm:text-lg"
            >
              Explore Our Services
              <ArrowRight
                className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ul className="!mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-[#405577] sm:text-base lg:gap-x-6">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fae9ec] text-[#a80f2c]">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Ad;
