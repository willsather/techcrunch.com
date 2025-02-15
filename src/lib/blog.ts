export interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  content: { rendered: string };
  jetpack_featured_media_url?: string;
  date: string;
  author_info?: {
    name: string;
  };
  categories?: string[];
}

export interface Category {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

const BASE_URL = "https://www.techcrunch.com";

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(`${BASE_URL}/wp-json/wp/v2/posts`);

  return res.json();
}

export async function getPost(slug: string): Promise<Post | null> {
  const res = await fetch(`${BASE_URL}/wp-json/wp/v2/posts?slug=${slug}`);
  const posts: Post[] = await res.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function getCategory(id: string): Promise<Category | null> {
  const res = await fetch(`${BASE_URL}/wp-json/wp/v2/categories?include=${id}`);
  const categories: Category[] = await res.json();

  return categories.length > 0 ? categories[0] : null;
}
