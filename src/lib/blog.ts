import he from "he";
import { z } from "zod";

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
  jetpack_featured_media_url: z.string().optional(),
  yoast_head_json: z
    .object({
      author: z.string(),
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

export const PostSchema = z.object({
  id: z.number(),
  date: z.string().transform((val) => new Date(val)),
  title: z.string(),
  excerpt: z.string(),
  slug: z.string(),
  content: z.string(),
  image: z.string().optional(),
  author: z.string().optional(),
  categories: z.array(z.string()).optional(),
});
export type Post = z.infer<typeof PostSchema>;

const BASE_URL = "https://www.techcrunch.com";

export async function getPosts(): Promise<Post[]> {
  const response = await fetch(`${BASE_URL}/wp-json/wp/v2/posts`);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  const wpPosts = WPPostSchema.array().parse(await response.json());

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
        image: post.jetpack_featured_media_url,
        author: post.yoast_head_json?.author,
        categories: categories,
      });
    }),
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  const response = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?slug=${slug}`);

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
    title: he.decode(wpPost.title.rendered),
    excerpt: he.decode(wpPost.excerpt.rendered),
    slug: wpPost.slug,
    content: he.decode(wpPost.content.rendered),
    image: wpPost.jetpack_featured_media_url,
    date: wpPost.date,
    author: wpPost.yoast_head_json?.author,
    categories: categories,
  });
}

export async function getCategory(id: number): Promise<string | null> {
  const response = await fetch(
    `${BASE_URL}/wp-json/wp/v2/categories?include=${id}`,
  );
  const wpCategories = WPCategorySchema.array().parse(await response.json());

  return wpCategories.length > 0 ? wpCategories[0].name : null;
}
