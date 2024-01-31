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
        {
          path: "/token",
          method: "post",
          response: {
            access_token: "string",
            token_type: "string",
            expires_in: 0,
            refresh_token: "string",
            scope: "string",
            id_token: "string",
          },
        },
      ],
    },
  });
});
