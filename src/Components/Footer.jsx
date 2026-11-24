import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowUp,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import VisitCounter from "./VisitCounter";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gradient-to-b from-[#f9fafb] via-[#f3f4f6] to-[#eef2f7] rounded-2xl !mt-2 !mb-5 !px-4 md:!px-12 text-gray-800 w-full text-xs sm:text-sm border border-slate-200 shadow-sm">
      {/* TOP BAR */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 !pt-3">
        {/* SOCIAL */}
        <div className="flex gap-3 text-xl">
          <a
            href="https://www.facebook.com/pinnacleinfra.co.in"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <MdFacebook className="text-blue-600" />
          </a>
          <a
            href="https://www.instagram.com/nripropertyservices"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <AiFillInstagram className="text-pink-600" />
          </a>
          <a
            href="https://www.youtube.com/@NRIPropertyService"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <FaYoutube className="text-red-600" />
          </a>
          <a
            href="https://www.tiktok.com/@nripropertyservice"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <FaTiktok className="text-slate-900" />
          </a>
        </div>

        {/* COUNTER + TOP */}
        <div className="flex items-center gap-3">
          <VisitCounter />
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm bg-white/90 border border-slate-200 !px-4 !py-2 rounded-full shadow-sm hover:shadow-md transition"
          >
            <FaArrowUp /> Top
          </button>
        </div>
      </div>

      {/* ================= DESKTOP FOOTER ================= */}
      <div className="hidden md:grid grid-cols-4 gap-6 justify-center border-t border-slate-200 !mt-3 !pt-5">
        {/* CORE SERVICES */}
        <div>
          <h4 className="font-semibold text-[#7a1f2b] !mb-2.5 text-sm uppercase tracking-wider">
            NRI Services & Guides
          </h4>
          <ul className="flex flex-col gap-y-1 text-slate-700">
            <li>
              <Link to="/nri-services" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] font-medium transition-colors">
                NRI Services Hub
              </Link>
            </li>
            <li>
              <Link to="/buy-property-india-from-uk" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Buy Property in India
              </Link>
            </li>
            <li>
              <Link to="/sell-property-india-from-uk" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Sell Property in India
              </Link>
            </li>
            <li>
              <Link to="/lease-property-india-for-nri" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Lease Property in India
              </Link>
            </li>
            <li>
              <Link to="/service-details/management" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Property Management
              </Link>
            </li>
            <li>
              <Link to="/nri-property-legal-litigation-india" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Legal & Documentation
              </Link>
            </li>
          </ul>
        </div>

        {/* COMPANY & ESSENTIALS */}
        <div>
          <h4 className="font-semibold text-[#7a1f2b] !mb-2.5 text-sm uppercase tracking-wider">
            Company & Support
          </h4>
          <ul className="flex flex-col gap-y-1 text-slate-700">
            <li>
              <Link to="/" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Contact & Consultation
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a] transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
{/* CONTACT US */}
        <div>
          <h4 className="font-semibold text-[#7a1f2b] !mb-2 text-sm">
            Contact Us
          </h4>

          <p className="flex items-center gap-2 !mb-2">
            <FaEnvelope className="text-red-600" />
            <a
              href="mailto:info@nriproperty.uk"
              className="inline-flex min-h-10 items-center text-slate-700 hover:text-slate-900"
            >
              info@nriproperty.uk
            </a>
          </p>

          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2 min-h-10">
              <FaPhoneAlt className="text-red-600" />
              UK:
              <a
                href="tel:+447868143558"
                className="text-slate-700 hover:text-slate-900"
              >
                +44 7868 143558
              </a>
              <FaWhatsapp className="text-green-600" />
            </div>

            <div className="flex items-center gap-2 min-h-10">
              <FaPhoneAlt className="text-red-600" />
              India:
              <a
                href="tel:+919216399808"
                className="text-slate-700 hover:text-slate-900"
              >
                +91 92163 99808
              </a>
              <FaWhatsapp className="text-green-600" />
            </div>

            <div className="flex items-center gap-2 min-h-10">
              <FaPhoneAlt className="text-red-600" />
              Canada:
              <a
                href="tel:+16132956385"
                className="text-slate-700 hover:text-slate-900"
              >
                +1 613 295 6385
              </a>
              <FaWhatsapp className="text-green-600" />
            </div>

            <div className="flex items-center gap-2 min-h-10">
              <FaPhoneAlt className="text-red-600" />
              USA:
              <a
                href="tel:+14146906435"
                className="text-slate-700 hover:text-slate-900"
              >
                +1 414 690 6435
              </a>
              <FaWhatsapp className="text-green-600" />
            </div>

            <div className="flex items-center gap-2 min-h-10">
              <FaPhoneAlt className="text-red-600" />
              EU:
              <a
                href="tel:+4915563030611"
                className="text-slate-700 hover:text-slate-900"
              >
                +49 1556 3030611
              </a>
              <FaWhatsapp className="text-green-600" />
            </div>
          </div>
        </div>

        {/* OUR WEBSITES */}
        <div>
          <h4 className="font-semibold text-[#7a1f2b] !mb-2 text-sm">
            Our Websites
          </h4>
          <ul className="flex flex-col gap-0.5 text-slate-700">
            <li>
              <a
                href="https://nriproperty.ca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center hover:text-slate-900"
              >
                www.nriproperty.ca
              </a>
            </li>
            <li>
              <a
                href="https://nriproperty.eu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center hover:text-slate-900"
              >
                www.nriproperty.eu
              </a>
            </li>
            <li>
              <a
                href="https://pinnacleinfra.co.in"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center hover:text-slate-900"
              >
                www.pinnacleinfra.co.in
              </a>
            </li>
            <li>
              <a
                href="https://www.nriproperty.uk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-10 items-center hover:text-slate-900"
              >
                www.nriproperty.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= MOBILE FOOTER ================= */}
      <div className="md:hidden border-t border-slate-200 !mt-3 !pt-4">
        {/* QUICK + NRI */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-[#7a1f2b] !mb-2 text-xs uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="flex flex-col gap-y-1 text-slate-700 text-xs">
              <li>
                <Link to="/nri-services" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  NRI Services
                </Link>
              </li>
              <li>
                <Link to="/buy-property-india-from-uk" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link to="/sell-property-india-from-uk" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Sell Property
                </Link>
              </li>
              <li>
                <Link to="/lease-property-india-for-nri" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Lease Property
                </Link>
              </li>
              <li>
                <Link to="/service-details/management" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Property Management
                </Link>
              </li>
              <li>
                <Link to="/nri-property-legal-litigation-india" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Legal Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#7a1f2b] !mb-2 text-xs uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-y-1 text-slate-700 text-xs">
              <li>
                <Link to="/" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="inline-flex min-h-8 items-center hover:text-[#9d1c1a]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* CONTACT */}
        <h4 className="font-semibold text-[#7a1f2b] text-center !mt-6 !mb-2 text-sm">
          Contact Us
        </h4>

        <div className="grid grid-cols-2 gap-3">
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            {/* EMAIL */}
            <a
              href="mailto:info@nriproperty.uk"
              className="flex items-center gap-2 text-slate-700 hover:text-slate-900 min-h-10"
            >
              <FaEnvelope className="text-red-600" />
              info@nriproperty.uk
            </a>

            {/* UK */}
            <a
              href="tel:+447868143558"
              className="hover:text-slate-900 cursor-pointer min-h-10 inline-flex items-center"
            >
              UK: +44 7868 143558
            </a>

            {/* INDIA */}
            <a
              href="tel:+919216399808"
              className="hover:text-slate-900 cursor-pointer min-h-10 inline-flex items-center"
            >
              IN: +91 92163 99808
            </a>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-3">
            <a
              href="tel:+16132956385"
              className="hover:text-slate-900 cursor-pointer min-h-10 inline-flex items-center"
            >
              CA: +1 613 295 6385
            </a>

            <a
              href="tel:+14146906435"
              className="hover:text-slate-900 cursor-pointer min-h-10 inline-flex items-center"
            >
              USA: +1 414 690 6435
            </a>

            <a
              href="tel:+4915563030611"
              className="hover:text-slate-900 cursor-pointer min-h-10 inline-flex items-center"
            >
              EU: +49 1556 3030611
            </a>
          </div>
        </div>

        {/* WEBSITES */}
        <h4 className="font-semibold text-[#7a1f2b] text-center !mt-6 !mb-2 text-sm">
          Our Websites
        </h4>

        <div className="grid grid-cols-2 gap-3 text-slate-700">
          <div>
            <a
              href="https://nriproperty.ca"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center hover:text-slate-900"
            >
              www.nriproperty.ca
            </a>
            <br />
            <a
              href="https://nriproperty.eu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center hover:text-slate-900"
            >
              www.nriproperty.eu
            </a>
          </div>
          <div>
            <a
              href="https://pinnacleinfra.co.in"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center hover:text-slate-900"
            >
              www.pinnacleinfra.co.in
            </a>
            <br />
            <a
              href="https://www.nriproperty.uk"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center hover:text-slate-900"
            >
              www.nriproperty.uk
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT & LEGAL LINKS */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center text-[11px] text-gray-600 border-t border-slate-200 !mt-3 !pt-3 !pb-3 gap-3 flex-wrap">
        <div>
          Copyright © nriproperty.uk — All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <Link to="/terms" className="hover:text-slate-900 transition-colors font-medium">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-slate-900 transition-colors font-medium">Privacy Policy</Link>
          <Link to="/cookies-policy" className="hover:text-slate-900 transition-colors font-medium">Cookies Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
