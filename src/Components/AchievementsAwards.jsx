import React, { useState } from "react";
import MagnifierImage from "./MagnifierImage";

const AchievementsAwards = () => {
  const [popupImage, setPopupImage] = useState(null);

  const awards = [
    { name: "NRI CONCLAVE - 2025", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/NRI-Conclave2.jpeg?updatedAt=1769753330830&tr=w-500,q-70", alt: "NRI Conclave" },
    { name: "BEST NRI PROPERTY MANAGEMENT SERVICES - 2024", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Central-Minister.jpeg?updatedAt=1769753329382&tr=w-500,q-70", alt: "Minister Harsh Malhotra" },
    { name: "NEWS 18 BIZ NEXT - 2025", src: "https://ik.imagekit.io/5reuqzdy6j/nriproperty.uk/Biz-Next.png?updatedAt=1769753330849&tr=w-500,q-70", alt: "News 18 Biz Next" },
  ];

  const handleImageClick = (src) => {
    // Only open popup on mobile
    if (window.innerWidth < 1024) setPopupImage(src);
  };

  const closePopup = () => setPopupImage(null);

  return (
    <div className="w-full !mx-auto !py-6 !px-4 rounded-xl">
      <h4 className="text-2xl md:text-xl xl:text-2xl font-bold underline !mb-6 text-red-600 text-center">
        Achievements & Awards
      </h4>

      <div className="grid md:grid-cols-3 md:place-items-center justify-center items-between gap-6">
        {awards.map((award, idx) => (
          <div 
            key={idx} 
            className="flex flex-col !mt-4 justify-center items-center text-center w-40 sm:w-44 md:w-48 bg-white !p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-[#e0e0e0]"
          >
            <p className="text-blue-600 text-sm md:text-base lg:text-lg !mb-2 break-words">
              {award.name}
            </p>

            {/* Desktop: Magnifier */}
            <div className="hidden lg:block cursor-zoom-in">
              <MagnifierImage src={award.src} alt={award.alt} width={160} height={180} zoom={2} />
            </div>

            {/* Mobile: Clickable image */}
            <img
              src={award.src}
              alt={award.alt}
              className="block lg:hidden w-40 h-44 object-cover cursor-pointer rounded-md shadow-md transition-transform duration-300 hover:scale-105"
              onClick={() => handleImageClick(award.src)}
              loading="lazy"
              decoding="async"
              width="160"
              height="176"
            />
          </div>
        ))}
      </div>

      {/* Popup for mobile */}
      {popupImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 !p-4"
          onClick={closePopup}
        >
          <img
            src={popupImage}
            alt="Award"
            className="max-w-full max-h-full rounded-md shadow-lg"
            decoding="async"
            width="640"
            height="480"
          />
        </div>
      )}
    </div>
  );
};

export default AchievementsAwards;
