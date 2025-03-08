module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    "\\.(png|jpg|jpeg|gif|svg)$": "<rootDir>/__mocks__/fileMock.ts"
  },
  transformIgnorePatterns: [
    "node_modules/(?!@react-native|react-native|@react-navigation)"
  ],
};
