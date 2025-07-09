import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import VisitCounter from "./VisitCounter";

const Footer = () => {
  return (
    <div className="bg-[#1c1c1c] text-white !py-5 !px-6 md:!px-20">
      <div className="w-full px-4">
        <section className="flex justify-between items-center">
          {/* Left: Social Icons */}
          <div className="flex gap-4 text-2xl items-center">
            <h3 className="text-lg">Follow us:</h3>
            <MdFacebook className="text-blue-600 cursor-pointer" />
            <AiFillInstagram className="text-[#E1306C] cursor-pointer" />
            <FaYoutube className="text-red-600 cursor-pointer" />
          </div>

          {/* Right: Visit Counter */}
          <div className="flex justify-end">
            <VisitCounter />
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-8 border-t border-gray-600 !pt-8">
        <div>
          <h4 className="text-lg font-semibold !mb-2">Write Us</h4>
          <p className="flex justify-center items-center gap-2 text-sm">
            <FaEnvelope /> info@nriproperty.uk
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold !mb-2">Call Us</h4>
          <p className="flex justify-center items-center gap-2 text-sm">
            <FaPhoneAlt />
            <span>UK: +44-7868143558</span>
            <span>IN: +91-9216399808</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
