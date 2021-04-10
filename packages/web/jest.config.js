const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { name } = require('./package.json');
const { compilerOptions } = require('./tsconfig.json');

const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  name,
  displayName: name,
  collectCoverageFrom: [
    'src/(components|hooks|pages|services)/**/*.(ts|tsx)',
    '!src/hooks/index.tsx',
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>',
    }),
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
  },
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  projects: undefined,
};
