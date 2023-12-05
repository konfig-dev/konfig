import { e2e } from "../util";
import { test } from "vitest";

test("go-newscatcher", async () => {
  await e2e(4077);
});