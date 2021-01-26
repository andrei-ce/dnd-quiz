/* eslint-disable object-curly-newline */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-quotes': ['error', 'prefer-single'],
    'arrow-body-style': ['error', 'as-needed'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'no-nested-ternary': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'react/destructuring-assignment': 0,
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: 'always',
        ObjectPattern: { multiline: false },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
  },
};
