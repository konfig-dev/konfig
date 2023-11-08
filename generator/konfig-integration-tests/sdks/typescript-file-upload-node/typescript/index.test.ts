import { TypescriptFileUploadNodeClient } from "./index";
import * as buffer from "buffer";

describe("typescript-file-upload-node", () => {
  it("initialize client", async () => {
    const typescriptfileuploadnodeclient = new TypescriptFileUploadNodeClient({
      apiKey: "API_KEY",
    });
  });
  it("file upload", async () => {
    const client = new TypescriptFileUploadNodeClient({
      basePath: "http:/127.0.0.1:4014",
      apiKey: "API_KEY",
    });
    const result = await client.test.fetch({
      file: new buffer.File([], "file.txt"),
    });
    expect(result).not.toBeNull();
  });
});
