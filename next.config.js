/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["antd-mobile"],
  compress: true,
};

module.exports = nextConfig;
