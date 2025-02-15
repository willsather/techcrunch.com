"use server";

import { z } from "zod";

import type { newsletterSchema } from "@/app/(components)/(newsletter)/newsletter-form";

/*
 * DEMO: Server Actions
 *
 * Secure, Type-Safe abstraction of API routes. Next.js
 * automatically generates these endpoints.
 */
export async function newsletterAction(
  formData: z.infer<typeof newsletterSchema>,
) {
  const email = z.string().email().parse(formData.email);
  console.log(`${email} has signed up for the newsletter!`);
}
