/** @type {import('next').NextConfig} */

// `output: "export"` must only run for static hosting (GitHub Pages).
// Running it in dev mode causes ENOENT errors for app-build-manifest.json.
//
// Set STATIC_EXPORT=1 when building for GitHub Pages (see package.json build:static).
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  // Static HTML export — only for GitHub Pages deployment
  ...(isStaticExport ? { output: "export" } : {}),

  // Sub-path required for GitHub Pages (repo name = /vaishvi-portfolio).
  // Must NOT be set in dev/local or assets load from wrong path.
  ...(isStaticExport
    ? {
        basePath: "/vaishvi-portfolio",
        assetPrefix: "/vaishvi-portfolio/",
      }
    : {}),

  images: {
    // Required for static export — disables the Next.js image optimisation API
    unoptimized: true,
  },
};

export default nextConfig;
