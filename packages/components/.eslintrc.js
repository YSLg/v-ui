module.exports =  {
  "root": true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/airbnb"
  ],
  "parserOptions": {
    "parser": "babel-eslint",
    "parser": "babel-eslint",
    "ecmaVersion": 2017,
      "ecmaFeatures": {
          "jsx": true
      }
  },
  "rules": {
    "guard-for-in": 0,
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": ["error", "never"],
    "no-console": 0
  }
}