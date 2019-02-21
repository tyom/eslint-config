module.exports = {
  extends: ['./base.js', 'plugin:vue/strongly-recommended'],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': ['error', { singleline: 2 }],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
