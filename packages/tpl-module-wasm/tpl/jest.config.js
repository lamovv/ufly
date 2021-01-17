// https://kulshekhar.github.io/ts-jest/docs/options
module.exports = {
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: './tsconfig.test.json'
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  preset: 'ts-jest',
  testEnvironment: 'node', // 默认jsdom
};