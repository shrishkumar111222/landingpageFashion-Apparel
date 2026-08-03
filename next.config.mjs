/**
 * The site is published as a fully static bundle on GitHub Pages, which serves
 * project sites from `/<repo-name>/`. `BASE_PATH` is injected by the deploy
 * workflow so local development still runs from the root.
 */
const basePath = process.env.BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
