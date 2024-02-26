import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function YouNeedABudgetTypeScriptSdk() {
  return (
    <Sdk
      sdkName="ynab-typescript-sdk"
      metaDescription="Working hard with nothing to show for it? Use your money more efficiently and control your spending and saving with the YNAB app."
      company="You Need A Budget"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/logo.png"
      clientNameCamelCase="ynab"
      homepage="api.youneedabudget.com"
      lastUpdated={new Date("2024-02-25T09:49:43.849Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/user",
    "method": "infoGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "User info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets",
    "method": "listSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "List budgets",
    "parameters": [
      {
        "name": "includeAccounts",
        "schema": "boolean",
        "description": "Whether to include the list of budget accounts"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}",
    "method": "getBudget",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Single budget",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "Budget Settings",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/accounts",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Account list",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/accounts",
    "method": "createNewAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Create a new account",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget (\"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)"
      },
      {
        "name": "account",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/accounts/{account_id}",
    "method": "getSingleAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Accounts",
    "typeScriptTag": "accounts",
    "description": "Single account",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the account"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/categories",
    "method": "listByBudgetId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "List categories",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/categories/{category_id}",
    "method": "getSingleCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Single category",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the category"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/categories/{category_id}",
    "method": "updateCategoryById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Update a category",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the category"
      },
      {
        "name": "category",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/months/{month}/categories/{category_id}",
    "method": "getMonthCategoryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Single category for a specific budget month",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the category"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/months/{month}/categories/{category_id}",
    "method": "updateMonthCategory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Update a category for a specific month",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the category"
      },
      {
        "name": "category",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/payees",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "List payees",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/payees/{payee_id}",
    "method": "getSinglePayee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payees",
    "typeScriptTag": "payees",
    "description": "Single payee",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "The id of the payee"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/payee_locations",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payee Locations",
    "typeScriptTag": "payeeLocations",
    "description": "List payee locations",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/payee_locations/{payee_location_id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payee Locations",
    "typeScriptTag": "payeeLocations",
    "description": "Single payee location",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "payeeLocationId",
        "schema": "string",
        "required": true,
        "description": "id of payee location"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/payees/{payee_id}/payee_locations",
    "method": "listByPayee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payee Locations",
    "typeScriptTag": "payeeLocations",
    "description": "List locations for a payee",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "id of payee"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/months",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Months",
    "typeScriptTag": "months",
    "description": "List budget months",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/months/{month}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Months",
    "typeScriptTag": "months",
    "description": "Single budget month",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "month",
        "schema": "string",
        "required": true,
        "description": "The budget month in ISO format (e.g. 2016-12-01) (\"current\" can also be used to specify the current calendar month (UTC))"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/transactions",
    "method": "listTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "sinceDate",
        "schema": "string",
        "description": "If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30)."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
    "url": "/budgets/{budget_id}/transactions",
    "method": "updateMultiple",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Update multiple transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "transactions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "209",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/transactions",
    "method": "createSingleOrMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create a single transaction or multiple transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "transaction",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "transactions",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/transactions/import",
    "method": "importLinkedAccounts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Import transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/transactions/{transaction_id}",
    "method": "deleteExistingTransaction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Deletes an existing transaction",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The id of the transaction"
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
    "url": "/budgets/{budget_id}/transactions/{transaction_id}",
    "method": "getSingleTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Single transaction",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The id of the transaction"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/transactions/{transaction_id}",
    "method": "updateExistingTransaction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Updates an existing transaction",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "transactionId",
        "schema": "string",
        "required": true,
        "description": "The id of the transaction"
      },
      {
        "name": "transaction",
        "schema": "undefined",
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
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/accounts/{account_id}/transactions",
    "method": "listByAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List account transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "accountId",
        "schema": "string",
        "required": true,
        "description": "The id of the account"
      },
      {
        "name": "sinceDate",
        "schema": "string",
        "description": "If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30)."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/categories/{category_id}/transactions",
    "method": "listByCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List category transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "The id of the category"
      },
      {
        "name": "sinceDate",
        "schema": "string",
        "description": "If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30)."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/payees/{payee_id}/transactions",
    "method": "listByPayee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List payee transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "payeeId",
        "schema": "string",
        "required": true,
        "description": "The id of the payee"
      },
      {
        "name": "sinceDate",
        "schema": "string",
        "description": "If specified, only transactions on or after this date will be included.  The date should be ISO formatted (e.g. 2016-12-30)."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "If specified, only transactions of the specified type will be included. \"uncategorized\" and \"unapproved\" are currently supported."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/scheduled_transactions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled Transactions",
    "typeScriptTag": "scheduledTransactions",
    "description": "List scheduled transactions",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "lastKnowledgeOfServer",
        "schema": "integer",
        "description": "The starting server knowledge.  If provided, only entities that have changed since `last_knowledge_of_server` will be included."
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/budgets/{budget_id}/scheduled_transactions/{scheduled_transaction_id}",
    "method": "getSingleScheduledTransaction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled Transactions",
    "typeScriptTag": "scheduledTransactions",
    "description": "Single scheduled transaction",
    "parameters": [
      {
        "name": "budgetId",
        "schema": "string",
        "required": true,
        "description": "The id of the budget. \"last-used\" can be used to specify the last used budget and \"default\" can be used if default budget selection is enabled (see: https://api.ynab.com/#oauth-default-budget)."
      },
      {
        "name": "scheduledTransactionId",
        "schema": "string",
        "required": true,
        "description": "The id of the scheduled transaction"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="YNAB API Endpoints"
      apiBaseUrl="https://api.ynab.com/v1"
      apiVersion="1.67.0"
      endpoints={24}
      sdkMethods={31}
      schemas={66}
      parameters={73}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/you-need-a-budget/openapi.yaml"
    />
  );
}
  