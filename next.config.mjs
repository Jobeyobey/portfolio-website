/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: "/portfolio-website",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
