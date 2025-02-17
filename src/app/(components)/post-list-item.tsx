import Link from "next/link";

import { InBriefIcon } from "@/icons/in-brief-icon";
import type { Post } from "@/lib/blog";
import { inBriefFlag } from "@/lib/flags";
import { formatTimeSince } from "@/lib/utils";

type PostListItemProps = {
  post: Post;
  theme?: "default" | "alternate";
};

export async function PostListItem({
  post,
  theme = "default",
}: PostListItemProps) {
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

  const showInBrief = await inBriefFlag();

  return (
    <article>
      <Link
        href={`/posts/${post.slug}`}
        className={`group flex gap-6 border-b py-6 first:pt-0 ${styles.borderColor}`}
      >
        {/* Thumbnail */}
        <div className="relative block aspect-[563/375] w-[150px] shrink-0 overflow-hidden bg-gray-500">
          {post.image !== "" ? (
            <img
              src={post.image ?? "/default.png"}
              alt={post.image}
              className={`h-full w-full object-cover transition-transform duration-300 ${styles.hoverScale}`}
            />
          ) : (
            <div className="h-full w-full bg-gray-500" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col">
          <div>
            <div
              className={`mb-2 inline-block font-medium text-xs ${styles.textColor}`}
            >
              {post.categories?.[0]?.toUpperCase()}
            </div>

            <div className="flex items-start gap-2">
              {showInBrief && post.metadata?.isBrief ? (
                <div className="bg-tc-green p-1">
                  <InBriefIcon className="size-4 fill-white" />
                </div>
              ) : null}
              <h2 className="mb-2 font-bold text-lg leading-tight tracking-tight hover:underline">
                {post.title}
              </h2>
            </div>
          </div>

          <div className="mt-auto flex flex-col items-start gap-2 font-medium text-gray-500 text-sm md:flex-row md:items-center">
            <span>{post.author}</span>
            <span className="hidden md:block">-</span>
            <time>{formatTimeSince(post.date)}</time>
          </div>
        </div>
      </Link>
    </article>
  );
}
