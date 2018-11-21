module.exports = {
  extends: ['./base.js', 'plugin:jest/recommended'],
  plugins: ['jest'],
  env: {
    jest: true,
  },
  rules: {
    'jest/prefer-to-be-null': 'error',
    'jest/prefer-to-be-undefined': 'error',
  },
};
