import type { Metadata } from "next";
import { Suspense } from "react";

import PopularPostsSkeleton from "@/app/(components)/(skeletons)/popular-posts-skeleton";
import PostListSkeleton from "@/app/(components)/(skeletons)/post-list-skeleton";
import PopularPosts from "@/app/(components)/popular-posts";
import AIPostList from "@/app/ai/ai-post-list";

export const metadata: Metadata = {
  title: "AI",
  description:
    "Read the latest on artificial intelligence and machine learning tech, the companies that are building them, and the ethical issues AI raises today.",
  openGraph: {
    title: "AI",
    description:
      "Read the latest on artificial intelligence and machine learning tech, the companies that are building them, and the ethical issues AI raises today.",
  },
};

export const dynamic = "force-static";
export const revalidate = 60;

export default async function AIPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">AI</h1>
          <p className="max-w-xl">
            News coverage on artificial intelligence and machine learning tech,
            the companies building them, and the ethical issues AI raises today.
            This encompasses generative AI, including large language models,
            text-to-image and text-to-video models; speech recognition and
            generation; and predictive analytics.
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
          <AIPostList />
        </Suspense>
      </div>
    </div>
  );
}
