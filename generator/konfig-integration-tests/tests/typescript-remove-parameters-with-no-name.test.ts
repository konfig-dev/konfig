import { e2e } from "../util";
import { test } from "vitest";

test("typescript-remove-parameters-with-no-name", async () => {
  await e2e(4076);
});