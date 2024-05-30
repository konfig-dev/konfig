import { e2e } from "../util";
import { test } from "vitest";

test("java-carbon", async () => {
  await e2e(4052);
});