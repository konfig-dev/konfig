import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function SvixTypeScriptSdk() {
  return (
    <Sdk
      sdkName="svix-typescript-sdk"
      metaDescription="Svix is a platform that simplifies webhook processing for developers. By providing a reliable infrastructure and powerful tools, Svix enables developers to easily send and receive webhooks, ensuring seamless communication between services and applications."
      company="Svix"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/logo.png"
      clientNameCamelCase="svix"
      homepage="svix.com"
      lastUpdated={new Date("2024-03-05T22:56:39.921Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/svix/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
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
        "description": "The app's ID or UID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "featureFlags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "expiry",
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
        "description": "The app's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "expiry",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
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
        "description": "Get an existing application, or create a new one if doesn't exist. It's two separate functions in the libs."
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
        "description": ""
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
        "description": "The app's ID or UID"
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
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
        "description": "The app's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
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
        "description": "The app's ID or UID"
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
        "description": "The app's ID or UID"
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
        "description": ""
      },
      {
        "name": "version",
        "schema": "integer",
        "required": false,
        "description": ""
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
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filterTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "channels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "secret",
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "version",
        "schema": "integer",
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
        "description": ""
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "integer",
        "required": false,
        "description": ""
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
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filterTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "channels",
        "schema": "array",
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": ""
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": ""
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      },
      {
        "name": "headers",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      },
      {
        "name": "headers",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The iterator returned from a prior invocation"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "The sorting order of the returned items"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "When `true` archived (deleted but not expunged) items are included in the response"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` the full item (including the schema) is included in the response"
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
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "schemas",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "featureFlag",
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
        "description": ""
      },
      {
        "name": "specRaw",
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
        "description": "The event type's name"
      },
      {
        "name": "expunge",
        "schema": "boolean",
        "description": "By default event types are archived when \"deleted\". Passing this to `true` deletes them entirely."
      }
    ],
    "responses": [
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
        "description": "The event type's name"
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
        "description": "The event type's name"
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
        "description": ""
      },
      {
        "name": "featureFlag",
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
        "description": "The event type's name"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "schemas",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "featureFlag",
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
        "description": "The app's ID or UID"
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
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel"
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
        "description": "When `true` message payloads are included in the response"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter messages matching the provided tag"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` message payloads are included in the response"
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
        "description": ""
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "channels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "payloadRetentionPeriod",
        "schema": "integer",
        "required": false,
        "description": ""
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
      },
      {
        "name": "withContent",
        "schema": "boolean",
        "description": "When `true` message payloads are included in the response"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
      }
    ],
    "responses": [
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
        "description": "The iterator returned from a prior invocation"
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
        "description": "Filter response based on the channel"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag"
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
        "description": "When `true` attempt content is included in the response"
      },
      {
        "name": "withMsg",
        "schema": "boolean",
        "description": "When `true`, the message information is included in the response"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The iterator returned from a prior invocation"
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
        "description": "Filter response based on the channel"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "description": "Filter the attempts based on the attempted endpoint"
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
        "description": "When `true` attempt content is included in the response"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
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
        "description": "The iterator returned from a prior invocation"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the message tags"
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
        "description": "When `true` message payloads are included in the response"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The iterator returned from a prior invocation"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
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
        "description": "The iterator returned from a prior invocation"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
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
        "description": "The iterator returned from a prior invocation"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "description": "Filter the attempts based on the attempted endpoint"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter response based on the channel"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter response based on the tag"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
      },
      {
        "name": "attemptId",
        "schema": "string",
        "required": true,
        "description": "The attempt's ID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
      },
      {
        "name": "attemptId",
        "schema": "string",
        "required": true,
        "description": "The attempt's ID"
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
      },
      {
        "name": "msgId",
        "schema": "string",
        "required": true,
        "description": "The msg's ID or UID"
      },
      {
        "name": "endpointId",
        "schema": "string",
        "required": true,
        "description": "The ep's ID or UID"
      },
      {
        "name": "idempotencyKey",
        "schema": "string",
        "description": "The request's idempotency key"
      }
    ],
    "responses": [
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
        "description": ""
      },
      {
        "name": "until",
        "schema": "string",
        "required": true,
        "description": ""
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
        "description": "The app's ID or UID"
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
        "description": "The app's ID or UID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID"
      }
    ],
    "responses": [
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
        "description": "The app's ID or UID"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID"
      },
      {
        "name": "name",
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
        "description": "The app's ID or UID"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID"
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
        "description": "The app's ID or UID"
      },
      {
        "name": "integId",
        "schema": "string",
        "required": true,
        "description": "The integ's ID"
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
  