import Image from "next/image";
import { notFound } from "next/navigation";

import { getPost } from "@/lib/blog";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <div className="container mx-auto max-w-3xl px-6 py-10">
      {/* Featured Image (if available) */}
      {post.image && (
        <div className="mb-6 w-full overflow-hidden rounded-xl">
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={450}
            className="w-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* Blog Title */}
      <h1 className="mb-6 font-bold text-4xl">{post.title}</h1>

      {/* Blog Content */}
      <div
        className="prose lg:prose-lg xl:prose-xl max-w-none"
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </div>
  );
}
