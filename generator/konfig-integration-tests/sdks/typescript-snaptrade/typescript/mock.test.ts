import axios from "axios";
import { Snaptrade } from "./index";

describe("trailing slash is stripped", () => {
  it("should make a GET request to the correct URL", async () => {
    const mockGet = jest.fn().mockResolvedValueOnce({ data: {} });
    (axios.request as jest.Mock) = mockGet;

    // Call your function
    await new Snaptrade({
      consumerKey: process.env.SNAPTRADE_CONSUMER_KEY ?? "dummy_key",
      clientId: process.env.SNAPTRADE_CLIENT_ID ?? "dummy_id",
      basePath: "http://localhost:3000/api/proxy",
    }).apiStatus.check();

    // Assert that axios.get was called with the correct URL
    expect(axios.request).toHaveBeenCalledWith(
      expect.objectContaining({
        url: expect.stringContaining("http://localhost:3000/api/proxy?"),
      })
    );
  });
});
