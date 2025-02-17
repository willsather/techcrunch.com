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
      {/* Top Navigation - Always visible */}
      <div className="bg-tc-black shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between gap-4">
            {/* Left side with logo (visible when scrolled or not homepage) */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <TechCrunchLogo className="size-8 fill-white md:hidden" />
              </Link>

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

              {/* Desktop Navigation Links */}
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

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isMobileMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={toggleMobileMenu}
        onKeyDown={toggleMobileMenu}
        onKeyUp={toggleMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Panel */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-[300px] transform bg-tc-black transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-14 items-center justify-between border-white/10 border-b px-4">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={toggleMobileMenu}
          >
            <TechCrunchLogo className="size-8 fill-white" />
          </Link>
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <CloseIcon className="size-5" />
          </button>
        </div>

        <nav className="p-4">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block rounded-lg px-4 py-2 font-bold text-gray-300 text-lg transition-colors hover:bg-white/10 hover:text-white"
                onClick={toggleMobileMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
