import type { NextConfig } from "next";

const repoName = "your-repo-name"; // omit if using a yourusername.github.io repo

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : "",
};

export default nextConfig;
