import { e2e } from "../util";
import { test } from "vitest";

test("splitit/php-splitit", async () => {
  await e2e(4025);
});
