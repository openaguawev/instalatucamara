import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "http",
        hostname: "http2.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "*.mlstatic.com",
      },
      {
        protocol: "https",
        hostname: "mlstatic.com",
      },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/camaras-seguridad",
        destination: "/camaras",
        permanent: true,
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
