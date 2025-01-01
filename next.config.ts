import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Ignora erros do ESLint no build
  },
  typescript: {
    ignoreBuildErrors: true, // Ignora erros do TypeScript no build
  },
};

export default nextConfig;
