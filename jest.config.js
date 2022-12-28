/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // diretórios

  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  clearMocks: true,
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,

  coverageDirectory: 'coverage',

  coverageProvider: 'v8',

  testEnvironment: 'jsdom',
}
