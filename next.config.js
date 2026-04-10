/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.devtool = false;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      'gsap/SplitText': 'gsap/SplitText',
      'gsap/ScrollTrigger': 'gsap/ScrollTrigger',
    };
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;