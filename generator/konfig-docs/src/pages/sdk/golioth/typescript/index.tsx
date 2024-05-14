import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GoliothTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="golioth-typescript-sdk"
      metaDescription={`Built IoT your way without the stress. Securely connect your MCU then capture and route sensor data anywhere with the Golioth SDK. Build secure, scalable, and innovative IoT in a fraction of the time.`}
      company="Golioth"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/logo.png"
      companyKebabCase="golioth"
      clientNameCamelCase="golioth"
      homepage="golioth.io"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["iot","hardware"]}
      methods={[
  {
    "url": "/v1/artifacts",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Artifacts",
    "typeScriptTag": "artifacts",
    "description": "",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "package",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/billing/webhook",
    "method": "paymentWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "",
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
    "url": "/v1/boards",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boards",
    "typeScriptTag": "boards",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "platform",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/boards/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boards",
    "typeScriptTag": "boards",
    "description": "",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/integration-types",
    "method": "listIntegrationTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "",
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
    "url": "/v1/organizations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      }
    ],
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
    "url": "/v1/organizations/{organizationId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}/checkout_sessions",
    "method": "createCheckoutSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "callbackPath",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}/customer_portal_sessions",
    "method": "createCustomerPortalSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "callbackPath",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/organizations/{organizationId}/quotas",
    "method": "getQuota",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      }
    ],
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
    "url": "/v1/organizations/{organizationId}/usage",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Usage",
    "typeScriptTag": "usage",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "",
    "parameters": [
      {
        "name": "name",
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
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/apikeys",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/apikeys",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "API_KEY"
      },
      {
        "name": "keyTags",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/apikeys/{apikeyId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "apikeyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIKEYID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/apikeys/{apikeyId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "apikeyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIKEYID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "API_KEY"
      },
      {
        "name": "keyTags",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/artifacts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artifacts",
    "typeScriptTag": "artifacts",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "package",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/artifacts/{artifactId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Artifacts",
    "typeScriptTag": "artifacts",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "artifactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ARTIFACTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/artifacts/{artifactId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artifacts",
    "typeScriptTag": "artifacts",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "artifactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ARTIFACTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/artifacts/{artifactId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Artifacts",
    "typeScriptTag": "artifacts",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "artifactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ARTIFACTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/artifacts/{artifactId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Artifacts",
    "typeScriptTag": "artifacts",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "artifactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ARTIFACTID"
      },
      {
        "name": "updateMask",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/blueprints",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blueprints",
    "typeScriptTag": "blueprints",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "blueprintName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "boardId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "platform",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/blueprints",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Blueprints",
    "typeScriptTag": "blueprints",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boardId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/blueprints/{blueprintId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Blueprints",
    "typeScriptTag": "blueprints",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BLUEPRINTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/blueprints/{blueprintId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blueprints",
    "typeScriptTag": "blueprints",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BLUEPRINTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/blueprints/{blueprintId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Blueprints",
    "typeScriptTag": "blueprints",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BLUEPRINTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boardId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/blueprints/{blueprintId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Blueprints",
    "typeScriptTag": "blueprints",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BLUEPRINTID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "boardId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "platform",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/certificates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "TODO: filter by: device_id, enabled/disabled, start/end expiration date, cert type, may increase filters in the future"
      }
    ],
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
    "url": "/v1/projects/{projectId}/certificates",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "certFile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certType",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/certificates/{certificateId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "certificateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CERTIFICATEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/certificates/{certificateId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "certificateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CERTIFICATEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/credentials",
    "method": "create2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PRE_SHARED_KEY"
      },
      {
        "name": "identity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preSharedKey",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/credentials/{credentialId}",
    "method": "delete2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "credentialId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDENTIALID"
      },
      {
        "name": "deviceId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/device-activity-logs",
    "method": "getLatestDeviceActivityLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logs",
    "typeScriptTag": "logs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deviceName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hardwareId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "streamPath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "term",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hardwareIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blueprintId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addHardwareId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeHardwareId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hardwareIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Devices",
    "typeScriptTag": "devices",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "addHardwareId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeHardwareId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hardwareIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}/credentials",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/credentials",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PRE_SHARED_KEY"
      },
      {
        "name": "identity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preSharedKey",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}/credentials/{credentialId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Credentials",
    "typeScriptTag": "credentials",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "credentialId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDENTIALID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/data/{path}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/data/{path}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/data/{path}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/data/{path}",
    "method": "update3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/data/{path}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/provisioning",
    "method": "provisionDevice2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Provisioning",
    "typeScriptTag": "provisioning",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "hardwareIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PRE_SHARED_KEY"
      },
      {
        "name": "identity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preSharedKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blueprintId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}/rpc",
    "method": "remoteProcedureCall",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Remote Procedure Call",
    "typeScriptTag": "remoteProcedureCall",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "params",
        "schema": "array",
        "description": ""
      },
      {
        "name": "timeout",
        "schema": "integer",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}/settings",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devices/{deviceId}/stream",
    "method": "getDeviceStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LightDB Stream",
    "typeScriptTag": "lightDbStream",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encodedQuery",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "queryTimeBucket",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}/stream",
    "method": "getDeviceStream2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LightDB Stream",
    "typeScriptTag": "lightDbStream",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "encodedQuery",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/devices/{deviceId}/stream/latest/{path}",
    "method": "getLatestStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LightDB Stream",
    "typeScriptTag": "lightDbStream",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEVICEID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devicesByTag/{tag}/data/{path}",
    "method": "deleteByTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devicesByTag/{tag}/data/{path}",
    "method": "updateByTag2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devicesByTag/{tag}/data/{path}",
    "method": "updateByTag3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/devicesByTag/{tag}/data/{path}",
    "method": "updateByTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LightDB",
    "typeScriptTag": "lightDb",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATH"
      }
    ],
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
    "url": "/v1/projects/{projectId}/firmware/logs",
    "method": "logs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Firmware",
    "typeScriptTag": "firmware",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "target",
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
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/integrations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
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
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/integrations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/integrations/validate",
    "method": "validate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "configuration",
        "schema": "object",
        "description": ""
      },
      {
        "name": "enabled",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/integrations/{integrationId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/integrations/{integrationId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/integrations/{integrationId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "configuration",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/integrations/{integrationId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "configuration",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/integrations/{integrationId}/test",
    "method": "test",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATIONID"
      },
      {
        "name": "data",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/logs",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Logs",
    "typeScriptTag": "logs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "module",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "level",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "NONE"
      },
      {
        "name": "term",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tags",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/permissions",
    "method": "listPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/policies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/policies/{policyId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/policies/{policyId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/policies/{policyId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "addRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagIds",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/policies/{policyId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POLICYID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeRoles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "roles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "tagIds",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/provisioning",
    "method": "provisionDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Provisioning",
    "typeScriptTag": "provisioning",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "deviceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hardwareIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "default": "PRE_SHARED_KEY"
      },
      {
        "name": "identity",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preSharedKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blueprintId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/releases",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Releases",
    "typeScriptTag": "releases",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "releaseTags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "deviceTags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "rollout",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "blueprintId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/releases",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Releases",
    "typeScriptTag": "releases",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "releaseTags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deviceTagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "artifactIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rollout",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/releases/{releaseId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Releases",
    "typeScriptTag": "releases",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "releaseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELEASEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/releases/{releaseId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Releases",
    "typeScriptTag": "releases",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "releaseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELEASEID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/releases/{releaseId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Releases",
    "typeScriptTag": "releases",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "releaseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELEASEID"
      },
      {
        "name": "addDeviceTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeDeviceTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deviceTagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rollout",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "addReleaseTag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeReleaseTag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "releaseTags",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/releases/{releaseId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Releases",
    "typeScriptTag": "releases",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "releaseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RELEASEID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addDeviceTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeDeviceTagId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deviceTagIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "rollout",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "addReleaseTag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "removeReleaseTag",
        "schema": "array",
        "description": ""
      },
      {
        "name": "releaseTags",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/settings",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deviceId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/settings",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dataType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "blueprintId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deviceId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/settings/{settingId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "settingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SETTINGID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/settings/{settingId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "settingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SETTINGID"
      },
      {
        "name": "value",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/settings/{settingId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "settingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SETTINGID"
      },
      {
        "name": "value",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/stream",
    "method": "getProjectStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LightDB Stream",
    "typeScriptTag": "lightDbStream",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "encodedQuery",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "queryTimeBucket",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "tags",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/stream",
    "method": "getProjectStream2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LightDB Stream",
    "typeScriptTag": "lightDbStream",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "encodedQuery",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/tags",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/tags/{tagId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/tags/{tagId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/tags/{tagId}",
    "method": "update2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/tags/{tagId}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAGID"
      },
      {
        "name": "updateMask",
        "schema": "string",
        "required": false,
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{projectId}/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      }
    ],
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
    "url": "/v1/projects/{projectId}/users/invitation",
    "method": "inviteUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECTID"
      },
      {
        "name": "email",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/roles",
    "method": "listRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access",
    "typeScriptTag": "access",
    "description": "",
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
    "url": "/v1/settings-data-types",
    "method": "listAllowedSettingsDataTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "",
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
  }
]
    }
      language="TypeScript"
      apiTitle="golioth API"
      apiBaseUrl="https://api.golioth.io"
      apiVersion="1.0"
      endpoints={56}
      sdkMethods={106}
      schemas={181}
      parameters={413}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/golioth/openapi.yaml"
      developerDocumentation="docs.golioth.io/"
    />
  );
}
  