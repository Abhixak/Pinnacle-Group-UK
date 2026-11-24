import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Building2,
  Clock,
  Home,
  KeyRound,
  Landmark,
  Scale,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: "buy-sell",
    tag: "Valuation & Sales",
    icon: TrendingUp,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/buy&sell.png?updatedAt=1769753340851&tr=w-600,q-70,f-auto",
    alt: "Buy and Sell Property Assistance for NRIs",
    title: "Buy & Sell Assistance",
    desc: "Fair market valuation, vetted buyers, remote POA execution, and compliant repatriation to the UK.",
  },
  {
    id: "management",
    tag: "Tenancy & Care",
    icon: Building2,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Management.png?updatedAt=1769753343827&tr=w-600,q-70,f-auto",
    alt: "Property Management in India",
    title: "Property Management",
    desc: "Routine physical inspections, tenant background verification, rent collection, and repairs oversight.",
  },
  {
    id: "legal",
    tag: "Disputes & POA",
    icon: Scale,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/legal.png?updatedAt=1769753343762&tr=w-600,q-70,f-auto",
    alt: "Legal Documentation and Litigation",
    title: "Legal & Litigation Support",
    desc: "Resolution of illegal possession, succession certificates, family partition, and high-court representation.",
  },
  {
    id: "title",
    tag: "30-Year Search",
    icon: ShieldCheck,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/title%20Clearing.png?updatedAt=1769753345500&tr=w-600,q-70,f-auto",
    alt: "Title Verification and Due Diligence",
    title: "Title Verification & Search",
    desc: "Comprehensive 30-year search, mutation entries, encumbrance verification, and revenue records clearance.",
  },
  {
    id: "finance",
    tag: "15CA/CB & Tax",
    icon: Landmark,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/tax.png?updatedAt=1769753346511&tr=w-600,q-70,f-auto",
    alt: "Tax and Financial Advisory for NRIs",
    title: "Tax & Financial Advisory",
    desc: "DTAA double-taxation relief, lower TDS certificate (Form 13), 15CA/15CB filings, and NRE/NRO banking.",
  },
  {
    id: "leasing",
    tag: "Rental Returns",
    icon: KeyRound,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Leasing%20Property.jpg?updatedAt=1769753330380&tr=w-600,q-70,f-auto",
    alt: "Leasing and Tenant Placement in India",
    title: "Leasing & Rental Services",
    desc: "Corporate and vetted residential tenant placement, registered lease agreements, and zero vacancy targets.",
  },
  {
    id: "buying",
    tag: "Curated Portfolios",
    icon: Home,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Buying%20Property.jpg?updatedAt=1769753330238&tr=w-600,q-70,f-auto",
    alt: "Property Buying and Investment in India",
    title: "Buying & Investment",
    desc: "RERA-vetted A-grade residential and commercial properties with high yields and builder legal audits.",
  },
  {
    id: "support",
    tag: "Always Available",
    icon: Clock,
    img: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/24%20x%207.png?updatedAt=1769753346293&tr=w-600,q-70,f-auto",
    alt: "24x7 Dedicated NRI Support",
    title: "24x7 Dedicated Support",
    desc: "A single dedicated relationship manager across UK and India time zones via WhatsApp, calls, and email.",
  },
];

const PMS = () => {
  return (
    <section
      aria-label="NRI Property Management and Advisory Services"
      className="grid grid-cols-2 gap-3 !px-3 !pt-5 !pb-2 sm:gap-4 sm:!px-6 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:!px-10"
    >
      {services.map((item) => {
        const IconComponent = item.icon;
        return (
          <Link
            key={item.id}
            to={`/service-details/${item.id}`}
            className="group relative flex flex-col h-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white !p-2.5 sm:!p-3.5 md:!p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#9d1c1a]/40 hover:no-underline hover:shadow-xl focus:outline-hidden focus:ring-2 focus:ring-[#9d1c1a]/30"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl bg-slate-100 !mb-2.5 sm:!mb-3">
              <img
                src={item.img}
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
                width="360"
                height="225"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />

              {/* Tag Badge */}
              <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-xs !px-1.5 !py-0.5 sm:!px-2 sm:!py-1 text-[9px] sm:text-[11px] font-semibold text-[#102a4c] shadow-xs">
                <IconComponent className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#9d1c1a]" />
                <span className="truncate max-w-[75px] sm:max-w-none">{item.tag}</span>
              </span>

              {/* Quick Arrow Icon on Image */}
              <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/90 text-[#102a4c] opacity-0 shadow-xs transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-[#9d1c1a] group-hover:text-white">
                <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xs sm:text-sm md:text-base font-bold text-[#102a4c] transition-colors duration-200 group-hover:text-[#9d1c1a] line-clamp-1 sm:line-clamp-2 !mb-1 sm:!mb-1.5 leading-snug">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 line-clamp-2 md:line-clamp-3 leading-relaxed !mb-2.5">
              {item.desc}
            </p>

            {/* Learn More Footer */}
            <div className="!mt-auto !pt-1 flex items-center justify-between text-[10px] sm:text-xs font-semibold text-[#9d1c1a] group-hover:text-[#7f1614]">
              <span>Explore details</span>
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default PMS;
