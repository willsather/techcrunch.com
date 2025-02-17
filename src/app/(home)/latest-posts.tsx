import Link from "next/link";

import PopularPosts from "@/app/(components)/popular-posts";
import { PostListItem } from "@/app/(components)/post-list-item";
import { ArrowIcon } from "@/icons/arrow-icon";
import { getPosts } from "@/lib/blog";

export default async function LatestPostsSection() {
  const posts = await getPosts({ category: "latest" });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
        <h1 className="font-extrabold text-7xl text-tc-green md:m-0">
          Latest News
        </h1>
        <Link
          href="/latest"
          className="inline-flex max-w-xs items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
        >
          See More
          <ArrowIcon className="size-4 rotate-45" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="order-1 space-y-6 md:order-2 lg:col-span-4">
          <PopularPosts />
        </div>

        {/* Articles List */}
        <div className="order-2 md:order-1 lg:col-span-8">
          <div>
            {posts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
