import type { Metadata } from "next";
import { Suspense } from "react";

import Refresh from "@/app/(components)/(refresh)/refresh";
import PopularPostsSkeleton from "@/app/(components)/(skeletons)/popular-posts-skeleton";
import PostListSkeleton from "@/app/(components)/(skeletons)/post-list-skeleton";
import PopularPosts from "@/app/(components)/popular-posts";
import LatestPostList from "@/app/latest/latest-post-list";

export const metadata: Metadata = {
  title: "Latest News",
  openGraph: {
    title: "Latest News",
  },
};

/*
 * DEMO: Partial Pre-Rendering
 *
 * Automatically render static components immediately
 * while dynamic components load.
 *
 * This is incredibly helpful when needing to load
 * almost an entire page even though only a small piece
 * of the page is dynamic (think of a dashboard loading
 * tons of data, can still load the nav/header/skeletons)
 */

export default async function LatestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">
            Latest News
          </h1>

          <Refresh />
        </div>

        <div className="my-4 border-tc-green border-t-8" />
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Popular Posts Sidebar */}
        <Suspense fallback={<PopularPostsSkeleton />}>
          <PopularPosts />
        </Suspense>

        {/* Main Content */}
        <Suspense fallback={<PostListSkeleton />}>
          <LatestPostList />
        </Suspense>
      </div>
    </div>
  );
}
