import HeroSkeleton from "@/app/(components)/(skeletons)/hero-skeleton";
import LatestPostsSkeleton from "@/app/(components)/(skeletons)/latest-posts-skeleton";
import VenturePostsSkeleton from "@/app/(components)/(skeletons)/venture-posts-skeleton";
import Separator from "@/app/(components)/separator";
import TitleSection from "@/app/(home)/title";
import UpcomingEvents from "@/app/(home)/upcoming-events";

export default function HomeLoadingPage() {
  return (
    <div className="min-h-screen bg-white">
      <TitleSection />

      <HeroSkeleton />

      <Separator />

      <main>
        <LatestPostsSkeleton />
        <VenturePostsSkeleton />

        <UpcomingEvents />
      </main>
    </div>
  );
}
