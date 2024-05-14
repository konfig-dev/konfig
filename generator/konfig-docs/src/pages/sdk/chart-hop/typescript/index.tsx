import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ChartHopTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="chart-hop-typescript-sdk"
      metaDescription={`ChartHop is a dynamic People Operations Platform that connects and visualizes all your people data to empower your organization through insights, alignment, and action.`}
      company="ChartHop"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/logo.png"
      companyKebabCase="chart-hop"
      clientNameCamelCase="chartHop"
      homepage="charthop.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/favicon.png"
      contactUrl="https://www.charthop.com"
      contactEmail="support@charthop.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","analytics","hr_metrics","hr_analytics","hr_reporting","human_resources","workforce_planning","hr_dashboard","workforce_insights","people_analytics","workforce_intelligence","workforce_analytics","human_capital_management","workforce_solutions","hris"]}
      methods={[
  {
    "url": "/v1/org/{orgId}/access/entity/{type}",
    "method": "entityActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "access",
    "typeScriptTag": "access",
    "description": "Return the appropriate actions that can be performed on an entity or set of entities",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Entity type",
        "example": "TYPE"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Entity ids"
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": "Actions, defaults to update,delete"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to check, defaults to all fields"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date, defaults to today"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id, defaults to primary"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/action/{actionId}",
    "method": "deleteActionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "Delete an action",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action id",
        "example": "ACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/action/{actionId}",
    "method": "getActionById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "Return a particular action by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action id",
        "example": "ACTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/action/{actionId}",
    "method": "updateExistingActionById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "Update an existing action",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action id",
        "example": "ACTIONID"
      },
      {
        "name": "action",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "stepTaskConfigs",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/action",
    "method": "getAllPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "Return all actions in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Action id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/action",
    "method": "createNewAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "Create an action",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "action",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "stepTaskConfigs",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/action/{actionId}/run",
    "method": "executeActionForTesting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "Run an action - for testing",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "actionId",
        "schema": "string",
        "required": true,
        "description": "Action id",
        "example": "ACTIONID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "eventCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTCODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/ai/form-response/summary",
    "method": "generateTextSummary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ai",
    "typeScriptTag": "ai",
    "description": "Use AI to generate a summary of text form responses",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTIONID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app-config/{appId}",
    "method": "getDefaultConfigByApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "appConfig",
    "typeScriptTag": "appConfig",
    "description": "Return default app configuration by app",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app-config/{appId}/{userId}",
    "method": "getUserConfigByAppAndUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "appConfig",
    "typeScriptTag": "appConfig",
    "description": "Return user app configuration by app and user",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app-config/{appId}/{userId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "appConfig",
    "typeScriptTag": "appConfig",
    "description": "Update an existing app",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      },
      {
        "name": "fieldMappers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customFieldMappers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customOutboundFieldMappers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "disabledFieldMappers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "enabledOutboundFieldMappers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "templateMatchers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app-config",
    "method": "createNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "appConfig",
    "typeScriptTag": "appConfig",
    "description": "Create a new app config",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "fieldMappers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customFieldMappers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "customOutboundFieldMappers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "disabledFieldMappers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "enabledOutboundFieldMappers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "templateMatchers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/app/notify",
    "method": "sendEmailNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Send an email notification to the configured notify users, on behalf of an app",
    "parameters": [
      {
        "name": "emailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailContentHtml",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emailMarkdown",
        "schema": "string",
        "description": ""
      },
      {
        "name": "chatMarkdown",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notifyType",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/{appId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Delete an app",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/{appId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Return a particular app by id",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/{appId}",
    "method": "updateExistingApp",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Update an existing app",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "summary",
        "schema": "string",
        "description": "",
        "example": "The Slack app does X Y and Z"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Slack"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "The Slack app does X Y and Z"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "slack-import"
      },
      {
        "name": "redirectUris",
        "schema": "array",
        "description": ""
      },
      {
        "name": "allowedIps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "configFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "setupInstructions",
        "schema": "string",
        "description": "",
        "example": "To install the Slack, use your API key from X and Y"
      },
      {
        "name": "cronOrder",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "cronSchedule",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cronDayOfWeek",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "wordmarkImagePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "poweredByImagePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "minAccess",
        "schema": "string",
        "description": ""
      },
      {
        "name": "roleId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "eventNotifyUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bundle",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}/code",
    "method": "getOauth2AuthorizationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Retrieve an Oauth2 authorization code for this app, which can be exchanged for an access token",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "Scopes"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}/token",
    "method": "getTokenForApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Retrieve the current token for this app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}/token",
    "method": "generateOrRegenerateAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Generate or regenerate a long-lived access token for the app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}",
    "method": "getActiveAppsByOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Return all active apps available for a particular org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter by type (app, bundle)"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "Filter by tags"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "App id to start from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app",
    "method": "listPublicGlobalApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Return all publicly visible global apps",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Tag to filter by"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "App id to start from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app",
    "method": "createNewApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Create a new app",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "summary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "The Slack app does X Y and Z"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Slack"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "The Slack app does X Y and Z"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "slack-import"
      },
      {
        "name": "redirectUris",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "allowedIps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "configFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "setupInstructions",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "To install the Slack, use your API key from X and Y"
      },
      {
        "name": "cronOrder",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "cronSchedule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cronDayOfWeek",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wordmarkImagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "poweredByImagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "minAccess",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MINACCESS"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "eventNotifyUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payload",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "events",
        "schema": "array",
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
        "name": "bundle",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/app/name/{appName}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Return a particular app by name",
    "parameters": [
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "App name",
        "example": "APPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}",
    "method": "uninstallAppByUserId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Uninstall an app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      },
      {
        "name": "keepEntityIds",
        "schema": "string",
        "required": false,
        "description": "Comma-separated list of bundle-installed entities to delete -- if this parameter is omitted, all bundle-installed entities will be deleted"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}",
    "method": "findInstalledAppUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Get an installed app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}",
    "method": "updateInstalledApp",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Update the settings of an installed app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      },
      {
        "name": "includeInactive",
        "schema": "boolean",
        "required": false,
        "description": "If the installed appUser is inactive, load inactive instead"
      },
      {
        "name": "appId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "orgs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "secrets",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/name/{appName}",
    "method": "getInstalledAppByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Get an installed app by name",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "App name",
        "example": "APPNAME"
      },
      {
        "name": "includeInactive",
        "schema": "boolean",
        "required": false,
        "description": "If the installed appUser is inactive, load inactive instead"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install",
    "method": "findInstalledAppUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Find installed app users",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Filter by type (app, bundle)"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "Filter by tag"
      },
      {
        "name": "statuses",
        "schema": "string",
        "required": false,
        "description": "Filter by App User statuses, comma-separated. Accepted values: ['NORMAL', 'INACTIVE', 'UNINSTALLED']"
      },
      {
        "name": "includeFormer",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include app users with NONE access to orgs they pertain to.  Default is false"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "App id to start from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install",
    "method": "installAppForOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Install an app for a particular org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "orgs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "secrets",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/validate",
    "method": "validateAppInstallation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Validate the installation of an app for a particular org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "orgs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "secrets",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}/run",
    "method": "runInstalledApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Run an installed app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/app/org/{orgId}/install/{appUserId}/installdata/{installDataName}",
    "method": "getTokenForApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app",
    "typeScriptTag": "app",
    "description": "Retrieve the current token for this app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "App user id",
        "example": "APPUSERID"
      },
      {
        "name": "installDataName",
        "schema": "string",
        "required": true,
        "description": "Name",
        "example": "INSTALLDATANAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-request/{approvalRequestId}/scenario-response",
    "method": "getScenarioResponseById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval-request",
    "typeScriptTag": "approvalRequest",
    "description": "Return a particular approval request scenario response by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request id",
        "example": "APPROVALREQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-request/scenario-job/{jobId}",
    "method": "getApprovalRequestScenarioResponseByJobId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval-request",
    "typeScriptTag": "approvalRequest",
    "description": "Return a particular approval request scenario response by jobId",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-request/entity/scenario",
    "method": "getAllApprovalRequestScenarioResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval-request",
    "typeScriptTag": "approvalRequest",
    "description": "Return all approval request scenario responses for an org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "entityIds",
        "schema": "string",
        "required": false,
        "description": "entity ids to filter on"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted approval requests"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain",
    "method": "getApprovalChains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return approval chains",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": "The type of entity"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "the id of the entity"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain",
    "method": "createChain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Create an approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "createDefaultStages",
        "schema": "boolean",
        "required": false,
        "description": "Create default stages"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "SCENARIO"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Comp Review 06/15/2022"
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "fallbackApproverJobId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "fallbackApproverJobError",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "approvalNotifierUserIds",
        "schema": "array",
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
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}",
    "method": "deleteChainById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Delete a approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}",
    "method": "getApprovalChainById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return a particular approval chain by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}",
    "method": "updateChain",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Update a approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Comp Review 06/15/2022"
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "fallbackApproverJobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "fallbackApproverJobError",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvalNotifierUserIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/{approvalRequestId}",
    "method": "deleteRequestApproval",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Delete an approval request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request id",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/{approvalRequestId}",
    "method": "requestApprovalRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return an approval request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request id",
        "example": "APPROVALREQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/{approvalRequestId}",
    "method": "updateExistingRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Update an existing approval request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "approval request id",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "previewJobId",
        "schema": "string",
        "required": false,
        "description": "preview-as job id"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/entity/comp-review",
    "method": "getCompReviewResponsesForChain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return all approval request comp review responses for an approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "entityIds",
        "schema": "array",
        "required": false,
        "description": "entity ids to filter on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/stage",
    "method": "getApprovalChainStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return all approval chain stages for an approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/stage",
    "method": "createChainStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Create an approval chain stage",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "inclusionExpression",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inclusionBehavior",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expandExpression",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rejectBehavior",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REJECTBEHAVIOR"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "approvalCommentRequired",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rejectionCommentRequired",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "groups",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/stage/{approvalChainStageId}",
    "method": "deleteApprovalChainStage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Delete an approval chain stage",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalChainStageId",
        "schema": "string",
        "required": true,
        "description": "Approval chain stage id",
        "example": "APPROVALCHAINSTAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/stage/{approvalChainStageId}",
    "method": "getAllStagesForChain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return all approval chain stages for an approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalChainStageId",
        "schema": "string",
        "required": true,
        "description": "Approval chain stage id",
        "example": "APPROVALCHAINSTAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/stage/{approvalChainStageId}",
    "method": "updateStageById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Update an existing approval chain stage",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalChainStageId",
        "schema": "string",
        "required": true,
        "description": "approval chain stage id",
        "example": "APPROVALCHAINSTAGEID"
      },
      {
        "name": "inclusionExpression",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inclusionBehavior",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expandExpression",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rejectBehavior",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvalCommentRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rejectionCommentRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/create-default-chain",
    "method": "generateDefaultChainStages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Build a default approval chain based on entity type",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request",
    "method": "getAllApprovalRequestsForApprovalChain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return all approval requests for an approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": "entity type to filter on"
      },
      {
        "name": "entityIds",
        "schema": "string",
        "required": false,
        "description": "entity ids to filter on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Create an approval request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "dryRun",
        "schema": "boolean",
        "required": false,
        "description": "Dry run without creating real request"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/entity/scenario",
    "method": "getScenarioResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Return all approval request scenario responses for an approval chain",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "entityIds",
        "schema": "string",
        "required": false,
        "description": "entity ids to filter on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/{approvalRequestId}/reassign-approver",
    "method": "reassignApproverAtStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Reassigning an approver at a stage",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "approval request id",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "stageOrder",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "initialJobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INITIALJOBID"
      },
      {
        "name": "reassignJobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASSIGNJOBID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/approval-chain/{approvalChainId}/request/{approvalRequestId}/send-reminder",
    "method": "sendStageReviewerReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approval",
    "typeScriptTag": "approval",
    "description": "Send a reminder for a stage reviewer in an existing approval request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": true,
        "description": "Approval chain id",
        "example": "APPROVALCHAINID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "approval request id",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/bulk/delete",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Delete a set of assessments",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/bulk/duplicate",
    "method": "bulkDuplicateAssessments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Duplicate a set of assessments",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/bulk/move",
    "method": "updateAssessmentTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Update the types of a set of assessments",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment",
    "method": "getAllPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Return all assessments in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type of assessment to filter by"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Assessment id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "List of ids to filter by"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment",
    "method": "createNewAssessment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Create a assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering Budget Q2 2019"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "engineering-budget-q2-2019"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "fields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "doneAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      },
      {
        "name": "taskCount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
      },
      {
        "name": "taskDoneCount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 3
      },
      {
        "name": "peopleIncludedCount",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 12
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/{assessmentId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Delete a assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/{assessmentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Return a particular assessment by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/{assessmentId}",
    "method": "updateExistingAssessment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Update an existing assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      },
      {
        "name": "silent",
        "schema": "boolean",
        "required": false,
        "description": "Suppress notification emails"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Engineering Budget Q2 2019"
      },
      {
        "name": "slug",
        "schema": "string",
        "description": "",
        "example": "engineering-budget-q2-2019"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "doneAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      },
      {
        "name": "taskCount",
        "schema": "integer",
        "description": "",
        "example": 12
      },
      {
        "name": "taskDoneCount",
        "schema": "integer",
        "description": "",
        "example": 3
      },
      {
        "name": "peopleIncludedCount",
        "schema": "integer",
        "description": "",
        "example": 12
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/{assessmentId}/complete",
    "method": "completeAssessment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Complete a assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/{assessmentId}/reactivate",
    "method": "reactivateAssessment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Reactivate a assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/assessment/{assessmentId}/form/{formId}/expire",
    "method": "expireFormTasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessment",
    "typeScriptTag": "assessment",
    "description": "Expire all pending tasks for a form of an assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}/billing/checkout",
    "method": "upgradeSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "billing",
    "typeScriptTag": "billing",
    "description": "Checks out customer to upgrade to pay for their subscription",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTMETHOD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}/billing/cancel",
    "method": "cancelSubscriptionForCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "billing",
    "typeScriptTag": "billing",
    "description": "Cancel a subscription for a customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      },
      {
        "name": "otherComments",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OTHERCOMMENTS"
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
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}/billing",
    "method": "customerBillingInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "billing",
    "typeScriptTag": "billing",
    "description": "Return billing information for a customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool",
    "method": "getAllForOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Get all budget pools for an org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": false,
        "description": "Comp Review Id to filter on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool",
    "method": "createNewPool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Create a new budget pool",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Merit"
      },
      {
        "name": "participantsExpr",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "appliedField",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "base"
      },
      {
        "name": "sourceField",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "base"
      },
      {
        "name": "basisType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BASISTYPE"
      },
      {
        "name": "fixedAmount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fixedValue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "basisFieldMatrix",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fixedBudgetMap",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "basisExpr",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool/{id}",
    "method": "deleteBudgetPoolById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Delete a budget pool",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired budget pool",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool/{id}",
    "method": "getSpecificPool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Get a specific budget pool",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired budget pool",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool/{id}",
    "method": "updateBudgetPool",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Update a budget pool",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired budget pool",
        "example": "ID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Merit"
      },
      {
        "name": "participantsExpr",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliedField",
        "schema": "string",
        "description": "",
        "example": "base"
      },
      {
        "name": "sourceField",
        "schema": "string",
        "description": "",
        "example": "base"
      },
      {
        "name": "basisType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fixedAmount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fixedValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "basisFieldMatrix",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fixedBudgetMap",
        "schema": "object",
        "description": ""
      },
      {
        "name": "basisExpr",
        "schema": "string",
        "description": ""
      },
      {
        "name": "defaultCurrency",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool/{id}/guidelines",
    "method": "getGuidelinesForBudgetPool",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Get the guidelines associated with a budget pool",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired budget pool",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool/{id}/preview",
    "method": "calculateGuideline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "Generate tiering & preview with the given budget calculated for the compensation review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired budget pool",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/budget-pool/{id}/calculate",
    "method": "calculateGuideline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "budget-pool",
    "typeScriptTag": "budgetPool",
    "description": "",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired budget pool",
        "example": "ID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "ID of the scenario the budget will be calculated against"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/calendar",
    "method": "getEntriesByTimePeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "calendar",
    "typeScriptTag": "calendar",
    "description": "Return calendar entries in a given time period",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "Start date"
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "End date"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type of calendar entries to retrieve (timeoff, anniversary, birthday)"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query filter to filter for part of the organization"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format to return data in"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category",
    "method": "getAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "category",
    "typeScriptTag": "category",
    "description": "Return categories that are available to the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "(https://docs.charthop.com/developer-basics Return only built-in or custom categories"
      },
      {
        "name": "unsorted",
        "schema": "boolean",
        "required": false,
        "description": "(https://docs.charthop.com/developer-basics Return categories array unsorted"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category",
    "method": "createNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "category",
    "typeScriptTag": "category",
    "description": "Create a category",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Performance"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nativeFields",
        "schema": "array",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category/{categoryId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "category",
    "typeScriptTag": "category",
    "description": "Delete a category",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "Category id",
        "example": "CATEGORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category/{categoryId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "category",
    "typeScriptTag": "category",
    "description": "Return a particular category by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "Category id",
        "example": "CATEGORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category/{categoryId}",
    "method": "updateExistingCategory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "category",
    "typeScriptTag": "category",
    "description": "Update an existing category",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "Category id",
        "example": "CATEGORYID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Performance"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "nativeFields",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category-sort",
    "method": "deleteSortOrder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "category-sort",
    "typeScriptTag": "categorySort",
    "description": "Delete a category sort order",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category-sort",
    "method": "getCategorySortOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "category-sort",
    "typeScriptTag": "categorySort",
    "description": "Return category sort order",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category-sort",
    "method": "updateExistingCategorySort",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "category-sort",
    "typeScriptTag": "categorySort",
    "description": "Update an existing category sort order",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category-sort",
    "method": "createIfNotExists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "category-sort",
    "typeScriptTag": "categorySort",
    "description": "Create a category sort order if it doesn't exist",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "categoryIds",
        "schema": "array",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category-sort",
    "method": "createOrUpdateSort",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "category-sort",
    "typeScriptTag": "categorySort",
    "description": "Create or update category sort order for a given org and return the sort data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryIds",
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
        "statusCode": "400",
        "description": "categoryIds cannot be empty"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/category-sort/upsert",
    "method": "createOrUpdateSortOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "category-sort",
    "typeScriptTag": "categorySort",
    "description": "Create or update category sort order for a given org and return the sort data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryIds",
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
        "statusCode": "400",
        "description": "categoryIds cannot be empty"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/bulkupdate",
    "method": "bulkUpdateJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Perform a bulk update on a number of jobs",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{type}/validate",
    "method": "validateChangeOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Validate a change",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Change type",
        "example": "TYPE"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "personId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherJobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departRegret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{type}",
    "method": "createNewChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Create a new change",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Change type",
        "example": "TYPE"
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "Source of change"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id of change creation"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "personId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherJobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departRegret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change",
    "method": "getRecentChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Return recent changes across an org, or for a particular person or job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to start from"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Date to get changes through (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Types of change to filter by"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Return changes that modify these fields"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": "Person id to filter by"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": "Job id to filter by"
      },
      {
        "name": "includeBackfill",
        "schema": "boolean",
        "required": false,
        "description": "Find and include first backfill if it exists"
      },
      {
        "name": "refs",
        "schema": "string",
        "required": false,
        "description": "References to filter by"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query to filter against"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Change id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "open",
        "schema": "string",
        "required": false,
        "description": "Whether the role is open or not"
      },
      {
        "name": "desc",
        "schema": "boolean",
        "required": false,
        "description": "Descending (default false)"
      },
      {
        "name": "scenarioOnly",
        "schema": "boolean",
        "required": false,
        "description": "Scenario only (exclude primary changes)"
      },
      {
        "name": "parentOnly",
        "schema": "boolean",
        "required": false,
        "description": "Parent changes only (exclude child changes)"
      },
      {
        "name": "includeGrantSchedule",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include full grant schedule when returning equity updates"
      },
      {
        "name": "excludeAtsRecruitingFields",
        "schema": "boolean",
        "required": false,
        "description": "Whether to exclude ats recruiting fields. Only applies when fieldEntityTypeString is passed"
      },
      {
        "name": "includeStruck",
        "schema": "boolean",
        "required": false,
        "description": "Deprecated parameter for backwards-compatibility (use statuses) - whether to include STRUCK and PROPOSED changes, or just ACTIVE changes"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Statuses to filter by"
      },
      {
        "name": "stripUpdates",
        "schema": "boolean",
        "required": false,
        "description": "Whether to strip returned update changes of update types that were not explicitly requested"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "fieldEntityTypes",
        "schema": "string",
        "required": false,
        "description": "Only return changes which set fields with these entity types"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{changeId}",
    "method": "deletePreviousChange",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Delete a previous change",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id of person creation"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{changeId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Return a particular change by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{changeId}",
    "method": "updateChangeById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Make a change to a change",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id of person creation"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departRegret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvalNote",
        "schema": "string",
        "description": "",
        "example": "Not acceptable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{changeId}/approver",
    "method": "checkApproverEligibility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Given a of change id, see if the person can approve/reject",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change Id",
        "example": "CHANGEID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to check the approval on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/scenario/{scenarioId}",
    "method": "findScenarioChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Return all changes for a particular scenario, with before job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/sync/{type}",
    "method": "createIfNotExists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Sync a change (create the change only if it does not already exist)",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Change type",
        "example": "TYPE"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id of person creation"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "personId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherJobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departRegret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/depart-rehire",
    "method": "createDepartRehirePair",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Create a depart-rehire pair of changes, for filling in historical data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Rehire start date"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "personId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "otherJobId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "announceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "departRegret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "promotionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "update",
        "schema": "object",
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/bulkchange",
    "method": "performBulkChange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Perform a series of changes at once",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changes",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change/{changeId}/approve",
    "method": "approveOrReject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Approve or reject a change",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "approvalNote",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/change/{changeId}",
    "method": "amendScenarioChange",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Amend a change within a scenario, and potentially return the updated data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve"
      },
      {
        "name": "includeUpdatedFields",
        "schema": "boolean",
        "required": false,
        "description": "Include all updated fields in the response, including change.after.fieldName for each updated field"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to return; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/change/{changeId}/status/{processId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Get the status of a running change within a scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "processId",
        "schema": "integer",
        "required": true,
        "description": "Process id",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comment/{commentId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Delete a comment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "Comment id",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comment/{commentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Return a particular comment by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "Comment id",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comment",
    "method": "createNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Post a comment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "parentEntityId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "content",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comment/comp-review/{compReviewId}",
    "method": "listCommentsOnCompReview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Return comments on changes within a comp review, paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": false,
        "description": "Approval request id"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Comment id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "desc",
        "schema": "boolean",
        "required": false,
        "description": "Descending (default false)"
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "required": false,
        "description": "Whether comments are viewed in preview mode, defaults false"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": "Optional preview user jobId"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comment/scenario/{scenarioId}",
    "method": "listCommentsOnScenarioAndChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Return comments on a scenario and the changes within, paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Comment id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "desc",
        "schema": "boolean",
        "required": false,
        "description": "Descending (default false)"
      },
      {
        "name": "includeChangeComments",
        "schema": "boolean",
        "required": false,
        "description": "Whether to also include comments on changes within the scenario (default false)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comment/entity/{entityId}",
    "method": "getByEntityId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comment",
    "typeScriptTag": "comment",
    "description": "Return comments on a particular entity paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "Entity id",
        "example": "ENTITYID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Comment id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "desc",
        "schema": "boolean",
        "required": false,
        "description": "Descending (default false)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/band",
    "method": "deleteCompBandsOnDate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Delete all comp bands on a date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group update"
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
    "url": "/v1/org/{orgId}/band",
    "method": "findCompBandsInOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Find comp bands in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Table id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted bands"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/band",
    "method": "createCompBand",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Create a comp band",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of band creation"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "L15"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "#ffee4a"
      },
      {
        "name": "baseCompMax",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "baseCompMid",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "baseCompMin",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "baseSpread",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "baseInterval",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "baseTargetPay",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "baseTargetPayPercentile",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "equityTargetShares",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "equityTargetPercentOfBase",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "equityTargetValue",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "variableValue",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "variablePercentOfBase",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTierOneField",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTierTwoField",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTierThreeField",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobLevel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBLEVEL"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/band/{bandId}",
    "method": "removeCompBand",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Delete a comp band",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "bandId",
        "schema": "string",
        "required": true,
        "description": "Comp band id",
        "example": "BANDID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/band/{bandId}",
    "method": "findCompBandsInOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Return a particular comp band by id on an effective date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "bandId",
        "schema": "string",
        "required": true,
        "description": "Comp band id",
        "example": "BANDID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/band/{bandId}",
    "method": "updateCompBandById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Update a comp band",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "bandId",
        "schema": "string",
        "required": true,
        "description": "Band id",
        "example": "BANDID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of band update"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "L15"
      },
      {
        "name": "color",
        "schema": "string",
        "description": "",
        "example": "#ffee4a"
      },
      {
        "name": "baseCompMax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "baseCompMid",
        "schema": "object",
        "description": ""
      },
      {
        "name": "baseCompMin",
        "schema": "object",
        "description": ""
      },
      {
        "name": "baseSpread",
        "schema": "number",
        "description": ""
      },
      {
        "name": "baseInterval",
        "schema": "object",
        "description": ""
      },
      {
        "name": "baseTargetPay",
        "schema": "object",
        "description": ""
      },
      {
        "name": "baseTargetPayPercentile",
        "schema": "number",
        "description": ""
      },
      {
        "name": "equityTargetShares",
        "schema": "number",
        "description": ""
      },
      {
        "name": "equityTargetPercentOfBase",
        "schema": "number",
        "description": ""
      },
      {
        "name": "equityTargetValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "variableValue",
        "schema": "object",
        "description": ""
      },
      {
        "name": "variablePercentOfBase",
        "schema": "number",
        "description": ""
      },
      {
        "name": "jobTierOneField",
        "schema": "object",
        "description": ""
      },
      {
        "name": "jobTierTwoField",
        "schema": "object",
        "description": ""
      },
      {
        "name": "jobTierThreeField",
        "schema": "object",
        "description": ""
      },
      {
        "name": "jobLevel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/band/reset",
    "method": "deleteCompBandsOnDate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "band",
    "typeScriptTag": "band",
    "description": "Delete all comp band data on a date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group update"
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
    "url": "/v1/org/{orgId}/comp-review/bulk/delete",
    "method": "deleteBulkCompReviews",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Delete a set of comp reviews",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/bulk/duplicate",
    "method": "createBulkDuplicate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Duplicate a set of comp reviews",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}",
    "method": "deleteCompReview",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Delete a comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}",
    "method": "findCompReviewById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Return a particular comp review by ID",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}",
    "method": "updateCompReview",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Update a comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Comp review H2 2022"
      },
      {
        "name": "config",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "reviewerCount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "submittedCount",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/pause",
    "method": "pauseReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Pauses the compensation review to allow for editing by an admin",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/conclude",
    "method": "closeCompReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Concludes (or closes) the compensation review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "isFullyApproved",
        "schema": "boolean",
        "required": false,
        "description": "Whether is review fully approved on conclude (default false)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/preview",
    "method": "generateTieringPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Generate tiering & preview for a compensation review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/in-cycle",
    "method": "overviewInCycleCompReview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get an overview for a given user in an in-cycle comp-review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "scenariosOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "proposalOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewsOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "columnsOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeAllRequests",
        "schema": "boolean",
        "required": false,
        "description": "Allows users with multiple roles to request full access for owner or final approver roles"
      },
      {
        "name": "includeFeatures",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review",
    "method": "findCompReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Find comp reviews in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Comp review ID to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review",
    "method": "createCompReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Create a comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Comp review H2 2022"
      },
      {
        "name": "config",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/metadata",
    "method": "getMetadataById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Return metadata for a particular comp review by ID",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/generate",
    "method": "generateCompReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Generate a compensation review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/in-cycle/changes",
    "method": "getChangesInCycle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get the changes for a set of scenarios in an in-cycle comp-review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": false,
        "description": "Approval request id"
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "jobId",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/in-cycle/changes/{changeId}",
    "method": "getChangeAndGuidelineFlags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get the change data and guideline flags associated with an in-cycle change",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/in-cycle/collabicient",
    "method": "getCollabicientInCycle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get a collaborator participant reviewer in-cycle comp-review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "scenariosOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "proposalOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewsOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "columnsOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isPreview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "collabicientJobId",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/eligible-employees",
    "method": "getEligibleEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get a list of employees eligible for a given comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "filterScenarioIds",
        "schema": "string",
        "required": false,
        "description": "Find ineligible employees under specific comp scenario managers"
      },
      {
        "name": "ineligible",
        "schema": "boolean",
        "required": false,
        "description": "Whether to get eligible or ineligible employees (defaults to eligible)"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Job id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Table fields"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Optional CQL filter to apply to employees"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/associated-entities",
    "method": "getDateCaches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get the necessary caches on a specific date for a compensation review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/send-reminder-email",
    "method": "sendReminderEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Send a reminder email to someone participating in a comp review ",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPROVALREQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/approval-requests",
    "method": "listRequestResponses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get a list of approval request responses for a given comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "isPreview",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/approval-requests/{approvalRequestId}",
    "method": "updateApprovalRequestStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Update approval request status, including any rollups",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request id",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "previewJobId",
        "schema": "string",
        "required": false,
        "description": "Preview-as job id"
      },
      {
        "name": "isFinalApproval",
        "schema": "boolean",
        "required": false,
        "description": "Updating the final stage status"
      },
      {
        "name": "collaboratorSelectedReviewerJobId",
        "schema": "string",
        "required": false,
        "description": "Reviewer job id a collaborator is working on"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/export",
    "method": "exportChanges",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Export a comp review's changes",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/export/audit",
    "method": "exportAuditLog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Export a comp review's audit log",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/export/comments",
    "method": "exportComments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Export a comp review's comments",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/visualizations",
    "method": "createVisualizationData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Get data for visualizations for a comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      },
      {
        "name": "viewJobId",
        "schema": "string",
        "required": false,
        "description": "The job you would like to view as"
      },
      {
        "name": "preview",
        "schema": "boolean",
        "required": false,
        "description": "Are the visualizations for a preview"
      },
      {
        "name": "includeAllRequests",
        "schema": "boolean",
        "required": false,
        "description": "Allows users with multiple roles to request full access for owner or final approver roles"
      },
      {
        "name": "changeIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "viewInCurrency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCollaborators",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isCollabicientView",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/comp-review/{compReviewId}/duplicate",
    "method": "duplicateCompReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comp-review",
    "typeScriptTag": "compReview",
    "description": "Duplicate a comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "Comp review id",
        "example": "COMPREVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content/path/{path}",
    "method": "getByPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Return a particular content by path",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "Path",
        "example": "PATH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content/path/{path}/render",
    "method": "renderByPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Return a particular content by path, and render its contents",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "Path",
        "example": "PATH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content/homepage/render",
    "method": "renderHomepageContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Render the contents of the homepage",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
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
    "url": "/v1/org/{orgId}/content/homepage",
    "method": "updateHomepageContent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Update the homepage content",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Benefits Policies"
      },
      {
        "name": "parentContentId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "path",
        "schema": "string",
        "description": "",
        "example": "employee-info/benefits-policies"
      },
      {
        "name": "blocks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "description": "",
        "example": "path/to/image.jpg"
      },
      {
        "name": "emoji",
        "schema": "string",
        "description": "",
        "example": "💥"
      },
      {
        "name": "coverImagePath",
        "schema": "string",
        "description": "",
        "example": "path/to/image.jpg"
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content",
    "method": "getPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Return all content in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Content id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content",
    "method": "createNewPiece",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Create a new piece of content",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Benefits Policies"
      },
      {
        "name": "parentContentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "path",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "employee-info/benefits-policies"
      },
      {
        "name": "blocks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "path/to/image.jpg"
      },
      {
        "name": "emoji",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "💥"
      },
      {
        "name": "coverImagePath",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "path/to/image.jpg"
      },
      {
        "name": "sensitive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content/{contentId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Delete a content",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "contentId",
        "schema": "string",
        "required": true,
        "description": "Content id",
        "example": "CONTENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content/{contentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Return a particular content by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "contentId",
        "schema": "string",
        "required": true,
        "description": "Content id",
        "example": "CONTENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/content/{contentId}",
    "method": "updatePieceById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "content",
    "typeScriptTag": "content",
    "description": "Update an existing piece of content",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "contentId",
        "schema": "string",
        "required": true,
        "description": "Content id",
        "example": "CONTENTID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Benefits Policies"
      },
      {
        "name": "parentContentId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "path",
        "schema": "string",
        "description": "",
        "example": "employee-info/benefits-policies"
      },
      {
        "name": "blocks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "description": "",
        "example": "path/to/image.jpg"
      },
      {
        "name": "emoji",
        "schema": "string",
        "description": "",
        "example": "💥"
      },
      {
        "name": "coverImagePath",
        "schema": "string",
        "description": "",
        "example": "path/to/image.jpg"
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}/subscription",
    "method": "getCharthopSubscription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Returns information about the Charthop subscription for the given customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}/subscription",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENTMETHOD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Return a particular customer by id",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}",
    "method": "updateExistingCustomer",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Update an existing customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "salesforceAccountId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nextInvoiceDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "primaryHeadCountFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secondaryHeadCountFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "arr",
        "schema": "number",
        "description": ""
      },
      {
        "name": "projectedArr",
        "schema": "number",
        "description": ""
      },
      {
        "name": "trialStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trialEndDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stripeSubscriptionSync",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer",
    "method": "listVisibleCustomers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Return all visible customers, paginated by name",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Customer id to start from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Customer.Status. (https://docs.charthop.com/developer-basics"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/customer",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Create a new customer",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "billAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salesforceAccountId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "products",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nextInvoiceDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryHeadCountFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secondaryHeadCountFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "arr",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "projectedArr",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "trialStartDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trialEndDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stripeSubscriptionSync",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/customer/{customerId}/invoices",
    "method": "getAllInvoicesForCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "customer",
    "typeScriptTag": "customer",
    "description": "Returns a list of all the invoices for the given customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "Customer id",
        "example": "CUSTOMERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-view",
    "method": "getAllPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "data-view",
    "typeScriptTag": "dataView",
    "description": "Return all data views in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Data view id to start paginating from"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Data view type to filter by"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Comma delimited of ids to return"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-view",
    "method": "createNewDataView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "data-view",
    "typeScriptTag": "dataView",
    "description": "Create a data view",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "columns",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "image,name,title"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "columnWidths",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "managerCount:1"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "name,title"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "title"
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sensitive",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-view/{dataViewId}",
    "method": "deleteDataView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "data-view",
    "typeScriptTag": "dataView",
    "description": "Delete a data  view",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "dataViewId",
        "schema": "string",
        "required": true,
        "description": "Data view id",
        "example": "DATAVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-view/{dataViewId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "data-view",
    "typeScriptTag": "dataView",
    "description": "Return a particular data view by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "dataViewId",
        "schema": "string",
        "required": true,
        "description": "Data view id",
        "example": "DATAVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-view/{dataViewId}",
    "method": "updateExistingView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "data-view",
    "typeScriptTag": "dataView",
    "description": "Update an existing data view",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "dataViewId",
        "schema": "string",
        "required": true,
        "description": "Data view id",
        "example": "DATAVIEWID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "columns",
        "schema": "string",
        "description": "",
        "example": "image,name,title"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entityType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "columnWidths",
        "schema": "object",
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "",
        "example": "managerCount:1"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "name,title"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "",
        "example": "title"
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sensitive",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/email-template",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "email-template",
    "typeScriptTag": "emailTemplate",
    "description": "Create a new email template",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "self_serve_welcome"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/email-template/{emailTemplateId}",
    "method": "updateExistingTemplate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "email-template",
    "typeScriptTag": "emailTemplate",
    "description": "Update an existing email template",
    "parameters": [
      {
        "name": "emailTemplateId",
        "schema": "string",
        "required": true,
        "description": "Email template id",
        "example": "EMAILTEMPLATEID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "self_serve_welcome"
      },
      {
        "name": "category",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/email-template/essential",
    "method": "listEssentialEmailTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "email-template",
    "typeScriptTag": "emailTemplate",
    "description": "Return all essential email templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/email-template/non-essential",
    "method": "getAllNonEssential",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "email-template",
    "typeScriptTag": "emailTemplate",
    "description": "Return all non-essential email templates",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/email-template/name/{name}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "email-template",
    "typeScriptTag": "emailTemplate",
    "description": "Return the email template by name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "Email template name",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/event/{eventId}",
    "method": "getEventPayload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Return individual event, including payload",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTID"
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
    "url": "/v1/org/{orgId}/event",
    "method": "getPastEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Return past events, paginated, without payloads present",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "User id"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "Entity id"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": "Entity type"
      },
      {
        "name": "parentEntityId",
        "schema": "string",
        "required": false,
        "description": "Parent entity id"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields that were modified"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "Event code to search for"
      },
      {
        "name": "from",
        "schema": "integer",
        "required": false,
        "description": "Timestamp to start search at"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/event/{eventId}/notify",
    "method": "resendAssociatedNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Resend all associated notifications for a previous event (superusers only)",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "Event id",
        "example": "EVENTID"
      },
      {
        "name": "app",
        "schema": "string",
        "required": false,
        "description": "App name to restrict notifications to"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/event/notify/inbound/{appId}/{inboundId}",
    "method": "createInboundNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Create an inbound event",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      },
      {
        "name": "inboundId",
        "schema": "string",
        "required": true,
        "description": "Inbound id",
        "example": "INBOUNDID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/event/notify/outbound/app/{appId}",
    "method": "createOutboundEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "event",
    "typeScriptTag": "event",
    "description": "Create an outbound event",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": true,
        "description": "App id",
        "example": "APPID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": "Process id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}/custom/bulkupdate",
    "method": "bulkUpdateCustomRates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Bulk update custom currency rates in org custom exchange rates",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      },
      {
        "name": "addRates",
        "schema": "boolean",
        "required": false,
        "description": "Boolean to determine whether to add or remove rates from update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}",
    "method": "deleteCustomRateOnDate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Delete a custom exchange rate on a particular date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      },
      {
        "name": "currencyCode",
        "schema": "string",
        "required": false,
        "description": "Currency code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}",
    "method": "getRatesOnDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Return the exchange rates on a particular date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}",
    "method": "updateUsdExchangeRatesForDate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Update the USD-based exchange rates for a particular date. Must be the first of a month.",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rates",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}/global",
    "method": "getGlobalByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Return the global exchange rates based on USD for a particular date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}/custom",
    "method": "getCustomExchangeRates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Return org custom exchange rates",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/exchange-rate/{date}/history",
    "method": "orgCustomExchangeRatesHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exchange-rate",
    "typeScriptTag": "exchangeRate",
    "description": "Return org custom exchange rates",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to use",
        "example": "DATE"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "Currency to search for"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Start date for search"
      },
      {
        "name": "toDate",
        "schema": "string",
        "required": false,
        "description": "End date for search"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/snapshot",
    "method": "rosterToCsvSnapshot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export a snapshot of a current roster to CSV format",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/change",
    "method": "changelogToCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export a changelog to CSV format",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/users",
    "method": "userReviewCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export users for a review to CSV format",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/task/{reviewId}",
    "method": "taskToCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export tasks for a review to CSV format",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reviewId",
        "schema": "string",
        "required": true,
        "description": "review id",
        "example": "REVIEWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/scenario/{scenarioId}",
    "method": "scenarioCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export a CSV changelog of a scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/scenario/{scenarioId}/comments",
    "method": "csvScenarioComments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export a csv log of a scenario comments",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/powerpoint/org",
    "method": "orgChartToPowerpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export org chart to Powerpoint",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "date to export the data from",
        "example": "2016-12-25"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/powerpoint/report/{reportId}",
    "method": "reportToPowerpoint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export report to Powerpoint",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "report id",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/pdf/review/{assessmentId}",
    "method": "pdfReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export reviews in PDF format",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/zip/file",
    "method": "fileZipDownload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export a zipfile of files downloaded from some field",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "field",
        "schema": "string",
        "required": false,
        "description": "Field"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query for jobs or people to match against"
      },
      {
        "name": "size",
        "schema": "string",
        "required": false,
        "description": "Size of images to export, if image file (250x250, 50x50, defaults to original)"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/export/csv/fields",
    "method": "csvCustomFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "export",
    "typeScriptTag": "export",
    "description": "Export a CSV of custom fields",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid parameters"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/cql/validate",
    "method": "validateCarrotExpression",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "expression",
    "typeScriptTag": "expression",
    "description": "Validate carrot expression(https://docs.charthop.com/developer-basics",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "expressions",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/cql/evaluate",
    "method": "evaluateCarrotExpression",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "expression",
    "typeScriptTag": "expression",
    "description": "Evaluate carrot expression",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "expr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPR"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field",
    "method": "getAllPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Return all fields in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Field id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Comma separated Field Ids to find"
      },
      {
        "name": "table",
        "schema": "string",
        "required": false,
        "description": "Retrieve fields from a particular table (id or name); if not passed, returns non-table fields"
      },
      {
        "name": "tableType",
        "schema": "string",
        "required": false,
        "description": "Retrieve fields from a particular table type; ignored if table not passed"
      },
      {
        "name": "form",
        "schema": "string",
        "required": false,
        "description": "Retrieve fields relating to a particular form"
      },
      {
        "name": "builtin",
        "schema": "string",
        "required": false,
        "description": "Include built-in (https://docs.charthop.com/developer-basics, custom (https://docs.charthop.com/developer-basics or all fields - defaults to custom"
      },
      {
        "name": "includeTtst",
        "schema": "boolean",
        "required": false,
        "description": "Include custom ttst fields - defaults to false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Create a field",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableType",
        "schema": "string",
        "required": false,
        "description": "table type to add the field to"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This field tracks the most recent performance rating for an individual."
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "summary"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Job Summary"
      },
      {
        "name": "question",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "What do you think of this placeholder question?"
      },
      {
        "name": "inUse",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "expr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "(base + variable) / 12"
      },
      {
        "name": "exprType",
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
        "name": "plural",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultValue",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYTYPE"
      },
      {
        "name": "sensitive",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENSITIVE"
      },
      {
        "name": "hideExpr",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "expireDays",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tableRef",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "isUnique",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "isRequired",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "isEffectiveDated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dataFetchTypes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "aliases",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "calc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "places",
        "schema": "integer",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/remove-overrides",
    "method": "removeFieldOverrides",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Remove overrides from fields",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/remove-category",
    "method": "removeFromCategories",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Remove field from all associated categories",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/{fieldId}/dryrun",
    "method": "updateFieldDryRun",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Perform a dry-run of an update to an existing field that will require migrations",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Field id",
        "example": "FIELDID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This field tracks the most recent performance rating for an individual."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "summary"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Job Summary"
      },
      {
        "name": "question",
        "schema": "string",
        "description": "",
        "example": "What do you think of this placeholder question?"
      },
      {
        "name": "inUse",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "expr",
        "schema": "string",
        "description": "",
        "example": "(base + variable) / 12"
      },
      {
        "name": "exprType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plural",
        "schema": "string",
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "defaultValue",
        "schema": "object",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideExpr",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "expireDays",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tableRef",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isUnique",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isEffectiveDated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dataFetchTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "aliases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "calc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "places",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/{fieldId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Delete a field",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Field id",
        "example": "FIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/{fieldId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Return a particular field by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Field id",
        "example": "FIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/{fieldId}",
    "method": "updateExistingField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Update an existing field",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Field id",
        "example": "FIELDID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This field tracks the most recent performance rating for an individual."
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "summary"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Job Summary"
      },
      {
        "name": "question",
        "schema": "string",
        "description": "",
        "example": "What do you think of this placeholder question?"
      },
      {
        "name": "inUse",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "expr",
        "schema": "string",
        "description": "",
        "example": "(base + variable) / 12"
      },
      {
        "name": "exprType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plural",
        "schema": "string",
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "defaultValue",
        "schema": "object",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hideExpr",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "expireDays",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tableRef",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isUnique",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isRequired",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isEffectiveDated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dataFetchTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "aliases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "calc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "classification",
        "schema": "string",
        "description": ""
      },
      {
        "name": "places",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/delete",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Delete fields",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/built-in",
    "method": "getBuiltInFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Get built-in fields",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/category/{categoryId}",
    "method": "getFieldsInCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Return fields in a particular category",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "Category id",
        "example": "CATEGORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/category",
    "method": "getUncategorizedFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Return uncategorized fields",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/field/status",
    "method": "updateStatusForExistingFields",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "field",
    "typeScriptTag": "field",
    "description": "Update status for existing fields",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "updateStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATESTATUS"
      },
      {
        "name": "fieldIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "reservedFieldNames",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/file",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "file",
    "typeScriptTag": "file",
    "description": "Returns metadata about a file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "Entity id"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": "Entity type"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "From result id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      },
      {
        "statusCode": "404",
        "description": "File not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/file",
    "method": "uploadNewFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "file",
    "typeScriptTag": "file",
    "description": "Upload a new file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "entity id (if not passed, defaults to user id)"
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": "entity type (if not passed, defaults to user)"
      },
      {
        "name": "field",
        "schema": "string",
        "required": false,
        "description": "field name - can leave blank for a general upload"
      },
      {
        "name": "sensitive",
        "schema": "string",
        "required": false,
        "description": "file sensitivity level - defaults to PERSONAL"
      },
      {
        "name": "file",
        "schema": "string",
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
        "description": "Invalid type or bad request"
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/file/{fileId}",
    "method": "removeFileById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "file",
    "typeScriptTag": "file",
    "description": "Delete a file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File id",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/file/{fileId}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "file",
    "typeScriptTag": "file",
    "description": "Returns metadata about a file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File id",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      },
      {
        "statusCode": "404",
        "description": "File not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/file/{fileId}/download",
    "method": "getMetadataById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "file",
    "typeScriptTag": "file",
    "description": "Download a file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "File id",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      },
      {
        "statusCode": "404",
        "description": "File not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form",
    "method": "listOrgForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Return all forms in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status to filter by"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Form id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form",
    "method": "createNewForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Create a form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "The Engineering department, where engineers develop new technology and products."
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Health Index: Q2"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "blocks",
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
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "submitFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "responseReadFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useFieldAccess",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "approval",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authorSensitive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/person/{personId}",
    "method": "getApplicableFormsForPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Return all active forms applicable to a particular person",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Person id",
        "example": "PERSONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}",
    "method": "deleteFormById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Delete a form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Return a particular form by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "evalJobId",
        "schema": "string",
        "required": false,
        "description": "Evaluate any expressions inside the form relative to a particular job"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}",
    "method": "updateExistingForm",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Update an existing form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "The Engineering department, where engineers develop new technology and products."
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Health Index: Q2"
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "blocks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "submitFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "responseReadFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "useFieldAccess",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "approval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "authorSensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}",
    "method": "submitFormResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Submit data from a form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Org id",
        "example": "FORMID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERSONID"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "blocksData",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/collect",
    "method": "sendEmailsAndChatNotifications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Collect data for an existing form, sending emails and chat notifications to people being requested",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "submitFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preview",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/remind",
    "method": "sendReminderNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Sends reminder for a form with existing tasks, sending emails/chat notifications to people being requested",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "submitFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "preview",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/status",
    "method": "updateFormStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Update status for existing forms",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "updateStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATESTATUS"
      },
      {
        "name": "formIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/delete",
    "method": "deleteFormById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Delete forms",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/draft",
    "method": "getCurrentStateOfDraftData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Get the current state of form draft data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": "Person id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/draft",
    "method": "submitDraftData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Submit draft data from a form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Org id",
        "example": "FORMID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERSONID"
      },
      {
        "name": "data",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "blocksData",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/submit/draft",
    "method": "submitFormDraft",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Submit data from a form draft",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id"
      },
      {
        "name": "targetType",
        "schema": "string",
        "required": false,
        "description": "Target type"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/submit",
    "method": "submitFormData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Submit data from a form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id"
      },
      {
        "name": "targetType",
        "schema": "string",
        "required": false,
        "description": "Target type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/available",
    "method": "listAvailableForms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Return all active forms applicable to a particular entity",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id"
      },
      {
        "name": "targetType",
        "schema": "string",
        "required": false,
        "description": "Target type"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/render",
    "method": "renderForDisplay",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Render a form for display",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id"
      },
      {
        "name": "targetType",
        "schema": "string",
        "required": false,
        "description": "Target type"
      },
      {
        "name": "formResponseId",
        "schema": "string",
        "required": false,
        "description": "Form response id, if editing a prior form response (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "formResponseChangeId",
        "schema": "string",
        "required": false,
        "description": "Form response change id, if editing a prior form response (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "formVersionId",
        "schema": "string",
        "required": false,
        "description": "Form version id, if rendering a previous version of the form"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/{formId}/rerender/question/{updateQuestionId}",
    "method": "rerenderQuestionUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Re-render form blocks based on changes to the form values",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      },
      {
        "name": "updateQuestionId",
        "schema": "string",
        "required": true,
        "description": "The question id that is being updated to trigger the re-render",
        "example": "UPDATEQUESTIONID"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id"
      },
      {
        "name": "targetType",
        "schema": "string",
        "required": false,
        "description": "Target type"
      },
      {
        "name": "formVersionId",
        "schema": "string",
        "required": false,
        "description": "Form version id, if rendering a previous version of the form"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form/draft/{draftId}",
    "method": "deleteFormDraft",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "form",
    "typeScriptTag": "form",
    "description": "Delete the given form draft",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "draftId",
        "schema": "string",
        "required": true,
        "description": "Form Draft id",
        "example": "DRAFTID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form-response",
    "method": "getByForm",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form-response",
    "typeScriptTag": "formResponse",
    "description": "Return form responses by form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": false,
        "description": "Form id to filter by"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "Assessment id to filter by"
      },
      {
        "name": "submitPersonId",
        "schema": "string",
        "required": false,
        "description": "Person id to filter by (person who submitted the form)"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id to filter by"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "FormResponse id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form-response/count",
    "method": "getFormResponseCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form-response",
    "typeScriptTag": "formResponse",
    "description": "Return the total count of form responses by form",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": false,
        "description": "Form id to filter by"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "Assessment id to filter by"
      },
      {
        "name": "submitPersonId",
        "schema": "string",
        "required": false,
        "description": "Person id to filter by (person who submitted the form)"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target id to filter by"
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": false,
        "description": "Question id to filter by"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form-response/{formResponseId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "form-response",
    "typeScriptTag": "formResponse",
    "description": "Delete a form response",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formResponseId",
        "schema": "string",
        "required": true,
        "description": "FormResponse id",
        "example": "FORMRESPONSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form-response/{formResponseId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "form-response",
    "typeScriptTag": "formResponse",
    "description": "Return a particular form response by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formResponseId",
        "schema": "string",
        "required": true,
        "description": "FormResponse id",
        "example": "FORMRESPONSEID"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use for answers; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form-response/{formResponseId}",
    "method": "updateMetadata",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "form-response",
    "typeScriptTag": "formResponse",
    "description": "Update an existing form response's metadata, such as shareAccess information",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formResponseId",
        "schema": "string",
        "required": true,
        "description": "FormResponse id",
        "example": "FORMRESPONSEID"
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/form-response/{formResponseId}",
    "method": "updateAnswersMetadata",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "form-response",
    "typeScriptTag": "formResponse",
    "description": "Re-submit (https://docs.charthop.com/developer-basics an existing form response's answers",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "formResponseId",
        "schema": "string",
        "required": true,
        "description": "FormResponse id",
        "example": "FORMRESPONSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/media",
    "method": "uploadNewMedia",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "media",
    "typeScriptTag": "media",
    "description": "Upload a new piece of media",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
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
        "description": "Invalid type or bad request"
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      }
    ]
  },
  {
    "url": "/v1/media/{mediaId}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "media",
    "typeScriptTag": "media",
    "description": "Returns metadata about a piece of media",
    "parameters": [
      {
        "name": "mediaId",
        "schema": "string",
        "required": true,
        "description": "Media id",
        "example": "MEDIAID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      },
      {
        "statusCode": "404",
        "description": "Media not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/guideline",
    "method": "allForCompReview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "guideline",
    "typeScriptTag": "guideline",
    "description": "Get all guidelines for a given comp review",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": false,
        "description": "comp review id"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "include deleted guidelines"
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
    "url": "/v1/org/{orgId}/guideline",
    "method": "createNewGuideline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "guideline",
    "typeScriptTag": "guideline",
    "description": "Create a new guideline",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGID"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Merit Guideline"
      },
      {
        "name": "budgetPoolId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "participantsExpr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "is:person and tenure>=12"
      },
      {
        "name": "appliedField",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "'base' or 'grantShares'"
      },
      {
        "name": "sourceField",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "'base' or 'grantShares'"
      },
      {
        "name": "calculationType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET"
      },
      {
        "name": "flagMode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NONE"
      },
      {
        "name": "flagDeviationThreshold",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 0.75
      },
      {
        "name": "enablePopulateValue",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": false
      },
      {
        "name": "basisType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOM"
      },
      {
        "name": "basisExpr",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "tenure>12 ? (base * 0.04) : (base * 0.02)"
      },
      {
        "name": "basisFieldMatrix",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fixedAmountRange",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "fixedValueRange",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/guideline/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "guideline",
    "typeScriptTag": "guideline",
    "description": "Delete a guideline",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGID"
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
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/guideline/{id}",
    "method": "getSpecificGuideline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "guideline",
    "typeScriptTag": "guideline",
    "description": "Get a specific guideline",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired guideline",
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
    "url": "/v1/org/{orgId}/guideline/{id}",
    "method": "updateGuideline",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "guideline",
    "typeScriptTag": "guideline",
    "description": "Update a guideline",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Merit Guideline"
      },
      {
        "name": "budgetPoolId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "participantsExpr",
        "schema": "string",
        "description": "",
        "example": "is:person and tenure>=12"
      },
      {
        "name": "appliedField",
        "schema": "string",
        "description": "",
        "example": "'base' or 'grantShares'"
      },
      {
        "name": "sourceField",
        "schema": "string",
        "description": "",
        "example": "'base' or 'grantShares'"
      },
      {
        "name": "calculationType",
        "schema": "string",
        "description": "",
        "example": "TARGET"
      },
      {
        "name": "flagMode",
        "schema": "string",
        "description": "",
        "example": "NONE"
      },
      {
        "name": "flagDeviationThreshold",
        "schema": "number",
        "description": "",
        "example": 0.75
      },
      {
        "name": "enablePopulateValue",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "basisType",
        "schema": "string",
        "description": "",
        "example": "CUSTOM"
      },
      {
        "name": "basisExpr",
        "schema": "string",
        "description": "",
        "example": "tenure>12 ? (base * 0.04) : (base * 0.02)"
      },
      {
        "name": "basisFieldMatrix",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fixedAmountRange",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fixedValueRange",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/guideline/{id}/calculate",
    "method": "calculateMatrixValuesForSpecificGuideline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "guideline",
    "typeScriptTag": "guideline",
    "description": "Calculate the matrix values for a specific guideline (which may apply to multiple scenarios in the comp review)",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired guideline",
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
    "url": "/v1/org/{orgId}/import/csv/data",
    "method": "csvData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "import",
    "typeScriptTag": "import",
    "description": "Import data from CSV file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "scenario id to import into"
      },
      {
        "name": "skipErrors",
        "schema": "boolean",
        "required": false,
        "description": "whether to skip erroneous rows, or reject the entire upload if any are invalid (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "upsert",
        "schema": "boolean",
        "required": false,
        "description": "whether to create persons/jobs that are not matched"
      },
      {
        "name": "createGroups",
        "schema": "boolean",
        "required": false,
        "description": "whether to create groups that are not matched"
      },
      {
        "name": "disableSyncHireDate",
        "schema": "boolean",
        "required": false,
        "description": "whether to disable adjusting dates of hires in cases where the start dates differ"
      },
      {
        "name": "updateTypes",
        "schema": "string",
        "required": false,
        "description": "types of updates to apply (default all: title,comp,group,relationship,data,other)"
      },
      {
        "name": "notifyUserIds",
        "schema": "string",
        "required": false,
        "description": "comma-separated list of user ids who should be notified when the import is complete"
      },
      {
        "name": "notifyAppName",
        "schema": "string",
        "required": false,
        "description": "name of the app that should be listed in the notify"
      },
      {
        "name": "defaultChangeDate",
        "schema": "string",
        "required": false,
        "description": "date of the changes - if not presented on the csv file"
      },
      {
        "name": "disableOverwritePerson",
        "schema": "boolean",
        "required": false,
        "description": "disable overwriting changes to persons' data -- only update data if the person field is null"
      },
      {
        "name": "importDryRun",
        "schema": "boolean",
        "required": false,
        "description": "import dry run"
      },
      {
        "name": "importAfterDryRun",
        "schema": "boolean",
        "required": false,
        "description": "whether to automatically import if dry run succeeds"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "process id of parent process"
      },
      {
        "name": "importSource",
        "schema": "string",
        "required": false,
        "description": "self identified source caller into this method"
      },
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
        "statusCode": "400",
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/import/csv/columnMatch",
    "method": "csvDataWithColumnMatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "import",
    "typeScriptTag": "import",
    "description": "Import data from CSV file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "scenario id to import into"
      },
      {
        "name": "skipErrors",
        "schema": "boolean",
        "required": false,
        "description": "whether to skip erroneous rows, or reject the entire upload if any are invalid (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "upsert",
        "schema": "boolean",
        "required": false,
        "description": "whether to create persons/jobs that are not matched"
      },
      {
        "name": "createGroups",
        "schema": "boolean",
        "required": false,
        "description": "whether to create groups that are not matched"
      },
      {
        "name": "disableSyncHireDate",
        "schema": "boolean",
        "required": false,
        "description": "whether to disable adjusting dates of hires in cases where the start dates differ"
      },
      {
        "name": "updateTypes",
        "schema": "string",
        "required": false,
        "description": "types of updates to apply (default all: title,comp,group,relationship,data,other)"
      },
      {
        "name": "notifyUserIds",
        "schema": "string",
        "required": false,
        "description": "comma-separated list of user ids who should be notified when the import is complete"
      },
      {
        "name": "notifyAppName",
        "schema": "string",
        "required": false,
        "description": "name of the app that should be listed in the notify"
      },
      {
        "name": "defaultChangeDate",
        "schema": "string",
        "required": false,
        "description": "date of the changes - if not presented on the csv file"
      },
      {
        "name": "disableOverwritePerson",
        "schema": "boolean",
        "required": false,
        "description": "disable overwriting changes to persons' data -- only update data if the person field is null"
      },
      {
        "name": "importDryRun",
        "schema": "boolean",
        "required": false,
        "description": "import dry run"
      },
      {
        "name": "importAfterDryRun",
        "schema": "boolean",
        "required": false,
        "description": "whether to automatically import if dry run succeeds"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "process id of parent process"
      },
      {
        "name": "importSource",
        "schema": "string",
        "required": false,
        "description": "self identified source caller into this method"
      },
      {
        "name": "syncImages",
        "schema": "boolean",
        "required": false,
        "description": "import images from csv"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userDefinedFieldAliases",
        "schema": "object",
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
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/import/csv/filepath",
    "method": "csvDataWithFilePath",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "import",
    "typeScriptTag": "import",
    "description": "Import data from CSV file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "filePath",
        "schema": "string",
        "required": false,
        "description": "filePath"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "scenario id to import into"
      },
      {
        "name": "skipErrors",
        "schema": "boolean",
        "required": false,
        "description": "whether to skip erroneous rows, or reject the entire upload if any are invalid (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "upsert",
        "schema": "boolean",
        "required": false,
        "description": "whether to create persons/jobs that are not matched"
      },
      {
        "name": "createGroups",
        "schema": "boolean",
        "required": false,
        "description": "whether to create groups that are not matched"
      },
      {
        "name": "disableSyncHireDate",
        "schema": "boolean",
        "required": false,
        "description": "whether to disable adjusting dates of hires in cases where the start dates differ"
      },
      {
        "name": "updateTypes",
        "schema": "string",
        "required": false,
        "description": "types of updates to apply (default all: title,comp,group,relationship,data,other)"
      },
      {
        "name": "notifyUserIds",
        "schema": "string",
        "required": false,
        "description": "comma-separated list of user ids who should be notified when the import is complete"
      },
      {
        "name": "notifyAppName",
        "schema": "string",
        "required": false,
        "description": "name of the app that should be listed in the notify"
      },
      {
        "name": "defaultChangeDate",
        "schema": "string",
        "required": false,
        "description": "date of the changes - if not presented on the csv file"
      },
      {
        "name": "disableOverwritePerson",
        "schema": "boolean",
        "required": false,
        "description": "disable overwriting changes to persons' data -- only update data if the person field is null"
      },
      {
        "name": "importDryRun",
        "schema": "boolean",
        "required": false,
        "description": "import dry run"
      },
      {
        "name": "importAfterDryRun",
        "schema": "boolean",
        "required": false,
        "description": "whether to automatically import if dry run succeeds"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "process id of parent process"
      },
      {
        "name": "importSource",
        "schema": "string",
        "required": false,
        "description": "self identified source caller into this method"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/import/spreadsheet/validateFormat",
    "method": "spreadsheetValidation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "import",
    "typeScriptTag": "import",
    "description": "Check if a spreadsheet file is valid to be imported",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "maxRows",
        "schema": "integer",
        "required": false,
        "description": "Max rows allowed in an imported spreadsheet file"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/import/csv/initialColumnMatch",
    "method": "csvDataColumnMatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "import",
    "typeScriptTag": "import",
    "description": "Parse a CSV file in preparation for column matching as part of spreadsheet import process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/job-level",
    "method": "findInOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job-level",
    "typeScriptTag": "jobLevel",
    "description": "Find job levels in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Job level id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted job levels"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/job-level",
    "method": "createNewJobLevel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "job-level",
    "typeScriptTag": "jobLevel",
    "description": "Create a job level",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of job level creation"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Associate"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "BF01"
      },
      {
        "name": "benchmarkType",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "benchmarkLevel",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/job-level/{jobLevelId}",
    "method": "deleteJobLevel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "job-level",
    "typeScriptTag": "jobLevel",
    "description": "Delete a job level",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobLevelId",
        "schema": "string",
        "required": true,
        "description": "Job level id",
        "example": "JOBLEVELID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/job-level/{jobLevelId}",
    "method": "getByEffectiveDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job-level",
    "typeScriptTag": "jobLevel",
    "description": "Return a particular job level by id on an effective date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobLevelId",
        "schema": "string",
        "required": true,
        "description": "Job level id",
        "example": "JOBLEVELID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/job-level/{jobLevelId}",
    "method": "updateJobLevel",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "job-level",
    "typeScriptTag": "jobLevel",
    "description": "Update a job level",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobLevelId",
        "schema": "string",
        "required": true,
        "description": "Job level id",
        "example": "JOBLEVELID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of jobLevel update"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Associate"
      },
      {
        "name": "code",
        "schema": "string",
        "description": "",
        "example": "BF01"
      },
      {
        "name": "benchmarkType",
        "schema": "object",
        "description": ""
      },
      {
        "name": "benchmarkLevel",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/legaldoc/{name}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "legalDoc",
    "typeScriptTag": "legalDoc",
    "description": "Retrieve the legal doc by name",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "name",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/legaldoc",
    "method": "createDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "legalDoc",
    "typeScriptTag": "legalDoc",
    "description": "Create a legal doc",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ChartHop Service Agreement"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/media",
    "method": "uploadNewPiece",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "media",
    "typeScriptTag": "media",
    "description": "Upload a new piece of media",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "file",
        "schema": "string",
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
        "description": "Invalid type or bad request"
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/media/{mediaId}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "media",
    "typeScriptTag": "media",
    "description": "Returns metadata about a piece of media",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "mediaId",
        "schema": "string",
        "required": true,
        "description": "Media id",
        "example": "MEDIAID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Not authorized"
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      },
      {
        "statusCode": "404",
        "description": "Media not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message",
    "method": "createNewMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Create a new message",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "notificationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "messageUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "readAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      },
      {
        "name": "seenAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      },
      {
        "name": "createId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "createAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message/me/{messageKey}",
    "method": "getMessageByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Return a particular message by key",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "messageKey",
        "schema": "string",
        "required": true,
        "description": "Message key",
        "example": "MESSAGEKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message/{messageId}/read",
    "method": "setReadStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Sets the designated message's `readAt` property",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message id",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message/bulk/read",
    "method": "markMessagesAsRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Sets each of the designated message's `readAt` property",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message/bulk/seen",
    "method": "markBulkAsSeen",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Marks each message as `seen`",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message/{messageId}",
    "method": "getMessageById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Return a particular message by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message id",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/message/me",
    "method": "getAllForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "message",
    "typeScriptTag": "message",
    "description": "Return all messages for a particular user",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Message \"type\" (WEB, CHAT, or EMAIL)"
      },
      {
        "name": "unreadOnly",
        "schema": "boolean",
        "required": false,
        "description": "Message \"status\" (read or unread)"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "MessageId to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/metric",
    "method": "recordDailyMetric",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "metric",
    "typeScriptTag": "metric",
    "description": "Record a daily metric",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "metric",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METRIC"
      },
      {
        "name": "value",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/multiplier",
    "method": "findCompBandMultipliersInOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "multiplier",
    "typeScriptTag": "multiplier",
    "description": "Find comp band multipliers in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Multiplier id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted multipliers"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/multiplier",
    "method": "createNewMultiplier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "multiplier",
    "typeScriptTag": "multiplier",
    "description": "Create a multiplier",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of multiplier creation"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Non-technical"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0.75
      },
      {
        "name": "expr",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "department!=\"Engineering\""
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Location"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/multiplier/{multiplierId}",
    "method": "deleteMultiplierById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "multiplier",
    "typeScriptTag": "multiplier",
    "description": "Delete a multiplier",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "multiplierId",
        "schema": "string",
        "required": true,
        "description": "Multiplier id",
        "example": "MULTIPLIERID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/multiplier/{multiplierId}",
    "method": "findCompBandMultipliersInOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "multiplier",
    "typeScriptTag": "multiplier",
    "description": "Return a particular comp band multiplier by id on an effective date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "multiplierId",
        "schema": "string",
        "required": true,
        "description": "Comp band multiplier id",
        "example": "MULTIPLIERID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/multiplier/{multiplierId}",
    "method": "updateMultiplerById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "multiplier",
    "typeScriptTag": "multiplier",
    "description": "Update a multiplier",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "multiplierId",
        "schema": "string",
        "required": true,
        "description": "Multiplier id",
        "example": "MULTIPLIERID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of multiplier update"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Non-technical"
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 0.75
      },
      {
        "name": "expr",
        "schema": "string",
        "description": "",
        "example": "department!=\"Engineering\""
      },
      {
        "name": "category",
        "schema": "string",
        "description": "",
        "example": "Location"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/notification",
    "method": "sendEmailOrInAppNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "Send a email or in-app notification",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATENAME"
      },
      {
        "name": "toUserIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "jobData",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "atsName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "orgName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "syncSummary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "processId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/oauth/token",
    "method": "revokeBearerToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Delete the current Oauth2 bearer token (for signout)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "not authorized"
      }
    ]
  },
  {
    "url": "/oauth/token",
    "method": "authorizeUserToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Return an Oauth2 Authorization bearer token, given a username and password",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "refresh_token",
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
        "description": "invalid credentials"
      }
    ]
  },
  {
    "url": "/oauth/token/view",
    "method": "returnViewToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Return a view-as token",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid credentials"
      }
    ]
  },
  {
    "url": "/oauth/app/{appName}",
    "method": "processOauthRedirectRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Process an Oauth2 redirect request from an access request for an app installation, storing the accessToken and refreshToken as secrets for the app",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "appName",
        "schema": "string",
        "required": true,
        "description": "App name",
        "example": "APPNAME"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "State, containing orgId and appUserId"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "Temporary authorization code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/oauth/sso/{idp}/login",
    "method": "loginViaIdp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Login via the auth endpoint",
    "parameters": [
      {
        "name": "idp",
        "schema": "string",
        "required": true,
        "description": "Identity provider of SSO login (e.g. adp)",
        "example": "IDP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/oauth/sso/{idp}/access-token",
    "method": "exchangeIdpAccessTokenResponse",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Exchange a one-time use Auth Code for the IDP access token response",
    "parameters": [
      {
        "name": "idp",
        "schema": "string",
        "required": true,
        "description": "Identity provider of SSO login (e.g. adp)",
        "example": "IDP"
      },
      {
        "name": "authCode",
        "schema": "string",
        "required": false,
        "description": "A one-time use Auth Code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/oauth/token/sso/{type}",
    "method": "generateBearerTokenFromSso",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Return an Oauth2 Authorization bearer token, given a SSO id token",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "type of SSO request (google or microsoft)",
        "example": "TYPE"
      },
      {
        "name": "createOrg",
        "schema": "boolean",
        "required": false,
        "description": "automatically create org if possible to do so"
      },
      {
        "name": "signupSource",
        "schema": "string",
        "required": false,
        "description": "sign up source (self-serve, connect, or sequoia)"
      },
      {
        "name": "utmParams",
        "schema": "string",
        "required": false,
        "description": "utm params (used in salesforce for lead tracking)"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "sign up email address"
      },
      {
        "name": "idToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDTOKEN"
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE"
      },
      {
        "name": "fromToken",
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
        "description": "invalid credentials"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/onboard",
    "method": "incompleteSteps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "onboard",
    "typeScriptTag": "onboard",
    "description": "Returns all the onboarding steps the organization has not completed",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "getUncomplete",
        "schema": "boolean",
        "required": false,
        "description": "Return only uncompleted steps, or all steps?"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/onboard/{stepName}/skip",
    "method": "markStepSkipped",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "onboard",
    "typeScriptTag": "onboard",
    "description": "Marks the given onboard step as 'skipped' for the given customer",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "stepName",
        "schema": "string",
        "required": true,
        "description": "Step name",
        "example": "STEPNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/config",
    "method": "getByOrgId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org-config",
    "typeScriptTag": "orgConfig",
    "description": "Return config for a given org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "internal server error"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/config",
    "method": "patchExistingConfig",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "org-config",
    "typeScriptTag": "orgConfig",
    "description": "Update an existing org config",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "hiddenFieldIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "builtinCategoryMap",
        "schema": "array",
        "description": ""
      },
      {
        "name": "builtinFieldConfig",
        "schema": "array",
        "description": ""
      },
      {
        "name": "compensationBandsConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "smartCurrencyOptions",
        "schema": "array",
        "description": "",
        "example": "PERSON_HOME_ADDRESS_COUNTRY"
      },
      {
        "name": "smartCurrencyDefault",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "requiredJobFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "scenarioApprovalChains",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isOpenJobRoleApprovalEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "grantConfiguration",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "internal server error"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/config",
    "method": "createIfNotExists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org-config",
    "typeScriptTag": "orgConfig",
    "description": "Create an org config if it doesn't exist",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "hiddenFieldIds",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "builtinCategoryMap",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "builtinFieldConfig",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "compensationBandsConfig",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "smartCurrencyOptions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "PERSON_HOME_ADDRESS_COUNTRY"
      },
      {
        "name": "smartCurrencyDefault",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "USD"
      },
      {
        "name": "requiredJobFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "scenarioApprovalChains",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "isOpenJobRoleApprovalEnabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "grantConfiguration",
        "schema": "array",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "internal server error"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Return a particular org by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}",
    "method": "updateExistingOrg",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Update an existing org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Acme Corp"
      },
      {
        "name": "slug",
        "schema": "string",
        "description": "",
        "example": "acme-corp"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "PRIVATE"
      },
      {
        "name": "industry",
        "schema": "string",
        "description": "",
        "example": "Software and Internet"
      },
      {
        "name": "estEmployees",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "estRevenue",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "foundedYear",
        "schema": "integer",
        "description": "",
        "example": 1998
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currencies",
        "schema": "array",
        "description": ""
      },
      {
        "name": "stock",
        "schema": "string",
        "description": "",
        "example": "GOOG"
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "",
        "example": "America/New_York"
      },
      {
        "name": "appTime",
        "schema": "string",
        "description": "",
        "example": "09:00"
      },
      {
        "name": "zone",
        "schema": "integer",
        "description": "",
        "example": 2
      },
      {
        "name": "fiscalStart",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sensitiveFields",
        "schema": "object",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "onboardSteps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "onboarding",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "selfServeImporting",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "headCount",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/access",
    "method": "getUserAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Return information on current user's access",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "successful operation"
      }
    ]
  },
  {
    "url": "/v1/org/slug/{slug}",
    "method": "getBySlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Return a particular org by slug",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Org slug",
        "example": "SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org",
    "method": "listVisibleOrgs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Return all visible orgs, paginated by name",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Org id to start from"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": "Find orgs belonging to a particular customer id"
      },
      {
        "name": "realOnly",
        "schema": "boolean",
        "required": false,
        "description": "Include only orgs where type is REAL?"
      },
      {
        "name": "lastCreateAt",
        "schema": "integer",
        "required": false,
        "description": "Only include orgs whose last createAt occurred after the date"
      },
      {
        "name": "lastActiveAt",
        "schema": "integer",
        "required": false,
        "description": "Only include orgs whose last activeAt occurred after the date"
      },
      {
        "name": "internalOptions",
        "schema": "string",
        "required": false,
        "description": "Filter orgs by internal option key-value pair"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org",
    "method": "createNewOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Create a new org",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Acme Corp"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "acme-corp"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIVATE"
      },
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software and Internet"
      },
      {
        "name": "estEmployees",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "estRevenue",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "foundedYear",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1998
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "imagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currencies",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "stock",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "GOOG"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "America/New_York"
      },
      {
        "name": "appTime",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "09:00"
      },
      {
        "name": "zone",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 2
      },
      {
        "name": "fiscalStart",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sensitiveFields",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "onboardSteps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "onboarding",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "selfServeImporting",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "headCount",
        "schema": "integer",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{org}/app-install-code",
    "method": "getOauth2AuthorizationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Retrieve an Oauth2 authorization code to install an app at this org",
    "parameters": [
      {
        "name": "org",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORG"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/app-install-code/validate",
    "method": "validateAppInstallAuthorizationCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Validate authorization code",
    "parameters": [
      {
        "name": "authorizationCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHORIZATIONCODE"
      },
      {
        "name": "issueAccessToken",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-user-person-count",
    "method": "getDataUserPersonCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Gets the count of joined users, invited users, and org members who are not yet invited",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-user-person",
    "method": "getDataUserPersonById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Gets a user or person by id. If both are provided, userId takes precedence",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "userId"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": "personId"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/data-users-persons",
    "method": "getDataUsersPersons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Gets a list of org users (joined or invited) and org members (not yet invited)",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "limit"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "offset"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort by",
        "example": "name, email, role, expr, invite, active"
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": "Filter by user role label",
        "example": "Owner, Technical Owner, Employee, etc..."
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Filter by status",
        "example": "joined, invited, not-invited"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/change-head",
    "method": "createNewJobPlaceholder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Create a new org head in the history, by creating an empty job placeholder above the current head",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/welcome-email",
    "method": "getWelcomeEmailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Gets the custom setting or default for the welcome email's subject, body, cta button label",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Permission denied"
      },
      {
        "statusCode": "500",
        "description": "Service error"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/test-email",
    "method": "sendTestEmailToOneself",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Send a test welcome email to oneself",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "welcomeEmailSubject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "welcomeEmailButtonLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "welcomeEmailBody",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/agreement",
    "method": "consentTermsOfService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Consent on Terms of Service agreement",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "legalDocId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEGALDOCID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/org/{slug}",
    "method": "getValidationBySlug",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "org",
    "typeScriptTag": "org",
    "description": "Return validation for a org by slug",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "Org slug",
        "example": "SLUG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy/{policyId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Delete a policy",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "Policy id",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy/{policyId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Return a particular policy by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "Policy id",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy/{policyId}",
    "method": "updateExistingPolicy",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Update an existing policy",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "Policy id",
        "example": "POLICYID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This policy allows compensation to be viewed."
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "View Compensation"
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy",
    "method": "getAllPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Return all or a set of policies in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "(https://docs.charthop.com/developer-basics Comma separated Policy Ids to find"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "(https://docs.charthop.com/developer-basics Return only default or custom policies"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy",
    "method": "createNewPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Create a policy",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This policy allows compensation to be viewed."
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "View Compensation"
      },
      {
        "name": "rules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "copiedFromId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy/{policyId}/copy",
    "method": "copyExistingPolicy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Copy an existing policy",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "policyId",
        "schema": "string",
        "required": true,
        "description": "Policy id",
        "example": "POLICYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy/validate",
    "method": "checkValidityOf",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Return if a policy is valid",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This policy allows compensation to be viewed."
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "View Compensation"
      },
      {
        "name": "rules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "copiedFromId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "createId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "createAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      },
      {
        "name": "updateId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "updateAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      },
      {
        "name": "deleteId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "deleteAt",
        "schema": "string",
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/policy/action",
    "method": "getAllEntityActionMaps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "policy",
    "typeScriptTag": "policy",
    "description": "Return all entity:action maps allowed on a policy rule",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/preload",
    "method": "preloadedDataRetrieval",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "preload",
    "typeScriptTag": "preload",
    "description": "Return a set of pre-loaded data required by the web app",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/decrement",
    "method": "decrementStep",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Decrement the step of an asynchronous process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process",
    "method": "getPreviouslyRunProcesses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Retrieve a number of previously run processes",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "isAppProcess",
        "schema": "boolean",
        "required": false,
        "description": "Boolean if an app process"
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": "App ID to filter by"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "Parent process ID to search for children"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type to filter by. Accepted values: ['auto', 'manual']"
      },
      {
        "name": "completedAtStart",
        "schema": "integer",
        "required": false,
        "description": "completed at start"
      },
      {
        "name": "completedAtEnd",
        "schema": "integer",
        "required": false,
        "description": "completed at end"
      },
      {
        "name": "statuses",
        "schema": "string",
        "required": false,
        "description": "Statuses to filter by, comma-separated. Accepted values: ['DONE', 'ERROR', 'PENDING', 'RUNNING', 'DONE_WITH_ERRORS']"
      },
      {
        "name": "isParentProcess",
        "schema": "boolean",
        "required": false,
        "description": "Boolean if a parent process"
      },
      {
        "name": "processTypes",
        "schema": "string",
        "required": false,
        "description": "Process types to filter by, comma-separated."
      },
      {
        "name": "searchValue",
        "schema": "string",
        "required": false,
        "description": "Search term for general filtering"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "from id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "limit"
      },
      {
        "name": "syncDirections",
        "schema": "string",
        "required": false,
        "description": "direction"
      },
      {
        "name": "syncCauses",
        "schema": "string",
        "required": false,
        "description": "V2 Causes to filter by, comma-separated. Accepted values: ['MANUAL', 'AUTO', 'EVENT_BASED]"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process",
    "method": "createNewPendingProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Creates a new process in the pending state",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "filePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "runUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "progress",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "internalError",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "results",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "logDataList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "84db3c6e-0877-4436-8af1-768c06b29586"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}",
    "method": "checkProcessStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Check the status of a particular process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      },
      {
        "name": "showState",
        "schema": "boolean",
        "required": false,
        "description": "showState"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}",
    "method": "updateStatusOfProcess",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Update the status of a process, marking its progress or setting status to DONE or ERROR",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "progress",
        "schema": "number",
        "description": ""
      },
      {
        "name": "internalError",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "results",
        "schema": "object",
        "description": ""
      },
      {
        "name": "logDataList",
        "schema": "array",
        "description": ""
      },
      {
        "name": "state",
        "schema": "object",
        "description": ""
      },
      {
        "name": "appId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/file",
    "method": "downloadFileById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Download the file associated with a particular process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/file",
    "method": "uploadFileAndMarkComplete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Upload a file to be attached to a process, and mark the process as complete",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/log",
    "method": "downloadLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Download the newline-delimited JSON log associated with a particular process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/last-sync/{appUserId}",
    "method": "getLastSyncForAppUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Get last success sync and last sync for given appUserId",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "appUserId",
        "schema": "string",
        "required": true,
        "description": "app user id",
        "example": "APPUSERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{createIdOverride}",
    "method": "createPendingProcessWithUserId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Creates a new process with a specified createId in the pending state",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "createIdOverride",
        "schema": "string",
        "required": true,
        "description": "created user id override",
        "example": "CREATEIDOVERRIDE"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "filePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "runUserId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "progress",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "internalError",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "results",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "logDataList",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "84db3c6e-0877-4436-8af1-768c06b29586"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/self-serve",
    "method": "createPendingProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Creates a new process in the pending state",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Process type"
      },
      {
        "name": "maxRows",
        "schema": "integer",
        "required": false,
        "description": "Max rows allowed in an imported spreadsheet file"
      },
      {
        "name": "minColumns",
        "schema": "integer",
        "required": false,
        "description": "Min columns required in an imported spreadsheet file"
      },
      {
        "name": "isSync",
        "schema": "boolean",
        "required": false,
        "description": "Whether the created process is sync flow or manual flow"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/state",
    "method": "updateProcessState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Update process state",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/resumeWithFile",
    "method": "resumeWithFile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Resume an asynchronous process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/events",
    "method": "getEventsByProcessId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Get events associated to a particular process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/increment",
    "method": "incrementProcessStep",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Increment the step of an asynchronous process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/process/{processId}/resume",
    "method": "resumeProcessWithUserId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "process",
    "typeScriptTag": "process",
    "description": "Resume an asynchronous process",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "processId",
        "schema": "string",
        "required": true,
        "description": "process id",
        "example": "PROCESSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/product/{productId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product",
    "typeScriptTag": "product",
    "description": "Return a particular product by id",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product id",
        "example": "PRODUCTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/product/{productId}",
    "method": "updateExistingProduct",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "product",
    "typeScriptTag": "product",
    "description": "Update an existing product",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "Product id",
        "example": "PRODUCTID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Compensation Reviews"
      },
      {
        "name": "sku",
        "schema": "string",
        "description": "",
        "example": "compensation-reviews"
      },
      {
        "name": "salesforceProductId",
        "schema": "string",
        "description": "",
        "example": "01t4T000000RpgKQAS"
      },
      {
        "name": "stripeProductId",
        "schema": "string",
        "description": "",
        "example": "prod_12345ABC"
      },
      {
        "name": "features",
        "schema": "array",
        "description": ""
      },
      {
        "name": "featureOptions",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/product",
    "method": "listAllProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "product",
    "typeScriptTag": "product",
    "description": "Return all products",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/product",
    "method": "createNewProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "product",
    "typeScriptTag": "product",
    "description": "Create a new product",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Compensation Reviews"
      },
      {
        "name": "sku",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "compensation-reviews"
      },
      {
        "name": "salesforceProductId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "01t4T000000RpgKQAS"
      },
      {
        "name": "stripeProductId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "prod_12345ABC"
      },
      {
        "name": "features",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "featureOptions",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab/job/{jobId}/profile-tab/{tabId}",
    "method": "getEvaluateProfileTabContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Fetch and evaluate the content of a particular profile tab id, relative to a particular job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "tabId",
        "schema": "string",
        "required": true,
        "description": "Profile tab id",
        "example": "TABID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab/{profileTabId}",
    "method": "deleteProfileTab",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Delete a profile tab",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "profileTabId",
        "schema": "string",
        "required": true,
        "description": "Profile tab id",
        "example": "PROFILETABID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab/{profileTabId}",
    "method": "getByOrgIdAndTabId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Return a particular profile tab by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "profileTabId",
        "schema": "string",
        "required": true,
        "description": "Content id",
        "example": "PROFILETABID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab/{profileTabId}",
    "method": "updateExistingTab",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Update an existing profile tab",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "profileTabId",
        "schema": "string",
        "required": true,
        "description": "Profile tab id",
        "example": "PROFILETABID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Performance"
      },
      {
        "name": "blocks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "readFilter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab",
    "method": "listProfileTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Return all profile tabs in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status to filter by"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Content id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab",
    "method": "createNewTab",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Create a profile tab",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Performance"
      },
      {
        "name": "blocks",
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
      },
      {
        "name": "targetFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "readFilter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab/person/{personId}",
    "method": "getProfileTabs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Return all profile tabs applicable to a particular person",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Person id",
        "example": "PERSONID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Return profile tabs that contain particular fields (https://docs.charthop.com/developer-basics"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/profile-tab/job/{jobId}",
    "method": "findTabsForJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "profile-tab",
    "typeScriptTag": "profileTab",
    "description": "Return all profile tabs applicable to a particular job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Return profile tabs that contain particular fields (https://docs.charthop.com/developer-basics"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/query",
    "method": "queryTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "Get a list of query tokens",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/query",
    "method": "liveQueryToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "Create a live query token",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "params",
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
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/query/{queryToken}",
    "method": "expireLiveQuery",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "Expire a previously created live query immediately",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "queryToken",
        "schema": "string",
        "required": true,
        "description": "Query token (either id or token string)",
        "example": "QUERYTOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/query/{queryToken}",
    "method": "liveQueryResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "Return the results of a previously created live query",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "queryToken",
        "schema": "string",
        "required": true,
        "description": "Query token",
        "example": "QUERYTOKEN"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "mapper",
        "schema": "string",
        "required": false,
        "description": "Deprecated parameter for backwards-compatibility"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/question/{questionId}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "question",
    "typeScriptTag": "question",
    "description": "Delete a question",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "Question id",
        "example": "QUESTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/question/{questionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "question",
    "typeScriptTag": "question",
    "description": "Return a particular question by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "Question id",
        "example": "QUESTIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/question/{questionId}",
    "method": "updateByOrgAndId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "question",
    "typeScriptTag": "question",
    "description": "Update an existing question",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "questionId",
        "schema": "string",
        "required": true,
        "description": "Question id",
        "example": "QUESTIONID"
      },
      {
        "name": "question",
        "schema": "string",
        "description": "",
        "example": "What is your favorite color?"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plural",
        "schema": "string",
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/question",
    "method": "getAllInOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "question",
    "typeScriptTag": "question",
    "description": "Return all questions in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Question id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "Comma separated Question Ids to find"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/question",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "question",
    "typeScriptTag": "question",
    "description": "Create a question",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "question",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "What is your favorite color?"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "plural",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/chart",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Return all of the charts for a particular report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/chart",
    "method": "createNewChart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Create a new chart in a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Headcount Report"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "department='Engineering'"
      },
      {
        "name": "filterOverride",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "isAdvancedQueryMode",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/chart/{chartId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Delete a chart from a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/chart/{chartId}",
    "method": "getByChartId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Return a particular report chart by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/chart/{chartId}",
    "method": "updateExistingChartData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Update an existing report chart",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Headcount Report"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "",
        "example": "department='Engineering'"
      },
      {
        "name": "filterOverride",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "isAdvancedQueryMode",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/chart/{chartId}/clone",
    "method": "cloneChart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Clone a chart in a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      },
      {
        "name": "chartLabel",
        "schema": "string",
        "required": false,
        "description": "New label"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/chart/{chartId}/data",
    "method": "exportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Export a particular chart's data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date, inclusive"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date, exclusive"
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "Interval"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "projectHires",
        "schema": "boolean",
        "required": false,
        "description": "Project future hires"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use html"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/chart/{chartId}/query",
    "method": "queryUnderlyingDataInChart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reportChart",
    "typeScriptTag": "reportChart",
    "description": "Query for the underlying data in a chart",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      },
      {
        "name": "providedQuery",
        "schema": "string",
        "required": false,
        "description": "Query to run"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date, inclusive"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date, exclusive"
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "Interval"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "projectHires",
        "schema": "boolean",
        "required": false,
        "description": "Project future hires"
      },
      {
        "name": "changeGroupingType",
        "schema": "string",
        "required": false,
        "description": "Type of change grouping"
      },
      {
        "name": "changeGroupingId",
        "schema": "string",
        "required": false,
        "description": "Change grouping id to query (null for primary)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report",
    "method": "getAllPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Return all reports in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fromId",
        "schema": "string",
        "required": false,
        "description": "Offset"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report",
    "method": "createNewReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Create a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a report on headcount etd"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Headcount Report"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "department:engineering"
      },
      {
        "name": "share",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "chartIds",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Delete a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}",
    "method": "findReportById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Return a particular report by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}",
    "method": "updateExistingReport",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Update an existing report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "referencedReportUrl",
        "schema": "string",
        "required": false,
        "description": "Displayed report url"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is a report on headcount etd"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Headcount Report"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "",
        "example": "department:engineering"
      },
      {
        "name": "share",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "chartIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/query",
    "method": "timeseriesDataArbitraryQueries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Return timeseries data from arbitrary queries",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "series",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
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
        "name": "intervalDates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/count",
    "method": "getCountOfReportsInOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Return count of reports in an organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/query",
    "method": "getAllReportCharts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Query all the charts in a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date, inclusive"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date, exclusive"
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "Interval"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "projectHires",
        "schema": "boolean",
        "required": false,
        "description": "Project future hires"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Filter to apply to all results"
      },
      {
        "name": "changeGroupingType",
        "schema": "string",
        "required": false,
        "description": "Type of change grouping"
      },
      {
        "name": "changeGroupingId",
        "schema": "string",
        "required": false,
        "description": "Change grouping id to query (null for primary)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/chart/{chartId}/export/csv",
    "method": "exportChartCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Export a particular chart in a report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      },
      {
        "name": "chartId",
        "schema": "string",
        "required": true,
        "description": "Chart id",
        "example": "CHARTID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date, inclusive"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date, exclusive"
      },
      {
        "name": "interval",
        "schema": "string",
        "required": false,
        "description": "Interval"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "projectHires",
        "schema": "boolean",
        "required": false,
        "description": "Project future hires"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Additional filter to apply"
      },
      {
        "name": "changeGroupingType",
        "schema": "string",
        "required": false,
        "description": "Type of change grouping"
      },
      {
        "name": "changeGroupingId",
        "schema": "string",
        "required": false,
        "description": "Change grouping id to query (null for primary)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/{reportId}/clone",
    "method": "createExactCopy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Create an exact copy of an existing report",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report id",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/bulk-delete",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Delete a set of reports",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/report/bulk-duplicate",
    "method": "duplicateReports",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "report",
    "typeScriptTag": "report",
    "description": "Duplicate a set of reports",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/role",
    "method": "getAllInOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "role",
    "typeScriptTag": "role",
    "description": "Return all or a set of roles in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "(https://docs.charthop.com/developer-basics Comma separated Role Ids to find"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "(https://docs.charthop.com/developer-basics Return only default or custom roles"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/role",
    "method": "createNewRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "role",
    "typeScriptTag": "role",
    "description": "Create a role",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This role is able to create and update new job data for the engineering department."
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering People Manager"
      },
      {
        "name": "policyIds",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/role/{roleId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "role",
    "typeScriptTag": "role",
    "description": "Delete a role",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "Role id",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/role/{roleId}",
    "method": "getRoleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "role",
    "typeScriptTag": "role",
    "description": "Return a particular role by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "Role id",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/role/{roleId}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "role",
    "typeScriptTag": "role",
    "description": "Update an existing role",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "Role id",
        "example": "ROLEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This role is able to create and update new job data for the engineering department."
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Engineering People Manager"
      },
      {
        "name": "policyIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/role/{roleId}/copy",
    "method": "copyExistingRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "role",
    "typeScriptTag": "role",
    "description": "Copy an existing role",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "Role id",
        "example": "ROLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/saml/{org}/login",
    "method": "performSsoAssertion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "saml",
    "typeScriptTag": "saml",
    "description": "Return an redirect to the designated Idp, given an identity provider",
    "parameters": [
      {
        "name": "org",
        "schema": "string",
        "required": true,
        "description": "Org slug",
        "example": "ORG"
      },
      {
        "name": "idp",
        "schema": "string",
        "required": false,
        "description": "Identifier Provider"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "invalid data"
      }
    ]
  },
  {
    "url": "/saml/sso/{org}",
    "method": "performSsoAssertion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "saml",
    "typeScriptTag": "saml",
    "description": "Single sign on URL, where SAML assertion is perform",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "org",
        "schema": "string",
        "required": true,
        "description": "Org slug",
        "example": "ORG"
      },
      {
        "name": "SAMLResponse",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RelayState",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "invalid data"
      }
    ]
  },
  {
    "url": "/saml/org/{orgId}/xml-cert",
    "method": "savePerOrgXmlCertFromIdp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "saml",
    "typeScriptTag": "saml",
    "description": "Save per org Xml Cert from IDP",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "idp",
        "schema": "string",
        "required": false,
        "description": "Identifier Provider"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "invalid data"
      }
    ]
  },
  {
    "url": "/saml/org/{orgId}/xml-cert",
    "method": "savePerOrgXmlCertFromIdp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "saml",
    "typeScriptTag": "saml",
    "description": "Save per org Xml Cert from IDP",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "idp",
        "schema": "string",
        "required": false,
        "description": "Identifier Provider"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "invalid data"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/bulk/archive",
    "method": "bulkArchiveScenarios",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Archive a set of scenarios",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/bulk/delete",
    "method": "deleteBulkScenarios",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Delete a set of scenarios",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/bulk/unarchive",
    "method": "unarchiveSetOfScenarios",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Unarchive a set of scenarios",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario",
    "method": "listPaginatedScenarios",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Return all scenarios in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Scenario id to start paginating from"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Scenario status to filter by"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Create a scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "silent",
        "schema": "boolean",
        "required": false,
        "description": "Suppress notification emails"
      },
      {
        "name": "skipChangeCreation",
        "schema": "boolean",
        "required": false,
        "description": "Skip over change creation for PROMOTION scenarios"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Q4 Conservative Plan"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Q4 Conservative Plan"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-15"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDateFixed",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "validJobIdSet",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "entityType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sharedViewConfig",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "budget",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "costCalc",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Delete a scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Return a particular scenario by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}",
    "method": "updateScenarioChange",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Update an existing scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "silent",
        "schema": "boolean",
        "required": false,
        "description": "Suppress notification emails"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Q4 Conservative Plan"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Q4 Conservative Plan"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2017-01-15"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      },
      {
        "name": "startDateFixed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validJobIdSet",
        "schema": "array",
        "description": ""
      },
      {
        "name": "entityId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "entityType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sharedViewConfig",
        "schema": "array",
        "description": ""
      },
      {
        "name": "budget",
        "schema": "object",
        "description": ""
      },
      {
        "name": "costCalc",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/recalculate-metadata",
    "method": "manuallyRecalculateMetadata",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Manually recalculate a scenario's metadata",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/update-shared-view",
    "method": "updateSharedViewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Update a scenario view config",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "customColumnNames",
        "schema": "array",
        "description": ""
      },
      {
        "name": "columnWidths",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updateAt",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/dates",
    "method": "adjustDates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Adjust the dates of the changes in a scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id",
        "example": "SCENARIOID"
      },
      {
        "name": "date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "days",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/merge",
    "method": "mergeIntoPrimaryTimeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Merge a scenario into the primary timeline",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id to merge",
        "example": "SCENARIOID"
      },
      {
        "name": "skipErrors",
        "schema": "boolean",
        "required": false,
        "description": "If passed, will skip any changes that fail validation"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/scenario/{scenarioId}/combine",
    "method": "combineScenarios",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "scenario",
    "typeScriptTag": "scenario",
    "description": "Combine multiple scenarios into another scenario",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": true,
        "description": "Scenario id to combine the other scenarios into",
        "example": "SCENARIOID"
      },
      {
        "name": "scenarioIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "copyOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "useScenarioDateForChanges",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/search",
    "method": "orgDataByOrgIdAndSearchString",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Return people, job, group, and field data for a particular org that match a provided search string",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query search term"
      },
      {
        "name": "entityTypes",
        "schema": "string",
        "required": false,
        "description": "Entity types"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit"
      },
      {
        "name": "includeFormer",
        "schema": "boolean",
        "required": false,
        "description": "Include former users or persons"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario Id"
      },
      {
        "name": "canAccess",
        "schema": "string",
        "required": false,
        "description": "entity action pairs that can be accessed"
      },
      {
        "name": "includeExternalRecruiter",
        "schema": "boolean",
        "required": false,
        "description": "Include External Recruiter"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/status",
    "method": "apiIsUpAndAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "status",
    "typeScriptTag": "status",
    "description": "Returns true if the API is up and available",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/stock",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stock",
    "typeScriptTag": "stock",
    "description": "Return the history of stock prices",
    "parameters": [
      {
        "name": "symbol",
        "schema": "string",
        "required": false,
        "description": "Symbol to query"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Types of valuations to retrieve"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Date to start from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/stock/{id}",
    "method": "removePrice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "stock",
    "typeScriptTag": "stock",
    "description": "Delete a stock price",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Stock entry id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/stock/{symbol}/{date}/{type}",
    "method": "getPriceByDateType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stock",
    "typeScriptTag": "stock",
    "description": "Get a stock price as of a particular date",
    "parameters": [
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "Stock symbol",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to update information for",
        "example": "DATE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of stock price to retrieve (for example 'public')",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/stock/{symbol}/{date}/{type}",
    "method": "upsertPriceByDateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "stock",
    "typeScriptTag": "stock",
    "description": "Upsert a stock price",
    "parameters": [
      {
        "name": "symbol",
        "schema": "string",
        "required": true,
        "description": "Stock symbol",
        "example": "SYMBOL"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date to update information for",
        "example": "DATE"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of stock price to upsert",
        "example": "TYPE"
      },
      {
        "name": "orgId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "total",
        "schema": "integer",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/stripe/plan",
    "method": "getAllPlans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stripe",
    "typeScriptTag": "stripe",
    "description": "Return all billing plans directly from Stripe (staff only)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/stripe/webhook",
    "method": "processWebhookEvents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "stripe",
    "typeScriptTag": "stripe",
    "description": "Process webhook events from Stripe",
    "parameters": [
      {
        "name": "stripeSignature",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "bad request"
      }
    ]
  },
  {
    "url": "/v1/stripe/setup-intent",
    "method": "createSetupIntentSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "stripe",
    "typeScriptTag": "stripe",
    "description": "Creates a Stripe setupIntent object and returns the secret for that object",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/stripe/product/{productId}",
    "method": "getProductById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stripe",
    "typeScriptTag": "stripe",
    "description": "Return a particular product by its Stripe id",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": false,
        "description": "Stripe product id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/stripe/product",
    "method": "getAllProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stripe",
    "typeScriptTag": "stripe",
    "description": "Return all products directly from Stripe (staff only)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Delete a table",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or name",
        "example": "TABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}",
    "method": "getTableByIdOrName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Return a particular table by id or name",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or name",
        "example": "TABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}",
    "method": "updateExistingTable",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Update an existing table",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or name",
        "example": "TABLEID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "budget-data"
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "Budget Data"
      },
      {
        "name": "labelColumnId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectiveDated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sensitive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/import",
    "method": "importDataFromCsvFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Import data from CSV file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to update",
        "example": "TABLEID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to update as of"
      },
      {
        "name": "importFromProcessId",
        "schema": "string",
        "required": false,
        "description": "Import a file from another process, instead of directly uploading it"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "Parent process id to attach to"
      },
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
        "statusCode": "400",
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table",
    "method": "listInOrgPaginated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Return all tables in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Table id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "includeBuiltIns",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include built-in tables"
      },
      {
        "name": "names",
        "schema": "string",
        "required": false,
        "description": "Table names to filter to"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table",
    "method": "createNewTable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Create a table",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "budget-data"
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Budget Data"
      },
      {
        "name": "effectiveDated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "sensitive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shareAccess",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/data",
    "method": "getAllRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Retrieve all rows from the table",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to retrieve",
        "example": "TABLEID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to retrieve from"
      },
      {
        "name": "columns",
        "schema": "string",
        "required": false,
        "description": "Columns to retrieve, comma-separated (defaults to all columns)"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended, json-readable, or csv"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/data",
    "method": "upsertRowData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Upsert row data",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to update",
        "example": "TABLEID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to update as of"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/data/{keyColumn}/{keyValue}",
    "method": "deleteRow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Delete an existing row",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to update",
        "example": "TABLEID"
      },
      {
        "name": "keyColumn",
        "schema": "string",
        "required": true,
        "description": "Column name to look up the row by (for example: id)",
        "example": "KEYCOLUMN"
      },
      {
        "name": "keyValue",
        "schema": "string",
        "required": true,
        "description": "Value of the key column",
        "example": "KEYVALUE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to delete as of"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to delete from"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/data/{keyColumn}/{keyValue}",
    "method": "getRowByColumn",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Retrieve a particular row",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to retrieve",
        "example": "TABLEID"
      },
      {
        "name": "keyColumn",
        "schema": "string",
        "required": true,
        "description": "Column name to look up the row by (for example: id)",
        "example": "KEYCOLUMN"
      },
      {
        "name": "keyValue",
        "schema": "string",
        "required": true,
        "description": "Value of the column",
        "example": "KEYVALUE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to retrieve from"
      },
      {
        "name": "columns",
        "schema": "string",
        "required": false,
        "description": "Columns to retrieve, comma-separated (defaults to all columns)"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended, json-readable, or csv"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/data/{keyColumn}/{keyValue}",
    "method": "updateExistingRowData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Update an existing row",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to update",
        "example": "TABLEID"
      },
      {
        "name": "keyColumn",
        "schema": "string",
        "required": true,
        "description": "Column name to look up the row by (for example: id)",
        "example": "KEYCOLUMN"
      },
      {
        "name": "keyValue",
        "schema": "string",
        "required": true,
        "description": "Value of the key column",
        "example": "KEYVALUE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to update as of"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/data/{keyColumn}/{keyValue}/purge",
    "method": "deleteRowFromHistory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Delete an existing row, purging from history entirely",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to update",
        "example": "TABLEID"
      },
      {
        "name": "keyColumn",
        "schema": "string",
        "required": true,
        "description": "Column name to look up the row by (for example: id)",
        "example": "KEYCOLUMN"
      },
      {
        "name": "keyValue",
        "schema": "string",
        "required": true,
        "description": "Value of the key column",
        "example": "KEYVALUE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to look up as of"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/table/{tableId}/export",
    "method": "exportDataToCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "table",
    "typeScriptTag": "table",
    "description": "Export table data to CSV file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Table id or unique name to update",
        "example": "TABLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task-config",
    "method": "getAllConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task-config",
    "typeScriptTag": "taskConfig",
    "description": "Get all task configs for an org",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "TaskConfig id to start paginating from"
      },
      {
        "name": "parentEntityId",
        "schema": "string",
        "required": false,
        "description": "ParentEntityId to query for"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "AssessmentId to query for"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "EntityId to query for"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task-config",
    "method": "createNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "task-config",
    "typeScriptTag": "taskConfig",
    "description": "Create a new task config",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug",
        "example": "ORGID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "parentEntityId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "dueDate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "pastDueAction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASTDUEACTION"
      },
      {
        "name": "isSkippable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleteId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "deleteAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2017-01-24T13:57:52Z"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task-config/{id}",
    "method": "getSpecificConfig",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task-config",
    "typeScriptTag": "taskConfig",
    "description": "Get a specific task config",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID of the desired task config",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/{taskId}/mark-done",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Mark task done",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Task id",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/{taskId}/skip",
    "method": "markAsSkipped",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Skip task",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Task id",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/{taskId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Delete task",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Task id",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/bulk-delete",
    "method": "deleteBulkTasks",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Bulk delete tasks",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/{assessmentId}/{formId}",
    "method": "removeFormFromAssessment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Delete task",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      },
      {
        "name": "formId",
        "schema": "string",
        "required": true,
        "description": "Form id",
        "example": "FORMID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/summary/{assessmentId}",
    "method": "getAssessmentTasksSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Return the tasks for a given assessment",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": true,
        "description": "Assessment id",
        "example": "ASSESSMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task",
    "method": "getAllTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Return all existing tasks",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Task User id"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "Assessment id"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Task.Status. (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Task.Type of task (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "Entity Id"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target Id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/task",
    "method": "queryAssessmentTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Query tasks for assessments in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Task User id"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "Assessment id"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Task.Status. (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Task.Type. (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "Entity Id"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target Id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Job id to start paginating from"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      },
      {
        "name": "returnFormCompletionLinks",
        "schema": "boolean",
        "required": false,
        "description": "Return links that employees would use to complete a task if true else return links that direct to the form settings"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/me",
    "method": "getCurrentUserTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Return the tasks for the current user",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "assessmentId",
        "schema": "string",
        "required": false,
        "description": "Assessment id"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Task.Status. (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Task.Type of task (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "Entity Id"
      },
      {
        "name": "targetId",
        "schema": "string",
        "required": false,
        "description": "Target Id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/task/remind",
    "method": "sendReminderNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "task",
    "typeScriptTag": "task",
    "description": "Send a reminder notification for a particular task",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "taskIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/bulk/duplicate",
    "method": "createBulkDuplicate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Duplicate a set of templates",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/bulk/delete",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Delete a set of templates",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/{templateId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Delete a template",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "Template id",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/{templateId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Return a particular template by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "Template id",
        "example": "TEMPLATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/{templateId}",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Update an existing template",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "Template id",
        "example": "TEMPLATEID"
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
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stylesheet",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filename",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/{templateId}/preview",
    "method": "generateTemplatePreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Preview template content without saving it",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": "Job id"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format",
        "default": "TEXT"
      },
      {
        "name": "changeGroupingType",
        "schema": "string",
        "required": false,
        "description": "Type of change grouping"
      },
      {
        "name": "changeGroupingId",
        "schema": "string",
        "required": false,
        "description": "Change grouping id to query (null for primary)"
      },
      {
        "name": "useScenarioChanges",
        "schema": "boolean",
        "required": false,
        "description": "Generate documents for only the changes that are in the scenario. This option also allows you to reference the change within the template, which is otherwise not allowed"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "stylesheet",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/{templateId}/generate",
    "method": "generatePdfsAndEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Automatically generate PDFs of the templates, and distribute emails to managers and people to download",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "Template id",
        "example": "TEMPLATEID"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSubject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailMessage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saveToFiles",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "fileSensitive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fileField",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sendToManagers",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "sendToPersons",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useScenarioChanges",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "changeGroupingType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "changeGroupingId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/email/{templateName}",
    "method": "removeEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Delete a template",
    "parameters": [
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "Template name",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/email/{templateName}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Return a particular email template by name",
    "parameters": [
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "Template name",
        "example": "TEMPLATENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/email/{templateName}",
    "method": "updateEmailTemplate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Update an existing template",
    "parameters": [
      {
        "name": "templateName",
        "schema": "string",
        "required": true,
        "description": "Template name",
        "example": "TEMPLATENAME"
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
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stylesheet",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filename",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/email",
    "method": "createEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Create a template",
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
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "stylesheet",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filename",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template",
    "method": "getAllInOrgs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Return all templates in the organization paginated",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Type of template to filter by"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Template id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template",
    "method": "createNewTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Create a template",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
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
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "stylesheet",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filename",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "org not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/template/{templateId}/render",
    "method": "evaluateAgainstJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "template",
    "typeScriptTag": "template",
    "description": "Render a template by evaluating it against an existing job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "Template id",
        "example": "TEMPLATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": "Job id"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format",
        "default": "TEXT"
      },
      {
        "name": "changeGroupingType",
        "schema": "string",
        "required": false,
        "description": "Type of change grouping"
      },
      {
        "name": "changeGroupingId",
        "schema": "string",
        "required": false,
        "description": "Change grouping id to query (null for primary)"
      },
      {
        "name": "useScenarioChanges",
        "schema": "boolean",
        "required": false,
        "description": "Generate documents for only the changes that are in the scenario. This option also allows you to reference the change within the template, which is otherwise not allowed"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/request/validate",
    "method": "validateTimeoffRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Validate a time off request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "typeDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff",
    "method": "getTimeOff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Retrieve time off",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": "Person id to filter by"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "From date, inclusive"
      },
      {
        "name": "untilDate",
        "schema": "string",
        "required": false,
        "description": "Until date, exclusive"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Time off id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff",
    "method": "createEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Create a timeOff",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "days",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "typeDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "approval",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/{timeOffId}",
    "method": "removeEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Delete a timeOff",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "timeOffId",
        "schema": "string",
        "required": true,
        "description": "TimeOff id",
        "example": "TIMEOFFID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/{timeOffId}",
    "method": "findTimeOffById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Return a particular timeOff by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "timeOffId",
        "schema": "string",
        "required": true,
        "description": "TimeOff id",
        "example": "TIMEOFFID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/{timeOffId}",
    "method": "updateTimeOffEntry",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Update an existing timeOff",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "timeOffId",
        "schema": "string",
        "required": true,
        "description": "TimeOff id",
        "example": "TIMEOFFID"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "588f7ee98f138b19220041a7"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "days",
        "schema": "number",
        "description": ""
      },
      {
        "name": "hours",
        "schema": "number",
        "description": ""
      },
      {
        "name": "typeDescription",
        "schema": "string",
        "description": ""
      },
      {
        "name": "note",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approval",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/{timeOffId}/approve",
    "method": "approvePendingRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Approve a pending time off request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "timeOffId",
        "schema": "string",
        "required": true,
        "description": "TimeOff id",
        "example": "TIMEOFFID"
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/{timeOffId}/reject",
    "method": "rejectTimeOffRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Reject a pending time off request",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "timeOffId",
        "schema": "string",
        "required": true,
        "description": "TimeOff id",
        "example": "TIMEOFFID"
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/timeoff/request",
    "method": "submitTimeOffRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeoff",
    "typeScriptTag": "timeoff",
    "description": "Request time off",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "typeDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "500",
        "description": "Not Implemented"
      }
    ]
  },
  {
    "url": "/v1/org/{orgId}/usage/{type}",
    "method": "recordProductFeatureUsage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "usage",
    "typeScriptTag": "usage",
    "description": "Record usage of a product feature",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of usage",
        "example": "TYPE"
      },
      {
        "name": "entityId",
        "schema": "string",
        "required": false,
        "description": "Entity id, if applicable"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/user/{userId}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Return a particular user by id",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/{userId}",
    "method": "updateExistingUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Update an existing user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      },
      {
        "name": "appId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "orgs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "secrets",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user",
    "method": "getAllUsersWithinOrgs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Return all users within an org or across orgs",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": false,
        "description": "Org id to search within"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "User id to start from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Sort by"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Create a new user",
    "parameters": [
      {
        "name": "appId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "bob@example.com"
      },
      {
        "name": "orgs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "imagePath",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internalOptions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "secrets",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "emailSettings",
        "schema": "array",
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
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/user/{userId}/token",
    "method": "revokeAccessToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Revoke a user's access token",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/token",
    "method": "revokeAccessTokens",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Revoke multiple user's access tokens",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/assign",
    "method": "assignRoleToMultiple",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Assign or remove multiple users a role within an org",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/me",
    "method": "getCurrentUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Return the currently logged in user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/user/me/view",
    "method": "viewedUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Return the user the user is currently viewing as",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "unauthorized"
      }
    ]
  },
  {
    "url": "/v1/user/email/{email}",
    "method": "getUserByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Return a particular user by email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "Email",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/person/{personId}",
    "method": "returnUserByPersonId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Return a particular user by its corresponding person id",
    "parameters": [
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Person id to fetch user for",
        "example": "PERSONID"
      },
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org id to search within",
        "example": "ORGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/invite",
    "method": "inviteMultipleNewUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Create/invite multiple new users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/{userId}/password",
    "method": "changePassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Change a user's password, or switch a user to SSO",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User id",
        "example": "USERID"
      },
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
      },
      {
        "name": "oldPassword",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/user/sendreset",
    "method": "sendPasswordResetEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Send a password reset email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "example@example.com"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "email not found"
      }
    ]
  },
  {
    "url": "/v1/webauthn/register",
    "method": "verifyPhysicalKeyForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webauthn",
    "typeScriptTag": "webauthn",
    "description": "Check for an existing physical key for this user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/webauthn/register",
    "method": "verifyPhysicalKeyForUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webauthn",
    "typeScriptTag": "webauthn",
    "description": "Check for an existing WebAuthn key for this user",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "credentialResponse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDENTIALRESPONSE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/webauthn/register/{emailBase64}",
    "method": "removeRegisteredCredentialsByEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webauthn",
    "typeScriptTag": "webauthn",
    "description": "Delete registered credentials by the given email",
    "parameters": [
      {
        "name": "emailBase64",
        "schema": "string",
        "required": true,
        "description": "Email",
        "example": "EMAILBASE64"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "invalid data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v1/webauthn/verify",
    "method": "checkExistingKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webauthn",
    "typeScriptTag": "webauthn",
    "description": "Check for an existing physical key for this user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v1/webauthn/verify",
    "method": "verifyPhysicalKeyForUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "webauthn",
    "typeScriptTag": "webauthn",
    "description": "Check for an existing physical key for this user",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "credentialResponse",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREDENTIALRESPONSE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/change",
    "method": "getRecentChangesForOrgOrPerson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Return recent changes across an org, or for a particular person or job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": "Job id to filter by"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": false,
        "description": "Person id to filter by"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "Types of change to filter by, comma-separated"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Statuses to filter by, comma-separated"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "fieldsChanged",
        "schema": "string",
        "required": false,
        "description": "Changed fields to filter by, comma-separated"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query to filter against"
      },
      {
        "name": "open",
        "schema": "string",
        "required": false,
        "description": "Whether the role is open or not"
      },
      {
        "name": "includeGrantSchedule",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include full grant schedule when returning equity updates"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "required": false,
        "description": "Date to start from"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Change id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "desc",
        "schema": "boolean",
        "required": false,
        "description": "Descending (default false)"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/change/{changeId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Return a particular change by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "changeId",
        "schema": "string",
        "required": true,
        "description": "Change id",
        "example": "CHANGEID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}",
    "method": "findOfType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Find groups in the organization of a certain type",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Group id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "jobFields",
        "schema": "string",
        "required": false,
        "description": "job fields to return, comma-separated"
      },
      {
        "name": "positionFields",
        "schema": "string",
        "required": false,
        "description": "position fields to return, comma-separated"
      },
      {
        "name": "includeAll",
        "schema": "boolean",
        "required": false,
        "description": "Include all groups, including deleted groups"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search string to filter on code & name"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Create a group",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to create the group in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group creation"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "501",
        "description": "not implemented"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}/{groupId}",
    "method": "removeByGroupId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Delete a group",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group id",
        "example": "GROUPID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the group in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to update as of"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "501",
        "description": "not implemented"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}/{groupId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Return a particular group by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group identifier (either id or slug)",
        "example": "GROUPID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "jobFields",
        "schema": "string",
        "required": false,
        "description": "job fields to return, comma-separated"
      },
      {
        "name": "positionFields",
        "schema": "string",
        "required": false,
        "description": "position fields to return, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}/{groupId}",
    "method": "updateGroupDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Update a group",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Group id",
        "example": "GROUPID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the group in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of group update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "501",
        "description": "not implemented"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/count",
    "method": "getOrganizedGroupCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Get organized group counts",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "scenario id to query"
      },
      {
        "name": "groupFilter",
        "schema": "string",
        "required": false,
        "description": "query string to filter group by"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "date to search as of"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": false,
        "description": "kind of group to query (https://docs.charthop.com/developer-basics"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "501",
        "description": "not implemented"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}/bulk-delete",
    "method": "markMultipleAsDeleted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Mark multiple groups as deleted",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the group in"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/{type}/import",
    "method": "importCsvData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Import data from CSV file",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Group type",
        "example": "TYPE"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to update as of"
      },
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
        "statusCode": "400",
        "description": "invalid manifest data"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "403",
        "description": "permission denied"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/graph",
    "method": "findInOrgOfType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Find groups in the organization of a certain type",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "group id to use as the starting point"
      },
      {
        "name": "depth",
        "schema": "integer",
        "required": false,
        "description": "number of levels down"
      },
      {
        "name": "groupApproxLimit",
        "schema": "integer",
        "required": false,
        "description": "limit number of groups"
      },
      {
        "name": "jobLimit",
        "schema": "integer",
        "required": false,
        "description": "limit number of jobs"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "scenario id to query"
      },
      {
        "name": "jobFilter",
        "schema": "string",
        "required": false,
        "description": "query string to filter jobs by"
      },
      {
        "name": "groupFilter",
        "schema": "string",
        "required": false,
        "description": "query string to filter group by"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "date to search as of"
      },
      {
        "name": "groupFields",
        "schema": "string",
        "required": false,
        "description": "group fields to return"
      },
      {
        "name": "jobFields",
        "schema": "string",
        "required": false,
        "description": "job/person fields to return"
      },
      {
        "name": "positionFields",
        "schema": "string",
        "required": false,
        "description": "position fields to return"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": false,
        "description": "kind of group to query (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "501",
        "description": "not implemented"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/group/orphaned",
    "method": "findOrphanedGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "group",
    "typeScriptTag": "group",
    "description": "Find groups in the organization that have no child groups",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "group id to use as the starting point"
      },
      {
        "name": "groupLimit",
        "schema": "integer",
        "required": false,
        "description": "limit number of groups"
      },
      {
        "name": "jobLimit",
        "schema": "integer",
        "required": false,
        "description": "limit number of jobs"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "scenario id to query"
      },
      {
        "name": "jobFilter",
        "schema": "string",
        "required": false,
        "description": "query string to filter jobs by"
      },
      {
        "name": "groupFilter",
        "schema": "string",
        "required": false,
        "description": "query string to filter group by"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "date to search as of"
      },
      {
        "name": "groupFields",
        "schema": "string",
        "required": false,
        "description": "group fields to return"
      },
      {
        "name": "jobFields",
        "schema": "string",
        "required": false,
        "description": "job/person fields to return"
      },
      {
        "name": "positionFields",
        "schema": "string",
        "required": false,
        "description": "position fields to return"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": false,
        "description": "kind of group to query (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      },
      {
        "statusCode": "501",
        "description": "not implemented"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/count",
    "method": "getOrganizationJobCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Count jobs or people in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/{jobId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Delete a job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the job in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of job update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/{jobId}",
    "method": "findInOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Return a particular job by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/{jobId}",
    "method": "updateJobDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Update a job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the job in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of job update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/bulkupdate",
    "method": "performBulkUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Perform a bulk update on a number of jobs",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "updates",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
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
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/graph",
    "method": "getRegionJobsGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Retrieve jobs from a region of the job graph",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "Job id to use as the starting point for the search"
      },
      {
        "name": "depth",
        "schema": "integer",
        "required": false,
        "description": "Number of levels down to search"
      },
      {
        "name": "approxLimit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return, approximately"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to filter by"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job",
    "method": "findInOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Find jobs in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "compReviewId",
        "schema": "string",
        "required": false,
        "description": "Comp review id to query"
      },
      {
        "name": "approvalChainId",
        "schema": "string",
        "required": false,
        "description": "Approval chain id to query; only relevant when there is a comp review id"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Job id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "fieldsList",
        "schema": "array",
        "required": false,
        "description": "Fields to retrieve, list syntax"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "useScenarioChanges",
        "schema": "boolean",
        "required": false,
        "description": "Find jobs only based on the changes that are in the scenario. This option also allows you to reference the change within the filter, which is otherwise not allowed"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job",
    "method": "createNewJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Create a job",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to create the job in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of job creation"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/graph-counts",
    "method": "getSiblingsAndDirectsMap",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Returns a map of jobId to their sibling and direct counts and the corresponding ids",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Query string to filter by"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/job/{jobId}/position",
    "method": "listOccupiedPositionsByJobAndDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job",
    "typeScriptTag": "job",
    "description": "Get a list of positions occupied by a job on specific date",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the job in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of un-assignment"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Position id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "positionFields",
        "schema": "string",
        "required": false,
        "description": "Position fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/person",
    "method": "findInOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "person",
    "typeScriptTag": "person",
    "description": "Find persons in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date to search as of"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Start date, if retrieving persons employed between two dates (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "End date, if retrieving persons employed between two dates (https://docs.charthop.com/developer-basics"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "Search query"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Person id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "fieldsList",
        "schema": "array",
        "required": false,
        "description": "Fields to retrieve, list syntax"
      },
      {
        "name": "includeAll",
        "schema": "boolean",
        "required": false,
        "description": "Include all persons in the system, including ex-employees or persons who were never in jobs"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      },
      {
        "name": "returnAccess",
        "schema": "string",
        "required": false,
        "description": "Return access information -- pass a list of actions to check, for example: create,update,delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/person",
    "method": "createNewPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "person",
    "typeScriptTag": "person",
    "description": "Create a person",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to create the person in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of person creation"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/person/{personId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "person",
    "typeScriptTag": "person",
    "description": "Delete a person",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Person id",
        "example": "PERSONID"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/person/{personId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "person",
    "typeScriptTag": "person",
    "description": "Return a particular person by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Person id",
        "example": "PERSONID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/person/{personId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "person",
    "typeScriptTag": "person",
    "description": "Update a person",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "personId",
        "schema": "string",
        "required": true,
        "description": "Person id",
        "example": "PERSONID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the person in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of person update"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/person/geocodes",
    "method": "getGeocodesForOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "person",
    "typeScriptTag": "person",
    "description": "Return all geocodes for persons in the organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}",
    "method": "deletePosition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Delete a position",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position id",
        "example": "POSITIONID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to delete the position in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of position deletion"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Return a particular position by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position identifier",
        "example": "POSITIONID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted positions in the result"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}",
    "method": "updatePositionDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Update a position",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position id",
        "example": "POSITIONID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to update the position in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of position update"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}/job/{jobId}",
    "method": "removeJobFromPosition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Remove a job from a position",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position id",
        "example": "POSITIONID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to remove the job in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of removal"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}/job/{jobId}",
    "method": "updateJobDatesOnPosition",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Update assign or remove date of a job for a position",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position id",
        "example": "POSITIONID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to remove the job in"
      },
      {
        "name": "removeDate",
        "schema": "string",
        "required": false,
        "description": "Effective date of removal"
      },
      {
        "name": "assigndate",
        "schema": "string",
        "required": false,
        "description": "Effective date of assignment"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}/job/{jobId}",
    "method": "assignJobToPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Assign a job to a position",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position id",
        "example": "POSITIONID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job id",
        "example": "JOBID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to assign the job in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of assignment"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/import",
    "method": "importCsvDataWithFilePath",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Import positions as a CSV",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "importFromProcessId",
        "schema": "string",
        "required": false,
        "description": "Import a file from another process, instead of directly uploading it"
      },
      {
        "name": "parentProcessId",
        "schema": "string",
        "required": false,
        "description": "Parent process id to attach to"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date to import positions as of, if date column not provided"
      },
      {
        "name": "file",
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
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Return a list of positions",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": "Group id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "Position id to start paginating from"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "includeDeleted",
        "schema": "boolean",
        "required": false,
        "description": "Include deleted positions in the result"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position",
    "method": "createNewPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Create a position",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to create the position in"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Effective date of position creation"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}/history",
    "method": "getHistoryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Return the history of a particular position by id",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position identifier",
        "example": "POSITIONID"
      },
      {
        "name": "scenarioId",
        "schema": "string",
        "required": false,
        "description": "Scenario id to query"
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": "Date"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "Fields to retrieve, comma-separated"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Data format to use; default is json, can also use json-extended or json-readable"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  },
  {
    "url": "/v2/org/{orgId}/position/{positionId}/purge",
    "method": "deleteAndPurge",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "position",
    "typeScriptTag": "position",
    "description": "Delete a position and purge it from all history",
    "parameters": [
      {
        "name": "orgId",
        "schema": "string",
        "required": true,
        "description": "Org identifier (either id or slug)",
        "example": "ORGID"
      },
      {
        "name": "positionId",
        "schema": "string",
        "required": true,
        "description": "Position id",
        "example": "POSITIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "snapshot currently building"
      },
      {
        "statusCode": "400",
        "description": "bad request"
      },
      {
        "statusCode": "401",
        "description": "not authorized"
      },
      {
        "statusCode": "404",
        "description": "not found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="ChartHop API"
      apiBaseUrl="https://api.charthop.com"
      apiVersion="V1.0.0"
      endpoints={369}
      sdkMethods={514}
      schemas={495}
      parameters={2586}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/charthop/openapi.yaml"
      developerDocumentation="docs.charthop.com/developer-basics"
    />
  );
}
  