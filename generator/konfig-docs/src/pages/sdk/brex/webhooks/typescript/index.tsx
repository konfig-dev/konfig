import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function BrexWebhooksTypeScriptSdk() {
  return (
    <Sdk
      sdkName="brex-webhooks-typescript-sdk"
      metaDescription="Brex is the AI-powered spend platform. We transform finance teams from reactive no-sayers to proactive growth drivers. With Brex, companies spend with confidence by empowering employees to make smarter financial decisions from anywhere. Brex provides corporate cards, business accounts, and global payments, plus intuitive software for travel and expenses, that make it easy to plan and track all company spend in one place, in real time. Over 20,000 companies from startups to global enterprises — including DoorDash, Flexport, and Compass — use Brex to proactively control spend, reduce costs, and increase efficiency on a global scale."
      company="Brex"
      serviceName="Webhooks"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/webhooks/logo.png"
      clientNameCamelCase="brexWebhooks"
      homepage="brex.com"
      lastUpdated={new Date("2024-03-13T01:51:56.035Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/webhooks/favicon.png"
      contactUrl="https://brex.com"
      contactEmail="developer-access@brex.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/webhooks/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["finance","payments","online_payments","fintech","automation","banking","global_payments","travel_expenses"]}
      methods={[
  {
    "url": "/v1/webhooks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "List Webhooks",
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
      },
      {
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "registerEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Register Webhook",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDEMPOTENCY-KEY"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "event_types",
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/webhooks/secrets",
    "method": "listSecrets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "List Webhook Secrets",
    "parameters": [],
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/webhooks/{id}",
    "method": "unregisterWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Unregister Webhook",
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
        "description": "deleteSubscription 200 response"
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/webhooks/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Get Webhook",
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  },
  {
    "url": "/v1/webhooks/{id}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhook Subscriptions",
    "typeScriptTag": "webhookSubscriptions",
    "description": "Update Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "event_types",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
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
        "statusCode": "500",
        "description": "Internal server error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Webhooks API"
      apiBaseUrl="https://platform.brexapis.com"
      apiVersion="0.1"
      endpoints={3}
      sdkMethods={6}
      schemas={28}
      parameters={11}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brex/webhooks/openapi.yaml"
    />
  );
}
  