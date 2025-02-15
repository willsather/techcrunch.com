import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Footer from "@/app/(components)/footer";
import Header from "@/app/(components)/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "TechCrunch",
  description:
    "TechCrunch | Reporting on the business of technology, startups, venture capital funding, and Silicon Valley",
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
        <Analytics />
      </body>
    </html>
  );
}
