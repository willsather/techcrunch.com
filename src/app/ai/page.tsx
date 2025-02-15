import PopularPosts from "@/app/(components)/popular-posts";
import { PostListItem } from "@/app/(components)/post-list-item";
import { getPosts } from "@/lib/blog";

export default async function AIPage() {
  const posts = await getPosts({ category: "AI" });

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
