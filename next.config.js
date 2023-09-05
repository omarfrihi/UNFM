const withTM = require("next-transpile-modules")(["timelinejs-react"]);
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [process.env.NEXT_PUBLIC_STRAPI_IMAGES_DOMAIN],
  },
  i18n: {
    locales: ["fr", "ar", "en"],
    defaultLocale: "fr",
    localeDetection: false,
  },
};

module.exports = withTM(nextConfig);
