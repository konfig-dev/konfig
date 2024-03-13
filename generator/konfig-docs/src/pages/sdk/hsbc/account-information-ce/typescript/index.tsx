import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function HsbcAccountInformationCeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="hsbc-account-information-ce-typescript-sdk"
      metaDescription={`HSBC, also known as The Hongkong and Shanghai Banking Corporation, is a multinational banking and financial services organization. It offers a wide range of services including retail banking, wealth management, commercial banking, and global banking and markets. HSBC operates in numerous countries and territories, serving millions of customers worldwide with its comprehensive banking solutions.`}
      company="HSBC"
      serviceName="AccountInformationCE"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/logo.png"
      clientNameCamelCase="hsbcAccountInformationCe"
      homepage="hsbc.com"
      lastUpdated={new Date("2024-03-13T17:47:38.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","banking","payments","online_payments","fintech","checkout_experience","multinational","financial_services","wealth_management","global_banking","retail_banking","commercial_banking","open_banking"]}
      methods={[
  {
    "url": "/account-access-consents",
    "method": "createConsent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Access Consents",
    "typeScriptTag": "accountAccessConsents",
    "description": "Create Account Access Consents",
    "parameters": [
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "tag": "Account Access Consents",
    "typeScriptTag": "accountAccessConsents",
    "description": "Delete Account Access Consents",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ConsentId",
        "example": "7404e99b-1a4d-4b08-b441-c327661527f0"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "method": "getByConsentId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Access Consents",
    "typeScriptTag": "accountAccessConsents",
    "description": "Get Account Access Consents",
    "parameters": [
      {
        "name": "consentId",
        "schema": "string",
        "required": true,
        "description": "ConsentId",
        "example": "7404e99b-1a4d-4b08-b441-c327661527f0"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "method": "getBalancesByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Accounts by AccountId",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Get Account Balances",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "url": "/accounts/{AccountId}/direct-debits",
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Debits",
    "typeScriptTag": "directDebits",
    "description": "Get Account Direct Debits",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "url": "/accounts/{AccountId}/scheduled-payments",
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled Payments",
    "typeScriptTag": "scheduledPayments",
    "description": "Get Account Scheduled Payments",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standing Orders",
    "typeScriptTag": "standingOrders",
    "description": "Get Account Standing Orders",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Account Transactions",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
      },
      {
        "name": "fromBookingDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter transactions FROM\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component.",
        "example": "2023-01-04T13:21:07+00:00"
      },
      {
        "name": "toBookingDateTime",
        "schema": "string",
        "description": "The UTC ISO 8601 Date Time to filter transactions TO\nNB Time component is optional - set to 00:00:00 for just Date.\nIf the Date Time contains a timezone, the ASPSP must ignore the timezone component.",
        "example": "2023-02-04T13:21:07+00:00"
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
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Get Account Beneficiaries",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Parties",
    "typeScriptTag": "parties",
    "description": "Get Account Parties",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
    "description": "Get Account Products",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "AccountId",
        "example": "ThR-RpLMV5lZzDu8vrfEFg"
      },
      {
        "name": "xFapiAuthDate",
        "schema": "string",
        "required": false,
        "description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
        "example": "Tue, 18 Apr 2023 14:42:25 UTC"
      },
      {
        "name": "xFapiCustomerIpAddress",
        "schema": "string",
        "required": false,
        "description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
        "example": "12.201.45.125"
      },
      {
        "name": "xFapiInteractionId",
        "schema": "string",
        "required": false,
        "description": "An RFC4122 UID used as a correlation id.",
        "example": "20177a90-5e29-43ba-bea0-cc6c344a9d32"
      },
      {
        "name": "xCustomerUserAgent",
        "schema": "string",
        "required": false,
        "description": "Indicates the user-agent that the PSU is using.",
        "example": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
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
  }
]
    }
      language="TypeScript"
      apiTitle="Account Information API"
      apiBaseUrl="https://sandbox.ob.hsbcnet.com/mock/ce/obie/open-banking/v3.1/aisp"
      apiVersion="3.1.11"
      endpoints={12}
      sdkMethods={13}
      schemas={205}
      parameters={80}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hsbc/accountinformationce/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hsbc/accountinformationce/openapi.yaml"
      developerDocumentation="develop.hsbc.com/ob-api-documentation/account-information-ce-hsbcnet/endpoints"
    />
  );
}
  