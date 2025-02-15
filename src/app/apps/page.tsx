import PopularPosts from "@/app/(components)/popular-posts";
import { PostListItem } from "@/app/(components)/post-list-item";
import { getPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "As the app economy continues to grow, both on iOS and Google Play stores, TechCrunch covers the latest app news and updates across both digital storefronts.",
  openGraph: {
    title: "Apps",
    description:
      "As the app economy continues to grow, both on iOS and Google Play stores, TechCrunch covers the latest app news and updates across both digital storefronts.",
  },
};

export default async function AppsPage() {
  const posts = await getPosts({ category: "Apps" });

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">Apps</h1>
          <p className="max-w-xl">
            The app economy continues to grow, having produced a record number
            of downloads and consumer spending across both the iOS and Google
            Play stores. Keep up with this fast-moving industry in one place,
            with the latest from the world of apps, including news, updates,
            startup fundings, mergers and acquisitions, and much more.
          </p>
        </div>

        <div className="my-4 border-tc-green border-t-8" />
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <PopularPosts />

        {/* Main Content */}
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
