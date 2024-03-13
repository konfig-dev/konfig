import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function GriffinTypeScriptSdk() {
  return (
    <Sdk
      sdkName="griffin-typescript-sdk"
      metaDescription="Griffin is the bank you can build on. We make it simple, quick and cost-effective to build and launch financial products. 

Build on the secure and regulated infrastructure of a bank and seamlessly embed financial services into your app. 

Griffin is authorised (with restrictions) by the PRA and FCA and backed by leading investors EQT Ventures, MassMutual Ventures, Tribe Capital, Notion Capital and Seedcamp."
      company="Griffin"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/logo.webp"
      clientNameCamelCase="griffin"
      homepage="griffin.com"
      lastUpdated={new Date("2024-03-13T01:24:30.233Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["finance","banking","payments","online_payments","fintech","automation","open_banking","wealth_management","global_banking","retail_banking","commercial_banking","multinational_financial_services","financial_technology","financial_services"]}
      methods={[
  {
    "url": "/v0/index",
    "method": "globalPathsFetch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Navigation",
    "typeScriptTag": "navigation",
    "description": "Index",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/ping",
    "method": "checkConnection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connectivity",
    "typeScriptTag": "connectivity",
    "description": "Ping",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
      }
    ]
  },
  {
    "url": "/v0/admissions/{admission-id}",
    "method": "getAdmission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get payment admission",
    "parameters": [
      {
        "name": "admissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADMISSION-ID"
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
        "description": "Requires an API key to continue"
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
    "url": "/v0/api-keys/{api-key-id}",
    "method": "removeApiKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "Delete API key",
    "parameters": [
      {
        "name": "apiKeyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/api-keys/{api-key-id}",
    "method": "getKeyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "Get API key",
    "parameters": [
      {
        "name": "apiKeyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}",
    "method": "getAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Get bank account",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}",
    "method": "updateBankAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Bank accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Update a bank account",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
      },
      {
        "name": "display-name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Responds with bad-request if the body does not conform to the schema."
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/actions/close",
    "method": "closeAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Close a bank account",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An error occurred when trying to close the bank account. See [https://docs.griffin.com/docs/errors/account-close](https://docs.griffin.com/docs/errors/account-close) for details."
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/admissions",
    "method": "listBankAccountAdmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List bank account admissions",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "filter[createdAt][lte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than the given timestamp."
      },
      {
        "name": "filter[createdAt][gte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than the given timestamp."
      },
      {
        "name": "filter[admissionStatus][in]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/membership",
    "method": "listLegalPersons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pooled account membership",
    "typeScriptTag": "pooledAccountMembership",
    "description": "List legal person in a pooled account membership",
    "parameters": [
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "For each member returned, include its legal person details, latest verification (if one exists), and/or latest risk rating (if one exists) in the response under the `included` attribute."
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
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
    "url": "/v0/bank/accounts/{bank-account-id}/membership-updates",
    "method": "manageLegalPersons",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pooled account membership",
    "typeScriptTag": "pooledAccountMembership",
    "description": "Manage pooled account members",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
      },
      {
        "name": "additions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "deletions",
        "schema": "array",
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
        "description": "Responds with bad-request if the body does not conform to the schema."
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/payments",
    "method": "getBankAccountPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List bank account payments",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "filter[createdAt][lte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than the given timestamp."
      },
      {
        "name": "filter[createdAt][gte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than the given timestamp."
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/payments",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Create payment",
    "parameters": [
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
      },
      {
        "name": "creditor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "payment-amount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "payment-reference",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "test reference"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An error occurred when trying to create the payment. See [https://docs.griffin.com/docs/errors/payment](https://docs.griffin.com/docs/errors/payment) for details."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/submissions",
    "method": "listSubmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List bank account submissions",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "filter[submissionStatus][in]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filter[createdAt][lte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than the given timestamp."
      },
      {
        "name": "filter[createdAt][gte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than the given timestamp."
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/accounts/{bank-account-id}/transactions",
    "method": "listBalanceChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List transactions",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "include",
        "schema": "string",
        "required": false,
        "description": "For each transaction returned, include its payment (if one exists) in the response under the `included` attribute."
      },
      {
        "name": "filter[postDatetime][lte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than or equal to the given timestamp."
      },
      {
        "name": "filter[postDatetime][lt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at less than the given timestamp."
      },
      {
        "name": "filter[postDatetime][gte]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than or equal to the given timestamp."
      },
      {
        "name": "filter[postDatetime][gt]",
        "schema": "string",
        "required": false,
        "description": "Return only resources with a created-at greater than the given timestamp."
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANK-ACCOUNT-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/bank/transactions/{transaction-id}",
    "method": "getTransactionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get transaction",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSACTION-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/companies-house/companies/{company-number}",
    "method": "getCompanyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies House",
    "typeScriptTag": "companiesHouse",
    "description": "Lookup company",
    "parameters": [
      {
        "name": "companyNumber",
        "schema": "string",
        "required": true,
        "description": "UK Companies House company number",
        "example": "10842931"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/events/{event-id}",
    "method": "getEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get an event",
    "parameters": [
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}",
    "method": "getLegalPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal persons",
    "typeScriptTag": "legalPersons",
    "description": "Get legal person",
    "parameters": [
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}",
    "method": "updateLegalPerson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Legal persons",
    "typeScriptTag": "legalPersons",
    "description": "Update legal person",
    "parameters": [
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      },
      {
        "name": "display-name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY-NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Responds with bad-request if the body does not conform to the schema."
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/bank/payees",
    "method": "listLegalPersonPayees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "List legal person payees",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/bank/payees",
    "method": "registerNewPayee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "Create payee",
    "parameters": [
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      },
      {
        "name": "account-holder",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT-HOLDER"
      },
      {
        "name": "account-number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "12345678"
      },
      {
        "name": "bank-id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123456"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/claims",
    "method": "getAllClaims",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Claims",
    "typeScriptTag": "claims",
    "description": "List claims",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/claims",
    "method": "createNewClaim",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Claims",
    "typeScriptTag": "claims",
    "description": "Create claim",
    "parameters": [
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Responds with bad-request if the body does not conform to the schema."
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/decisions",
    "method": "listForLegalPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Decisions",
    "typeScriptTag": "decisions",
    "description": "List decisions",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/decisions",
    "method": "createDecision",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Decisions",
    "typeScriptTag": "decisions",
    "description": "Create decision",
    "parameters": [
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      },
      {
        "name": "verification-url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/v0/verifications/vn.IHZlcmlmaWNhdGlvbi1pZA"
      },
      {
        "name": "decision-outcome",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DECISION-OUTCOME"
      },
      {
        "name": "decision-notes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DECISION-NOTES"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/history",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal person history",
    "typeScriptTag": "legalPersonHistory",
    "description": "Lists history of events for the given legal person.",
    "parameters": [
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/verifications",
    "method": "listForLegalPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Verifications",
    "typeScriptTag": "verifications",
    "description": "List verifications for a legal person",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/legal-persons/{legal-person-id}/verifications",
    "method": "initiateVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verifications",
    "typeScriptTag": "verifications",
    "description": "Perform verification of a legal person",
    "parameters": [
      {
        "name": "legalPersonId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-ID"
      },
      {
        "name": "workflow-url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/v0/workflows/wf.ICAgICB3b3JrZmxvdy1pZA"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request: specific error details will be provided, if available"
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": "Not Found: An associated legal person or workflow does not exist"
      },
      {
        "statusCode": "409",
        "description": "Conflict: An existing verification is in-flight"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity: specific error details will be provided, if available"
      },
      {
        "statusCode": "500",
        "description": "Internal Server Error: please contact support@griffin.com"
      },
      {
        "statusCode": "502",
        "description": "Bad Gateway: An error occurred with an external service integration"
      }
    ]
  },
  {
    "url": "/v0/memberships/{membership-id}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Delete membership",
    "parameters": [
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBERSHIP-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/memberships/{membership-id}",
    "method": "getMembershipInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "Get membership",
    "parameters": [
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBERSHIP-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/memberships/{membership-id}/roles",
    "method": "getMembershipRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List membership roles",
    "parameters": [
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBERSHIP-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/memberships/{membership-id}/roles",
    "method": "assignMembershipRoles",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Update role",
    "parameters": [
      {
        "name": "membershipId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBERSHIP-ID"
      },
      {
        "name": "role-urls",
        "schema": "array",
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/onboarding/applications/{onboarding-application-id}",
    "method": "getApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reliance onboarding",
    "typeScriptTag": "relianceOnboarding",
    "description": "Get onboarding application",
    "parameters": [
      {
        "name": "onboardingApplicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONBOARDING-APPLICATION-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/api-keys",
    "method": "listActiveKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "List API keys",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/api-keys",
    "method": "createKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "Create API Key",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      },
      {
        "name": "api-key-name",
        "schema": "undefined",
        "required": true,
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/bank/accounts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank accounts",
    "typeScriptTag": "bankAccounts",
    "description": "List bank accounts",
    "parameters": [
      {
        "name": "filter[beneficiary][eq]",
        "schema": "string",
        "required": false,
        "description": "Link to the [legal person](https://docs.griffin.com/api) that represents the [beneficiary](https://docs.griffin.com/api) of the account.",
        "example": "/v0/legal-persons/lp.IGxlZ2FsLXBlcnNvbi1pZA"
      },
      {
        "name": "filter[owner][eq]",
        "schema": "string",
        "required": false,
        "description": "Link to the [legal person](https://docs.griffin.com/api) that represents the [owner](https://docs.griffin.com/api) of the account.",
        "example": "/v0/legal-persons/lp.IGxlZ2FsLXBlcnNvbi1pZA"
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "For each bank account returned, include its owner and/or beneficiary in the response under the `included.legal-persons` attribute."
      },
      {
        "name": "filter[accountStatus][in][]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "filter[accountRestricted][in][]",
        "schema": "boolean",
        "required": false,
        "description": "Specifies whether the bank account has restrictions applied by Griffin."
      },
      {
        "name": "filter[pooledFunds][eq]",
        "schema": "boolean",
        "required": false,
        "description": "Specifies whether the bank account holds funds belonging to multiple beneficiaries."
      },
      {
        "name": "filter[bankProductType][in][]",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/bank/accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Open bank account",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/events",
    "method": "getAllOrganizationEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "List all events for an organization",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "filter[eventType][eq]",
        "schema": "string",
        "required": false,
        "description": "The type of webhook event. Usually has the form {resource}-{operation}, e.g. payment-updated"
      },
      {
        "name": "filter[createdAt][lte]",
        "schema": "string",
        "required": false,
        "description": "Return only events with a created-at less than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][lt]",
        "schema": "string",
        "required": false,
        "description": "Return only events with a created-at less than the given timestamp."
      },
      {
        "name": "filter[createdAt][gte]",
        "schema": "string",
        "required": false,
        "description": "Return only events with a created-at greater than or equal to the given timestamp."
      },
      {
        "name": "filter[createdAt][gt]",
        "schema": "string",
        "required": false,
        "description": "Return only events with a created-at greater than the given timestamp."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/invitations",
    "method": "sendEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invitations",
    "typeScriptTag": "invitations",
    "description": "Create invitation",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      },
      {
        "name": "email-address",
        "schema": "undefined",
        "required": true,
        "description": "",
        "example": "user@example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
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
    "url": "/v0/organizations/{organization-id}/legal-persons",
    "method": "listLegalPersons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Legal persons",
    "typeScriptTag": "legalPersons",
    "description": "List legal persons",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "include",
        "schema": "array",
        "required": false,
        "description": "For each legal person returned, include its latest verification (if one exists), and/or its latest risk rating (if one exists) in the response under the `included` attribute."
      },
      {
        "name": "filter[applicationStatus][eq]",
        "schema": "string",
        "required": false,
        "description": "Return only legal persons with the given application-status."
      },
      {
        "name": "filter[has][]",
        "schema": "array",
        "required": false,
        "description": "Return only legal persons with the given attributes."
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/legal-persons",
    "method": "createNewLegalPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Legal persons",
    "typeScriptTag": "legalPersons",
    "description": "Create legal person",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      },
      {
        "name": "display-name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY-NAME"
      },
      {
        "name": "legal-person-type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGAL-PERSON-TYPE"
      },
      {
        "name": "claims",
        "schema": "array",
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
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/memberships",
    "method": "listOrganizationMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "List organization memberships",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/onboarding/applications",
    "method": "createApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reliance onboarding",
    "typeScriptTag": "relianceOnboarding",
    "description": "Create an onboarding application",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      },
      {
        "name": "workflow-url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "/v0/workflows/wf.ICAgICB3b3JrZmxvdy1pZA"
      },
      {
        "name": "subject-profile",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "related-profiles",
        "schema": "array",
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
        "description": "Responds with bad-request if the body does not conform to the schema."
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/webhooks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get all webhooks for the organization",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/webhooks",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      },
      {
        "name": "webhook-destination-url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/griffin/webhook/"
      },
      {
        "name": "webhook-description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Griffin API webhook"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/organizations/{organization-id}/workflows",
    "method": "listOrganizationWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "List organization workflows",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/payees/{payee-id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "Get payee",
    "parameters": [
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEE-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/payees/{payee-id}",
    "method": "updatePayee",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "Update payee",
    "parameters": [
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEE-ID"
      },
      {
        "name": "payee-status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYEE-STATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/payments/{payment-id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/payments/{payment-id}/admissions",
    "method": "listAdmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List payment admissions",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/payments/{payment-id}/submissions",
    "method": "listSubmissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "List payment submissions",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/payments/{payment-id}/submissions",
    "method": "submitPaymentSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Submit payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT-ID"
      },
      {
        "name": "payment-scheme",
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "An error occurred when trying to submit the payment. See [https://docs.griffin.com/docs/errors/payment](https://docs.griffin.com/docs/errors/payment) for details."
      }
    ]
  },
  {
    "url": "/v0/roles",
    "method": "listAllRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/roles/{role-id}",
    "method": "getRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Get role",
    "parameters": [
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE-ID"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/submissions/{submission-id}",
    "method": "getSubmission",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get payment submission",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION-ID"
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
        "description": "Requires an API key to continue"
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
    "url": "/v0/users/{user-id}",
    "method": "getUserResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Shows the associated [user](https://docs.griffin.com/api)."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/users/{user-id}/api-keys",
    "method": "listActiveKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API keys",
    "typeScriptTag": "apiKeys",
    "description": "List API keys",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/users/{user-id}/memberships",
    "method": "listUserMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Memberships",
    "typeScriptTag": "memberships",
    "description": "List user memberships",
    "parameters": [
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page[after]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "page[before]",
        "schema": "string",
        "required": false,
        "description": "A base64 encoded opaque string returned in paginated responses.",
        "example": "djE6NL0DfDTSUk67KJKCi-L5Zg"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER-ID"
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
        "description": "Requires an API key to continue"
      }
    ]
  },
  {
    "url": "/v0/verifications/{verification-id}",
    "method": "getVerification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Verifications",
    "typeScriptTag": "verifications",
    "description": "Get verification",
    "parameters": [
      {
        "name": "verificationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATION-ID"
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
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}",
    "method": "getWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Fetch a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      },
      {
        "name": "webhook-description",
        "schema": "string",
        "description": "",
        "example": "Griffin API webhook"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}/actions/activate",
    "method": "activateAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Activate a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}/actions/deactivate",
    "method": "deactivateAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Deactivate a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}/actions/test",
    "method": "getLatestTestStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get the status of the latest test event",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/webhooks/{webhook-id}/actions/test",
    "method": "sendTestEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Send a test event to the webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOK-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "409",
        "description": "An existing test is in-flight"
      }
    ]
  },
  {
    "url": "/v0/workflows/{workflow-id}",
    "method": "getWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflow",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOW-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Requires an API key to continue"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="The Griffin API"
      apiBaseUrl="https://api.griffin.com"
      apiVersion=""
      endpoints={50}
      sdkMethods={69}
      schemas={82}
      parameters={199}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/griffin/openapi.yaml"
    />
  );
}
  