

import React from 'react'
import TopNav from './Navbar/TopNav'
import CategoryNav from './LandingPage/Bar'
import BottomNav from './Navbar/BottomNav'


const TopPage = () => {
  return (
    <>
       <div className='mb-10 md:mb-14'>
       <TopNav />
        <CategoryNav />
        <BottomNav />
       </div>
    </>
  )
}

export default TopPage