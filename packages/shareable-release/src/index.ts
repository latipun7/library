import type { Options } from 'semantic-release';

import plugins from './plugins';

const Configuration: Options = {
  branches: [
    '+([0-9])?(.{+([0-9]),x}).x',
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

module.exports = Configuration;
