import React, { useEffect, useState } from 'react';
import Video from '../assets/Video.mp4';
import Video2 from '../assets/Video2.mp4';
import { FaTimes } from 'react-icons/fa';

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
    <>
      {/* Fullscreen blur overlay */}
      <div className="fixed inset-0 z-40 backdrop-blur-sm bg-black/30"></div>

      {/* Ad container */}
      <div className="fixed left-5 top-3 z-50 bg-blue-200 !p-4 gap-4 flex flex-col justify-between shadow-lg rounded-xl">
        {/* Close Button */}
        <button
          onClick={() => setShowAd(false)}
          className="self-end flex items-center font-bold text-red-600 hover:text-red-800 text-xl"
          aria-label="Close"
        >
          <FaTimes className="!mr-1" /> CLOSE AD
        </button>

        {/* Videos */}
        <video src={Video} className="h-60 md:h-70 xl:h-80 rounded-lg" muted autoPlay loop />
        <video src={Video2} className="h-60 md:h-70 xl:h-80 rounded-lg" muted autoPlay loop />
      </div>
    </>
  );
};

export default Ad;
