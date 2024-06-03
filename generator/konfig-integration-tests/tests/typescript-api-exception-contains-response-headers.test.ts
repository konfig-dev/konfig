import { e2e } from "../util";
import { test } from "vitest";

test("typescript-api-exception-contains-response-headers", async () => {
  await e2e(4081);
});