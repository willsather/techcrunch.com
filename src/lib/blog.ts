import { z } from "zod";

import {
  fetchCategory,
  fetchPost,
  fetchPosts,
  fetchRSSFeed,
} from "@/lib/wordpress";

export const PostSchema = z.object({
  id: z.number(),
  date: z.string().transform((val) => new Date(val)),
  title: z.string(),
  excerpt: z.string(),
  slug: z.string(),
  content: z.string(),
  metadata: z
    .object({
      isFeatured: z.boolean(),
      isBrief: z.boolean(),
      isBreaking: z.boolean(),
    })
    .optional(),
  image: z.string().optional(),
  author: z.string().optional(),
  categories: z.array(z.string()).optional(),
});
export type Post = z.infer<typeof PostSchema>;

export async function getPosts(options?: {
  name?: string;
  category?: "latest" | "popular" | string;
}): Promise<Post[]> {
  if (options?.name != null) {
    return await fetchPosts({ name: options.name });
  }

  if (options?.category === "latest") {
    const posts = await fetchPosts({ recent: true });
    return posts.slice(0, 5);
  }

  if (options?.category === "popular") {
    const posts = await fetchPosts();
    return posts.slice(5, 10);
  }

  if (options?.category != null) {
    return await fetchPosts({ category: options.category });
  }

  return await fetchPosts();
}

export async function getPost(slug: string): Promise<Post | null> {
  return fetchPost(slug);
}

export async function getCategory(id: number): Promise<string | null> {
  return fetchCategory(id);
}

export async function getRSSFeed(): Promise<string> {
  return fetchRSSFeed();
}
