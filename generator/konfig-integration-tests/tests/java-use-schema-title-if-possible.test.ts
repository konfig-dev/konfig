import { e2e } from "../util";
import { test } from "vitest";

test("java-use-schema-title-if-possible", async () => {
  await e2e(4044);
});