import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "image.pollinations.ai",
        protocol: "https",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

export default nextConfig;
