/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["replicate.com", "replicate.delivery", "ipfs.io"],
  },
};

module.exports = nextConfig;
