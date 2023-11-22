import { e2e } from "../util";
import { test } from "vitest";

test("java-merge-anyof-strings", async () => {
  await e2e(4075);
});