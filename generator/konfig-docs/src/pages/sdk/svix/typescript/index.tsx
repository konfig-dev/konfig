import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SvixTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="svix-typescript-sdk"
      metaDescription="Svix is a platform that simplifies webhook processing for developers. By providing a reliable infrastructure and powerful tools, Svix enables developers to easily send and receive webhooks, ensuring seamless communication between services and applications."
      company="Svix"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/logo.png"
      clientNameCamelCase="svix"
      homepage="svix.com"
      lastUpdated={new Date("2024-03-13T01:59:29.812Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["webhooks","notifications","automation","developer_tools"]}
      methods={[
  {
    "url": "/api/v1/auth/app-portal-access/{app_id}",
    "method": "obtainMagicLinkAndCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Get Consumer App Portal Access",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "featureFlags",
        "schema": "array",
        "description": "",
        "example": []
      },
      {
        "name": "expiry",
        "schema": "integer",
        "description": "",
        "default": 604800
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/auth/dashboard-access/{app_id}",
    "method": "generateMagicLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Dashboard Access",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/auth/logout",
    "method": "revokeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Logout",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/auth/app/{app_id}/expire-all",
    "method": "expireAppTokens",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Expire All",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "expiry",
        "schema": "integer",
        "description": "",
        "example": 60
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "List Applications",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "app_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The sorting order of the returned items"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app",
    "method": "createNewApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Create Application",
    "parameters": [
      {
        "name": "getIfExists",
        "schema": "boolean",
        "description": "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs.",
        "default": false
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My first application"
      },
      {
        "name": "rateLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "unique-app-identifier"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}",
    "method": "removeApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Delete Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}",
    "method": "partiallyUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Patch Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rateLimit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "description": "",
        "example": "unique-app-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}",
    "method": "updateApp",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update Application",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My first application"
      },
      {
        "name": "rateLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "unique-app-identifier"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint",
    "method": "listEndpoints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "List Endpoints",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The sorting order of the returned items"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Create Endpoint",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An example endpoint name",
        "default": ""
      },
      {
        "name": "version",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1,
        "default": 1
      },
      {
        "name": "rateLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "unique-ep-identifier"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/webhook/"
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "filterTypes",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "user.signup",
          "user.deleted"
        ]
      },
      {
        "name": "channels",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "project_123",
          "group_2"
        ]
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Delete Endpoint",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}",
    "method": "getEndpoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Get Endpoint",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}",
    "method": "partiallyUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Patch Endpoint",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "version",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "rateLimit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "description": "",
        "example": "unique-ep-identifier"
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "filterTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "channels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "description": "",
        "example": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}",
    "method": "updateEndpoint",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Update Endpoint",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An example endpoint name",
        "default": ""
      },
      {
        "name": "version",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1,
        "default": 1
      },
      {
        "name": "rateLimit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "unique-ep-identifier"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/webhook/"
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "filterTypes",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "user.signup",
          "user.deleted"
        ]
      },
      {
        "name": "channels",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "project_123",
          "group_2"
        ]
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret",
    "method": "getSecret",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Get Endpoint Secret",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/secret/rotate",
    "method": "rotateSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Rotate Endpoint Secret",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "key",
        "schema": "string",
        "description": "",
        "example": "whsec_C2FVsBQIhrscChlQIMV+b5sSYspob7oD",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/stats",
    "method": "getStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Endpoint Stats",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "since",
        "schema": "string",
        "description": "Filter the range to data starting from this date"
      },
      {
        "name": "until",
        "schema": "string",
        "description": "Filter the range to data ending by this date"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/recover",
    "method": "resendFailedWebhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Recover Failed Webhooks",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "since",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SINCE"
      },
      {
        "name": "until",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/replay-missing",
    "method": "replayMissingWebhooks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Replay Missing Webhooks",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "since",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SINCE"
      },
      {
        "name": "until",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers",
    "method": "getHeaders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Get Endpoint Headers",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The value of the headers is returned in the `headers` field.\n\nSensitive headers that have been redacted are returned in the sensitive field."
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers",
    "method": "partiallySetHeaders",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Patch Endpoint Headers",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "headers",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "X-Example": "123",
          "X-Foobar": "Bar"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/headers",
    "method": "updateHeaders",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Update Endpoint Headers",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "headers",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "X-Example": "123",
          "X-Foobar": "Bar"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation",
    "method": "getTransformationCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Get Endpoint Transformation",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/transformation",
    "method": "setTransformationCode",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Set Endpoint Transformation",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "code",
        "schema": "string",
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
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/send-example",
    "method": "sendExampleMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Endpoint",
    "typeScriptTag": "endpoint",
    "description": "Send Event Type Example Message",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "user.signup"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "List Event Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "user.signup"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The sorting order of the returned items"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "When `true` archived (deleted but not expunged) items are included in the response",
        "default": false
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` the full item (including the schema) is included in the response",
        "default": false
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "Create Event Type",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "A user has signed up"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "user.signup"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "schemas",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "1": {
            "title": "Invoice Paid Event",
            "description": "An invoice was paid by a user",
            "properties": {
              "invoiceId": {
                "description": "The invoice id",
                "type": "string"
              },
              "userId": {
                "description": "The user id",
                "type": "string"
              }
            },
            "required": [
              "invoiceId",
              "userId"
            ],
            "type": "object"
          }
        }
      },
      {
        "name": "featureFlag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cool-new-feature"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type/import/openapi",
    "method": "importFromOpenapi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "Event Type Import From Openapi",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "spec",
        "schema": "object",
        "description": "",
        "example": {
          "openapi": "3.1.0",
          "info": {
            "title": "Webhook Example",
            "version": "1.0.0"
          },
          "webhooks": {
            "pet.new": {
              "post": {
                "requestBody": {
                  "description": "Information about a new pet in the system",
                  "content": {
                    "application/json": {
                      "schema": {
                        "properties": {
                          "id": {
                            "format": "int64",
                            "type": "integer"
                          },
                          "name": {
                            "type": "string"
                          },
                          "tag": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "name"
                        ]
                      }
                    }
                  }
                },
                "responses": {
                  "200": {
                    "description": "Return a 200 status to indicate that the data was received successfully"
                  }
                }
              }
            }
          }
        }
      },
      {
        "name": "specRaw",
        "schema": "string",
        "description": "",
        "example": {
          "openapi": "3.1.0",
          "info": {
            "title": "Webhook Example",
            "version": "1.0.0"
          },
          "webhooks": {
            "pet.new": {
              "post": {
                "requestBody": {
                  "description": "Information about a new pet in the system",
                  "content": {
                    "application/json": {
                      "schema": {
                        "properties": {
                          "id": {
                            "format": "int64",
                            "type": "integer"
                          },
                          "name": {
                            "type": "string"
                          },
                          "tag": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "id",
                          "name"
                        ]
                      }
                    }
                  }
                },
                "responses": {
                  "200": {
                    "description": "Return a 200 status to indicate that the data was received successfully"
                  }
                }
              }
            }
          }
        }
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type/{event_type_name}",
    "method": "archiveType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "Delete Event Type",
    "parameters": [
      {
        "name": "eventTypeName",
        "schema": "string",
        "required": true,
        "description": "The event type's name",
        "example": "user.signup"
      },
      {
        "name": "expunge",
        "schema": "boolean",
        "description": "By default event types are archived when \"deleted\". Passing this to `true` deletes them entirely.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type/{event_type_name}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "Get Event Type",
    "parameters": [
      {
        "name": "eventTypeName",
        "schema": "string",
        "required": true,
        "description": "The event type's name",
        "example": "user.signup"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type/{event_type_name}",
    "method": "partiallyUpdateType",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "Patch Event Type",
    "parameters": [
      {
        "name": "eventTypeName",
        "schema": "string",
        "required": true,
        "description": "The event type's name",
        "example": "user.signup"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "schemas",
        "schema": "object",
        "description": "",
        "example": {
          "title": "Invoice Paid Event",
          "description": "An invoice was paid by a user",
          "properties": {
            "invoiceId": {
              "description": "The invoice id",
              "type": "string"
            },
            "userId": {
              "description": "The user id",
              "type": "string"
            }
          },
          "required": [
            "invoiceId",
            "userId"
          ],
          "type": "object"
        }
      },
      {
        "name": "featureFlag",
        "schema": "string",
        "description": "",
        "example": "cool-new-feature"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/event-type/{event_type_name}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Event Type",
    "typeScriptTag": "eventType",
    "description": "Update Event Type",
    "parameters": [
      {
        "name": "eventTypeName",
        "schema": "string",
        "required": true,
        "description": "The event type's name",
        "example": "user.signup"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "A user has signed up"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "schemas",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "1": {
            "title": "Invoice Paid Event",
            "description": "An invoice was paid by a user",
            "properties": {
              "invoiceId": {
                "description": "The invoice id",
                "type": "string"
              },
              "userId": {
                "description": "The user id",
                "type": "string"
              }
            },
            "required": [
              "invoiceId",
              "userId"
            ],
            "type": "object"
          }
        }
      },
      {
        "name": "featureFlag",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cool-new-feature"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/background-task",
    "method": "listRecentTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Background Tasks",
    "typeScriptTag": "backgroundTasks",
    "description": "List Background Tasks",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Filter the response based on the status"
      },
      {
        "name": "task",
        "schema": "string",
        "description": "Filter the response based on the type"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The sorting order of the returned items"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/background-task/{task_id}",
    "method": "getTaskById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Background Tasks",
    "typeScriptTag": "backgroundTasks",
    "description": "Get Background Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASK_ID"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg",
    "method": "listAllMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "List Messages",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel",
        "example": "project_1337"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only include items created before a certain date"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Only include items created after a certain date"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` message payloads are included in the response",
        "default": true
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter messages matching the provided tag",
        "example": "project_1337"
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": "Filter response based on the event type"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Create Message",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` message payloads are included in the response",
        "default": true
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "my_tag",
          "other"
        ]
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "unique-msg-identifier"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "user.signup"
      },
      {
        "name": "payload",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "email": "test@example.com",
          "type": "user.created",
          "username": "test_user"
        }
      },
      {
        "name": "channels",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "project_123",
          "group_2"
        ]
      },
      {
        "name": "payloadRetentionPeriod",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 90,
        "default": 90
      },
      {
        "name": "application",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "transformationsParams",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "413",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}",
    "method": "getByIdOrEventId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Get Message",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` message payloads are included in the response",
        "default": true
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/content",
    "method": "deletePayload",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Message",
    "typeScriptTag": "message",
    "description": "Delete message payload",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/attempt/endpoint/{endpoint_id}",
    "method": "listByEndpoint",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "List Attempts By Endpoint",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "status",
        "schema": "integer",
        "description": "Filter response based on the delivery status"
      },
      {
        "name": "statusCodeClass",
        "schema": "integer",
        "description": "Filter response based on the HTTP status code"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel",
        "example": "project_1337"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag",
        "example": "project_1337"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only include items created before a certain date"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Only include items created after a certain date"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` attempt content is included in the response",
        "default": true
      },
      {
        "name": "withMsg",
        "schema": "boolean",
        "description": "When `true`, the message information is included in the response",
        "default": false
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": "Filter response based on the event type"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/attempt/msg/{msg_id}",
    "method": "listByMsgAttemptedDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "List Attempts By Msg",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "status",
        "schema": "integer",
        "description": "Filter response based on the delivery status"
      },
      {
        "name": "statusCodeClass",
        "schema": "integer",
        "description": "Filter response based on the HTTP status code"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel",
        "example": "project_1337"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag",
        "example": "project_1337"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "description": "Filter the attempts based on the attempted endpoint",
        "example": "unique-ep-identifier"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only include items created before a certain date"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Only include items created after a certain date"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` attempt content is included in the response",
        "default": true
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": "Filter response based on the event type"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/endpoint/{endpoint_id}/msg",
    "method": "listAttemptedMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "List Attempted Messages",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "msg_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel",
        "example": "project_1337"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the message tags",
        "example": "project_1337"
      },
      {
        "name": "status",
        "schema": "integer",
        "description": "Filter response based on the delivery status"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only include items created before a certain date"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Only include items created after a certain date"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` message payloads are included in the response",
        "default": true
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": "Filter response based on the event type"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/endpoint",
    "method": "listAttemptedDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "List Attempted Destinations",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "ep_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/attempt",
    "method": "listByEndpointDeprecated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "List Attempts For Endpoint",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel",
        "example": "project_1337"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag",
        "example": "project_1337"
      },
      {
        "name": "status",
        "schema": "integer",
        "description": "Filter response based on the delivery status"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only include items created before a certain date"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Only include items created after a certain date"
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": "Filter response based on the event type"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/attempt",
    "method": "listByMsgAttemptedDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "List Attempts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "description": "Filter the attempts based on the attempted endpoint",
        "example": "unique-ep-identifier"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel",
        "example": "project_1337"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag",
        "example": "project_1337"
      },
      {
        "name": "status",
        "schema": "integer",
        "description": "Filter response based on the delivery status"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only include items created before a certain date"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Only include items created after a certain date"
      },
      {
        "name": "statusCodeClass",
        "schema": "integer",
        "description": "Filter response based on the HTTP status code"
      },
      {
        "name": "eventTypes",
        "schema": "array",
        "description": "Filter response based on the event type"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}",
    "method": "getByDestination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "Get Attempt",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      },
      {
        "name": "attemptId",
        "schema": "string",
        "required": true,
        "description": "The attempt's ID",
        "example": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/attempt/{attempt_id}/content",
    "method": "deleteResponseBody",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "Delete attempt response body",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      },
      {
        "name": "attemptId",
        "schema": "string",
        "required": true,
        "description": "The attempt's ID",
        "example": "atmpt_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/msg/{msg_id}/endpoint/{endpoint_id}/resend",
    "method": "resendMessageToEndpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Message Attempt",
    "typeScriptTag": "messageAttempt",
    "description": "Resend Webhook",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID",
        "example": "unique-msg-identifier"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID",
        "example": "unique-ep-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/stats/usage/app",
    "method": "calculateMessageDestinations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "Aggregate App Stats",
    "parameters": [
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "since",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SINCE"
      },
      {
        "name": "until",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNTIL"
      },
      {
        "name": "appIds",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/stats/usage/event-types",
    "method": "calculateEventTypesForAllApps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "Aggregate Event Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration",
    "method": "listIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "List Integrations",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of returned items"
      },
      {
        "name": "iterator",
        "schema": "string",
        "description": "The iterator returned from a prior invocation",
        "example": "integ_1srOrx2ZWZBpBUvZwXKQmoEYga2"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration",
    "method": "createNewIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Create Integration",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example Integration"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration/{integ_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Delete Integration",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID",
        "example": "integ_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration/{integ_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Get Integration",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID",
        "example": "integ_1srOrx2ZWZBpBUvZwXKQmoEYga2"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration/{integ_id}",
    "method": "updateIntegration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Update Integration",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID",
        "example": "integ_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example Integration"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration/{integ_id}/key",
    "method": "getKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Get Integration Key",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID",
        "example": "integ_1srOrx2ZWZBpBUvZwXKQmoEYga2"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/app/{app_id}/integration/{integ_id}/key/rotate",
    "method": "rotateIntegrationKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration",
    "typeScriptTag": "integration",
    "description": "Rotate Integration Key",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID",
        "example": "unique-app-identifier"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID",
        "example": "integ_1srOrx2ZWZBpBUvZwXKQmoEYga2"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/health",
    "method": "checkServerStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Health",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "no content"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Svix API"
      apiBaseUrl="https://api.eu.svix.com/"
      apiVersion="1.20.0"
      endpoints={40}
      sdkMethods={59}
      schemas={121}
      parameters={266}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/openapi.yaml"
    />
  );
}
  