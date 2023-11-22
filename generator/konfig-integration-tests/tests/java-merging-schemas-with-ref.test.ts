import { e2e } from "../util";
import { test } from "vitest";

test("java-merging-schemas-with-ref", async () => {
  await e2e(4036);
});