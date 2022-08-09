const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: !isProd,
  },
});

module.exports = nextConfig;
