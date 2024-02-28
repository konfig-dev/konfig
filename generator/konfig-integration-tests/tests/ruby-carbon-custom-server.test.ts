import { e2e } from "../util";
import { test } from "vitest";

test("ruby-carbon-custom-server", async () => {
  await e2e(4129, {
    customServer: {
      routes: [
        {
          path: "/auth/v1/access_token",
          method: "get",
          response: {
            access_token: "123",
            refresh_token: "xyz",
          },
        },
        {
          path: "/text_chunks",
          method: "post",
          response: "echo",
        },
        {
          path: "/embeddings",
          method: "post",
          response: "echo",
        },
      ],
    },
  });
});
