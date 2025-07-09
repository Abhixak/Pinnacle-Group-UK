import React, { useEffect, useState } from "react";
import Video from "../assets/AdVideo.mp4";

const Ad = () => {
  return (
    <div className="!p-5 !mb-4 bg-gray-200 border-4 rounded-xl">
      <video
        src={Video}
        className="relative w-full h-auto max-h-[40em] object-cover rounded-xl"
        muted
        autoPlay
        loop
        preload="metadata"
        // poster="/path/to/preview.jpg"
      />
    </div>
  );
};

export default Ad;
