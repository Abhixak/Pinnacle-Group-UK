import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Youtube } from "lucide-react";

const youtubeVideos = [
  {
    id: 1,
    title: "SIR Impact on NRIs in India. Is your property safe?",
    videoId: "zFCt7v13Mms",
    category: "Property Safety",
  },
  {
    id: 2,
    title: "Client testimonial - Property sold in India with Pinnacle Group",
    videoId: "6KH24kxQOIo",
    category: "Case Study",
  },
  {
    id: 3,
    title: "Without RERA Registration, Do not buy or sell property in India?",
    videoId: "iVSguJuE4ww",
    category: "Legal & RERA",
  },
  {
    id: 4,
    title: "NRIs face these problems while selling property in India. Make it easy with Pinnacle Group",
    videoId: "ETBj2mWkq-I",
    category: "Selling Guide",
  },
  {
    id: 5,
    title: "How NRIs can Buy or Sell Indian property online from abroad?",
    videoId: "vRjl19posdA",
    category: "Remote Process",
  },
  {
    id: 6,
    title: "How to Manage Property in India from Abroad?",
    videoId: "yW6ad_0eNxo",
    category: "Management",
  },
  {
    id: 7,
    title: "SPA or GPA? Which one NRIs should use while Buying or Selling Property in India?",
    videoId: "IRTP3CMuAl8",
    category: "POA & GPA",
  },
  {
    id: 8,
    title: "How to Save tax in India while Buying or Selling property in India as NRI?",
    videoId: "C4b-MOEVSSQ",
    category: "Tax Planning",
  },
  {
    id: 9,
    title: "NRIs Face These BIG Problems after Buying & Selling Property in India.",
    videoId: "r-DIlXcJEkM",
    category: "Advisory",
  },
  {
    id: 10,
    title: "Title Verification & Legal Due Diligence for NRI Property Investments",
    videoId: "zFCt7v13Mms",
    category: "Due Diligence",
  },
];

function YouTubeCard({ videoId, title, category }) {
  const [play, setPlay] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="group relative flex flex-col h-full overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
      {/* Video / Thumbnail Container */}
      <div className="relative aspect-video w-full bg-slate-950 overflow-hidden">
        {!play ? (
          <>
            <img
              src={thumbnail}
              alt={title}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
              onClick={() => setPlay(true)}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent cursor-pointer"
              onClick={() => setPlay(true)}
            />

            {/* Category Tag */}
            {category && (
              <span className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-xs !px-2 !py-0.5 text-[10px] font-medium text-white shadow-xs">
                <Youtube className="w-3 h-3 text-red-500" />
                <span>{category}</span>
              </span>
            )}

            {/* Play Button Overlay */}
            <button
              onClick={() => setPlay(true)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer group/btn"
              aria-label={`Play video: ${title}`}
            >
              <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#9d1c1a] text-white shadow-lg transition-all duration-300 group-hover/btn:scale-115 group-hover/btn:bg-red-600">
                <Play className="h-5 w-5 fill-current !ml-0.5" />
              </div>
            </button>
          </>
        ) : (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&cc_load_policy=1&cc_lang_pref=en&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>

      {/* Title & Info */}
      <div className="flex flex-col justify-between flex-1 !p-3 sm:!p-3.5 bg-white">
        <h3
          className="text-xs sm:text-sm font-semibold text-[#102a4c] group-hover:text-[#9d1c1a] transition-colors line-clamp-2 leading-snug cursor-pointer"
          onClick={() => setPlay(true)}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function YouTubeSection() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.75 || 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      aria-label="NRI Knowledge Hub Video Section"
      className="content-auto relative w-full rounded-2xl border border-slate-200 bg-white !px-4 !py-7 !my-6 sm:!px-6 md:!px-10 md:!py-9 shadow-xs"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 !mb-5 sm:!mb-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
            NRI Knowledge Hub
          </p>
          <h2 className="!mt-1.5 font-serif text-2xl sm:text-3xl font-semibold text-[#102a4c] md:text-4xl">
            Important Videos for NRIs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm !mt-1 max-w-xl leading-relaxed">
            Watch essential video guides on Indian property laws, 15CA/CB tax clearance, Power of Attorney, and dispute resolution.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-200 ${
              !canScrollLeft
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-slate-100 hover:border-slate-300 active:scale-95 cursor-pointer"
            }`}
            aria-label="Scroll videos left"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-xs transition-all duration-200 ${
              !canScrollRight
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-slate-100 hover:border-slate-300 active:scale-95 cursor-pointer"
            }`}
            aria-label="Scroll videos right"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <a
            href="https://www.youtube.com/@NRIPropertyService"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-red-600 !px-3.5 !py-2 text-xs font-semibold text-white shadow-xs hover:bg-red-700 transition-colors !ml-2"
          >
            <Youtube className="h-3.5 w-3.5" />
            <span>Channel</span>
          </a>
        </div>
      </div>

      {/* 2 Rows Horizontal Scroll Container with Visible Scrollbar Below */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        tabIndex={0}
        aria-label="Scrollable YouTube videos grid in 2 rows"
        className="overflow-x-auto overflow-y-hidden !pb-3.5 custom-video-scrollbar focus:outline-hidden"
      >
        <div className="grid grid-rows-2 grid-flow-col gap-3 sm:gap-4 md:gap-5 auto-cols-[250px] sm:auto-cols-[290px] md:auto-cols-[330px]">
          {youtubeVideos.map((video) => (
            <YouTubeCard
              key={video.id}
              videoId={video.videoId}
              title={video.title}
              category={video.category}
            />
          ))}
        </div>
      </div>

      {/* Scrollbar styling */}
      <style>{`
        .custom-video-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #9d1c1a #f1f5f9;
        }
        .custom-video-scrollbar::-webkit-scrollbar {
          height: 8px;
          display: block;
        }
        .custom-video-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 9999px;
          margin: 0 4px;
        }
        .custom-video-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 9999px;
          border: 1.5px solid #f1f5f9;
          transition: background 0.2s ease;
        }
        .custom-video-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9d1c1a;
        }
      `}</style>
    </section>
  );
}
