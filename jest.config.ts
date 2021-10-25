export default {
  clearMocks: true,
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "shared/(.*)": "<rootDir>/src/shared/$1",
    "entities/(.*)": "<rootDir>/src/entities/$1",
    "main/(.*)": "<rootDir>/src/main/$1",
    "adapters/(.*)": "<rootDir>/src/adapters/$1",
    "external/(.*)": [
      "<rootDir>/src/external/$1",
      "<rootDir>/src/tests/doubles/external/$1"
    ],
    "usecases/(.*)": "<rootDir>/src/usecases/$1",
    "tests/(.*)": "<rootDir>/src/tests/$1",
  }
}
