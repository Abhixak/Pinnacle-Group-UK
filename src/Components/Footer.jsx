import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import VisitCounter from "./VisitCounter";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white !px-6 md:!px-20">
      {/* #6b1e1e ,#7c1d1d*/}
      {/* Social + Counter Row */}
      <div className="w-full !px-4">
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 !pt-4">
          {/* Left: Social Icons */}
          <div className="flex flex-wrap gap-4 text-2xl items-center">
            <h3 className="text-lg">Follow us:</h3>

            <a
              href="https://www.facebook.com/pinnacleinfra.co.in?ref=embed_page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdFacebook className="text-blue-600 cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/pinnaclegrouplondon/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="text-[#E1306C] cursor-pointer" />
            </a>

            <a
              href="https://youtube.com/@pinnaclegroupofficial?si=RICyMon1CkU2s2pp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="text-red-600 cursor-pointer" />
            </a>
          </div>

          {/* Right: Visit Counter */}
          <div className="flex justify-end">
            <VisitCounter />
          </div>
        </section>
      </div>

      {/* Contact Info - Centered */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-400 text-center md:text-center !pt-4 place-items-center">
        {/* Write Us */}
        <div className="!py-4">
          <h4 className="text-xl font-semibold !mb-2">Write Us</h4>
          <p className="flex justify-center items-center gap-2 text-lg !p-0 !m-0">
            <FaEnvelope /> info@nriproperty.uk
          </p>
        </div>

        {/* Call Us */}
        <div className="!py-6 w-full">
          {/* Wrap heading + numbers inside one flex container */}
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-semibold !mb-4">Call Us</h4>

            <div className="text-lg space-y-2">
              <div className="flex items-center gap-2 justify-center">
                <FaPhoneAlt className="text-base" />
                <span className="whitespace-nowrap">UK: +44-7868143558</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <FaPhoneAlt className="text-base" />
                <span className="whitespace-nowrap">IN: +91-9216399808</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <FaPhoneAlt className="text-base" />
                <span className="whitespace-nowrap">CA: +1-613-295-6385</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <FaPhoneAlt className="text-base" />
                <span className="whitespace-nowrap">US: +1-414-690-6435</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
