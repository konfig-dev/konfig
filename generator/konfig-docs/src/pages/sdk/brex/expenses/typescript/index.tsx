import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrexExpensesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="brex-expenses-typescript-sdk"
      metaDescription={`Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale.`}
      company="Brex"
      serviceName="Expenses"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/expenses/logo.png"
      companyKebabCase="brex"
      clientNameCamelCase="brexExpenses"
      homepage="brex.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/expenses/favicon.png"
      contactUrl="https://brex.com"
      contactEmail="developer-access@brex.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/expenses/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","automation","banking","global_payments","travel_expenses"]}
      methods={[
  {
    "url": "/v1/expenses/card",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Expenses",
    "typeScriptTag": "cardExpenses",
    "description": "List expenses",
    "parameters": [
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Get additional details for the expense, e.g. merchant mcc code, by passing in `expand[]=merchant`. Query parameters include `location`, `department`, `merchant`, `receipts.download_uris`, `user`, `budget` and `payment`.",
        "example": "\n?expand[]=merchant&expand[]=location\n"
      },
      {
        "name": "userId[]",
        "schema": "array",
        "required": false,
        "description": "Get expenses belong to provided user(https://developer.brex.com/openapi/expenses_api/."
      },
      {
        "name": "parentExpenseId[]",
        "schema": "array",
        "required": false,
        "description": "Get itemized expenses belong to provided parent expenses ID(https://developer.brex.com/openapi/expenses_api/."
      },
      {
        "name": "budgetId[]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status[]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentStatus[]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "purchasedAtStart",
        "schema": "string",
        "required": false,
        "description": "\nShows only expenses with a `purchased_at` on or after this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6), e.g. 2022-11-12T23:59:59.999\n",
        "example": "\n2023-01-01T23:59:59.999\n"
      },
      {
        "name": "purchasedAtEnd",
        "schema": "string",
        "required": false,
        "description": "\nShows only expenses with a `purchased_at` on or before this date-time. This parameter is the date-time notation as defined by [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6), e.g. 2022-11-12T23:59:59.999\n",
        "example": "\n2023-01-10T23:59:59.999\n"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "\nThe cursor to use for pagination. This is the `next_cursor` value returned from the previous response.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v1/expenses/card/receipt_match",
    "method": "createNewReceiptMatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Receipt Match",
    "typeScriptTag": "receiptMatch",
    "description": "Create a new receipt match",
    "parameters": [
      {
        "name": "receipt_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIPT_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pre-signed file upload URI and unique identifier of the request.\n"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/v1/expenses/card/{expense_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Expenses",
    "typeScriptTag": "cardExpenses",
    "description": "Get an expense",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPENSE_ID"
      },
      {
        "name": "expand[]",
        "schema": "array",
        "required": false,
        "description": "Get additional details for the expense, e.g. merchant mcc code, by passing in `expand[]=merchant`. Query parameters include `location`, `department`, `merchant`, `receipts.download_uris`, `user`, `budget` and `payment`.",
        "example": "\n?expand[]=merchant&expand[]=location\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The expense object that has expandable fields, e.g., `location`, `department`, and `receipts`."
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/expenses/card/{expense_id}",
    "method": "updateExpense",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Card Expenses",
    "typeScriptTag": "cardExpenses",
    "description": "Update an expense",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPENSE_ID"
      },
      {
        "name": "memo",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/expenses/card/{expense_id}/receipt_upload",
    "method": "createNewReceipt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Receipt Upload",
    "typeScriptTag": "receiptUpload",
    "description": "Create a new receipt upload",
    "parameters": [
      {
        "name": "expenseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPENSE_ID"
      },
      {
        "name": "receipt_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECEIPT_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The pre-signed file upload URI and unique identifier of the request.\n"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Expenses API"
      apiBaseUrl="https://platform.brexapis.com"
      apiVersion="0.1"
      endpoints={4}
      sdkMethods={5}
      schemas={19}
      parameters={19}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/expenses/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/expenses/openapi.yaml"
      developerDocumentation="developer.brex.com/openapi/expenses_api/"
    />
  );
}
  