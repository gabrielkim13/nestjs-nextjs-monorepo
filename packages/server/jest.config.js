const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { name } = require('./package.json');
const { compilerOptions } = require('./tsconfig.json');

const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  name,
  displayName: name,
  collectCoverageFrom: [
    '**/*.(controller|service|provider|guard|pipe|interceptor|filter).(t|j)s',
  ],
  coverageDirectory: 'coverage',
  preset: 'ts-jest',
  projects: undefined,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>',
  }),
  testEnvironment: 'node',
};
