import Hero from "@/app/(home)/hero";
import LatestPostsSection from "@/app/(home)/latest-posts";
import TitleSection from "@/app/(home)/title";
import UpcomingEvents from "@/app/(home)/upcoming-events";
import VenturePostsSection from "@/app/(home)/venture-posts";

export const dynamic = "force-static";

/*
 * DEMO: Pages
 *
 * Automatically create frontend application routing
 * without having to specify pages and a router.
 *
 * All routes are specified and determined via the
 * file path under `/app`
 */
export default async function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <Hero />

      {/* Main Content */}
      <main>
        <LatestPostsSection />

        <VenturePostsSection />

        <UpcomingEvents />
      </main>
    </div>
  );
}
