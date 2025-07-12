'use client'

import React from 'react'
import { useFeaturedStories } from '@/src/hooks/useStories' // adjust path if needed
import Image from 'next/image'
import SkeletonCard from '../SkeletonCard'

const FeaturedStories = () => {
    const { data: featuredStories, isLoading, isError } = useFeaturedStories()
  
    if (isLoading) return <SkeletonCard />
    if (isError) return <p className="text-red-500">Failed to load</p>
    if (!featuredStories || featuredStories.length === 0)
      return <p className="text-gray-500 my-10">No featured stories available.</p>
  
    return (
      <div className="my-10">
        <h1 className="font-bold mb-4">Featured Stories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featuredStories.map((story) => (
            <div key={story.first}>
              <Image
                src={story.first}
                alt=""
                width={400}
                height={250}
                className="w-full h-56 object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
  

export default FeaturedStories
