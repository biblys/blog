/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.biblys.fr',
        port: '',
        pathname: '/images/post/**',
      },
    ],
  },
}

module.exports = nextConfig
