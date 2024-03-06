import { e2e } from "../util";
import { test } from "vitest";

test("python-nested-array-items-ref-in-any-of", async () => {
  await e2e(4046);
});