import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-recursively-convert-to-models", async () => {
  await e2e(4003);
});
