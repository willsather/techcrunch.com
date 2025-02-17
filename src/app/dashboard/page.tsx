import RevalidateButton from "@/app/dashboard/revalidate-button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  openGraph: {
    title: "Dashboard",
  },
};

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="my-4 flex flex-col md:my-8 md:flex-row md:justify-between">
        <h1 className="my-2 text-6xl text-tc-green md:text-8xl">Dashboard</h1>
      </div>

      <div className="my-4 border-tc-green border-t-8" />

      <RevalidateButton type="pages" />

      <RevalidateButton type="posts" />
    </div>
  );
}
