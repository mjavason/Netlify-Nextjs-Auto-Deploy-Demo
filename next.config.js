const { withNetlify } = require('@netlify/next')

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = withNetlify(nextConfig)
