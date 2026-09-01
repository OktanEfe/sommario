import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: '/gizlilik', destination: '/gizlilik.html' },
      { source: '/kosullar', destination: '/kosullar.html' },
    ];
  },
};

export default nextConfig;