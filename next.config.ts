import type { NextConfig } from 'next';

// GitHub Pages serves this repository from /my-portfolio/.
// Local development stays at / for a convenient preview.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
