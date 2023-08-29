/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images-ak.spotifycdn.com',
          port: '',
          pathname: '/image/**',
        },
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
      ],
    },
  }