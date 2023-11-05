import { e2e } from "../util";
import { test } from "vitest";

test("leap-workflows-sdks", async () => {
  await e2e(4010);
});
