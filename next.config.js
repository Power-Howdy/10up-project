/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
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
        {
          protocol: 'https',
          hostname: 'secure.gravatar.com',
          port: '',
          pathname: '/**/**',
        },
        
      ],
    },
}

module.exports = nextConfig
