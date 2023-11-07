import { e2e } from "../util";
import { test } from "vitest";

test("splitit/csharp-splitit", async () => {
  await e2e(4008);
});
