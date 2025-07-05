import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
  return (
    <div className="w-full !p-5 bg-gradient-to-b from-[#afbccb] to-[#f5ffff]">
      <div className='w-full flex justify-between items-center border-4 border-b-0 border-white rounded-t-xl'>

        <img src="/logo.webp" alt="logo" className='h-30 !p-5 !ml-5' />

        <ul className='flex text-[1.2em] gap-6 !p-5 !mr-10'>
          {[
            'Home',
            'About Us',
            'Our Services',
            'Find Property',
            'Our Projects',
            'NRI Services',
            'Contact Us',
          ].map((item, idx) => (
            <li
              key={idx}
              className='text-[#324b4b] hover:text-[#7ab5b6] hover:border-b-1 cursor-pointer font-semibold transition-colors duration-500'
            >
              {item}
            </li>
          ))}

          <li className='text-[#a83900] hover:text-[#e76d2e] cursor-pointer font-semibold border-2 !p-2 rounded-3xl relative bottom-1 transition-all duration-500'>
            <FaSearch />
          </li>
        </ul>

      </div>
    </div>
  )
}

export default Header
