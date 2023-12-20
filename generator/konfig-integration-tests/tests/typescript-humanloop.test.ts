import { e2e } from "../util";
import { test } from "vitest";

test("typescript-humanloop", async () => {
  await e2e(4060);
});