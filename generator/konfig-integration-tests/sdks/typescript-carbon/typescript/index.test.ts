import { Carbon } from "./index";
import * as fs from "fs";

describe("carbon-typescript-sdk", () => {
  it("initialize client", async () => {
    const carbon = new Carbon({
      apiKey: "API_KEY",
      customerId: "CUSTOMER_ID",
    });
    expect(carbon).not.toBeNull();
  });
  const carbon = new Carbon({
    apiKey: "API_KEY",
    customerId: "CUSTOMER_ID",
    basePath: "http://127.0.0.1:4094",
  });
  it("get access token", async () => {
    const token = await carbon.auth.getAccessToken();
    expect(token).not.toBeNull();
    console.log(token.data);
    const carbonClientWithToken = new Carbon({
      accessToken: token.data.access_token,
      basePath: "http://127.0.0.1:4094",
    });
    expect(carbonClientWithToken).not.toBeNull();
    const whiteLabeling = await carbonClientWithToken.auth.getWhiteLabeling();
    expect(whiteLabeling).not.toBeNull();
    console.log(whiteLabeling.data);
  });

  it("query user data sources", async () => {
    const dataSources = await carbon.dataSources.queryUserDataSources({});
    console.log(dataSources.data);
  });
  it("sync s3 files", async () => {
    const syncS3Files = await carbon.integrations.syncS3Files({
      ids: [{ id: "ID", bucket: "BUCKET" }],
    });
    console.log(syncS3Files.data);
  });
  it("health check", async () => {
    const status = await carbon.health.check();
    console.log(status.data);
  });
  it("file upload", async () => {
    const file = await carbon.files.upload({
      file: fs.readFileSync("README.md"),
    });
    console.log(file.data);
  });
});
