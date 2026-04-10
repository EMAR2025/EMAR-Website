/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization for auto repair service images
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: '*.aribooking.utilitymobileapps.com',
        }
      ],
      formats: ['image/webp', 'image/avif'],
      minimumCacheTTL: 60,
      dangerouslyAllowSVG: false,
  },
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-leaflet'],
  },
  
  // Webpack configuration for GSAP
  webpack: (config, { dev, isServer }) => {
    // Disable source maps in production
    if (!dev) {
      config.devtool = false;
    }
    
    // Required for GSAP plugins
    config.resolve.alias = {
      ...config.resolve.alias,
      'gsap/SplitText': 'gsap/SplitText',
      'gsap/ScrollTrigger': 'gsap/ScrollTrigger',
    };
    
    // Handle GSAP licensing (if needed)
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // Headers for security (updated for auto repair business)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Changed to allow ARI booking iframe
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection', 
            value: '1; mode=block'
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdnjs.cloudflare.com *.aribooking.utilitymobileapps.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: via.placeholder.com images.unsplash.com; connect-src 'self' https:; font-src 'self'; frame-src 'self' *.aribooking.utilitymobileapps.com"
          }
        ],
      },
    ];
  },
  
  // Redirects for SEO (auto repair specific)
  async redirects() {
    return [
      {
        source: '/amenities',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/location',
        destination: '/service-areas',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;