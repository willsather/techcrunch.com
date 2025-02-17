export default async function HeroSkeleton() {
  return (
    <div className="min-h-[70vh] bg-tc-green pb-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-4 lg:grid-cols-12">
          {/* Featured Post Skeleton */}
          <div className="lg:col-span-8">
            <div className="block animate-pulse border-white/20 border-t pt-4 first:border-t-0 first:pt-0">
              <div className="relative aspect-[16/10] overflow-clip bg-gray-400/50" />
            </div>
          </div>

          {/* Secondary Posts Skeleton */}
          <div className="grid gap-4 lg:col-span-4">
            {[...Array(2)].map((_, i) => (
              <div
                key={`post-skeleton-${i.toString()}`}
                className="block animate-pulse pt-5 first:pt-0"
              >
                <div className="relative h-full overflow-clip bg-gray-400/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
