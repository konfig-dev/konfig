import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MastercardTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="mastercard-typescript-sdk"
      metaDescription={`Mastercard is a global payment technology company that connects billions of consumers, financial institutions, merchants, governments, and businesses worldwide, enabling them to use electronic forms of payment securely and efficiently.`}
      company="Mastercard"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/logo.png"
      companyKebabCase="mastercard"
      clientNameCamelCase="mastercard"
      homepage="finicity.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/favicon.png"
      contactUrl="https://developer.mastercard.com/open-banking-us/documentation/support/"
      contactEmail="apisupport@mastercard.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","finance","open_banking","banking","consumer"]}
      methods={[
  {
    "url": "/aggregation/v2/partners/authentication",
    "method": "createAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Create Access Token",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "partnerSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "aqJ5Ic4SEVx2IgDQ6oR4"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A temporary access token to be passed in the `Finicity-App-Token` HTTP header of all subsequent API requests"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/partners/authentication",
    "method": "modifyPartnerSecret",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Modify Partner Secret",
    "parameters": [],
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
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/v2/generate",
    "method": "generateUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Connect URL",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "optionalConsumerInfo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "default"
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "isWebView",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/v2/generate/lite",
    "method": "generateLiteUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Lite Connect URL",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4222
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "default"
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "isWebView",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/v2/generate/fix",
    "method": "fixUrlGeneration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Fix Connect URL",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1007302745"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "default"
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "isWebView",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
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
      }
    ]
  },
  {
    "url": "/connect/v2/send/email",
    "method": "sendConnectEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Send Connect Email",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "default"
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "optionalConsumerInfo",
        "schema": "object",
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
      }
    ]
  },
  {
    "url": "/connect/v2/generate/jointBorrower",
    "method": "generateJointBorrowerUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Generate Connect URL - Joint Borrower",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "borrowers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "default"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/v2/generate/microentry/verify",
    "method": "verifyMicroEntryMicrodeposits",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Account Validation Assistant User verification of microdeposits",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "description": "",
        "example": "default"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Connect URL object"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/connect/v2/send/email/jointBorrower",
    "method": "sendEmailJointBorrower",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connect 🔗",
    "typeScriptTag": "connect 🔗",
    "description": "Send Connect Email - Joint Borrower",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "es"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "borrowers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/connect/"
      },
      {
        "name": "webhook",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://webhook.site/8d4421a7-d1d1-4f01-bb08-5370aff0321b"
      },
      {
        "name": "webhookContentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json",
        "default": "application/json"
      },
      {
        "name": "webhookData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "webhookHeaders",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "institutionSettings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "default"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "singleUseUrl",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/testing",
    "method": "enrollTestingCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Add Testing Customer",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "customerusername1"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456789"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-801-984-4200"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "myname@mycompany.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A new customer that was just enrolled"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/active",
    "method": "enrollActiveCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Add Customer",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "customerusername1"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "123456789"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-801-984-4200"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "myname@mycompany.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A new customer that was just enrolled"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers",
    "method": "findEnrolledUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customers",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "Username for exact match (will return 0 or 1 record)",
        "example": "customerusername1"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "\"testing\" or \"active\" to return only customers of that type, or leave empty to return all customers",
        "example": "active"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "The text you wish to match. Leave this empty if you wish to return all customers. Must be URL-encoded (see: [Handling Spaces in Queries](https://developer.mastercard.com/open-banking-us/documentation/codes-and-formats/)).",
        "example": "Search Value"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 1,
        "default": 25
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customers"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/application",
    "method": "getWithAppDataById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer With App Data by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity customer record with application info"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete Customer by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get Customer by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity customer record"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}",
    "method": "modifyById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Modify Customer by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Smith"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/consumer",
    "method": "getByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Get Consumer For Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity consumer record"
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
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/consumer",
    "method": "createConsumerRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Create Consumer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Smith"
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "434 W Ascension Way"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Murray"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UT"
      },
      {
        "name": "zip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "84123"
      },
      {
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1-801-984-4200"
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "999-99-9999"
      },
      {
        "name": "birthday",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "myname@mycompany.com"
      },
      {
        "name": "suffix",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PhD"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "A consumer that was just created"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Get Consumer by ID",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A finicity consumer record"
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
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}",
    "method": "modifyById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Consumers",
    "typeScriptTag": "consumers",
    "description": "Modify Consumer by ID",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Smith"
      },
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "434 W Ascension Way"
      },
      {
        "name": "city",
        "schema": "string",
        "description": "",
        "example": "Murray"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "",
        "example": "UT"
      },
      {
        "name": "zip",
        "schema": "string",
        "description": "",
        "example": "84123"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "1-801-984-4200"
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": "",
        "example": "999-99-9999"
      },
      {
        "name": "birthday",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "myname@mycompany.com"
      },
      {
        "name": "suffix",
        "schema": "string",
        "description": "",
        "example": "PhD"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts",
    "method": "getByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Accounts by Institution Login ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID",
        "example": "1007302745"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts",
    "method": "refreshCustomerByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Accounts by Institution Login ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID",
        "example": "1007302745"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts",
    "method": "refreshCustomerAccountByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Account by Institution Login ID for Data Access Tiers",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID",
        "example": "1007302745"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}",
    "method": "removeByInstitutionLogin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete Customer Accounts by Institution Login ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID",
        "example": "1007302745"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/accounts/{accountId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Account by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An account represents a bank account such as a checking or savings that the customer has added via the Connect interface."
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}",
    "method": "removeByCustomerIdAndAccountId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Delete Customer Account by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts",
    "method": "getCustomerAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "A filter to fetch account in the given status",
        "example": "pending"
      },
      {
        "name": "accountType",
        "schema": "string",
        "required": false,
        "description": "A filter to fetch accounts for the given type. Currently supported types: \"ava\"",
        "example": "ava"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts",
    "method": "refreshCustomerAggregation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/accounts",
    "method": "refreshCustomerData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Refresh Customer Accounts for Data Access Tiers",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts",
    "method": "getCustomerInstitutionAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Customer Accounts by Institution ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID",
        "example": 4222
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutions/{institutionId}/accounts/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (https://",
    "typeScriptTag": "accountsHttps:",
    "description": "Get Customer Accounts by Institution ID (https://",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID",
        "example": 4222
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of accounts with basic information of a customer"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/institutionLogins/{institutionLoginId}/accounts/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (https://",
    "typeScriptTag": "accountsHttps:",
    "description": "Get Customer Accounts by Institution Login ID (https://",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID",
        "example": "1007302745"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of accounts with basic information of a customer"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (https://",
    "typeScriptTag": "accountsHttps:",
    "description": "Get Customer Account by ID (https://",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An account represents a bank account such as a checking or savings that the customer has added via the Connect interface."
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/simple",
    "method": "getBasicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts (https://",
    "typeScriptTag": "accountsHttps:",
    "description": "Get Customer Accounts (https://",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of accounts with basic information of a customer"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions/historic",
    "method": "loadHistoricTransactionsForCustomerAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Load Historic Transactions for Customer Account",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "203",
        "description": ""
      },
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/owner",
    "method": "getAccountOwnerDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Account Owner",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Owner of a customer account"
      },
      {
        "statusCode": "203",
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
      }
    ]
  },
  {
    "url": "/aggregation/v3/customers/{customerId}/accounts/{accountId}/owner",
    "method": "getAccountOwnerDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Account Owner Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "withInsights",
        "schema": "boolean",
        "required": false,
        "description": "If this parameter is true, Identity Insights data will be returned along with the account owner information",
        "example": false
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/applications",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Register App",
    "parameters": [
      {
        "name": "appDescription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "The app that makes your budgeting experience awesome"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Awesome Budget App"
      },
      {
        "name": "appUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.finicity.com/"
      },
      {
        "name": "ownerAddressLine1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "434 W Ascension Way"
      },
      {
        "name": "ownerAddressLine2",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Suite #200"
      },
      {
        "name": "ownerCity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Murray"
      },
      {
        "name": "ownerCountry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USA"
      },
      {
        "name": "ownerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Finicity"
      },
      {
        "name": "ownerPostalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "84123"
      },
      {
        "name": "ownerState",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UT"
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/applications/{preAppId}",
    "method": "updateRegistration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Modify App Registration",
    "parameters": [
      {
        "name": "preAppId",
        "schema": "string",
        "required": true,
        "description": "The application registration tracking ID",
        "example": "2581"
      },
      {
        "name": "appDescription",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "The app that makes your budgeting experience awesome"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Awesome Budget App"
      },
      {
        "name": "appUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.finicity.com/"
      },
      {
        "name": "ownerAddressLine1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "434 W Ascension Way"
      },
      {
        "name": "ownerAddressLine2",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Suite #200"
      },
      {
        "name": "ownerCity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Murray"
      },
      {
        "name": "ownerCountry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USA"
      },
      {
        "name": "ownerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Finicity"
      },
      {
        "name": "ownerPostalCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "84123"
      },
      {
        "name": "ownerState",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UT"
      },
      {
        "name": "image",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgICAKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB2ZXJzaW9uPSIxLjEiCiAgIHZpZXdCb3g9IjAgMCAwIDAiCiAgIGhlaWdodD0iMCIKICAgd2lkdGg9IjAiPgogICAgPGcvPgo8L3N2Zz4K"
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/partners/applications",
    "method": "getApplicationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Get App Registration Status",
    "parameters": [
      {
        "name": "preAppId",
        "schema": "string",
        "required": false,
        "description": "The application registration tracking ID",
        "example": "2581"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": false,
        "description": "The application ID",
        "example": "123456789"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Look up app registration requests by status",
        "example": "P"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": false,
        "description": "Look up app registration requests by app name",
        "example": "Awesome Budget App"
      },
      {
        "name": "submittedDate",
        "schema": "integer",
        "required": false,
        "description": "Look up app registration requests by the date they were submitted",
        "example": 1607450357
      },
      {
        "name": "modifiedDate",
        "schema": "integer",
        "required": false,
        "description": "Look up app registration requests by the date the request was updated. This can be used to determine when a request was updated to \"A\" or \"R\".",
        "example": 1607450357
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 20,
        "default": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response for the Get App Registration Status API which returns an array of status objects"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/applications/{applicationId}",
    "method": "assignApplications",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Set Customer App ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "The application ID",
        "example": "123456789"
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/institutionLogins/{institutionLoginId}/migration",
    "method": "migrateInstitutionLoginAccounts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "App Registration",
    "typeScriptTag": "appRegistration",
    "description": "Migrate Institution Login Accounts",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": true,
        "description": "The institution login ID",
        "example": "1007302745"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer accounts"
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
      }
    ]
  },
  {
    "url": "/institution/v2/certifiedInstitutions/rssd",
    "method": "getCertifiedInstitutionsWithRssd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Certified Institutions With RSSD",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term (financial institution `name` field). Leave empty for all FIs.",
        "example": "finbank"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 1,
        "default": 25
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\"",
        "example": "voa"
      },
      {
        "name": "supportedCountries",
        "schema": "array",
        "required": false,
        "description": "A list of country codes, '*' for all countries.",
        "example": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of financial institutions from the Get Certified Institutions API"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/institution/v2/institutions",
    "method": "searchFinancialInstitutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Institutions",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term (financial institution `name` field). Leave empty for all FIs.",
        "example": "finbank"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 1,
        "default": 25
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\"",
        "example": "voa"
      },
      {
        "name": "supportedCountries",
        "schema": "array",
        "required": false,
        "description": "A list of country codes, '*' for all countries.",
        "example": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of financial institutions from the Get Institutions API"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/institution/v2/certifiedInstitutions",
    "method": "listCertifiedInstitutions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Certified Institutions",
    "parameters": [
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term (financial institution `name` field). Leave empty for all FIs.",
        "example": "finbank"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 1,
        "default": 25
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "A product type: \"transAgg\", \"ach\", \"stateAgg\", \"voi\", \"voa\", \"aha\", \"availBalance\", \"accountOwner\"",
        "example": "voa"
      },
      {
        "name": "supportedCountries",
        "schema": "array",
        "required": false,
        "description": "A list of country codes, '*' for all countries.",
        "example": "us"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of financial institutions from the Get Certified Institutions API"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/institution/v2/institutions/{institutionId}",
    "method": "getByIdDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Institution by ID",
    "parameters": [
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID",
        "example": 4222
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
      }
    ]
  },
  {
    "url": "/institution/v2/institutions/{institutionId}/branding",
    "method": "getBrandingById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Institutions",
    "typeScriptTag": "institutions",
    "description": "Get Institution Branding by ID",
    "parameters": [
      {
        "name": "institutionId",
        "schema": "integer",
        "required": true,
        "description": "The institution ID",
        "example": 4222
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voa",
    "method": "customerVoaReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate VOA Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOA report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voaHistory",
    "method": "generateVoaWithIncomeReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate VOA With Income Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": "",
        "example": 50
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOA with income report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/preQualVoa",
    "method": "getCheckingSavingsInvestmentAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate Prequalification (https:// Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Prequalification report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/assetSummary",
    "method": "getAssetSummary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Assets",
    "typeScriptTag": "verifyAssets",
    "description": "Generate Prequalification (https:// Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Prequalification report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voi",
    "method": "createVoiReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOI Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": "",
        "example": 50
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOI report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voePayroll",
    "method": "generateVoePayrollReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOE - Payroll Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "payrollData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "payStatementsFromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "marketSegment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mortgage"
      },
      {
        "name": "excludeEmpInfo",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "31"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Payroll report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voeTransactions",
    "method": "generateVoeTransactionsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOE - Transactions Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "reportId",
        "schema": "string",
        "description": "",
        "example": "u4hstnnak45g"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": "",
        "example": 50
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOE Transactions report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/payStatement",
    "method": "generatePayStatementReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate Pay Statement Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "paystatementReport",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Pay Statement report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voieTxVerify/withInterview",
    "method": "generateVoiePaystubWithTxVerifyReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOIE - Paystub (with TXVerify) Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "voieWithInterviewData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 50
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOIE Paystub With TXVerify report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voieTxVerify/withStatement",
    "method": "generateVoiePaystubReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOIE - Paystub Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "voieWithStatementData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A VOIE Paystub report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/voiePayroll",
    "method": "refreshVoiePayrollReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Verify Income and Employment",
    "typeScriptTag": "verifyIncomeAndEmployment",
    "description": "Generate VOIE - Payroll Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "payrollData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "payStatementsFromDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "marketSegment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Mortgage"
      },
      {
        "name": "excludeEmpInfo",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "31"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Payroll report being generated"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/statement",
    "method": "getCustomerStatementInPdf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Statements",
    "typeScriptTag": "bankStatements",
    "description": "Get Customer Account Statement",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "index",
        "schema": "integer",
        "required": false,
        "description": "Request statements from 1-24. By default, 1 is the most recent statement. Increase the index value to count back (by month) and retrieve its most recent statement.",
        "example": 1,
        "default": 1
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of statement to retrieve",
        "example": "taxStatement"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "203",
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/statement",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Statements",
    "typeScriptTag": "bankStatements",
    "description": "Generate Statement Report",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "statementReportData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Statement report being generated"
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
      }
    ]
  },
  {
    "url": "/aggregation/v3/customers/{customerId}/accounts/{accountId}/statement",
    "method": "getMultipleStatements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Statements",
    "typeScriptTag": "bankStatements",
    "description": "Get Customer Account Multiple Statements",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "index",
        "schema": "string",
        "required": false,
        "description": "Request statements with comma-separated indexes ranged between 1-24. The default value is 1 and it will return the most recent statement. Increasing the index will return older statements, for example, setting the index value to 6 will return a statement from six months ago.",
        "example": "1,2,3,4,5,6",
        "default": "1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of customer account statements"
      },
      {
        "statusCode": "203",
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
      }
    ]
  },
  {
    "url": "/aggregation/v3/customers/{customerId}/transactions",
    "method": "getAllCustomerTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get All Customer Transactions",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": true,
        "description": "A start date",
        "example": 1607450357
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": true,
        "description": "A end date",
        "example": 1607450357
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 1,
        "default": 25
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Date sort order: \"asc\" for ascending, \"desc\" for descending",
        "example": "desc",
        "default": "desc"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "If pending transactions must be included",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of transactions"
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/transactions/{transactionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Customer Transaction by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "transactionId",
        "schema": "integer",
        "required": true,
        "description": "A transaction ID",
        "example": 21284820852
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
      }
    ]
  },
  {
    "url": "/aggregation/v4/customers/{customerId}/accounts/{accountId}/transactions",
    "method": "getCustomerAccountTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get Customer Account Transactions",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "required": true,
        "description": "A start date",
        "example": 1607450357
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": true,
        "description": "A end date",
        "example": 1607450357
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Index of the page of results to return",
        "example": 1,
        "default": 1
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results per page",
        "example": 1,
        "default": 25
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Date sort order: \"asc\" for ascending, \"desc\" for descending",
        "example": "desc",
        "default": "desc"
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "If pending transactions must be included",
        "example": false,
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of transactions"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/transactions",
    "method": "get24MonthsHistoryAndGenerateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Generate Transactions Report",
    "parameters": [
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "toDate",
        "schema": "integer",
        "required": true,
        "description": "A end date",
        "example": 1607450357
      },
      {
        "name": "includePending",
        "schema": "boolean",
        "required": false,
        "description": "If pending transactions must be included",
        "example": false,
        "default": false
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A Transaction report being generated"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/reports/balance-analytics/userTypes/{userType}",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Generate Balance Analytics Report - Personal/Business",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "UserType indicates if the request is for a business or personal use case, Allowed values: business/personal.",
        "example": "personal"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "analyticsReportData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/reports/cashflow-analytics/userTypes/{userType}",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow Analytics",
    "typeScriptTag": "cashFlowAnalytics",
    "description": "Generate Cashflow Analytics Report - Personal/Business",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "userType",
        "schema": "string",
        "required": true,
        "description": "UserType indicates if the request is for a business or personal use case, Allowed values: business/personal.",
        "example": "personal"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "analyticsReportData",
        "schema": "object",
        "description": ""
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/payStatements",
    "method": "uploadForCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pay Statements",
    "typeScriptTag": "payStatements",
    "description": "Store Customer Pay Statement",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "lastPayPeriod"
      },
      {
        "name": "statement",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VGhpcyBtdXN0IGJlIGFuIGltYWdl"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An asset"
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
      }
    ]
  },
  {
    "url": "/aggregation/v2/customers/{customerId}/accounts/{accountId}/loanDetails",
    "method": "getLoanPaymentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Loan Payment Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Loan payment details for a customer account"
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
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/portfolios/{portfolioId}",
    "method": "getMostRecentReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get Portfolio by Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "portfolioId",
        "schema": "string",
        "required": true,
        "description": "A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports.",
        "example": "y4zsgccj4xpw-6-port"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush",
    "method": "disableNotifications",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Disable TxPush Notifications",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/txpush",
    "method": "subscribeNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Subscribe to TxPush Notifications",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://www.mydomain.com/txpush/listener"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/transactions",
    "method": "injectTestTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Create TxPush Test Transaction",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a testing transaction description"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": -4.25
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pending",
        "default": "active"
      },
      {
        "name": "postedDate",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1607450357
      },
      {
        "name": "transactionDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1607450357
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Response for TxPush test transaction"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/subscriptions/{subscriptionId}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TxPush",
    "typeScriptTag": "txPush",
    "description": "Delete TxPush Subscription",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "subscriptionId",
        "schema": "integer",
        "required": true,
        "description": "The subscription ID",
        "example": 17554874
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}/portfolios/{portfolioId}",
    "method": "getPortfolioByConsumer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios",
    "typeScriptTag": "portfolios",
    "description": "Get Portfolio by Consumer",
    "parameters": [
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
      },
      {
        "name": "portfolioId",
        "schema": "string",
        "required": true,
        "description": "A portfolio ID with the portfolio version number. Using the portfolio number without a version number will return the most recently generated reports.",
        "example": "y4zsgccj4xpw-6-port"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/details",
    "method": "getAchDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Account ACH Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The routing and account number information to initiate ACH transfers"
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
      }
    ]
  },
  {
    "url": "/decisioning/v3/customers/{customerId}/reports/{reportId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Report by Customer and ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "ID of the report",
        "example": "u4hstnnak45g"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "required": false,
        "description": "The name of the entity you are retrieving the report on behalf of",
        "example": "Some entity"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.",
        "example": "3F"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A report"
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
      }
    ]
  },
  {
    "url": "/decisioning/v3/consumers/{consumerId}/reports/{reportId}",
    "method": "getByConsumerAndId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Report by Consumer and ID",
    "parameters": [
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.",
        "example": "3F"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "ID of the report",
        "example": "u4hstnnak45g"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "required": false,
        "description": "The name of the entity you are retrieving the report on behalf of",
        "example": "Some entity"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A report"
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
      }
    ]
  },
  {
    "url": "/decisioning/v1/customers/{customerId}/reports",
    "method": "byCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Reports by Customer ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.",
        "example": "3F"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/decisioning/v1/consumers/{consumerId}/reports",
    "method": "byConsumerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get Reports by Consumer ID",
    "parameters": [
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.",
        "example": "3F"
      },
      {
        "name": "consumerId",
        "schema": "string",
        "required": true,
        "description": "The consumer ID",
        "example": "0bf46322c167b562e6cbed9d40e19a4c"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/assets/{assetId}",
    "method": "getBinaryFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assets",
    "typeScriptTag": "assets",
    "description": "Get Asset by Customer and ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "assetId",
        "schema": "string",
        "required": true,
        "description": "The asset ID",
        "example": "097545c5-1c2a-4f20-a5ef-77f0820344c9-2018601178"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/availableBalance/live",
    "method": "getAvailableBalanceLive",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Available Balance - Live",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/customers/{customerId}/accounts/{accountId}/availableBalance",
    "method": "getLatestCachedBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get Available Balance",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/cashFlowBusiness",
    "method": "generateReportBusiness",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow",
    "typeScriptTag": "cashFlow",
    "description": "Generate Cash Flow Report - Business",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": "",
        "example": 50
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
      }
    ]
  },
  {
    "url": "/decisioning/v2/customers/{customerId}/cashFlowPersonal",
    "method": "generatePersonalReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow",
    "typeScriptTag": "cashFlow",
    "description": "Generate Cash Flow Report - Personal",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "A Report Listener URL to receive notifications. The webhook must respond to the Finicity API with a 2xx HTTP status code.",
        "example": "https://finicity-test/webhook"
      },
      {
        "name": "accountIds",
        "schema": "string",
        "description": "",
        "example": "5011648377 5011648378 5011648379"
      },
      {
        "name": "reportCustomFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "showNsf",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "fromDate",
        "schema": "integer",
        "description": "",
        "example": 1607450357
      },
      {
        "name": "incomeStreamConfidenceMinimum",
        "schema": "integer",
        "description": "",
        "example": 50
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
      }
    ]
  },
  {
    "url": "/microentry/v1/customers/{customerId}",
    "method": "initiateMicroEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Validation Assistance",
    "typeScriptTag": "accountValidationAssistance",
    "description": "Initiate Micro Entries",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "institutionLoginId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1007302745"
      },
      {
        "name": "receiver",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.mydomain.com/listener"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/microentry/v1/customers/{customerId}/accounts/{accountId}/amounts",
    "method": "verifyMicroEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Validation Assistance",
    "typeScriptTag": "accountValidationAssistance",
    "description": "Verify Micro Entries",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
      },
      {
        "name": "amounts",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          0.12,
          0.15
        ]
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
      }
    ]
  },
  {
    "url": "/microentry/v1/customers/{customerId}/accounts/{accountId}",
    "method": "getMicroEntriesDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account Validation Assistance",
    "typeScriptTag": "accountValidationAssistance",
    "description": "Get Micro Entries Details",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The account ID",
        "example": "5011648377"
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
      }
    ]
  },
  {
    "url": "/analytics/balance/v1/customer/{customerId}",
    "method": "generateAnalyticsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Generate Balance Analytics",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports.",
        "example": "abc123"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": "",
        "example": 730
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/balance/v1/customer/{customerId}/fcra",
    "method": "generateFcraAnalyticsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Generate Balance Analytics - FCRA",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports.",
        "example": "abc123"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": "",
        "example": 730
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/cashflow/v1/customer/{customerId}",
    "method": "generateAnalytics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow Analytics",
    "typeScriptTag": "cashFlowAnalytics",
    "description": "Generate Cash Flow Analytics",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports.",
        "example": "abc123"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": "",
        "example": 730
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/cashflow/v1/customer/{customerId}/fcra",
    "method": "generateFcraAnalyticsReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cash Flow Analytics",
    "typeScriptTag": "cashFlowAnalytics",
    "description": "Generate Cash Flow Analytics - FCRA",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports.",
        "example": "abc123"
      },
      {
        "name": "accountIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lengthOfReport",
        "schema": "integer",
        "description": "",
        "example": 730
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/payment-history/v1/customer/{customerId}",
    "method": "generateCustomerPaymentReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment History",
    "typeScriptTag": "paymentHistory",
    "description": "Generate Payment History",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports.",
        "example": "abc123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/payment-history/v1/customer/{customerId}/fcra",
    "method": "generateFcraPaymentReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment History",
    "typeScriptTag": "paymentHistory",
    "description": "Generate Payment History - FCRA",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "A customer ID",
        "example": "1005061234"
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "Partner-provided reference number to correlate reports.",
        "example": "abc123"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response given when analytics were generated successfully, providing the caller with a report ID which can be used to retrieve the report as JSON or a PDF."
      },
      {
        "statusCode": "400",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "409",
        "description": "OBB Error response message"
      }
    ]
  },
  {
    "url": "/analytics/data/v1/{obb_report_id}",
    "method": "getReportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Get OBB Analytics Report",
    "parameters": [
      {
        "name": "obbReportId",
        "schema": "string",
        "required": true,
        "description": "Report ID generated and returned by OBB products",
        "example": "bcab9592-e032-4e7b-b737-0380619a0573"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cash Flow Analytics, Balance Analytics, and Payment History report data as JSON"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/analytics/data/v1/{obb_report_id}/fcra",
    "method": "getReportDataFcra",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balance Analytics",
    "typeScriptTag": "balanceAnalytics",
    "description": "Get OBB Analytics Report - FCRA",
    "parameters": [
      {
        "name": "obbReportId",
        "schema": "string",
        "required": true,
        "description": "Report ID generated and returned by OBB products",
        "example": "bcab9592-e032-4e7b-b737-0380619a0573"
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": true,
        "description": "2-digit code from [Permissible Purpose Codes](https://developer.mastercard.com/open-banking-us/documentation/products/lend/report-handling/permissible-purpose-codes/), specifying the reason for retrieving this report. Required for retrieving some reports.",
        "example": "3F"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Cash Flow Analytics, Balance Analytics, and Payment History report data as JSON"
      },
      {
        "statusCode": "401",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "403",
        "description": "OBB Error response message"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/accessKey",
    "method": "generateKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Third Party Access",
    "typeScriptTag": "thirdPartyAccess",
    "description": "Generate Third Party Access Key",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "thirdPartyPartnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "provenance",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing the third party access key receipt\n\n  * `customerId`: This is recipient's customerId represented as a\n  pseudo identifier.\n  * `accountId`: This is the value provided to recipient\n  represented as a pseudo identifier for the accountId."
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
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/accessKey/{consentReceiptId}",
    "method": "revokePartnersAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Third Party Access",
    "typeScriptTag": "thirdPartyAccess",
    "description": "Revoke Third Party Access",
    "parameters": [
      {
        "name": "consentReceiptId",
        "schema": "string",
        "required": true,
        "description": "Third party access key receipt ID",
        "example": "cr_4pfI3r1X8aOHrDDwrwC01NHFxOXlT1"
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/aggregation/v1/partners/accessKey/{consentReceiptId}",
    "method": "updateAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Third Party Access",
    "typeScriptTag": "thirdPartyAccess",
    "description": "Update Third Party Access",
    "parameters": [
      {
        "name": "consentReceiptId",
        "schema": "string",
        "required": true,
        "description": "Third party access key receipt ID",
        "example": "cr_4pfI3r1X8aOHrDDwrwC01NHFxOXlT1"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1005061234"
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "thirdPartyPartnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1234583871234"
      },
      {
        "name": "provenance",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing the third party access key receipt\n\n  * `customerId`: This is recipient's customerId represented as a\n  pseudo identifier.\n  * `accountId`: This is the value provided to recipient\n  represented as a pseudo identifier for the accountId."
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
      }
    ]
  },
  {
    "url": "/customers/institution-logins/{institution_login_id}/authorization-details",
    "method": "getAuthorizationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customer Authorization Details",
    "typeScriptTag": "customerAuthorizationDetails",
    "description": "Returns customer authorization details for the institution login identification.",
    "parameters": [
      {
        "name": "institutionLoginId",
        "schema": "integer",
        "required": true,
        "description": "Institution login id of the customer.",
        "example": 7008461438
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
      }
    ]
  },
  {
    "url": "/business-services/customers/{customer_id}/businesses",
    "method": "getDetailsByCustomerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Get Business for Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/business-services/customers/{customer_id}/businesses",
    "method": "createNewBusiness",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Create a New Business for a Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer",
        "example": "1005061234"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABC Tires Inc"
      },
      {
        "name": "personallyLiable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "myname@mycompany.com"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Nonprofit"
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A1234561Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
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
    "url": "/business-services/businesses/{business_id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Get Business by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer",
        "example": "1005061234"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/business-services/businesses/{business_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Businesses API",
    "typeScriptTag": "businessesApi",
    "description": "Update Business by ID",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the customer",
        "example": "1005061234"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABC Tires Inc"
      },
      {
        "name": "personallyLiable",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "address",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.finicity.com/"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "myname@mycompany.com"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Nonprofit"
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A1234561Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
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
      apiTitle="Open Banking"
      apiBaseUrl="https://api.finicity.com"
      apiVersion="1.16.2"
      endpoints={93}
      sdkMethods={104}
      schemas={510}
      parameters={469}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mastercard/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mastercard/openapi.yaml"
      
    />
  );
}
  