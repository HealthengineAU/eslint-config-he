module.exports = {
    // babel-eslint allows us to include type-hints
    parser: 'babel-eslint',
    parserOptions: {
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
        experimentalObjectRestSpread: true,
        jsx: true,
      },
    },
  
    extends: [
      // Airbnb provides almost all our linting rules
      'airbnb',
  
      // Flowtype allows us to use flow type declarations
      'plugin:flowtype/recommended',
  
      // Prettier provides opinionated defaults for all code-layout choices
      'plugin:prettier/recommended',
    ],
  
    // Allows assuming the presence of globals provided by all these environments
    env: {
      es6: true,
      browser: true,
      node: true,
      mocha: true,
      jest: true,
    },
  
    plugins: [
        // Allows linting type-declarations
        'flowtype',
    ],
  
    rules: {
      // Downgrades these accessibility rules to warnings while we decide on policy
      "jsx-a11y/interactive-supports-focus": 1,
      "jsx-a11y/click-events-have-key-events": 1,
      "jsx-a11y/no-noninteractive-element-interactions": 1,
      "jsx-a11y/no-static-element-interactions": 1,
      "jsx-a11y/label-has-for": 1,
      "jsx-a11y/anchor-is-valid": 1,
      
      // Allows importing from files with explicit '.js' extensions
      'import/extensions': 0,
  
      // Allows default props to be set when destructuring
      'react/require-default-props': 0,
  
      // Allows using object/any as prop types
      'react/forbid-prop-types': 0,
  
      // Class-based components are still needed when using refs
      'react/prefer-stateless-function': 0,
  
      // Permits normal '.js' files to use inline JSX
      'react/jsx-filename-extension': 0,
  
      // Permits defining proptypes in flow instead
      'react/prop-types': 1,
  
      // Downgrades bad array keys to a warning
      'react/no-array-index-key': 1,
  
      // Downgrades unescaped HTML entity literals to a warning 
      'react/no-unescaped-entities': 1,
  
      // Prevent assigning to arguments, but allow modifying them.
      "no-param-reassign": [2, {props: false}],
  
      // Applies our code-layout customizations
      'prettier/prettier': [
        2,
        {
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
    },
  };
  