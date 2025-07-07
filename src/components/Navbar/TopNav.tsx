import React from 'react';
import { navbarList } from '../data';
import { getFormattedDate } from '../../utils/formattedDate';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BiDownArrow, BiMap, BiMenu, BiSearch, BiUserCircle } from 'react-icons/bi';

const TopNav = () => {
   const formattedDate = getFormattedDate()
    
  return (
    <>
      {/* Mid screens and up */}
      <div className='hidden md:flex gap-x-4 text-sm lg:gap-x-6 px-7
       bg-pink-700 p-5 items-center text-white'>
        {navbarList.map((item) => (
          <div key={item.id} className=' cursor-pointer font-semibold'>
            {item.title} 
          </div> 
        ))}
        <div className=' font-bold hidden lg:flex'>AGC VIP</div>

        <div className='ml-auto flex items-center'>
            <div className='font-semibold border-r pr-3 '>
                {formattedDate}
            </div>
        <div className='pl-3 flex gap-x-3  '>
         <FaInstagram />
         <FaFacebook/>  
         <FaTwitter  /> 
         <BiMap  />
         <FaLinkedin />
        </div>
        </div>
      </div>

      
        <div className='md:hidden flex text-white  justify-between bg-neutral-900 py-5 px-3'>
        <div className='flex items-center gap-x-5 text-2xl'>
                <BiMenu />
                <BiSearch />
            </div>
            <div className='items-center flex ml-auto'>
                <BiUserCircle className='text-3xl' />
                <BiDownArrow className='text-sm text-white'/>
            </div> 
        </div>
    </>
  );
};

export default TopNav;

