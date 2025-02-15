import { getRSSFeed } from "@/lib/blog";

/*
 * DEMO: API Routes
 *
 * Expose HTTP Endpoints using `route.ts`.
 *
 * These routes are standard API endpoints that can users,
 * other applications, and internal `client` components can
 * utilize.
 */
export async function GET() {
  const feed = await getRSSFeed();

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
