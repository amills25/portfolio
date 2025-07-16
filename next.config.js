/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@mux/mux-video', '@mux/mux-player', '@mux/mux-player-react'],
  experimental: {
    esmExternals: 'loose'
  }
}

module.exports = nextConfig
