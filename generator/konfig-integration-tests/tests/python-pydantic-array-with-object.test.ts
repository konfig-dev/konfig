import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-array-with-object", async () => {
  await e2e(4095);
});
