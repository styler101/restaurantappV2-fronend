/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  // diretórios
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/test.{ts,tsx}',
    '<rootDir>/src/**/spec.{ts,tsx}',

    '!**/*.d.ts',
  ],

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
