import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FacebookIcon } from "@/icons/facebook-icon";
import { LinkedInIcon } from "@/icons/linkedin-icon";
import { TwitterIcon } from "@/icons/twitter-icon";
import { getPost, getPosts } from "@/lib/blog";
import { formatTimeSince } from "@/lib/utils";

/*
 * DEMO: Static Site Generation (SSG)
 *
 * At build time, generate the top 25 most recent
 * blog posts, allowing `dynamicParams` to dynamically
 * generate the other posts at first request time.
 */
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/*
 * DEMO: Generate Metadata
 *
 * At build time, generate the post specific metadata
 * even when using a dynamic route.  This allows for
 * each dynamic route to have metadata and opengraph
 * images, text, etc.
 */
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: post.image
      ? {
          images: [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ],
        }
      : null,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <article>
      {/* Hero Section */}
      <div className="relative min-h-[60vh] bg-[#0A8B3C]">
        <div className="grid lg:grid-cols-2">
          {/* Featured Image */}
          <div className="relative h-[60vh] w-full">
            {post.image ? (
              <Image
                src={post.image ?? "/default.png"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="h-full w-full bg-gray-200" />
            )}
          </div>

          {/* Content Overlay */}
          <div className="flex flex-col justify-center p-6 text-white lg:p-12">
            <div className="mb-4 font-medium text-sm uppercase tracking-wider">
              {post.categories?.[0] ?? "News"}
            </div>
            <h1 className="mb-6 font-bold text-3xl leading-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mb-6 space-y-2">
              <Link href="#" className="block text-lg hover:text-white/80">
                {post.author}
              </Link>
              <time className="block text-white/80">
                {formatTimeSince(post.date)}
              </time>
            </div>

            {/* Social Share Buttons */}
            <div className="flex space-x-6">
              <button type="submit">
                <FacebookIcon className="size-5" />
              </button>
              <button type="submit">
                <TwitterIcon className="size-5" />
              </button>
              <button type="submit">
                <LinkedInIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto max-w-4xl px-6 py-12">
        <div
          className="blog prose prose-lg max-w-none prose-headings:font-bold prose-a:text-[#0A8B3C] prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{
            __html: post.content,
          }}
        />
      </div>
    </article>
  );
}
