import Image from "next/image";
import Link from "next/link";

import { type Post, getCategory } from "@/lib/blog";
import he from "he";

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
                  src={featuredPost.jetpack_featured_media_url ?? ""}
                  alt={featuredPost.title.rendered}
                  fill
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <div className="mb-2 inline-block bg-white px-2 py-1 font-medium text-tc-green text-xs">
                      {featuredPost.categories?.[0] != null
                        ? (
                            await getCategory(featuredPost.categories?.[0])
                          )?.name.toUpperCase()
                        : "Featured"}
                    </div>
                    <h2
                      className="mb-2 font-bold text-2xl text-white md:text-4xl"
                      dangerouslySetInnerHTML={{
                        __html: he.decode(featuredPost.title.rendered),
                      }}
                    />
                    <div className="flex items-center space-x-4 text-gray-300 text-sm">
                      <span>{featuredPost.author_info?.name}</span>
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
            {secondaryPosts.map(async (post) => (
              <Link
                key={post.id}
                href={`/posts/${post.slug}`}
                className="group block bg-black"
              >
                <div className="relative aspect-[16/9] overflow-clip">
                  <Image
                    src={post.jetpack_featured_media_url || "/placeholder.svg"}
                    alt={post.title.rendered}
                    fill
                    className="overflow-clip object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <div className="absolute bottom-0 p-4">
                      <div className="mb-2 inline-block bg-white px-2 py-1 font-medium text-tc-green text-xs">
                        {post.categories?.[0] != null
                          ? (
                              await getCategory(post.categories?.[0])
                            )?.name.toUpperCase()
                          : "News"}
                      </div>
                      <h3
                        className="mb-2 font-bold text-lg text-white"
                        dangerouslySetInnerHTML={{
                          __html: he.decode(post.title.rendered),
                        }}
                      />
                      <div className="flex items-center space-x-4 text-gray-300 text-xs">
                        <span>{post.author_info?.name}</span>
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
