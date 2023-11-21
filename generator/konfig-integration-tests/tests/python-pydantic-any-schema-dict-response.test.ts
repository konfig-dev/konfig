import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-any-schema-dict-response", async () => {
  await e2e(4055);
});
