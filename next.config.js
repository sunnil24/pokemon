/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
  },
  assetPrefix: "/pokemon",
  trailingSlash: true,
};

module.exports = nextConfig;
