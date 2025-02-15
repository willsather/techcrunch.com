import PostCard from "@/app/post-card";
import { PostListItem } from "@/app/post-list-item";
import { getPosts } from "@/lib/blog";
import Link from "next/link";

export default async function VenturePostsSection() {
  const posts = await getPosts();

  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="relative bg-tc-yellow">
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-bold text-5xl text-tc-purple">Venture</h1>
          <Link
            href="/venture"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 font-medium text-sm hover:bg-black/5"
          >
            See More
          </Link>
        </div>

        {/* Featured Article (Always on Top) */}
        <div className="mb-8">
          <PostCard post={featuredPost} />
        </div>

        {/* Other Posts List (Always Below Featured) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherPosts.slice(0, 6).map((post) => (
            <PostListItem key={post.id} post={post} theme="alternate" />
          ))}
        </div>
      </div>
    </section>
  );
}
