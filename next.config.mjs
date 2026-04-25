/** @type {import('next').NextConfig} */
// `output: "export"` must only run for static hosting (e.g. GitHub Pages). If it is always on,
// `next dev` can throw ENOENT for app-build-manifest.json under .next/server.
const staticExport = process.env.STATIC_EXPORT === "1";
/** In dev, skip basePath so http://localhost:PORT/ is the app. Production/static export keeps /vaishvi-portfolio for GitHub Pages. */
const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  ...(!isDev
    ? { basePath: "/vaishvi-portfolio", assetPrefix: "/vaishvi-portfolio/" }
    : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
