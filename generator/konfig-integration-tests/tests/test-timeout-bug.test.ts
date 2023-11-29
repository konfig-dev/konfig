import { e2e } from "../util";
import { test } from "vitest";

test("test-timeout-bug", async () => {
  await e2e(4065);
});