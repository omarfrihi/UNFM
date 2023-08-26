/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["fr", "ar", "en"],
    defaultLocale: "fr",
    localeDetection: false,
  },
};

module.exports = nextConfig;
