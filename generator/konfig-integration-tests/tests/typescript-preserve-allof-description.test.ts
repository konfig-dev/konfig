import { e2e } from "../util";
import { test, expect } from "vitest";
import * as path from "path";
import * as fs from "fs";

test("typescript-preserve-allof-description", async () => {
  await e2e(4100, {
    customAssertions() {
      const SDK_ROOT_PATH = path.join(
        path.dirname(__dirname),
        "sdks",
        "typescript-preserve-allof-description",
        "typescript"
      );
      const requestBody = fs.readFileSync(
        path.join(SDK_ROOT_PATH, "models", "request-body.ts"),
        "utf-8"
      );
      const responseChild = fs.readFileSync(
        path.join(SDK_ROOT_PATH, "models", "response-child.ts"),
        "utf-8"
      );
      const child = fs.readFileSync(
        path.join(SDK_ROOT_PATH, "models", "child.ts"),
        "utf-8"
      );
      const testFetchRequest = fs.readFileSync(
        path.join(SDK_ROOT_PATH, "models", "test-fetch-request.ts"),
        "utf-8"
      );
      const readme = fs.readFileSync(
        path.join(SDK_ROOT_PATH, "README.md"),
        "utf-8"
      );

      expect(requestBody).toContain(
        "Description of input Property in RequestBody schema"
      );
      expect(testFetchRequest).toContain(
        "Description of input property in RequestBody in Operation"
      );
      expect(responseChild).toContain(
        "Description of input Property in ResponseChild schema"
      );
      expect(child).toContain("Description of Child");
      expect(readme).toContain(
        "Description of input property in RequestBody in Operation"
      );
    },
  });
});
