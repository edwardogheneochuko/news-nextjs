
import Link from 'next/link'
import React from 'react'

export default function StoryCard({story}:{story:any}) {
  return (
    <>
    <Link href={`/stories/${story.id}`}>
    <div className="p-4 border rounded hover:shadow cursor-pointer">
        <h3 className="font-semibold mb-1">{story.title}</h3>
        <p className="text-xs text-gray-500">{story.published_at}</p>
      </div>
    </Link>
    </>
  )
}
