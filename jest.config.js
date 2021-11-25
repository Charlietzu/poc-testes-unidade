module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["./tests/unit/setup.ts"],
  collectCoverage: true,
  collectCoverageFrom: ["**/*.{js,vue,ts}", "!**/node_modules/**"],
};
