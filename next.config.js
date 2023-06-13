/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {   
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.plugins.push(
         new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery",
         "window.jQuery": "jquery",
      }));

     return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '202.88.244.195',
                port: '',
                pathname: '/kt-web/**',
            },
        ],
    },
    
}

module.exports = nextConfig
