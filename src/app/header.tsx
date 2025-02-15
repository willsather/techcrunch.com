"use client";

import { TechCrunchLogo } from "@/icons/logo";
import { MenuIcon } from "@/icons/menu-icon";
import { SearchIcon } from "@/icons/search-icon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const mainNavItems = [
  { label: "Latest", href: "/latest" },
  { label: "Startups", href: "/startups" },
  { label: "Venture", href: "/venture" },
  { label: "AI", href: "/ai" },
];

export default function Header() {
  const isHomePage = usePathname() === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50">
      {/* Top Navigation - Always visible */}
      <div className="sticky top-0 z-50 bg-tc-black shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            {/* Left side with logo (visible when scrolled or not homepage) */}
            <div className="flex items-center gap-6">
              <button type="button" className="text-white md:hidden">
                <MenuIcon className="size-5" />
              </button>

              <Link
                href="/"
                className={cn(
                  "hidden font-bold text-white text-xl transition-opacity duration-200",
                  (scrolled || !isHomePage) &&
                    "mr-8 md:flex md:items-center md:gap-4",
                  !scrolled && isHomePage && "md:invisible md:opacity-0",
                )}
              >
                <TechCrunchLogo className="size-8" />
                TechCrunch
              </Link>

              <nav className="hidden items-center space-x-6 md:flex">
                {mainNavItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="font-bold text-gray-300 transition-colors hover:text-tc-green"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <button type="button" className="text-gray-300 hover:text-white">
                <SearchIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="hidden text-gray-300 text-sm hover:text-white md:inline-flex"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {isHomePage && (
        <div
          className={cn(
            "relative bg-tc-green py-6 transition-all duration-300",
            scrolled && "-mt-24 invisible opacity-0",
          )}
        >
          {/* Logo Section */}
          <div className="container mx-auto flex items-center justify-center gap-4 px-4">
            <TechCrunchLogo className="size-24 fill-white" />

            <h1 className="font-bold text-6xl text-white">TechCrunch</h1>
          </div>
        </div>
      )}
    </header>
  );
}
