import he from "he";
import { z } from "zod";

import { type Post, PostSchema, getCategory } from "@/lib/blog";

const BASE_URL = "https://www.techcrunch.com";

export const WPPostSchema = z.object({
  id: z.number(),
  date: z.string(),
  date_gmt: z.string(),
  title: z.object({
    rendered: z.string(),
  }),
  excerpt: z.object({
    rendered: z.string(),
  }),
  slug: z.string(),
  content: z.object({
    rendered: z.string(),
  }),
  meta: z.object({
    "tc-featured-article": z.boolean(),
    "tc-article-brief": z.boolean(),
    "tc-breaking-news": z.boolean(),
  }),
  jetpack_featured_media_url: z.string().optional(),
  yoast_head_json: z
    .object({
      author: z.string().optional(),
    })
    .optional(),
  categories: z.array(z.number()).optional(),
});

export const WPCategorySchema = z.object({
  id: z.number(),
  count: z.number(),
  description: z.string(),
  link: z.string(),
  name: z.string(),
  slug: z.string(),
  taxonomy: z.string(),
  parent: z.number(),
});

export async function fetchPosts(options?: {
  name?: string;
  category?: string;
  recent?: boolean;
}): Promise<Post[]> {
  let url = `${BASE_URL}/wp-json/wp/v2/posts`;
  const queryParams: string[] = [];

  if (options?.name) {
    queryParams.push(`search=${options.name}`);
  }

  if (options?.category) {
    const categoryId = await getCategoryId(options.category);
    if (categoryId == null) {
      throw new Error(`Unable to find category: ${options.category}`);
    }
    queryParams.push(`categories=${categoryId}`);
  }

  if (options?.recent) {
    queryParams.push("orderby=date&order=desc");
  }

  // get 50 posts
  queryParams.push("per_page=25");

  // build query params
  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  const response = await fetch(url, {
    cache: "force-cache",
    next: { tags: ["posts"] },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch posts: ${response.status} ${response.statusText}`,
    );
  }

  const wpPosts = WPPostSchema.array().parse(await response.json());

  return await Promise.all(
    wpPosts.map(async (post) => {
      const categories = await Promise.all(
        post.categories?.map((id) => getCategory(id)) ?? [],
      );

      return PostSchema.parse({
        id: post.id,
        date: `${post.date_gmt}Z`, // use gmt for date to avoid timezone issues
        title: he.decode(post.title.rendered),
        excerpt: he.decode(post.excerpt.rendered),
        slug: post.slug,
        content: he.decode(post.content.rendered),
        metadata: {
          isFeatured: post.meta["tc-featured-article"],
          isBrief: post.meta["tc-article-brief"],
          isBreaking: post.meta["tc-breaking-news"],
        },
        image: post.jetpack_featured_media_url,
        author: post.yoast_head_json?.author,
        categories: categories,
      });
    }),
  );
}

export async function fetchPost(slug: string): Promise<Post | null> {
  const response = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?slug=${slug}`, {
    cache: "force-cache",
    next: { tags: ["posts"] },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const wpPosts = WPPostSchema.array().parse(await response.json());
  const wpPost = wpPosts.length > 0 ? wpPosts[0] : null;

  if (wpPost == null) {
    throw new Error(`Unable to find post: ${slug}`);
  }

  const categories = await Promise.all(
    wpPost.categories?.map((id) => getCategory(id)) ?? [],
  );

  return PostSchema.parse({
    id: wpPost.id,
    date: `${wpPost.date_gmt}Z`, // use gmt for date to avoid timezone issues
    title: he.decode(wpPost.title.rendered),
    excerpt: he.decode(wpPost.excerpt.rendered),
    slug: wpPost.slug,
    content: he.decode(wpPost.content.rendered),
    image: wpPost.jetpack_featured_media_url,
    author: wpPost.yoast_head_json?.author,
    categories: categories,
  });
}

export async function fetchCategory(id: number): Promise<string | null> {
  const response = await fetch(
    `${BASE_URL}/wp-json/wp/v2/categories?include=${id}`,
    {
      cache: "force-cache",
      next: { tags: ["posts"] },
    },
  );
  const wpCategories = WPCategorySchema.array().parse(await response.json());

  return wpCategories.length > 0 ? he.decode(wpCategories[0].name) : null;
}

async function getCategoryId(category: string): Promise<number | null> {
  const response = await fetch(
    `${BASE_URL}/wp-json/wp/v2/categories?search=${category}`,
    {
      cache: "force-cache",
      next: { tags: ["posts"] },
    },
  );
  const wpCategories = WPCategorySchema.array().parse(await response.json());

  return wpCategories.find((c) => c.name === category)?.id ?? null;
}

export async function fetchRSSFeed(): Promise<string> {
  const response = await fetch(`${BASE_URL}/feed/`);

  return response.text();
}
