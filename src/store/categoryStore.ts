// store/useNewsStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type NewsStore = {
  bookmarks: number[]
  selectedCategoryId: number | null
  addBookmark: (id: number) => void
  removeBookmark: (id: number) => void
  setSelectedCategory: (id: number) => void
}

export const useNewsStore = create<NewsStore>()(
  persist(
    (set) => ({
      bookmarks: [],
      selectedCategoryId: null,
      addBookmark: (id) =>
        set((state) => ({ bookmarks: [...state.bookmarks, id] })),
      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((bookmarkId) => bookmarkId !== id),
        })),
      setSelectedCategory: (id) => set({ selectedCategoryId: id }),
    }),
    { name: 'news-storage' } // localStorage 
  )
)
