import React, { useEffect, useState } from "react";
import Video from "../assets/AdVideo.mp4";

const Ad = () => {
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showAd) return null;

  return (
    <div className="!px-5 ">
      {/* Fullscreen blur overlay
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"></div>

      <div className="fixed left-5 top-3 z-50 bg-blue-200 !p-4 gap-4 flex flex-col justify-between shadow-lg rounded-xl">
        <button
          onClick={() => setShowAd(false)}
          className="self-end flex items-center font-bold text-red-600 hover:text-red-800 text-xl"
          aria-label="Close"
        >
          <FaTimes className="!mr-1" /> CLOSE AD
        </button> */}

      {/* Videos */}
      <video
        src={Video}
        className="relative w-full h-auto max-h-[40em] object-fit rounded-xl"
        muted
        autoPlay
        loop
      />

      {/* </div> */}
    </div>
  );
};

export default Ad;
