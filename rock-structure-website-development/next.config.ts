import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rockstructure.construction",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
