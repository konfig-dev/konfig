import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrexBudgetsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="brex-budgets-typescript-sdk"
      metaDescription="Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale."
      company="Brex"
      serviceName="Budgets"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/logo.png"
      clientNameCamelCase="brexBudgets"
      homepage="brex.com"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/favicon.png"
      contactUrl="https://brex.com"
      contactEmail="developer-access@brex.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","automation","global_payments","travel_expenses","banking","business_accounts","corporate_cards"]}
      methods={[
  {
    "url": "/v1/budget_programs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budget Programs",
    "typeScriptTag": "budgetPrograms",
    "description": "\nList Budget Programs\n",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v1/budget_programs",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Budget Programs",
    "typeScriptTag": "budgetPrograms",
    "description": "\nCreate Budget Program\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "existing_budget_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "budget_blueprints",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "employee_filter",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "\nBudget Program used to create budgets for eligible users.\n"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v1/budget_programs/{id}",
    "method": "removeProgramById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Budget Programs",
    "typeScriptTag": "budgetPrograms",
    "description": "\nDelete Budget Program\n",
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
        "description": "\nBudget Program used to create budgets for eligible users.\n"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/budget_programs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budget Programs",
    "typeScriptTag": "budgetPrograms",
    "description": "\nGet Budget Program\n",
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
        "description": "\nBudget Program used to create budgets for eligible users.\n"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/budget_programs/{id}",
    "method": "updateProgramById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Budget Programs",
    "typeScriptTag": "budgetPrograms",
    "description": "\nUpdate Budget Program\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "existing_budget_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "budget_blueprints",
        "schema": "array",
        "description": ""
      },
      {
        "name": "employee_filter",
        "schema": "undefined",
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
        "description": "\nBudget Program used to create budgets for eligible users.\n"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/budgets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "\nList Budgets\n",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v1/budgets",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "\nCreate Budget\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_budget_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_BUDGET_ID"
      },
      {
        "name": "owner_user_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "member_user_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "period_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERIOD_TYPE"
      },
      {
        "name": "limit",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "limit_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIMIT_TYPE"
      },
      {
        "name": "spend_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPEND_TYPE"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit_visibility",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIMIT_VISIBILITY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v1/budgets/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "\nGet Budget\n",
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
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/budgets/{id}",
    "method": "updateBudget",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "\nUpdate Budget\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
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
        "name": "owner_user_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "member_user_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "limit_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "spend_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit_visibility",
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
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/v1/budgets/{id}/archive",
    "method": "archiveBudgetById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Budgets",
    "typeScriptTag": "budgets",
    "description": "\nArchive a budget\n",
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
        "description": "archiveBudget 200 response"
      },
      {
        "statusCode": "400",
        "description": "Bad request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Budgets API"
      apiBaseUrl="https://platform.brexapis.com"
      apiVersion="1.0"
      endpoints={5}
      sdkMethods={10}
      schemas={22}
      parameters={46}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/budgets/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/budgets/openapi.yaml"
      developerDocumentation="developer.brex.com/openapi/budgets_api/"
    />
  );
}
  