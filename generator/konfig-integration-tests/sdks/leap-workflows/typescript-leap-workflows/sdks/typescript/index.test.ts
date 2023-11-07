import { Leap } from "./index";

describe("@leap-ai/workflows", () => {
    it("initialize client", async () => {
        const leap = new Leap({
            apiKey: "API_KEY",
        });
    });
});
