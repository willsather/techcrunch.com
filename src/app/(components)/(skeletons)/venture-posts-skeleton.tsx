import Link from "next/link";

import { ArrowIcon } from "@/icons/arrow-icon";

export default function VenturePostsSkeleton() {
  return (
    <section className="relative bg-tc-yellow">
      <div className="container mx-auto px-4 py-12">
        {/* Section Header Skeleton */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
          <h1 className="font-extrabold text-7xl text-tc-purple md:m-0">
            Venture
          </h1>

          <Link
            href="/latest"
            className="inline-flex items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
          >
            See More
            <ArrowIcon className="size-4 rotate-45" />
          </Link>
        </div>

        {/* Featured Article Skeleton */}
        <div className="relative mb-8 aspect-[16/9] w-full animate-pulse overflow-clip bg-gray-400/50" />

        {/* Other Posts List Skeleton */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[...Array(6)].map((_, i) => (
            <article
              key={`i-${i.toString()}`}
              className="flex gap-6 border-b py-6 first:pt-0"
            >
              {/* Thumbnail */}
              <div className="relative block h-[154px] w-[154px] shrink-0 animate-pulse overflow-hidden bg-gray-400/50" />

              {/* Content */}
              <div className="flex flex-1 flex-col">
                <div className="mb-2 h-4 w-20 animate-pulse bg-gray-400/50" />
                <div className="mb-2 h-6 w-3/4 animate-pulse bg-gray-400/50" />

                <div className="mt-auto flex flex-col items-start gap-2 text-sm md:flex-row md:items-center">
                  <div className="h-4 w-16 animate-pulse bg-gray-400/50" />
                  <div className="h-4 w-20 animate-pulse bg-gray-400/50" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
