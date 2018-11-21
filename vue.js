module.exports = {
  extends: ['./base.js', 'plugin:vue/strongly-recommended'],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
  },
};
