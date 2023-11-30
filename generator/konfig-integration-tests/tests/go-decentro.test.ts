import { e2e } from "../util";
import { test } from "vitest";

test("go-decentro", async () => {
  await e2e(4042);
});
