
// app/stories/[id]/page.tsx
'use client'
import { useParams } from 'next/navigation'
import { useSingleStory } from '@/src/hooks/useStories'
import { useNewsStore } from '@/src/store/categoryStore'

export default function StoryPage() {
  const params = useParams<{ id: string }>()
  const { data: story } = useSingleStory(params.id)
  const { bookmarks, addBookmark, removeBookmark } = useNewsStore()

  const isBookmarked = bookmarks.includes(Number(params.id))

  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>{story?.data?.title}</h1>
      <button
        onClick={() =>
          isBookmarked
            ? removeBookmark(Number(params.id))
            : addBookmark(Number(params.id))
        }
        className='mt-2 px-3 py-1 bg-blue-500 text-white rounded'
      >
        {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
      </button>

      <div className='mt-4'>{story?.data?.content}</div>
    </div>
  )
}
