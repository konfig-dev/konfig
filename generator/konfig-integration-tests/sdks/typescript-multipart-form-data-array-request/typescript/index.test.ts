import { TypescriptMultipartFormDataArrayRequestClient } from "./index";
import * as fs from "fs";

describe("typescript-multipart-form-data-array-request", () => {
  it("upload file", async () => {
    const client = new TypescriptMultipartFormDataArrayRequestClient({
      apiKey: "API_KEY",
      basePath: "http://127.0.0.1:4083",
    });
    const response = await client.test.uploadFiles([
      {
        file: fs.readFileSync(__dirname + "/README.md"),
        metadata: { type: "markdown" },
      },
    ]);
    expect(response).not.toBeNull();
  });
});
