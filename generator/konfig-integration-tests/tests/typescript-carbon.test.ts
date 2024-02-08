import { e2e } from "../util";
import { test } from "vitest";

test("typescript-carbon", async () => {
  await e2e(4094);
});