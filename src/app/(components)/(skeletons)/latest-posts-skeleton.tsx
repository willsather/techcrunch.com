import Link from "next/link";

import PopularPostsSkeleton from "@/app/(components)/(skeletons)/popular-posts-skeleton";
import PostListSkeleton from "@/app/(components)/(skeletons)/post-list-skeleton";
import { ArrowIcon } from "@/icons/arrow-icon";

export default function LatestPostsSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
        <h1 className="font-extrabold text-7xl text-tc-green md:m-0">
          Latest News
        </h1>

        <Link
          href="/latest"
          className="inline-flex items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
        >
          See More
          <ArrowIcon className="size-4 rotate-45" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <PopularPostsSkeleton />

        {/* Articles Grid */}
        <PostListSkeleton />
      </div>
    </div>
  );
}
