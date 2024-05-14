import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FinsharkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="finshark-typescript-sdk"
      metaDescription={`More and more non-financial companies are looking into new ways to boost revenue through embedded finance as the financial services industry has been disrupted. Through open banking, we remove any legacy friction within online payments and other financial processes to create new, instant paths for modern companies to fully own finance, deliver proprietary solutions and, ultimately, reach the success they desire.

𝗜𝗻𝘀𝘁𝗮𝗻𝘁 𝗽𝗮𝘆𝗺𝗲𝗻𝘁𝘀. | Let your customers pay with their bank.
𝗜𝗻𝘀𝘁𝗮𝗻𝘁 𝗽𝗮𝘆𝗼𝘂𝘁𝘀. | Send funds to anyone from your business.
𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗶𝗻𝘀𝗶𝗴𝗵𝘁𝘀. | Holistic financial data to streamline your KYC checks.
𝗦𝘁𝗿𝗲𝗮𝗺𝘀. | All our products rolled into one single interface. Zero coding.

Finshark is a licensed Payment Institution by the Financial Supervisory Authority, authorised to provide payment services across EU/EES.`}
      company="Finshark"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/logo.png"
      companyKebabCase="finshark"
      clientNameCamelCase="finshark"
      homepage="finshark.io/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/favicon.jpg"
      // Missing contactUrl
      contactEmail="support@finshark.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["financial_services","online_payments","fintech","payment_solutions","payouts"]}
      methods={[
  {
    "url": "/v1/accounts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get list of accounts.",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The session identifier from authorization response."
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of accounts."
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "206",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{accountId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Detailed information about an account.",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The session identifier from authorization response."
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Internal technical account identifier.",
        "example": "ACCOUNTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains data about the bank accounts. All data depends on the account type."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{accountId}/balances",
    "method": "getBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get all types of balances for the selected account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Internal technical account identifier.",
        "example": "ACCOUNTID"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The session identifier from authorization response."
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The object with the account's balances."
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "206",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cards",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Get list of cards.",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of cards."
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
        "statusCode": "404",
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
    "url": "/v1/cards/{cardId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Detailed information about an card.",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "Internal technical card identifier.",
        "example": "CARDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This object contains data about the card details."
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
        "statusCode": "404",
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
    "url": "/v1/cards/{cardId}/cardtransactions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CardTransactions",
    "typeScriptTag": "cardTransactions",
    "description": "Get a list of transactions for the selected account.",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "Internal technical card identifier.",
        "example": "CARDID"
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      },
      {
        "name": "bookingStatus",
        "schema": "string",
        "description": "Filter transactions by booking status."
      },
      {
        "name": "dateFrom",
        "schema": "integer",
        "description": "Filter transactions by a \"from\" date. Value is Unix timestamp (https://oas.finshark.io/."
      },
      {
        "name": "dateTo",
        "schema": "integer",
        "description": "Filter transactions by a \"to\" date. Value is Unix timestamp (https://oas.finshark.io/."
      },
      {
        "name": "sequenceNumber",
        "schema": "string",
        "description": "Set to get next transactions page."
      },
      {
        "name": "hash",
        "schema": "string",
        "description": "Filter transactions by hash."
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cards/{cardId}/cardtransactions/{transactionId}",
    "method": "getByTransactionId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CardTransactions",
    "typeScriptTag": "cardTransactions",
    "description": "Get a transaction by transaction identifier.",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "Internal technical card identifier.",
        "example": "CARDID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction identifier.",
        "example": "TRANSACTIONID"
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The transaction object."
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
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
    "url": "/v1/accounts/{accountId}/transactions",
    "method": "listForAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get a list of transactions for the selected account.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Internal technical account identifier.",
        "example": "ACCOUNTID"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The session identifier from authorization response."
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      },
      {
        "name": "bookingStatus",
        "schema": "string",
        "description": "Filter transactions by booking status."
      },
      {
        "name": "dateFrom",
        "schema": "integer",
        "description": "Filter transactions by a \"from\" date. Value is Unix timestamp (https://oas.finshark.io/."
      },
      {
        "name": "dateTo",
        "schema": "integer",
        "description": "Filter transactions by a \"to\" date. Value is Unix timestamp (https://oas.finshark.io/."
      },
      {
        "name": "sequenceNumber",
        "schema": "string",
        "description": "Set to get next transactions page."
      },
      {
        "name": "hash",
        "schema": "string",
        "description": "Filter transactions by hash."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response that contains the information about transactions."
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "206",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/accounts/{accountId}/transactions/{transactionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get a transaction by transaction identifier.",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Internal technical account identifier.",
        "example": "ACCOUNTID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "Transaction identifier.",
        "example": "TRANSACTIONID"
      },
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The session identifier from authorization response."
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier from authorization response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The transaction object."
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "206",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/bankId/identify",
    "method": "initiateAuthenticationOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank id",
    "typeScriptTag": "bankId",
    "description": "Initiates an authentication order.",
    "parameters": [
      {
        "name": "personalNumber",
        "schema": "string",
        "description": ""
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
    "url": "/v1/bankId/{orderRef}",
    "method": "collectOrderResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank id",
    "typeScriptTag": "bankId",
    "description": "Collects the result of a sign or auth order using orderRef as reference.",
    "parameters": [
      {
        "name": "orderRef",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDERREF"
      },
      {
        "name": "userIdentification",
        "schema": "boolean",
        "description": ""
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
    "url": "/v1/bankId/qr",
    "method": "getQrCodeData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank id",
    "typeScriptTag": "bankId",
    "description": "Retrieves QR code data based on the provided QR data request.",
    "parameters": [
      {
        "name": "qrStartSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QRSTARTSECRET"
      },
      {
        "name": "qrStartToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QRSTARTTOKEN"
      },
      {
        "name": "qrTime",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/v1/compliance/dk/{ssn}/cpr",
    "method": "getMappedResponse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Central person register denmark",
    "typeScriptTag": "centralPersonRegisterDenmark",
    "description": "Gets a mapped response from CPR Service for provider person id.",
    "parameters": [
      {
        "name": "ssn",
        "schema": "string",
        "required": true,
        "description": "Person identifier.",
        "example": "SSN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful response object for CPR Denmark."
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
    "url": "/v1/compliance-data",
    "method": "getBasedParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Compliance data",
    "typeScriptTag": "complianceData",
    "description": "Retrieves compliance data based on specified parameters.",
    "parameters": [
      {
        "name": "filterParam",
        "schema": "string",
        "description": "The filter parameter for compliance data."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The size of the page for pagination.",
        "default": 100
      },
      {
        "name": "pageNumber",
        "schema": "integer",
        "description": "The page number for pagination.",
        "default": 1
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
    "url": "/v1/kyc",
    "method": "submitReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Kyc",
    "typeScriptTag": "kyc",
    "description": "Create a KYC report.",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response object for KYC request."
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
    "url": "/v1/kyc/{id}",
    "method": "reportFetch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Kyc",
    "typeScriptTag": "kyc",
    "description": "Get a KYC report.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "KYC identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response object for KYC request."
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
    "url": "/v1/tra-result",
    "method": "getRecommendationValue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tra",
    "typeScriptTag": "tra",
    "description": "Returns TRA recommendation value from cache.",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentId",
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
    "url": "/v1/user-identification",
    "method": "postData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User identification",
    "typeScriptTag": "userIdentification",
    "description": "Post user data.",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "personalId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "corporateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "givenName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "surname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request is valid."
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
    "url": "/v1/user-identity-verification/user-authentication",
    "method": "startFtnAuthenticationFlow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User identity verification",
    "typeScriptTag": "userIdentityVerification",
    "description": "Starts FTN authentication flow for given user.",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "successRedirectUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "failRedirectUrl",
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
    "url": "/v1/user-identity-verification/session-details",
    "method": "getSessionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User identity verification",
    "typeScriptTag": "userIdentityVerification",
    "description": "Gets details of FTN authentication flow.",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "description": "Id of FTN session."
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
    "url": "/v1/insights/request",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Creating an insights request.",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "description": "The session identifier from authorization response"
      },
      {
        "name": "authorizationId",
        "schema": "string",
        "description": "The Authorization identifier"
      },
      {
        "name": "sandbox",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "callbackUri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      },
      {
        "name": "dropSharedAccounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dropJointAccounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "currency",
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/insights/{requestId}",
    "method": "getReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights",
    "typeScriptTag": "insights",
    "description": "Get an insights report.",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "request identifier",
        "example": "REQUESTID"
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment requests",
    "typeScriptTag": "paymentRequests",
    "description": "Get all Payment Requests for selected organizationId.",
    "parameters": [
      {
        "name": "searchClientId",
        "schema": "string",
        "description": "Search by client identifier."
      },
      {
        "name": "searchRecipient",
        "schema": "string",
        "description": "Search by recipient."
      },
      {
        "name": "searchStatus",
        "schema": "string",
        "description": "Search by payment request status, comma separated (E.G. \"AUTHORIZED, IN_PROGRESS\" will fetch only payments with AUTHORIZED and IN_PROGRESS status)."
      },
      {
        "name": "searchClientAccess",
        "schema": "string",
        "description": "Environment on which the call has been invoked, comma separated (e.g. \"PRODUCTION, SANDBOX\", or \"SANDBOX\"). Blank returns all."
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "Sort response by clientId, recipient, status."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "Sort direction \"desc\" or \"asc\"."
      },
      {
        "name": "pageIndex",
        "schema": "integer",
        "description": "Page index.",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Items per page.",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment request with count number."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment requests",
    "typeScriptTag": "paymentRequests",
    "description": "Creating a Payment Request.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Payment request returned as respone on create action."
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
        "statusCode": "404",
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
    "url": "/v1/payments/{id}",
    "method": "deleteRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment requests",
    "typeScriptTag": "paymentRequests",
    "description": "Delete Payment Request.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Request identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was fulfilled and Payment Request is deleted."
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
        "statusCode": "404",
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
    "url": "/v1/payments/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment requests",
    "typeScriptTag": "paymentRequests",
    "description": "Get Payment Request details by id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Request identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment request returned as respone on create action."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments/{id}/details",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment requests",
    "typeScriptTag": "paymentRequests",
    "description": "Get Payment Request details and authorization information by payment request id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Request identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Payment request data required for successfully storing a `PaymentRequest`."
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments/{id}/refund",
    "method": "createRefundRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment requests",
    "typeScriptTag": "paymentRequests",
    "description": "Create a payment refund request.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment Request identifier.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Payment request returned as respone on create action."
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
        "statusCode": "404",
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
    "url": "/v1/payments/templates",
    "method": "getAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment templates",
    "typeScriptTag": "paymentTemplates",
    "description": "Get all templates.",
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments/templates",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment templates",
    "typeScriptTag": "paymentTemplates",
    "description": "Creating a payment template.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "creditor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "paymentProductId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTPRODUCTID"
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
        "statusCode": "404",
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
    "url": "/v1/payments/templates/{id}",
    "method": "removeTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payment templates",
    "typeScriptTag": "paymentTemplates",
    "description": "Delete payment template.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment template identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was fulfilled and Payment template data is deleted."
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
        "statusCode": "404",
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
    "url": "/v1/payments/templates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payment templates",
    "typeScriptTag": "paymentTemplates",
    "description": "Get payment template by id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment template identifier.",
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
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments/templates/{id}",
    "method": "updateRequest",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payment templates",
    "typeScriptTag": "paymentTemplates",
    "description": "Creating a request to update a Payment template.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Payment template identifier.",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creditor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "remittanceInformation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "region",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentProductId",
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
        "statusCode": "403",
        "description": ""
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/payments/templates/{id}/initiate",
    "method": "initiateRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payment templates",
    "typeScriptTag": "paymentTemplates",
    "description": "Creating a payment request from a template.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Template identifier.",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "remittanceInformation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "debtor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "executionDate",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Payment request returned as respone on create action."
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
        "statusCode": "404",
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
    "url": "/v1/payouts",
    "method": "getAllPayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Get all payouts.",
    "parameters": [
      {
        "name": "dateFrom",
        "schema": "integer",
        "description": "If set, payouts created from that date will be returned. Value must be set in Unix epoch time format (https://oas.finshark.io/."
      },
      {
        "name": "dateTo",
        "schema": "integer",
        "description": "If set, payouts created until that date will be returned. Value must be set in Unix epoch time format (https://oas.finshark.io/."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "If set, payouts filtered by status will be returned."
      },
      {
        "name": "paymentId",
        "schema": "string",
        "description": "If set, payouts filtered by paymentId will be returned."
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
    "url": "/v1/payouts",
    "method": "createPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Create a payout.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paymentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "creditor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalReference",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delayExecution",
        "schema": "boolean",
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
        "statusCode": "404",
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
    "url": "/v1/payouts/{id}/authorization",
    "method": "authorizePayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Authorizes a payout.",
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
        "description": "The request has been fulfilled and the payout is authorized."
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
        "statusCode": "404",
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
    "url": "/v1/payouts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payouts",
    "typeScriptTag": "payouts",
    "description": "Get payout by id.",
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
        "statusCode": "404",
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
    "url": "/v1/recurring-payments",
    "method": "createNewRecurringPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recurring payments",
    "typeScriptTag": "recurringPayments",
    "description": "Create a new recurring payment.",
    "parameters": [
      {
        "name": "amount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "chargeBearer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creditor",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "paymentProductId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTPRODUCTID"
      },
      {
        "name": "region",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGION"
      },
      {
        "name": "remittanceInformation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The request has been fulfilled and a recurring payment is created."
      },
      {
        "statusCode": "201",
        "description": "Recurring payment response model."
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
        "statusCode": "404",
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
    "url": "/v1/recurring-payments/{id}",
    "method": "cancelRecurringPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Recurring payments",
    "typeScriptTag": "recurringPayments",
    "description": "Delete/cancel the recurring payment.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Recurring payment identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request was fulfilled and recurring payment is deleted."
      },
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "404",
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
    "url": "/v1/recurring-payments/{id}",
    "method": "getRecurringPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recurring payments",
    "typeScriptTag": "recurringPayments",
    "description": "Get the recurring payment.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Recurring payment identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Recurring payment response model."
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      },
      {
        "statusCode": "504",
        "description": "Returned when request has been timed out in the gateway."
      }
    ]
  },
  {
    "url": "/v1/signing-baskets",
    "method": "createNewBasket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Signing baskets",
    "typeScriptTag": "signingBaskets",
    "description": "Create a new signing basket.",
    "parameters": [
      {
        "name": "ignoreSizeLimit",
        "schema": "boolean",
        "description": "If set to true, any signing basket size limits are ignored.",
        "default": false
      },
      {
        "name": "debtor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "paymentIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "payments",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Signing basket response model."
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
        "statusCode": "404",
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
    "url": "/v1/signing-baskets/{id}",
    "method": "cancel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Signing baskets",
    "typeScriptTag": "signingBaskets",
    "description": "Delete/cancel the signing basket.",
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
        "statusCode": "204",
        "description": "The request has been fulfilled and Signing Basket is deleted."
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
        "statusCode": "404",
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
    "url": "/v1/signing-baskets/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Signing baskets",
    "typeScriptTag": "signingBaskets",
    "description": "Get Signing Basket details.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Signing Basket identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Signing basket response model."
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
        "statusCode": "404",
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
    "url": "/v1/consent-authorizations/{id}",
    "method": "getStatusWithExpiryTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Consent authorizations",
    "typeScriptTag": "consentAuthorizations",
    "description": "Getting consent authorization status with expiry time.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Consent authorization identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Consent authorization details."
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
    "url": "/v1/providers/authorizations/{authorizationId}/validation",
    "method": "validatePsuAuthorizationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Provider authorizations",
    "typeScriptTag": "providerAuthorizations",
    "description": "Validate the PSU authorization data.",
    "parameters": [
      {
        "name": "authorizationId",
        "schema": "string",
        "required": true,
        "description": "Authorization identifier.",
        "example": "AUTHORIZATIONID"
      },
      {
        "name": "psuId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organizationId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The authorization validation response contains the validation results of each selected property."
      },
      {
        "statusCode": "400",
        "description": ""
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Webhooks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Gets a list of all webhooks.",
    "parameters": [],
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Creates a new webhook.",
    "parameters": [
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Webhook response body."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Webhooks/{id}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Deletes an existing webhook.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Webhook identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Request was fulfilled and webhook is deleted."
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Webhooks/{id}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Gets a single webhook by id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Webhook identifier.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhook response body."
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/Webhooks/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Updates an existing webhook.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Webhook identifier.",
        "example": "ID"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Webhook response body."
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
      apiTitle="Finshark API"
      apiBaseUrl="api.finshark.io"
      apiVersion="v1"
      endpoints={43}
      sdkMethods={55}
      schemas={126}
      parameters={160}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finshark/openapi.yaml"
      developerDocumentation="oas.finshark.io/"
    />
  );
}
  