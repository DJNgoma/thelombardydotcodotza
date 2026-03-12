import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1", "192.168.68.59"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
