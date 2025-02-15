import Hero from "@/app/(home)/hero";
import LatestPostsSection from "@/app/(home)/latest-posts";
import VenturePostsSection from "@/app/(home)/venture-posts";

export default async function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />

      {/* Main Content */}
      <main>
        <LatestPostsSection />
      </main>

      <VenturePostsSection />
    </div>
  );
}
