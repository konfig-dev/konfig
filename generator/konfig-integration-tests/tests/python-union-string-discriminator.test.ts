import { e2e } from "../util";
import { test } from "vitest";

test("python-union-string-discriminator", async () => {
  await e2e(4050, {
    customServer: {
      routes: [
        {
          path: "/simple-endpoint",
          method: "get",
          response: {
            value: {
              type: "A",
              a: "a",
            },
          },
        },
      ],
    },
  });
});
