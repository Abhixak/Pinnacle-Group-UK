import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt, FaYoutube, FaArrowUp, FaTimes } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import VisitCounter from "./VisitCounter";

import nri from "../assets/NRI-Conclave2.jpeg";
import minister from "../assets/Central-Minister.jpeg";
import MagnifierImage from "./MagnifierImage";

const Footer = () => {
  const [popupImage, setPopupImage] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleImageClick = (src) => {
    if (window.innerWidth < 1024) {
      setPopupImage(src);
    }
  };

  return (
    <div className="bg-gray-100 rounded !mb-6 !px-6 md:!px-20 text-gray-800">
      {/* Social + Counter Row */}
      <div className="w-full !px-4">
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 !pt-4">
          {/* Social Icons */}
          <div className="flex flex-wrap gap-4 text-3xl items-center">
            <h3 className="text-lg text-[#6b1e1e]">Follow us:</h3>
            <a href="https://www.facebook.com/pinnacleinfra.co.in?ref=embed_page" target="_blank" rel="noopener noreferrer">
              <MdFacebook className="text-blue-600 cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/pinnaclegrouplondon/" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram className="text-[#E1306C] cursor-pointer" />
            </a>
            <a href="https://youtube.com/@pinnaclegroupofficial?si=RICyMon1CkU2s2pp" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-red-600 cursor-pointer" />
            </a>
          </div>

          {/* Visit Counter & Scroll Top */}
          <div className="flex flex-col items-center gap-2">
            <VisitCounter />
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-800 border-2 cursor-pointer bg-white !px-4 !py-2 !mx-2 !mb-6 rounded-full transition"
            >
              <FaArrowUp />
              Go to Top
            </button>
          </div>
        </section>
      </div>

      {/* Contact Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-gray-300 text-center !p-6 place-items-center">
        {/* Achievements & Awards */}
        <div className="w-full max-w-md !mx-auto !py-4 rounded-xl">
          <h4 className="text-md md:text-lg xl:text-xl !px-4 font-semibold !mb-4 text-[#6b1e1e]">
            Achievements & Awards
          </h4>

          <div className="!px-4 flex flex-col sm:flex-row sm:justify-center sm:items-stretch items-center gap-6">
            {/* Award 1 */}
            <div className="flex flex-col items-center justify-center text-center w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
              <p className="text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg !m-4 sm:!mb-2 break-words text-center">
                NRI CONCLAVE - 2025
              </p>
              {/* Magnifier on LG+ screens */}
              <div className="hidden lg:block cursor-zoom-in">
                <MagnifierImage src={nri} alt="NRI Conclave" width={140} height={160} zoom={2} />
              </div>
              {/* Clickable image on smaller screens */}
              <img
                src={nri}
                alt="NRI Conclave"
                className="block lg:hidden w-[140px] h-[160px] object-cover cursor-pointer"
                onClick={() => handleImageClick(nri)}
              />
            </div>

            {/* Award 2 */}
            <div className="flex flex-col items-center justify-center text-center w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
              <p className="text-blue-600 text-xs sm:text-sm md:text-base lg:text-lg !mb-4 sm:!mb-2 break-words text-center">
                BEST NRI PROPERTY MANAGEMENT SERVICES - 2024
              </p>
              <div className="hidden lg:block cursor-zoom-in">
                <MagnifierImage src={minister} alt="Minister Harsh Malhotra" width={140} height={160} zoom={2} />
              </div>
              <img
                src={minister}
                alt="Minister Harsh Malhotra"
                className="block lg:hidden w-[140px] h-[160px] object-cover cursor-pointer"
                onClick={() => handleImageClick(minister)}
              />
            </div>
          </div>
        </div>

        {/* Write Us */}
        <div className="!py-4 w-full max-w-md">
          <h4 className="text-lg font-semibold !mb-2 text-[#6b1e1e]">Write Us</h4>
          <p className="flex justify-center items-center gap-2 text-base !p-0 !m-0">
            <FaEnvelope className="text-[#c53030]" />
            <a href="mailto:info@nriproperty.uk" className="text-[#007BFF]">info@nriproperty.uk</a>
          </p>
        </div>

        {/* Call Us */}
        <div className="!py-6 w-full max-w-md">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold !mb-4 text-[#6b1e1e]">Call Us</h4>
            <div className="text-base space-y-2">
              {[
                { label: "UK", number: "+44-7868143558", href: "tel:+447868143558" },
                { label: "IN", number: "+91-9216399808", href: "tel:+919216399808" },
                { label: "CA", number: "+1-613-295-6385", href: "tel:+16132956385" },
                { label: "US", number: "+1-414-690-6435", href: "tel:+14146906435" },
              ].map(({ label, number, href }) => (
                <div key={label} className="flex gap-2 text-[#c53030] items-start justify-start">
                  <FaPhoneAlt className="text-base !mt-1 lg:!mt-2" />
                  {label}:
                  <a href={href} className="whitespace-nowrap text-left text-[#007BFF]">{number}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal for popup image on mobile/tablet */}
      {popupImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <button
              onClick={() => setPopupImage(null)}
              className="absolute top-2 right-2 text-white text-xl bg-red-600 rounded-full !p-1"
            >
              <FaTimes />
            </button>
            <img
              src={popupImage}
              alt="Enlarged"
              className="max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
