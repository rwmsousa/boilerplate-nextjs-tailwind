module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    'dist/**/*',
    'coverage/**/*',
    '.next/**/*',
    '*.config.js',
    'babel.config.js',
    'jest.setup.js',
    'postcss.config.js',
    'tailwind.config.js',
    'commitlint.config.js',
    'next.config.js',
    'handler.js',
    'server-handler.js',
    // Add test files if you want to ignore them temporarily
    // 'src/tests/**/*',
  ],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
      parser: 'espree',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
