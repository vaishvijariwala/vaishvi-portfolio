/** @type {import('next').NextConfig} */
// `output: "export"` must only run for static hosting (e.g. GitHub Pages). If it is always on,
// `next dev` can throw ENOENT for app-build-manifest.json under .next/server.
const staticExport = process.env.STATIC_EXPORT === "1";
/**
 * Only GitHub Pages static export uses /vaishvi-portfolio. Plain `next dev` and `next start`
 * must stay at `/` or scripts load from /vaishvi-portfolio/_next/... and ChunkLoadError on localhost.
 */
const ghPages = staticExport;

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  ...(ghPages
    ? { basePath: "/vaishvi-portfolio", assetPrefix: "/vaishvi-portfolio/" }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
