import { e2e } from "../util";
import { test } from "vitest";

test("python-async-timeout-with-top-level-operation", async () => {
  await e2e(4017);
});