import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/services", destination: "/#services", permanent: false },
      { source: "/solutions", destination: "/#solutions", permanent: false },
      { source: "/projects", destination: "/#projects", permanent: false },
      { source: "/about", destination: "/#about", permanent: false },
      { source: "/process", destination: "/#process", permanent: false },
      { source: "/contact", destination: "/#contact", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        // pages/documents only — force revalidation so browsers stop serving stale HTML.
        // /_next/static is left untouched: Next.js already immutable-caches those by
        // default, and overriding it here breaks dev behavior (see build warning).
        source: "/((?!_next/static|_next/image).*)",
        headers: [
          { key: "Cache-Control", value: "no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
