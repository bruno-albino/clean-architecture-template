module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  ignore: [
    '**/*.test.ts',
    'tests',
  ],
  plugins: [
    ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "external": "./src/external",
        "adapters": "./src/adapters",
        "main": "./src/main",
        "usecases": "./src/usecases",
        "shared": "./src/shared",
        "entities": "./src/entities"
      }
    }]
  ]
}
