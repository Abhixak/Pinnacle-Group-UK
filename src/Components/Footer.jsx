import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import VisitCounter from "./VisitCounter";

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] text-white !py-5 !px-6 md:!px-20">
      {/* Social + Counter Row */}
      <div className="w-full !px-4">
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
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

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8 border-t border-gray-600 !pt-8 !mt-6">
        {/* Write Us */}
        <div>
          <h4 className="text-lg font-semibold !mb-2">Write Us</h4>
          <p className="flex justify-center items-center gap-2 text-sm !p-0 !m-0">
            <FaEnvelope /> info@nriproperty.uk
          </p>
        </div>

        {/* Call Us */}
        <div>
          <h4 className="text-lg font-semibold !mb-2">Call Us</h4>
          <div className="text-sm">
            <p className="flex justify-center items-center gap-2 !m-0 !p-0">
              <FaPhoneAlt /> UK: +44-7868143558
            </p>
            <p className="flex justify-center items-center gap-2 !m-0 !p-0">
              <FaPhoneAlt /> IN: +91-9216399808
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
