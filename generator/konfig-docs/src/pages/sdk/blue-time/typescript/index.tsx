import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BlueTimeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="blue-time-typescript-sdk"
      metaDescription={`Don’t stress over integrating with multiple providers to fulfill your payment needs – Unify your payment processes effortlessly with Orchestra’s comprehensive Payment Orchestration Platform. By integrating once, you gain access to a powerful, all-encompassing, yet simple-to-integrate API that streamlines complex payment procedures, saving you time and resources.`}
      company="BlueTime"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/logo.png"
      companyKebabCase="blue-time"
      clientNameCamelCase="blueTime"
      homepage="bluetime.io/"
      lastUpdated={new Date("2024-03-26T23:22:05.022Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","financial_services","fintech","online_payments"]}
      methods={[
  {
    "url": "/CustomForms",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomForms",
    "typeScriptTag": "customForms",
    "description": "List Custom Forms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Custom Form meta-data retrieval"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CustomForms/{name}",
    "method": "removeForm",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomForms",
    "typeScriptTag": "customForms",
    "description": "Delete a Custom Forms",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The unique identifier provided to this custom form when originally uploaded",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/CustomForms/{name}",
    "method": "uploadFormFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomForms",
    "typeScriptTag": "customForms",
    "description": "Upload a custom form folder (add or replace)",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The unique name to identify this form in PCI Booking. You will use this value whenever referencing this custom form.",
        "example": "NAME"
      },
      {
        "name": "ContentType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ContentDisposition",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Headers",
        "schema": "object",
        "description": ""
      },
      {
        "name": "Length",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FileName",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for returning the url to an uploaded custom form"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsMerchants",
    "method": "listMerchants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ThreeDsMerchants",
    "typeScriptTag": "threeDsMerchants",
    "description": "List Merchants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsMerchants/{name}",
    "method": "removeMerchant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ThreeDsMerchants",
    "typeScriptTag": "threeDsMerchants",
    "description": "Delete a Merchant",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of merchant",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsMerchants/{name}",
    "method": "getMerchantInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ThreeDsMerchants",
    "typeScriptTag": "threeDsMerchants",
    "description": "Get a Merchant",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of merchant",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for response of 3DS Merchant"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsMerchants/{name}",
    "method": "updateMerchantInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ThreeDsMerchants",
    "typeScriptTag": "threeDsMerchants",
    "description": "Set a merchant",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Name of merchant",
        "example": "NAME"
      },
      {
        "name": "merchantName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTNAME"
      },
      {
        "name": "merchantDisplayName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTDISPLAYNAME"
      },
      {
        "name": "merchantRequestorIdSuffix",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTREQUESTORIDSUFFIX"
      },
      {
        "name": "merchantCountry",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTCOUNTRY"
      },
      {
        "name": "merchantUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTURL"
      },
      {
        "name": "acquirerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACQUIRERNAME"
      },
      {
        "name": "brands",
        "schema": "array",
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
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations",
    "method": "getTokenStartOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Get a token to start a card operation",
    "parameters": [
      {
        "name": "ttl",
        "schema": "integer",
        "required": true,
        "description": "Time to live for the returned token",
        "example": 0
      },
      {
        "name": "threeDsSessionModel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "vld",
        "schema": "string",
        "description": ""
      },
      {
        "name": "3ds",
        "schema": "string",
        "description": ""
      },
      {
        "name": "crg",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tkn",
        "schema": "string",
        "description": ""
      },
      {
        "name": "crg_d",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with multiple tokens"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations/validate",
    "method": "performValidation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Perform card validation",
    "parameters": [
      {
        "name": "iin",
        "schema": "string",
        "required": true,
        "description": "Card prefix",
        "example": "IIN"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stateProvince",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with payload"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations/charge",
    "method": "performUniversalPaymentGatewayCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Perform Univesal payment gateway charge operation",
    "parameters": [
      {
        "name": "payerDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "myRef",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with payload"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations/store",
    "method": "tokenizeAndStore",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Tokenize and store card number",
    "parameters": [
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with payload"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations/opValidate",
    "method": "performValidation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Perform validation of the operation using to signed data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Class to represent signed data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations/topBrands",
    "method": "getTopBrandsLookup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Return top credit card brands for lookup of up to 5 first digits. It covers 90% of the cases",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of to brands and logos"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CardOperations/brand",
    "method": "getBrandPrefix",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CardOperations",
    "typeScriptTag": "cardOperations",
    "description": "Return brand of card prefix.",
    "parameters": [
      {
        "name": "iin",
        "schema": "string",
        "required": true,
        "description": "Card prefix",
        "example": "IIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output model for Brand lookup"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CvvOperations",
    "method": "getTokenCvvOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CvvOperations",
    "typeScriptTag": "cvvOperations",
    "description": "Get a token to start a CVV operation",
    "parameters": [
      {
        "name": "ttl",
        "schema": "integer",
        "required": true,
        "description": "Time to live for the returned token",
        "example": 0
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      },
      {
        "name": "crg_d",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with a single Token"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/CvvOperations/charge",
    "method": "performUniversalPaymentGatewayCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CvvOperations",
    "typeScriptTag": "cvvOperations",
    "description": "Perform Univesal payment gateway charge operation",
    "parameters": [
      {
        "name": "cvv",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CVV"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with payload"
      }
    ]
  },
  {
    "url": "/CvvOperations/opValidate",
    "method": "validateOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CvvOperations",
    "typeScriptTag": "cvvOperations",
    "description": "Perform validation of the operation using signed data from charge operation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for signing a Cvv Operation"
      }
    ]
  },
  {
    "url": "/NetworkToken",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "NetworkToken",
    "typeScriptTag": "networkToken",
    "description": "Delete a Network-token",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      },
      {
        "name": "brand",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      },
      {
        "name": "reason",
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
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/NetworkToken",
    "method": "cardTokenize",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "NetworkToken",
    "typeScriptTag": "networkToken",
    "description": "Network-tokenize a card",
    "parameters": [
      {
        "name": "tokenizationRequest",
        "schema": "object",
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/PaymentGatewayAccounts/{name}",
    "method": "removeAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PaymentGatewayAccounts",
    "typeScriptTag": "paymentGatewayAccounts",
    "description": "Delete a Payment Gateway Account",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "A unique name of this Payment Gateway Account",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/PaymentGatewayAccounts/{name}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentGatewayAccounts",
    "typeScriptTag": "paymentGatewayAccounts",
    "description": "Retrieve Payment Gateway Account",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "A unique name of this Payment Gateway Account",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output Model for designating a payment gateway account"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/PaymentGatewayAccounts/{name}",
    "method": "addOrReplace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PaymentGatewayAccounts",
    "typeScriptTag": "paymentGatewayAccounts",
    "description": "Add or Replace a Payment Gateway Account",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "A unique name of this Payment Gateway Account",
        "example": "NAME"
      },
      {
        "name": "paymentGatewayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output Model for designating a payment gateway account"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/PaymentGatewayAccounts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentGatewayAccounts",
    "typeScriptTag": "paymentGatewayAccounts",
    "description": "List Payment Gateway Accounts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/PaymentGateway",
    "method": "listGateways",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PaymentGateway",
    "typeScriptTag": "paymentGateway",
    "description": "List all payment gateways",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/PaymentGateway/charge",
    "method": "performChargeOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentGateway",
    "typeScriptTag": "paymentGateway",
    "description": "Perform a payment gateway charge operation",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "isDigital",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "orderDesc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payerDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "myRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccountName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificateName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "networkTokenBrand",
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
        "statusCode": "202",
        "description": "Accepted (for future processing by payment gateway)"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "409",
        "description": "Conflict - rejected by payment gateway"
      },
      {
        "statusCode": "500",
        "description": "Error with payment gateway"
      },
      {
        "statusCode": "503",
        "description": "Temporary failure with payment gateway"
      }
    ]
  },
  {
    "url": "/PaymentGateway/authorize",
    "method": "performAuthorizeOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PaymentGateway",
    "typeScriptTag": "paymentGateway",
    "description": "Perform a payment gateway authorize operation",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "isDigital",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "orderDesc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payerDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "myRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccountName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificateName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "networkTokenBrand",
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
        "statusCode": "202",
        "description": "Accepted (for future processing by payment gateway)"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "409",
        "description": "Conflict - rejected by payment gateway"
      },
      {
        "statusCode": "500",
        "description": "Error with payment gateway"
      },
      {
        "statusCode": "503",
        "description": "Temporary failure with payment gateway"
      }
    ]
  },
  {
    "url": "/PaymentGateway/capture",
    "method": "performCaptureOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PaymentGateway",
    "typeScriptTag": "paymentGateway",
    "description": "Perform a payment gateway capture operation",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "refTransId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFTRANSID"
      },
      {
        "name": "card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "myRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccountName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificateName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "networkTokenBrand",
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
        "statusCode": "202",
        "description": "Accepted (for future processing by payment gateway)"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "409",
        "description": "Conflict - rejected by payment gateway"
      },
      {
        "statusCode": "500",
        "description": "Error with payment gateway"
      },
      {
        "statusCode": "503",
        "description": "Temporary failure with payment gateway"
      }
    ]
  },
  {
    "url": "/PaymentGateway/refund",
    "method": "performRefundOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PaymentGateway",
    "typeScriptTag": "paymentGateway",
    "description": "Perform a payment gateway refund operation",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "refTransId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFTRANSID"
      },
      {
        "name": "payerDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "myRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccountName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificateName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "networkTokenBrand",
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
        "statusCode": "202",
        "description": "Accepted (for future processing by payment gateway)"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "409",
        "description": "Conflict - rejected by payment gateway"
      },
      {
        "statusCode": "500",
        "description": "Error with payment gateway"
      },
      {
        "statusCode": "503",
        "description": "Temporary failure with payment gateway"
      }
    ]
  },
  {
    "url": "/PaymentGateway/void",
    "method": "voidOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PaymentGateway",
    "typeScriptTag": "paymentGateway",
    "description": "Perform a payment gateway Void operation",
    "parameters": [
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "refTransId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFTRANSID"
      },
      {
        "name": "card",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "myRef",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccountName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certificateName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentGatewayAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "networkTokenBrand",
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
        "statusCode": "202",
        "description": "Accepted (for future processing by payment gateway)"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "409",
        "description": "Conflict - rejected by payment gateway"
      },
      {
        "statusCode": "500",
        "description": "Error with payment gateway"
      },
      {
        "statusCode": "503",
        "description": "Temporary failure with payment gateway"
      }
    ]
  },
  {
    "url": "/ThreeDsSessions",
    "method": "getTokenStartOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ThreeDsSessions",
    "typeScriptTag": "threeDsSessions",
    "description": "Get a token to start a card operation",
    "parameters": [
      {
        "name": "ttl",
        "schema": "integer",
        "required": true,
        "description": "Time to live for the returned token",
        "example": 0
      },
      {
        "name": "merchantAccountName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTACCOUNTNAME"
      },
      {
        "name": "amt",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The model used to return a valid Jws with a single Token"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsSessions/opValidate",
    "method": "performValidationOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ThreeDsSessions",
    "typeScriptTag": "threeDsSessions",
    "description": "Perform validation of the operation using to signed data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsSessions/challengeStatus",
    "method": "getChallengeStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ThreeDsSessions",
    "typeScriptTag": "threeDsSessions",
    "description": "Get challenge ststus, as stored on server",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "base class for message to client (Http response or over WebSocket)"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/ThreeDsSessions/mpiChallengeCallback/{sessionId}",
    "method": "handleMpiChallengeCallback",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ThreeDsSessions",
    "typeScriptTag": "threeDsSessions",
    "description": "Handle a callback (redirect from challenge)",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The value containing data to designate the client",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/ThreeDsSessions/fingerprintCallback/{sessionId}",
    "method": "handleFingerprintCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ThreeDsSessions",
    "typeScriptTag": "threeDsSessions",
    "description": "Handle a callback (redirect from device fingerprint)",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The value containing data to designate the client",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/Utils/apiKey",
    "method": "validateApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Validate Apikey",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for display authentication results"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/Tools/brand",
    "method": "getBrandLookup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tools",
    "typeScriptTag": "tools",
    "description": "Brand Lookup",
    "parameters": [
      {
        "name": "iin",
        "schema": "string",
        "required": true,
        "description": "Card's BIN / IIN (the first 6 to 11 digits of the card number)",
        "example": "IIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Output model for Brand lookup"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/StringTokens",
    "method": "storeAndTokenize",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "StringTokens",
    "typeScriptTag": "stringTokens",
    "description": "Store and tokenize a string",
    "parameters": [
      {
        "name": "payload",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Model for display a string token meta-data"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/Tools/iin",
    "method": "lookupMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tools",
    "typeScriptTag": "tools",
    "description": "Metadata Lookup",
    "parameters": [
      {
        "name": "iin",
        "schema": "string",
        "required": true,
        "description": "Card's BIN / IIN (the first 6 to 11 digits of the card number)",
        "example": "IIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "IIN data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/StringTokens/{token}",
    "method": "deleteByToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "StringTokens",
    "typeScriptTag": "stringTokens",
    "description": "Delete an existing string by token",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "The token ID representing the string to be deleted",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/StringTokens/{token}",
    "method": "getContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "StringTokens",
    "typeScriptTag": "stringTokens",
    "description": "Retrieve content of StringToken",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "The token ID of the StringToken you would like to retrieve the content for",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for display a string token, including the clear text"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/StringTokens/{token}/meta",
    "method": "getMetaData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "StringTokens",
    "typeScriptTag": "stringTokens",
    "description": "Retrieve meta data of a StringToken",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Token representing the string to be retrieved",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for display a string token meta-data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/Tools/validate",
    "method": "validateCardDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tools",
    "typeScriptTag": "tools",
    "description": "Card Validation",
    "parameters": [
      {
        "name": "iin",
        "schema": "string",
        "required": true,
        "description": "Card's BIN / IIN (the first 6 to 11 digits of the card number)",
        "example": "IIN"
      },
      {
        "name": "clientIPAddress",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTIPADDRESS"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stateProvince",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Results for a card validation request"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  },
  {
    "url": "/Tools/luhn",
    "method": "validateLuhnCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tools",
    "typeScriptTag": "tools",
    "description": "Luhn Algorithm Validation",
    "parameters": [
      {
        "name": "number",
        "schema": "string",
        "required": true,
        "description": "The full card number to be validated.",
        "example": "NUMBER"
      },
      {
        "name": "metaData",
        "schema": "boolean",
        "description": "An optional indicator to specify whether the card metadata should be included in the response.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Luhn Check Results with IIn Data"
      },
      {
        "statusCode": "400",
        "description": "Bad data"
      },
      {
        "statusCode": "401",
        "description": "Not authenticated"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Orchestra API"
      apiBaseUrl="https://api.epaytools.com"
      apiVersion="Prod"
      endpoints={36}
      sdkMethods={43}
      schemas={83}
      parameters={117}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluetime/openapi.yaml"
      developerDocumentation="developers.bluetime.io/reference"
    />
  );
}
  