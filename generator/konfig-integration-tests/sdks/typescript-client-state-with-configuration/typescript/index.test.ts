import { TypescriptClientStateWithConfigurationClient } from "./index";

describe("typescript-client-state-with-configuration", () => {
    it("initialize client", async () => {
        const typescriptclientstatewithconfigurationclient = new TypescriptClientStateWithConfigurationClient({
            apiKey: "API_KEY",
        });
    });
});
