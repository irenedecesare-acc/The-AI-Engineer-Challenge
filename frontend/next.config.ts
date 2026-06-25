import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Dev-only: proxy /api/* to the local FastAPI backend so `pnpm dev` can call
    // a same-origin /api/chat. In production the browser calls the API project
    // directly via NEXT_PUBLIC_BACKEND_URL (see API_BASE in app/page.tsx), so no
    // rewrite is needed — and returning one here would break the prod build.
    if (process.env.NODE_ENV !== "development") return [];
    const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";
    return [{ source: "/api/:path*", destination: `${backend}/api/:path*` }];
  },
};

export default nextConfig;
