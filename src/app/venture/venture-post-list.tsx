import { PostListItem } from "@/app/(components)/post-list-item";
import { getPosts } from "@/lib/blog";

export default async function VenturePostList() {
  const posts = await getPosts({ category: "venture" });

  return (
    <div className="order-2 md:order-1 lg:col-span-8">
      <div>
        {posts.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
