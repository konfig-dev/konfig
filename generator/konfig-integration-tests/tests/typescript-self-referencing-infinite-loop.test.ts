import { e2e } from "../util";
import { test } from "vitest";

test("typescript-self-referencing-infinite-loop", async () => {
  await e2e(4018);
});