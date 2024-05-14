import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Layer2FinancialTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="layer-2-financial-typescript-sdk"
      metaDescription={`Layer2 is a next generation Payments Infrastructure. Our multi-partner platform is designed to provide payment processors, fintechs and neobanks with fully compliant Collections, PayOuts, FX, Cross Border payment services. With just one API, you can access all of these services seamlessly and easily.`}
      company="Layer2 Financial"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/logo.png"
      companyKebabCase="layer-2-financial"
      clientNameCamelCase="layer2Financial"
      homepage="layer2financial.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","global_payments","payment_services","payments"]}
      methods={[
  {
    "url": "/v1/withdrawals",
    "method": "requestNewWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Create Withdrawal",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_timestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_TIMESTAMP"
      },
      {
        "name": "withdrawal_rail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WITHDRAWAL_RAIL"
      },
      {
        "name": "source_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE_ACCOUNT_ID"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PURPOSE"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "destination_counterparty_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_COUNTERPARTY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/withdrawals/{id}/accept",
    "method": "acceptanceOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Accept Withdrawal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Withdrawal ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "xSignature",
        "schema": "string",
        "description": "Client signature to validate the provence of the API request. See [signing](https://docs.layer2financial.com/guides/requestsigning/) section for more details."
      },
      {
        "name": "xTimestamp",
        "schema": "string",
        "description": "Current timestamp, represented AS unix epoch seconds. Mandatory when x-signature is provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/transfers",
    "method": "requestNewTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Create Transfer",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE_ACCOUNT_ID"
      },
      {
        "name": "destination_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_ACCOUNT_ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/transfers/{id}/accept",
    "method": "acceptTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Accept Transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transfer ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "xSignature",
        "schema": "string",
        "description": "Client signature to validate the provence of the API request. See [signing](https://docs.layer2financial.com/guides/requestsigning/) section for more details."
      },
      {
        "name": "xTimestamp",
        "schema": "string",
        "description": "Current timestamp, represented AS unix epoch seconds. Mandatory when x-signature is provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriptions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get Subscriptions",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriptions",
    "method": "createEventCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Create Subscription",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "event_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_TYPE"
      },
      {
        "name": "callback_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACK_URL"
      },
      {
        "name": "signature_verification_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNATURE_VERIFICATION_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/exchanges/{id}/accept",
    "method": "acceptQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Accept Exchange",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Exchange ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "xSignature",
        "schema": "string",
        "description": "Client signature to validate the provence of the API request. See [signing](https://docs.layer2financial.com/guides/requestsigning/) section for more details."
      },
      {
        "name": "xTimestamp",
        "schema": "string",
        "description": "Current timestamp, represented AS unix epoch seconds. Mandatory when x-signature is provided."
      },
      {
        "name": "maximum_slippage",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/exchanges/quote",
    "method": "requestQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Create Exchange (https://docs.layer2financial.com/api-docs/openapi/layer2/overview/",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE_ACCOUNT_ID"
      },
      {
        "name": "destination_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_ACCOUNT_ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/exchanges/market",
    "method": "createMarketExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Create Exchange (https://docs.layer2financial.com/api-docs/openapi/layer2/overview/",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE_ACCOUNT_ID"
      },
      {
        "name": "destination_account_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_ACCOUNT_ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/documents/{id}",
    "method": "uploadDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload Document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/deposits",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Create Deposit",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "created_timestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_TIMESTAMP"
      },
      {
        "name": "deposit_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEPOSIT_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/deposits/{id}/accept",
    "method": "acceptance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Accept Deposit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Deposit ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "xSignature",
        "schema": "string",
        "description": "Client signature to validate the provence of the API request. See [signing](https://docs.layer2financial.com/guides/requestsigning/) section for more details."
      },
      {
        "name": "xTimestamp",
        "schema": "string",
        "description": "Current timestamp, represented AS unix epoch seconds. Mandatory when x-signature is provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "getMatchingQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Retrieve Customers",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of records to get (default 0 = first page)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Records to return per page (default = 20)"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Type of Customer"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "* `ACTIVE` - Customer is active and available for use in line with client configuration. \n* `CLOSED` -  Customer is permanently closed, no further actions can be performed on it or associated accounts. \n* `PENDING` -  Customer is under additional review. No actions can be performed on the account.   \n* `FROZEN` - Customer and associated accounts have been temporarily locked for all actions. \n* `EDD` -  Customer requires enhanced due diligence to be performed. The customer and accounts will operate as if frozen. \n* `DORMANT` - No activity has been seen in the last 12 months. Customer and accounts are available for use.  \n\n"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create Customer",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "customer_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_TYPE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}/payor",
    "method": "createPayor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create Payor",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY_CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}/individuals",
    "method": "addNewIndividual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create Individual",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Corporate Customer ID. This operation can only be performed on corporate customers.",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "title",
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
        "name": "individual_type",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "middle_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mailing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "telephone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_reference_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "passport_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "percentage_ownership",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "us_residency_status",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/counterparties",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Counterparty",
    "typeScriptTag": "counterparty",
    "description": "Retrieve Counterparties",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of records to get (default 0 = first page)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Records to return per page (default = 20)"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "Customer ID to whom the counterparty belongs"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/counterparties",
    "method": "createNewCounterparty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparty",
    "typeScriptTag": "counterparty",
    "description": "Create Counterparty",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "counterparty_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTERPARTY_TYPE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/counterparties/{id}/link/details",
    "method": "getLinkingDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparty",
    "typeScriptTag": "counterparty",
    "description": "Retrieve Linking Details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Counterparty ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "linking_provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINKING_PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/counterparties/{id}/link/connect",
    "method": "establishConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparty",
    "typeScriptTag": "counterparty",
    "description": "Connect Linked Account",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Counterparty ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "linking_provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINKING_PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/counterparties/{id}/link/accounts",
    "method": "getLinkableAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Counterparty",
    "typeScriptTag": "counterparty",
    "description": "Retrieve Linkable Accounts",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Counterparty ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "linking_provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINKING_PROVIDER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications",
    "method": "startNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Create Application",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "application_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}/submit",
    "method": "submitForProcessing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Submit Application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}/individual",
    "method": "addIndividual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Add Individual",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "title",
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
        "name": "individual_type",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "middle_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "email_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mailing_address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "telephone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_reference_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "passport_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "percentage_ownership",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "us_residency_status",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}/accesscode",
    "method": "generateAccessCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Request Access Code",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/adjustments",
    "method": "createNewAdjustment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Create Adjustment",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "adjustment_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADJUSTMENT_TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/adjustments/{id}/accept",
    "method": "acceptance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Accept Adjustment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Adjustment ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "xSignature",
        "schema": "string",
        "description": "Client signature to validate the provence of the API request. See [signing](https://docs.layer2financial.com/guides/requestsigning/) section for more details."
      },
      {
        "name": "xTimestamp",
        "schema": "string",
        "description": "Current timestamp, represented AS unix epoch seconds. Mandatory when x-signature is provided."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Retrieve Accounts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of records to get (default 0 = first page)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Records to return per page (default = 20)"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "Account holder customer ID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "* `OPEN` - Account is open and available for use in line with its product configuration\n* `CLOSED` - Account is permanently closed, no further actions can be performed on the account.  \n* `PENDING` - Account is under additional review prior to moving to the OPEN or CLOSED state. No actions can be performed on the account.  \n* `FROZEN` - Account has been temporarily locked for all actions (deposits, transfers, exchanges and withdrawals).  \n* `EDD` -  Account (and/or customer) requires enhanced due diligence to be performed. The accounts will operate as if frozen. \n* `DORMANT` - No activity has been seen in the last 12 months. The account is available for use.  \n\n"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments",
    "method": "createPaymentAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Open Payment Account",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "account_to_open",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments/{id}/address",
    "method": "requestPaymentAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Request Payment Address",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Account ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "payor_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_reference",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Retrieve Accounts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page of records to get (default 0 = first page)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Records to return per page (default = 20)"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "Account holder customer ID"
      },
      {
        "name": "productType",
        "schema": "string",
        "description": "* `CLIENT` - Accounts at the Client level for managing client treasury operations\n* `DEPOSIT` - Accounts at the Customer level account for managing customer funds on platform\n* `VIRTUAL` - Accounts at the Customer level account for tracking externally managed customer funds \n\n[see account concepts](https://docs.layer2financial.com/api-docs/openapi/layer2/overview/) for more details."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "* `OPEN` - Account is open and available for use in line with its product configuration\n* `CLOSED` - Account is permanently closed, no further actions can be performed on the account.  \n* `PENDING` - Account is under additional review prior to moving to the OPEN or CLOSED state. No actions can be performed on the account.  \n* `FROZEN` - Account has been temporarily locked for all actions (deposits, transfers, exchanges and withdrawals).  \n* `EDD` -  Account (and/or customer) requires enhanced due diligence to be performed. The accounts will operate as if frozen. \n* `DORMANT` - No activity has been seen in the last 12 months. The account is available for use.  \n\n"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits",
    "method": "openNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Open Account",
    "parameters": [
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "account_to_open",
        "schema": "object",
        "required": true,
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits/{id}/address",
    "method": "requestAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Request Address",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Retrieve Customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update Customer ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "updates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updated_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}/individuals/{individual_id}",
    "method": "getIndividualDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Retrieve Individual",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Corporate Customer ID. This operation can only be performed on corporate customers.",
        "example": "ID"
      },
      {
        "name": "individualId",
        "schema": "string",
        "required": true,
        "description": "Individual ID",
        "example": "INDIVIDUAL_ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}/individuals/{individual_id}",
    "method": "updateIndividualDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update Individual",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer ID",
        "example": "ID"
      },
      {
        "name": "individualId",
        "schema": "string",
        "required": true,
        "description": "Individual ID",
        "example": "INDIVIDUAL_ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "updates",
        "schema": "array",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Retrieve Application",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Update Application ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "updates",
        "schema": "array",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}/individual/{individual_id}",
    "method": "deleteIndividual",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Delete Individual",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "individualId",
        "schema": "string",
        "required": true,
        "description": "Individual ID",
        "example": "INDIVIDUAL_ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}/individual/{individual_id}",
    "method": "updateIndividualProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Update Individual",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "individualId",
        "schema": "string",
        "required": true,
        "description": "Individual ID",
        "example": "INDIVIDUAL_ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      },
      {
        "name": "updates",
        "schema": "array",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Retrieve Payment Account",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments/{id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Update Account ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "updates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updated_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Retrieve Account",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits/{id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Update Account ",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "updates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updated_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/withdrawals/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Withdrawals",
    "typeScriptTag": "withdrawals",
    "description": "Retrieve Withdrawal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Withdrawal ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/transfers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transfers",
    "typeScriptTag": "transfers",
    "description": "Retrieve Transfer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transfer ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/settlements/{id}",
    "method": "getDetailsByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settlements",
    "typeScriptTag": "settlements",
    "description": "Retrieve Settlement",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Settlement ID",
        "example": "ID"
      },
      {
        "name": "sourceAccountId",
        "schema": "string",
        "required": false,
        "description": "Source Account ID to filter settlement on"
      },
      {
        "name": "destinationAccountId",
        "schema": "string",
        "required": false,
        "description": "Destination Account ID to filter settlement on"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/exchanges/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exchanges",
    "typeScriptTag": "exchanges",
    "description": "Retrieve Exchange",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Exchange ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/documents/{id}/download",
    "method": "getDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Download Document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Document ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/deposits/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deposits",
    "typeScriptTag": "deposits",
    "description": "Retrieve Deposit",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Deposit ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/counterparties/{id}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Counterparty",
    "typeScriptTag": "counterparty",
    "description": "Retrieve Counterparty",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Counterparty ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/applications/{id}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Retrieve Application Status",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Application ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/adjustments/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Adjustments",
    "typeScriptTag": "adjustments",
    "description": "Retrieve adjustment",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Adjustment ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments/{id}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Retrieve Transactions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Account ID",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page of records to get (default 0 = first page)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Records to return per page (default = 20)"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Sort order by transaction date (ASC or DESC)"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Filter for transaction from this date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Filter for transaction to this date"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/payments/{id}/transactions/{id}",
    "method": "getTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Payments",
    "typeScriptTag": "accountsPayments",
    "description": "Retrieve Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transaction ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits/{id}/transactions",
    "method": "getTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Retrieve Transactions",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Account ID",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page of records to get (default 0 = first page)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Records to return per page (default = 20)"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Sort order by transaction date (ASC or DESC)"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Filter for transaction from this date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Filter for transaction to this date"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/deposits/{id}/transactions/{id}",
    "method": "getTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts/Deposits",
    "typeScriptTag": "accountsDeposits",
    "description": "Retrieve Transaction",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Transaction ID",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/subscriptions/{id}",
    "method": "deleteExistingSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete Subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "xL2FRequestId",
        "schema": "string",
        "description": "Optional Unique ID per request, useful for fault resolution/diagnosis and audit."
      },
      {
        "name": "xL2FIdempotencyId",
        "schema": "string",
        "description": "Unique ID used to safely retry an operation. See [idempotency](https://docs.layer2financial.com/guides/idempotence/) section for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Layer2 API Specification"
      apiBaseUrl="https://alpha.layer2financial.dev/api"
      apiVersion="1.0.5"
      endpoints={45}
      sdkMethods={57}
      schemas={218}
      parameters={337}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/layer-2-financial/openapi.yaml"
      developerDocumentation="docs.layer2financial.com/api-docs/openapi/layer2/overview/"
    />
  );
}
  