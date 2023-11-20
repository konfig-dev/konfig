import { e2e } from "../util";
import { test } from "vitest";

test("python-invalid-response", async () => {
  await e2e(4027, {
    customServer: {
      routes: [
        {
          path: "/invalid-scalar",
          method: "get",
          response: {
            str: 2,
          },
        },
        {
          path: "/invalid-array",
          method: "get",
          response: {
            array: {
              hello: "world",
            },
          },
        },
        {
          path: "/invalid-object",
          method: "get",
          response: {
            object: [
              {
                hello: "world",
              },
            ],
          },
        },
      ],
    },
  });
});
