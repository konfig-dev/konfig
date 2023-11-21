import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-schema-with-underscores-in-name", async () => {
  await e2e(4028);
});