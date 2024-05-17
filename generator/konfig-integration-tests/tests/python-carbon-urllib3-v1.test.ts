import { e2e } from "../util";
import { test } from "vitest";

test("python-carbon-urllib3-v1", async () => {
  await e2e(4086);
});