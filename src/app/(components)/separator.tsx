export default function Separator() {
  return (
    <div className="mb-6 md:mb-12">
      <div className="relative w-full">
        <div className="h-8 w-full bg-tc-green-700 md:h-12" />
        <div className="absolute top-0 right-0 flex w-1/3 flex-col">
          <div className="h-8 bg-tc-green-300 md:h-12" />
          <div className="h-8 bg-tc-green-300/50 md:h-12" />
        </div>
      </div>
    </div>
  );
}
