/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BUILD_DATE: new Date().toISOString(),
  },
  async redirects() {
    return [
      { source: '/for-biologists', destination: '/mining-101', permanent: true },
      { source: '/for-biologists/:path*', destination: '/mining-101/:path*', permanent: true },
      { source: '/for-miners', destination: '/biology-101', permanent: true },
      { source: '/for-miners/:path*', destination: '/biology-101/:path*', permanent: true },
      { source: '/technology-evaluation', destination: '/technology-assessment', permanent: true },
      { source: '/technology-evaluation/:path*', destination: '/technology-assessment/:path*', permanent: true },
      { source: '/research', destination: '/frontier-challenges', permanent: true },
      { source: '/research/:path*', destination: '/frontier-challenges/:path*', permanent: true },
      { source: '/citations', destination: '/references', permanent: true },
      { source: '/citations/:path*', destination: '/references/:path*', permanent: true },
    ];
  },
}

module.exports = nextConfig
