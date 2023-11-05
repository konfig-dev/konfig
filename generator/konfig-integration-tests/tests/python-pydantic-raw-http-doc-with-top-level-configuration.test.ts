import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-raw-http-doc-with-top-level-configuration", async () => {
  await e2e(4007);
});
