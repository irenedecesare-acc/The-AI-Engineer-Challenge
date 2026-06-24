import type { NextConfig } from "next";

// In dev, proxy /api/* to the FastAPI backend so the browser can call a
// same-origin /api/chat (no CORS, no hardcoded host in the client).
// Override with NEXT_PUBLIC_BACKEND_URL if the backend runs elsewhere.
const backend = process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backend}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
