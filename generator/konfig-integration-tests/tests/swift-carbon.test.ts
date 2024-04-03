import { e2e } from "../util";
import { test } from "vitest";

test("swift-carbon", async () => {
  await e2e(4060);
});