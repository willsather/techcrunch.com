"use server";

import { revalidatePath } from "next/cache";

/*
 * DEMO: `revalidatePath`
 *
 * Programmatically purge Next.js cache for a specific path.
 */
export async function revalidatePages() {
  revalidatePath("/");
  revalidatePath("/startups");
  revalidatePath("/apps");
  revalidatePath("/venture");
}
