import type { Post } from "@/app/blog/page";
import Image from "next/image";
import Link from "next/link";

export default function PostCard({
  post,
  isFeatured = false,
}: { post: Post; isFeatured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`relative block overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02] ${
        isFeatured ? "h-[400px] md:h-[500px]" : "h-[250px]"
      }`}
    >
      {post.jetpack_featured_media_url && (
        <Image
          src={post.jetpack_featured_media_url}
          alt={post.title.rendered}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      )}

      <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 p-6">
        <h2
          className={`text-white ${
            isFeatured ? "font-bold text-3xl" : "font-semibold text-lg"
          }`}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>
    </Link>
  );
}
