import type { NextConfig } from "next";

// User-site GitHub Pages (parishijainn.github.io) is served from the root domain.
// Keep basePath empty so routes/assets work at https://parishijainn.github.io/
const basePath = "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    // Use in client components to prefix public asset URLs.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
