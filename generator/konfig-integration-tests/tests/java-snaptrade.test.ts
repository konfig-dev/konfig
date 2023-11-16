import { e2e } from "../util";
import { test } from "vitest";

test("java-snaptrade", async () => {
  await e2e(4026);
});
