import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="content-auto relative !my-8 overflow-hidden rounded-2xl bg-[#0d2948] !px-6 !py-12 text-white md:!px-12">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10" />
      <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full border border-white/10" />
      <div className="relative max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-red-200">
          About Pinnacle Group
        </p>
        <h2 className="!mt-3 font-serif text-3xl font-semibold md:text-4xl">
          Trusted property support, across borders.
        </h2>
        <p className="!mt-5 max-w-4xl text-sm leading-7 text-white/75">
          As one of the leading service providers operating in the real estate domain, Pinnacle
          Group offers support according to the varied property needs of its clients.
        </p>
        <p className="!mt-3 max-w-4xl text-sm leading-7 text-white/75">
          Located in India, the United Kingdom, the United States of America and Canada, we
          specialise in NRI Property Management Services including buying, selling, leasing and
          property loan consultancy.
        </p>
        <Link
          to="/contact"
          className="!mt-7 inline-flex items-center gap-2 rounded-md bg-[#a9203b] !px-6 !py-3 font-semibold text-white transition-colors hover:bg-[#86172f]"
        >
          Read more
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
