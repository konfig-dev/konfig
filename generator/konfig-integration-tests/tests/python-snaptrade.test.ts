import { e2e } from "../util";
import { test } from "vitest";

test("python-snaptrade", async () => {
  await e2e(4064);
});