// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



import withPWA from 'next-pwa';

const nextConfig = {
  // Ajoutez d'autres configurations Next.js ici
};

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  ...nextConfig,
});
