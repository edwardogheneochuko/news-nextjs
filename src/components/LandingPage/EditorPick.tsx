'use client'

import React from 'react'
import Image from 'next/image'
import { useEditorsPicks } from '@/src/hooks/useStories'
import type { EditorPicks } from '@/src/types/apiTypes'

const EditorPick: React.FC = () => {
  const { data: editorPicks, isLoading, isError, error } = useEditorsPicks()

  if (isLoading) return <p>Loading editor picks...</p>

  if (isError) return <p>Error loading Editor Picks</p>
    

  if (!editorPicks || editorPicks.length === 0) {
    return <p className="text-gray-500">No editor picks available.</p>
  }

  const [firstPick, ...morePicks] = editorPicks

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Featured story */}
      <div className="lg:col-span-2">
        <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition relative">
          <div className="relative h-64 w-full">
            <Image
              src={firstPick.image || '/placeholder.jpg'}
              alt={firstPick.title}
              fill
              className="object-cover"
            />
            {/* Editor Picks badge */}
            <span className="absolute top-2 left-2 bg-neutral-400 text-white
             text-xs font-semibold p-3 rounded-full">
              Editor Picks
            </span>
          </div>
          {/* Title, author and category always below the image */}
          <div className="p-4">
            <h3 className="font-semibold text-xl mb-1">{firstPick.title}</h3>
            <p className="text-sm text-gray-500 mb-1">By {firstPick.author}</p>
            <p className="text-xs text-gray-400">Category: {firstPick.name}</p>
          </div>
        </div>
      </div>

      {/* More stories */}
      <div>
        <h4 className="font-bold mb-2">MORE STORIES</h4>
        <ul className="space-y-7">
          {morePicks.slice(2, 6).map((pick) => (
            <li
              key={pick.id}
              className="text-sm text-gray-700 hover:underline cursor-pointer flex items-center"
            >
              <span className="bg-red-600 p-1 rounded-full mr-2"></span>
              {pick.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default EditorPick
