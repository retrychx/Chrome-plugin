/*
 * @Author: migor
 * @Date: 2021-11-25 20:59:59
 * @LastEditors: migor
 * @LastEditTime: 2021-11-25 21:39:39
 * @Description: file content
 */
module.exports = {
  root: true,
  globals: {
    chrome: true,
  },
  env: {
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    "generator-star-spacing": "off",
    "object-curly-spacing": "off",
    "no-var": "error",
    "semi": 0,
    "eol-last": "off",
    "no-tabs": "off",
    "indent": "off",
    "quote-props": 0,
    "no-mixed-spaces-and-tabs": "off",
    "no-trailing-spaces": "off",
    "arrow-parens": 0,
    "spaced-comment": "off",
    "space-before-function-paren": "off",
    "no-empty": "off",
    "no-else-return": "off",
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    "no-console": "off",
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
