
export type Category = {
    category_id: number
    category_name: string
    total_stories: number
    created_at: string
    updated_at: string
}

// top stories & editor picks

type topStory = {
    id: number
    title: string
    banner_image: string
    author: string
    status: string
    category: { category_name: string }
}

export type topStoryItem = {
    id: number
    story: topStory
}

export type topStoryItemData = {
    message: string
    data: {
        data: topStoryItem[]
    }
}

// latest news & missed stories

export type latestStoryItem  = {
    id: number
    title: string
    banner_image: string
    category: { category_name: string };
}

export type LatestNewsItemData = {
    message: string
    data: {
        data: latestStoryItem[]
    }
}

// feature stories

export type featureItem = {
    first: string
}

export type featureItemData = {
    message: string
    data: {
        data: featureItem[]
    }
}

