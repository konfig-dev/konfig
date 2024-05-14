import { e2e } from "../util";
import { test } from "vitest";

test("php-guzzle6-snaptrade", async () => {
  await e2e(4131);
});