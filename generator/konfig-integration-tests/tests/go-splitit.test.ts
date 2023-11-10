import { e2e } from "../util";
import { test } from "vitest";

test("splitit/go-splitit", async () => {
  await e2e(4024);
});
