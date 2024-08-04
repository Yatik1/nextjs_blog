/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/api/(.*)",
            headers: [
              {
                key: "Cache-Control",
                value: "no-store, no-cache, must-revalidate, proxy-revalidate",
              },
              {
                key: "Pragma",
                value: "no-cache",
              },
              {
                key: "Expires",
                value: "0",
              },
            ],
          },
        ];
      },
      images: {
        domains: ['res.cloudinary.com'],
      },
};

export default nextConfig;
