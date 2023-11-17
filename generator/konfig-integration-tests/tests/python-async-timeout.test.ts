import { e2e } from "../util";
import { test } from "vitest";

test("python-async-timeout", async () => {
  await e2e(4015);
});