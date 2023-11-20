import { e2e } from "../util";
import { test } from "vitest";

test("python-invalid-response", async () => {
  await e2e(4027, {
    customServer: {
      routes: [
        {
          path: "/invalid-scalar",
          method: "GET",
          response: {
            str: 2,
          },
        },
      ],
    },
  });
});
