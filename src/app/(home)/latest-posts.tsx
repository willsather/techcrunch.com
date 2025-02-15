import { PostListItem } from "@/app/post-list-item";
import { ArrowIcon } from "@/icons/arrow-icon";
import { getPosts } from "@/lib/blog";
import Link from "next/link";

export default async function LatestPostsSection() {
  const popular = await getPosts();
  const posts = await getPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="font-bold text-5xl text-tc-green md:m-0">Latest News</h1>
        <Link
          href="/latest"
          className="inline-flex items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
        >
          See More
          <ArrowIcon className="size-4 rotate-45" />
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="order-1 space-y-6 md:order-2 lg:col-span-4">
          <div className="rounded-xl border bg-gray-50 p-6">
            <h2 className="mb-4 font-bold text-tc-green text-xl">
              Top Headlines
            </h2>
            <div className="space-y-4">
              {popular.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.slug}`}
                  className="block font-medium text-sm hover:text-tc-green"
                >
                  <div>{post.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="order-2 md:order-1 lg:col-span-8">
          {/* Articles List */}
          <div>
            {posts.map((post) => (
              <PostListItem key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/*Article Grid*/}
        {/*<div className="order-2 md:order-1 lg:col-span-8">*/}
        {/*  <h2 className="my-2 text-tc-green">Latest Posts</h2>*/}
        {/*  <div className="grid gap-6 md:grid-cols-2">*/}
        {/*    {posts.map((post) => (*/}
        {/*      <PostCard key={post.id} post={post} />*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
