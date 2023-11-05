import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-reserved-namespace-model", async () => {
  await e2e(4001);
});
