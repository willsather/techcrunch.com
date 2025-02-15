"use client";

import { Toaster, toast } from "sonner";

import { revalidatePosts } from "@/app/profile/revalidate-action";
import { RefreshIcon } from "@/icons/refresh-icon";

export default function RevalidateButton() {
  const onButtonClick = async () => {
    try {
      await revalidatePosts();
      toast.success("Revalidated posts");
    } catch (error) {
      toast.error("Failed to revalidate posts");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => onButtonClick()}
        className="flex items-center"
      >
        <RefreshIcon className="mr-2 size-5" />
        Revalidate Posts
      </button>
      <Toaster />
    </>
  );
}
