import Image from "next/image";
import Link from "next/link";

import { type Post, getCategory } from "@/lib/blog";
import he from "he";

export default async function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <div className="relative aspect-[16/9] overflow-clip bg-black">
        <Image
          src={post.jetpack_featured_media_url ?? "/placeholder.svg"}
          alt={post.title.rendered}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
          <div className="absolute bottom-0 p-4">
            <div className="mb-2 inline-block bg-white px-2 py-1 font-medium text-[#0A8B3C] text-xs">
              {post.categories?.[0] != null
                ? (await getCategory(post.categories?.[0]))?.name.toUpperCase()
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
  );
}
