/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    assetPrefix: process.env.NODE_ENV === 'production' ? 'https://takohyaki.vercel.app' : '',
  };
  
  module.exports = nextConfig;
  