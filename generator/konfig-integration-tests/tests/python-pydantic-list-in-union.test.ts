import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-list-in-union", async () => {
  await e2e(4005);
});
