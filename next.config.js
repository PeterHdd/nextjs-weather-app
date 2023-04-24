/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  images: {
    domains: ["openweathermap.org", "stackoverflow.com"],
  },
};

module.exports = nextConfig;
