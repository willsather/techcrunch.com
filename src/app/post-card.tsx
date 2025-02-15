import Image from "next/image";
import Link from "next/link";

import type { Post } from "@/lib/blog";
import { formatTimeSince } from "@/lib/utils";

export default async function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <div className="relative aspect-[16/9] overflow-clip bg-black">
        <Image
          src={post.image ?? "/default.png"}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 p-4">
            <div className="mb-2 inline-block bg-white px-2 py-1 font-medium text-tc-green text-xs">
              {post.categories?.[0] != null
                ? post.categories[0].toUpperCase()
                : "News"}
            </div>

            <h3 className="mb-2 font-bold text-lg text-white">{post.title}</h3>

            <div className="flex items-center space-x-2 text-gray-300 text-xs">
              <span>{post.author}</span>
              <span>•</span>
              <time>{formatTimeSince(post.date)}</time>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
