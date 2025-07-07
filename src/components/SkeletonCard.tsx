import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="p-14 border rounded-lg shadow animate-pulse w-full ">
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
    </div>
  )
}
