import { e2e } from "../util";
import { test } from "vitest";

test("swift-snaptrade", async () => {
  await e2e(4082);
});