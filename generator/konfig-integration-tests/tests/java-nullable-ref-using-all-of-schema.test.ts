import { e2e } from "../util";
import { test } from "vitest";

test("java-nullable-ref-using-all-of-schema", async () => {
  await e2e(4080);
});