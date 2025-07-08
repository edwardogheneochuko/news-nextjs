
import EditorPick from '@/src/components/LandingPage/EditorPick'
import FeaturedStories from '@/src/components/LandingPage/FeaturedStories'
import LatestNews from '@/src/components/LandingPage/LatestNews'
import MissedStories from '@/src/components/LandingPage/MissedStories'
import TopStories from '@/src/components/LandingPage/TopStories'
import React from 'react'

const page = () => {
  
  return (
    <div className='px-3 md:px-5'>
      <TopStories />
      <LatestNews />
      <EditorPick />
      <FeaturedStories />
      <MissedStories />
    </div>  
  )
}

export default page