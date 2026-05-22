import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath: "/gisella",
  assetPrefix: "/gisella/",
};

export default nextConfig;
