/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vaishvi-portfolio',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
}

module.exports = nextConfig