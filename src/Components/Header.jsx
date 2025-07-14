import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  const handleContact = () => {
    onContactClick?.();
    setIsMenuOpen(false);
  };

  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Map readable labels to URL slugs
  const serviceLinkMap = {
    "Selling Property": "selling",
    "Buying Property": "buying",
    "Leasing Property": "leasing",
    "Property Loan Consultant": "loan", // optional placeholder if you use it
  };

  const handleServiceClick = (service) => {
    const slug = serviceLinkMap[service];
    if (slug) {
      navigate(`/ServiceDetails/${slug}`);
      setIsMenuOpen(false); // also close mobile menu if open
    }
  };

  return (
    <div className="font-sans w-full !px-5 !pt-5 bg-gradient-to-b from-[#d3eaff] to-[#f5fefe]">
      <div className="w-full h-30 md:h-35 flex justify-between items-center border-4 bg-white border-white rounded-xl relative">
        <img
          src="/NewLogo.png"
          alt="Pinnacle Group Logo"
          className="!ml-2 lg:!ml-5 w-34 md:w-38 !p-1 lg:w-45 transition-all duration-300"
        />

        {/* Desktop Navigation */}
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

          {/* Dropdowns */}
          <div className="relative group">
            <li className="text-[#1d3d4f] hover:text-[#c53030] cursor-pointer font-semibold transition-colors duration-500">
              Our Services
            </li>
            <ul className="absolute top-full left-0 bg-white rounded-lg shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-out z-10 min-w-[200px]">
              {[
                
                "Selling Property",
                "Buying Property",
                "Leasing Property",
              ].map((item) => (
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

          {/* <div className="relative group">
            <li className="text-[#1d3d4f] hover:text-[#c53030] cursor-pointer font-semibold transition-colors duration-500">
              Our Projects
            </li>
            <ul className="absolute top-full left-0 bg-white rounded-lg shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-out z-10 min-w-[200px]">
              {[
                "District One",
                "Suntec City",
                "Fintech Square",
                "Marbella Grand",
                "Beverly Golf Avenue",
              ].map((item) => (
                <li
                  key={item}
                  className="!px-4 !py-2 hover:bg-[#f2fbfb] hover:text-[#c53030] text-[#374b5c] cursor-pointer transition-colors duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div> */}

          <li>
            <Link
              to="/nri-services"
              className={`${
                currentPath === "/nri-services"
                  ? "text-[#c53030]"
                  : "text-[#1d3d4f]"
              } hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500`}
            >
              NRI Services
            </Link>
          </li>
          <li>
            <span
              onClick={handleContact}
              className="text-[#1d3d4f] hover:text-[#c53030] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500"
            >
              Contact Us
            </span>
          </li>
        </ul>

        {/* Hamburger Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 absolute right-5 top-full w-[60%] bg-[#f9fdfd] border-4 rounded-lg border-[#d2d2d2] !mt-2 !p-6 md:hidden z-10">
            <li className="text-[#c53030] hover:text-black cursor-pointer font-semibold border-t-2 border-gray-700 text-center">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="text-[#c53030] hover:text-black cursor-pointer font-semibold border-t-2 border-gray-700 text-center">
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
            </li>

            {/* Mobile Dropdowns */}
            {[
              {
                label: "Our Services",
                key: "services",
                items: [
                  
                  "Selling Property",
                  "Buying Property",
                  "Leasing Property",
                ],
              },
              // {
              //   label: "Our Projects",
              //   key: "projects",
              //   items: [
              //     "District One",
              //     "Suntec City",
              //     "Fintech Square",
              //     "Marbella Grand",
              //     "Beverly Golf Avenue",
              //   ],
              // },
            ].map(({ label, key, items }) => (
              <div key={key} className="w-full">
                <div
                  className="font-semibold text-[#c53030] border-t-2 border-gray-700 !py-2 cursor-pointer text-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === key ? null : key)
                  }
                >
                  {label} ▾
                </div>
                <ul
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openDropdown === key ? "max-h-96" : "max-h-0"
                  } !pl-4 space-y-1 text-center`}
                >
                  {items.map((item) => (
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
            ))}

            <li className="text-[#c53030] hover:text-[#209eaa] cursor-pointer font-semibold border-t-2 border-gray-700 text-center">
              <Link to="/nri-services" onClick={() => setIsMenuOpen(false)}>
                NRI Services
              </Link>
            </li>
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
