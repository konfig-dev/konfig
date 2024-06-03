import { TypescriptApiExceptionContainsResponseHeadersClient, TypescriptApiExceptionContainsResponseHeadersClientError } from "./index";

describe("typescript-api-exception-contains-response-headers", () => {
    it("initialize client", async () => {
        const client = new TypescriptApiExceptionContainsResponseHeadersClient({
            apiKey: "API_KEY",
        });
        try {
            await client.test.fetch();
            expect(false).toBeTruthy();
        } catch (error) {
            expect((error as TypescriptApiExceptionContainsResponseHeadersClientError).message.includes("RESPONSE HEADERS:")).toBeTruthy();
        }
    });
});
