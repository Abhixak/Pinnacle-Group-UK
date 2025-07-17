import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const handleContact = () => {
    onContactClick?.();
    setIsMenuOpen(false);
  };

  // Map NRI service labels to their slugs
  const nriServiceLinkMap = {
    "Buy & Sell Assistance": "buy-sell",
    "Legal & Documentation": "legal",
    "Property Management": "management",
    "Property Title Clearing": "title",
    "NRI tax & Finance Support": "finance",
    "24X7 support": "support",
  };

  const handleServiceClick = (service) => {
    const slug = nriServiceLinkMap[service];
    if (slug) {
      navigate(`/ServiceDetails/${slug}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans w-full !px-5 !pt-5 bg-gradient-to-b from-[#d3eaff] to-[#f5fefe]">
      <div className="w-full h-30 md:h-35 flex justify-between items-center border-4 bg-white border-white rounded-xl relative">
        {/* Logo */}
        <img
          src="/NewLogo.png"
          alt="Pinnacle Group Logo"
          className="!ml-2 lg:!ml-5 w-34 md:w-38 !p-1 lg:w-45 transition-all duration-300"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex text-sm md:text-base lg:text-[1.2em] gap-4 md:gap-6 !mr-5">
          <li>
            <Link
              to="/"
              className={`${
                currentPath === "/" ? "text-[#c53030]" : "text-[#1d3d4f]"
              } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`${
                currentPath === "/about" ? "text-[#c53030]" : "text-[#1d3d4f]"
              } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
            >
              About Us
            </Link>
          </li>

          {/* NRI Services Dropdown */}
          <div className="relative group">
            <li className="text-[#1d3d4f] hover:text-[#c53030] cursor-pointer font-semibold transition-colors duration-500">
              NRI Services
            </li>
            <ul className="absolute top-full left-0 bg-white rounded-lg shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-out z-10 min-w-[250px]">
              {Object.keys(nriServiceLinkMap).map((item) => (
                <li
                  key={item}
                  onClick={() => handleServiceClick(item)}
                  className="!px-4 !py-2 hover:bg-[#f2fbfb] hover:text-[#c53030] text-[#374b5c] cursor-pointer transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Gallery */}
          <li>
            <Link
              to="/Gallery"
              className={`${
                currentPath === "/Gallery" ? "text-[#c53030]" : "text-[#1d3d4f]"
              } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
            >
              Gallery
            </Link>
          </li>

          {/* Contact Us */}
          <li>
            <span
              onClick={handleContact}
              className="text-[#1d3d4f] hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500"
            >
              Contact Us
            </span>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden relative w-10 h-6 text-[2em] !mr-5 z-20 cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <FaTimes
            className={`absolute inset-0 transition-all duration-300 ${
              isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 absolute right-5 top-full w-[60%] bg-[#f9fdfd] border-4 rounded-lg border-[#d2d2d2] !mt-2 !p-6 md:hidden z-10">
            <li className="text-[#c53030] hover:text-black cursor-pointer font-semibold border-t-2 border-gray-700 text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>

            <li className="text-[#c53030] hover:text-black cursor-pointer font-semibold border-t-2 border-gray-700 text-center">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            </li>

            {/* NRI Services Dropdown in Mobile */}
            <div className="w-full">
              <div
                className="font-semibold text-[#c53030] border-t-2 border-gray-700 !py-2 cursor-pointer text-center"
                onClick={() => setOpenDropdown(openDropdown === "nri" ? null : "nri")}
              >
                NRI Services ▾
              </div>
              <ul
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openDropdown === "nri" ? "max-h-96" : "max-h-0"
                } !pl-4 space-y-1 text-center`}
              >
                {Object.keys(nriServiceLinkMap).map((item) => (
                  <li
                    key={item}
                    onClick={() => handleServiceClick(item)}
                    className="hover:text-[#209eaa] text-[#374b5c] cursor-pointer transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Link */}
            <li className="text-[#c53030] hover:text-[#209eaa] cursor-pointer font-semibold border-t-2 border-gray-700 text-center">
              <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
            </li>

            {/* Contact */}
            <li
              className="text-[#c53030] hover:text-[#209eaa] cursor-pointer font-semibold border-t-2 border-gray-700 text-center"
              onClick={handleContact}
            >
              Contact Us
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
