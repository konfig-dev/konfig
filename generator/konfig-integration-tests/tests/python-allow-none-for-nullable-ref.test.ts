import { e2e } from "../util";
import { expect, test } from "vitest";
import * as path from "path";
import * as fs from "fs";

test("python-allow-none-for-nullable-ref", async () => {
  await e2e(4078, {
    customAssertions() {
      const typedDictFile = fs.readFileSync(
        path.join(
          path.dirname(__dirname),
          "sdks",
          "python-allow-none-for-nullable-ref",
          "python",
          "python_allow_none_for_nullable_ref",
          "type",
          "problematic_schema.py"
        ),
        "utf-8"
      );

      console.log("typedDictFile", typedDictFile);

      // Ensure "This property is tested to ensure that we can pass a None value" exists in the file
      expect(typedDictFile).toContain(
        "This property is tested to ensure that we can pass a None value"
      );

      // Ensure "WARNING: This property is deprecated" exists in the file
      expect(typedDictFile).toContain("WARNING: This property is deprecated");
    },
  });
});
