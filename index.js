module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 7,
      "sourceType": "module",
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      }
    },
    "extends": [
      "airbnb",
      "prettier"
    ],
    "env": {
      "es6": true,
      "browser": true,
      "node": true,
      "mocha": true,
      "jest": true
    },
    "plugins": [
      "import",
      "react",
      "babel",
      "prettier"
    ],
    "rules": {
      "react/require-default-props": 0,
      "react/forbid-prop-types": 0,
      "react/prefer-stateless-function": 0,
      "react/jsx-filename-extension": 0,
      "func-names": 0,
      "no-else-return": 0,
      "one-var": 0,
      "import/first": 1,
      "react/prop-types": 1,
      "no-param-reassign": [
        2,
        {
          "props": false
        }
      ],
      "prettier/prettier": "error"
    }
  }