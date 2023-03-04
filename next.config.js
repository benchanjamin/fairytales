/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // images: {
  //   formats: ['image/webp'],
  // },
  images: {
    images: {
      hostname: ['ik.imagekit.io'],
    },
  },
}

module.exports = nextConfig
