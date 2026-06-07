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
    // Custom loader adds the basePath prefix to every image src.
    // Required because Next.js 15 with output:"export" does NOT automatically
    // prepend basePath to <Image> src values when using unoptimized:true.
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;
