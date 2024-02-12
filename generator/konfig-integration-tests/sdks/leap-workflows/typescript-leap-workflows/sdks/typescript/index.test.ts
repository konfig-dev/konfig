import { Leap } from "./index";

describe("@leap-ai/workflows", () => {
  it("initialize client", async () => {
    const leap = new Leap({
      apiKey: "API_KEY",
    });
    expect(leap).not.toBeNull();
  });
  it("get workflow", async () => {
    const leap = new Leap({
      apiKey: "API_KEY",
      basePath: "http://127.0.0.1:4010",
    });
    const response = await leap.workflowRuns.getWorkflowRun({
      workflowRunId: "rnp_x3p27VQk6MyJfLe",
    });
    expect(response).not.toBeNull();
    console.log(response.data.status);
  });
});
