
const nextConfig = {
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
