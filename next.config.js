/** @type {import('next').NextConfig} */

const nextConfig = {
  // React Strict Mode
  reactStrictMode: true,
  
  // SwcMinify for faster builds
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: ['localhost', 'your-project.supabase.co', 'storage.googleapis.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ]
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
  
  // Output for Vercel
  output: 'standalone',
  
  // Typescript
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig