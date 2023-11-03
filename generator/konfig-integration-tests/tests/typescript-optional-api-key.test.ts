import { e2e } from "../util";
import * as fs from "fs";
import * as path from "path";

const customAssertions = () => {
  console.log("Ensuring that configuration apiKey field is optional...");
  const configuration = fs.readFileSync(
    path.join(__dirname, "..", "sdks", "typescript-optional-api-key", "typescript", "configuration.ts"),
    "utf-8"
  );
  expect(configuration).toContain("apiKey?:");
};

test("typescript-optional-api-key", async () => {
  await e2e(4004, customAssertions);
});
