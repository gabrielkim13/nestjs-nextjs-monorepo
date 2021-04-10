const { pathsToModuleNameMapper } = require('ts-jest/utils');

const config = require('../jest.config');
const { compilerOptions } = require('../tsconfig.json');

module.exports = {
  ...config,
  testRegex: '.e2e-spec.ts$',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/..',
  }),
};
