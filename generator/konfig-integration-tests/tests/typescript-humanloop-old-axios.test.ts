import { e2e } from "../util";
import { test } from "vitest";

test("typescript-humanloop-old-axios", async () => {
  await e2e(4049);
});
