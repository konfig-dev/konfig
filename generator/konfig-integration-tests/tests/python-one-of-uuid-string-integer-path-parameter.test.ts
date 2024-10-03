import { e2e } from "../util";
import { test } from "vitest";

test("python-one-of-uuid-string-integer-path-parameter", async () => {
  await e2e(4156);
});