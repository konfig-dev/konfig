import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DotsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="dots-typescript-sdk"
      metaDescription={`Dots is building a multichannel payouts API for marketplaces. Our API lets a marketplace pay their sellers in the ways they want to be paid, including Venmo, Paypal, ACH and Zelle. As more Americans earn a living by becoming a 1099 worker, marketplaces need to provide flexible payout options and we make supporting these payouts easy through a single API.`}
      company="Dots"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/logo.jpg"
      companyKebabCase="dots"
      clientNameCamelCase="dots"
      homepage="dots.dev"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/favicon.png"
      contactUrl="https://dots.dev"
      contactEmail="info@dots.dev"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payouts","marketplace","payments","ecommerce","onboarding","kyc","money_movement","disbursements","payables"]}
      methods={[
  {
    "url": "/v2/users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List all Users",
    "parameters": [
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create a User",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "country_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY_CODE"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
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
    "url": "/v2/users/{user_id}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete a User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{user_id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Retrieve a User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{user_id}",
    "method": "updateUserObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "default_payout_method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_payout_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "undefined",
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
    "url": "/v2/users/{user_id}/compliance",
    "method": "submitComplianceInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Submit Compliance Information",
    "parameters": [
      {
        "name": "w9",
        "schema": "object",
        "description": ""
      },
      {
        "name": "w8ben",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v2/users/{user_id}/send-verification-token",
    "method": "sendVerificationToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Send a Verification Token",
    "parameters": [
      {
        "name": "use_voice",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      }
    ]
  },
  {
    "url": "/v2/users/{user_id}/verify",
    "method": "verifyUserToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Verify a User",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "Incorrect token"
      }
    ]
  },
  {
    "url": "/v2/users/{user_id}/payout-methods",
    "method": "listPayoutMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List Payout Methods",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of payout methods registered to the user."
      }
    ]
  },
  {
    "url": "/v2/users/{user_id}/payout-methods",
    "method": "addPayoutMethod",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Add a Payout Method",
    "parameters": [
      {
        "name": "platform",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORM"
      },
      {
        "name": "routing_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "account_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "account_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
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
        "name": "handle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cash_tag",
        "schema": "string",
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
    "url": "/v2/transfers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfers",
    "typeScriptTag": "transfers",
    "description": "List all Transfers",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "Include only results with this user ID attached."
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
    "url": "/v2/transfers",
    "method": "createTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "transfers",
    "typeScriptTag": "transfers",
    "description": "Create a Transfer",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      },
      {
        "name": "tax_exempt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
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
    "url": "/v2/transfers/{transfer_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfers",
    "typeScriptTag": "transfers",
    "description": "Get a Transfer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/flows",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "flows",
    "typeScriptTag": "flows",
    "description": "List all Flows",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/flows",
    "method": "createNewFlow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "flows",
    "typeScriptTag": "flows",
    "description": "Create a Flow",
    "parameters": [
      {
        "name": "steps",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
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
    "url": "/v2/flows/{flow_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "flows",
    "typeScriptTag": "flows",
    "description": "Retrieve a Flow",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payout-links",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payout-links",
    "typeScriptTag": "payoutLinks",
    "description": "List all Payout Links",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/payout-links",
    "method": "createPayoutLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payout-links",
    "typeScriptTag": "payoutLinks",
    "description": "Create a Payout Link",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payee",
        "schema": "object",
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
        "name": "delivery",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "force_collect_compliance_information",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "tax_exempt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payout_fee_party",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additional_steps",
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
    "url": "/v2/payout-links/{payout_link_id}",
    "method": "cancelLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "payout-links",
    "typeScriptTag": "payoutLinks",
    "description": "Delete a Payout Link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payout-links/{payout_link_id}",
    "method": "getPayoutLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payout-links",
    "typeScriptTag": "payoutLinks",
    "description": "Retrieve a Payout Link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payouts",
    "method": "createPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payouts",
    "typeScriptTag": "payouts",
    "description": "Create a Payout",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "platform",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORM"
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fund",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payments",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payments",
    "typeScriptTag": "payments",
    "description": "Create a Payment",
    "parameters": [
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_id",
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
        "name": "platform",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLATFORM"
      },
      {
        "name": "ach_info",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "account_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payouts/send-payout",
    "method": "sendPayout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payouts",
    "typeScriptTag": "payouts",
    "description": "Send a Payout",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payee",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "delivery",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "force_collect_compliance_information",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "additional_steps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_exempt",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payout_fee_party",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payout-requests",
    "method": "getAllPayouts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payout-requests",
    "typeScriptTag": "payoutRequests",
    "description": "List all Payout Requests",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/payout-requests",
    "method": "submitRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payout-requests",
    "typeScriptTag": "payoutRequests",
    "description": "Create a Payout Request",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payee",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "memo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payout-requests/{payout_request_id}",
    "method": "getPayoutById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payout-requests",
    "typeScriptTag": "payoutRequests",
    "description": "Retrieve a Payout Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/transactions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transactions",
    "typeScriptTag": "transactions",
    "description": "List all Transactions",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/transactions/{transaction_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transactions",
    "typeScriptTag": "transactions",
    "description": "Retrieve a Transaction",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payment-intents",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payment-intents",
    "typeScriptTag": "paymentIntents",
    "description": "List all Payment Intents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Array of `payment-intents`."
      }
    ]
  },
  {
    "url": "/v2/payment-intents",
    "method": "createIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payment-intents",
    "typeScriptTag": "paymentIntents",
    "description": "Create a Payment Intent",
    "parameters": [
      {
        "name": "description",
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
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "confirm",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_method_types",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "setup_future_usage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "transfer_data",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "application_fee_amount",
        "schema": "integer",
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
    "url": "/v2/payment-intents/{payment_intent_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payment-intents",
    "typeScriptTag": "paymentIntents",
    "description": "Retrieve a Payment Intent",
    "parameters": [],
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
    "url": "/v2/payment-intents/{payment_intent_id}/confirm",
    "method": "confirmIntent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payment-intents",
    "typeScriptTag": "paymentIntents",
    "description": "Confirm a Payment Intent",
    "parameters": [
      {
        "name": "payment_method_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_METHOD_ID"
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
    "url": "/v2/transfer-batches",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer-batches",
    "typeScriptTag": "transferBatches",
    "description": "List all Transfer Batches",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/transfer-batches",
    "method": "createBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "transfer-batches",
    "typeScriptTag": "transferBatches",
    "description": "Create a Transfer Batch",
    "parameters": [
      {
        "name": "items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "idempotency_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
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
    "url": "/v2/transfer-batches/{transfer_batch_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfer-batches",
    "typeScriptTag": "transferBatches",
    "description": "Retrieve a Transfer Batch",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payment-customers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payment-customers",
    "typeScriptTag": "paymentCustomers",
    "description": "List all Payment Customers",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/payment-customers",
    "method": "createCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payment-customers",
    "typeScriptTag": "paymentCustomers",
    "description": "Create a Payment Customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated",
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
  },
  {
    "url": "/v2/payment-customers/{payment_customer_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payment-customers",
    "typeScriptTag": "paymentCustomers",
    "description": "Retrieve a Payment Customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/checkout-sessions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checkout-sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "List all Checkout Sessions",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/checkout-sessions",
    "method": "createSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checkout-sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "Create a Checkout Session",
    "parameters": [
      {
        "name": "line_items",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "customer_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "client_reference_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "success_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUCCESS_URL"
      },
      {
        "name": "cancel_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODE"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expires_in",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 10800
      },
      {
        "name": "metadata",
        "schema": "object",
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
    "url": "/v2/checkout-sessions/{checkout_session_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checkout-sessions",
    "typeScriptTag": "checkoutSessions",
    "description": "Retrieve a Checkout Session",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "List all Apps",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of results to retrieve"
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "required": false,
        "description": "ID of first app to retrieve"
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "required": false,
        "description": "ID of last app to retrieve"
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
    "url": "/v2/apps",
    "method": "createNewApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Create an App",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Retrieve an App",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/compliance",
    "method": "getComplianceInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Retrieve an App's Compliance Information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/compliance",
    "method": "updateComplianceInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Update an App's Compliance Information",
    "parameters": [
      {
        "name": "company_info",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "contact_info",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "directors",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "flow_of_funds",
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
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/ach-account",
    "method": "getAchAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Get App ACH Account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps/{app_id}/ach-account",
    "method": "addAchAccount",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Add App ACH Account",
    "parameters": [
      {
        "name": "account_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_NUMBER"
      },
      {
        "name": "routing_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROUTING_NUMBER"
      },
      {
        "name": "account_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNT_TYPE"
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
    "url": "/v2/apps/{app_id}/deposit",
    "method": "depositFunds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Deposit Funds into App Wallet",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "idempotency_key",
        "schema": "string",
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
    "url": "/v2/apps/{app_id}/withdraw",
    "method": "withdrawFunds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Withdraw Funds From App Wallet",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "idempotency_key",
        "schema": "string",
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
    "url": "/v2/payment-methods",
    "method": "listAllPaymentCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payment-methods",
    "typeScriptTag": "paymentMethods",
    "description": "List all Payment Methods for a Payment Customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "description": "Payment Customer ID"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Number or payment methods to return"
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
    "url": "/v2/payment-methods/{payment_method_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "payment-methods",
    "typeScriptTag": "paymentMethods",
    "description": "Retrieve a Payment Method",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/payment-methods/{payment_method_id}/attach",
    "method": "attachPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payment-methods",
    "typeScriptTag": "paymentMethods",
    "description": "Attach a Payment Method to a Payment Customer",
    "parameters": [
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
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
    "url": "/v2/payment-methods/{payment_method_id}/detach",
    "method": "detachPaymentMethod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "payment-methods",
    "typeScriptTag": "paymentMethods",
    "description": "Detach Payment Method from a Payment Customer",
    "parameters": [
      {
        "name": "customer_id",
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
  },
  {
    "url": "/v2/disputes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "disputes",
    "typeScriptTag": "disputes",
    "description": "List all Disputes",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/disputes/{dispute_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "disputes",
    "typeScriptTag": "disputes",
    "description": "Retrieve a Dispute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/disputes/{dispute_id}/evidence",
    "method": "addEvidenceFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "disputes",
    "typeScriptTag": "disputes",
    "description": "Add Evidence to a Dispute",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/v2/disputes/{dispute_id}/submit",
    "method": "submitDispute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "disputes",
    "typeScriptTag": "disputes",
    "description": "Submit a Dispute",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/v2/refunds",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "refunds",
    "typeScriptTag": "refunds",
    "description": "List all Refunds",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
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
    "url": "/v2/refunds",
    "method": "createRefund",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "refunds",
    "typeScriptTag": "refunds",
    "description": "Create a Refund",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "payment_intent_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_INTENT_ID"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "boolean",
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
    "url": "/v2/refunds/{refund_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "refunds",
    "typeScriptTag": "refunds",
    "description": "Retrieve a Refund",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/organization-transfers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfers",
    "typeScriptTag": "transfers",
    "description": "List all Organization Transfers",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of objects to be returned, between 1 and 100."
      },
      {
        "name": "startingAfter",
        "schema": "string",
        "description": "A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `starting_after`=`aaa` in order to fetch the next page of the list."
      },
      {
        "name": "endingBefore",
        "schema": "string",
        "description": "A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `aaa`, your subsequent call can include `ending_before`=`aaa` in order to fetch the previous page of the list."
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "Include only results with this user ID attached."
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
    "url": "/v2/organization-transfers",
    "method": "createOrganizationTransfer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "transfers",
    "typeScriptTag": "transfers",
    "description": "Create an Organization Transfer",
    "parameters": [
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "api_app_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API_APP_ID"
      },
      {
        "name": "idempotency_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
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
    "url": "/v2/organization-transfers/{transfer_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "transfers",
    "typeScriptTag": "transfers",
    "description": "Get a Transfer",
    "parameters": [],
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
      apiTitle="dots api"
      apiBaseUrl="https://api.dots.dev/api"
      apiVersion="1.0"
      endpoints={47}
      sdkMethods={100}
      schemas={67}
      parameters={184}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dots/openapi.yaml"
      developerDocumentation="docs.dots.dev/overview/introduction"
    />
  );
}
  