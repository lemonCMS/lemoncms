let mappedModule;
switch (process.env.TEST_ENV) {
  case "cjs":
    mappedModule = "<rootDir>/cjs/lemoncms-forms.js";
    break;
  case "umd":
    mappedModule = "<rootDir>/umd/lemoncms-forms.js";
    break;
  default:
    mappedModule = "<rootDir>/modules/index.js";
}

module.exports = {
  testRunner: "jest-circus/runner",
  restoreMocks: true,
  globals: {
    __DEV__: true
  },
  moduleNameMapper: {
    "^forms": mappedModule
  },
  modulePaths: ["<rootDir>/node_modules"],
  setupFiles: ["raf/polyfill", "<rootDir>/enzyme.js"],
  testMatch: ["**/__tests__/**/*-test.js"],
  testURL: "http://localhost/"
};
