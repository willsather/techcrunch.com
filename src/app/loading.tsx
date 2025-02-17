"use client";

/*
 * DEMO: Loading
 *
 * Next.js automatically wraps all pages with Suspense
 * to enable asynchronous, server components.
 *
 * The root loading page will be shown while rendering
 * the page, but these special pages can also be nested
 * to optimize how the page renders.
 */
import SpinnerIcon from "@/icons/spinner-icon";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-row items-center justify-center">
      <output>
        <SpinnerIcon className="size-8" />
        <span className="sr-only">Loading...</span>
      </output>
    </div>
  );
}
