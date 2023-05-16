const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer')
const redirects = require('./redirects')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    mdxRs: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'v5.airtableusercontent.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return redirects
  },
}

module.exports = withMDX(withContentlayer(nextConfig))
