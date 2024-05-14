import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SqalaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sqala-typescript-sdk"
      metaDescription={`At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.`}
      company="Sqala"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/logo.png"
      companyKebabCase="sqala"
      clientNameCamelCase="sqala"
      homepage="www.sqala.tech/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","financial_services","payments","banking"]}
      methods={[
  {
    "url": "/access-tokens",
    "method": "generateAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Create an Access Token",
    "parameters": [
      {
        "name": "refreshToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESHTOKEN"
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
      }
    ]
  },
  {
    "url": "/pix-qrcode-payments",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QRCode",
    "typeScriptTag": "qrCode",
    "description": "List all Pix QR Codes",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": 10
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  },
  {
    "url": "/pix-qrcode-payments",
    "method": "generateQrCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "QRCode",
    "typeScriptTag": "qrCode",
    "description": "Create a Pix QR Code",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "payer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "split",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/pix-qrcode-payments/{id}",
    "method": "getQrCodeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QRCode",
    "typeScriptTag": "qrCode",
    "description": "Retrieve a Pix QR Code",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the object.",
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
      }
    ]
  },
  {
    "url": "/itp-payments",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ITP",
    "typeScriptTag": "itp",
    "description": "List all ITPs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": 10
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  },
  {
    "url": "/itp-payments",
    "method": "createPaymentInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ITP",
    "typeScriptTag": "itp",
    "description": "Create an ITP",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "payer",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "split",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/itp-payments/{id}",
    "method": "getItp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ITP",
    "typeScriptTag": "itp",
    "description": "Retrieve an ITP",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the object.",
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
      }
    ]
  },
  {
    "url": "/bank-transfer-payments/{bankTransferId}",
    "method": "getBankTransfer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankTransfer",
    "typeScriptTag": "bankTransfer",
    "description": "Retrieve a Bank Transfer",
    "parameters": [
      {
        "name": "bankTransferId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKTRANSFERID"
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
      }
    ]
  },
  {
    "url": "/bank-transfer-payments",
    "method": "listAllBankTransfers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BankTransfer",
    "typeScriptTag": "bankTransfer",
    "description": "List all Bank Transfers",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": "10"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  },
  {
    "url": "/recipients",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "List all Recipients",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": 10
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  },
  {
    "url": "/recipients",
    "method": "createRecipient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Create a Recipient",
    "parameters": [
      {
        "name": "code",
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
        "name": "taxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAXID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/recipients/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Retrieve a Recipient",
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
      }
    ]
  },
  {
    "url": "/recipients/{id}",
    "method": "updateRecipientById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Update a Recipient",
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/bank-accounts",
    "method": "listBankAccounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "List all Bank Accounts",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/bank-accounts",
    "method": "createBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Create a Bank Account",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "CHECKING"
      },
      {
        "name": "holderName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOLDERNAME"
      },
      {
        "name": "holderTaxId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOLDERTAXID"
      },
      {
        "name": "holderType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOLDERTYPE"
      },
      {
        "name": "branchNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRANCHNUMBER"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTNUMBER"
      },
      {
        "name": "bankId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKID"
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/bank-accounts/{bankAccountId}",
    "method": "deleteBankAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Delete a Bank Account",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKACCOUNTID"
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/bank-accounts/{bankAccountId}",
    "method": "getBankAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Retrieve a Bank Account",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BANKACCOUNTID"
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/withdrawals",
    "method": "listWithdrawals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "List all Withdrawals",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": "10"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/withdrawals",
    "method": "createWithdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Create a Withdrawal",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METHOD"
      },
      {
        "name": "pixKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bankAccountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/withdrawals/{withdrawalId}",
    "method": "getWithdrawalById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Retrieve a Withdrawal",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "withdrawalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WITHDRAWALID"
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/balance",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "Get Balance",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
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
      }
    ]
  },
  {
    "url": "/recipients/{recipientId}/transactions",
    "method": "listTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recipient",
    "typeScriptTag": "recipient",
    "description": "List all Transactions",
    "parameters": [
      {
        "name": "recipientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECIPIENTID",
        "default": "DEFAULT"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": "10"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  },
  {
    "url": "/webhooks/{id}/attempts",
    "method": "resendAttempt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Resend a Webhook",
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
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Retrieve a Webhook",
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
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "List all Webhooks",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "event",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endpointId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 50.",
        "default": 10
      },
      {
        "name": "before",
        "schema": "string",
        "description": "A cursor for use in pagination. ```before``` is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, starting with ```obj_bar```, your subsequent call can include ```before=obj_bar``` in order to fetch the previous page of the list."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 50 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list."
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Developer API"
      apiBaseUrl="https://api.sqala.tech/developer/v1"
      apiVersion="1.0"
      endpoints={20}
      sdkMethods={28}
      schemas={56}
      parameters={85}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sqala/openapi.yaml"
      developerDocumentation="sqala.readme.io/reference/"
    />
  );
}
  