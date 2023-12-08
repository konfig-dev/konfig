import { e2e } from "../util";
import { test } from "vitest";

test("typescript-multipart-form-data-free-form-object", async () => {
  await e2e(4038, {
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
