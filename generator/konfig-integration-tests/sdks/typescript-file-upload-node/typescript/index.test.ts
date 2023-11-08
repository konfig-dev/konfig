import { TypescriptFileUploadNodeClient } from "./index";

describe("typescript-file-upload-node", () => {
    it("initialize client", async () => {
        const typescriptfileuploadnodeclient = new TypescriptFileUploadNodeClient({
            apiKey: "API_KEY",
        });
    });
});
