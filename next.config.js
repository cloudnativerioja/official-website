/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  assetPrefix: '',
  basePath: '',
  images: {
    unoptimized: true,
  },
  transpilePackages: ['@codesweetly/react-youtube-playlist'],
};

module.exports = nextConfig;
