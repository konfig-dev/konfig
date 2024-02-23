import { e2e } from "../util";
import { test } from "vitest";

test("ruby-snaptrade", async () => {
  await e2e(4072);
});