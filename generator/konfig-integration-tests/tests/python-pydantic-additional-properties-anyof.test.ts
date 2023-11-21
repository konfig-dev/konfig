import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-additional-properties-anyof", async () => {
  await e2e(4035);
});