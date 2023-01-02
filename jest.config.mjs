export default {
  // Diretório raiz
  // Foi adicionado dois caminhos no tsconfig tanto para a pasta src como a pasta de tests.
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.{ts,tsx}',
    '<rootDir>/tests/**/**/*.{ts,tsx}',
    '<rootDir>/tests/**/**/**/*.{ts,tsx}',
    '!<rootDir>src/main.tsx',
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/tests/e2e/cypress',
  ],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1',
    '.+\\.(svg|png|jpg)$': 'identity-obj-proxy',
  },
}
