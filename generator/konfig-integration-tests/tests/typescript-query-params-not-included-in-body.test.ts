import { e2e } from "../util";
import { test } from "vitest";

test("typescript-query-params-not-included-in-body", async () => {
  await e2e(4053, {
    customServer: {
      routes: [
        {
          path: "/test",
          method: "post",
          response: "echo",
        },
      ],
    },
  });
});
