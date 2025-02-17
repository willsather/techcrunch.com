"use client";

import { Toaster, toast } from "sonner";

import { revalidatePages } from "@/app/dashboard/revalidate-pages";
import { revalidatePosts } from "@/app/dashboard/revalidate-posts";
import { RefreshIcon } from "@/icons/refresh-icon";

export default function RevalidateButton({
  type,
}: { type: "pages" | "posts" }) {
  const onButtonClick = async () => {
    try {
      if (type === "pages") {
        await revalidatePages();
        toast.success("Revalidated pages");
      } else {
        await revalidatePosts();
        toast.success("Revalidated posts");
      }
    } catch (error) {
      toast.error("Failed to revalidate");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => onButtonClick()}
        className="my-4 flex items-center"
      >
        <RefreshIcon className="mr-2 size-5 fill-tc-green" />
        Revalidate {type === "pages" ? "Pages" : "Posts"}
      </button>
      <Toaster />
    </>
  );
}
