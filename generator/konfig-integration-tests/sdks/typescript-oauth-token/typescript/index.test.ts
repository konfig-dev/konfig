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
  it("token that expires", async () => {
    const client = new TypescriptOauthTokenClient({
      oauthClientId: "client_id",
      oauthClientSecret: "client_secret",
      basePath: "http://127.0.0.1:4048",
      oauthTokenUrl: "http://127.0.0.1:4048/fast-expiring-token",
    });
    const result = await client.test.fetch();
    const token = (result.data as any).headers.authorization;
    expect(token).toBe("Bearer 0987654321");

    client.setOauthTokenUrl("http://127.0.0.1:4048/token")

    await new Promise((resolve) => setTimeout(resolve, 5000));
    const result2 = await client.test.fetch();
    const token2 = (result2.data as any).headers.authorization;
    expect(token2).toBe("Bearer 0987654321"); // token should not have expired yet

    await new Promise((resolve) => setTimeout(resolve, 5000));
    const result3 = await client.test.fetch();
    const token3 = (result3.data as any).headers.authorization;
    expect(token3).toBe("Bearer 1234567890"); // token should have expired and been re-fetched
  })
});
