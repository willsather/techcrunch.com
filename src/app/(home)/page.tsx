import Hero from "@/app/(home)/hero";
import LatestPostsSection from "@/app/(home)/latest-posts";
import TitleSection from "@/app/(home)/title";
import VenturePostsSection from "@/app/(home)/venture-posts";

/*
 * DEMO: Pages
 *
 * Automatically create frontend application routing
 * without having to specify pages and a router.
 *
 * All routes are specified and determined via the
 * file path under `/app`
 */
export default async function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <Hero />

      {/* Main Content */}
      <main>
        <LatestPostsSection />
      </main>

      <VenturePostsSection />
    </div>
  );
}
