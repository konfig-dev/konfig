import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WeavyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="weavy-typescript-sdk"
      metaDescription={`Weavy is a complete toolkit for developers to add collaboration, productivity, and community features to web and mobile apps at a fraction of the cost and time. Our API, SDKs and UI Kits for Chat, Files, and Feeds enable dev teams to increase functionality and connect users, while focusing on your core product.`}
      company="Weavy"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/logo.png"
      companyKebabCase="weavy"
      clientNameCamelCase="weavy"
      homepage="www.weavy.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["developer_tools","web_development","framework","web_apps"]}
      methods={[
  {
    "url": "/api/apps",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List apps",
    "parameters": [
      {
        "name": "contextual",
        "schema": "boolean",
        "description": "`true` to lists contextual apps, `false` to list non-contextual apps; when not specified both types are listed.\r\n            Default value is `true`."
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Guids of app types to list. Can be used to return only conversations of a specified type. When not specied all types of apps are returned."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps",
    "method": "createAppWithTypeAndUid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Create app",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
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
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "access",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "directory",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/init",
    "method": "initAppWithUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Init app with user",
    "parameters": [
      {
        "name": "app",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
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
    "url": "/api/apps/{app}",
    "method": "removeAppContent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Delete app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Get app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return app even if trashed, otherwise `false`."
      }
    ],
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
    "url": "/api/apps/{app}",
    "method": "updateAppById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Update app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "access",
        "schema": "string",
        "description": ""
      },
      {
        "name": "directory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{uid}",
    "method": "upsertAppByUid",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Upsert app",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Unique app identifier.",
        "example": "UID"
      },
      {
        "name": "tags",
        "schema": "array",
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
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "access",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "directory",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/subscribe",
    "method": "subscribeToApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Subscribe to app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/unsubscribe",
    "method": "unsubscribeFromApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Unsubscribe from app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/trash",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Trash app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/restore",
    "method": "restoreAppFromTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Restore app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/members",
    "method": "removeMultipleMembers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Remove members",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "List members",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      },
      {
        "name": "suspended",
        "schema": "boolean",
        "description": "Indicates whether to list suspended members or not, `null` returns all members."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/apps/{app}/members",
    "method": "addMembersToApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Add members",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/members/{user}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Remove member",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`).",
        "example": "USER"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/members/{user}",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Apps",
    "typeScriptTag": "apps",
    "description": "Add member",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`).",
        "example": "USER"
      },
      {
        "name": "access",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/blobs/{id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blobs",
    "typeScriptTag": "blobs",
    "description": "Get blob",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of blob.",
        "example": 0
      }
    ],
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
    "url": "/api/blobs",
    "method": "uploadBlob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Blobs",
    "typeScriptTag": "blobs",
    "description": "Upload blob",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/blobs/external",
    "method": "createExternalBlob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Blobs",
    "typeScriptTag": "blobs",
    "description": "Create external blob",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER"
      },
      {
        "name": "link",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LINK"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "width",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "height",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "media_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "download",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "embed",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "raw",
        "schema": "undefined",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/comments",
    "method": "listAppComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List app comments",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/apps/{app}/comments",
    "method": "createNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create app comment",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/comments",
    "method": "getFileComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List file comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id.",
        "example": 0
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/files/{id}/comments",
    "method": "createNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create file comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/comments",
    "method": "listPostComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List post comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Post id.",
        "example": 0
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/posts/{id}/comments",
    "method": "createNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create post comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Post id",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}",
    "method": "deleteCommentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Delete comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the comment.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the comment.",
        "example": 0
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return comment even if trashed, otherwise `false`."
      }
    ],
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
    "url": "/api/comments/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Update comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the comment.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}/trash",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Trash comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the comment to trash.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}/restore",
    "method": "restoreById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Restore comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the comment to restore.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "List comments",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "List conversations",
    "parameters": [
      {
        "name": "unread",
        "schema": "boolean",
        "description": "`true` lists unread conversations, `false` list read conversations and `null` lists all conversations;\r\n            default is `null`."
      },
      {
        "name": "type",
        "schema": "array",
        "description": "Guids of app types to list. Can be used to return only conversations of a specified type, e.g. chat rooms. When not specied all types of conversations are returned."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations",
    "method": "createNewConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Create conversation",
    "parameters": [
      {
        "name": "members",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the conversation to return.",
        "example": 0
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return conversation even if trashed, otherwise `false`."
      }
    ],
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
    "url": "/api/conversations/badge",
    "method": "countUnread",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Count unread conversations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}/mark",
    "method": "markUnread",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Mark as unread",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Conversation (https://www.weavy.com/docs id.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}/mark",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Mark as read",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Conversation (https://www.weavy.com/docs id.",
        "example": 0
      },
      {
        "name": "messageId",
        "schema": "integer",
        "description": "Optional id of last seen message, when not specified the entire conversation is marked as read."
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}/pin",
    "method": "unpinConversation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Unpin conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Conversation (https://www.weavy.com/docs id.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}/pin",
    "method": "pinConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Pin conversation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Conversation (https://www.weavy.com/docs id.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}/delivered",
    "method": "updateDeliveryStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Set as delivered",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Conversation (https://www.weavy.com/docs id.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/conversations/{id}/typing",
    "method": "indicateTyping",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Indicate typing",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Conversation (https://www.weavy.com/docs id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/directories",
    "method": "listDirectories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "List directories",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/directories",
    "method": "createUserDirectory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "Create directory",
    "parameters": [
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
        "statusCode": "201",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/directories/{dir}",
    "method": "removeDirectory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "Delete directory",
    "parameters": [
      {
        "name": "dir",
        "schema": "string",
        "required": true,
        "description": "Id or name of directory.",
        "example": "DIR"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/directories/{dir}",
    "method": "getDirectory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "Get directory",
    "parameters": [
      {
        "name": "dir",
        "schema": "string",
        "required": true,
        "description": "Id or name of directory.",
        "example": "DIR"
      }
    ],
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
    "url": "/api/directories/{dir}",
    "method": "updateDirectoryName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "Update directory",
    "parameters": [
      {
        "name": "dir",
        "schema": "string",
        "required": true,
        "description": "Id or name of directory.",
        "example": "DIR"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/directories/{dir}/members",
    "method": "getMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Directories",
    "typeScriptTag": "directories",
    "description": "List members",
    "parameters": [
      {
        "name": "dir",
        "schema": "string",
        "required": true,
        "description": "Id or name of directory.",
        "example": "DIR"
      },
      {
        "name": "suspended",
        "schema": "boolean",
        "description": "Indicates whether to list suspended members or not, `null` returns all members."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/embeds/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embeds",
    "typeScriptTag": "embeds",
    "description": "Get embed",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of embed.",
        "example": 0
      }
    ],
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
    "url": "/api/embeds",
    "method": "createEmbedForUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embeds",
    "typeScriptTag": "embeds",
    "description": "Create embed",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/files",
    "method": "listFilesInApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List files in app",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/apps/{app}/files",
    "method": "createNewFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Create file",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "blob_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
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
        "name": "replace",
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
      }
    ]
  },
  {
    "url": "/api/files/{id}",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the file.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}",
    "method": "getFileMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id",
        "example": 0
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return file even if trashed."
      }
    ],
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
    "url": "/api/files/{id}",
    "method": "updateFileById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Update file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of file.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blob_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "backup",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/versions/{version}",
    "method": "deleteVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete version",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id.",
        "example": 0
      },
      {
        "name": "version",
        "schema": "integer",
        "required": true,
        "description": "Version number.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/versions/{version}",
    "method": "getFileVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get version",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id.",
        "example": 0
      },
      {
        "name": "version",
        "schema": "integer",
        "required": true,
        "description": "Version number.",
        "example": 0
      }
    ],
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
    "url": "/api/files/{id}/versions",
    "method": "getFileVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get versions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id.",
        "example": 0
      }
    ],
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
    "url": "/api/files/{id}/subscribe",
    "method": "subscribeToFileActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Subscribe to file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the file.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/unsubscribe",
    "method": "unsubscribeNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Unsubscribe from file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the file.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/trash",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Trash file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the file to trash.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/restore",
    "method": "restoreFileFromTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Restore file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the file to restore.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files/{id}/versions/{version}/restore",
    "method": "restorePreviousVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Restore version",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "File id.",
        "example": 0
      },
      {
        "name": "version",
        "schema": "integer",
        "required": true,
        "description": "Version number.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/files",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List files",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}/attachments",
    "method": "listCommentAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List comment attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Comment id.",
        "example": 0
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/messages/{id}/attachments",
    "method": "listAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List message attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message id.",
        "example": 0
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/posts/{id}/attachments",
    "method": "listAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List post attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Post id.",
        "example": 0
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/meetings",
    "method": "createMeetingZoomOrTeams",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Create meeting",
    "parameters": [
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER"
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/messages",
    "method": "listAppMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "List app messages",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/apps/{app}/messages",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Create message",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`).",
        "example": "APP"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages/{id}",
    "method": "deleteMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Delete message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the message.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages/{id}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the message.",
        "example": 0
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return message even if trashed."
      }
    ],
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
    "url": "/api/messages/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Update message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the message.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages/{id}/trash",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Trash message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the message to trash.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages/{id}/restore",
    "method": "restoreMessageFromTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Restore message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the message to restore.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages",
    "method": "listMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "List messages",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{id}",
    "method": "deleteNotificationById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Delete notification",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Notification id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get notification",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Notification id.",
        "example": 0
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return notification even if trashed."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing a notification."
      },
      {
        "statusCode": "401",
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
    "url": "/api/notifications/{id}/mark",
    "method": "markAsUnread",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark as unread",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Notification id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing a notification."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/{id}/mark",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark as read",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Notification id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An object representing a notification."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/notifications/mark",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark (https://www.weavy.com/docs as read",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": "Optional id of last seen notification. When specified, this and previous notifications are marked as read, otherwise all notifications (uncluding yet unseen) are marked as read."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/api/notifications",
    "method": "listUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "List notifications",
    "parameters": [
      {
        "name": "action",
        "schema": "string",
        "description": "List notifications that were triggered by actions of this type, e.g. `message_created` or `comment_updated` etc."
      },
      {
        "name": "unread",
        "schema": "boolean",
        "description": "`true` lists unread notifications, `false` lists read notifications and `null` (https://www.weavy.com/docs lists all notifications whether they are read or not."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/options/{id}",
    "method": "getPollOption",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Get poll option",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the option.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An individual option in a poll."
      },
      {
        "statusCode": "401",
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
    "url": "/api/options/{id}/vote",
    "method": "addVoteForUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Vote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the poll option.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An individual option in a poll."
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
      }
    ]
  },
  {
    "url": "/api/options/{id}/voters",
    "method": "listVoters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "List voters",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Option id.",
        "example": 0
      }
    ],
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
    "url": "/api/apps/{app}/posts",
    "method": "listAppPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "List app posts",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/apps/{app}/posts",
    "method": "createNewPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Create post",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}",
    "method": "deletePostById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Delete post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}",
    "method": "getPostById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Get post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post.",
        "example": 0
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return post even if trashed."
      }
    ],
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
    "url": "/api/posts/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Update post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post.",
        "example": 0
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blobs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "meeting_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/subscribe",
    "method": "subscribeToPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Subscribe to post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/unsubscribe",
    "method": "unsubscribeNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Unsubscribe from post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post.",
        "example": 0
      }
    ],
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/trash",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Trash post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post to trash.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/restore",
    "method": "restoreById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Restore post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Id of the post to restore.",
        "example": 0
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "List posts",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}/reactions",
    "method": "unreactToComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "Unreact to comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Comment id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/comments/{id}/reactions",
    "method": "listCommentReactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "List comment reactions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Comment id.",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "description": "Lists reactions with the specified emoji character. Omit this parameter to list all reactions."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/comments/{id}/reactions",
    "method": "createForComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "React to comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Comment id.",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages/{id}/reactions",
    "method": "unreactToMessage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "Unreact to message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/messages/{id}/reactions",
    "method": "getMessageReactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "List message reactions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message id.",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "description": "Lists reactions with the specified emoji character. Omit this parameter to list all reactions."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/messages/{id}/reactions",
    "method": "createForMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "React to message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message id.",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/reactions",
    "method": "unreactToPost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "Unreact to post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Post id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/posts/{id}/reactions",
    "method": "listPostReactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "List post reactions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Post id.",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "description": "Lists reactions with the specified emoji character. Omit this parameter to list all reactions."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
    "url": "/api/posts/{id}/reactions",
    "method": "createForPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "React to post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Post id.",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/reactions/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "Delete reaction",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Reaction id.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/reactions/{id}",
    "method": "getReactionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reactions",
    "typeScriptTag": "reactions",
    "description": "Get reaction",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Reaction id.",
        "example": 0
      }
    ],
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
    "url": "/api/apps/{app}/stars",
    "method": "removeStarFromApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stars",
    "typeScriptTag": "stars",
    "description": "Remove star",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/apps/{app}/stars",
    "method": "addStarToApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stars",
    "typeScriptTag": "stars",
    "description": "Add star",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "required": true,
        "description": "App identifier (`id` or `uid`)",
        "example": "APP"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/stars",
    "method": "listItemsStarred",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stars",
    "typeScriptTag": "stars",
    "description": "List stars",
    "parameters": [
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "bot",
        "schema": "boolean",
        "description": "Indicates whether to list bot users or not."
      },
      {
        "name": "directoryId",
        "schema": "integer",
        "description": "List users in the specified directory, `null` lists users from all directories."
      },
      {
        "name": "suspended",
        "schema": "boolean",
        "description": "Indicates whether to list suspended users or not."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users",
    "method": "createAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create user",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middle_name",
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
        "name": "family_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nickname",
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
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "directory",
        "schema": "string",
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
        "name": "is_suspended",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_bot",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users/{user}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`).",
        "example": "USER"
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "`true` to return user even if trashed."
      }
    ],
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
    "url": "/api/users/{user}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update user",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`).",
        "example": "USER"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "directory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_suspended",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_bot",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/user",
    "method": "getAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get authenticated user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users/{uid}",
    "method": "upsertUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Upsert user",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "Unique user identifier.",
        "example": "UID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "uid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "given_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "middle_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "family_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "picture",
        "schema": "string",
        "description": ""
      },
      {
        "name": "directory",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_suspended",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_bot",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users/{user}/trash",
    "method": "moveToTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Trash user",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`) of the user to trash.",
        "example": "USER"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users/{user}/restore",
    "method": "restoreUserFromTrash",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Restore user",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`) of the user to restore.",
        "example": "USER"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/users/{user}/tokens",
    "method": "revokeAccessTokens",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Revoke access token",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`).",
        "example": "USER"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
      }
    ]
  },
  {
    "url": "/api/users/{user}/tokens",
    "method": "createAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Issue access token",
    "parameters": [
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "User identifier (`id` or `uid`).",
        "example": "USER"
      },
      {
        "name": "expires_in",
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
      }
    ]
  },
  {
    "url": "/api/users/autocomplete",
    "method": "listByAutocomplete",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users (https://www.weavy.com/docs",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The search phrase to use."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "Gets or sets the number of items to skip before returning, defaults to `0`.",
        "default": 0
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Max number of items to return, defaults to `5`.",
        "default": 5
      },
      {
        "name": "count",
        "schema": "boolean",
        "description": "Count the total number of search results, defaults to `false`.",
        "default": false
      },
      {
        "name": "id",
        "schema": "integer",
        "description": "Optional app id. When set, the result contains a property indicating whether the listed users are member of the specified app or not."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/webhooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List webhooks",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/webhooks",
    "method": "registerWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Register webhook",
    "parameters": [
      {
        "name": "payload_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD_URL"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "triggers",
        "schema": "array",
        "required": true,
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/webhooks/{id}",
    "method": "deleteWebhookById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the hook.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/webhooks/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the hook.",
        "example": 0
      }
    ],
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
    "url": "/api/webhooks/{id}",
    "method": "updateRegistration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The unique identifier of the hook.",
        "example": 0
      },
      {
        "name": "payload_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYLOAD_URL"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "triggers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_enabled",
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
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/webhooks/{id}/deliveries",
    "method": "listDeliveries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List deliveries",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Webhook id",
        "example": 0
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "q",
        "schema": "string",
        "description": "A query used to find matching items."
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "List items with the specified tag."
      },
      {
        "name": "trashed",
        "schema": "boolean",
        "description": "Indicates whether trashed items should be listed (default is `false`). Specify `null` to return both trashed and non-trashed items."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Specifies the sort order and direction for the listing, e.g. \"`name`\" or \"`name+desc`\""
      },
      {
        "name": "top",
        "schema": "integer",
        "description": "Maximum number of items to return in the listing. Should be a value between `1` and `100`. Default is `25`."
      },
      {
        "name": "skip",
        "schema": "integer",
        "description": "The number of items to skip. Used together with `top` to return a specific range of items (for pagination)."
      },
      {
        "name": "countOnly",
        "schema": "boolean",
        "description": "`true` to only return the *number* of matching items; when this is specified the response will only contain the `count` property."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Represents a collection of objects that can be paged."
      },
      {
        "statusCode": "401",
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
      apiTitle="Weavy API"
      apiBaseUrl="https://{WEAVY-SERVER}"
      apiVersion="22.1.0"
      endpoints={82}
      sdkMethods={125}
      schemas={87}
      parameters={483}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/weavy/openapi.yaml"
      developerDocumentation="www.weavy.com/docs"
    />
  );
}
  