/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.nba.com"]
  },
}
const withImages = require('next-images')

module.exports = nextConfig
module.exports = withImages
