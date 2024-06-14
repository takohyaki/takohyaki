const nextConfig = {
    reactStrictMode: true,
    images: {
      loader: 'akamai',
      path: '',
    },
    basePath: '',
    assetPrefix: './',
    trailingSlash: true,
    output: 'export', // This is the new configuration for static export
  };
  
  export default nextConfig;
  