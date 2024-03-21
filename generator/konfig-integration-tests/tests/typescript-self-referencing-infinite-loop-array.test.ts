import { e2e } from "../util";
import { test } from "vitest";

test("typescript-self-referencing-infinite-loop-array", async () => {
  await e2e(4113);
});