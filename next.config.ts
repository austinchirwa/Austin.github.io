import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "10.241.106.92",
    "127.0.0.1",
  ],
};

export default nextConfig;
