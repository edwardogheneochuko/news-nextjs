'use client'

import React from 'react'
import { useCategories } from '@/src/hooks/useStories'
import { useNewsStore } from '@/src/store/categoryStore'


const Categories = () => {
  const { data: categories, isLoading, isError } = useCategories()
  const selectedCategoryId = useNewsStore((s) => s.selectedCategoryId)
  const setSelectedCategory = useNewsStore((s) => s.setSelectedCategory)

  if (isLoading) return <p>Loading categories...</p>
  if (isError) return <p>Failed to load categories</p>

  return (
    <div className="flex overflow-x-auto space-x-4 py-2">
      {categories?.map((cat) => (
  <button
    key={cat.category_id}
    onClick={() => setSelectedCategory(cat.category_id)}
    className={`
      whitespace-nowrap px-3 py-1 rounded-full border
      ${selectedCategoryId === cat.category_id ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
    `}
  >
    {cat.category_name}
  </button>
))}
    </div>
  )
}

export default Categories
