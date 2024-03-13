import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function BrexTeamTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="brex-team-typescript-sdk"
      metaDescription={`Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale.`}
      company="Brex"
      serviceName="Team"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/logo.png"
      clientNameCamelCase="brexTeam"
      homepage="brex.com"
      lastUpdated={new Date("2024-03-13T22:23:48.955Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/favicon.png"
      contactUrl="https://brex.com"
      contactEmail="developer-access@brex.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["finance","payments","online_payments","fintech","automation","banking"]}
      methods={[
  {
    "url": "/v2/cards",
    "method": "listByUserId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nList cards\n",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/v2/cards",
    "method": "createNewCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nCreate card\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "owner",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "card_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_NAME"
      },
      {
        "name": "card_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARD_TYPE"
      },
      {
        "name": "limit_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LIMIT_TYPE"
      },
      {
        "name": "spend_controls",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "mailing_address",
        "schema": "undefined",
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
        "name": "card_attribute_preferences",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "\nOnly cards with limit_type = CARD have spend_controls\n"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nGet card\n",
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
        "description": "\nOnly cards with limit_type = CARD have spend_controls\n"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}",
    "method": "updateCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nUpdate card\n",
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
        "required": false,
        "description": ""
      },
      {
        "name": "spend_controls",
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
        "description": "\nOnly cards with limit_type = CARD have spend_controls\n"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}/lock",
    "method": "lockCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nLock card\n",
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
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "\nOnly cards with limit_type = CARD have spend_controls\n"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}/pan",
    "method": "getCardDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nGet card number\n",
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
        "description": "\nCard number, CVV, and expiration date of a card.\n"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}/secure_email",
    "method": "createSecureEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nCreate secure email to send card number \n",
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
        "name": "recipient_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiry_days",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "emailCardNumber 200 response"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}/terminate",
    "method": "terminateExistingCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nTerminate card\n",
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
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "\nOnly cards with limit_type = CARD have spend_controls\n"
      }
    ]
  },
  {
    "url": "/v2/cards/{id}/unlock",
    "method": "unlockExistingCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "\nUnlock card\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
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
        "description": "\nOnly cards with limit_type = CARD have spend_controls\n"
      }
    ]
  },
  {
    "url": "/v2/company",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "\nGet company\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/departments",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "\nList departments\n",
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
      },
      {
        "name": "name",
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
    "url": "/v2/departments",
    "method": "addNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "\nCreate department\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": ""
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
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/v2/departments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "\nGet department\n",
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
      }
    ]
  },
  {
    "url": "/v2/locations",
    "method": "getAllLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "\nList locations\n",
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
      },
      {
        "name": "name",
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
    "url": "/v2/locations",
    "method": "addNewLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "\nCreate location\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": ""
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
        "required": true,
        "description": "",
        "example": "NAME"
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
    "url": "/v2/locations/{id}",
    "method": "getLocationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "\nGet location\n",
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
      }
    ]
  },
  {
    "url": "/v2/titles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Titles",
    "typeScriptTag": "titles",
    "description": "\nList titles\n",
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
      },
      {
        "name": "name",
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
    "url": "/v2/titles",
    "method": "createNewTitle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Titles",
    "typeScriptTag": "titles",
    "description": "\nCreate title\n",
    "parameters": [
      {
        "name": "idempotencyKey",
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
    "url": "/v2/titles/{id}",
    "method": "getTitleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Titles",
    "typeScriptTag": "titles",
    "description": "\nGet title\n",
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
      }
    ]
  },
  {
    "url": "/v2/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nList users\n",
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
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remoteDisplayId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expand[]",
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
    "url": "/v2/users",
    "method": "inviteNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nInvite user\n",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
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
        "name": "manager_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "title_id",
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
      }
    ]
  },
  {
    "url": "/v2/users/me",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nGet current user\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nGet user\n",
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
      }
    ]
  },
  {
    "url": "/v2/users/{id}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nUpdate user\n",
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
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "manager_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "title_id",
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
    "url": "/v2/users/{id}/limit",
    "method": "getMonthlyLimit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nGet limit for the user\n",
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
      }
    ]
  },
  {
    "url": "/v2/users/{id}/limit",
    "method": "setMonthlyLimit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "\nSet limit for the user\n",
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
        "required": false,
        "description": ""
      },
      {
        "name": "monthly_limit",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Team API"
      apiBaseUrl="https://platform.brexapis.com"
      apiVersion="1.0"
      endpoints={18}
      sdkMethods={26}
      schemas={43}
      parameters={81}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/team/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brex/team/openapi.yaml"
      developerDocumentation="developer.brex.com/openapi/team_api/"
    />
  );
}
  