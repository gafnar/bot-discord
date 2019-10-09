module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
  ],
  plugins: [
    'import',
    'jest',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-restricted-syntax': 'off',
  },
};

