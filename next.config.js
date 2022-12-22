/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: (() => {
    const compilerConfig =
      process.env.NODE_ENV === "production"
        ? {
            reactRemoveProperties: {
              properties: ["~data-testid$"],
            },
          }
        : {};
    return compilerConfig;
  })(),
  swcMinify: true,
};

module.exports = nextConfig;
