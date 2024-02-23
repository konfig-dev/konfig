import { e2e } from "../util";
import { test } from "vitest";

test("python-carbon", async () => {
  await e2e(4098);
});