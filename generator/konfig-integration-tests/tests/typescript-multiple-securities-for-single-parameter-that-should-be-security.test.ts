import { e2e } from "../util";
import { test } from "vitest";

test("typescript-multiple-securities-for-single-parameter-that-should-be-security", async () => {
  await e2e(4087);
});