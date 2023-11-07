import type { Config } from "@jest/types";
const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["dist/"],
  testTimeout: 60 * 1000,
  transform: {
    "^.+\\.ts?$": ["ts-jest", { tsconfig: "./tsconfig.test.json" }],
  },
};
export default config;
