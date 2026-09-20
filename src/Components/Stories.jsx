import React, { useState, useRef } from "react";

const youtubeVideos = [
  {
    id: 1,
    title: "SIR Impact on NRIs in India. Is your property safe?",
    videoId: "zFCt7v13Mms",
  },
  {
    id: 2,
    title: "Client testimonial - Property sold in India with Pinnacle Group",
    videoId: "6KH24kxQOIo",
  },
  {
    id: 3,
    title: "Without RERA Registration, Do not buy or sell property in India?",
    videoId: "iVSguJuE4ww",
  },
  {
    id: 4,
    title: "NRIs face these problems while selling property in India. Make it easy with Pinnacle Group",
    videoId: "ETBj2mWkq-I",
  },
  {
    id: 5,
    title: "How NRIs can Buy or Sell Indian property online from abroad?",
    videoId: "vRjl19posdA",
  },
  {
    id: 6,
    title: "How to Manage Property in India from Abroad?",
    videoId: "yW6ad_0eNxo",
  },
  {
    id: 7,
    title:
      "SPA or GPA? Which one NRIs should use while Buying or Selling Property in India?",
    videoId: "IRTP3CMuAl8",
  },
  {
    id: 8,
    title:
      "How to Save tax in India while Buying or Selling property in India as NRI?",
    videoId: "C4b-MOEVSSQ",
  },
  {
    id: 9,
    title:
      "NRIs Face These BIG Problems after Buying & Selling Property in India.",
    videoId: "r-DIlXcJEkM",
  },
];

function YouTubeCard({ videoId, title }) {
  const [play, setPlay] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="flex-shrink-0 w-72 sm:w-80">
      <div className="rounded-xl overflow-hidden shadow bg-white">
        <div className="relative aspect-video bg-black">
          {!play ? (
            <>
              <img
                src={thumbnail}
                alt={title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setPlay(true)}
              />

              {/* faded play button */}
              <button
                onClick={() => setPlay(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label={`Play video: ${title}`}
              >
                <div className="w-16 h-16 rounded-full bg-black/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8 !ml-1"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?cc_load_policy=1&cc_lang_pref=en&rel=0&modestbranding=1&playsinline=1`}
              title={title}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        <div className="!p-3">
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default function YouTubeSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = 350;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="content-auto relative w-full rounded-2xl border border-slate-200 bg-white !px-6 !py-9 !my-6 md:!px-10">
      {/* Header */}
      <div className="!mx-auto !mb-4">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9d1c1a]">
          NRI Knowledge Hub
        </p>
        <h2 className="!mt-2 font-serif text-3xl font-semibold text-[#102a4c] md:text-4xl">
          Important Videos for NRIs
        </h2>
        <p className="text-gray-600 !mt-1">
          Swipe to explore property, tax, POA, GPA and legal videos.
        </p>
      </div>

      {/* Slider wrapper */}
      <div className="relative !mx-auto">
        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10
                     bg-white shadow-lg rounded-full w-10 h-10
                     items-center justify-center hover:bg-gray-100 "
          aria-label="Scroll videos left"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10
                     bg-white shadow-lg rounded-full w-10 h-10
                     items-center justify-center hover:bg-gray-100"
          aria-label="Scroll videos right"
        >
          ›
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 !pb-2">
            {youtubeVideos.map((video) => (
              <YouTubeCard
                key={video.id}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </div>

      {/* scrollbar hide */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          height: 6px;
          display: none;
        }
        .scrollbar-hide::-webkit-scrollbar-thumb {
          background: rgba(0,0,0,0.25);
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}
