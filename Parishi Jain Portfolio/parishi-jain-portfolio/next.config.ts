import type { NextConfig } from "next";

const repoName = "Parishi_Jain_Personal_Website";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isGitHubPages ? `/${repoName}` : "";

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
