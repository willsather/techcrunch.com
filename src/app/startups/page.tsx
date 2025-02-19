import type { Metadata } from "next";
import { Suspense } from "react";

import PopularPostsSkeleton from "@/app/(components)/(skeletons)/popular-posts-skeleton";
import PostListSkeleton from "@/app/(components)/(skeletons)/post-list-skeleton";
import PopularPosts from "@/app/(components)/popular-posts";
import StartupsPostList from "@/app/startups/startups-post-list";

export const metadata: Metadata = {
  title: "Startups",
  description:
    "Read more about tech startup news that breaks down funding, growth, and long-term trajectory of companies across every stage and industry.",
  openGraph: {
    title: "Startups",
    description:
      "Read more about tech startup news that breaks down funding, growth, and long-term trajectory of companies across every stage and industry.",
  },
};

export const dynamic = "force-static";
export const revalidate = 60;

export default async function StartupsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">Startups</h1>
          <p className="max-w-xl">
            Tech startup news that breaks down the funding, growth, and
            long-term trajectory of companies across every stage and industry.
            Startup coverage includes climate, crypto, fintech, SaaS,
            transportation, and consumer tech.
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
          <StartupsPostList />
        </Suspense>
      </div>
    </div>
  );
}
