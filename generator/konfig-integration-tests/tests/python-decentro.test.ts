import { e2e } from "../util";
import { test } from "vitest";

test("python-decentro", async () => {
  await e2e(4029);
});