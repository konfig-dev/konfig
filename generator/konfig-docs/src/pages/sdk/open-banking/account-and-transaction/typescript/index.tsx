import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function OpenBankingAccountAndTransactionTypeScriptSdk() {
  return (
    <Sdk
      sdkName="open-banking-account-and-transaction-typescript-sdk"
      metaDescription="The trusted technology that connects banks, fintechs & technical providers - technology that's helping 6m users take control of their money."
      company="Open Banking"
      serviceName="Account and Transaction"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/logo.svg"
      clientNameCamelCase="openBanking"
      homepage="openbanking.org.uk"
      lastUpdated={new Date("2024-03-06T23:24:34.758Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/favicon.png"
      // Missing contactUrl
      contactEmail="ServiceDesk@openbanking.org.uk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/account-access-consents",
    "method": "createConsent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Access",
    "typeScriptTag": "accountAccess",
    "description": "Create Account Access Consents",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      },
      {
        "name": "Data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "Risk",
        "schema": "object",
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
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/account-access-consents/{ConsentId}",
    "method": "deleteConsent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account Access",
    "typeScriptTag": "accountAccess",
    "description": "Delete Account Access Consents",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ConsentId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/account-access-consents/{ConsentId}",
    "method": "getConsent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Access",
    "typeScriptTag": "accountAccess",
    "description": "Get Account Access Consents",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ConsentId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Accounts",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Accounts",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/balances",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Get Balances",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/beneficiaries",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Get Beneficiaries",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/direct-debits",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Debits",
    "typeScriptTag": "directDebits",
    "description": "Get Direct Debits",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/offers",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offers",
    "typeScriptTag": "offers",
    "description": "Get Offers",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/parties",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Parties",
    "typeScriptTag": "parties",
    "description": "Get Parties",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/party",
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Parties",
    "typeScriptTag": "parties",
    "description": "Get Parties",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/product",
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get Products",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Product details of Other Product which is not avaiable in the standard list"
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/scheduled-payments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled Payments",
    "typeScriptTag": "scheduledPayments",
    "description": "Get Scheduled Payments",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/standing-orders",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standing Orders",
    "typeScriptTag": "standingOrders",
    "description": "Get Standing Orders",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/statements",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Get Statements",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      },
      {
        "name": "fromStatementDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter statements FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      },
      {
        "name": "toStatementDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter statements TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/statements/{StatementId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Get Statements",
    "parameters": [
      {
        "name": "statementId",
        "schema": "string",
        "required": true,
        "description": "StatementId"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/statements/{StatementId}/file",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Get Statements",
    "parameters": [
      {
        "name": "statementId",
        "schema": "string",
        "required": true,
        "description": "StatementId"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/statements/{StatementId}/transactions",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Transactions",
    "parameters": [
      {
        "name": "statementId",
        "schema": "string",
        "required": true,
        "description": "StatementId"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/accounts/{AccountId}/transactions",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Transactions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      },
      {
        "name": "fromBookingDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter transactions FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      },
      {
        "name": "toBookingDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter transactions TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/balances",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Get Balances",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/beneficiaries",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Get Beneficiaries",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/direct-debits",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Debits",
    "typeScriptTag": "directDebits",
    "description": "Get Direct Debits",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/offers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offers",
    "typeScriptTag": "offers",
    "description": "Get Offers",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/party",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Parties",
    "typeScriptTag": "parties",
    "description": "Get Parties",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/products",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get Products",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Product details of Other Product which is not avaiable in the standard list"
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/scheduled-payments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled Payments",
    "typeScriptTag": "scheduledPayments",
    "description": "Get Scheduled Payments",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/standing-orders",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standing Orders",
    "typeScriptTag": "standingOrders",
    "description": "Get Standing Orders",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/statements",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statements",
    "typeScriptTag": "statements",
    "description": "Get Statements",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "fromStatementDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter statements FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      },
      {
        "name": "toStatementDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter statements TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Transactions",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP."
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id."
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using."
      },
      {
        "name": "fromBookingDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter transactions FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      },
      {
        "name": "toBookingDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter transactions TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "406",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "An array of detail error codes, and messages, and URLs to documentation to help remediation."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Account and Transaction API Specification"
      apiBaseUrl="https://openbanking.org.uk"
      apiVersion="3.1.7"
      endpoints={28}
      sdkMethods={29}
      schemas={209}
      parameters={175}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/open-banking/account-and-transaction/openapi.yaml"
    />
  );
}
  