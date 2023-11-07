import { e2e } from "../util";
import { test } from "vitest";

test("splitit/python-splitit", async () => {
  await e2e(4021);
});
