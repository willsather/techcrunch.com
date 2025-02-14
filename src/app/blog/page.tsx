import PostCard from "@/app/blog/post-card";

export interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  slug: string;
  jetpack_featured_media_url?: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://www.techcrunch.com/wp-json/wp/v2/posts", {
    cache: "force-cache",
  });

  return res.json();
}

export const dynamic = "force-static";

export default async function BlogPage() {
  const posts = await getPosts();

  if (!posts || posts.length === 0) {
    return <p className="text-center text-gray-500">No posts available.</p>;
  }

  const [featuredPost, ...otherPosts] = posts;

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Featured Post */}
      <div className="relative mb-8 w-full overflow-hidden rounded-xl">
        <PostCard post={featuredPost} isFeatured />
      </div>

      {/* Mosaic Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {otherPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
