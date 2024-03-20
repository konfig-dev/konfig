import { e2e } from "../util";
import { test } from "vitest";

test("python-ignore-pydantic-protected-namespaces", async () => {
  await e2e(4110);
});