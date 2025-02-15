import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/lib/blog";

export default async function Hero({
  featuredPost,
  secondaryPosts,
}: { featuredPost: Post; secondaryPosts: Post[] }) {
  return (
    <div className="min-h-[75vh] bg-tc-green pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Featured Post */}
          <div className="lg:col-span-8">
            <Link
              href={`/posts/${featuredPost.slug}`}
              className="group block bg-black"
            >
              <div className="relative aspect-[16/10] overflow-clip">
                <Image
                  src={featuredPost.image ?? ""}
                  alt={featuredPost.title}
                  fill
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <div className="mb-2 inline-block bg-white px-2 py-1 font-medium text-tc-green text-xs">
                      {featuredPost.categories?.[0] != null
                        ? featuredPost.categories[0].toUpperCase()
                        : "Featured"}
                    </div>
                    <h2 className="mb-2 font-bold text-2xl text-white md:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <span>{featuredPost.author}</span>
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Secondary Posts */}
          <div className="grid gap-4 lg:col-span-4">
            {secondaryPosts.map((post) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="group block bg-black"
              >
                <div className="relative aspect-[16/9] overflow-clip">
                  <Image
                    src={post.image ?? ""}
                    alt={post.title}
                    fill
                    className="overflow-clip object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-0 p-4">
                      <div className="mb-2 inline-block bg-white px-2 py-1 font-medium text-tc-green text-xs">
                        {post.categories?.[0] != null
                          ? post.categories[0].toUpperCase()
                          : "News"}
                      </div>
                      <h3 className="mb-2 font-bold text-lg text-white">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-300 text-xs">
                        <span>{post.author}</span>
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
