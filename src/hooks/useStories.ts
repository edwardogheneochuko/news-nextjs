import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import type {
  LatestNews,
  Category,
  TopStories,
  EditorPicks,
  MissedStories,
  FeaturedStory,
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

// Top Stories
export const useTopStories = () =>
  useQuery<TopStories[]>({
    queryKey: ["topStories"],
    queryFn: async () => {
      const res = await api.get("top-stories");
      return res.data.data.data.map((item: {
        id: number;
        story: { title: string; banner_image: string };
      }) => ({
        id: item.id,
        title: item.story.title,
        image: item.story.banner_image,
      }));
    },
  });

// Latest Stories
export const useLatestStories = () =>
  useQuery<LatestNews[]>({
    queryKey: ["latestStories"],
    queryFn: async () => {
      const res = await api.get("/stories/latest-stories?page=1&per_page=7");
      return res.data.data.data.map((item: {
        id: number;
        title: string;
        banner_image: string;
        category_name?: string;
      }) => ({
        id: item.id,
        title: item.title,
        image: item.banner_image,
        name: item.category_name ?? "Politics",
      }));
    },
  });

// Editor Picks
export const useEditorsPicks = () =>
  useQuery<EditorPicks[]>({
    queryKey: ["editorPicks"],
    queryFn: async () => {
      const res = await api.get("/editor-picks?page=1&per_page=15");
      return res.data.data.data.map((item: {
        story: { id: number; title: string; author: string };
        banner_image: string;
        category?: { category_name: string };
      }): EditorPicks => ({
        id: item.story.id,
        title: item.story.title,
        image: item.banner_image,
        name: item.category?.category_name ?? "Uncategorized",
        author: item.story.author,
      }));
    },
  });

// Missed Stories
export const useMissedStories = () =>
  useQuery<MissedStories[]>({
    queryKey: ["missedStories"],
    queryFn: async () => {
      const res = await api.get("/stories/missed-stories?page=1&per_page=5");
      return res.data.data.data.map((item: {
        id: number;
        title: string;
        created_at: string;
      }) => ({
        id: item.id,
        title: item.title,
        date: item.created_at,
      }));
    },
  });

// Featured Stories
export const useFeaturedStories = () =>
  useQuery<FeaturedStory[]>({
    queryKey: ["featuredStories"],
    queryFn: async () => {
      const res = await api.get("/stories/featured-stories?page=1&per_page=15");
      return res.data.data.data.map((item: {
        id: number;
        image: string;
      }) => ({
        id: item.id,
        image: item.image,
      }));
    },
  });

// Single Story
export const useSingleStory = (storyId: string) =>
  useQuery({
    queryKey: ["story", storyId],
    queryFn: async () => {
      const res = await api.get(`/stories/${storyId}`);
      return res.data;
    },
  });
