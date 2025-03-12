import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  ignoreDuringBuilds: true,
},
  // swcMinify: false,  // Désactiver la minification Next.js
  // webpack: (config) => {
  //   config.optimization.minimize = false;  // Désactiver la minification Webpack
  //   return config;
  // },
  /* config options here */
};

export default nextConfig;
