/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
