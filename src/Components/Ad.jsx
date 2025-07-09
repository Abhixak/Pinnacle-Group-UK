import React, { useEffect, useState } from "react";
import Video from "../assets/AdVideo.mp4";
import Poster from "../assets/poster.png"

const Ad = () => {
  return (
    <div className="!p-5 !mb-4 bg-gray-100 rounded-xl">
      <video
        src={Video}
        className="relative w-full h-auto max-h-[40em] object-cover rounded-xl"
        muted
        autoPlay
        loop
        preload="metadata"
        poster={Poster}
      />
    </div>
  );
};

export default Ad;
