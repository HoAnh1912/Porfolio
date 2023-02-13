/** @type {import('next').NextConfig} */
module.exports = {
  env: {},
  reactStrictMode: true,
  redirects: () => [],
  rewrites: () => [],
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "en",
    localeDetection: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};
