import { e2e } from "../util";
import { test } from "vitest";

test("typescript-client-state-with-configuration", async () => {
  await e2e(4068);
});