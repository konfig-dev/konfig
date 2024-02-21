import { TypescriptOauthTokenClient } from "./index";

describe("typescript-oauth-token", () => {
  it("token", async () => {
    const client = new TypescriptOauthTokenClient({
      oauthClientId: "client_id",
      oauthClientSecret: "client_secret",
      basePath: "http://127.0.0.1:4048",
    });
    // oauth token URL should default to the one in the OAS if not set
    const result = await client.test.fetch();
    const token = (result.data as any).headers.authorization;
    expect(token).toBe("Bearer 1234567890");
  });
});
