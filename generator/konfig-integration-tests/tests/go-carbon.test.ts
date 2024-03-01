import { e2e } from "../util";
import { test } from "vitest";

test("go-carbon", async () => {
  await e2e(4097);
});