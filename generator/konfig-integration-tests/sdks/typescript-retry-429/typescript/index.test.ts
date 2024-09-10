import { TypescriptRetry429Client } from "./index";

describe("typescript-retry-429", () => {
    it("initialize client", async () => {
        const client = new TypescriptRetry429Client({
            apiKey: "API_KEY",
            basePath: "http://127.0.0.1:4128",
        });
        try {
            await client.test.fetch();
            fail("Expected an error to be thrown");
        } catch (error) {
            expect((error as Error).message).toBe("Request failed after 4 retries due to 429 (rate limit) errors.");
        }
    });
});
