import { TypescriptMultipartFormDataFreeFormObjectClient } from "./index";
import * as fs from "fs";

describe("typescript-multipart-form-data-free-form-object", () => {
  it("upload file", async () => {
    const client = new TypescriptMultipartFormDataFreeFormObjectClient({
      apiKey: "API_KEY",
      basePath: "http://127.0.0.1:4038",
    });
    const response = await client.test.uploadFiles([
      {
        file: fs.readFileSync(__dirname + "/README.md"),
        metadata: {
          name: "1",
          fileType: "markdown",
        },
      },
      {
        file: fs.readFileSync(__dirname + "/README.md"),
        metadata: {
          name: "2",
          fileType: "markdown",
        },
      },
    ]);
    expect(response).not.toBeNull();
    const markdown = Buffer.from(
      (response.data as any).files[0].buffer.data
    ).toString("utf8");
    const includesString = markdown.includes(
      "typescript-multipart-form-data-free-form-object"
    );
    expect(JSON.parse((response.data as any).body.metadata[0]).name).toEqual(
      "1"
    );
    expect(JSON.parse((response.data as any).body.metadata[1]).name).toEqual(
      "2"
    );
    expect(includesString).toBe(true);
  });
});
