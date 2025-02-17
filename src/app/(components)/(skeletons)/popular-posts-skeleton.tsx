import React from "react";

import { TrendUpIcon } from "@/icons/trend-up-icon";

export default function PopularPostsSkeleton() {
  return (
    <div className="order-1 md:order-2 lg:col-span-4">
      <div className="bg-tc-purple p-6 text-white">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-bold text-3xl">Most Popular</h2>
          <div className="rounded bg-tc-yellow p-6">
            <TrendUpIcon className="size-8 fill-tc-purple" />
          </div>
        </div>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={`i-${i.toString()}`}
              className="block border-white/20 border-t pt-4 first:border-t-0 first:pt-0"
            >
              <span className="mb-2 inline-block text-sm text-white/60">
                {i + 1}
              </span>{" "}
              <div className="h-24 w-full animate-pulse bg-gray-400/50" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
