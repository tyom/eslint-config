module.exports = {
  extends: ['./base.js', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, trailingComma: 'all' }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
