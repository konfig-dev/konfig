import { e2e } from "../util";
import { test } from "vitest";

test("typescript-multipart-form-data-array-request", async () => {
  await e2e(4083, {
    customServer: {
      routes: [
        {
          path: "/upload-files",
          method: "post",
          isMultipartFormData: true,
          response: "echo",
        },
      ],
    },
  });
});
