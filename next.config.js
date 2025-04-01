/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure Next.js knows where to find pages and exclude test files
  pageExtensions: ['tsx', 'ts'].filter((ext) => !ext.includes('test')),
  // Excluir arquivos de teste
  webpack: (config, { dev, isServer }) => {
    // Excluir arquivos de teste do build
    if (!dev && isServer) {
      config.externals = [...config.externals, 'react-dom/test-utils'];
    }

    // Adicionar regra para ignorar arquivos de teste
    config.module.rules.push({
      test: /\.test\.(js|jsx|ts|tsx)$/,
      loader: 'ignore-loader',
    });

    return config;
  },
  // Desativar ESLint durante a compilação
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Configuração experimental simplificada
  experimental: {
    // Usando apenas configurações suportadas
    esmExternals: true,
  },

  // Movido de experimental.serverComponentsExternalPackages para cá
  serverExternalPackages: [],
};

module.exports = nextConfig;
