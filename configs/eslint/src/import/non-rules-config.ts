const extensions = ['.js', '.cjs', '.mjs'];
const reactExtensions = ['.jsx', ...extensions];
const typescriptExtensions = ['.ts', '.tsx', ...reactExtensions];

module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': extensions,
    'import/resolver': { node: { extensions } },
    'import/ignore': [
      'node_modules',
      '\\.(coffee|sass|scss|css|less|styl|hbs|svg|jpg|png|json|wasm)$',
    ],
  },
  overrides: [
    {
      files: ['**/*.jsx'],
      settings: {
        'import/extensions': reactExtensions,
        'import/resolver': { node: { extensions: reactExtensions } },
      },
    },
    {
      files: ['**/*.ts?(x)'],
      settings: {
        'import/extensions': typescriptExtensions,
        'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
        'import/external-module-folders': [
          'node_modules',
          'node_modules/@types',
        ],
        'import/resolver': {
          typescript: {
            project: [
              '*/tsconfig.json',
              '{packages,components,shareable,configs,library,lib}/*/tsconfig.json',
              'tsconfig.json',
            ],
          },
          node: { extensions: typescriptExtensions },
        },
      },
    },
  ],
};
