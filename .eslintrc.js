module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Add your custom ESLint rules here
    'no-unused-vars': 'warn',
  },
};
