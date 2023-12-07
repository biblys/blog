/** @type {import('next').NextConfig} */
const nextConfig = {
   i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
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
