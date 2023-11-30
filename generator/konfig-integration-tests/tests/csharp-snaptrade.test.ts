import { e2e } from "../util";
import { test } from "vitest";

test("csharp-snaptrade", async () => {
  await e2e(4032);
});