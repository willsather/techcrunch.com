"use server";

import { revalidateTag } from "next/cache";

/*
 * DEMO: `revalidateTag`
 *
 * Programmatically purge Next.js cache for a specific cache tag.
 *
 * These tags are specified as parameters of `fetch`.
 */
export async function revalidatePosts() {
  revalidateTag("posts");
}
