import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import {
  type Category,
  topStoryItem,
  topStoryItemData,
  latestStoryItem,
  LatestNewsItemData,
  featureItem,
  featureItemData,
} from "../types/apiTypes";

// Categories
export const useCategories = () =>
  useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await api.get("/categories");
      return res.data.data.data as Category[];
    },
  });

// top Stories
export async function fetchTopStories(): Promise<topStoryItem[]> {
  const res = await api.get<topStoryItemData>("top-stories");
  return res.data.data.data;
}

export const useTopStories = () =>
  useQuery<topStoryItem[]>({
    queryKey: ["topStories"],
    queryFn: fetchTopStories,
})


// Latest Stories
export async function fetchLatestStories(): Promise<latestStoryItem[]> {
  const res = await api.get<LatestNewsItemData>("stories/latest-stories?page=1&per_page=7");
  return res.data.data.data;
}

export const useLatestStories = () =>
  useQuery<latestStoryItem[]>({
    queryKey: ["latestNews"],
    queryFn: fetchLatestStories,
  });

// Editor Picks

export async function fetchEditorsPicks(): Promise<topStoryItem[]> {
  const res = await api.get<topStoryItemData>("editor-picks?page=1&per_page=15");
  return res.data.data.data;
}

export const useEditorsPicks = () =>
  useQuery<topStoryItem[]>({
    queryKey: ["editorPicks"],
    queryFn: fetchEditorsPicks,
  });



// Missed Stories
export async function fetchMissedStories(): Promise<latestStoryItem[]> {
  const res = await api.get<LatestNewsItemData>("stories/missed-stories?page=1&per_page=7");
  return res.data.data.data;  
}
export const useMissedStories = () =>
  useQuery<latestStoryItem[]>({
    queryKey: ["missedStories"],
    queryFn: fetchMissedStories,
})


// Featured Stories
export async function fetchFeaturedStories():Promise<featureItem[]> {
  const res = await api.get<featureItemData>("stories/featured-stories?page=1&per_page=6");
  return res.data.data.data;

}

export const useFeaturedStories = () =>
  useQuery<featureItem[]>({
    queryKey: ["featuredStories"],
    queryFn: fetchFeaturedStories,
  })

// Single Story
export const useSingleStory = (storyId: string) =>
  useQuery({
    queryKey: ["story", storyId],
    queryFn: async () => {
      const res = await api.get(`/stories/${storyId}`);
      return res.data;
    },
  });
