import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function LobTypeScriptSdk() {
  return (
    <Sdk
      sdkName="lob-typescript-sdk"
      metaDescription="Lob provides a suite of APIs to deliver mail, including address verification, mail tracking, and more. Our print & mail API is used by companies large and small to send postcards, letters, and checks."
      company="Lob"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/logo.svg"
      clientNameCamelCase="lob"
      homepage="lob.com"
      lastUpdated={new Date("2024-02-17T01:07:29.666Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/favicon.png"
      contactUrl="https://support.lob.com/"
      contactEmail="lob-openapi@lob.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/accounts",
    "method": "getCreditsBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Get Lob Credits Balance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/addresses",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/addresses",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/addresses/{adr_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/addresses/{adr_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Addresses",
    "typeScriptTag": "addresses",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bank_accounts/{bank_id}/verify",
    "method": "verifyBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Verify",
    "parameters": [
      {
        "name": "amounts",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bank_accounts/{bank_id}",
    "method": "deleteBankAccount",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bank_accounts/{bank_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bank_accounts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bank_accounts",
    "method": "createNewBankAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Bank Accounts",
    "typeScriptTag": "bankAccounts",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "routing_number",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "account_number",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "account_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "signatory",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "check_template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fractional_routing_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zipcode",
        "schema": "string",
        "required": false,
        "description": ""
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
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/billing_groups/{bg_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing Groups",
    "typeScriptTag": "billingGroups",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/billing_groups/{bg_id}",
    "method": "updateAttributes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing Groups",
    "typeScriptTag": "billingGroups",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/billing_groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing Groups",
    "typeScriptTag": "billingGroups",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "An integer that designates the offset at which to begin returning results. Defaults to 0."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "dateModified",
        "schema": "object",
        "description": "Filter by date modified. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "sortBy",
        "schema": "undefined",
        "description": "Sorts items by ascending or descending dates. Use either `date_created` or `date_modified`, not both.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/billing_groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing Groups",
    "typeScriptTag": "billingGroups",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Buckslips",
    "typeScriptTag": "buckslips",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Buckslips",
    "typeScriptTag": "buckslips",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips/{buckslip_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Buckslips",
    "typeScriptTag": "buckslips",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips/{buckslip_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Buckslips",
    "typeScriptTag": "buckslips",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips/{buckslip_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Buckslips",
    "typeScriptTag": "buckslips",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_reorder",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reorder_quantity",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips/{buckslip_id}/orders",
    "method": "getByBuckslipId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Buckslip Orders",
    "typeScriptTag": "buckslipOrders",
    "description": "Retrieve",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "An integer that designates the offset at which to begin returning results. Defaults to 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/buckslips/{buckslip_id}/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Buckslip Orders",
    "typeScriptTag": "buckslipOrders",
    "description": "Create",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bulk/us_verifications",
    "method": "bulkVerifyAddresses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "US Verifications",
    "typeScriptTag": "usVerifications",
    "description": "Bulk Verify",
    "parameters": [
      {
        "name": "case",
        "schema": "string",
        "required": false,
        "description": "Casing of the verified address. Possible values are `upper` and `proper` for uppercased (e.g. \"PO BOX\") and proper-cased (e.g. \"PO Box\"), respectively. Only affects `recipient`, `primary_line`, `secondary_line`, `urbanization`, and `last_line`. Default casing is `upper`."
      },
      {
        "name": "addresses",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/bulk/intl_verifications",
    "method": "verifyBulkAddresses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Intl Verifications",
    "typeScriptTag": "intlVerifications",
    "description": "Bulk Verify",
    "parameters": [
      {
        "name": "addresses",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/campaigns",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
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
    "url": "/campaigns",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Create",
    "parameters": [
      {
        "name": "xLangOutput",
        "schema": "string",
        "required": false,
        "description": "* `native` - Translate response to the native language of the country in the request\n* `match` - match the response to the language in the request\n\nDefault response is in English.\n"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_group_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "schedule_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "target_delivery_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "send_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cancel_window_campaign_minutes",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "use_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "auto_cancel_if_ncoa",
        "schema": "boolean",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/campaigns/{cmp_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/campaigns/{cmp_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/campaigns/{cmp_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Update",
    "parameters": [
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
        "name": "schedule_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "target_delivery_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "send_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cancel_window_campaign_minutes",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_draft",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cancel_if_ncoa",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/campaigns/{cmp_id}/send",
    "method": "send",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Send Campaign",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Create",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards/{card_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards/{card_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards/{card_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_reorder",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "reorder_quantity",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards/{card_id}/orders",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Orders",
    "typeScriptTag": "cardOrders",
    "description": "Retrieve",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "An integer that designates the offset at which to begin returning results. Defaults to 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/cards/{card_id}/orders",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card Orders",
    "typeScriptTag": "cardOrders",
    "description": "Create",
    "parameters": [
      {
        "name": "quantity",
        "schema": "integer",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/checks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Checks",
    "typeScriptTag": "checks",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      },
      {
        "name": "scheduled",
        "schema": "boolean",
        "description": "* `true` - only return orders (past or future) where `send_date` is\ngreater than `date_created`\n* `false` - only return orders where `send_date` is equal to `date_created`\n"
      },
      {
        "name": "sendDate",
        "schema": "string",
        "description": "Filter by ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.\n"
      },
      {
        "name": "mailType",
        "schema": "string",
        "description": "A string designating the mail postage type: * `usps_first_class` - (default) * `usps_standard` - a <a href=\"https://lob.com/pricing/print-mail#compare\" target=\"_blank\">cheaper option</a> which is less predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6` postcards or for any postcards sent outside of the United States.\n"
      },
      {
        "name": "sortBy",
        "schema": "undefined",
        "description": "Sorts items by ascending or descending dates. Use either `date_created` or `send_date`, not both.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A string describing the render status:\n* `processed` - the rendering process is currently underway.\n* `rendered` - the rendering process has completed successfully.\n* `failed` - the rendering process has failed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/checks",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Checks",
    "typeScriptTag": "checks",
    "description": "Create",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/checks/{chk_id}",
    "method": "cancel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Checks",
    "typeScriptTag": "checks",
    "description": "Cancel",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/checks/{chk_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Checks",
    "typeScriptTag": "checks",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/creatives",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Creatives",
    "typeScriptTag": "creatives",
    "description": "Create",
    "parameters": [
      {
        "name": "xLangOutput",
        "schema": "string",
        "required": false,
        "description": "* `native` - Translate response to the native language of the country in the request\n* `match` - match the response to the language in the request\n\nDefault response is in English.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/creatives/{crv_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Creatives",
    "typeScriptTag": "creatives",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/creatives/{crv_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Creatives",
    "typeScriptTag": "creatives",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "undefined",
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
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/identity_validation",
    "method": "validation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Identity Validation",
    "typeScriptTag": "identityValidation",
    "description": "Identity Validation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/intl_autocompletions",
    "method": "autocompletions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Intl Autocompletions",
    "typeScriptTag": "intlAutocompletions",
    "description": "Autocomplete",
    "parameters": [
      {
        "name": "xLangOutput",
        "schema": "string",
        "required": false,
        "description": "* `native` - Translate response to the native language of the country in the request\n* `match` - match the response to the language in the request\n\nDefault response is in English.\n"
      },
      {
        "name": "address_prefix",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "geo_ip_sort",
        "schema": "boolean",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/intl_verifications",
    "method": "verification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Intl Verifications",
    "typeScriptTag": "intlVerifications",
    "description": "Single Verify",
    "parameters": [
      {
        "name": "xLangOutput",
        "schema": "string",
        "required": false,
        "description": "* `native` - Translate response to the native language of the country in the request\n* `match` - match the response to the language in the request\n\nDefault response is in English.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/letters/{ltr_id}",
    "method": "cancel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Letters",
    "typeScriptTag": "letters",
    "description": "Cancel",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/letters/{ltr_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Letters",
    "typeScriptTag": "letters",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/letters",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Letters",
    "typeScriptTag": "letters",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      },
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "Filters resources created by the provided campaign id, prefixed with `cmp_`."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A string describing the render status:\n* `processed` - the rendering process is currently underway.\n* `rendered` - the rendering process has completed successfully.\n* `failed` - the rendering process has failed.\n"
      },
      {
        "name": "color",
        "schema": "boolean",
        "description": "Set to `true` to return only color letters. Set to `false` to return only black & white letters."
      },
      {
        "name": "scheduled",
        "schema": "boolean",
        "description": "* `true` - only return orders (past or future) where `send_date` is\ngreater than `date_created`\n* `false` - only return orders where `send_date` is equal to `date_created`\n"
      },
      {
        "name": "sendDate",
        "schema": "string",
        "description": "Filter by ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.\n"
      },
      {
        "name": "mailType",
        "schema": "string",
        "description": "A string designating the mail postage type: * `usps_first_class` - (default) * `usps_standard` - a <a href=\"https://lob.com/pricing/print-mail#compare\" target=\"_blank\">cheaper option</a> which is less predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6` postcards or for any postcards sent outside of the United States.\n"
      },
      {
        "name": "sortBy",
        "schema": "undefined",
        "description": "Sorts items by ascending or descending dates. Use either `date_created` or `send_date`, not both.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/letters",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Letters",
    "typeScriptTag": "letters",
    "description": "Create",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/postcards/{psc_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Postcards",
    "typeScriptTag": "postcards",
    "description": "Cancel",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/postcards/{psc_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Postcards",
    "typeScriptTag": "postcards",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/postcards",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Postcards",
    "typeScriptTag": "postcards",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      },
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "Filters resources created by the provided campaign id, prefixed with `cmp_`."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A string describing the render status:\n* `processed` - the rendering process is currently underway.\n* `rendered` - the rendering process has completed successfully.\n* `failed` - the rendering process has failed.\n"
      },
      {
        "name": "size",
        "schema": "array",
        "description": "Specifies the size of the postcard. Only `4x6` postcards can be sent to international destinations."
      },
      {
        "name": "scheduled",
        "schema": "boolean",
        "description": "* `true` - only return orders (past or future) where `send_date` is\ngreater than `date_created`\n* `false` - only return orders where `send_date` is equal to `date_created`\n"
      },
      {
        "name": "sendDate",
        "schema": "string",
        "description": "Filter by ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.\n"
      },
      {
        "name": "mailType",
        "schema": "string",
        "description": "A string designating the mail postage type: * `usps_first_class` - (default) * `usps_standard` - a <a href=\"https://lob.com/pricing/print-mail#compare\" target=\"_blank\">cheaper option</a> which is less predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6` postcards or for any postcards sent outside of the United States.\n"
      },
      {
        "name": "sortBy",
        "schema": "undefined",
        "description": "Sorts items by ascending or descending dates. Use either `date_created` or `send_date`, not both.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/postcards",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Postcards",
    "typeScriptTag": "postcards",
    "description": "Create",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/qr_code_analytics",
    "method": "getSortedQrCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QR Codes",
    "typeScriptTag": "qrCodes",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "An integer that designates the offset at which to begin returning results. Defaults to 0."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "scanned",
        "schema": "boolean",
        "description": "Filter list of responses to only include QR codes with at least one scan event."
      },
      {
        "name": "resourceIds",
        "schema": "array",
        "description": "Filter by the resource ID."
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
    "url": "/domains/{domain_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Delete a Domain",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/domains/{domain_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Retrieve a domain",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/domains",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "List all domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/domains",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Create Domain",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/domains/{domain_id}/links",
    "method": "deleteAllLinksForDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Delete all links for a domain",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/links",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Retrieve all shortened links",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "An integer that designates the offset at which to begin returning results. Defaults to 0."
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      },
      {
        "name": "campaignId",
        "schema": "string",
        "description": "Filter the links generated for a particular campaign using its campaign id."
      },
      {
        "name": "clicked",
        "schema": "boolean",
        "description": "Retrieve the list of links that have been opened."
      },
      {
        "name": "billingGroupId",
        "schema": "string",
        "description": "Filter the links generated for a particular billing group id."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/links/{link_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Delete Link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/links/{link_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Retrieve a link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/links/{link_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Update a Link",
    "parameters": [
      {
        "name": "redirect_link",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata_tag",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_group_id",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/links/shorten",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Create Link",
    "parameters": [
      {
        "name": "redirect_link",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata_tag",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billing_group_id",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/links/shorten/bulk",
    "method": "bulkShortenLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "URL Shortener",
    "typeScriptTag": "urlShortener",
    "description": "Bulk Create Links",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/self_mailers/{sfm_id}",
    "method": "removeSelfMailer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Self Mailers",
    "typeScriptTag": "selfMailers",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/self_mailers/{sfm_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Self Mailers",
    "typeScriptTag": "selfMailers",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/self_mailers",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Self Mailers",
    "typeScriptTag": "selfMailers",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      },
      {
        "name": "size",
        "schema": "array",
        "description": "The self mailer sizes to be returned."
      },
      {
        "name": "scheduled",
        "schema": "boolean",
        "description": "* `true` - only return orders (past or future) where `send_date` is\ngreater than `date_created`\n* `false` - only return orders where `send_date` is equal to `date_created`\n"
      },
      {
        "name": "sendDate",
        "schema": "string",
        "description": "Filter by ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤.\n"
      },
      {
        "name": "mailType",
        "schema": "string",
        "description": "A string designating the mail postage type: * `usps_first_class` - (default) * `usps_standard` - a <a href=\"https://lob.com/pricing/print-mail#compare\" target=\"_blank\">cheaper option</a> which is less predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6` postcards or for any postcards sent outside of the United States.\n"
      },
      {
        "name": "sortBy",
        "schema": "undefined",
        "description": "Sorts items by ascending or descending dates. Use either `date_created` or `send_date`, not both.\n"
      },
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "Filters resources created by the provided campaign id, prefixed with `cmp_`."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "A string describing the render status:\n* `processed` - the rendering process is currently underway.\n* `rendered` - the rendering process has completed successfully.\n* `failed` - the rendering process has failed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/self_mailers",
    "method": "createNewSelfMailer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Self Mailers",
    "typeScriptTag": "selfMailers",
    "description": "Create",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our <a href=\"https://help.lob.com/print-and-mail/building-a-mail-strategy/managing-mail-settings#idempotent-requests-12\" target=\"_blank\">implementation guide</a>.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}/versions/{vrsn_id}",
    "method": "deleteVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Template Versions",
    "typeScriptTag": "templateVersions",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}/versions/{vrsn_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template Versions",
    "typeScriptTag": "templateVersions",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}/versions/{vrsn_id}",
    "method": "updateTemplateVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template Versions",
    "typeScriptTag": "templateVersions",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "engine",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required_vars",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}/versions",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Template Versions",
    "typeScriptTag": "templateVersions",
    "description": "List",
    "parameters": [
      {
        "name": "tmplId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template associated with the retrieved versions"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}/versions",
    "method": "createNewVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Template Versions",
    "typeScriptTag": "templateVersions",
    "description": "Create",
    "parameters": [
      {
        "name": "tmplId",
        "schema": "string",
        "required": true,
        "description": "The ID of the template the new version will be attached to"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "html",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "engine",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "required_vars",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Delete",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates/{tmpl_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "published_version",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "List",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "How many results to return."
      },
      {
        "name": "before/after",
        "schema": "undefined",
        "required": false,
        "description": "`before` and `after` are both optional but only one of them can be in the query at a time.\n"
      },
      {
        "name": "include",
        "schema": "array",
        "description": "Request that the response include the total count by specifying `include=[\"total_count\"]`.\n"
      },
      {
        "name": "dateCreated",
        "schema": "object",
        "description": "Filter by date created. Accepted formats are ISO-8601 date or datetime, e.g. `{ \"gt\": \"2012-01-01\", \"lt\": \"2012-01-31T12:34:56Z\" }` where `gt` is >, `lt` is <, `gte` is ≥, and `lte` is ≤."
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": "Filter by metadata key-value pair`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/templates",
    "method": "template",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates",
    "typeScriptTag": "templates",
    "description": "Create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "html",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "engine",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "required_vars",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/uploads",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "List",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "id of the campaign"
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
    "url": "/uploads",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Create",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "requiredAddressColumnMapping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "optionalAddressColumnMapping",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "mergeVariableColumnMapping",
        "schema": "object",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/{upl_id}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Delete",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/uploads/{upl_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Retrieve",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/{upl_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Update",
    "parameters": [
      {
        "name": "originalFilename",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requiredAddressColumnMapping",
        "schema": "object",
        "description": ""
      },
      {
        "name": "optionalAddressColumnMapping",
        "schema": "object",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "mergeVariableColumnMapping",
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
        "statusCode": "404",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/{upl_id}/file",
    "method": "file",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Upload file",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/{upl_id}/exports",
    "method": "createExportFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Create Export",
    "parameters": [
      {
        "name": "type",
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
        "statusCode": "4XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/{upl_id}/report",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Retrieve Line Item Report",
    "parameters": [],
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
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/uploads/{upl_id}/exports/{ex_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Retrieve Export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/us_autocompletions",
    "method": "getSuggestions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "US Autocompletions",
    "typeScriptTag": "usAutocompletions",
    "description": "Autocomplete",
    "parameters": [
      {
        "name": "case",
        "schema": "string",
        "required": false,
        "description": "Casing of the verified address. Possible values are `upper` and `proper` for uppercased (e.g. \"PO BOX\") and proper-cased (e.g. \"PO Box\"), respectively. Only affects `primary_line`, `city`, and `state`. Default casing is `upper`."
      },
      {
        "name": "validAddresses",
        "schema": "boolean",
        "required": false,
        "description": "Possible values are `true` and `false`. If false, not all of the suggestions in the response will be valid addresses; they'll need to be verified in order to determine the deliverability. The valid_addresses flag will greatly reduce the number of keystrokes needed before reaching an intended address."
      },
      {
        "name": "address_prefix",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "geo_ip_sort",
        "schema": "boolean",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/us_reverse_geocode_lookups",
    "method": "usLocationWithLiveApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reverse Geocode Lookups",
    "typeScriptTag": "reverseGeocodeLookups",
    "description": "Reverse Geocode Lookup",
    "parameters": [
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "Determines the number of locations returned. Possible values are between 1 and 50 and any number higher will be rounded down to 50. Default size is a list of 5 reverse geocoded locations."
      },
      {
        "name": "latitude",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "longitude",
        "schema": "number",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/us_verifications",
    "method": "verification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "US Verifications",
    "typeScriptTag": "usVerifications",
    "description": "Single Verify",
    "parameters": [
      {
        "name": "case",
        "schema": "string",
        "required": false,
        "description": "Casing of the verified address. Possible values are `upper` and `proper` for uppercased (e.g. \"PO BOX\") and proper-cased (e.g. \"PO Box\"), respectively. Only affects `recipient`, `primary_line`, `secondary_line`, `urbanization`, and `last_line`. Default casing is `upper`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  },
  {
    "url": "/us_zip_lookups",
    "method": "lookup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Zip Lookups",
    "typeScriptTag": "zipLookups",
    "description": "Lookups",
    "parameters": [
      {
        "name": "zip_code",
        "schema": "string",
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
        "statusCode": "default",
        "description": "Lob uses RESTful HTTP response codes to indicate success or failure of an API request. In general, 2xx indicates success, 4xx indicate an input error, and 5xx indicates an error on Lob's end."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Lob"
      apiBaseUrl="https://api.lob.com/v1"
      apiVersion="1.19.24"
      endpoints={54}
      sdkMethods={118}
      schemas={272}
      parameters={216}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lob/openapi.yaml"
    />
  );
}
  