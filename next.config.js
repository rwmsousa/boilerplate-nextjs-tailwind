/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configuração para permitir API routes
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
    ];
  },
  // Ensure Next.js knows where to find pages and exclude test files
  pageExtensions: ["tsx", "ts"].filter((ext) => !ext.includes("test")),
  // Excluir arquivos de teste
  webpack: (config, { dev, isServer }) => {
    // Excluir arquivos de teste do build
    if (!dev && isServer) {
      config.externals = [...config.externals, "react-dom/test-utils"];
    }

    // Adicionar regra para ignorar arquivos de teste
    config.module.rules.push({
      test: /\.test\.(js|jsx|ts|tsx)$/,
      loader: "ignore-loader",
    });

    return config;
  },
  // Desativar ESLint durante a compilação
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Add your Babel configuration here if absolutely necessary
  experimental: {
    // This enables SWC compiler while still allowing some Babel customization
    forceSwcTransforms: true,
  },

  // Configuração para serverless
  output: "standalone",
};

module.exports = nextConfig;
