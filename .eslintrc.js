module.exports = {
  extends: [
    // '@mate-academy/eslint-config-react-typescript',
    // 'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,
    // 'jsx-runtime': {
    //   plugins: [
    //     'react'
    //   ],
    //   parserOptions: {
    //     ecmaFeatures: {
    //       jsx: true
    //     },
    //     jsxPragma: null // for @typescript/eslint-parser
    //   },
    //   rules: {
    //     'react/react-in-jsx-scope': 0,
    //     'react/jsx-uses-react': 0
    //   }
    // },

    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};
