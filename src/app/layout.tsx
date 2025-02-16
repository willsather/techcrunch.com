import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { VercelToolbar } from "@vercel/toolbar/next";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/header";

import "./globals.css";

/*
 * DEMO: Metadata
 *
 * Easily construct site/page metadata using Next.js
 * exported objects.
 *
 * These exported objects generates the necessary `meta`
 * head elements, easily specifying OpenGraph properties, and
 * even create templates for the entire site.
 */
export const metadata: Metadata = {
  title: {
    template: "TechCrunch | %s",
    default: "TechCrunch",
  },
  description:
    "TechCrunch | Reporting on the business of technology, startups, venture capital funding, and Silicon Valley",
  applicationName: "TechCrunch",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "16x16 32x32 64x64",
      },
      {
        url: "/favicons/favicon-16.png",
        sizes: "16x16",
      },
      {
        url: "/favicons/favicon-32.png",
        sizes: "32x32",
      },
      {
        url: "/favicons/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        url: "/favicons/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />

        {/*DEMO: Vercel Analytics/Speed Insights SDK Packages for reporting*/}
        <Analytics />
        <SpeedInsights />

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
