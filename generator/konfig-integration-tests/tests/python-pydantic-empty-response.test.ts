import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-empty-response", async () => {
  await e2e(4006);
});
