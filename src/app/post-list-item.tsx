import type { Post } from "@/lib/blog";
import { formatTimeSince } from "@/lib/utils";
import Link from "next/link";

type PostListItemProps = {
  post: Post;
  theme?: "default" | "alternate"; // You can extend this if you want more themes
};

export function PostListItem({ post, theme = "default" }: PostListItemProps) {
  const defaultStyles = {
    textColor: "text-tc-green",
    borderColor: "border-gray-300",
    hoverScale: "group-hover:scale-105",
  };

  const alternateStyles = {
    textColor: "text-tc-purple",
    borderColor: "border-tc-purple",
    hoverScale: "group-hover:scale-105",
  };

  const styles = theme === "alternate" ? alternateStyles : defaultStyles;

  return (
    <article
      className={`group flex gap-6 border-b py-6 first:pt-0 ${styles.borderColor}`}
    >
      {/* Thumbnail */}
      <Link
        href={`/posts/${post.slug}`}
        className="relative block h-[154px] w-[154px] shrink-0 overflow-hidden bg-gray-500"
      >
        <img
          src={post.image ?? "/default.png"}
          alt={post.image}
          className={`h-full w-full object-cover transition-transform duration-300 ${styles.hoverScale}`}
        />
      </Link>

      {/* Content */}
      <div className="flex flex-col">
        <Link href={`/posts/${post.slug}`}>
          <div
            className={`mb-2 inline-block font-medium text-xs ${styles.textColor}`}
          >
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
