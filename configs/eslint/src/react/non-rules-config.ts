module.exports = {
  plugins: ['react', 'react-hooks', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
      linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
      propWrapperFunctions: [
        'forbidExtraProps', // https://www.npmjs.com/package/airbnb-prop-types
        'exact', // https://www.npmjs.com/package/prop-types-exact
        'Object.freeze', // https://tc39.github.io/ecma262/#sec-object.freeze
      ],
    },
  },
};
