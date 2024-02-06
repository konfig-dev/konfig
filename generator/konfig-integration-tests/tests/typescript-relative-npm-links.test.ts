import { e2e } from "../util";
import { test } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { expect } from "vitest";

test("typescript-relative-npm-links", async () => {
  await e2e(4030, {
    customAssertions: () => {
      const rawPackageJson = fs.readFileSync(
        path.join(
          path.dirname(__dirname),
          "sdks",
          "typescript-relative-npm-links",
          "typescript",
          "package.json"
        ),
        "utf-8"
      );
      const packageJson = JSON.parse(rawPackageJson);

      // ensure "repository" field has object with:
      // "type": "git"
      // "url": "https://github.com/konfig-dev/konfig"
      // "directory": "typescript"
      expect(packageJson.repository).toEqual({
        type: "git",
        url: "https://github.com/konfig-dev/konfig",
        directory: "typescript",
      });
    },
  });
});
