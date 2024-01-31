import { e2e } from "../util";
import { test } from "vitest";

test("splitit/python-splitit", async () => {
  await e2e(4021, {
    customServer: {
      routes: [
        {
          path: "/api/installmentplans/initiate",
          method: "post",
          response: {},
        },
        {
          path: "/token",
          method: "post",
          response: {
            access_token: "string",
            token_type: "string",
            expires_in: 0,
            refresh_token: "string",
            scope: "string",
            id_token: "string",
          },
        },
      ],
    },
  });
});
