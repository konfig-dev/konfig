import { e2e } from "../util";
import { test } from "vitest";

test("csharp-splitit", async () => {
  await e2e(4008);
});