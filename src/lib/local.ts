import he from "he";

import allCategories from "@/lib/cms/categories.json";
import allPosts from "@/lib/cms/posts.json";

import { type Post, PostSchema, getCategory } from "@/lib/blog";
import { WPCategorySchema, WPPostSchema } from "@/lib/wordpress";

export async function fetchLocalPosts(options?: {
  category?: string;
  recent?: boolean;
}): Promise<Post[]> {
  const wpPosts = WPPostSchema.array().parse(allPosts);

  return await Promise.all(
    wpPosts.map(async (post) => {
      const categories = await Promise.all(
        post.categories?.map((id) => getCategory(id)) ?? [],
      );

      return PostSchema.parse({
        id: post.id,
        date: post.date,
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

export async function fetchLocalPost(slug: string): Promise<Post | null> {
  const allPosts = await fetchLocalPosts();
  const wpPost = allPosts.find((post) => post.slug === slug);

  if (wpPost == null) {
    throw new Error(`Unable to find post: ${slug}`);
  }

  return wpPost;
}

export async function fetchLocalCategory(id: number): Promise<string | null> {
  const wpCategories = WPCategorySchema.array().parse(allCategories);
  const wpCategory = wpCategories.find((cat) => cat.id === id);

  if (wpCategory == null) {
    throw new Error(`Unable to find category: ${id}`);
  }

  return wpCategory.name;
}

async function getLocalCategoryId(category: string): Promise<number | null> {
  const wpCategories = WPCategorySchema.array().parse(allCategories);

  return wpCategories.find((c) => c.name === category)?.id ?? null;
}
