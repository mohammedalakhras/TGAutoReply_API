const {webpack} = require("next/dist/compiled/webpack/webpack");

/** @type {import ('next').NextConfig} */
const nextConfig = {
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.resolve = {
        ...config.resolve,
        fallback: {
          net: false,
          dns: false,
          tls: false,
          assert: false,
          path: false,
          fs: false,
          events: false,
          process: false
        }
      };
    }
    config.plugins.push(new webpack.NormalModuleReplacementPlugin(/node:/, (resource) => {
      resource.request = resource.request.replace(/^node:/, "");
    }))
    return config;
  },
  experimental: {appDir: true}
};

module.exports = nextConfig;
