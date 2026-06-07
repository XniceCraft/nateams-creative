import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typedRoutes: true,
  basePath: process.env.NEXT_PUBLIC_BASE_URL,
};

export default nextConfig;
