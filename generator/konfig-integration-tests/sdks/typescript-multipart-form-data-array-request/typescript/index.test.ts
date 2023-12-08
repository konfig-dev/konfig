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
        metadata: { fileType: "markdown" },
      },
    ]);
    expect(response).not.toBeNull();
    const markdown = Buffer.from(
      (response.data as any).files[0].buffer.data
    ).toString("utf8");
    const includesString = markdown.includes(
      "typescript-multipart-form-data-array-request"
    );
    expect(includesString).toBe(true);
  });
});
