import { e2e } from "../util";
import { test } from "vitest";

test("python-newscatcher", async () => {
  await e2e(4040);
});