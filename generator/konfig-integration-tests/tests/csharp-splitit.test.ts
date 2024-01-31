import { e2e } from "../util";
import { test } from "vitest";

test("splitit/csharp-splitit", async () => {
  await e2e(4008, {
    customServer: {
      routes: [
        {
          path: "/api/installmentplans/initiate",
          method: "post",
          response: {
            InstallmentPlanNumber: "string",
            RefOrderNumber: "string",
            PurchaseMethod: "InStore",
            Status: "Initialized",
            Currency: "string",
            Amount: 0,
          },
        },
      ],
    },
  });
});
