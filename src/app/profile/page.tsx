import RevalidateButton from "@/app/profile/revalidate-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  openGraph: {
    title: "Profile",
  },
};

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
        <h1 className="my-2 text-6xl text-tc-green md:text-8xl">Profile</h1>
      </div>

      <div className="my-4 border-tc-green border-t-8" />

      <RevalidateButton />
    </div>
  );
}
