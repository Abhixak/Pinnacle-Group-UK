import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function RelatedServices({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <section className="!my-10 rounded-2xl border border-slate-200 bg-white !p-6 sm:!p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 !mb-6 border-b border-slate-100 !pb-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9d1c1a]">Explore Connected Support</p>
          <h2 className="!mt-1 text-xl sm:text-2xl font-bold text-[#102a4c]">Related NRI Services</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 max-w-md">
          Explore adjacent real estate, tenancy, and legal services tailored for NRIs living abroad.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((item) => {
          const Icon = item.icon || ArrowRight;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-col justify-between rounded-xl border border-slate-200/90 bg-[#fffdfa] !p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#9d1c1a]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center gap-2.5 text-[#9d1c1a] !mb-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#fae9ec]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">{item.tag || "NRI Service"}</span>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm sm:text-base group-hover:text-[#9d1c1a] transition-colors leading-snug">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="!mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="!mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[#9d1c1a]">
                <span>{item.actionLabel || "View service"}</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

