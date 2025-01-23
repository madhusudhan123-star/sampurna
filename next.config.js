
/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Add this to help with hydration
    reactStrictMode: true
};

module.exports = nextConfig;