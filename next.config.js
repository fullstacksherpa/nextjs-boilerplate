/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['i.pravatar.cc'],
    },
    i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'en',
      // localeDetection: false,
    },
  };
  
  module.exports = nextConfig;

  //telling nextjs from which source can we pull image from/