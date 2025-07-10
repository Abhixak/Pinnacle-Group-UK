import React from "react";
import Video from "../assets/video.mp4";
// import Poster from "../assets/poster.png";

const Ad = () => {
  return (
    <div className="!mb-4 rounded-xl bg-white">
      {/* Main Video */}
      <video
        src={Video}
        className="w-full aspect-video object-contain rounded-xl"
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        // poster={Poster}
      />
    </div>
  );
};

export default Ad;
