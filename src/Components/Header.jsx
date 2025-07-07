import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null); // Close dropdowns on toggle
  };

  return (
    <div className="font-sans w-full !px-5 !pt-5 bg-gradient-to-b from-[#afbccb] to-[#f5ffff]">
      <div className="w-full flex justify-between items-center border-4 bg-[#f5ffff] border-[white] rounded-xl relative">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className="!ml-5 w-30 md:w-35 lg:w-35 transition-all duration-300"
        />

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-sm md:text-base lg:text-[1.2em] gap-4 md:gap-6 !mr-5">
          <li className="text-[#324b4b] hover:text-[#7ab5b6] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            Home
          </li>
          <li className="text-[#324b4b] hover:text-[#7ab5b6] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            About Us
          </li>

          {/* Our Services Dropdown */}
          <div className="relative group">
            <li className="text-[#324b4b] hover:text-[#7ab5b6] cursor-pointer font-semibold transition-colors duration-500">
              Our Services
            </li>
            <ul
              className="absolute top-full left-0 bg-white rounded shadow-md
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
               pointer-events-none group-hover:pointer-events-auto
               transition-all duration-300 ease-out z-10 min-w-[180px]"
            >
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Property Loan Consultant
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Selling Property
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Buying Property
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Leasing Property
              </li>
            </ul>
          </div>

          {/* Find Property Dropdown */}
          <div className="relative group">
            <li className="text-[#324b4b] hover:text-[#7ab5b6] cursor-pointer font-semibold transition-colors duration-500">
              Find Property
            </li>
            <ul
              className="absolute top-full left-0 bg-white rounded shadow-md
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
               pointer-events-none group-hover:pointer-events-auto
               transition-all duration-300 ease-out z-10 min-w-[180px]"
            >
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Mohali
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Chandigarh
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Delhi
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Mumbai
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Noida
              </li>
            </ul>
          </div>

          {/* Our Projects Dropdown */}
          <div className="relative group">
            <li className="text-[#324b4b] hover:text-[#7ab5b6] cursor-pointer font-semibold transition-colors duration-500">
              Our Projects
            </li>
            <ul
              className="absolute top-full left-0 bg-white rounded shadow-md
               opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
               pointer-events-none group-hover:pointer-events-auto
               transition-all duration-300 ease-out z-10 min-w-[180px]"
            >
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                District One
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Suntec City
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Fintech Square
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Marbella Grand
              </li>
              <li className="!px-4 !py-2 hover:bg-gray-100 cursor-pointer">
                Beverly Golf Avenue
              </li>
            </ul>
          </div>

          <li className="text-[#324b4b] hover:text-[#7ab5b6] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            NRI Services
          </li>
          <li className="text-[#324b4b] hover:text-[#7ab5b6] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500">
            Contact Us
          </li>

          <li className="text-[#a83900] hover:text-[#e76d2e] cursor-pointer font-semibold border-2 !p-2 rounded-3xl relative bottom-1 transition-all duration-500">
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
          <ul className="flex items-center flex-col gap-4 absolute top-full w-full bg-[#f5ffff] border-t-2 border-[#ccc] !mt-5 !p-5 md:hidden z-10">
            {["Home", "About Us"].map((item, idx) => (
              <li
                key={idx}
                className="text-[#324b4b] hover:text-[#7ab5b6] cursor-pointer font-semibold transition-all duration-500 border-t-2 w-full text-center"
              >
                {item}
              </li>
            ))}

            {/* Dropdown-like items in mobile */}
            <div className="w-full flex flex-col items-center text-center ">
              <div className="font-semibold text-[#324b4b] !mb-2 border-t-2 w-full">
                Our Services
              </div>
              <ul className="pl-4 space-y-1">
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Property Loan Consultant
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Selling Property
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Buying Property
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Leasing Property
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col items-center text-center">
              <div className="font-semibold text-[#324b4b] !mb-2 border-t-2 w-full">
                Find Property
              </div>
              <ul className="pl-4 space-y-1">
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Mohali
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Chandigarh
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Delhi
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Mumbai
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Noida
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col text-center items-center">
              <div className="border-t-2 w-full font-semibold text-[#324b4b] !mb-2">
                Our Projects
              </div>
              <ul className="space-y-1">
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  District One
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Suntec City
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Fintech Square
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Marbella Grand
                </li>
                <li className="hover:text-[#7ab5b6] cursor-pointer">
                  Beverly Golf Avenue
                </li>
              </ul>
            </div>

            {["NRI Services", "Contact Us"].map((item, idx) => (
              <li
                key={idx}
                className="text-[#324b4b] hover:text-[#7ab5b6] cursor-pointer font-semibold transition-all duration-500 border-t-2 w-full text-center"
              >
                {item}
              </li>
            ))}

            <li className="text-[#a83900] hover:text-[#e76d2e] cursor-pointer font-semibold border-2 !p-2 w-fit rounded-3xl transition-all duration-500">
              <FaSearch />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
