import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techcrunch.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
