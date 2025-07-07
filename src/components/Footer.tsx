import React from 'react'
import { BiMap, BiSearch } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-10 py-10 px-5 md:px-20 lg:px-40 bg-neutral-900 text-white'>
      {/* Logo & social icons */}
      <div className='flex justify-between items-center'>
        <div className='flex flex-col bg-red-400 p-1 rounded-md'>
          <p className='text-3xl text-center font-serif'>ACC</p>
          <p className='text-xs bg-black p-1'>NEWSNET</p>
        </div>
        <div className='flex gap-x-5 items-center text-2xl'>
          <FaInstagram /> <FaFacebook /> <BsTwitter /> <BiMap /> <FaLinkedin />
        </div>
      </div>

      {/* Search input */}
      <div className='my-5 relative'>
        <input
          type="text"
          placeholder='Search AGC Newsnet'
          className='bg-white text-black
           placeholder:text-gray-600 p-3 w-full rounded-md pr-10'
        />
        <BiSearch className='hidden md:block text-black text-2xl absolute right-3 top-1/2 transform -translate-y-1/2' />
      </div>

      {/* Footer links */}
      <div className='grid grid-cols-3 md:grid-cols-5 
      gap-10 md:gap-4 text-sm mb-5 text-left md:text-center'>
        <div className='space-y-3'>
          <p>Home</p>
          <p>Africa</p>
          <p>Politics</p>
        </div>
        <div className='space-y-3'>
          <p>Business</p>
          <p>Sports</p>
          <p>Health</p>
        </div>
        <div className='space-y-3'>
          <p>Tech</p>
          <p>Opinion</p>
          <p>Videos</p>
        </div>
        <div className='space-y-3'>
          <p>Photos</p>
          <p>AGC Archive</p>
          <p>Privacy Policy</p>
        </div>
        <div className='space-y-3'>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Advert Rate</p>
        </div>
      </div>

      {/* Footer bottom text */}
      <p className='text-xs text-gray-400 text-center md:text-left  mt-10'>
        © {new Date().getFullYear()} AGC Newsnet. All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
