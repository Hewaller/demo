module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    qimosdk: true,
    qimoChatClick: true,
    amap: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'vue/html-indent': 'off',
    'vue/max-attributes-per-line': 'off',
    'control-character-in-input-stream': 'off',
    'vue/html-self-closing': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/attributes-order': 'off',
    'vue/require-prop-types': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
}
