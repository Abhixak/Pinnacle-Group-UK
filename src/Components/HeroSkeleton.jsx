import React from "react";

const HeroSkeleton = () => {
  return (
    <section
      className="relative isolate w-full min-h-[580px] sm:min-h-[620px] lg:min-h-0 lg:aspect-[16/9] overflow-hidden rounded-2xl bg-[#f8fafc] border border-slate-200/80 shadow-md select-none animate-pulse"
      aria-label="Loading hero section..."
      aria-busy="true"
    >
      {/* Background Skeleton & Shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/50 to-slate-100" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />

      {/* Content Placeholders */}
      <div className="relative z-10 flex min-h-[580px] sm:min-h-[620px] lg:min-h-0 lg:h-full items-center !px-5 sm:!px-8 md:!px-10 lg:w-[62%] xl:w-[58%] lg:!px-[3.8vw]">
        <div className="w-full max-w-2xl py-8 space-y-5">
          {/* Badge Skeleton */}
          <div className="h-7 w-48 rounded-full bg-slate-200/90" />

          {/* Title Lines Skeleton */}
          <div className="space-y-3 pt-1">
            <div className="h-10 sm:h-12 md:h-14 w-[75%] rounded-xl bg-slate-200/90" />
            <div className="h-10 sm:h-12 md:h-14 w-[85%] rounded-xl bg-slate-200/90" />
            <div className="h-10 sm:h-12 md:h-14 w-[60%] rounded-xl bg-red-100/80" />
          </div>

          {/* Description Paragraph Skeleton */}
          <div className="space-y-2 pt-2 max-w-xl">
            <div className="h-4 w-full rounded bg-slate-200/80" />
            <div className="h-4 w-[92%] rounded bg-slate-200/80" />
            <div className="h-4 w-[68%] rounded bg-slate-200/80" />
          </div>

          {/* Buttons Skeleton */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
            <div className="h-12 w-48 rounded-xl bg-[#9d1c1a]/25" />
            <div className="h-12 w-44 rounded-xl bg-slate-200/80 border border-slate-300/60" />
          </div>

          {/* Highlights Skeleton */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="h-6 w-36 rounded-full bg-slate-200/70" />
            <div className="h-6 w-40 rounded-full bg-slate-200/70" />
            <div className="h-6 w-44 rounded-full bg-slate-200/70" />
          </div>
        </div>
      </div>

      {/* Indicator Dots Skeleton */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-white/60 px-3.5 py-1.5 rounded-full border border-white/60">
        <div className="w-8 h-2 rounded-full bg-slate-300" />
        <div className="w-2.5 h-2 rounded-full bg-slate-300" />
        <div className="w-2.5 h-2 rounded-full bg-slate-300" />
      </div>
    </section>
  );
};

export default HeroSkeleton;

