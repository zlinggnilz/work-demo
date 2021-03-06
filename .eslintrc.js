module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  globals: {
    APP_TYPE: true,
    page: true,
  },
  plugins: ['react-hooks', 'react'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-uses-react': [1],
    'import/extensions': [0],
    'import/prefer-default-export': [0],
    'arrow-parens': ['error', 'as-needed'],
    'no-plusplus': [0],
    'react/require-default-props': [0],
    'react/destructuring-assignment': [0],
    'react/sort-comp': [0],
    'max-len': 0,
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'linebreak-style': [0, 'error', 'windows'],
    'consistent-return': [0],
    'no-nested-ternary': [0],
    'no-unused-vars': [1],
    'prefer-promise-reject-errors': [0],
    'react/no-array-index-key': [0],
    'no-param-reassign': [1],
    eqeqeq: [1],
    'prefer-destructuring': [1],
    'jsx-a11y/alt-text': [1],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    polyfills: ['fetch', 'promises', 'url'],
  },
};
