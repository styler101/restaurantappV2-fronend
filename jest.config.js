export default {
  // Diretório raiz
  // Foi adicionado dois caminhos no tsconfig tanto para a pasta src como a pasta de tests.
  modulePaths: ['<rootDir>/src'],
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/tests/**/*.{ts,tsx}',
    '!<rootDir>src/main.tsx',
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/node_modules',
    '<rootDir>/tests/e2e/cypress',
    '<rootDir>/src/services/apiservice.ts',
    `<rootDir>/node_modules/(?!axios)/`,
  ],
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/filetransformer.js',
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1',
    '.+\\.(svg|png|jpg)$': 'identity-obj-proxy',
    axios: 'axios/dist/node/axios.cjs',
  },
}
