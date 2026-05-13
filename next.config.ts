import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/analytics-portfolio",
  assetPrefix: "/analytics-portfolio/",
};

export default nextConfig;
