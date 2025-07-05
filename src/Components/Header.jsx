
import React, { useState } from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    'Home',
    'About Us',
    'Our Services',
    'Find Property',
    'Our Projects',
    'NRI Services',
    'Contact Us',
  ]

  return (
    <div className="w-full !p-5 bg-gradient-to-b from-[#afbccb] to-[#f5ffff]">
      <div className='w-full flex justify-between items-center border-4 bg-[#f5ffff] border-white rounded-xl relative'>

        {/* Logo */}
        <img
          src="/logo.png"
          alt="logo"
          className='!ml-5 w-30 md:w-35 lg:w-35 transition-all duration-300'
        />

        {/* Desktop Nav */}
        <ul className='hidden md:flex text-sm md:text-base lg:text-[1.2em] gap-4 md:gap-6 !mr-5'>
          {navItems.map((item, idx) => (
            <li
              key={idx}
              className='text-[#324b4b] hover:text-[#7ab5b6] hover:border-b-2 cursor-pointer font-semibold transition-colors duration-500'
            >
              {item}
            </li>
          ))}
          <li className='text-[#a83900] hover:text-[#e76d2e] cursor-pointer font-semibold border-2 !p-2 rounded-3xl relative bottom-1 transition-all duration-500'>
            <FaSearch />
          </li>
        </ul>

        {/* Hamburger Button */}
        <div
          className='md:hidden text-2xl text-[#324b4b] cursor-pointer !mr-5 z-20'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <ul className='flex items-center flex-col gap-4 absolute top-full w-full bg-[#f5ffff] border-t-2 border-[#ccc] !mt-5 !p-5 md:hidden z-10'>
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className='text-[#324b4b] hover:text-[#7ab5b6] cursor-pointer font-semibold transition-all duration-500 border-b-2'
              >
                {item}
              </li>
            ))}
            <li className='text-[#a83900] hover:text-[#e76d2e] cursor-pointer font-semibold border-2 !p-2 w-fit rounded-3xl transition-all duration-500'>
              <FaSearch />
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Header
