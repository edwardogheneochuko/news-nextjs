'use client'
import React from 'react'
import Image from 'next/image'
import { useTopStories } from '@/src/hooks/useStories'
import SkeletonCard from '../SkeletonCard'

const TopStories = () => {
  const { data: topStories, isLoading, isError } = useTopStories()
  if (isLoading) return <SkeletonCard />
  if (isError) return <p>Error</p>

  if (!topStories || topStories.length < 3) {
    return <p className="text-gray-500">Not enough top stories to display.</p>
  }

  const [firstStory, secondStory, thirdStory] = topStories

  return (
    <div>
      <h1 className="ml-2 mb-4 font-semibold text-lg">TOP STORIES</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="relative w-full h-60 md:h-96 mb-2">
            <Image
              src={firstStory.image}
              alt={firstStory.title}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />

            <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b">
              <h1 className="text-black md:text-red-300 font-bold">Latest Today</h1>
              <h2 className="font-semibold text-lg text-white">{firstStory.title}</h2>
            </div>
          </div>

          <div className="block md:hidden">
            <h1 className="text-red-300 text-xs">LATEST TODAY</h1>
            <h2 className="font-semibold text-lg">{firstStory.title}</h2>
          </div>
        </div>

        {/* Right column - second and third stories */}
        <div className="flex flex-col gap-4">
          {[secondStory, thirdStory].map((story) => (
            <div 
              key={story.id}
              className="flex flex-row md:flex-col gap-5"
            >
              <div className="relative w-1/2 md:w-full h-24 md:h-44">
                <Image
                  src={story.image}
                  alt={story.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
                <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 rounded-b">
                  <h1 className="text-xs text-red-300">NEWS TODAY</h1>
                  <h3 className=" text-white font-bold">{story.title}</h3>
                </div>
              </div>

              <div className="block md:hidden flex-1">
                <h1 className="text-xs text-red-300">NEWS TODAY</h1>
                <h3 className="font-bold">{story.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopStories
