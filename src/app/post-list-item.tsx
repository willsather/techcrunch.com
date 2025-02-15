import Link from "next/link";

import type { Post } from "@/lib/blog";

export function PostListItem({ post }: { post: Post }) {
  const timeAgo = new Date(post.date).toLocaleDateString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <article className="group flex gap-6 py-6 first:pt-0">
      {/* Thumbnail */}
      <Link
        href={`/post/${post.slug}`}
        className="relative block h-[154px] w-[154px] shrink-0 overflow-hidden bg-gray-100"
      >
        <img
          src={post.jetpack_featured_media_url || "/placeholder.svg"}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col">
        <Link href={`/post/${post.slug}`}>
          <h2
            className="mb-2 font-bold text-[22px] leading-tight tracking-tight hover:text-[#0A8B3C]"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>

        <div className="mt-auto flex items-center gap-2 text-[15px] text-gray-500">
          <span className="font-medium">{post.author_info?.name}</span>
          <span>•</span>
          <time>{timeAgo}</time>
        </div>
      </div>
    </article>
  );
}
