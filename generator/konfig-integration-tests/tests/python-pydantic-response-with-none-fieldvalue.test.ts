import { e2e } from "../util";
import { test } from "vitest";

test("python-pydantic-response-with-none-fieldvalue", async () => {
  await e2e(4136, {
    customServer: {
      routes: [
        {
          path: "/test",
          method: "get",
          response: {
            date: "2024-03-06",
            value: "string",
            missingDate: null,
            missingValue: null,
          },
        },
      ],
    },
  });
});
