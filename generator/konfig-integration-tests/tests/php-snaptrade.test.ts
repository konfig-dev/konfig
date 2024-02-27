import { e2e } from "../util";
import { test } from "vitest";

test("php-snaptrade", async () => {
  await e2e(4070);
});