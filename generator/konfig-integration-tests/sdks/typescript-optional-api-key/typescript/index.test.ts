import { TypescriptOptionalApiKey } from "./index";

describe("typescript-optional-api-key", () => {
  it("initialize client with api key", async () => {
    const typescriptoptionalapikey = new TypescriptOptionalApiKey({
      apiKey: "API_KEY",
    });
  });

  it("initialize client without api key", async () => {
    const typescriptoptionalapikey = new TypescriptOptionalApiKey({});
  });
});
