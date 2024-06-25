/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "lh3.googleusercontent.com",
      "images.pexels.com",
      "www.pexels.com",
      "assets.vercel.com",
    ],
  },
};

module.exports = nextConfig;
