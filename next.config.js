/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
