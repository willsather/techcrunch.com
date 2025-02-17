import Link from "next/link";

import PostCard from "@/app/(components)/post-card";
import { PostListItem } from "@/app/(components)/post-list-item";
import { ArrowIcon } from "@/icons/arrow-icon";
import { getPosts } from "@/lib/blog";

export default async function VenturePostsSection() {
  const posts = await getPosts({ category: "Venture" });

  const [featuredPost, ...otherPosts] = posts;

  return (
    <section className="relative bg-tc-yellow">
      <div className="container mx-auto px-4 py-12">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
          <h1 className="font-extrabold text-7xl text-tc-purple md:m-0">
            Venture
          </h1>
          <Link
            href="/latest"
            className="inline-flex max-w-xs items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
          >
            See More
            <ArrowIcon className="size-4 rotate-45" />
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
