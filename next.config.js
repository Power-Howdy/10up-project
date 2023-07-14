/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/**/**',
          },
          {
            protocol: 'https',
            hostname: '10up.com',
            port: '',
            pathname: '/**/**',
          },
        ],
      },
}

module.exports = nextConfig
