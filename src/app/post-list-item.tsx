import Link from "next/link";

import type { Post } from "@/lib/blog";
import { formatTimeSince } from "@/lib/utils";

export function PostListItem({ post }: { post: Post }) {
  return (
    <article className="group flex gap-6 py-6 first:pt-0">
      {/* Thumbnail */}
      <Link
        href={`/posts/${post.slug}`}
        className="relative block h-[154px] w-[154px] shrink-0 overflow-hidden bg-gray-100"
      >
        <img
          src={post.image ?? "/default.png"}
          alt={post.image}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col">
        <Link href={`/posts/${post.slug}`}>
          <div className="mb-2 inline-block font-medium text-tc-green text-xs">
            {post.categories?.[0]?.toUpperCase()}
          </div>
          <h2 className="mb-2 font-bold text-[22px] leading-tight tracking-tight hover:underline">
            {post.title}
          </h2>
        </Link>

        <div className="mt-auto flex flex-col items-start gap-2 font-medium text-gray-500 text-sm md:flex-row md:items-center">
          <span>{post.author}</span>
          <span className="hidden md:block">-</span>
          <time>{formatTimeSince(post.date)}</time>
        </div>
      </div>
    </article>
  );
}
