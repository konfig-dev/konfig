import { TypescriptQueryParamsNotIncludedInBodyClient } from "./index";

describe("typescript-query-params-not-included-in-body", () => {
  it("test", async () => {
    const client = new TypescriptQueryParamsNotIncludedInBodyClient({
      apiKey: "API_KEY",
      basePath: "http://127.0.0.1:4053",
    });
    const response = await client.test.test({
      queryParam1: "queryParam1",
      queryParam2: "queryParam2",
      bodyParam1: "bodyParam1",
      bodyParam2: "bodyParam2",
    });
    expect(response).not.toBeNull();
    expect((response.data as any).body).toEqual({
      bodyParam1: "bodyParam1",
      bodyParam2: "bodyParam2",
    });
    const bodyHasQuery = JSON.stringify((response.data as any).body).includes(
      "query"
    );
    expect(bodyHasQuery).toBe(false);
  });
});
