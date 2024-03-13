import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrexPaymentsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="brex-payments-typescript-sdk"
      metaDescription="Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale."
      company="Brex"
      serviceName="Payments"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/payments/logo.png"
      clientNameCamelCase="brexPayments"
      homepage="brex.com"
      lastUpdated={new Date("2024-03-13T02:00:36.999Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/payments/favicon.png"
      contactUrl="https://brex.com"
      contactEmail="developer-access@brex.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/payments/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","automation","global_payments","travel_expenses","banking"]}
      methods={[
  {
    "url": "/v1/incoming_transfers",
    "method": "createIncomingTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "\nCreate incoming transfer\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "counterparty",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "receiving_account",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/linked_accounts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Linked Accounts",
    "typeScriptTag": "linkedAccounts",
    "description": "\nLists linked accounts\n",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
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
    "url": "/v1/transfers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "\nLists transfers \n",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
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
      },
      {
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/transfers",
    "method": "createTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "\nCreate transfer\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "counterparty",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "external_memo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_MEMO"
      },
      {
        "name": "originating_account",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "approval_type",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/transfers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "\nGet transfer\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/vendors",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "\nLists vendors \n",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
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
    "url": "/v1/vendors",
    "method": "createNewVendor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "\nCreate vendor\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_accounts",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/vendors/{id}",
    "method": "deleteVendorById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "\nDelete vendor.\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "deleteVendor 200 response"
      }
    ]
  },
  {
    "url": "/v1/vendors/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "\nGet vendor\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/vendors/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vendors",
    "typeScriptTag": "vendors",
    "description": "Update vendor",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "company_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payment_accounts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "beneficiary_name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Payments API"
      apiBaseUrl="https://platform.brexapis.com"
      apiVersion="1.0"
      endpoints={6}
      sdkMethods={10}
      schemas={58}
      parameters={34}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/payments/openapi.yaml"
    />
  );
}
  