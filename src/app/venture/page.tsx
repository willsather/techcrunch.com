import PopularPosts from "@/app/(components)/popular-posts";
import { PostListItem } from "@/app/(components)/post-list-item";
import { getPosts } from "@/lib/blog";
import type { Metadata } from "next";

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

export default async function VenturePage() {
  const posts = await getPosts({ category: "Venture" });

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
