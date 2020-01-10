module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'prettier/react',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "prettier/prettier": ["error"],
    'react/jsx-filename-extension': [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    '@typescript-eslint/explicit-function-return-type': "off",
    'react/prefer-stateless-function': 'off',
    'no-plusplus': 'off',
    'prefer-destructuring': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  },
};
