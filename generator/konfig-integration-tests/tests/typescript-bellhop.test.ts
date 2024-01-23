import { e2e } from "../util";
import { test } from "vitest";

test("typescript-bellhop", async () => {
  await e2e(4047);
});