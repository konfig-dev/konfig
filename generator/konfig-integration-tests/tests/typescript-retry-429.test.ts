import { e2e } from "../util";
import { test } from "vitest";

test("typescript-retry-429", async () => {
  await e2e(4128, { 
    customServer: {
      routes: [
        {
          path: "/simple-endpoint",
          method: "get",
          response: "retry"
        }
      ]
    }
  })
});