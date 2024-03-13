import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function TerminalTypeScriptSdk() {
  return (
    <Sdk
      sdkName="terminal-typescript-sdk"
      metaDescription="Terminal is Plaid for Telematics in commercial trucking. Companies building the next generation of insurance products, financial services and fleet software for trucking use our Universal API to access GPS data, speeding data and vehicle stats.Check us out at https://withterminal.com"
      company="Terminal"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/logo.png"
      clientNameCamelCase="terminal"
      homepage="withterminal.com"
      lastUpdated={new Date("2024-03-13T01:59:29.812Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["developer_tools","telematics","trucking","universal_api","gps_data","speeding_data","vehicle_stats"]}
      methods={[
  {
    "url": "/public-token/exchange",
    "method": "exchangeToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Public Token Exchange",
    "parameters": [
      {
        "name": "publicToken",
        "schema": "string",
        "description": "",
        "example": "INSERT_PUBLIC_TOKEN"
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
    "url": "/connections",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "List All Connections",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "123"
      },
      {
        "name": "dotNumber",
        "schema": "string",
        "description": "",
        "example": "123"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter connections by tag",
        "example": "tempor in aliqua"
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
    "url": "/connections",
    "method": "createCustomConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Create Connection",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "Tag Name",
          "Tag Name"
        ]
      },
      {
        "name": "backfill",
        "schema": "object",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "credentials",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "ullamco dolore ipsum"
      },
      {
        "name": "provider",
        "schema": "string",
        "description": "",
        "example": "geotab"
      },
      {
        "name": "syncMode",
        "schema": "string",
        "description": "",
        "example": "automatic"
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
    "url": "/connections/current",
    "method": "getCurrentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Get Current Connection",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/connections/current",
    "method": "updateCurrentConnectionDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Connections",
    "typeScriptTag": "connections",
    "description": "Update Current Connection",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": [
          "dolor in magna",
          "reprehenderit dolor nostrud"
        ]
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "",
        "example": "ad sed dolore cupidatat"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "laborum sed consectetur"
      },
      {
        "name": "syncMode",
        "schema": "string",
        "description": "",
        "example": "automatic"
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
    "url": "/syncs",
    "method": "listSyncHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "List Sync History",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "in_progress"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand related resources in the response to reduce requests.",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/syncs",
    "method": "requestSyncManual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "Request Sync",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
      },
      {
        "name": "days",
        "schema": "number",
        "description": "",
        "example": 7
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
    "url": "/syncs/{id}",
    "method": "getSyncStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "Get Sync Job Status",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand related resources in the response to reduce requests.",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/passthrough",
    "method": "makePassthroughRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Management",
    "typeScriptTag": "dataManagement",
    "description": "Passthrough",
    "parameters": [
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "{\"reportId\":\"1234\"}"
      },
      {
        "name": "headers",
        "schema": "object",
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "description": "",
        "example": "POST"
      },
      {
        "name": "path",
        "schema": "string",
        "description": "",
        "example": "/reports"
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
    "url": "/drivers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drivers",
    "typeScriptTag": "drivers",
    "description": "List Drivers",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/drivers/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Drivers",
    "typeScriptTag": "drivers",
    "description": "Get Driver",
    "parameters": [
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/groups",
    "method": "getAllGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/hos/available-time",
    "method": "getAvailableTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours of Service",
    "typeScriptTag": "hoursOfService",
    "description": "Available Time for Drivers",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for",
        "example": "{{driverId}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/hos/logs",
    "method": "listHosLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours of Service",
    "typeScriptTag": "hoursOfService",
    "description": "List HOS Logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "startedAfter",
        "schema": "string",
        "description": "Only include records of statuses that started after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "startedBefore",
        "schema": "string",
        "description": "Only include records of statuses that started before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for",
        "example": "{{driverId}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/hos/daily-logs",
    "method": "getDailyLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hours of Service",
    "typeScriptTag": "hoursOfService",
    "description": "List HOS Daily Logs",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Only include daily logs from on or after a specific date",
        "example": "1995-04-25"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Only include daily logs from on or before a specific date",
        "example": "1995-04-25"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for",
        "example": "{{driverId}}"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/ifta/summary",
    "method": "getMonthlyReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IFTA",
    "typeScriptTag": "ifta",
    "description": "Get IFTA Summary",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "startMonth",
        "schema": "string",
        "description": "(Required) The month from which to start including vehicle reports",
        "example": "2021-01"
      },
      {
        "name": "endMonth",
        "schema": "string",
        "description": "(Required) Include vehicle reports up to and including this month",
        "example": "2021-01"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Computes the total distance traversed within a specified month range, with the results grouped by either jurisdiction, vehicle, or both. If no grouping parameter is provided, the default grouping is `vehicle,jurisdiction`.",
        "example": "vehicle,jurisdiction"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/issues",
    "method": "listObservedEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "List Issues",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "lastReportedAfter",
        "schema": "string",
        "description": "Timestamp to start when the issue was last observed",
        "example": "2023-06-07"
      },
      {
        "name": "lastReportedBefore",
        "schema": "string",
        "description": "Timestamp to end when the issue was last observed",
        "example": "2023-06-07"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand related resources to see all details",
        "example": ""
      },
      {
        "name": "connectionId",
        "schema": "string",
        "description": "Filter issues to a specific connection",
        "example": "conn_01GV12VR4DJP70GD1ZBK0SDWFH"
      },
      {
        "name": "errorCode",
        "schema": "string",
        "description": "Filter issues to a specific error code",
        "example": "invalid_source_id"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter issues to a specific status",
        "example": "ongoing"
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
    "url": "/issues/{issueId}/resolve",
    "method": "markResolved",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Issues",
    "typeScriptTag": "issues",
    "description": "Resolve Issue",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/providers",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List Providers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/safety/events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Safety",
    "typeScriptTag": "safety",
    "description": "List Safety Events",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "startedAfter",
        "schema": "string",
        "description": "Only include records of statuses that started after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "startedBefore",
        "schema": "string",
        "description": "Only include records of statuses that started before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for",
        "example": "{{driverId}}"
      },
      {
        "name": "vehicleIds",
        "schema": "string",
        "description": "Comma separated list of vehicle IDs to filter for",
        "example": "{{vehicleId}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/trailers",
    "method": "getAllTrailers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trailers",
    "typeScriptTag": "trailers",
    "description": "List Trailers",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/trailers/locations",
    "method": "listLatestLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trailers",
    "typeScriptTag": "trailers",
    "description": "Latest Trailer Locations",
    "parameters": [
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/vehicles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "List Vehicles",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/vehicles/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Get Vehicle",
    "parameters": [
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/vehicles/locations",
    "method": "getLatestLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Latest Vehicle Locations",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "vehicleIds",
        "schema": "string",
        "description": "Comma separated list of vehicle IDs to filter for",
        "example": "{{vehicleId}}"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/vehicles/{vehicleId}/locations",
    "method": "listHistoricalLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Historical Vehicle Locations",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": "Timestamp to start from - defaults to `TODAY - 1 MONTH`",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "endAt",
        "schema": "string",
        "description": "Timestamp to end at - defaults to `TODAY`",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/vehicles/{vehicleId}/stats/historical",
    "method": "getHistoricalStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vehicles",
    "typeScriptTag": "vehicles",
    "description": "Historical Vehicle Stats",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "startAt",
        "schema": "string",
        "description": "Timestamp to start from - defaults to `TODAY - 1 MONTH`",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "endAt",
        "schema": "string",
        "description": "Timestamp to end at - defaults to `TODAY`",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "types",
        "schema": "string",
        "description": "Comma separated list of vehicle stats to filter for",
        "example": "odometer,engine_state,fuel_level,total_fuel_consumption"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
    "url": "/trips",
    "method": "getAllTrips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trips",
    "typeScriptTag": "trips",
    "description": "List Trips",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "Pagination cursor to start requests from",
        "example": "{{nextCursor}}"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "The maximum number of results to return in a page.",
        "example": "1"
      },
      {
        "name": "modifiedAfter",
        "schema": "string",
        "description": "Only include records that were last modified after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "modifiedBefore",
        "schema": "string",
        "description": "Only include records that were last modified before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "startedAfter",
        "schema": "string",
        "description": "Only include trips that started after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "startedBefore",
        "schema": "string",
        "description": "Only include trips that started before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "endedAfter",
        "schema": "string",
        "description": "Only include trips that ended after a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "endedBefore",
        "schema": "string",
        "description": "Only include trips that ended before a provided date.",
        "example": "2021-01-06T03:24:53.000Z"
      },
      {
        "name": "driverIds",
        "schema": "string",
        "description": "Comma separated list of driver IDs to filter for",
        "example": "{{driverId}}"
      },
      {
        "name": "vehicleIds",
        "schema": "string",
        "description": "Comma separated list of vehicle IDs to filter for",
        "example": "{{vehicleId}}"
      },
      {
        "name": "raw",
        "schema": "string",
        "description": "Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.",
        "example": "true"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand resources in the returned response",
        "example": ""
      },
      {
        "name": "connectionToken",
        "schema": "string",
        "description": "(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.",
        "example": "{{connectionToken}}"
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
      apiTitle="Terminal API"
      apiBaseUrl="https://api.sandbox.withterminal.com/tsp/v1/"
      apiVersion="1.0.0"
      endpoints={25}
      sdkMethods={34}
      schemas={6}
      parameters={158}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/terminal/openapi.yaml"
    />
  );
}
  