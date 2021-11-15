/** @see https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks */
module.exports = {
  rules: {
    // Checks rules of Hooks
    // https://reactjs.org/docs/hooks-rules.html
    'react-hooks/rules-of-hooks': 'error',

    // Checks effect dependencies
    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks#advanced-configuration
    'react-hooks/exhaustive-deps': 'warn',
  },
};
