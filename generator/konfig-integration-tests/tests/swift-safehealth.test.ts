import { e2e } from "../util";
import { test } from "vitest";

test("swift-safehealth", async () => {
  await e2e(4058);
});