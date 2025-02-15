"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";

import { newsletterAction } from "@/app/(components)/(newsletter)/newsletter-action";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";

export const newsletterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function NewsletterForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    startTransition(async () => {
      try {
        await newsletterAction(data);
        toast.success("Thank you for joining.");
        form.reset();
      } catch (error) {
        toast.error("Unable to join newsletter.");
      }
    });
  });

  return (
    <>
      <Toaster />
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Join the newsletter</FormLabel>
                <div className="relative w-full">
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="border-none bg-white/5 py-6 text-white focus:outline-tc-green focus:ring-0"
                      {...field}
                    />
                  </FormControl>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="-translate-y-1/2 absolute top-1/2 right-1 rounded bg-tc-green px-4 py-1.5 text-white"
                  >
                    Join
                  </button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
