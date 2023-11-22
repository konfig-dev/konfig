import { e2e } from "../util";
import { test } from "vitest";

test("java-merge-anyof-object-schemas", async () => {
  await e2e(4034, {
    customServer: {
      routes: [
        {
          path: "/merge-different",
          method: "get",
          response: {
            a: 2,
          },
        },
        {
          path: "/merge-same",
          method: "get",
          response: {},
        },
        {
          path: "/simple-endpoint",
          method: "get",
          response: {
            c: "hello world",
          },
        },
      ],
    },
  });
});
