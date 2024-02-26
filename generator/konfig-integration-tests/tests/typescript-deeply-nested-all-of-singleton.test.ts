import { e2e } from "../util";
import { test } from "vitest";

test("typescript-deeply-nested-all-of-singleton", async () => {
  await e2e(4062);
});