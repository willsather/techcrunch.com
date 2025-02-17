import type { Metadata } from "next";

import PopularPosts from "@/app/(components)/popular-posts";
import { PostListItem } from "@/app/(components)/post-list-item";
import { getPosts } from "@/lib/blog";
import { searchResultsFlag } from "@/lib/flags";

export const metadata: Metadata = {
  title: "Search",
  description: "Search for TechCrunch articles.",
  openGraph: {
    title: "Search",
    description: "Search for TechCrunch articles.",
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
export const experimental_ppr = true;

export default async function SearchPage(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const { q: query } = searchParams as { [key: string]: string };

  const posts = await getPosts({ name: query });

  const countEnabled = await searchResultsFlag();

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <div className="my-4 flex flex-col md:my-8 md:justify-between">
          <h1 className="my-2 text-6xl text-tc-green md:text-8xl">
            {query?.toUpperCase()}
          </h1>

          {countEnabled ? (
            <p className="my-2 text-tc-black">Found {posts.length} results.</p>
          ) : null}
        </div>

        <div className="my-4 border-tc-green border-t-8" />
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        <div className="order-1 lg:col-span-8">
          {posts.map((post) => (
            <PostListItem key={post.id} post={post} />
          ))}
        </div>

        <PopularPosts />
      </div>
    </div>
  );
}
