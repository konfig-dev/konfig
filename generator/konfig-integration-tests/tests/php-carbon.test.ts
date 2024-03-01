import { e2e } from "../util";
import { test } from "vitest";

test("php-carbon", async () => {
  await e2e(4067);
});