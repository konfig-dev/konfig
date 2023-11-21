import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-nested-union-with-list-and-str", async () => {
  await e2e(4066);
});