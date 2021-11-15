import readPkgUp from 'read-pkg-up';

const file = readPkgUp.sync();
const allDeps = Object.keys({
  ...file?.packageJson.dependencies,
  ...file?.packageJson.devDependencies,
});

const testingLibrary = [
  '@testing-library/dom',
  '@testing-library/react',
  '@testing-library/angular',
  '@testing-library/vue',
];

const hasNextJS = allDeps.includes('next');
const hasPrettier = allDeps.includes('prettier');
const hasTestingLibrary = testingLibrary.some((dependency) =>
  allDeps.includes(dependency)
);

export { hasNextJS, hasPrettier, hasTestingLibrary };
