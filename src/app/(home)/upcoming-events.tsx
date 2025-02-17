import Link from "next/link";

import { ArrowIcon } from "@/icons/arrow-icon";

function Event({
  title,
  location,
  date,
}: {
  title: string;
  location: string;
  date: string;
}) {
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:gap-12">
      <div>
        <h3 className="font-bold text-tc-black text-xl md:text-2xl">{title}</h3>
        <p className="text-tc-black">
          {location} | {date}
        </p>
      </div>

      <div className="flex gap-4 md:py-5">
        <Link
          href="#"
          className="inline-flex items-center rounded-full bg-tc-green px-6 py-3 font-medium text-white hover:bg-tc-green/90"
        >
          Register Now
        </Link>
        <Link
          href="#"
          className="inline-flex items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
        >
          Be a Sponsor
        </Link>
      </div>
    </div>
  );
}

export default async function UpcomingEvents() {
  const events = [
    {
      title: "StrictlyVC San Francisco 2025",
      location: "San Francisco",
      date: "April 3, 2025",
    },
    {
      title: "TechCrunch Sessions: AI",
      location: "UC Berkeley",
      date: "June 5, 2025",
    },
    {
      title: "TechCrunch All Stage 2025",
      location: "Boston",
      date: "July 17, 2025",
    },
    {
      title: "TechCrunch Disrupt 2025",
      location: "San Francisco",
      date: "October 27 - 29, 2025",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-8">
          <h1 className="font-extrabold text-tc-green md:m-0 md:text-7xl">
            Upcoming Events
          </h1>
          <Link
            href="/latest"
            className="inline-flex max-w-xs items-center gap-2 rounded-full border-2 border-tc-green fill-tc-black px-4 py-4 font-medium text-sm hover:bg-tc-black hover:fill-white hover:text-white"
          >
            See More
            <ArrowIcon className="size-4 rotate-45" />
          </Link>
        </div>

        <div className="grid gap-12">
          {events.map((event) => (
            <Event key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
