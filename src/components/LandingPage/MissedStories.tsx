'use client'

import React from 'react'
import { useMissedStories } from '@/src/hooks/useStories' // adjust path if needed
import SkeletonCard from '../SkeletonCard'
import { TfiEmail } from 'react-icons/tfi'

const MissedStories = () => {
  const { data: missedStories, isLoading, isError, error } = useMissedStories()

  if (isLoading) return <SkeletonCard />
  if (isError) return <p className="text-red-500">Failed to load: {String((error as any)?.message)}</p>
  if (!missedStories || missedStories.length === 0) return <p className="text-gray-500">No missed stories available.</p>

  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold mb-4">Missed Stories</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {missedStories.map((story) => (
          <div key={story.id} className="p-4   hover:shadow">
            <h3 className="font-medium mb-2">{story.title}</h3>
            <p className="text-xs text-gray-500 font-bold flex items-center">
              <span className="w-2 h-2 bg-red-800 rounded-full mr-2"></span>
              {new Date(story.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 mt-10 gap-6">
        <div>
          <div className="flex items-center gap-2 text-lg text-gray-700 mb-4">
            <TfiEmail className="text-6xl" />
            <span>
              Get the latest news and stories from around Africa directly into your inbox daily.
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border px-3 py-2 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
              Get Me In
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center text-gray-500 border rounded-md">
          
        </div>
      </div>
    </div>
  )
}

export default MissedStories
