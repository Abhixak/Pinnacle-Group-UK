import React, { useEffect, useRef, useState } from "react";
import Footer from "../Components/Footer";
import sampleImg1 from "../assets/gallery/img1.jpeg";
import sampleImg2 from "../assets/gallery/img2.jpeg";
import sampleVideo1 from "../assets/gallery/video1.mp4";
import sampleImg3 from "../assets/gallery/img3.jpeg";
import sampleImg4 from "../assets/gallery/img4.jpeg";
import sampleImg5 from "../assets/gallery/img5.jpeg";
// import sampleImg6 from "../assets/gallery/img6.jpeg";
import sampleImg7 from "../assets/gallery/img7.jpeg";

import PMS from "../Components/PMS";

const mediaList = [
  { type: "video", src: sampleVideo1 },
  { type: "image", src: sampleImg1 },
  { type: "image", src: sampleImg2 },
  { type: "image", src: sampleImg3 },
  { type: "image", src: sampleImg4 },
  { type: "image", src: sampleImg5 },
  // { type: "image", src: sampleImg6 },
  { type: "image", src: sampleImg7 },
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
      <h2 className="text-3xl font-bold text-center !pt-6 text-red-600">
        Gallery
      </h2>

      <div className="flex flex-col lg:flex-row !m-5 !px-4 !py-6 bg-gray-200 rounded-xl">
        {/* Media Player */}
        <div className="flex-1 bg-black rounded flex items-center justify-center border-4 border-black h-100 max-h-100 w-full max-w-[600px] !mx-auto lg:!mx-0">
          {filteredMedia[currentIndex]?.type === "image" ? (
            <img
              src={filteredMedia[currentIndex].src}
              alt="media"
              className="w-full h-full object-contain"
            />
          ) : (
            <video
              ref={videoRef}
              src={filteredMedia[currentIndex].src}
              controls
              className="w-full h-full object-contain"
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
                      alt="thumb"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        if (el) el.muted = true;
                      }}
                      src={media.src}
                      className="w-full h-full object-contain"
                      playsInline
                      preload="metadata"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <PMS />
      <hr />
      <Footer />
    </div>
  );
};

export default Gallery;
