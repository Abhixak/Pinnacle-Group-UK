import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import BackVideo from "../assets/AD Video of Pinnacle Group.mp4"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  return (
    <div className="font-sans w-full !px-5 !pt-5 bg-gradient-to-b from-[#d3eaff] to-[#f5fefe]">
      <div className="w-full h-30 md:h-35 flex justify-between items-center border-4 bg-white  border-white rounded-xl relative">
        {/* bg-[#f5fefe] */}
        {/* Logo */}
        <img
          src="/PinnacleLogo.png"
          alt="logo"
          className="!ml-2 lg:!ml-5 w-34 md:w-38 lg:w-45 !p-2 transition-all duration-300"
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-sm md:text-base lg:text-[1.2em] gap-4 md:gap-6 !mr-5">
          <li className="text-[#1d3d4f] hover:text-[#209eaa] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            Home
          </li>
          <li className="text-[#1d3d4f] hover:text-[#209eaa] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            About Us
          </li>

          {/* Dropdowns */}
          {["Our Services", "Our Projects"].map((label, idx) => (
            <div key={label} className="relative group">
              <li className="text-[#1d3d4f] hover:text-[#209eaa] cursor-pointer font-semibold transition-colors duration-500">
                {label}
              </li>
              <ul className="absolute top-full left-0 bg-white rounded-lg shadow-xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 ease-out z-10 min-w-[200px]">
                {label === "Our Services" &&
                // Find property is removed
                  ["Property Loan Consultant", "Selling Property", "Buying Property", "Leasing Property"].map(
                    (item) => (
                      <li
                        key={item}
                        className="!px-4 !py-2 hover:bg-[#f2fbfb] text-[#374b5c] cursor-pointer transition-colors duration-300"
                      >
                        {item}
                      </li>
                    )
                  )}
                {label === "Find Property" &&
                  ["Mohali", "Chandigarh", "Delhi", "Mumbai", "Noida"].map((item) => (
                    <li
                      key={item}
                      className="!px-4 !py-2 hover:bg-[#f2fbfb] text-[#374b5c] cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                {label === "Our Projects" &&
                  ["District One", "Suntec City", "Fintech Square", "Marbella Grand", "Beverly Golf Avenue"].map(
                    (item) => (
                      <li
                        key={item}
                        className="!px-4 !py-2 hover:bg-[#f2fbfb] text-[#374b5c] cursor-pointer transition-colors duration-300"
                      >
                        {item}
                      </li>
                    )
                  )}
              </ul>
            </div>
          ))}

          <li className="text-[#1d3d4f] hover:text-[#209eaa] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            NRI Services
          </li>
          <li className="text-[#1d3d4f] hover:text-[#209eaa] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            Contact Us
          </li>
          <li className="text-[#c94e00] flex hover:text-[#ff7a33] cursor-pointer font-semibold border-2 !p-2 rounded-3xl relative bottom-1 transition-all duration-500">
            <FaSearch />
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          className="md:hidden relative w-10 h-6 text-[2em] !mr-5 z-20 cursor-pointer"
          onClick={toggleMenu}
        >
          <FaBars
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          />
          <FaTimes
            className={`absolute inset-0 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          />
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul className="flex flex-col gap-4 absolute top-full w-full bg-[#f9fdfd] border-2 rounded-lg border-[#d2d2d2] !mt-5 !p-5 md:hidden z-10">
            {["Home", "About Us"].map((item, idx) => (
              <li
                key={idx}
                className="text-[#1d3d4f] hover:text-[#209eaa] cursor-pointer font-semibold transition-all duration-500 border-t-2 w-full text-center"
              >
                {item}
              </li>
            ))}

            {/* Mobile Dropdowns with Smooth Transitions */}
            {[
              {
                label: "Our Services",
                key: "services",
                items: ["Property Loan Consultant", "Selling Property", "Buying Property", "Leasing Property"],
              },

              // FIND PROPERTY IS COMMENTED
              // {
              //   label: "Find Property",
              //   key: "property",
              //   items: ["Mohali", "Chandigarh", "Delhi", "Mumbai", "Noida"],
              // },
              {
                label: "Our Projects",
                key: "projects",
                items: ["District One", "Suntec City", "Fintech Square", "Marbella Grand", "Beverly Golf Avenue"],
              },
            ].map(({ label, key, items }) => (
              <div key={key} className="w-full">
                <div
                  className="font-semibold text-[#1d3d4f] border-t-2 !py-2 cursor-pointer text-center"
                  onClick={() => setOpenDropdown(openDropdown === key ? null : key)}
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
                      className="hover:text-[#209eaa] text-[#374b5c] cursor-pointer transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {["NRI Services", "Contact Us"].map((item, idx) => (
              <li
                key={idx}
                className="text-[#1d3d4f] hover:text-[#209eaa] cursor-pointer font-semibold transition-all duration-500 border-t-2 w-full text-center"
              >
                {item}
              </li>
            ))}

            <li className="text-[#c94e00] hover:text-[#ff7a33] cursor-pointer font-semibold border-2 !p-2 w-fit rounded-3xl transition-all duration-500 mx-auto">
              <FaSearch />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
