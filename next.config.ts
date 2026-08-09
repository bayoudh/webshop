import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mages.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
