import Link from "next/link";

import { TrendUpIcon } from "@/icons/trend-up-icon";
import { getPosts } from "@/lib/blog";

export default async function PopularPosts() {
  const posts = await getPosts({ category: "popular" });

  return (
    <div className="order-1 md:order-2 lg:col-span-4">
      <div className="bg-tc-purple p-6 text-white">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-bold text-3xl">Most Popular</h2>
          <div className="rounded bg-tc-yellow p-6">
            <TrendUpIcon className="size-8 fill-tc-purple" />
          </div>
        </div>

        <div className="space-y-4">
          {posts.slice(0, 5).map((post, index) => (
            <Link
              key={post.id}
              href={`/posts/${post.slug}`}
              className="block border-white/20 border-t pt-4 first:border-t-0 first:pt-0"
            >
              <span className="mb-2 inline-block text-sm text-white/60">
                {index + 1}
              </span>
              <h4
                className="font-medium leading-snug hover:text-tc-yellow"
                dangerouslySetInnerHTML={{
                  __html: post.title,
                }}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
