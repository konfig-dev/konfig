import { e2e } from "../util";
import { test } from "vitest";

test("typescript-oauth-token", async () => {
  await e2e(4048, {
    customServer: {
      routes: [
        {
          path: "/test",
          method: "get",
          response: "echo",
        },
        {
          path: "/token",
          method: "post",
          response: {
            access_token: "1234567890",
            token_type: "Bearer",
            expires_in: 3600,
          },
        },
      ],
    },
  });
});
