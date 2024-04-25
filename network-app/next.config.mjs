/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.neoito.com', 
          },
          {
            protocol: 'https',
            hostname: 'img.clerk.com', 
          },
          
        ],
      },
};

export default nextConfig;
