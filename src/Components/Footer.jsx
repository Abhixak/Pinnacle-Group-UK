import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaEnvelope, FaPhoneAlt, FaYoutube, FaArrowUp } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import VisitCounter from "./VisitCounter";

import nri from "../assets/NRI-Conclave2.jpeg";
import minister from "../assets/Central-Minister.jpeg";
import MagnifierImage from "./MagnifierImage";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-100 rounded !mb-6 !px-6 md:!px-20 text-gray-800">
      {/* Social + Counter Row */}
      <div className="w-full !px-4">
        <section className="flex flex-col md:flex-row justify-between items-center gap-4 !pt-4">
          {/* Left: Social Icons */}
          <div className="flex flex-wrap gap-4 text-2xl items-center">
            <h3 className="text-lg text-[#6b1e1e]">Follow us:</h3>
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

          {/* Right: Visit Counter + Scroll to Top */}
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 border-t border-gray-300 text-center !p-6 place-items-center">
        {/* Achievements & Awards */}
        <div className="w-full max-w-sm !mx-auto !py-4 overflow-hidden rounded-xl">
          <h4 className="text-md md:text-lg xl:text-xl !px-4 font-semibold !mb-4 text-[#6b1e1e]">
            Achievements & Awards
          </h4>

          <div className="!px-4 flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Award 1 */}
            <div className="flex flex-col items-center text-center">
              <p className="text-blue-600 text-sm md:text-base !mb-4 sm:!mb-12">
                NRI CONCLAVE - 2025
              </p>
              <MagnifierImage
                src={nri}
                alt="NRI Conclave"
                width={180}
                height={192}
                zoom={2}
                
              />
            </div>

            {/* Award 2 */}
            <div className="flex flex-col items-center text-center">
              <p className="text-blue-600 text-sm md:text-base !mb-4 sm:!mb-1">
                BEST NRI PROPERTY MANAGEMENT SERVICES - 2024
              </p>
              <MagnifierImage
                src={minister}
                alt="Minister Harsh Malhotra"
                width={180}
                height={192}
                zoom={2}
              />
            </div>
          </div>
        </div>

        {/* Write Us */}
        <div className="!py-4">
          <h4 className="text-xl font-semibold !mb-2 text-[#6b1e1e]">
            Write Us
          </h4>
          <p className="flex justify-center items-center gap-2 text-lg !p-0 !m-0">
            <FaEnvelope className="text-[#c53030]" />
            <a href="mailto:info@nriproperty.uk" className="text-[#007BFF]">
              info@nriproperty.uk
            </a>
          </p>
        </div>

        {/* Call Us */}
        <div className="!py-6 w-full">
          <div className="flex flex-col items-center text-center">
            <h4 className="text-xl font-semibold !mb-4 text-[#6b1e1e]">
              Call Us
            </h4>
            <div className="text-lg space-y-2">
              {[
                {
                  label: "UK",
                  number: "+44-7868143558",
                  href: "tel:+447868143558",
                },
                {
                  label: "IN",
                  number: "+91-9216399808",
                  href: "tel:+919216399808",
                },
                {
                  label: "CA",
                  number: "+1-613-295-6385",
                  href: "tel:+16132956385",
                },
                {
                  label: "US",
                  number: "+1-414-690-6435",
                  href: "tel:+14146906435",
                },
              ].map(({ label, number, href }) => (
                <div
                  key={label}
                  className="flex gap-2 text-[#c53030] items-start justify-start"
                >
                  <FaPhoneAlt className="text-base !mt-1 lg:!mt-2" />
                  {label}:
                  <a
                    href={href}
                    className="whitespace-nowrap text-left text-[#007BFF]"
                  >
                    {number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
