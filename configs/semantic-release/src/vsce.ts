import type { Options } from 'semantic-release';
import { vscePlugins } from './plugins';

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
  plugins: vscePlugins,
};

module.exports = Configuration;
