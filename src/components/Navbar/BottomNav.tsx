
import React from 'react'
import { bottomNavList } from '../data'
import { BiSearch } from 'react-icons/bi'

const BottomNav = () => {

  return (
    <>
    <div className='hidden md:flex text-white text-sm font-semibold
    justify-between bg-neutral-900 p-5 px-7'>
      <div className='flex gap-x-4 text-sm lg:gap-x-6'>
      {bottomNavList.slice(0,8).map((item) =>(
        <div key={item.id}>
            {item.title}
        </div>
      ))}
      </div>
      <div className='border-l pl-4 flex gap-x-4 lg:gap-x-6 items-center'>
        {bottomNavList.slice(9,11).map((item) =>(
            <div key={item.id}>
                {item.title}
            </div>
        ))}
        <div><BiSearch className='text-lg'/></div>
        <div className='flex '>Log in / Sign up</div>
      </div>
    </div>
    </>
  )
}
             
export default BottomNav