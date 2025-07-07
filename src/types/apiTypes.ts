
export type Category = {
    category_id: number
    category_name: string
    total_stories: number
    created_at: string
    updated_at: string
}

export type TopStories = {
    id: number
    title: string
    image: string
}

export type LatestNews = {
    id: number
    title: string
    image: string
    name: string
}

export type EditorPicks = {
    id: number
    title: string
    image: string
    name: string
    author: string
}

export type MissedStories = {
    id: number
    title: string
    date: string
}

export type FeaturedStory = {
    id: number
    image: string
}
  