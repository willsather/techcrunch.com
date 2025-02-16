export default function PostListSkeleton() {
  return (
    <div className="order-2 mt-4 md:order-1 lg:col-span-8">
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <article
            key={`i-${i.toString()}`}
            className="flex gap-6 border-b py-6 first:pt-0"
          >
            {/* Thumbnail */}
            <div className="relative block h-[154px] w-[154px] shrink-0 animate-pulse overflow-hidden bg-gray-300" />

            {/* Content */}
            <div className="flex flex-1 flex-col">
              <div className="mb-2 h-4 w-20 animate-pulse bg-gray-300" />
              <div className="mb-2 h-6 w-3/4 animate-pulse bg-gray-300" />

              <div className="mt-auto flex flex-col items-start gap-2 text-sm md:flex-row md:items-center">
                <div className="h-4 w-16 animate-pulse bg-gray-300" />
                <div className="h-4 w-20 animate-pulse bg-gray-300" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
