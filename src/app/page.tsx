import Link from "next/link";

import Hero from "@/app/hero";
import PostCard from "@/app/post-card";
import { getPosts } from "@/lib/blog";
import he from "he";

export default async function BlogPage() {
  const posts = await getPosts();

  const [featuredPost, secondPost, thirdPost, ...otherPosts] = posts;

  return (
    <div className="min-h-screen bg-white">
      <Hero
        featuredPost={featuredPost}
        secondaryPosts={[secondPost, thirdPost]}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="order-1 space-y-6 md:order-2 lg:col-span-4">
            <div className="rounded-xl border bg-gray-50 p-6">
              <h2 className="mb-4 font-bold text-tc-green text-xl">
                Top Headlines
              </h2>
              <div className="space-y-4">
                {posts.slice(0, 5).map((post) => (
                  <Link
                    key={post.id}
                    href={`/posts/${post.slug}`}
                    className="block font-medium text-sm hover:text-tc-green"
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: he.decode(post.title.rendered),
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="order-2 md:order-1 lg:col-span-8">
            <h2 className="my-2 text-tc-green">Latest Posts</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherPosts.slice(0, 6).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
