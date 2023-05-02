const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["cdn.shopify.com"],
  },

  i18n: {
    locales: ["en", "de"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
