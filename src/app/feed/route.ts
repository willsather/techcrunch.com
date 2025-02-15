import { getRSSFeed } from "@/lib/blog";

export async function GET() {
  const feed = await getRSSFeed();

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
