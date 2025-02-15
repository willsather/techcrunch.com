"use server";

import { z } from "zod";

import type { newsletterSchema } from "@/app/(components)/(newsletter)/newsletter-form";

export async function newsletterAction(
  formData: z.infer<typeof newsletterSchema>,
) {
  const email = z.string().email().parse(formData.email);
  console.log(`${email} has signed up for the newsletter!`);
}
