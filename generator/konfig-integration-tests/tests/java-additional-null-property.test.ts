import { e2e } from "../util";
import { test } from "vitest";

test("java-additional-null-property", async () => {
  await e2e(4107, {
    customServer: {
      routes: [
        {
          path: "/trade/impact",
          method: "post",
          response: {
            trade: {
              id: "dd78a663-359a-4d2f-9453-d88ba1e7ac13",
              account: "c1c3436b-1c67-456a-b493-773dc9c4893f",
              order_type: "Limit",
              time_in_force: "GTC",
              symbol: {
                brokerage_symbol_id: "ed914d17-9e9d-40a7-9045-d6d24359d670",
                universal_symbol_id: "3226ae9e-5f5d-46b3-ad51-a0b75ecd29e8",
                currency: {
                  id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
                  code: "USD",
                },
                description: "PayPal Holdings Inc",
                local_id: "",
                symbol: "PYPL",
              },
              action: "BUY",
              units: 3.0,
              price: 60.0,
            },
            trade_impacts: [
              {
                account: "c1c3436b-1c67-456a-b493-773dc9c4893f",
                currency: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
                remaining_cash: 61525.75,
                estimated_commissions: 0.0,
                forex_fees: 0.0,
              },
            ],
            combined_remaining_balance: {
              account: {
                id: "c1c3436b-1c67-456a-b493-773dc9c4893f",
                number: "***123",
                name: "Alpaca Margin",
                sync_status: {
                  holdings: {
                    last_successful_sync: "2024-08-06 04:22:24.923643+00:00",
                    initial_sync_completed: true,
                  },
                  transactions: {
                    last_successful_sync: "2024-08-05",
                    initial_sync_completed: true,
                  },
                },
              },
              currency: {
                code: "USD",
                name: "US Dollar",
                id: "57f81c53-bdda-45a7-a51f-032afd1ae41b",
              },
              cash: 61525.75,
              buying_power: null,
            },
          },
        },
      ],
    },
  });
});
