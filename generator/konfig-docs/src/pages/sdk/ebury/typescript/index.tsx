import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function EburyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ebury-typescript-sdk"
      metaDescription={`Ebury is a Fintech company specialised in international payments, collections, and foreign exchange services. It offers financial solutions aimed mainly at SMEs and midcaps. Ebury offers foreign exchange activity in over 130 currencies - for both major and emerging markets - as well as cash management strategies, trade finance, and foreign exchange risk management.

Founded in London in 2009 by Spanish engineers Juan Lobato and Salvador García, the company has grown its global market presence to a network of 31 offices in 21 countries and more than 1,300 employees.

Throughout its history, the company has received more than 20 international awards, including the Financial Times 1000 Europe's fastest-growing companies 2020 and The Sunday Times Tech Track 100. All these recognitions place Ebury as one of the leading European financial technology companies.

ebury.com`}
      company="Ebury"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/logo.png"
      companyKebabCase="ebury"
      clientNameCamelCase="ebury"
      homepage="ebury.com"
      lastUpdated={new Date("2024-03-29T21:46:12.237Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["global_payments"]}
      methods={[
  {
    "url": "/account-details",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account details",
    "typeScriptTag": "accountDetails",
    "description": "Get the list of account details of the referred client",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "ID of the client that owns the account details",
        "example": "CLIENT_ID"
      },
      {
        "name": "accountDetailsType",
        "schema": "string",
        "required": false,
        "description": "Filter by the type of the account details"
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "Filter by the unique ID of the account"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Filter by the country of the account details (ISO Code 2)"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "Filter by the currency of the account details"
      },
      {
        "name": "alias",
        "schema": "string",
        "required": false,
        "description": "Filter by the user-friendly alias of the account details.\nOnly dedicated accounts can be filtered by alias."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number to retrieve"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Maximum number of items to include in each page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/account-details/{account_details_id}",
    "method": "updateAlias",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Account details",
    "typeScriptTag": "accountDetails",
    "description": "Update the alias of an account details",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "accountDetailsId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of account details",
        "example": "ACCOUNT_DETAILS_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "ID of the client that owns the account",
        "example": "CLIENT_ID"
      },
      {
        "name": "alias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIAS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "404",
        "description": "An error message."
      },
      {
        "statusCode": "405",
        "description": "An error message."
      },
      {
        "statusCode": "422",
        "description": "An error message."
      },
      {
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/account-details/{account_details_id}/make-default",
    "method": "markAsPrimary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account details",
    "typeScriptTag": "accountDetails",
    "description": "Mark the account as primary (https://docs.ebury.io for its holder and currency",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "accountDetailsId",
        "schema": "string",
        "required": true,
        "description": "Unique ID of account details",
        "example": "ACCOUNT_DETAILS_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "ID of the client that owns the account",
        "example": "CLIENT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Account details marked as primary"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "An error message."
      },
      {
        "statusCode": "405",
        "description": "An error message."
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/accounts",
    "method": "listRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Retrieve a list of accounts",
    "parameters": [
      {
        "name": "currencies",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of currencies",
        "example": "CURRENCIES"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/accounts/{account_id}",
    "method": "getAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Account UUID",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID or account UUID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/balances",
    "method": "getSingleAccountBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Get a balance for a single account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the account",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "balanceTypes",
        "schema": "string",
        "required": false,
        "description": "The balance types to be retrieved",
        "default": "InterimAvailable"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID or account UUID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/statements/file",
    "method": "statementFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statements Create",
    "typeScriptTag": "statementsCreate",
    "description": "Create statement file for an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Account UUID",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "The format of the statement to generate",
        "default": "pdf"
      },
      {
        "name": "from_value_datetime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_VALUE_DATETIME"
      },
      {
        "name": "to_value_datetime",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/statements/{statement_id}/file",
    "method": "byUuidFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statement Fetch",
    "typeScriptTag": "statementFetch",
    "description": "Get an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "Account UUID",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "statementId",
        "schema": "string",
        "required": true,
        "description": "Statement UUID",
        "example": "STATEMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns the requested statement file"
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID or account UUID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/transactions",
    "method": "getByAccountId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get transactions for a single account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the account",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "creditDebitIndicator",
        "schema": "string",
        "required": false,
        "description": "Filter transactions by debit/credit type"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "fromValueDatetime",
        "schema": "string",
        "description": "Only return transactions with value date and time after this UTC date and time. YYYY-MM-DDThh:mm format"
      },
      {
        "name": "toValueDatetime",
        "schema": "string",
        "description": "Only return transactions with value date and time before this UTC date and time. YYYY-MM-DDThh:mm format"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The desired page number for pagination",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of items per page for pagination",
        "default": 50
      },
      {
        "name": "transactionType",
        "schema": "string",
        "description": "Only return transactions of the specified transaction type."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID or account UUID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      },
      {
        "statusCode": "504",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/accounts/{account_id}/transactions/{transaction_id}",
    "method": "getSingleTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get a single transactions for an account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the account",
        "example": "ACCOUNT_ID"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the transaction",
        "example": "TRANSACTION_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": true,
        "description": "The ID of the contact",
        "example": "X-CONTACT-ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID or account UUID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      },
      {
        "statusCode": "504",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/authenticate",
    "method": "getLoginTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Authenticate",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "The OAuth 2.0 scope parameter. Must include the value openid. No other values required.",
        "example": "SCOPE"
      },
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "The response type required from the Authorization Server. This must be set to code",
        "example": "RESPONSE_TYPE"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Your Authorization Client ID, identifies your application to the Authorisation Server",
        "example": "CLIENT_ID"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": true,
        "description": "The redirect URL that is registered for your application. This must match the value we hold.",
        "example": "REDIRECT_URI"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "The OAuth 2.0 state parameter.",
        "example": "STATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/authenticate",
    "method": "getLoginTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Authenticate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/balances",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Balances",
    "typeScriptTag": "balances",
    "description": "Retrieve a list of the client's balances",
    "parameters": [
      {
        "name": "currencies",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of currency codes compliant to ISO 4217",
        "example": "CURRENCIES"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "balanceTypes",
        "schema": "string",
        "required": false,
        "description": "The balance types to be retrieved",
        "default": "InterimAvailable"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/currencies",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Retrieve a list of the client's currencies",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "tradeType",
        "schema": "string",
        "required": false,
        "description": "The trade types to be retrieved",
        "default": "spot"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/beneficiaries",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Get beneficiaries",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "required": false,
        "description": "Filter. The account number of the beneficiary you want to search."
      },
      {
        "name": "iban",
        "schema": "string",
        "required": false,
        "description": "Filter. The iban of the account of the beneficiary you want to search."
      },
      {
        "name": "bankIdentifier",
        "schema": "string",
        "required": false,
        "description": "Filter. The bank identifier of the account of the beneficiary you want to search."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The desired page number for pagination. By default is 1."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page for pagination. By default is 50."
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/beneficiaries",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Create a new beneficiary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "The core data of a beneficiary."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/beneficiaries/{beneficiary_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Delete a beneficiary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/beneficiaries/{beneficiary_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Get a beneficiary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The core data of a beneficiary."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/beneficiaries/{beneficiary_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Beneficiaries",
    "typeScriptTag": "beneficiaries",
    "description": "Update a beneficiary",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/clients",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Clients",
    "typeScriptTag": "clients",
    "description": "Get clients",
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
        "statusCode": "429",
        "description": "Too many requests"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get contacts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a contact",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data of a contact."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/contacts/{contact_id}",
    "method": "patch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Update a contact",
    "parameters": [
      {
        "name": "can_authorise_payments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_make_same_currency_payments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_beneficiaries",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_beneficiaries_groups",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_contacts",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_fix_forwards",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_multipayments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_payments",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_manage_permissions",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_trade",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "has_online_access",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/documents",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get a document",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/info/available-contacts",
    "method": "getAvailableContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Available contacts",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Where credentials is a Base64 encoded string of auth_client_id:auth_client_secret",
        "example": "AUTHORIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A contact list"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/login",
    "method": "loginTemplateRetrieve",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Login",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "Your password",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "302",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/metadata/beneficiary",
    "method": "describeNewBeneficiary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Get beneficiary metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/metadata/currency",
    "method": "getCurrencyMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metadata",
    "typeScriptTag": "metadata",
    "description": "Get currency metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/multipayments",
    "method": "createInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Create a multi payment instruction",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "tradeId",
        "schema": "string",
        "required": false,
        "description": "Trade ID to book payments against. Omit if trade should be executed to fund payments"
      },
      {
        "name": "sellCurrency",
        "schema": "string",
        "required": false,
        "description": "If trade_id omitted, a sell currency must be supplied"
      },
      {
        "name": "acceptPartial",
        "schema": "boolean",
        "required": false,
        "description": "Accept a partially successful instruction. If true, send successful instructions for payment. If false, reject the entire instruction",
        "default": true
      },
      {
        "name": "acceptImmediately",
        "schema": "boolean",
        "required": true,
        "description": "Set to true. Accept quote immediately, do not require confirmation",
        "example": true
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/multipayments/{multipayment_id}",
    "method": "rejectMultiPayment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Rejects a multi payment",
    "parameters": [
      {
        "name": "multipaymentId",
        "schema": "string",
        "required": true,
        "description": "The multi payment ID",
        "example": "MULTIPAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Multi payment rejected"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Multi payment or client ID not found"
      },
      {
        "statusCode": "409",
        "description": "Multi payment already rejected"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/multipayments/{multipayment_id}",
    "method": "acceptMultiPayment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Accept a multi payment",
    "parameters": [
      {
        "name": "multipaymentId",
        "schema": "string",
        "required": true,
        "description": "The multi payment ID",
        "example": "MULTIPAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The data of the bank account. Refer to the Metadata API for valid field combinations."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Multi payment or client ID not found"
      },
      {
        "statusCode": "409",
        "description": "Multi payment already accepted or rejected"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/mass-payments",
    "method": "getPaymentInstructions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Fetch payment instructions of a mass payment",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "massPaymentId",
        "schema": "string",
        "required": false,
        "description": "The ID of the multipayment"
      },
      {
        "name": "externalReferenceId",
        "schema": "string",
        "required": false,
        "description": "The external reference of the multipayment"
      },
      {
        "name": "sellCurrency",
        "schema": "string",
        "required": false,
        "description": "The sell currency of the multipayment"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The desired page number for pagination. By default is 1."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page for pagination. By default is 50."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "409",
        "description": "Invalid mass payment id"
      },
      {
        "statusCode": "429",
        "description": "Too many requests"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/mass-payments",
    "method": "createInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Create a mass payment instruction",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "external_reference_id",
        "schema": "string",
        "required": false,
        "description": "",
        "default": ""
      },
      {
        "name": "auto_commit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "sell_currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trade_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_instructions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/mass-payments/$mass_payment_id/confirm",
    "method": "confirmInstruction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Confirm multi payment instructions",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/mass-payments/{mass_payment_id}/payments-received",
    "method": "getPaymentInstructions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Fetch the payment instructions submitted for a mass payment",
    "parameters": [
      {
        "name": "massPaymentId",
        "schema": "string",
        "required": true,
        "description": "The mass payment ID",
        "example": "MASS_PAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The desired page number for pagination. By default is 1."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page for pagination. By default is 50."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "409",
        "description": "Invalid mass payment id"
      },
      {
        "statusCode": "429",
        "description": "Too many requests"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/mass-payments/{mass_payment_id}/errors",
    "method": "getPaymentInstructionsWithErrors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Multi Payments",
    "typeScriptTag": "multiPayments",
    "description": "Fetch the payment instructions with errors for a mass payment",
    "parameters": [
      {
        "name": "massPaymentId",
        "schema": "string",
        "required": true,
        "description": "The mass payment ID",
        "example": "MASS_PAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The desired page number for pagination. By default is 1."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page for pagination. By default is 50."
      },
      {
        "name": "paymentCurrency",
        "schema": "string",
        "required": false,
        "description": "Filter by payment currency"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "409",
        "description": "Invalid mass payment id"
      },
      {
        "statusCode": "429",
        "description": "Too many requests"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments",
    "method": "getAllForClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Search or retrieve payments",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "massPaymentId",
        "schema": "string",
        "required": false,
        "description": "Filter by related mass payment's uuid."
      },
      {
        "name": "massPaymentExternalReferenceId",
        "schema": "string",
        "required": false,
        "description": "Filter by related mass payment's external reference."
      },
      {
        "name": "paymentCurrency",
        "schema": "string",
        "required": false,
        "description": "Filter by payment currency"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The desired page number for pagination. By default is 1."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page for pagination. By default is 50."
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": "Filter payments by reference."
      },
      {
        "name": "tradeId",
        "schema": "string",
        "required": false,
        "description": "Filter payments by trade_id."
      },
      {
        "name": "fromPaymentDate",
        "schema": "string",
        "required": false,
        "description": "Filter payments by from_payment_date."
      },
      {
        "name": "toPaymentDate",
        "schema": "string",
        "required": false,
        "description": "Filter payments by to_payment_date."
      },
      {
        "name": "fromCreatedDate",
        "schema": "string",
        "required": false,
        "description": "Filter payments by from_created_date."
      },
      {
        "name": "toCreatedDate",
        "schema": "string",
        "required": false,
        "description": "Filter payments by to_created_date."
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments",
    "method": "createPayments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Create one or more payments",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "async",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "payments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "trade_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "An error message."
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments/{payment_id}",
    "method": "deletePaymentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Delete a payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique idenifier for payment",
        "example": "PAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Payment or client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments/{payment_id}",
    "method": "getPaymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Retrieve a payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique idenifier for payment",
        "example": "PAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client or payment ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments/{payment_id}",
    "method": "authorisePayment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Authorise or reject a payment",
    "parameters": [
      {
        "name": "paymentId",
        "schema": "string",
        "required": true,
        "description": "Unique idenifier for payment",
        "example": "PAYMENT_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "The action to take (authorise or reject)",
        "example": "ACTION"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Payment successfully authorised or rejected"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Payment or client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments/fees",
    "method": "getFee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get the fee of payments",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "beneficiaryId",
        "schema": "string",
        "required": true,
        "description": "The ID of the beneficiary",
        "example": "BENEFICIARY_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "paymentAmount",
        "schema": "number",
        "required": true,
        "description": "The amount of the payment",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This model is a representation of a payment fee."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/payments/fees_estimate",
    "method": "estimateFee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Get the estimate fee of payments",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": true,
        "description": "The ID of the contact",
        "example": "X-CONTACT-ID"
      },
      {
        "name": "paymentAmount",
        "schema": "number",
        "required": true,
        "description": "The amount of the payment",
        "example": 0
      },
      {
        "name": "paymentCurrency",
        "schema": "string",
        "required": true,
        "description": "The currency of the payment",
        "example": "PAYMENT_CURRENCY"
      },
      {
        "name": "paymentCountry",
        "schema": "string",
        "required": false,
        "description": "The destination country of the payment"
      },
      {
        "name": "paymentIntraEbury",
        "schema": "boolean",
        "required": false,
        "description": "boolean flag to filter by Ebury intra payments or not"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This model is a representation of a payment fee estimate."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/ping",
    "method": "connectivityTest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ping",
    "typeScriptTag": "ping",
    "description": "Test connectivity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Everything is right"
      }
    ]
  },
  {
    "url": "/ping",
    "method": "connectivityTest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ping",
    "typeScriptTag": "ping",
    "description": "Test connectivity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Everything is right"
      }
    ]
  },
  {
    "url": "/quotes",
    "method": "createFirmQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Get an estimate or firm quote",
    "parameters": [
      {
        "name": "quoteType",
        "schema": "string",
        "required": true,
        "description": "The quote type. A quote_type of quote returns a quote ID which a trade can be booked against",
        "example": "QUOTE_TYPE"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client this quote is for",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "buy_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUY_CURRENCY"
      },
      {
        "name": "operation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPERATION"
      },
      {
        "name": "sell_currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SELL_CURRENCY"
      },
      {
        "name": "trade_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRADE_TYPE"
      },
      {
        "name": "value_date",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/quotes/fx-availability",
    "method": "getFxAvailability",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Get the availability for FX markets",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/token",
    "method": "tokenAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Token",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Where credentials is a Base64 encoded string of auth_client_id:auth_client_secret",
        "example": "AUTHORIZATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Access token and refresh token data"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/token/{contact_id}",
    "method": "tokenForContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TrustedAuthentication",
    "typeScriptTag": "trustedAuthentication",
    "description": "Token for a Contact",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Where credentials is a Base64 encoded string of auth_client_id:auth_client_secret",
        "example": "AUTHORIZATION"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The id of the contact",
        "example": "CONTACT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Access token data"
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/trades",
    "method": "getAllForClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trades",
    "typeScriptTag": "trades",
    "description": "Get all trades",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "tradeType",
        "schema": "array",
        "required": false,
        "description": "The trade type. The list will be filtered to include only trades with a matching trade type."
      },
      {
        "name": "parentTradeId",
        "schema": "string",
        "required": false,
        "description": "Parent identifier for drawdown trades"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The desired page number for pagination. By default is 1."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "The number of items per page for pagination. By default is 50."
      },
      {
        "name": "externalReferenceId",
        "schema": "string",
        "required": false,
        "description": "Filter by payment level's external_reference_id."
      },
      {
        "name": "massPaymentId",
        "schema": "string",
        "required": false,
        "description": "Filter by related mass payment's uuid."
      },
      {
        "name": "massPaymentExternalReferenceId",
        "schema": "string",
        "required": false,
        "description": "Filter by related mass payment's external reference."
      },
      {
        "name": "buyCurrency",
        "schema": "string",
        "required": false,
        "description": "Filter by the buy currency"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "Filter trades by comma separated statuses",
        "example": "Funds In Full,Closed"
      },
      {
        "name": "externalReferenceId",
        "schema": "string",
        "required": false,
        "description": "Filter by the API external reference id"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client or quote ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/trades",
    "method": "createTrade",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trades",
    "typeScriptTag": "trades",
    "description": "Create a Trade",
    "parameters": [
      {
        "name": "quoteId",
        "schema": "string",
        "required": true,
        "description": "The identifier of the quote",
        "example": "QUOTE_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trade_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_reference_id",
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
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client or quote ID not found"
      },
      {
        "statusCode": "409",
        "description": "An error message."
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/trades/{trade_id}",
    "method": "getTradeById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trades",
    "typeScriptTag": "trades",
    "description": "Get a trade",
    "parameters": [
      {
        "name": "tradeId",
        "schema": "string",
        "required": true,
        "description": "Trade identifier",
        "example": "TRADE_ID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client or trade ID not found"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/transactions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Get transactions for all client accounts",
    "parameters": [
      {
        "name": "currencies",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of currency codes compliant to ISO 4217",
        "example": "CURRENCIES"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "creditDebitIndicator",
        "schema": "string",
        "required": false,
        "description": "Filter transactions by debit/credit type"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "The access token",
        "example": "AUTHORIZATION"
      },
      {
        "name": "xContactId",
        "schema": "string",
        "required": false,
        "description": "The ID of the contact"
      },
      {
        "name": "fromValueDatetime",
        "schema": "string",
        "description": "Only return transactions with value date and time after this UTC date and time. YYYY-MM-DDThh:mm format"
      },
      {
        "name": "toValueDatetime",
        "schema": "string",
        "description": "Only return transactions with value date and time before this UTC date and time. YYYY-MM-DDThh:mm format"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The desired page number for pagination",
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of items per page for pagination",
        "default": 50
      },
      {
        "name": "transactionType",
        "schema": "string",
        "description": "Only return transactions of the specified transaction type."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "An error message."
      },
      {
        "statusCode": "404",
        "description": "Client ID not found"
      },
      {
        "statusCode": "409",
        "description": "Could not update contact due to data constraint or conflict with contact status. Refer to error message for additional details"
      },
      {
        "statusCode": "502",
        "description": "An error message."
      },
      {
        "statusCode": "504",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/verify",
    "method": "verify2FaCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Verify",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Where credentials is a Base64 encoded string of auth_client_id:auth_client_secret",
        "example": "AUTHORIZATION"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Your Authorization Client ID, identifies your application to the Authorisation Server",
        "example": "CLIENT_ID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Your Authorization Client ID, identifies your application to the Authorisation Server",
        "example": "CODE"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": true,
        "description": "The redirect URL that is registered for your application. This must match the value we hold.",
        "example": "REDIRECT_URI"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "302",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "An error message."
      },
      {
        "statusCode": "495",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/send-verification-code",
    "method": "sendVerificationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2.0",
    "typeScriptTag": "oAuth20",
    "description": "Send verification code",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Where credentials is a Base64 encoded string of auth_client_id:auth_client_secret",
        "example": "AUTHORIZATION"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Your Authorization Client ID, identifies your application to the Authorisation Server",
        "example": "CLIENT_ID"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Your Authorization Client ID, identifies your application to the Authorisation Server",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Verification code has been resended correctly."
      },
      {
        "statusCode": "400",
        "description": "An error message."
      },
      {
        "statusCode": "401",
        "description": "An error message."
      }
    ]
  },
  {
    "url": "/webhooks/graphql",
    "method": "executeGraphqlQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Execute a GraphQL query over the webhooks API",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The ID of the client",
        "example": "CLIENT_ID"
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
      },
      {
        "name": "variables",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Query was executed and the result is in the body"
      },
      {
        "statusCode": "400",
        "description": "Invalid request"
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      }
    ]
  },
  {
    "url": "/webhooks/ping/{subscription_id}",
    "method": "pingSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Ping a subscription",
    "parameters": [
      {
        "name": "subscriptionId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the subscription",
        "example": "SUBSCRIPTION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Ping was successful"
      },
      {
        "statusCode": "401",
        "description": "Access denied due to authentication failure"
      },
      {
        "statusCode": "403",
        "description": "Could not complete action due to data constraints. Refer to error message for additional details"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Ebury API"
      apiBaseUrl="https://{environment}.ebury.io/"
      apiVersion="0.1"
      endpoints={46}
      sdkMethods={64}
      schemas={102}
      parameters={228}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ebury/openapi.yaml"
      developerDocumentation="docs.ebury.io"
    />
  );
}
  