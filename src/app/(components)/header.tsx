"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { CloseIcon } from "@/icons/close-icon";
import { TechCrunchLogo } from "@/icons/logo";
import { MenuIcon } from "@/icons/menu-icon";
import { SearchIcon } from "@/icons/search-icon";
import SpinnerIcon from "@/icons/spinner-icon";
import { cn } from "@/lib/utils";

const mainNavItems = [
  { label: "Latest", href: "/latest" },
  { label: "Startups", href: "/startups" },
  { label: "Apps", href: "/apps" },
  { label: "Venture", href: "/venture" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const [showLogo, setShowLogo] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100 && showLogo) {
        setShowLogo(false);
      } else if (currentScrollY <= 100 && !showLogo) {
        setShowLogo(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showLogo]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
    setSearchQuery("");
    setIsLoading(false);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      setIsLoading(true);
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }

    setTimeout(() => {
      setIsSearchOpen(false);
      setIsLoading(false);
    }, 500);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-tc-black shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <TechCrunchLogo className="size-8 fill-white md:hidden" />

              <Link
                href="/"
                className={cn(
                  "hidden font-bold text-white text-xl transition-opacity duration-200",
                  showLogo && isHomePage && "opacity-0",
                  (!showLogo || !isHomePage) &&
                    "mr-8 opacity-100 md:flex md:items-center md:gap-4",
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

            <div className="flex items-center space-x-4">
              {isSearchOpen ? (
                <div className="flex items-center space-x-2 border-gray-400 border-b">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
                    placeholder="Search..."
                    className="bg-transparent px-2 py-1 text-white outline-none"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={handleSearchSubmit}
                    className="text-gray-300 hover:text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <SpinnerIcon className="size-4" />
                    ) : (
                      <SearchIcon className="size-4" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleSearchToggle}
                    className="text-gray-300 hover:text-white"
                    disabled={isLoading}
                  >
                    <CloseIcon className="size-4" />
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSearchToggle}
                  className="text-gray-300 hover:text-white"
                >
                  <SearchIcon className="size-4" />
                </button>
              )}

              <button
                type="button"
                className="text-white md:hidden"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <MenuIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
