import { e2e } from "../util";
import { test } from "vitest";

test("python-allow-none-for-nullable-ref", async () => {
  await e2e(4078);
});