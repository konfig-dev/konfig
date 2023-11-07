import { e2e } from "../util";
import { test } from "vitest";

test("leap-workflows/python-leap-workflows", async () => {
  await e2e(4020);
});
