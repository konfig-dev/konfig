import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ChatKittyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="chat-kitty-typescript-sdk"
      metaDescription={`ChatKitty gives you the tools to build real-time chat for web and mobile apps, complete with advanced features like moderation, offline messaging and analytics.`}
      company="ChatKitty"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/logo.png"
      companyKebabCase="chat-kitty"
      clientNameCamelCase="chatKitty"
      homepage="chatkitty.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/favicon.png"
      contactUrl="mailto:support@chatkitty.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["communications_software","messaging","chat_platforms","chat_sdks"]}
      methods={[
  {
    "url": "/v1/analytics/messages",
    "method": "exportMessageAnalyticsData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "analytics",
    "typeScriptTag": "analytics",
    "description": "Export message analytics",
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
      }
    ]
  },
  {
    "url": "/v1/analytics/users",
    "method": "exportUserAnalyticsData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "analytics",
    "typeScriptTag": "analytics",
    "description": "Export user analytics",
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
      }
    ]
  },
  {
    "url": "/v1/application",
    "method": "getAuthenticated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application",
    "typeScriptTag": "application",
    "description": "Retrieve the authenticated application",
    "parameters": [],
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
    "url": "/v1/application/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "application",
    "typeScriptTag": "application",
    "description": "Retrieve the authenticated application settings",
    "parameters": [],
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
    "url": "/v1/application/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "application",
    "typeScriptTag": "application",
    "description": "Update the authenticated application settings",
    "parameters": [
      {
        "name": "guest_users",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GUEST_USERS"
      },
      {
        "name": "user_created_channels",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_CREATED_CHANNELS"
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
    "url": "/v1/channels",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List channels",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filters by channel type"
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": "Filters by channel members using their usernames"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": false,
        "description": "Filters for channels created within a time range: start time"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": false,
        "description": "Filters for channels created within a time range: end time"
      },
      {
        "name": "properties",
        "schema": "string",
        "required": false,
        "description": "Filters by channel custom properties"
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
    "url": "/v1/channels",
    "method": "createChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Create a channel",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "creator",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "username": "jane@chatkitty.com"
        }
      },
      {
        "name": "members",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
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
    "url": "/v1/channels/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Delete a channel",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Retrieve a channel",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Update a channel",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}/events",
    "method": "sendEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Send a channel event",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "properties",
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
    "url": "/v1/channels/{id}/invites",
    "method": "listInvites",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List channel invites",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/channels/{id}/invites",
    "method": "sendInvite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Send a channel invite",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "username": "jane@chatkitty.com"
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}/keystrokes",
    "method": "sendKeystrokes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Send channel keystrokes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "keys",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYS"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "username": "jane@chatkitty.com"
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}/members",
    "method": "listMembersPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List a channel's members",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/channels/{id}/members",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Add a channel member",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "jane@chatkitty.com"
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
    "url": "/v1/channels/{id}/members/{user_id}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Remove a channel member",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID of member to be removed",
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}/memberships",
    "method": "listMembershipsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List channel memberships",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/channels/{id}/messages",
    "method": "listMessagesPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List channel messages",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Start cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "next",
        "schema": "integer",
        "required": false,
        "description": "Next page cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch subsequent pages"
      },
      {
        "name": "relation",
        "schema": "string",
        "required": false,
        "description": "Page cursor relation. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
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
    "url": "/v1/channels/{id}/messages",
    "method": "sendChannelMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Send a channel message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "group_tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "username": "jane@chatkitty.com"
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}/moderators",
    "method": "listModeratorsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Lists a channel's moderators",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/channels/{id}/moderators",
    "method": "addModerator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Add a channel moderator",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "jane@chatkitty.com"
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
    "url": "/v1/channels/{id}/moderators/{user_id}",
    "method": "removeModerator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "Remove a channel moderator",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "User ID of moderator to be removed",
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
      }
    ]
  },
  {
    "url": "/v1/channels/{id}/participants",
    "method": "listParticipantsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List channel participants",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/channels/{id}/reported-messages",
    "method": "listReportedMessagesPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "channels",
    "typeScriptTag": "channels",
    "description": "List channel reported messages",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Channel ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/chat-sessions",
    "method": "listPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "chat-sessions",
    "typeScriptTag": "chatSessions",
    "description": "List chat sessions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Filters by state"
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
    "url": "/v1/function-versions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "function-versions",
    "typeScriptTag": "functionVersions",
    "description": "Retrieve a chat function version",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Chat function version ID",
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
      }
    ]
  },
  {
    "url": "/v1/functions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Retrieve a chat function",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Chat function ID",
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
      }
    ]
  },
  {
    "url": "/v1/functions/{id}/current-version",
    "method": "getCurrentVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Retrieve chat function current version",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Chat function ID",
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
      }
    ]
  },
  {
    "url": "/v1/functions/{id}/invocations",
    "method": "listInvocationsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List chat function invocations",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Chat function ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/functions/{id}/versions",
    "method": "listVersionsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "List chat function versions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Chat function ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/functions/{id}/versions",
    "method": "createFunctionVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "functions",
    "typeScriptTag": "functions",
    "description": "Create a chat function version",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Chat function ID",
        "example": 0
      },
      {
        "name": "handler_script",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HANDLER_SCRIPT"
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
    "url": "/v1/imports/channels",
    "method": "batchChannels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "imports",
    "typeScriptTag": "imports",
    "description": "Import channels",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/v1/imports/channels/{id}/members",
    "method": "channelMembersBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "imports",
    "typeScriptTag": "imports",
    "description": "Import channel members",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/v1/imports/messages",
    "method": "batchMessagesFromJson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "imports",
    "typeScriptTag": "imports",
    "description": "Import messages",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/v1/imports/users",
    "method": "jsonUsersBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "imports",
    "typeScriptTag": "imports",
    "description": "Import users",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/v1/jobs",
    "method": "listJobsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "List jobs",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      },
      {
        "name": "running",
        "schema": "boolean",
        "required": false,
        "description": "Filters for jobs currently running"
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
    "url": "/v1/jobs/{id}",
    "method": "getJobById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieve a job",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Job ID",
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
      }
    ]
  },
  {
    "url": "/v1/messages",
    "method": "deleteAll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Delete messages",
    "parameters": [],
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
    "url": "/v1/messages",
    "method": "listPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "List messages",
    "parameters": [
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Start cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "next",
        "schema": "integer",
        "required": false,
        "description": "Next page cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch subsequent pages"
      },
      {
        "name": "relation",
        "schema": "string",
        "required": false,
        "description": "Page cursor relation. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": "Filters messages by a sender's username"
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Filters text messages by text contained in the message body"
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
    "url": "/v1/messages/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Delete a message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message ID",
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
      }
    ]
  },
  {
    "url": "/v1/messages/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Retrieve a message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message ID",
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
      }
    ]
  },
  {
    "url": "/v1/messages/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Update a message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Message ID",
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
      }
    ]
  },
  {
    "url": "/v1/messages/{id}/read-receipts",
    "method": "listReadReceipts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "List message read receipts",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/runtimes/nodejs",
    "method": "getNodejsChatRuntime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "runtime",
    "typeScriptTag": "runtime",
    "description": "Retrieve NodeJS chat runtime",
    "parameters": [],
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
    "url": "/v1/runtimes/nodejs/dependencies",
    "method": "updateNodejsChatDependencies",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "runtime",
    "typeScriptTag": "runtime",
    "description": "Update NodeJS chat runtime NPM dependencies",
    "parameters": [],
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
    "url": "/v1/runtimes/nodejs/environment-variables",
    "method": "updateNodejsChatEnvironmentVariables",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "runtime",
    "typeScriptTag": "runtime",
    "description": "Update NodeJS chat runtime environment variables",
    "parameters": [],
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
    "url": "/v1/runtimes/nodejs/functions",
    "method": "listNodejsChatFunctions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "runtime",
    "typeScriptTag": "runtime",
    "description": "List NodeJS chat runtime functions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/runtimes/nodejs/functions",
    "method": "createNodejsChatFunction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "runtime",
    "typeScriptTag": "runtime",
    "description": "Create a NodeJS chat runtime function",
    "parameters": [
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
        "name": "initialize_asynchronously",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
      }
    ]
  },
  {
    "url": "/v1/runtimes/nodejs/initialization-script",
    "method": "updateNodejsChatInitializationScript",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "runtime",
    "typeScriptTag": "runtime",
    "description": "Update NodeJS chat runtime initialization script",
    "parameters": [
      {
        "name": "script",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCRIPT"
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
    "url": "/v1/threads/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Retrieve a thread",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Reply thread ID",
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
      }
    ]
  },
  {
    "url": "/v1/threads/{id}/keystrokes",
    "method": "sendKeystrokes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Send thread keystrokes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "keys",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYS"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "username": "jane@chatkitty.com"
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
      }
    ]
  },
  {
    "url": "/v1/threads/{id}/messages",
    "method": "listThreadMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "List reply thread messages",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Start cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "next",
        "schema": "integer",
        "required": false,
        "description": "Next page cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch subsequent pages"
      },
      {
        "name": "relation",
        "schema": "string",
        "required": false,
        "description": "Page cursor relation. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
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
    "url": "/v1/threads/{id}/messages",
    "method": "sendReplyMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "threads",
    "typeScriptTag": "threads",
    "description": "Send a reply thread message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "group_tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "username": "jane@chatkitty.com"
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
      }
    ]
  },
  {
    "url": "/v1/user-sessions",
    "method": "listUserSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user-sessions",
    "typeScriptTag": "userSessions",
    "description": "List user sessions",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Filters by state"
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
    "url": "/v1/users",
    "method": "getPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filters by username"
      },
      {
        "name": "properties",
        "schema": "string",
        "required": false,
        "description": "Filters by user custom properties"
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
    "url": "/v1/users",
    "method": "checkExists",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Check a user exists",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Username of the user",
        "example": "NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Empty object"
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
    "url": "/v1/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create a user",
    "parameters": [
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAY_NAME"
      },
      {
        "name": "is_guest",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "properties",
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
    "url": "/v1/users/{id}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
      }
    ]
  },
  {
    "url": "/v1/users/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Retrieve a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
      }
    ]
  },
  {
    "url": "/v1/users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
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
      }
    ]
  },
  {
    "url": "/v1/users/{id}/channels",
    "method": "listChannelsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List a user's channels",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Zero-based page index (0..N)",
        "default": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned",
        "default": 25
      },
      {
        "name": "sort",
        "schema": "array",
        "required": false,
        "description": "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported."
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
    "url": "/v1/users/{id}/display-picture",
    "method": "updateDisplayPicture",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update a user's display picture",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "content_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT_TYPE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
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
    "url": "/v1/users/{id}/messages",
    "method": "listMessagesPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List a user's messages",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Start cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "next",
        "schema": "integer",
        "required": false,
        "description": "Next page cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch subsequent pages"
      },
      {
        "name": "relation",
        "schema": "string",
        "required": false,
        "description": "Page cursor relation. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "unread",
        "schema": "boolean",
        "required": false,
        "description": "Filters by returning unread messages"
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
    "url": "/v1/users/{id}/notifications",
    "method": "listNotificationsPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List a user's notifications",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "size",
        "schema": "integer",
        "required": false,
        "description": "The size of the page to be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": "Start cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
      },
      {
        "name": "next",
        "schema": "integer",
        "required": false,
        "description": "Next page cursor value. Do not set manually. Provided by the Platform API pagination engine to fetch subsequent pages"
      },
      {
        "name": "relation",
        "schema": "string",
        "required": false,
        "description": "Page cursor relation. Do not set manually. Provided by the Platform API pagination engine to fetch previous or next pages"
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
    "url": "/v1/users/{id}/secrets/{name}",
    "method": "removeSecretValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Remove a user secret",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The secret's name",
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
      }
    ]
  },
  {
    "url": "/v1/users/{id}/secrets/{name}",
    "method": "getSecret",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Retrieve a user secret",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The secret's name",
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
      }
    ]
  },
  {
    "url": "/v1/users/{id}/secrets/{name}",
    "method": "setUserSecret",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Set a user secret",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "User ID",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "The secret's name",
        "example": "NAME"
      },
      {
        "name": "secret",
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="ChatKitty Platform API"
      apiBaseUrl="https://api.chatkitty.com"
      apiVersion="2.58.3"
      endpoints={48}
      sdkMethods={68}
      schemas={125}
      parameters={173}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/chatkitty/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/chatkitty/openapi.yaml"
      developerDocumentation="chatkitty.com/docs/api/reference"
    />
  );
}
  