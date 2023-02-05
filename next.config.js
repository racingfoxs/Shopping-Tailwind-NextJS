/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    domains: ['source.unsplash.com']
  }
};

module.exports = nextConfig;
