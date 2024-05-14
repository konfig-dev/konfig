import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VoltIoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="volt-io-typescript-sdk"
      metaDescription={`Volt is building the next generation payment network that is global, instant and interoperable - connecting real-time payments everywhere.

We're driving the shift to an era where real-time is the only time. This new era starts now.`}
      company="Volt.io"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/logo.png"
      companyKebabCase="volt-io"
      clientNameCamelCase="voltIo"
      homepage="www.volt.io/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["global_payments","online_payments","financial_technology","fintech","payment_network","real_time_payments","payments"]}
      methods={[
  {
    "url": "/oauth",
    "method": "usingOAuth2Password",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authenticating with the API",
    "typeScriptTag": "authenticatingWithTheApi",
    "description": "oAuth2 password authentication",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "password"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "847485d4-9208-44b4-b351-5b175da5a4fe"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "58f0ea67-3fa0-4575-9a73-1ea6fb61c4df"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "test2892548542@volt.io"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1@D834uvtSzM*kW!EGX$#7&%188423"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/banks/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Banks and financial institutions",
    "typeScriptTag": "banksAndFinancialInstitutions",
    "description": "Bank details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "662384a0-9734-4556-a8bd-3f1e774e2a3c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Bank or financial institution"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payments",
    "method": "submitDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "New payment request",
    "parameters": [
      {
        "name": "currencyCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GBP"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 12345
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTHER"
      },
      {
        "name": "uniqueReference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sale123456"
      },
      {
        "name": "merchantInternalReference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1d73dd8a-4aef-4c83-80aa-f06c4f615a75"
      },
      {
        "name": "shopper",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "662384a0-9734-4556-a8bd-3f1e774e2a3c"
      },
      {
        "name": "callback",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "order_id=662384a0&sample=parameter"
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://client.app.example/notify"
      },
      {
        "name": "paymentSuccessUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/redirect/success"
      },
      {
        "name": "paymentFailureUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/redirect/failure"
      },
      {
        "name": "paymentPendingUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/redirect/pending"
      },
      {
        "name": "paymentCancelUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://example.com/redirect/cancel"
      },
      {
        "name": "checkoutCountries",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "PL",
          "DE"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/dropin",
    "method": "initiateEmbeddedCheckout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "New Embedded checkout",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List payments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "UUID of the Payment",
        "example": "662384a0-9734-4556-a8bd-3f1e774e2a3c"
      },
      {
        "name": "bank",
        "schema": "string",
        "required": false,
        "description": "UUID of the Bank",
        "example": "662384a0-9734-4556-a8bd-3f1e774e2a3c"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "3-letter currency code - See [ISO 4217 - Currency codes](https://www.iso.org/iso-4217-currency-codes.html)",
        "example": "EUR"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "The amount of the transaction in 1/100 units (pence, cents etc)",
        "example": 12345
      },
      {
        "name": "type",
        "schema": "string",
        "description": "The transaction type (these are predefined)",
        "example": "OTHER"
      },
      {
        "name": "uniqueReference",
        "schema": "string",
        "description": "Unique reference for the payment",
        "example": "sale123456"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The current status of the payment",
        "example": "REQUESTED"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "You can request additional pages of information by appending the page parameter to your GET request. Pages start numbering at 1 and are in blocks of 50 records, so to call records 51-100, append **page**=2 to your request. If you omit the page parameter, we will return you the information on page 1.\n",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "If you want to return more than the default number of records per page, append the parameter items to your GET request. To get the first 100 records, append **limit**=100 to your request. To get the next 100 records, append **page**=2&**limit**=100. If you omit the items parameter, we will return 50 records per page.\n",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Payment details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "93b85f3c-76eb-4316-b1ae-f3370ddc59bc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payments - money flowing from a consumer to a merchant."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts/beneficiaries",
    "method": "eligibleBeneficiariesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts (https://docs.volt.io/api-documentation/",
    "typeScriptTag": "payoutsHttps:DocsVoltIoApiDocumentation",
    "description": "Eligible beneficiaries list",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Name of the beneficiary you'd like to send a payout to"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "Domestic account number for the beneficiary you'd like to send a payout to"
      },
      {
        "name": "iban",
        "schema": "string",
        "description": "iban for the beneficiary you'd like to send a payout to"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "You can request additional pages of information by appending the page parameter to your GET request. Pages start numbering at 1 and are in blocks of 50 records, so to call records 51-100, append **page**=2 to your request. If you omit the page parameter, we will return you the information on page 1.\n",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "If you want to return more than the default number of records per page, append the parameter items to your GET request. To get the first 100 records, append **limit**=100 to your request. To get the next 100 records, append **page**=2&**limit**=100. If you omit the items parameter, we will return 50 records per page.\n",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts (https://docs.volt.io/api-documentation/",
    "typeScriptTag": "payoutsHttps:DocsVoltIoApiDocumentation",
    "description": "Payout list",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "You can request additional pages of information by appending the page parameter to your GET request. Pages start numbering at 1 and are in blocks of 50 records, so to call records 51-100, append **page**=2 to your request. If you omit the page parameter, we will return you the information on page 1.\n",
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "If you want to return more than the default number of records per page, append the parameter items to your GET request. To get the first 100 records, append **limit**=100 to your request. To get the next 100 records, append **page**=2&**limit**=100. If you omit the items parameter, we will return 50 records per page.\n",
        "default": 50
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payouts (https://docs.volt.io/api-documentation/",
    "typeScriptTag": "payoutsHttps:DocsVoltIoApiDocumentation",
    "description": "New payout request",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Recommended to avoid duplicate payout requests"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 12345
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "EUR"
      },
      {
        "name": "paymentTitle",
        "schema": "string",
        "description": "",
        "example": "Test Payout"
      },
      {
        "name": "beneficiary",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/payouts/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts (https://docs.volt.io/api-documentation/",
    "typeScriptTag": "payoutsHttps:DocsVoltIoApiDocumentation",
    "description": "Payout details",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the payout",
        "example": "efffed42-40f7-4bd2-840d-908aae9a33ad"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{id}/refund-details",
    "method": "checkEligibility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Refunds (https://docs.volt.io/api-documentation/",
    "typeScriptTag": "refundsHttps:DocsVoltIoApiDocumentation",
    "description": "Check refund eligibility",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the refund",
        "example": "93b85f3c-76eb-4316-b1ae-f3370ddc59bc"
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{id}/request-refund",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Refunds (https://docs.volt.io/api-documentation/",
    "typeScriptTag": "refundsHttps:DocsVoltIoApiDocumentation",
    "description": "New refund request",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "Optional - but recommended - to avoid duplicate refund requests"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the payment",
        "example": "93b85f3c-76eb-4316-b1ae-f3370ddc59bc"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": "",
        "example": 12345
      },
      {
        "name": "externalReference",
        "schema": "string",
        "description": "",
        "example": "MyRefundReference"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/payments",
    "method": "createPaymentReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Create payment report",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Standard Volt validation error"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/connect/{bankAccountId}",
    "method": "createConnectReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Create Connect report",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Standard Volt validation error"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/refund",
    "method": "createRefundReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Create Refund report",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeEventFees",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Standard Volt validation error"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/auditlog",
    "method": "createAuditLogReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Create Audit Log report",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Standard Volt validation error"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports",
    "method": "getAvailableReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Get available reports",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "description": "The ID of a specific merchant within your customer hierarchy"
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
        "statusCode": "422",
        "description": "Standard Volt validation error"
      }
    ]
  },
  {
    "url": "/reports/{id}",
    "method": "getReportDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Get report by ID",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/{id}/download",
    "method": "downloadReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting",
    "typeScriptTag": "reporting",
    "description": "Download a report",
    "parameters": [],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/payments/{paymentId}/name-match-score",
    "method": "checkMatchScore",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Payment Match Score",
    "parameters": [
      {
        "name": "allowInitials",
        "schema": "boolean",
        "description": "default: true - if set to false, receiving an account holder name that contains an initial instead of a first name will significantly impact the match score."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "**Not found** - The resource that you are requesting cannot be found. The response may contain further information."
      },
      {
        "statusCode": "409",
        "description": "**Conflict** - Name match score is only available for payments in the received status."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Real-time payments, everywhere."
      apiBaseUrl="https://api.sandbox.volt.io"
      apiVersion="2024.04.11"
      endpoints={19}
      sdkMethods={27}
      schemas={68}
      parameters={66}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/volt-io/openapi.yaml"
      developerDocumentation="docs.volt.io/api-documentation/"
    />
  );
}
  