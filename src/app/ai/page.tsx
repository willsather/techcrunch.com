import Link from "next/link";

import { PostListItem } from "@/app/post-list-item";
import { TrendUpIcon } from "@/icons/trend-up-icon";
import { getPosts } from "@/lib/blog";

export default async function AIPage() {
  const posts = await getPosts();

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
        {/* Sidebar */}
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

        {/* Main Content */}
        <div className="order-2 md:order-1 lg:col-span-8">
          {/* Articles List */}
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
