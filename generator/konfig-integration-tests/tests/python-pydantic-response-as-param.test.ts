import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-response-as-param", async () => {
  await e2e(4039);
});