/** @type {import('next').NextConfig} */
const nextConfig = {
  target: "serverless",
  reactStrictMode: true,
  assetPrefix: "https://ista1024.github.io/",
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
