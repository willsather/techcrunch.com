import he from "he";
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
      {post.jetpack_featured_media_url && (
        <div className="mb-6 w-full overflow-hidden rounded-xl">
          <Image
            src={post.jetpack_featured_media_url}
            alt={post.title.rendered}
            width={800}
            height={450}
            className="w-full rounded-xl object-cover"
          />
        </div>
      )}

      {/* Blog Title */}
      <h1 className="mb-6 font-bold text-4xl">
        {he.decode(post.title.rendered)}
      </h1>

      {/* Blog Content */}
      <div
        className="prose lg:prose-lg xl:prose-xl max-w-none"
        dangerouslySetInnerHTML={{
          __html: he.decode(post.content.rendered),
        }}
      />
    </div>
  );
}
