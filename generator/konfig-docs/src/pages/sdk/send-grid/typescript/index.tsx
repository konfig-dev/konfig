import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function SendGridTypeScriptSdk() {
  return (
    <Sdk
      sdkName="send-grid-typescript-sdk"
      metaDescription="SendGrid is a cloud-based email delivery service that assists businesses in sending transactional and marketing emails. With a focus on reliability and deliverability, SendGrid helps developers send emails efficiently and effectively to their audiences."
      company="SendGrid"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/logo.png"
      clientNameCamelCase="sendGrid"
      homepage="sendgrid.com/en-us"
      lastUpdated={new Date("2024-03-13T01:24:30.233Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["email","marketing"]}
      methods={[
  {
    "url": "/access_settings/activity",
    "method": "getRecentAccessAttempts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Access Management",
    "typeScriptTag": "ipAccessManagement",
    "description": "Retrieve all recent access attempts",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limits the number of IPs to return.",
        "default": 20
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/access_settings/whitelist",
    "method": "removeIpAddresses",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IP Access Management",
    "typeScriptTag": "ipAccessManagement",
    "description": "Remove one or more IPs from the allow list",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/access_settings/whitelist",
    "method": "getAllowedIPs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Access Management",
    "typeScriptTag": "ipAccessManagement",
    "description": "Retrieve a list of currently allowed IPs",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/access_settings/whitelist",
    "method": "addAllowedIps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IP Access Management",
    "typeScriptTag": "ipAccessManagement",
    "description": "Add one or more IPs to the allow list",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "ips",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/access_settings/whitelist/{rule_id}",
    "method": "removeSpecificIpFromAllowedList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IP Access Management",
    "typeScriptTag": "ipAccessManagement",
    "description": "Remove a specific IP from the allowed list",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/access_settings/whitelist/{rule_id}",
    "method": "getAllowedIp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Access Management",
    "typeScriptTag": "ipAccessManagement",
    "description": "Retrieve a specific allowed IP",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/alerts",
    "method": "alerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Retrieve all alerts",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of alerts."
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "alerts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Create a new Alert",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_TO"
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "percentage",
        "schema": "integer",
        "required": false,
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
    "url": "/alerts/{alert_id}",
    "method": "deleteAlertById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Delete an alert",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/alerts/{alert_id}",
    "method": "getSpecificAlert",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Retrieve a specific alert",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/alerts/{alert_id}",
    "method": "updateAlert",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Update an alert",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "email_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "percentage",
        "schema": "integer",
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
    "url": "/api_keys",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Retrieve all API Keys belonging to the authenticated user",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_keys",
    "method": "createKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Create API keys",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_keys/{api_key_id}",
    "method": "revokeKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Delete API keys",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_keys/{api_key_id}",
    "method": "getByKeyId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Retrieve an existing API Key",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_keys/{api_key_id}",
    "method": "updateKeyName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Update API key name",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/api_keys/{api_key_id}",
    "method": "updateNameAndScopes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "API Keys",
    "typeScriptTag": "apiKeys",
    "description": "Update API key name and scopes",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Unsubscribe Groups",
    "typeScriptTag": "suppressionsUnsubscribeGroups",
    "description": "Retrieve all suppression groups associated with the user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/asm/groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suppressions - Unsubscribe Groups",
    "typeScriptTag": "suppressionsUnsubscribeGroups",
    "description": "Create a new suppression group",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/groups/{group_id}",
    "method": "deleteGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Suppressions - Unsubscribe Groups",
    "typeScriptTag": "suppressionsUnsubscribeGroups",
    "description": "Delete a Suppression Group",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/groups/{group_id}",
    "method": "getSingleGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Unsubscribe Groups",
    "typeScriptTag": "suppressionsUnsubscribeGroups",
    "description": "Get information on a single suppression group.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/asm/groups/{group_id}",
    "method": "updateGroup",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Suppressions - Unsubscribe Groups",
    "typeScriptTag": "suppressionsUnsubscribeGroups",
    "description": "Update a suppression group.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_default",
        "schema": "boolean",
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/groups/{group_id}/suppressions",
    "method": "getAllSuppressedEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Suppressions",
    "typeScriptTag": "suppressionsSuppressions",
    "description": "Retrieve all suppressions for a suppression group",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of email addresses belonging to the given suppression group."
      }
    ]
  },
  {
    "url": "/asm/groups/{group_id}/suppressions",
    "method": "addToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suppressions - Suppressions",
    "typeScriptTag": "suppressionsSuppressions",
    "description": "Add suppressions to a suppression group",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "recipient_emails",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/groups/{group_id}/suppressions/search",
    "method": "searchWithinGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suppressions - Suppressions",
    "typeScriptTag": "suppressionsSuppressions",
    "description": "Search for suppressions within a group",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "recipient_emails",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The email address from your search that do exist in the suppression group."
      }
    ]
  },
  {
    "url": "/asm/groups/{group_id}/suppressions/{email}",
    "method": "removeSuppressionFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Suppressions - Suppressions",
    "typeScriptTag": "suppressionsSuppressions",
    "description": "Delete a suppression from a suppression group",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/suppressions",
    "method": "getAllSuppressions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Suppressions",
    "typeScriptTag": "suppressionsSuppressions",
    "description": "Retrieve all suppressions",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/asm/suppressions/global",
    "method": "addRecipientAddresses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Suppressions - Global Suppressions",
    "typeScriptTag": "suppressionsGlobalSuppressions",
    "description": "Add recipient addresses to the global suppression group.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "recipient_emails",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/suppressions/global/{email}",
    "method": "removeEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Suppressions - Global Suppressions",
    "typeScriptTag": "suppressionsGlobalSuppressions",
    "description": "Delete a Global Suppression",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/asm/suppressions/global/{email}",
    "method": "getGlobalSuppression",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Global Suppressions",
    "typeScriptTag": "suppressionsGlobalSuppressions",
    "description": "Retrieve a Global Suppression",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/asm/suppressions/{email}",
    "method": "getUnsubscribeGroupsByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Suppressions",
    "typeScriptTag": "suppressionsSuppressions",
    "description": "Retrieve all suppression groups for an email address",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/browsers/stats",
    "method": "getEmailStatisticsByBrowser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve email statistics by browser.",
    "parameters": [
      {
        "name": "browsers",
        "schema": "string",
        "description": "The browsers to get statistics for. You can include up to 10 different browsers by including this parameter multiple times."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
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
    "url": "/campaigns",
    "method": "campaigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Retrieve all Campaigns",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results you would like to receive at a time.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index of the first campaign to return, where 0 is the first campaign.",
        "default": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/campaigns",
    "method": "campaigns",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Create a Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_unsubscribe_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ip_pool",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "list_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "plain_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "segment_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sender_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "suppression_group_id",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/campaigns/{campaign_id}",
    "method": "deleteCampaignById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Delete a Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/campaigns/{campaign_id}",
    "method": "getSingleCampaign",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Retrieve a single campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/campaigns/{campaign_id}",
    "method": "updateSpecificCampaign",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Update a Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HTML_CONTENT"
      },
      {
        "name": "plain_content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLAIN_CONTENT"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
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
    "url": "/campaigns/{campaign_id}/schedules",
    "method": "unscheduleCampaign",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Unschedule a Scheduled Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/campaigns/{campaign_id}/schedules",
    "method": "getScheduledTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "View Scheduled Time of a Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/campaigns/{campaign_id}/schedules",
    "method": "updateScheduledTime",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Update a Scheduled Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "send_at",
        "schema": "integer",
        "required": true,
        "description": "",
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
    "url": "/campaigns/{campaign_id}/schedules",
    "method": "scheduleCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Schedule a Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "send_at",
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
    "url": "/campaigns/{campaign_id}/schedules/now",
    "method": "sendCampaignNow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Send a Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/campaigns/{campaign_id}/schedules/test",
    "method": "sendTestCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaigns API",
    "typeScriptTag": "campaignsApi",
    "description": "Send a Test Campaign",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/categories",
    "method": "categories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Retrieve all categories",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of categories to display per page.",
        "default": 50
      },
      {
        "name": "category",
        "schema": "string",
        "description": "Allows you to perform a prefix search on this particular category."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The point in the list that you would like to begin displaying results.",
        "default": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/categories/stats",
    "method": "getEmailStatisticsFor",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Retrieve Email Statistics for Categories",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
      },
      {
        "name": "categories",
        "schema": "string",
        "required": true,
        "description": "The individual categories that you want to retrieve statistics for. You may include up to 10 different categories.",
        "example": "CATEGORIES"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to include.",
        "default": 500
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The number of results to skip."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/categories/stats/sums",
    "method": "getSums",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Retrieve sums of email stats for each category [Needs: Stats object defined, has category ID?]",
    "parameters": [
      {
        "name": "sortByMetric",
        "schema": "string",
        "required": false,
        "description": "The metric that you want to sort by.  Must be a single metric.",
        "default": "delivered"
      },
      {
        "name": "sortByDirection",
        "schema": "string",
        "required": false,
        "description": "The direction you want to sort.",
        "default": "desc"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limits the number of results returned.",
        "default": 5
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results.",
        "default": 0
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/clients/stats",
    "method": "getEmailStatisticsByClientType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve email statistics by client type.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
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
    "url": "/clients/{client_type}/stats",
    "method": "getStatsByClientType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve stats by a specific client type.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
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
    "url": "/contactdb/custom_fields",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Custom Fields",
    "typeScriptTag": "contactsApiCustomFields",
    "description": "Retrieve all custom fields",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/custom_fields",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Custom Fields",
    "typeScriptTag": "contactsApiCustomFields",
    "description": "Create a Custom Field",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/contactdb/custom_fields/{custom_field_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Custom Fields",
    "typeScriptTag": "contactsApiCustomFields",
    "description": "Delete a Custom Field",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/custom_fields/{custom_field_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Custom Fields",
    "typeScriptTag": "contactsApiCustomFields",
    "description": "Retrieve a Custom Field",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists",
    "method": "deleteMultipleLists",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Delete Multiple lists",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists",
    "method": "getAllLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Retrieve all lists",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/contactdb/lists",
    "method": "createNewList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Create a List",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/lists/{list_id}",
    "method": "deleteListById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Delete a List",
    "parameters": [
      {
        "name": "deleteContacts",
        "schema": "boolean",
        "description": "Adds the ability to delete all contacts on the list in addition to deleting the list."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists/{list_id}",
    "method": "getSingleList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Retrieve a single list",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "description": "The ID of the list to retrieve."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists/{list_id}",
    "method": "updateListName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Update a List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the list you are updating.",
        "example": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists/{list_id}/recipients",
    "method": "getAllRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Retrieve all recipients on a List",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page index of first recipient to return (must be a positive integer)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Number of recipients to return at a time (must be a positive integer between 1 and 1000)"
      },
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the list whose recipients you are requesting.",
        "example": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/contactdb/lists/{list_id}/recipients",
    "method": "addMultipleRecipientsToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Add Multiple Recipients to a List",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists/{list_id}/recipients/{recipient_id}",
    "method": "deleteRecipient",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Delete a Single Recipient from a Single List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the list you are taking this recipient away from.",
        "example": 0
      },
      {
        "name": "recipientId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the recipient to take off the list.",
        "example": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/lists/{list_id}/recipients/{recipient_id}",
    "method": "addSingleRecipient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Lists",
    "typeScriptTag": "contactsApiLists",
    "description": "Add a Single Recipient to a List",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/recipients",
    "method": "deleteMultipleRecipients",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Delete Recipients",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients",
    "method": "getAllRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Retrieve recipients",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "Page index of first recipients to return (must be a positive integer)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "Number of recipients to return at a time (must be a positive integer between 1 and 1000)"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients",
    "method": "updateMultipleRecipients",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Update Recipient",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients",
    "method": "addRecipient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Add recipients",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients/billable_count",
    "method": "getBillableCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Retrieve the count of billable recipients",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients/count",
    "method": "getCountOfRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Retrieve a Count of Recipients",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients/search",
    "method": "searchRecipientByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Search recipients",
    "parameters": [
      {
        "name": "{fieldName}",
        "schema": "string",
        "description": ""
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients/search",
    "method": "searchBySegmentConditions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Search recipients",
    "parameters": [
      {
        "name": "conditions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "list_id",
        "schema": "integer",
        "required": true,
        "description": "",
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
      }
    ]
  },
  {
    "url": "/contactdb/recipients/{recipient_id}",
    "method": "deleteRecipientById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Delete a Recipient",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/recipients/{recipient_id}",
    "method": "getSingleRecipient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Retrieve a single recipient",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/recipients/{recipient_id}/lists",
    "method": "getRecipientLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Retrieve the lists that a recipient is on",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/reserved_fields",
    "method": "getReservedFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Custom Fields",
    "typeScriptTag": "contactsApiCustomFields",
    "description": "Retrieve reserved fields",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/segments",
    "method": "getAllSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Segments",
    "typeScriptTag": "contactsApiSegments",
    "description": "Retrieve all segments",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/contactdb/segments",
    "method": "createSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts API - Segments",
    "typeScriptTag": "contactsApiSegments",
    "description": "Create a Segment",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "conditions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "list_id",
        "schema": "integer",
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
        "name": "recipient_count",
        "schema": "number",
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
      }
    ]
  },
  {
    "url": "/contactdb/segments/{segment_id}",
    "method": "deleteSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts API - Segments",
    "typeScriptTag": "contactsApiSegments",
    "description": "Delete a segment",
    "parameters": [
      {
        "name": "deleteContacts",
        "schema": "boolean",
        "description": "True to delete all contacts matching the segment in addition to deleting the segment"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/segments/{segment_id}",
    "method": "getSegmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Segments",
    "typeScriptTag": "contactsApiSegments",
    "description": "Retrieve a segment",
    "parameters": [
      {
        "name": "segmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the segment you want to request.",
        "example": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/segments/{segment_id}",
    "method": "updateSegment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Contacts API - Segments",
    "typeScriptTag": "contactsApiSegments",
    "description": "Update a segment",
    "parameters": [
      {
        "name": "segmentId",
        "schema": "string",
        "description": "The ID of the segment you are updating."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "conditions",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "list_id",
        "schema": "number",
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
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/segments/{segment_id}/recipients",
    "method": "getSegmentRecipients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Segments",
    "typeScriptTag": "contactsApiSegments",
    "description": "Retrieve recipients on a segment",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contactdb/status",
    "method": "getUploadStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts API - Recipients",
    "typeScriptTag": "contactsApiRecipients",
    "description": "Get Recipient Upload Status",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/designs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "List Designs",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of results to return",
        "default": 100
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "token corresponding to a specific page of results, as provided by metadata"
      },
      {
        "name": "summary",
        "schema": "boolean",
        "description": "set to false to return all fields",
        "default": true
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
    "url": "/designs",
    "method": "createDesign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Create Design",
    "parameters": [],
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
    "url": "/designs/pre-builts",
    "method": "listPreBuiltDesigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "List SendGrid Pre-built Designs",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "number of results to return",
        "default": 100
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "token corresponding to a specific page of results, as provided by metadata"
      },
      {
        "name": "summary",
        "schema": "boolean",
        "description": "set to false to return all fields",
        "default": true
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
    "url": "/designs/pre-builts/{id}",
    "method": "getSinglePreBuiltDesign",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Get SendGrid Pre-built Design",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/designs/pre-builts/{id}",
    "method": "duplicatePreBuiltDesign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Duplicate SendGrid Pre-built Design",
    "parameters": [
      {
        "name": "editor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Duplicate: <original design name>"
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
    "url": "/designs/{id}",
    "method": "deleteDesignById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Delete Design",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/designs/{id}",
    "method": "getSingleDesign",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Get Design",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/designs/{id}",
    "method": "updateDesignById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Update Design",
    "parameters": [
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "generate_plain_content",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "html_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "My Design"
      },
      {
        "name": "plain_content",
        "schema": "string",
        "description": "",
        "default": "<generated from html_content if left empty>"
      },
      {
        "name": "subject",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/designs/{id}",
    "method": "duplicateDesign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Designs API",
    "typeScriptTag": "designsApi",
    "description": "Duplicate Design",
    "parameters": [
      {
        "name": "editor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Duplicate: <original design name>"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/devices/stats",
    "method": "getEmailStatisticsByDeviceType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve email statistics by device type.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
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
    "url": "/geo/stats",
    "method": "getEmailStatisticsByCountryAndStateProvince",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve email statistics by country and state/province.",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "description": "The country you would like to see statistics for. Currently only supported for US and CA."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
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
    "url": "/ips",
    "method": "ips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Addresses",
    "typeScriptTag": "ipAddresses",
    "description": "Retrieve all IP addresses",
    "parameters": [
      {
        "name": "ip",
        "schema": "string",
        "description": "The IP address to get"
      },
      {
        "name": "excludeWhitelabels",
        "schema": "boolean",
        "description": "Should we exclude reverse DNS records (whitelabels)?"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of IPs you want returned at the same time.",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the number of IPs that you are requesting.",
        "default": 0
      },
      {
        "name": "subuser",
        "schema": "string",
        "description": "The subuser you are requesting for."
      },
      {
        "name": "sortByDirection",
        "schema": "string",
        "description": "The direction to sort the results."
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
    "url": "/ips",
    "method": "ips",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IP Addresses",
    "typeScriptTag": "ipAddresses",
    "description": "Add IPs",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "subusers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "warmup",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
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
    "url": "/ips/assigned",
    "method": "getAssignedIps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Addresses",
    "typeScriptTag": "ipAddresses",
    "description": "Retrieve all assigned IPs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/pools",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Retrieve all IP pools",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/pools",
    "method": "createPool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Create an IP pool",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/pools/{pool_name}",
    "method": "deletePool",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Delete an IP pool",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/pools/{pool_name}",
    "method": "getPoolIps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Retrieve all the IPs in a specified pool",
    "parameters": [],
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
    "url": "/ips/pools/{pool_name}",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Rename an IP pool",
    "parameters": [
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/pools/{pool_name}/ips",
    "method": "addIpAddressToPool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Add an IP address to a pool",
    "parameters": [
      {
        "name": "ip",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/pools/{pool_name}/ips/{ip}",
    "method": "removeIpAddressFromPool",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IP Pools",
    "typeScriptTag": "ipPools",
    "description": "Remove an IP address from a pool",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/remaining",
    "method": "getRemainingIPsCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Addresses",
    "typeScriptTag": "ipAddresses",
    "description": "Get remaining IPs count",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/warmup",
    "method": "getAllIpsWarmup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Warmup",
    "typeScriptTag": "ipWarmup",
    "description": "Retrieve all IPs currently in warmup",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/warmup",
    "method": "startIpAddressWarmup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "IP Warmup",
    "typeScriptTag": "ipWarmup",
    "description": "Start warming up an IP address",
    "parameters": [
      {
        "name": "ip",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/warmup/{ip_address}",
    "method": "stopIpAddressWarmup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "IP Warmup",
    "typeScriptTag": "ipWarmup",
    "description": "Stop warming up an IP address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/ips/warmup/{ip_address}",
    "method": "getWarmupStatusForIpAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Warmup",
    "typeScriptTag": "ipWarmup",
    "description": "Retrieve the warmup status for a specific IP address",
    "parameters": [],
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
    "url": "/ips/{ip_address}",
    "method": "getIpPoolsByAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IP Addresses",
    "typeScriptTag": "ipAddresses",
    "description": "Retrieve all IP pools an IP address belongs to",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/batch",
    "method": "request",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Create a batch ID",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/batch/{batch_id}",
    "method": "validateBatchId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Validate batch ID",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail/send",
    "method": "v3EmailSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Mail Send",
    "typeScriptTag": "mailSend",
    "description": "v3 Mail Send",
    "parameters": [
      {
        "name": "asm",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "batch_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "content",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "custom_args",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "email": "jane_doe@example.com",
          "name": "Jane Doe"
        }
      },
      {
        "name": "headers",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "ip_pool_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mail_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "personalizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "reply_to",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "email": "jane_doe@example.com",
          "name": "Jane Doe"
        }
      },
      {
        "name": "reply_to_list",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "send_at",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "template_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tracking_settings",
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
        "statusCode": "413",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings",
    "method": "getAllMailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve all mail settings",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of settings to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where in the list of results to begin displaying settings."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/address_whitelist",
    "method": "getAddressWhitelistMailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve address whitelist mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/address_whitelist",
    "method": "updateAddressWhitelistMailSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Update address whitelist mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "list",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/bounce_purge",
    "method": "getBouncePurgeSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve bounce purge mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/bounce_purge",
    "method": "updateBouncePurgeSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Update bounce purge mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hard_bounces",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "soft_bounces",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/footer",
    "method": "getFooterMailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve footer mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/footer",
    "method": "updateFooterMailSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Update footer mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plain_content",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/forward_bounce",
    "method": "getForwardBounceMailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve forward bounce mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/forward_bounce",
    "method": "updateForwardBounceSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Update forward bounce mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "email",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/forward_spam",
    "method": "getForwardSpamMailSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve forward spam mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/forward_spam",
    "method": "updateForwardSpamSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Update forward spam mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "email",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/template",
    "method": "getLegacyTemplateSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Retrieve legacy template mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mail_settings/template",
    "method": "updateLegacyTemplateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Mail",
    "typeScriptTag": "settingsMail",
    "description": "Update template mail settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "html_content",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/mailbox_providers/stats",
    "method": "getEmailStatisticsByMailboxProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve email statistics by mailbox provider.",
    "parameters": [
      {
        "name": "mailboxProviders",
        "schema": "string",
        "description": "The mail box providers to get statistics for. You can include up to 10 by including this parameter multiple times."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
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
    "url": "/marketing/contacts",
    "method": "deleteBulkContacts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Delete Contacts",
    "parameters": [
      {
        "name": "deleteAllContacts",
        "schema": "string",
        "required": false,
        "description": "Must be set to `\"true\"` to delete all contacts."
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of contact IDs."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The deletion job has been accepted and is being processed."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts",
    "method": "getRecentContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get Sample Contacts",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts",
    "method": "upsertBatchContacts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Add or Update a Contact",
    "parameters": [
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "list_ids",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/batch",
    "method": "getBatchedByIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get Batched Contacts by IDs",
    "parameters": [
      {
        "name": "ids",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/count",
    "method": "getTotalCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get Total Contact Count",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/exports",
    "method": "getAllExports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get All Existing Exports",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/exports",
    "method": "exportListsSegments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Export Contacts",
    "parameters": [
      {
        "name": "file_type",
        "schema": "string",
        "description": "",
        "default": "csv"
      },
      {
        "name": "list_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_file_size",
        "schema": "integer",
        "description": "",
        "default": 5000
      },
      {
        "name": "notifications",
        "schema": "object",
        "description": ""
      },
      {
        "name": "segment_ids",
        "schema": "array",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/exports/{id}",
    "method": "checkExportStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Export Contacts Status",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/imports",
    "method": "importCsv",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Import Contacts",
    "parameters": [
      {
        "name": "field_mappings",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "file_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_TYPE"
      },
      {
        "name": "list_ids",
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
        "description": "If any of the specified lists do not exist."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/imports/{id}",
    "method": "checkImportStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Import Contacts Status",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/search",
    "method": "searchContactsByQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Search Contacts",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY"
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
        "statusCode": "408",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/search/emails",
    "method": "searchByEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get Contacts by Emails",
    "parameters": [
      {
        "name": "emails",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/contacts/{id}",
    "method": "getByIdDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Get a Contact by ID",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/field_definitions",
    "method": "getAllFieldDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get All Field Definitions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/field_definitions",
    "method": "createDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create Custom Field Definition",
    "parameters": [
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
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
      }
    ]
  },
  {
    "url": "/marketing/field_definitions/{custom_field_id}",
    "method": "deleteDefinition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete Custom Field Definition",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/field_definitions/{custom_field_id}",
    "method": "updateDefinition",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update Custom Field Definition",
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
    "url": "/marketing/lists",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get All Lists",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "number",
        "required": false,
        "description": "Maximum number of elements to return. Defaults to 100, returns 1000 max",
        "default": 100
      },
      {
        "name": "pageToken",
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
    "url": "/marketing/lists",
    "method": "createNewList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create List",
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
    "url": "/marketing/lists/{id}",
    "method": "deleteList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Delete a list",
    "parameters": [
      {
        "name": "deleteContacts",
        "schema": "boolean",
        "required": false,
        "description": "Flag indicates that all contacts on the list are also to be deleted.",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The delete has been accepted and is processing."
      },
      {
        "statusCode": "204",
        "description": "The delete has been processed. "
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/lists/{id}",
    "method": "getListById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get a List by ID",
    "parameters": [
      {
        "name": "contactSample",
        "schema": "boolean",
        "description": "Setting this parameter to the true  will cause the contact_sample to be returned",
        "default": false
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
    "url": "/marketing/lists/{id}",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Update List",
    "parameters": [
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
    "url": "/marketing/lists/{id}/contacts",
    "method": "removeContactsFromList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Remove Contacts from a List",
    "parameters": [
      {
        "name": "contactIds",
        "schema": "string",
        "required": true,
        "description": "comma separated list of contact ids",
        "example": "CONTACT_IDS"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "The removal is accepted and processing."
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
    "url": "/marketing/lists/{id}/contacts/count",
    "method": "contactCountGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get List Contact Count",
    "parameters": [],
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
    "url": "/marketing/segments",
    "method": "listSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segmenting Contacts",
    "typeScriptTag": "segmentingContacts",
    "description": "Get List of Segments",
    "parameters": [
      {
        "name": "parentListIds",
        "schema": "string",
        "description": "A comma separated list of list ids to be used when searching for segments with the specified parent_list_id, no more than 50 is allowed"
      },
      {
        "name": "noParentListId",
        "schema": "boolean",
        "description": "If set to `true` segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present it defaults to 'false'.",
        "default": false
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/segments",
    "method": "createNewSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segmenting Contacts",
    "typeScriptTag": "segmentingContacts",
    "description": "Create Segment",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/segments/2.0",
    "method": "segments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segmenting Contacts V2 - Beta",
    "typeScriptTag": "segmentingContactsV2Beta",
    "description": "Get List of Segments",
    "parameters": [
      {
        "name": "parentListIds",
        "schema": "string",
        "required": false,
        "description": "A comma separated list up to 50 in size, to filter segments on.  Only segments that have any of these list ids as the parent list will be retrieved. This is different from the parameter of the same name used when creating a segment."
      },
      {
        "name": "noParentListId",
        "schema": "boolean",
        "required": false,
        "description": "If set to `true` segments with an empty value of `parent_list_id` will be returned in the filter.  If the value is not present it defaults to 'false'.",
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
        "description": "If the request is incorrect, an array of errors will be returned."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "If the request is incorrect, an array of errors will be returned."
      }
    ]
  },
  {
    "url": "/marketing/segments/2.0",
    "method": "segments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segmenting Contacts V2 - Beta",
    "typeScriptTag": "segmentingContactsV2Beta",
    "description": "Create Segment",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parent_list_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "query_dsl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY_DSL"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "If the request is incorrect, an array of errors will be returned."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "If the request is incorrect, an array of errors will be returned."
      }
    ]
  },
  {
    "url": "/marketing/segments/2.0/{segment_id}",
    "method": "deleteSegmentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segmenting Contacts V2 - Beta",
    "typeScriptTag": "segmentingContactsV2Beta",
    "description": "Delete segment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "If the request is incorrect, an array of errors will be returned."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "If the request is incorrect, an array of errors will be returned."
      }
    ]
  },
  {
    "url": "/marketing/segments/2.0/{segment_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segmenting Contacts V2 - Beta",
    "typeScriptTag": "segmentingContactsV2Beta",
    "description": "Get Segment by ID",
    "parameters": [
      {
        "name": "contactsSample",
        "schema": "boolean",
        "description": "Defaults to `true`. Set to `false` to exclude the contacts_sample in the response."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "If the request is incorrect, an array of errors will be returned."
      },
      {
        "statusCode": "500",
        "description": "If the request is incorrect, an array of errors will be returned."
      }
    ]
  },
  {
    "url": "/marketing/segments/2.0/{segment_id}",
    "method": "updateSegmentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Segmenting Contacts V2 - Beta",
    "typeScriptTag": "segmentingContactsV2Beta",
    "description": "Update Segment",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query_dsl",
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
        "description": "If the request is incorrect, an array of errors will be returned."
      },
      {
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": "If the request is incorrect, an array of errors will be returned."
      }
    ]
  },
  {
    "url": "/marketing/segments/delete",
    "method": "bulkDeleteSegments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segmenting Contacts",
    "typeScriptTag": "segmentingContacts",
    "description": "Bulk Delete Segments",
    "parameters": [
      {
        "name": "ids",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/segments/{segment_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segmenting Contacts",
    "typeScriptTag": "segmentingContacts",
    "description": "Delete Segment",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/segments/{segment_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segmenting Contacts",
    "typeScriptTag": "segmentingContacts",
    "description": "Get Segment by ID",
    "parameters": [
      {
        "name": "queryJson",
        "schema": "boolean",
        "description": "Defaults to `false`.  Set to `true` to return the parsed SQL AST as a JSON object in the field `query_json`"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/segments/{segment_id}",
    "method": "updateSegmentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Segmenting Contacts",
    "typeScriptTag": "segmentingContacts",
    "description": "Update Segment",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parent_list_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "query_dsl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUERY_DSL"
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/senders",
    "method": "createIdentity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Senders",
    "typeScriptTag": "senders",
    "description": "Create a Sender Identity",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "address_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRY"
      },
      {
        "name": "from",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NICKNAME"
      },
      {
        "name": "reply_to",
        "schema": "object",
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
        "name": "zip",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends",
    "method": "bulkDelete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Bulk Delete Single Sends",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "Single Send IDs to delete"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends",
    "method": "getAllSinglesends",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Get All Single Sends",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageToken",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends",
    "method": "createNewSingleSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Create Single Send",
    "parameters": [
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email_config",
        "schema": "object",
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
        "name": "send_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "send_to",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/categories",
    "method": "getAllCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Get All Categories",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/search",
    "method": "searchByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Get Single Sends Search",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": ""
      },
      {
        "name": "categories",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Delete Single Send by ID",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Get Single Send by ID",
    "parameters": [],
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Update Single Send",
    "parameters": [
      {
        "name": "categories",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "email_config",
        "schema": "object",
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
        "name": "send_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "send_to",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/{id}",
    "method": "duplicateSingleSend",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Duplicate Single Send",
    "parameters": [
      {
        "name": "name",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/{id}/schedule",
    "method": "cancelScheduledSend",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Delete Single Send Schedule",
    "parameters": [],
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/singlesends/{id}/schedule",
    "method": "schedulePut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Single Sends",
    "typeScriptTag": "singleSends",
    "description": "Schedule Single Send",
    "parameters": [
      {
        "name": "send_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEND_AT"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/stats/automations",
    "method": "getAllAutomationStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Get All Automation Stats",
    "parameters": [
      {
        "name": "automationIds",
        "schema": "array",
        "description": "This endpoint returns all automation IDs if no `automation_ids` are specified."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of elements you want returned on each page.",
        "default": 50
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page."
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
    "url": "/marketing/stats/automations/export",
    "method": "exportAutomationStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Export Automation Stats",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "The IDs of Automations for which to export stats."
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented; i.e. `\"America/Chicago\"`. This parameter changes the timezone format only; it does not alter which stats are returned.",
        "default": "UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CSV data"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/stats/automations/{id}",
    "method": "getStatsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Get Automation Stats by ID",
    "parameters": [
      {
        "name": "groupBy",
        "schema": "array",
        "description": "Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats."
      },
      {
        "name": "stepIds",
        "schema": "array",
        "description": "Comma-separated list of `step_ids` that you want the link stats for."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "description": "Dictates how the stats are time-sliced. Currently, `\"total\"` and `\"day\"` are supported.",
        "default": "total"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Format: `YYYY-MM-DD`. If this parameter is included, the stats' start date is included in the search.",
        "default": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Format: `YYYY-MM-DD`.If this parameter is included, the stats' end date is included in the search.",
        "default": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "[IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented, e.g., \"America/Chicago\".",
        "default": "UTC"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of elements you want returned on each page.",
        "default": 50
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page."
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
    "url": "/marketing/stats/automations/{id}/links",
    "method": "getAutomationLinkStat",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Get Automation Click Tracking Stats by ID",
    "parameters": [
      {
        "name": "groupBy",
        "schema": "array",
        "description": "Automations can have multiple steps. Including `step_id` as a `group_by` metric allows further granularity of stats."
      },
      {
        "name": "stepIds",
        "schema": "array",
        "description": "Comma-separated list of `step_ids` that you want the link stats for."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of elements you want returned on each page.",
        "default": 50
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page."
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
    "url": "/marketing/stats/singlesends",
    "method": "getAllSingleSendsStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Get All Single Sends Stats",
    "parameters": [
      {
        "name": "singlesendIds",
        "schema": "array",
        "description": "This endpoint returns all Single Send IDs if no IDs are included in `singlesend_ids`."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of elements you want returned on each page.",
        "default": 50
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page."
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
    "url": "/marketing/stats/singlesends/export",
    "method": "exportSingleSendStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Export Single Send Stats",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": "The IDs of Single Sends for which to export stats."
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "The [IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented; i.e. `\"America/Chicago\"`. This parameter changes the timezone format only; it does not alter which stats are returned.",
        "default": "UTC"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CSV data"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/stats/singlesends/{id}",
    "method": "getSingleSendStatsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Get Single Send Stats by ID",
    "parameters": [
      {
        "name": "aggregatedBy",
        "schema": "string",
        "description": "Dictates how the stats are time-sliced. Currently, `\"total\"` and `\"day\"` are supported.",
        "default": "total"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Format: `YYYY-MM-DD`. If this parameter is included, the stats' start date is included in the search.",
        "default": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Format: `YYYY-MM-DD`.If this parameter is included, the stats' end date is included in the search.",
        "default": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": "[IANA Area/Region](https://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones) string representing the timezone in which the stats are to be presented, e.g., \"America/Chicago\".",
        "default": "UTC"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of elements you want returned on each page.",
        "default": 50
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page."
      },
      {
        "name": "groupBy",
        "schema": "array",
        "description": "A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields."
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
    "url": "/marketing/stats/singlesends/{id}/links",
    "method": "getSingleSendLinkStatById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Marketing Campaigns Stats",
    "typeScriptTag": "marketingCampaignsStats",
    "description": "Get Single Send Click Tracking Stats by ID",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of elements you want returned on each page.",
        "default": 50
      },
      {
        "name": "pageToken",
        "schema": "string",
        "description": "The stats endpoints are paginated. To get the next page, call the passed `_metadata.next` URL. If `_metadata.prev` doesn't exist, you're at the first page. Similarly, if `_metadata.next` is not present, you're at the last page."
      },
      {
        "name": "groupBy",
        "schema": "array",
        "description": "A/B Single Sends have multiple variation IDs and phase IDs. Including these additional fields allows further granularity of stats by these fields."
      },
      {
        "name": "abVariationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "abPhaseId",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/marketing/test/send_email",
    "method": "toContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Send Test Email",
    "typeScriptTag": "sendTestEmail",
    "description": "Send a Test Marketing Email",
    "parameters": [
      {
        "name": "custom_unsubscribe_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "from_address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sender_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "suppression_group_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "template_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE_ID"
      },
      {
        "name": "version_id_override",
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
      }
    ]
  },
  {
    "url": "/messages",
    "method": "filterMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Query",
    "typeScriptTag": "query",
    "description": "Filter all messages",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "Use the query syntax  to filter your email activity.",
        "example": "QUERY"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "The number of messages returned. This parameter must be greater than 0 and less than or equal to 1000",
        "default": 10
      },
      {
        "name": "xQueryId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "xCursor",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/download",
    "method": "requestCsvDownload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CSV (UI only)",
    "typeScriptTag": "csvUiOnly",
    "description": "Request CSV",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Uses a SQL like syntax to indicate which messages to include in the CSV"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/download/{download_uuid}",
    "method": "generateCsvDownloadUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CSV (UI only)",
    "typeScriptTag": "csvUiOnly",
    "description": "Download CSV",
    "parameters": [],
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{msg_id}",
    "method": "messageDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Query",
    "typeScriptTag": "query",
    "description": "Filter messages by message ID",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/partner_settings",
    "method": "listPartnerSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Partner",
    "typeScriptTag": "settingsPartner",
    "description": "Returns a list of all partner settings.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of settings to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The paging offset."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/partner_settings/new_relic",
    "method": "getAllNewRelicPartnerSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Partner",
    "typeScriptTag": "settingsPartner",
    "description": "Returns all New Relic partner settings.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/partner_settings/new_relic",
    "method": "updateNewRelicPartnerSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Partner",
    "typeScriptTag": "settingsPartner",
    "description": "Updates New Relic partner settings.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enable_subuser_statistics",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "license_key",
        "schema": "string",
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
    "url": "/scopes",
    "method": "scopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Key Permissions",
    "typeScriptTag": "apiKeyPermissions",
    "description": "Retrieve a list of scopes for which this user has access.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/scopes/requests",
    "method": "getAccessRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Retrieve access requests",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Optional field to limit the number of results returned.",
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Optional beginning point in the list to retrieve from.",
        "default": 0
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
    "url": "/scopes/requests/{request_id}",
    "method": "denyAccessRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Deny access request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/scopes/requests/{request_id}/approve",
    "method": "approveAccessRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Approve access request",
    "parameters": [],
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
    "url": "/senders",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Identities API",
    "typeScriptTag": "senderIdentitiesApi",
    "description": "Get all Sender Identities",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/senders",
    "method": "senders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sender Identities API",
    "typeScriptTag": "senderIdentitiesApi",
    "description": "Create a Sender Identity",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/senders/{sender_id}",
    "method": "deleteSenderIdentity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sender Identities API",
    "typeScriptTag": "senderIdentitiesApi",
    "description": "Delete a Sender Identity",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/senders/{sender_id}",
    "method": "viewSenderIdentity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Identities API",
    "typeScriptTag": "senderIdentitiesApi",
    "description": "View a Sender Identity",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/senders/{sender_id}",
    "method": "updateSenderIdentity",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sender Identities API",
    "typeScriptTag": "senderIdentitiesApi",
    "description": "Update a Sender Identity",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address_2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reply_to",
        "schema": "object",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip",
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
    "url": "/senders/{sender_id}/resend_verification",
    "method": "resendVerificationEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sender Identities API",
    "typeScriptTag": "senderIdentitiesApi",
    "description": "Resend Sender Identity Verification",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/sso/certificates",
    "method": "createSsoCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Create an SSO Certificate",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "integration_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTEGRATION_ID"
      },
      {
        "name": "public_certificate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PUBLIC_CERTIFICATE"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/certificates/{cert_id}",
    "method": "deleteSsoCertificate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Delete an SSO Certificate",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/certificates/{cert_id}",
    "method": "getIndividual",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Get an SSO Certificate",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/certificates/{cert_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Update SSO Certificate",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "integration_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "public_certificate",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/integrations",
    "method": "getAllSsoIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Sign-On Settings",
    "typeScriptTag": "singleSignOnSettings",
    "description": "Get All SSO Integrations",
    "parameters": [
      {
        "name": "si",
        "schema": "boolean",
        "description": "If this parameter is set to `true`, the response will include the `completed_integration` field."
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/integrations",
    "method": "createIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Sign-On Settings",
    "typeScriptTag": "singleSignOnSettings",
    "description": "Create an SSO Integration",
    "parameters": [
      {
        "name": "completed_integration",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "entity_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "signin_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNIN_URL"
      },
      {
        "name": "signout_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNOUT_URL"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/integrations/{id}",
    "method": "deleteIntegrationById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Single Sign-On Settings",
    "typeScriptTag": "singleSignOnSettings",
    "description": "Delete an SSO Integration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/integrations/{id}",
    "method": "getSsoIntegrationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Sign-On Settings",
    "typeScriptTag": "singleSignOnSettings",
    "description": "Get an SSO Integration",
    "parameters": [
      {
        "name": "si",
        "schema": "boolean",
        "description": "If this parameter is set to `true`, the response will include the `completed_integration` field."
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/integrations/{id}",
    "method": "updateIntegration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Single Sign-On Settings",
    "typeScriptTag": "singleSignOnSettings",
    "description": "Update an SSO Integration",
    "parameters": [
      {
        "name": "si",
        "schema": "boolean",
        "description": "If this parameter is set to `true`, the response will include the `completed_integration` field."
      },
      {
        "name": "completed_integration",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "entity_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "signin_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNIN_URL"
      },
      {
        "name": "signout_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SIGNOUT_URL"
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/integrations/{integration_id}/certificates",
    "method": "getByIdpConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Get All SSO Certificates by Integration",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/teammates",
    "method": "createTeammate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Single Sign-On Teammates",
    "typeScriptTag": "singleSignOnTeammates",
    "description": "Create SSO Teammate",
    "parameters": [],
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/sso/teammates/{username}",
    "method": "editTeammate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Single Sign-On Teammates",
    "typeScriptTag": "singleSignOnTeammates",
    "description": "Edit an SSO Teammate",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_admin",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats",
    "method": "stats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve global email statistics",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
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
    "url": "/subusers",
    "method": "subusers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subusers API",
    "typeScriptTag": "subusersApi",
    "description": "List all Subusers",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": "The username of this subuser."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results you would like to get in each request."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The number of subusers to skip."
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
      }
    ]
  },
  {
    "url": "/subusers",
    "method": "subusers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subusers API",
    "typeScriptTag": "subusersApi",
    "description": "Create Subuser",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "ips",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subusers/reputations",
    "method": "getSubuserReputations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subusers API",
    "typeScriptTag": "subusersApi",
    "description": "Retrieve Subuser Reputations",
    "parameters": [
      {
        "name": "usernames",
        "schema": "string",
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
    "url": "/subusers/stats",
    "method": "getEmailStatsForSubusers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subuser Statistics",
    "typeScriptTag": "subuserStatistics",
    "description": "Retrieve email statistics for your subusers.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limits the number of results returned per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results from."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Must be either \"day\", \"week\", or \"month\"."
      },
      {
        "name": "subusers",
        "schema": "string",
        "required": true,
        "description": "The subuser you want to retrieve statistics for. You may include this parameter up to 10 times to retrieve statistics for multiple subusers.",
        "example": "SUBUSERS"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today."
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
    "url": "/subusers/stats/monthly",
    "method": "getMonthlyStatsForAllSubusers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subuser Statistics",
    "typeScriptTag": "subuserStatistics",
    "description": "Retrieve monthly stats for all subusers",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD",
        "example": "DATE"
      },
      {
        "name": "subuser",
        "schema": "string",
        "required": false,
        "description": "A substring search of your subusers."
      },
      {
        "name": "sortByMetric",
        "schema": "string",
        "required": false,
        "description": "The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'",
        "default": "delivered"
      },
      {
        "name": "sortByDirection",
        "schema": "string",
        "required": false,
        "description": "The direction you want to sort.",
        "default": "desc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Optional field to limit the number of results returned.",
        "default": 5
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Optional beginning point in the list to retrieve from.",
        "default": 0
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
    "url": "/subusers/stats/sums",
    "method": "getEmailStatsForSubusers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subuser Statistics",
    "typeScriptTag": "subuserStatistics",
    "description": "Retrieve the totals for each email statistic metric for all subusers.",
    "parameters": [
      {
        "name": "sortByDirection",
        "schema": "string",
        "required": false,
        "description": "The direction you want to sort. ",
        "default": "desc"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics to retrieve. Must follow format YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics to retrieve. Defaults to today. Must follow format YYYY-MM-DD."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limits the number of results returned per page.",
        "default": 5
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The point in the list to begin retrieving results from.",
        "default": 0
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How to group the statistics. Defaults to today. Must follow format YYYY-MM-DD."
      },
      {
        "name": "sortByMetric",
        "schema": "string",
        "required": false,
        "description": "The metric that you want to sort by.  Must be a single metric.",
        "default": "delivered"
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
    "url": "/subusers/{subuser_name}",
    "method": "deleteSubuser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subusers API",
    "typeScriptTag": "subusersApi",
    "description": "Delete a subuser",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/subusers/{subuser_name}",
    "method": "updateSubuserEnableState",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Subusers API",
    "typeScriptTag": "subusersApi",
    "description": "Enable/disable a subuser",
    "parameters": [
      {
        "name": "disabled",
        "schema": "boolean",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/subusers/{subuser_name}/ips",
    "method": "updateSubuserIps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subusers API",
    "typeScriptTag": "subusersApi",
    "description": "Update IPs assigned to a subuser",
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
    "url": "/subusers/{subuser_name}/monitor",
    "method": "deleteMonitorSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subuser Monitor Settings",
    "typeScriptTag": "subuserMonitorSettings",
    "description": "Delete monitor settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/subusers/{subuser_name}/monitor",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subuser Monitor Settings",
    "typeScriptTag": "subuserMonitorSettings",
    "description": "Retrieve monitor settings for a subuser",
    "parameters": [],
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
    "url": "/subusers/{subuser_name}/monitor",
    "method": "createSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subuser Monitor Settings",
    "typeScriptTag": "subuserMonitorSettings",
    "description": "Create monitor settings",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "frequency",
        "schema": "number",
        "required": true,
        "description": "",
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
      }
    ]
  },
  {
    "url": "/subusers/{subuser_name}/monitor",
    "method": "updateForSubuserNameMonitor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subuser Monitor Settings",
    "typeScriptTag": "subuserMonitorSettings",
    "description": "Update Monitor Settings for a subuser",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "frequency",
        "schema": "number",
        "required": true,
        "description": "",
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
      }
    ]
  },
  {
    "url": "/subusers/{subuser_name}/stats/monthly",
    "method": "getMonthlyEmailStatsForSingleSubuser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subuser Statistics",
    "typeScriptTag": "subuserStatistics",
    "description": "Retrieve the monthly email statistics for a single subuser",
    "parameters": [
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The date of the month to retrieve statistics for. Must be formatted YYYY-MM-DD",
        "example": "DATE"
      },
      {
        "name": "sortByMetric",
        "schema": "string",
        "required": false,
        "description": "The metric that you want to sort by. Metrics that you can sort by are: `blocks`, `bounces`, `clicks`, `delivered`, `opens`, `requests`, `unique_clicks`, `unique_opens`, and `unsubscribes`.'",
        "default": "delivered"
      },
      {
        "name": "sortByDirection",
        "schema": "string",
        "required": false,
        "description": "The direction you want to sort.",
        "default": "desc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Optional field to limit the number of results returned.",
        "default": 5
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Optional beginning point in the list to retrieve from.",
        "default": 0
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
    "url": "/suppression/blocks",
    "method": "deleteAllBlockedEmails",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Blocks API",
    "typeScriptTag": "blocksApi",
    "description": "Delete blocks",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "delete_all",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/blocks",
    "method": "getAllEmailAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blocks API",
    "typeScriptTag": "blocksApi",
    "description": "Retrieve all blocks",
    "parameters": [
      {
        "name": "startTime",
        "schema": "integer",
        "description": "The start of the time range when a blocked email was created (inclusive). This is a unix timestamp."
      },
      {
        "name": "endTime",
        "schema": "integer",
        "description": "The end of the time range when a blocked email was created (inclusive). This is a unix timestamp."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of results to be displayed per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The point in the list to begin displaying results."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/suppression/blocks/{email}",
    "method": "deleteSpecificBlock",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Blocks API",
    "typeScriptTag": "blocksApi",
    "description": "Delete a specific block",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/blocks/{email}",
    "method": "getSpecificBlock",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Blocks API",
    "typeScriptTag": "blocksApi",
    "description": "Retrieve a specific block",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/suppression/bounces",
    "method": "deleteBounces",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Delete bounces",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "delete_all",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/bounces",
    "method": "getAllBounces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Retrieve all bounces",
    "parameters": [
      {
        "name": "startTime",
        "schema": "integer",
        "description": "Refers start of the time range in unix timestamp when a bounce was created (inclusive)."
      },
      {
        "name": "endTime",
        "schema": "integer",
        "description": "Refers end of the time range in unix timestamp when a bounce was created (inclusive)."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/suppression/bounces/{email}",
    "method": "removeBounce",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Delete a bounce",
    "parameters": [
      {
        "name": "emailAddress",
        "schema": "string",
        "required": true,
        "description": "The email address you would like to remove from the bounce list.",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/bounces/{email}",
    "method": "getByEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Retrieve a Bounce",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/suppression/invalid_emails",
    "method": "deleteInvalidEmails",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invalid Emails API",
    "typeScriptTag": "invalidEmailsApi",
    "description": "Delete invalid emails",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "delete_all",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/invalid_emails",
    "method": "getAllInvalidEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invalid Emails API",
    "typeScriptTag": "invalidEmailsApi",
    "description": "Retrieve all invalid emails",
    "parameters": [
      {
        "name": "startTime",
        "schema": "integer",
        "description": "Refers start of the time range in unix timestamp when an invalid email was created (inclusive)."
      },
      {
        "name": "endTime",
        "schema": "integer",
        "description": "Refers end of the time range in unix timestamp when an invalid email was created (inclusive)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of results to be displayed per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Paging offset. The point in the list to begin displaying results."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The list of invalid email addresses."
      }
    ]
  },
  {
    "url": "/suppression/invalid_emails/{email}",
    "method": "removeSpecificEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Invalid Emails API",
    "typeScriptTag": "invalidEmailsApi",
    "description": "Delete a specific invalid email",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/invalid_emails/{email}",
    "method": "getSpecificInvalidEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Invalid Emails API",
    "typeScriptTag": "invalidEmailsApi",
    "description": "Retrieve a specific invalid email",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A specific invalid email."
      }
    ]
  },
  {
    "url": "/suppression/spam_reports",
    "method": "deleteReports",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Spam Reports API",
    "typeScriptTag": "spamReportsApi",
    "description": "Delete spam reports",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "delete_all",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/spam_reports",
    "method": "getAllReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spam Reports API",
    "typeScriptTag": "spamReportsApi",
    "description": "Retrieve all spam reports",
    "parameters": [
      {
        "name": "startTime",
        "schema": "integer",
        "description": "The start of the time range when a spam report was created (inclusive). This is a unix timestamp."
      },
      {
        "name": "endTime",
        "schema": "integer",
        "description": "The end of the time range when a spam report was created (inclusive). This is a unix timestamp."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit the number of results to be displayed per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Paging offset. The point in the list to begin displaying results."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/suppression/spam_reports/{email}",
    "method": "deleteSpecificReportByEmailAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Spam Reports API",
    "typeScriptTag": "spamReportsApi",
    "description": "Delete a specific spam report",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/suppression/spam_reports/{email}",
    "method": "getSpecificReportByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spam Reports API",
    "typeScriptTag": "spamReportsApi",
    "description": "Retrieve a specific spam report",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/suppression/unsubscribes",
    "method": "getAllAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Suppressions - Global Suppressions",
    "typeScriptTag": "suppressionsGlobalSuppressions",
    "description": "Retrieve all global suppressions",
    "parameters": [
      {
        "name": "startTime",
        "schema": "integer",
        "description": "Refers start of the time range in unix timestamp when an unsubscribe email was created (inclusive)."
      },
      {
        "name": "endTime",
        "schema": "integer",
        "description": "Refers end of the time range in unix timestamp when an unsubscribe email was created (inclusive)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results to display on each page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The point in the list of results to begin displaying global suppressions."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/teammates",
    "method": "getAllTeammates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Retrieve all teammates",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of items to return",
        "default": 500
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Paging offset",
        "default": 0
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/teammates",
    "method": "inviteTeammate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Invite teammate",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "is_admin",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "scopes",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/teammates/pending",
    "method": "getAllPending",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Retrieve all pending teammates",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/teammates/pending/{token}",
    "method": "deletePendingTeammate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Delete pending teammate",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/teammates/pending/{token}/resend",
    "method": "resendTeammateInvite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Resend teammate invite",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/teammates/{username}",
    "method": "removeTeammate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Delete teammate",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/teammates/{username}",
    "method": "getByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Retrieve specific teammate",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/teammates/{username}",
    "method": "updatePermissions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teammates",
    "typeScriptTag": "teammates",
    "description": "Update teammate's permissions",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "is_admin",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "scopes",
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates",
    "method": "templates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Templates",
    "typeScriptTag": "transactionalTemplates",
    "description": "Retrieve paged transactional templates.",
    "parameters": [
      {
        "name": "generations",
        "schema": "string",
        "required": false,
        "description": "Comma-delimited list specifying which generations of templates to return. Options are `legacy`, `dynamic` or `legacy,dynamic`.",
        "default": "legacy"
      },
      {
        "name": "pageSize",
        "schema": "number",
        "required": true,
        "description": "The number of templates to be returned in each page of results",
        "example": 0
      },
      {
        "name": "pageToken",
        "schema": "string",
        "required": false,
        "description": "A token corresponding to a specific page of results, as provided by metadata"
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/templates",
    "method": "templates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Templates",
    "typeScriptTag": "transactionalTemplates",
    "description": "Create a transactional template.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "generation",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "legacy"
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_id}",
    "method": "deleteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional Templates",
    "typeScriptTag": "transactionalTemplates",
    "description": "Delete a template.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_id}",
    "method": "getSingleTemplate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Templates",
    "typeScriptTag": "transactionalTemplates",
    "description": "Retrieve a single transactional template.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/templates/{template_id}",
    "method": "editTemplateName",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transactional Templates",
    "typeScriptTag": "transactionalTemplates",
    "description": "Edit a transactional template.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/templates/{template_id}",
    "method": "duplicateTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Templates",
    "typeScriptTag": "transactionalTemplates",
    "description": "Duplicate a transactional template.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_id}/versions",
    "method": "createNewVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Templates Versions",
    "typeScriptTag": "transactionalTemplatesVersions",
    "description": "Create a new transactional template version.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "active",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "generate_plain_content",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "html_content",
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
        "name": "plain_content",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "<generated from html_content if left empty>"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "test_data",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_id}/versions/{version_id}",
    "method": "deleteTemplateVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Transactional Templates Versions",
    "typeScriptTag": "transactionalTemplatesVersions",
    "description": "Delete a transactional template version.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{template_id}/versions/{version_id}",
    "method": "getSpecificVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional Templates Versions",
    "typeScriptTag": "transactionalTemplatesVersions",
    "description": "Retrieve a specific transactional template version.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/templates/{template_id}/versions/{version_id}",
    "method": "editContent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Transactional Templates Versions",
    "typeScriptTag": "transactionalTemplatesVersions",
    "description": "Edit a transactional template version.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "active",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "editor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "generate_plain_content",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "html_content",
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
        "name": "plain_content",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "<generated from html_content if left empty>"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "test_data",
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
    "url": "/templates/{template_id}/versions/{version_id}/activate",
    "method": "activateVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactional Templates Versions",
    "typeScriptTag": "transactionalTemplatesVersions",
    "description": "Activate a transactional template version.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/tracking_settings",
    "method": "getAllTracking",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Retrieve Tracking Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/tracking_settings/click",
    "method": "getClickTrackingSetting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Retrieve Click Track Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/tracking_settings/click",
    "method": "updateClickTrackingSetting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Update Click Tracking Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/tracking_settings/google_analytics",
    "method": "getGoogleAnalyticsSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Retrieve Google Analytics Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/tracking_settings/google_analytics",
    "method": "updateGoogleAnalyticsSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Update Google Analytics Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "utm_campaign",
        "schema": "string",
        "description": ""
      },
      {
        "name": "utm_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "utm_medium",
        "schema": "string",
        "description": ""
      },
      {
        "name": "utm_source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "utm_term",
        "schema": "string",
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
    "url": "/tracking_settings/open",
    "method": "getOpenSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Get Open Tracking Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/tracking_settings/open",
    "method": "updateOpenTrackingSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Update Open Tracking Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/tracking_settings/subscription",
    "method": "getSubscriptionTrackingSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Retrieve Subscription Tracking Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/tracking_settings/subscription",
    "method": "updateSubscriptionTrackingSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Tracking",
    "typeScriptTag": "settingsTracking",
    "description": "Update Subscription Tracking Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "html_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "landing",
        "schema": "string",
        "description": ""
      },
      {
        "name": "plain_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "replace",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
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
    "url": "/user/account",
    "method": "getUserAccountInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Get a user's account information.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/credits",
    "method": "getCreditBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Retrieve your credit balance",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/email",
    "method": "getAccountEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Retrieve your account email address",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/email",
    "method": "updateEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Update your account email address",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
      }
    ]
  },
  {
    "url": "/user/password",
    "method": "updatePassword",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Update your password",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "new_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_PASSWORD"
      },
      {
        "name": "old_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OLD_PASSWORD"
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
    "url": "/user/profile",
    "method": "getUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Get a user's profile",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/profile",
    "method": "updateUserProfile",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Update a user's profile",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zip",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/scheduled_sends",
    "method": "allScheduledSends",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Retrieve all scheduled sends",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/scheduled_sends",
    "method": "byBatchIdStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Cancel or pause a scheduled send",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "batch_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH_ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "pause"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/scheduled_sends/{batch_id}",
    "method": "cancellationPause",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Delete a cancellation or pause from a scheduled send",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/scheduled_sends/{batch_id}",
    "method": "byBatchId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Retrieve scheduled send",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/scheduled_sends/{batch_id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Cancel Scheduled Sends",
    "typeScriptTag": "cancelScheduledSends",
    "description": "Update a scheduled send",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/settings/enforced_tls",
    "method": "getCurrentEnforcedTlsSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Enforced TLS",
    "typeScriptTag": "settingsEnforcedTls",
    "description": "Retrieve current Enforced TLS settings.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/settings/enforced_tls",
    "method": "updateEnforcedTlsSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Enforced TLS",
    "typeScriptTag": "settingsEnforcedTls",
    "description": "Update Enforced TLS settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "require_tls",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "require_valid_cert",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/username",
    "method": "getUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Retrieve your username",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/username",
    "method": "updateUsername",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users API",
    "typeScriptTag": "usersApi",
    "description": "Update your username",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "username",
        "schema": "string",
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
    "url": "/user/webhooks/event/settings",
    "method": "getEventSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve Event Webhook settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/webhooks/event/settings",
    "method": "updateEventNotificationSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update Event Notification Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "bounce",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "click",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "deferred",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "delivered",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "dropped",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "group_resubscribe",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "group_unsubscribe",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "oauth_client_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "oauth_client_secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "oauth_token_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "open",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "processed",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "spam_report",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "unsubscribe",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
      }
    ]
  },
  {
    "url": "/user/webhooks/event/settings/signed",
    "method": "getSignedWebhookPublicKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve Signed Webhook Public Key",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/user/webhooks/event/settings/signed",
    "method": "enableSignedWebhook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Enable/Disable Signed Webhook",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "enabled",
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
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/event/test",
    "method": "testEventNotificationSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Test Event Notification Settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "oauth_client_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "oauth_client_secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "oauth_token_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/parse/settings",
    "method": "getParseSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve all parse settings",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/parse/settings",
    "method": "createSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Settings - Inbound Parse",
    "typeScriptTag": "settingsInboundParse",
    "description": "Create a parse setting",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "hostname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "send_raw",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "spam_check",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "url",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/parse/settings/{hostname}",
    "method": "deleteSettingByHostname",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings - Inbound Parse",
    "typeScriptTag": "settingsInboundParse",
    "description": "Delete a parse setting",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/parse/settings/{hostname}",
    "method": "getSpecificParseSettingByHostname",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings - Inbound Parse",
    "typeScriptTag": "settingsInboundParse",
    "description": "Retrieve a specific parse setting",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/parse/settings/{hostname}",
    "method": "updateHostnameSetting",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings - Inbound Parse",
    "typeScriptTag": "settingsInboundParse",
    "description": "Update a parse setting",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "hostname",
        "schema": "string",
        "description": ""
      },
      {
        "name": "send_raw",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "spam_check",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "url",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/webhooks/parse/stats",
    "method": "getParseStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieves Inbound Parse Webhook statistics.",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "The number of statistics to return on each page."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The number of statistics to skip."
      },
      {
        "name": "aggregatedBy",
        "schema": "string",
        "required": false,
        "description": "How you would like the statistics to by grouped. "
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The starting date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "The end date of the statistics you want to retrieve. Must be in the format YYYY-MM-DD",
        "default": "The day the request is made."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/validations/email",
    "method": "checkValidity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email Address Validation",
    "typeScriptTag": "emailAddressValidation",
    "description": "Validate an email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "source",
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
    "url": "/verified_senders",
    "method": "getAllSenderIdentities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Get All Verified Senders",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": ""
      },
      {
        "name": "lastSeenId",
        "schema": "number",
        "description": ""
      },
      {
        "name": "id",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders",
    "method": "createVerifiedSenderRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Create Verified Sender Request",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "from_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_EMAIL"
      },
      {
        "name": "from_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NICKNAME"
      },
      {
        "name": "reply_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPLY_TO"
      },
      {
        "name": "reply_to_name",
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
        "name": "zip",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders/domains",
    "method": "listDomainWarn",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Domain Warn List",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders/resend/{id}",
    "method": "resendVerificationEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Resend Verified Sender Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders/steps_completed",
    "method": "determineVerificationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Completed Steps",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders/verify/{token}",
    "method": "requestVerificationToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Verify Sender Request",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders/{id}",
    "method": "deleteVerifiedSender",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Delete Verified Sender",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/verified_senders/{id}",
    "method": "updateSenderIdentity",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sender Verification",
    "typeScriptTag": "senderVerification",
    "description": "Edit Verified Sender",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "from_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM_EMAIL"
      },
      {
        "name": "from_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nickname",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NICKNAME"
      },
      {
        "name": "reply_to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPLY_TO"
      },
      {
        "name": "reply_to_name",
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
        "name": "zip",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/dns/email",
    "method": "sendDnsEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Email CNAME records",
    "typeScriptTag": "emailCnameRecords",
    "description": "Email DNS records to a co-worker",
    "parameters": [
      {
        "name": "domain_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "link_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "Please set these DNS records in our hosting solution."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/domains",
    "method": "getAllDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "List all authenticated domains",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of domains to return."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Paging offset."
      },
      {
        "name": "excludeSubusers",
        "schema": "boolean",
        "description": "Exclude subuser domains from the result."
      },
      {
        "name": "username",
        "schema": "string",
        "description": "The username associated with an authenticated domain."
      },
      {
        "name": "domain",
        "schema": "string",
        "description": "Search for authenticated domains."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/domains",
    "method": "postAuthenticateDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Authenticate a domain",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "automatic_security",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_dkim_selector",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_spf",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "ips",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/domains/default",
    "method": "getDefaultAuthentication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Get the default authentication",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "description": "The domain to find a default authentication."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/domains/subuser",
    "method": "disassociateDomainFromSubuser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Disassociate an authenticated domain from a given user.",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": "Username for the subuser to find associated authenticated domain."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/domains/subuser",
    "method": "listSubuserDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "List the authenticated domain associated with the given user.",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "Username for the subuser to find associated authenticated domain.",
        "example": "USERNAME"
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
    "url": "/whitelabel/domains/{domain_id}",
    "method": "deleteAuthenticatedDomain",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Delete an authenticated domain.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/domains/{domain_id}",
    "method": "getSpecificDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Retrieve an authenticated domain",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/domains/{domain_id}",
    "method": "updateDomainSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Update an authenticated domain",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "custom_spf",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": "",
        "default": false
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
    "url": "/whitelabel/domains/{domain_id}/subuser",
    "method": "associateSubuserWithDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Associate an authenticated domain with a given user.",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/domains/{id}/ips",
    "method": "addIpToDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Add an IP to an authenticated domain",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IP"
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
    "url": "/whitelabel/domains/{id}/ips/{ip}",
    "method": "removeIp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Remove an IP from an authenticated domain.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/domains/{id}/validate",
    "method": "validateDomain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Domain Authentication",
    "typeScriptTag": "domainAuthentication",
    "description": "Validate a domain authentication.",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/ips",
    "method": "getAllReverseDnsRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reverse DNS",
    "typeScriptTag": "reverseDns",
    "description": "Retrieve all reverse DNS records",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of results to retrieve."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The point in the list of results to begin retrieving IP addresses from."
      },
      {
        "name": "ip",
        "schema": "string",
        "description": "The IP address segment that you'd like to use in a prefix search."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/ips",
    "method": "setUpReverseDns",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reverse DNS",
    "typeScriptTag": "reverseDns",
    "description": "Set up reverse DNS",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IP"
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/ips/{id}",
    "method": "deleteReverseDnsRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reverse DNS",
    "typeScriptTag": "reverseDns",
    "description": "Delete a reverse DNS record",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/ips/{id}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reverse DNS",
    "typeScriptTag": "reverseDns",
    "description": "Retrieve a reverse DNS record",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/ips/{id}/validate",
    "method": "validateRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reverse DNS",
    "typeScriptTag": "reverseDns",
    "description": "Validate a reverse DNS record",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/links",
    "method": "getBrandedLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Retrieve all branded links",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limits the number of results returned per page."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/links",
    "method": "createBrandedLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Create a branded link",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "default",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "subdomain",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/links/default",
    "method": "getDefaultBrandedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Retrieve the default branded link",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "description": "The domain to match against when finding the default branded link."
      },
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/links/subuser",
    "method": "disassociateBrandedLinkFromSubuser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Disassociate a branded link from a subuser",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The username of the subuser account that you want to disassociate a branded link from.",
        "example": "USERNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/links/subuser",
    "method": "getSubuserBrandedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Retrieve a subuser's branded link",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "The username of the subuser to retrieve associated branded links for.",
        "example": "USERNAME"
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
    "url": "/whitelabel/links/{id}",
    "method": "deleteBrandedLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Delete a branded link",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/links/{id}",
    "method": "getBrandedLinkById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Retrieve a branded link",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
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
    "url": "/whitelabel/links/{id}",
    "method": "updateBrandedLink",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Update a branded link",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      },
      {
        "name": "default",
        "schema": "boolean",
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
    "url": "/whitelabel/links/{id}/validate",
    "method": "validateBrandedLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Validate a branded link",
    "parameters": [
      {
        "name": "onBehalfOf",
        "schema": "string",
        "description": "",
        "default": "The subuser's username. This header generates the API call as if the subuser account was making the call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/whitelabel/links/{link_id}/subuser",
    "method": "associateBrandedLinkWithSubuser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Link branding",
    "typeScriptTag": "linkBranding",
    "description": "Associate a branded link with a subuser",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
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
      apiTitle="Email Activity (beta)"
      apiBaseUrl="http://api.sendgrid.com/v3"
      apiVersion="1.0.0"
      endpoints={201}
      sdkMethods={419}
      schemas={545}
      parameters={781}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sendgrid/openapi.yaml"
    />
  );
}
  