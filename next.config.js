/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/vaishvi-portfolio',
    assetPrefix: '/vaishvi-portfolio/',
    images: { 
      unoptimized: true 
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // Disable strict mode temporarily
    reactStrictMode: false,
  }
  
  module.exports = nextConfig