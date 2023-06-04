const withMDX = require('@next/mdx')()
const { withContentlayer } = require('next-contentlayer')
const { withPlausibleProxy } = require('next-plausible')
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
        hostname: '**.airtableusercontent.com',
        pathname: '**',
        // port: '',
      },
      {
        protocol: 'https',
        hostname: 'iljapanic-com.s3.eu-central-1.amazonaws.com',
        pathname: '**',
        // port: '',
      },
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        pathname: '**',
        // port: '',
      },
    ],
  },
  async redirects() {
    return redirects
  },
}

if (process.env.NODE_ENV === 'development') {
  console.log('info  - lanUrl:', `http://${require('address').ip()}:3000`)
}

module.exports = withPlausibleProxy()(withMDX(withContentlayer(nextConfig)))
