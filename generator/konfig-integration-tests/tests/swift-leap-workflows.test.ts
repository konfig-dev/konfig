import { e2e } from "../util";
import { test } from "vitest";

test("swift-leap-workflows", async () => {
  await e2e(4120);
});