import { sync as readPackageSync } from 'read-pkg';
import type { Options } from 'semantic-release';

import plugins from './plugins';

const Monorepo: Options = {
  tagFormat: `${readPackageSync().name}@<%= version %>`,
  branches: [
    'main',
    'next',
    {
      name: 'beta',
      prerelease: true,
    },
    {
      name: 'alpha',
      prerelease: true,
    },
  ],
  plugins,
};

module.exports = Monorepo;
