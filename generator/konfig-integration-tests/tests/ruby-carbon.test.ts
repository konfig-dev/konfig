import { e2e } from "../util";
import { test } from "vitest";

test("ruby-carbon", async () => {
  await e2e(4073);
});
