import type { Metadata } from "next";
import { Suspense } from "react";

import PopularPostsSkeleton from "@/app/(components)/(skeletons)/popular-posts-skeleton";
import PostListSkeleton from "@/app/(components)/(skeletons)/post-list-skeleton";
import PopularPosts from "@/app/(components)/popular-posts";
import VenturePostList from "@/app/venture/venture-post-list";

export const metadata: Metadata = {
  title: "Venture",
  description:
    "Venture capital news and coverage feature all the VCs, VC-backed startups, and investment trends that founders, investors, and students should be tracking.",
  openGraph: {
    title: "Venture",
    description:
      "Venture capital news and coverage feature all the VCs, VC-backed startups, and investment trends that founders, investors, and students should be tracking.",
  },
};

export const dynamic = "force-static";
export const revalidate = 60;

export default async function VenturePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">Venture</h1>
          <p className="max-w-xl">
            Our venture capital news features interviews and analysis on all the
            VCs, the VC-backed startups, and the investment trends that
            founders, investors, students, academics – and anyone else
            interested in the way that tech is transforming the world – should
            be tracking.
          </p>
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
          <VenturePostList />
        </Suspense>
      </div>
    </div>
  );
}
