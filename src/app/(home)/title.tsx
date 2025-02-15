import { TechCrunchLogo } from "@/icons/logo";
import { cn } from "@/lib/utils";

export default function TitleSection() {
  return (
    <div
      className={cn("relative bg-tc-green transition-all duration-300 md:py-6")}
    >
      {/* Logo Section */}
      <div className="container mx-auto flex items-center justify-center gap-4 px-4">
        <TechCrunchLogo className="size-12 fill-white md:size-24" />

        <h1 className="my-8 font-bold text-white md:m-0 md:text-6xl">
          TechCrunch
        </h1>
      </div>
    </div>
  );
}
