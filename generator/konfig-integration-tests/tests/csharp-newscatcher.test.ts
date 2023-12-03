import { e2e } from "../util";
import { test } from "vitest";

test("csharp-newscatcher", async () => {
  await e2e(4027);
});