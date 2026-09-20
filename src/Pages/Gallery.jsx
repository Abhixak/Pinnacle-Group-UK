import React, { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";

import PMS from "../Components/PMS";
import Chatbot from "../Components/Chatbot";
import FreeConsultation from "../Components/FreeConsultation";
import AchievementsAwards from "../Components/AchievementsAwards";
import SEO from "../Components/SEO";

const fallbackPoster = "/NewLogo.png";
const toCloudinaryPoster = (src) => {
  if (!src || !src.includes("res.cloudinary.com")) return fallbackPoster;
  return src.replace(
    "/video/upload/",
    "/video/upload/so_0,f_jpg,q_auto,w_320/",
  );
};

const mediaList = [
  { type: "video", src: "https://res.cloudinary.com/dljubulyn/video/upload/v1774339838/web_gxekw0.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769763132/Podcast01_q8vrb0.webm" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769763141/Podcast02_zvljjn.webm" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769763115/Podcast03_h7x3oe.webm" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769853502/BEST_NRI_e1mfcv.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769763177/NRI_CONCLAVE_sjwwn7.webm" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769853574/BizNext_ecjk4q.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769853686/News18Podcast_qcxjel.mp4" },
  { type: "video", src: "https://res.cloudinary.com/dksbdsixz/video/upload/v1769853734/video1_f66kjb.mp4" },
  
  { type: "image", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Gallery/img1.jpeg?updatedAt=1769753329315" },
  { type: "image", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Gallery/img2.jpeg?updatedAt=1769753330067" },
  { type: "image", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Gallery/img3.jpeg?updatedAt=1769753330758" },
  { type: "image", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Gallery/img4.jpeg?updatedAt=1769753329312" },
  { type: "image", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Gallery/img5.jpeg?updatedAt=1769753329402" },
  { type: "image", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Gallery/img7.jpeg?updatedAt=1769755903251" },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState("all");
  const videoRef = useRef(null);
  const scrollRef = useRef(null);

  const filteredMedia =
    filter === "all" ? mediaList : mediaList.filter((m) => m.type === filter);

  useEffect(() => {
    let timeout;
    const playNext = () => {
      const currentMedia = filteredMedia[currentIndex];

      if (currentMedia?.type === "video" && videoRef.current) {
        videoRef.current.onended = () => {
          setCurrentIndex((prev) => (prev + 1) % filteredMedia.length);
        };
        videoRef.current.play();
      } else {
        timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % filteredMedia.length);
        }, 3000);
      }
    };

    playNext();

    return () => {
      clearTimeout(timeout);
      if (videoRef.current) videoRef.current.onended = null;
    };
  }, [currentIndex, filteredMedia]);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="rounded-xl bg-gray-100 !mx-4 !my-2">
      <SEO
        title="Gallery | NRI Property Services in India for UK NRIs"
        description="Explore videos and photos showcasing NRI property services, media coverage, and client engagement."
        path="/gallery"
        keywords="NRI property services testimonials, NRI property success stories UK, NRI real estate consultancy India"
      />
      <h1 className="text-3xl font-bold text-center !pt-6 text-red-600">
        NRI Property Services Gallery
      </h1>
      <p className="text-center text-gray-600 !mt-2 !mb-4">
        Videos, client moments, and media highlights from our NRI property
        services in India and the UK.
      </p>
      {/* <Chatbot /> */}
      <FreeConsultation />

      <div className="flex flex-col lg:flex-row !m-5 !px-4 !py-6 bg-gray-200 rounded-xl">
        {/* Media Player */}
        <div className="flex-1 bg-black rounded flex items-center justify-center border-4 border-black h-120 max-h-120 w-full max-w-[600px] !mx-auto lg:!mx-0">
          {filteredMedia[currentIndex]?.type === "image" ? (
            <img
              src={filteredMedia[currentIndex].src}
              alt="Gallery photo"
              className="w-full h-full object-contain"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <video
              ref={videoRef}
              src={filteredMedia[currentIndex].src}
              controls
              preload="none"
              poster={toCloudinaryPoster(filteredMedia[currentIndex].src)}
              className="w-full h-full object-contain"
              aria-label="Gallery video"
            />
          )}
        </div>

        {/* Media Selector */}
        <div className="flex-1 !p-4 w-full">
          <div className="flex flex-wrap gap-2 !mb-4">
            <button
              onClick={() => {
                setFilter("all");
                setCurrentIndex(0);
              }}
              className={`bg-gray-100 !px-4 !py-1 rounded border text-sm sm:text-base ${
                filter === "all"
                  ? "text-red-900 border-red-900 font-semibold"
                  : "border-transparent"
              }`}
            >
              All
            </button>
            <button
              onClick={() => {
                setFilter("image");
                setCurrentIndex(0);
              }}
              className={`bg-gray-100 !px-4 !py-1 rounded border text-sm sm:text-base ${
                filter === "image"
                  ? "text-red-900 border-red-900 font-semibold"
                  : "border-transparent"
              }`}
            >
              Photos
            </button>
            <button
              onClick={() => {
                setFilter("video");
                setCurrentIndex(0);
              }}
              className={`bg-gray-100 !px-4 !py-1 rounded border text-sm sm:text-base ${
                filter === "video"
                  ? "text-red-900 border-red-900 font-semibold"
                  : "border-transparent"
              }`}
            >
              Videos
            </button>
          </div>

          <hr className="!mb-4" />

          <div className="relative">
            <div
              ref={scrollRef}
              className={`grid grid-cols-3 sm:grid-cols-4 gap-6 overflow-auto !px-4 ${
                filteredMedia.length > 6 ? "whitespace-nowrap" : ""
              }`}
              style={{ maxHeight: "300px" }}
            >
              {filteredMedia.map((media, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`border-3 rounded cursor-pointer w-full bg-gray-800 min-h-[60px] max-h-[100px] ${
                    currentIndex === idx
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                >
                  {media.type === "image" ? (
                    <img
                      src={media.src}
                      alt="Gallery photo thumbnail"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <img
                      src={toCloudinaryPoster(media.src)}
                      alt="Gallery video thumbnail"
                      className="w-full h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <AchievementsAwards />
      <PMS />
      <hr />
      <Footer />
    </div>
  );
};

export default Gallery;
