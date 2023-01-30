/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/profile-setup",
      },
    ];
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
    ],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
