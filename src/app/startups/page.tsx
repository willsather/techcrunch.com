import PopularPosts from "@/app/(components)/popular-posts";
import { PostListItem } from "@/app/(components)/post-list-item";
import { getPosts } from "@/lib/blog";
import type { Metadata } from "next";

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

export default async function StartupsPage() {
  const posts = await getPosts({ category: "Startups" });

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
