import { e2e } from "../util";
import { test } from "vitest";

test("python-circular-reference-2", async () => {
  await e2e(4090);
});