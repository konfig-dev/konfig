import { e2e } from "../util";
import { test } from "vitest";

test("python-circular-reference", async () => {
  await e2e(4019);
});