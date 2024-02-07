import { e2e } from "../util";
import { test } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { expect } from "vitest";

test("typescript-no-relative-npm-link", async () => {
  await e2e(4093, {
    customAssertions: () => {
      const rawPackageJson = fs.readFileSync(
        path.join(
          path.dirname(__dirname),
          "sdks",
          "typescript-no-relative-npm-link",
          "typescript",
          "package.json"
        ),
        "utf-8"
      );
      const packageJson = JSON.parse(rawPackageJson);
      // ensure "repository" field is correct
      expect(packageJson.repository).toEqual({
        type: "git",
        url: "https://github.com/konfig-dev/konfig.git",
      });
      expect(packageJson.homepage).toEqual(
        "https://github.com/konfig-dev/konfig#readme"
      );
    },
  });
});
