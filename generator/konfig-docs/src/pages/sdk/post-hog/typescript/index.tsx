import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PostHogTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="post-hog-typescript-sdk"
      metaDescription={`We're working to increase the number of successful products in the world.

Until now, tools for building products have been fragmented. Product analytics, heatmaps, session recording, feature flags, and A/B testing are all helpful, but no one wants to buy, send data to, and integrate multiple products.

PostHog offers these tools (and more) in an integrated, open source platform which can be hosted in either the US or EU. Both versions are SOC2 certified, GDPR-ready, and HIPAA compliant. 

We started PostHog during YCombinator's W20 cohort and had the most successful B2B software launch on Hacker News since 2012 - with a product that was just 4 weeks old.

With over 50k users, we're default alive, growing 97% through word of mouth, and we are in the top 0.01% most popular repos on GitHub.`}
      company="PostHog"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/logo.png"
      companyKebabCase="post-hog"
      clientNameCamelCase="postHog"
      homepage="posthog.com"
      lastUpdated={new Date("2024-03-21T03:39:02.740Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["developer_tools","analytics","open_source","product_analytics","heatmaps","session_recording","feature_flags","ab_testing","data"]}
      methods={[
  {
    "url": "/api/organizations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/api/organizations",
    "method": "createOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLUG"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "membership_level",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "plugins_access_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "teams",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "available_features",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "available_product_features",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_member_join_email_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METADATA"
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "enforce_2fa",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "member_count",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_COUNT"
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
    "url": "/api/organizations/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this organization.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this organization.",
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
    "url": "/api/organizations/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this organization.",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "membership_level",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "plugins_access_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "description": ""
      },
      {
        "name": "available_features",
        "schema": "array",
        "description": ""
      },
      {
        "name": "available_product_features",
        "schema": "array",
        "description": ""
      },
      {
        "name": "is_member_join_email_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customer_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enforce_2fa",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "member_count",
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
    "url": "/api/organizations/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this organization.",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLUG"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "membership_level",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "plugins_access_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "teams",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "available_features",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "available_product_features",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "is_member_join_email_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METADATA"
      },
      {
        "name": "customer_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "enforce_2fa",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "member_count",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_COUNT"
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
    "url": "/api/organizations/{organization_id}/batch_exports",
    "method": "batchExportsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/batch_exports",
    "method": "createBatchExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}",
    "method": "deleteBatchExport",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}",
    "method": "getBatchExportsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}",
    "method": "updateBatchExport",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "destination",
        "schema": "object",
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paused",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}",
    "method": "updateBatchExport",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}/backfill",
    "method": "triggerBackfill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Trigger a backfill for a BatchExport.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}/pause",
    "method": "pauseBatchExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Pause a BatchExport.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/batch_exports/{id}/unpause",
    "method": "unpauseBatchExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Unpause a BatchExport.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/domains",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/domains",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "is_verified",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "verified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFIED_AT"
      },
      {
        "name": "verification_challenge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATION_CHALLENGE"
      },
      {
        "name": "jit_provisioning_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sso_enforcement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "has_saml",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "saml_entity_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saml_acs_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saml_x509_cert",
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
    "url": "/api/organizations/{organization_id}/domains/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this domain.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/domains/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this domain.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/domains/{id}",
    "method": "updateDomainById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this domain.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_verified",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "verified_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "verification_challenge",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jit_provisioning_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sso_enforcement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "has_saml",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "saml_entity_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saml_acs_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saml_x509_cert",
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
    "url": "/api/organizations/{organization_id}/domains/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this domain.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "is_verified",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "verified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFIED_AT"
      },
      {
        "name": "verification_challenge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATION_CHALLENGE"
      },
      {
        "name": "jit_provisioning_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sso_enforcement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "has_saml",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "saml_entity_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saml_acs_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saml_x509_cert",
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
    "url": "/api/organizations/{organization_id}/domains/{id}/verify",
    "method": "verifyDomainPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this domain.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOMAIN"
      },
      {
        "name": "is_verified",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "verified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFIED_AT"
      },
      {
        "name": "verification_challenge",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATION_CHALLENGE"
      },
      {
        "name": "jit_provisioning_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sso_enforcement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "has_saml",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "saml_entity_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saml_acs_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saml_x509_cert",
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
    "url": "/api/organizations/{organization_id}/invites",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/invites",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "target_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_EMAIL"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailing_attempt_made",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_expired",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
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
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/invites/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this organization invite.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/invites/bulk",
    "method": "bulkInviteCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "target_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_EMAIL"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailing_attempt_made",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_expired",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/members",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/members/{user__uuid}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "userUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER__UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/members/{user__uuid}",
    "method": "updateMemberByUuid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "userUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER__UUID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "description": ""
      },
      {
        "name": "level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "joined_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "has_social_auth",
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
    "url": "/api/organizations/{organization_id}/members/{user__uuid}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "userUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER__UUID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "joined_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOINED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_social_auth",
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
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_destinations",
    "method": "listPipelineDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations",
    "method": "createPipelineDestinations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}",
    "method": "removePipelineDestination",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}",
    "method": "getPipelineDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}",
    "method": "updatePipelineDestination",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}",
    "method": "pipelineDestinationsUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}/check_for_updates",
    "method": "checkForUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}/source",
    "method": "getPipelineDestinationsSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}/update_source",
    "method": "updatePipelineDestinationSourcePartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_destinations/{id}/upgrade",
    "method": "upgradePipelineDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/activity",
    "method": "getPipelineDestinationsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/exports_unsubscribe_configs",
    "method": "getPipelineDestinationsExportsUnsubscribeConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/repository",
    "method": "getPipelineDestinationRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_destinations/unused",
    "method": "getPipelineDestinationsUnused",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps",
    "method": "listPipelineFrontendApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps",
    "method": "createPipelineFrontendApps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}",
    "method": "removePipelineFrontendApps",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}",
    "method": "getPipelineFrontendAppsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}",
    "method": "updatePipelineFrontendAppsById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}",
    "method": "updatePipelineFrontendAppById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/check_for_updates",
    "method": "pipelineFrontendAppsCheckForUpdatesRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/source",
    "method": "getPipelineFrontendAppsSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/update_source",
    "method": "pipelineFrontendAppsUpdateSourcePatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/{id}/upgrade",
    "method": "upgradePipelineFrontendApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/activity",
    "method": "getPipelineFrontendAppsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/exports_unsubscribe_configs",
    "method": "getPipelineFrontendAppExportsUnsubscribeConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/repository",
    "method": "getPipelineFrontendAppsRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_frontend_apps/unused",
    "method": "getPipelineFrontendAppsUnused",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps",
    "method": "getPipelineImportApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps",
    "method": "importPipelineApps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}",
    "method": "deletePipelineImportApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}",
    "method": "getPipelineImportApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}",
    "method": "updatePipelineImportAppsConfigs",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}",
    "method": "pipelineImportAppsUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}/check_for_updates",
    "method": "pipelineImportAppsCheckForUpdatesRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}/source",
    "method": "getPipelineImportAppsSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}/update_source",
    "method": "updatePipelineImportAppSource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/{id}/upgrade",
    "method": "upgradePipelineImportApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/activity",
    "method": "getPipelineImportAppsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/exports_unsubscribe_configs",
    "method": "pipelineImportAppsExportsUnsubscribeConfigsRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/repository",
    "method": "getPipelineImportAppsRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_import_apps/unused",
    "method": "getUnusedPipelineImportApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations",
    "method": "getPipelineTransformations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations",
    "method": "createPipelineTransformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}",
    "method": "deletePipelineTransformation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}",
    "method": "getPipelineTransformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}",
    "method": "updatePipelineTransformationById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}",
    "method": "updatePipelineTransformationById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}/check_for_updates",
    "method": "getPipelineTransformationCheckForUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}/source",
    "method": "pipelineTransformationsSourceRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}/update_source",
    "method": "updatePipelineTransformationSourcePartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/pipeline_transformations/{id}/upgrade",
    "method": "upgradePipelineTransformation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/activity",
    "method": "getPipelineTransformationsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/exports_unsubscribe_configs",
    "method": "getPipelineTransformationExportsUnsubscribeConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/repository",
    "method": "getPipelineTransformationsRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/pipeline_transformations/unused",
    "method": "getUnusedPipelineTransformations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/plugins/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/plugins/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins/{id}",
    "method": "updatePluginById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/plugins/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/plugins/{id}/check_for_updates",
    "method": "pluginsCheckForUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins/{id}/source",
    "method": "pluginsSourceRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins/{id}/update_source",
    "method": "updatePluginSource",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "public_jobs",
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
  },
  {
    "url": "/api/organizations/{organization_id}/plugins/{id}/upgrade",
    "method": "upgradePlugin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_type",
        "schema": "undefined",
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
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "config_schema",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_tag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LATEST_TAG"
      },
      {
        "name": "is_global",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "organization_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_NAME"
      },
      {
        "name": "capabilities",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "public_jobs",
        "schema": "undefined",
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
    "url": "/api/organizations/{organization_id}/plugins/activity",
    "method": "getPluginsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins/exports_unsubscribe_configs",
    "method": "getPluginsExportsUnsubscribeConfigs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins/repository",
    "method": "getPluginsRepository",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/plugins/unused",
    "method": "getPluginsUnused",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/projects",
    "method": "getProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/projects",
    "method": "createProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION"
      },
      {
        "name": "api_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API_TOKEN"
      },
      {
        "name": "app_urls",
        "schema": "array",
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
        "name": "slack_incoming_webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "anonymize_ips",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_snippet_onboarding",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ingested_event",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "test_account_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "test_account_filters_default_checked",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "path_cleaning_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_demo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data_attributes",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "person_display_name_properties",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "correlation_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "autocapture_opt_out",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "autocapture_exceptions_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "autocapture_exceptions_errors_to_ignore",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "capture_console_log_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "capture_performance_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_sample_rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_minimum_duration_milliseconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_linked_flag",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_network_payload_capture_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "session_replay_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_membership_level",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "access_control",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "week_start_day",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_group_types",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "primary_dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "live_events_columns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "recording_domains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "person_on_events_querying_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "groups_on_events_querying_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "inject_web_apps",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "extra_settings",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_completed_onboarding_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "surveys_opt_in",
        "schema": "boolean",
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
    "url": "/api/organizations/{organization_id}/projects/{id}",
    "method": "deleteProjectById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/projects/{id}",
    "method": "getProjectsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/projects/{id}",
    "method": "updateProject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "api_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "app_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slack_incoming_webhook",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymize_ips",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completed_snippet_onboarding",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ingested_event",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "test_account_filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "test_account_filters_default_checked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "path_cleaning_filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "is_demo",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_attributes",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "person_display_name_properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "correlation_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "autocapture_opt_out",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autocapture_exceptions_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autocapture_exceptions_errors_to_ignore",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "capture_console_log_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "capture_performance_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "session_recording_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "session_recording_sample_rate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "session_recording_minimum_duration_milliseconds",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "session_recording_linked_flag",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "session_recording_network_payload_capture_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "session_replay_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "effective_membership_level",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "access_control",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "week_start_day",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "has_group_types",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "primary_dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "live_events_columns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recording_domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person_on_events_querying_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "groups_on_events_querying_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "inject_web_apps",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "extra_settings",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "has_completed_onboarding_for",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "surveys_opt_in",
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
    "url": "/api/organizations/{organization_id}/projects/{id}",
    "method": "updateProjectById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION"
      },
      {
        "name": "api_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API_TOKEN"
      },
      {
        "name": "app_urls",
        "schema": "array",
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
        "name": "slack_incoming_webhook",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "anonymize_ips",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "completed_snippet_onboarding",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ingested_event",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "test_account_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "test_account_filters_default_checked",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "path_cleaning_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_demo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "data_attributes",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "person_display_name_properties",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "correlation_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "autocapture_opt_out",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "autocapture_exceptions_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "autocapture_exceptions_errors_to_ignore",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "capture_console_log_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "capture_performance_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_sample_rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_minimum_duration_milliseconds",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_linked_flag",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "session_recording_network_payload_capture_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "session_replay_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_membership_level",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "access_control",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "week_start_day",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_group_types",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "primary_dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "live_events_columns",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "recording_domains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "person_on_events_querying_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "groups_on_events_querying_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "inject_web_apps",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "extra_settings",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_completed_onboarding_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "surveys_opt_in",
        "schema": "boolean",
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
    "url": "/api/organizations/{organization_id}/projects/{id}/activity",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/projects/{id}/is_generating_demo_data",
    "method": "getIsGeneratingDemoData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/projects/{id}/reset_token",
    "method": "projectsResetTokenPartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "Projects for the current organization.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this team.",
        "example": 0
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "api_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "app_urls",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "slack_incoming_webhook",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "anonymize_ips",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "completed_snippet_onboarding",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "ingested_event",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "test_account_filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "test_account_filters_default_checked",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "path_cleaning_filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "is_demo",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data_attributes",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "person_display_name_properties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "correlation_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "autocapture_opt_out",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autocapture_exceptions_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "autocapture_exceptions_errors_to_ignore",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "capture_console_log_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "capture_performance_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "session_recording_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "session_recording_sample_rate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "session_recording_minimum_duration_milliseconds",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "session_recording_linked_flag",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "session_recording_network_payload_capture_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "session_replay_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "effective_membership_level",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "access_control",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "week_start_day",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "has_group_types",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "primary_dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "live_events_columns",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recording_domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person_on_events_querying_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "groups_on_events_querying_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "inject_web_apps",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "extra_settings",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "has_completed_onboarding_for",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "surveys_opt_in",
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
    "url": "/api/organizations/{organization_id}/roles",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/roles",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "feature_flags_access_level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "members",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBERS"
      },
      {
        "name": "associated_flags",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSOCIATED_FLAGS"
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
    "url": "/api/organizations/{organization_id}/roles/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this role.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/organizations/{organization_id}/roles/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this role.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
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
    "url": "/api/organizations/{organization_id}/roles/{id}",
    "method": "updateRoleById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this role.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feature_flags_access_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "members",
        "schema": "string",
        "description": ""
      },
      {
        "name": "associated_flags",
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
    "url": "/api/organizations/{organization_id}/roles/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this role.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "feature_flags_access_level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "members",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBERS"
      },
      {
        "name": "associated_flags",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSOCIATED_FLAGS"
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
    "url": "/api/organizations/{organization_id}/roles/{role_id}/role_memberships",
    "method": "listRoleMemberships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE_ID"
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
    "url": "/api/organizations/{organization_id}/roles/{role_id}/role_memberships",
    "method": "createRoleMemberships",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "role_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE_ID"
      },
      {
        "name": "organization_member",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "joined_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOINED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "user_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_UUID"
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
    "url": "/api/organizations/{organization_id}/roles/{role_id}/role_memberships/{id}",
    "method": "removeRoleMembership",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organizations",
    "typeScriptTag": "organizations",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this role membership.",
        "example": "ID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZATION_ID"
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/actions",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
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
        "name": "post_to_slack",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "slack_message_format",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_calculating",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "last_calculated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_action",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "bytecode_error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BYTECODE_ERROR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this action.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this action.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this action.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "post_to_slack",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "slack_message_format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_calculating",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "last_calculated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is_action",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "bytecode_error",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this action.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
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
        "name": "post_to_slack",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "slack_message_format",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "steps",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_calculating",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "last_calculated_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_action",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "bytecode_error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BYTECODE_ERROR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions/{id}/count",
    "method": "getActionCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this action.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/actions/people",
    "method": "getPeople",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "actions",
    "typeScriptTag": "actions",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/activity_log",
    "method": "getActivityLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activity_log",
    "typeScriptTag": "activityLog",
    "description": "",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/activity_log/bookmark_activity_notification",
    "method": "createBookmarkActivityNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "activity_log",
    "typeScriptTag": "activityLog",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "unread",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "organization_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "was_impersonated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_system",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "activity",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTIVITY"
      },
      {
        "name": "item_id",
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
      },
      {
        "name": "detail",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
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
    "url": "/api/projects/{project_id}/activity_log/important_changes",
    "method": "getImportantChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "activity_log",
    "typeScriptTag": "activityLog",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/annotations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "annotations",
    "typeScriptTag": "annotations",
    "description": "Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "A search term."
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
    "url": "/api/projects/{project_id}/annotations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "annotations",
    "typeScriptTag": "annotations",
    "description": "Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_marker",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_item",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "insight_short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSIGHT_SHORT_ID"
      },
      {
        "name": "insight_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSIGHT_NAME"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
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
    "url": "/api/projects/{project_id}/annotations/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "annotations",
    "typeScriptTag": "annotations",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this annotation.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/annotations/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "annotations",
    "typeScriptTag": "annotations",
    "description": "Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this annotation.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/annotations/{id}",
    "method": "crudById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "annotations",
    "typeScriptTag": "annotations",
    "description": "Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this annotation.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "date_marker",
        "schema": "string",
        "description": ""
      },
      {
        "name": "creation_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dashboard_item",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "insight_short_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "insight_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scope",
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
    "url": "/api/projects/{project_id}/annotations/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "annotations",
    "typeScriptTag": "annotations",
    "description": "Create, Read, Update and Delete annotations. [See docs](https://posthog.com/docs/user-guides/annotations) for more information on annotations.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this annotation.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_marker",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_item",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "insight_short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSIGHT_SHORT_ID"
      },
      {
        "name": "insight_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSIGHT_NAME"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scope",
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
    "url": "/api/projects/{project_id}/app_metrics/{id}",
    "method": "getAppMetricsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_metrics",
    "typeScriptTag": "appMetrics",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/app_metrics/{id}/error_details",
    "method": "getErrorDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_metrics",
    "typeScriptTag": "appMetrics",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/app_metrics/{plugin_config_id}/historical_exports",
    "method": "getHistoricalExports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_metrics",
    "typeScriptTag": "appMetrics",
    "description": "",
    "parameters": [
      {
        "name": "pluginConfigId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_CONFIG_ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/app_metrics/{plugin_config_id}/historical_exports/{id}",
    "method": "getHistoricalExportsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "app_metrics",
    "typeScriptTag": "appMetrics",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "pluginConfigId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_CONFIG_ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports",
    "method": "getMultipleRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/batch_exports",
    "method": "createNewRun",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{batch_export_id}/logs",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "batchExportId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH_EXPORT_ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/batch_exports/{batch_export_id}/runs",
    "method": "getRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "Get all BatchExportRuns for a BatchExport.",
    "parameters": [
      {
        "name": "batchExportId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH_EXPORT_ID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{id}",
    "method": "getRunsRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "batchExportId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH_EXPORT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export run.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExportRun model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{batch_export_id}/runs/{run_id}/logs",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "batchExportId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BATCH_EXPORT_ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUN_ID"
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
    "url": "/api/projects/{project_id}/batch_exports/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{id}",
    "method": "getMultipleRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{id}",
    "method": "updateByIdPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "destination",
        "schema": "object",
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "paused",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{id}",
    "method": "updateByIdPatch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{id}/backfill",
    "method": "triggerBackfill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "Trigger a backfill for a BatchExport.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{id}/pause",
    "method": "pauseAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "Pause a BatchExport.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/batch_exports/{id}/unpause",
    "method": "unpauseAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "batch_exports",
    "typeScriptTag": "batchExports",
    "description": "Unpause a BatchExport.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this batch export.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "destination",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
      },
      {
        "name": "paused",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_UPDATED_AT"
      },
      {
        "name": "last_paused_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "latest_runs",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "hogql_query",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "schema",
        "schema": "undefined",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer for a BatchExport model."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/cohorts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/cohorts",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "groups",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_calculating",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_calculation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_CALCULATION"
      },
      {
        "name": "errors_calculating",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_static",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/cohorts/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this cohort.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/cohorts/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this cohort.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/cohorts/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this cohort.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groups",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "is_calculating",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_calculation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "errors_calculating",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "count",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is_static",
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
    "url": "/api/projects/{project_id}/cohorts/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this cohort.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "groups",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_calculating",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "last_calculation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_CALCULATION"
      },
      {
        "name": "errors_calculating",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "is_static",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/cohorts/{id}/duplicate_as_static_cohort",
    "method": "duplicateAsStaticCohortRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this cohort.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/cohorts/{id}/persons",
    "method": "listPersons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cohorts",
    "typeScriptTag": "cohorts",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this cohort.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboard_templates",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboard_templates",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "template_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "variables",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "image_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "scope",
        "schema": "undefined",
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
    "url": "/api/projects/{project_id}/dashboard_templates/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboard_templates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboard_templates/{id}",
    "method": "updateByIdPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "template_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dashboard_description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dashboard_filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "variables",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "image_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "scope",
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
  },
  {
    "url": "/api/projects/{project_id}/dashboard_templates/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "template_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "variables",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "image_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "scope",
        "schema": "undefined",
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
    "url": "/api/projects/{project_id}/dashboard_templates/json_schema",
    "method": "getJsonSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboard_templates",
    "typeScriptTag": "dashboardTemplates",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboards",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboards",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
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
        "name": "pinned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_shared",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATION_MODE"
      },
      {
        "name": "use_template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "use_dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "delete_insights",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "restriction_level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators",
    "method": "listCollaborators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators",
    "method": "addCollaborator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "dashboard_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "added_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "user_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_UUID"
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
    "url": "/api/projects/{project_id}/dashboards/{dashboard_id}/collaborators/{user__uuid}",
    "method": "deleteCollaboratorByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "userUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER__UUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/{dashboard_id}/sharing",
    "method": "sharingList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/dashboards/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this dashboard.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this dashboard.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this dashboard.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pinned",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_shared",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "creation_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "delete_insights",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "restriction_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this dashboard.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
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
        "name": "pinned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_shared",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATION_MODE"
      },
      {
        "name": "use_template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "use_dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "delete_insights",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "restriction_level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/{id}/move_tile",
    "method": "moveTilePatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this dashboard.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pinned",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_shared",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "creation_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_template",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "delete_insights",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "restriction_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/dashboards/create_from_template_json",
    "method": "createFromTemplateJsonPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dashboards",
    "typeScriptTag": "dashboards",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
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
        "name": "pinned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_shared",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "creation_mode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATION_MODE"
      },
      {
        "name": "use_template",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "use_dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "delete_insights",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "restriction_level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/early_access_feature",
    "method": "getEarlyAccessFeature",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "early_access_feature",
    "typeScriptTag": "earlyAccessFeature",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/early_access_feature",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "early_access_feature",
    "typeScriptTag": "earlyAccessFeature",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
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
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "stage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGE"
      },
      {
        "name": "documentation_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "feature_flag_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "feature_flag",
        "schema": "object",
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
    "url": "/api/projects/{project_id}/early_access_feature/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "early_access_feature",
    "typeScriptTag": "earlyAccessFeature",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this early access feature.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/early_access_feature/{id}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "early_access_feature",
    "typeScriptTag": "earlyAccessFeature",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this early access feature.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/early_access_feature/{id}",
    "method": "updateContent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "early_access_feature",
    "typeScriptTag": "earlyAccessFeature",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this early access feature.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feature_flag",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stage",
        "schema": "string",
        "description": ""
      },
      {
        "name": "documentation_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
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
    "url": "/api/projects/{project_id}/early_access_feature/{id}",
    "method": "updateContent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "early_access_feature",
    "typeScriptTag": "earlyAccessFeature",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this early access feature.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
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
      },
      {
        "name": "feature_flag",
        "schema": "object",
        "required": true,
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
        "name": "stage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGE"
      },
      {
        "name": "documentation_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
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
    "url": "/api/projects/{project_id}/event_definitions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "event_definitions",
    "typeScriptTag": "eventDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/event_definitions/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "event_definitions",
    "typeScriptTag": "eventDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/event_definitions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "event_definitions",
    "typeScriptTag": "eventDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/event_definitions/{id}",
    "method": "updateByIdPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "event_definitions",
    "typeScriptTag": "eventDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/event_definitions/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "event_definitions",
    "typeScriptTag": "eventDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/events",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "events",
    "typeScriptTag": "events",
    "description": "\n        This endpoint allows you to list and filter events.\n        It is effectively deprecated and is kept only for backwards compatibility.\n        If you ever ask about it you will be advised to not use it...\n        If you want to ad-hoc list or aggregate events, use the Query endpoint instead.\n        If you want to export all events or many pages of events you should use our CDP/Batch Exports products instead.\n        ",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "description": "Only return events with a timestamp after this time."
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Only return events with a timestamp before this time."
      },
      {
        "name": "distinctId",
        "schema": "integer",
        "description": "Filter list by distinct id."
      },
      {
        "name": "event",
        "schema": "string",
        "description": "Filter list by event. For example `user sign up` or `$pageview`."
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of results to return"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "Filter list by person id."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "Filter events by event property, person property, cohort, groups and more."
      },
      {
        "name": "select",
        "schema": "array",
        "description": "(Experimental) JSON-serialized array of HogQL expressions to return"
      },
      {
        "name": "where",
        "schema": "array",
        "description": "(Experimental) JSON-serialized array of HogQL expressions that must pass"
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
    "url": "/api/projects/{project_id}/events/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "events",
    "typeScriptTag": "events",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/events/values",
    "method": "getValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "events",
    "typeScriptTag": "events",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/experiments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/experiments",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parameters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "feature_flag_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATURE_FLAG_KEY"
      },
      {
        "name": "feature_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "secondary_metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
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
    "url": "/api/projects/{project_id}/experiments/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this experiment.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/experiments/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this experiment.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/experiments/{id}",
    "method": "updateExperimentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this experiment.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parameters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feature_flag_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "feature_flag",
        "schema": "object",
        "description": ""
      },
      {
        "name": "secondary_metrics",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
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
    "url": "/api/projects/{project_id}/experiments/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this experiment.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parameters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "feature_flag_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEATURE_FLAG_KEY"
      },
      {
        "name": "feature_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "secondary_metrics",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
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
    "url": "/api/projects/{project_id}/experiments/{id}/results",
    "method": "getResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this experiment.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/experiments/{id}/secondary_results",
    "method": "getSecondaryResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this experiment.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/experiments/requires_flag_implementation",
    "method": "getRequiresFlagImplementation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "experiments",
    "typeScriptTag": "experiments",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/explicit_members",
    "method": "getMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "explicit_members",
    "typeScriptTag": "explicitMembers",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/explicit_members",
    "method": "createOrUpdateMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "explicit_members",
    "typeScriptTag": "explicitMembers",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parent_membership_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_MEMBERSHIP_ID"
      },
      {
        "name": "joined_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOINED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_UUID"
      },
      {
        "name": "effective_level",
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
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}",
    "method": "deleteExplicitMembers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "explicit_members",
    "typeScriptTag": "explicitMembers",
    "description": "",
    "parameters": [
      {
        "name": "parentMembershipUserUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_MEMBERSHIP__USER__UUID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}",
    "method": "getMembersByParentMembershipUserUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "explicit_members",
    "typeScriptTag": "explicitMembers",
    "description": "",
    "parameters": [
      {
        "name": "parentMembershipUserUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_MEMBERSHIP__USER__UUID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}",
    "method": "updateParentMembershipUserUuid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "explicit_members",
    "typeScriptTag": "explicitMembers",
    "description": "",
    "parameters": [
      {
        "name": "parentMembershipUserUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_MEMBERSHIP__USER__UUID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parent_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "parent_membership_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "joined_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user_uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effective_level",
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
    "url": "/api/projects/{project_id}/explicit_members/{parent_membership__user__uuid}",
    "method": "updateParentMembershipUserUuid",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "explicit_members",
    "typeScriptTag": "explicitMembers",
    "description": "",
    "parameters": [
      {
        "name": "parentMembershipUserUuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_MEMBERSHIP__USER__UUID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "level",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "parent_membership_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARENT_MEMBERSHIP_ID"
      },
      {
        "name": "joined_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOINED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_UUID"
      },
      {
        "name": "effective_level",
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
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/exports",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exports",
    "typeScriptTag": "exports",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/exports",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "exports",
    "typeScriptTag": "exports",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "insight",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "export_format",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXPORT_FORMAT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "has_content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HAS_CONTENT"
      },
      {
        "name": "export_context",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
      },
      {
        "name": "expires_after",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Standard ExportedAsset serializer that doesn't return content."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/exports/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exports",
    "typeScriptTag": "exports",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this exported asset.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Standard ExportedAsset serializer that doesn't return content."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/exports/{id}/content",
    "method": "contentRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "exports",
    "typeScriptTag": "exports",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this exported asset.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Standard ExportedAsset serializer that doesn't return content."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags",
    "method": "getFeatureFlags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/feature_flags",
    "method": "createFeatureFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{feature_flag_id}/role_access",
    "method": "getRoleAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "",
    "parameters": [
      {
        "name": "featureFlagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/feature_flags/{feature_flag_id}/role_access",
    "method": "roleAccessCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "",
    "parameters": [
      {
        "name": "featureFlagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "feature_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "role",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "role_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLE_ID"
      },
      {
        "name": "added_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
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
    "url": "/api/projects/{project_id}/feature_flags/{feature_flag_id}/role_access/{id}",
    "method": "deleteRoleAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "",
    "parameters": [
      {
        "name": "featureFlagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag role access.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{feature_flag_id}/role_access/{id}",
    "method": "getRoleAccessById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "",
    "parameters": [
      {
        "name": "featureFlagId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag role access.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/feature_flags/{id}",
    "method": "deleteFeatureFlag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}",
    "method": "readFeatureFlagById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}",
    "method": "updateFeatureFlagById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}",
    "method": "createOrUpdateFlag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}/activity",
    "method": "getFeatureFlagActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}/create_static_cohort_for_flag",
    "method": "createStaticCohortForFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}/dashboard",
    "method": "createOrUpdateDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/{id}/enrich_usage_dashboard",
    "method": "enrichUsageDashboardCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this feature flag.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/activity",
    "method": "getFeatureFlagsActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/evaluation_reasons",
    "method": "getEvaluationReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/local_evaluation",
    "method": "localEvaluationRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/my_flags",
    "method": "readMyFlags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/feature_flags/user_blast_radius",
    "method": "createFeatureFlagUserBlastRadius",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "feature_flags",
    "typeScriptTag": "featureFlags",
    "description": "Create, read, update and delete feature flags. [See docs](https://posthog.com/docs/user-guides/feature-flags) for more information on feature flags.\n\nIf you're looking to use feature flags on your application, you can either use our JavaScript Library or our dedicated endpoint to check if feature flags are enabled for a given user.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY"
      },
      {
        "name": "filters",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_simple_flag",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "rollout_percentage",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ensure_experience_continuity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "experiment_set",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "surveys",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "rollback_conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "performed_rollback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "can_edit",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "usage_dashboard",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "analytics_dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "has_enriched_analytics",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Serializer mixin that resolves appropriate response for tags depending on license."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "List all groups of a specific group type. You must pass ?group_type_index= in the URL. To get a list of valid group types, call /api/:project_id/groups_types/",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "The pagination cursor value."
      },
      {
        "name": "groupTypeIndex",
        "schema": "integer",
        "required": true,
        "description": "Specify the group type to list",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "search",
        "schema": "string",
        "required": true,
        "description": "Search the group name",
        "example": "SEARCH"
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
    "url": "/api/projects/{project_id}/groups/find",
    "method": "getGroupsFind",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "",
    "parameters": [
      {
        "name": "groupKey",
        "schema": "string",
        "required": true,
        "description": "Specify the key of the group to find",
        "example": "GROUP_KEY"
      },
      {
        "name": "groupTypeIndex",
        "schema": "integer",
        "required": true,
        "description": "Specify the group type to find",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/groups/property_definitions",
    "method": "getPropertyDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/groups/property_values",
    "method": "getPropertyValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "",
    "parameters": [
      {
        "name": "groupTypeIndex",
        "schema": "integer",
        "required": true,
        "description": "Specify the group type to find property values of",
        "example": 0
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Specify the property key to find values for",
        "example": "KEY"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/groups/related",
    "method": "getRelatedGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups",
    "typeScriptTag": "groups",
    "description": "",
    "parameters": [
      {
        "name": "groupTypeIndex",
        "schema": "integer",
        "required": true,
        "description": "Specify the group type to find",
        "example": 0
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Specify the id of the user to find groups for",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/groups_types",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "groups_types",
    "typeScriptTag": "groupsTypes",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/groups_types/update_metadata",
    "method": "updateMetadataPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "groups_types",
    "typeScriptTag": "groupsTypes",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "group_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "group_type_index",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name_singular",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name_plural",
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
    "url": "/api/projects/{project_id}/insights",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "createdBy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
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
    "url": "/api/projects/{project_id}/insights",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/{insight_id}/sharing",
    "method": "getSharing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "insightId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/insights/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this insight.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fromDashboard",
        "schema": "integer",
        "description": "\nWhen loading an insight for a dashboard pass a `from_dashboard` query parameter containing the dashboard ID\n\ne.g. `\"/api/projects/{team_id}/insights/{insight_id}?from_dashboard={dashboard_id}\"`\n\nInsights can be added to more than one dashboard, this allows the insight to be loaded in the correct context.\n\nUsing the correct cache and enriching the response with dashboard specific config (e.g. layouts or colors)"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this insight.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "refresh",
        "schema": "boolean",
        "description": "\n                The client can request that an insight be refreshed by setting the `refresh=true` parameter.\n                The server will then decide if the data should or not be refreshed based on a set of heuristics\n                meant to determine the staleness of cached data. The result will contain as `is_cached` field\n                that indicates whether the insight was actually refreshed or not through the request."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/{id}",
    "method": "updateInsightPath",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this insight.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "short_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "description": ""
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "description": ""
      },
      {
        "name": "result",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_cached",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this insight.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/{id}/activity",
    "method": "getActivityData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this insight.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/{id}/viewed",
    "method": "markAsViewed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this insight.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/activity",
    "method": "getActivityData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/cancel",
    "method": "cancelCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/funnel",
    "method": "getFunnelSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/funnel",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "funnel",
    "typeScriptTag": "funnel",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "actions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter_test_accounts",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date_from",
        "schema": "string",
        "description": "",
        "default": "-7d"
      },
      {
        "name": "date_to",
        "schema": "string",
        "description": "",
        "default": "-7d"
      },
      {
        "name": "breakdown",
        "schema": "string",
        "description": ""
      },
      {
        "name": "breakdown_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_window_interval",
        "schema": "integer",
        "description": "",
        "default": 14
      },
      {
        "name": "funnel_window_interval_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_viz_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_order_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "exclusions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "aggregation_group_type_index",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "breakdown_limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "funnel_window_days",
        "schema": "integer",
        "description": "",
        "default": 14
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
    "url": "/api/projects/{project_id}/insights/funnel/correlation",
    "method": "funnelCorrelationRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/funnel/correlation",
    "method": "funnelCorrelationCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/my_last_viewed",
    "method": "listLastViewed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "Returns basic details about the last 5 insights viewed by this user. Most recently viewed first.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/path",
    "method": "getPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/path",
    "method": "createOrUpdatePath",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/retention",
    "method": "projectRetentionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/retention",
    "method": "createRetention",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/timing",
    "method": "createTimingInsight",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboards",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dashboard_tiles",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "last_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_REFRESH"
      },
      {
        "name": "next_allowed_client_refresh",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_ALLOWED_CLIENT_REFRESH"
      },
      {
        "name": "result",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "favorited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "saved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "is_sample",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "effective_restriction_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "effective_privilege_level",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "is_cached",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IS_CACHED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/trend",
    "method": "getTrend",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "insights",
    "typeScriptTag": "insights",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Simplified serializer to speed response times when loading large amounts of objects."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/insights/trend",
    "method": "createOrUpdatePath",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "trend",
    "typeScriptTag": "trend",
    "description": "",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "events",
        "schema": "array",
        "description": ""
      },
      {
        "name": "actions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter_test_accounts",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "date_from",
        "schema": "string",
        "description": "",
        "default": "-7d"
      },
      {
        "name": "date_to",
        "schema": "string",
        "description": "",
        "default": "-7d"
      },
      {
        "name": "breakdown",
        "schema": "string",
        "description": ""
      },
      {
        "name": "breakdown_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "display",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formula",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compare",
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
    "url": "/api/projects/{project_id}/notebooks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "contains",
        "schema": "string",
        "description": "Filter for notebooks that match a provided filter.\n                Each match pair is separated by a colon,\n                multiple match pairs can be sent separated by a space or a comma"
      },
      {
        "name": "createdBy",
        "schema": "integer",
        "description": "The UUID of the Notebook's creator"
      },
      {
        "name": "dateFrom",
        "schema": "string",
        "description": "Filter for notebooks created after this date & time"
      },
      {
        "name": "dateTo",
        "schema": "string",
        "description": "Filter for notebooks created before this date & time"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "If any value is provided for this parameter, return notebooks created by the logged in user."
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
    "url": "/api/projects/{project_id}/notebooks",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "title",
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
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "content",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "text_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
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
    "url": "/api/projects/{project_id}/notebooks/{short_id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/notebooks/{short_id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
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
    "url": "/api/projects/{project_id}/notebooks/{short_id}",
    "method": "updateNotebook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "version",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "short_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "text_content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_modified_by",
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
    "url": "/api/projects/{project_id}/notebooks/{short_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "title",
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
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "content",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "text_content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
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
    "url": "/api/projects/{project_id}/notebooks/{short_id}/activity",
    "method": "getActivityList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
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
    "url": "/api/projects/{project_id}/notebooks/activity",
    "method": "getActivityList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notebooks",
    "typeScriptTag": "notebooks",
    "description": "The API for interacting with Notebooks. This feature is in early access and the API can have breaking changes without announcement.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "distinctId",
        "schema": "string",
        "description": "Filter list by distinct id."
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Filter persons by email (exact match)"
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "properties",
        "schema": "array",
        "description": "Filter Persons by person properties."
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Search persons, either by email (full text search) or distinct_id (exact match)."
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
    "url": "/api/projects/{project_id}/persons/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "deleteEvents",
        "schema": "boolean",
        "description": "If true, a task to delete all events associated with this person will be created and queued. The task does not run immediately and instead is batched together and at 5AM UTC every Sunday (controlled by environment variable CLEAR_CLICKHOUSE_REMOVED_DATA_SCHEDULE_CRON)",
        "default": false
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/persons/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/{id}",
    "method": "updatePersonById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uuid",
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
    "url": "/api/projects/{project_id}/persons/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "Only for setting properties on the person. \"properties\" from the request data will be updated via a \"$set\" event.\nThis means that only the properties listed will be updated, but other properties won't be removed nor updated.\nIf you would like to remove a property use the `delete_property` endpoint.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/{id}/activity",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/{id}/delete_property",
    "method": "deletePropertyApi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "$unset",
        "schema": "string",
        "required": true,
        "description": "Specify the property key to delete",
        "example": "$UNSET"
      },
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/{id}/properties_timeline",
    "method": "getPropertiesTimeline",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/{id}/split",
    "method": "createOrUpdateSplit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/{id}/update_property",
    "method": "createOrUpdateProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this person.",
        "example": 0
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "Specify the property key",
        "example": "KEY"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "value",
        "schema": "undefined",
        "required": true,
        "description": "Specify the property value"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/activity",
    "method": "getActivity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/cohorts",
    "method": "listCohorts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/funnel",
    "method": "getFunnel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/funnel",
    "method": "createOrUpdateFunnel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/funnel/correlation",
    "method": "funnelCorrelationRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/funnel/correlation",
    "method": "createOrUpdateFunnelCorrelation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/lifecycle",
    "method": "getLifecyclePath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/path",
    "method": "getPath",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/path",
    "method": "createOrUpdatePath",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "distinct_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/projects/{project_id}/persons/retention",
    "method": "retentionRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/stickiness",
    "method": "getStickiness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/trends",
    "method": "getTrends",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/persons/values",
    "method": "getValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "persons",
    "typeScriptTag": "persons",
    "description": "To create or update persons, use a PostHog library of your choice and [use an identify call](https://app.posthog.com). This API endpoint is only for reading and deleting.",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": ""
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/pipeline_destination_configs/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs/{id}",
    "method": "patchById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs/{id}/frontend",
    "method": "getFrontend",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs/{id}/job",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_destination_configs/rearrange",
    "method": "rearrangePartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_destination_configs",
    "typeScriptTag": "pipelineDestinationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/{id}",
    "method": "updateByIdPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/{id}/frontend",
    "method": "getFrontend",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/{id}/job",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_frontend_apps_configs/rearrange",
    "method": "rearrangePartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_frontend_apps_configs",
    "typeScriptTag": "pipelineFrontendAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs",
    "method": "getPipelineImportAppsConfigsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs",
    "method": "postPipelineImportAppsConfigs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/{id}",
    "method": "patchById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/{id}",
    "method": "updatePipelineImportAppsConfigsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/{id}/frontend",
    "method": "frontendRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/{id}/job",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_import_apps_configs/rearrange",
    "method": "rearrangePartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_import_apps_configs",
    "typeScriptTag": "pipelineImportAppsConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/{id}",
    "method": "patchById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/{id}/frontend",
    "method": "frontendRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/{id}/job",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/pipeline_transformation_configs/rearrange",
    "method": "rearrangePartialUpdate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "pipeline_transformation_configs",
    "typeScriptTag": "pipelineTransformationConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/plugin_configs",
    "method": "getByProjectId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/plugin_configs",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/plugin_configs/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/plugin_configs/{id}",
    "method": "getByProjectId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/plugin_configs/{id}",
    "method": "updateByIdPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/plugin_configs/{id}",
    "method": "updateByProjectId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/plugin_configs/{id}/frontend",
    "method": "getFrontend",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/plugin_configs/{id}/job",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this plugin config.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "config",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONFIG"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ERROR"
      },
      {
        "name": "team_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_INFO"
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DELIVERY_RATE_24H"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/plugin_configs/{plugin_config_id}/logs",
    "method": "getLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "pluginConfigId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PLUGIN_CONFIG_ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/plugin_configs/rearrange",
    "method": "rearrangePatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "plugin_configs",
    "typeScriptTag": "pluginConfigs",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "order",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "config",
        "schema": "string",
        "description": ""
      },
      {
        "name": "error",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "plugin_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "delivery_rate_24h",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleted",
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
    "url": "/api/projects/{project_id}/property_definitions",
    "method": "getByProjectIdPropertyDefinitions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "property_definitions",
    "typeScriptTag": "propertyDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "eventNames",
        "schema": "string",
        "description": "If sent, response value will have `is_seen_on_filtered_events` populated. JSON-encoded"
      },
      {
        "name": "excludedProperties",
        "schema": "string",
        "description": "JSON-encoded list of excluded properties"
      },
      {
        "name": "filterByEventNames",
        "schema": "boolean",
        "description": "Whether to return only properties for events in `event_names`"
      },
      {
        "name": "groupTypeIndex",
        "schema": "integer",
        "description": "What group type is the property for. Only should be set if `type=group`"
      },
      {
        "name": "isFeatureFlag",
        "schema": "boolean",
        "description": "Whether to return only (or excluding) feature flag properties"
      },
      {
        "name": "isNumerical",
        "schema": "boolean",
        "description": "Whether to return only (or excluding) numerical property definitions"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "properties",
        "schema": "string",
        "description": "Comma-separated list of properties to filter"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "Searches properties by name"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "What property definitions to return\n\n* `event` - event\n* `person` - person\n* `group` - group",
        "default": "event"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/property_definitions/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "property_definitions",
    "typeScriptTag": "propertyDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/property_definitions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "property_definitions",
    "typeScriptTag": "propertyDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/property_definitions/{id}",
    "method": "patchByIdProperty",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "property_definitions",
    "typeScriptTag": "propertyDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/property_definitions/{id}",
    "method": "putByIdCamelCase",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "property_definitions",
    "typeScriptTag": "propertyDefinitions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/property_definitions/seen_together",
    "method": "getEventNamesSeenTogether",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "property_definitions",
    "typeScriptTag": "propertyDefinitions",
    "description": "Allows a caller to provide a list of event names and a single property name\nReturns a map of the event names to a boolean representing whether that property has ever been seen with that event_name",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/query",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "async",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": null
      },
      {
        "name": "client_query_id",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "query",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "refresh",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": null
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
    "url": "/api/projects/{project_id}/query/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "(Experimental)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Query cancelled"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/query/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "(Experimental)",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Query status"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/query/draft_sql",
    "method": "draftSqlRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "query",
    "typeScriptTag": "query",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/session_recording_playlists",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "createdBy",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
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
    "url": "/api/projects/{project_id}/session_recording_playlists",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pinned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
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
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}",
    "method": "getByShortId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
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
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}",
    "method": "updateShortId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "short_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pinned",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_modified_by",
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
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}",
    "method": "updateRecordingPlaylist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pinned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
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
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings",
    "method": "getRecordings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
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
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}",
    "method": "deleteRecording",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "sessionRecordingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSION_RECORDING_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/session_recording_playlists/{short_id}/recordings/{session_recording_id}",
    "method": "createRecording",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session_recording_playlists",
    "typeScriptTag": "sessionRecordingPlaylists",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "sessionRecordingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSION_RECORDING_ID"
      },
      {
        "name": "shortId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "short_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SHORT_ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "derived_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pinned",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "last_modified_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_MODIFIED_AT"
      },
      {
        "name": "last_modified_by",
        "schema": "object",
        "required": true,
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
    "url": "/api/projects/{project_id}/session_recordings",
    "method": "getMultiple",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this session recording.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/session_recordings/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this session recording.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/{id}/persist",
    "method": "persistSessionRecording",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this session recording.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISTINCT_ID"
      },
      {
        "name": "viewed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIEWED"
      },
      {
        "name": "recording_duration",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "active_seconds",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "inactive_seconds",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_TIME"
      },
      {
        "name": "end_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_TIME"
      },
      {
        "name": "click_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "keypress_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "mouse_activity_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "console_log_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "console_warn_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "console_error_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "start_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_URL"
      },
      {
        "name": "person",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "storage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STORAGE"
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
    "url": "/api/projects/{project_id}/session_recordings/{id}/similar_sessions",
    "method": "getSimilarSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this session recording.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/{id}/snapshots",
    "method": "snapshotsRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "Snapshots can be loaded from multiple places:\n1. From S3 if the session is older than our ingestion limit. This will be multiple files that can be streamed to the client\n2. or from Redis if the session is newer than our ingestion limit.\n\nClients need to call this API twice.\nFirst without a source parameter to get a list of sources supported by the given session.\nAnd then once for each source in the returned list to get the actual snapshots.\n\nNB version 1 of this API has been deprecated and ClickHouse stored snapshots are no longer supported.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this session recording.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/{id}/summarize",
    "method": "summarizeCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this session recording.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISTINCT_ID"
      },
      {
        "name": "viewed",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIEWED"
      },
      {
        "name": "recording_duration",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "active_seconds",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "inactive_seconds",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_TIME"
      },
      {
        "name": "end_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_TIME"
      },
      {
        "name": "click_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "keypress_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "mouse_activity_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "console_log_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "console_warn_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "console_error_count",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "start_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_URL"
      },
      {
        "name": "person",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "storage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STORAGE"
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
    "url": "/api/projects/{project_id}/session_recordings/{recording_id}/sharing",
    "method": "getSharing",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "recordingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECORDING_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/error_clusters",
    "method": "getErrorClusters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/matching_events",
    "method": "getSessionRecordingMatchingEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "\n        Gets a list of event ids that match the given session recording filter.\n        The filter must include a single session ID.\n        And must include at least one event or action filter.\n        This API is intended for internal use and might have unannounced breaking changes.",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/session_recordings/properties",
    "method": "getProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session_recordings",
    "typeScriptTag": "sessionRecordings",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/subscriptions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/subscriptions",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "summary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUMMARY"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "insight",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "target_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_TYPE"
      },
      {
        "name": "target_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_VALUE"
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "interval",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "byweekday",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bysetpos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "until_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "next_delivery_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_DELIVERY_DATE"
      },
      {
        "name": "invite_message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Standard Subscription serializer."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/subscriptions/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Hard delete of this model is not allowed. Use a patch API call to set \"deleted\" to true",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this subscription.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/subscriptions/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this subscription.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Standard Subscription serializer."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/subscriptions/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this subscription.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "dashboard",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "insight",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "target_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "target_value",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "interval",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "byweekday",
        "schema": "array",
        "description": ""
      },
      {
        "name": "bysetpos",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "count",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "until_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "next_delivery_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "invite_message",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Standard Subscription serializer."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/subscriptions/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A unique integer value identifying this subscription.",
        "example": 0
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "summary",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUMMARY"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "dashboard",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "insight",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "target_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_TYPE"
      },
      {
        "name": "target_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_VALUE"
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "interval",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "byweekday",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "bysetpos",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "until_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "next_delivery_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEXT_DELIVERY_DATE"
      },
      {
        "name": "invite_message",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Standard Subscription serializer."
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/surveys",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/surveys",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
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
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "linked_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "linked_flag_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targeting_flag_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targeting_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "targeting_flag_filters",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "remove_targeting_flag",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "questions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "appearance",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/surveys/{id}",
    "method": "destroy",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this survey.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No response body"
      }
    ]
  },
  {
    "url": "/api/projects/{project_id}/surveys/{id}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this survey.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/projects/{project_id}/surveys/{id}",
    "method": "updateSurveyById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this survey.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
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
        "description": ""
      },
      {
        "name": "linked_flag",
        "schema": "object",
        "description": ""
      },
      {
        "name": "linked_flag_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "targeting_flag_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "targeting_flag",
        "schema": "object",
        "description": ""
      },
      {
        "name": "targeting_flag_filters",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "remove_targeting_flag",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "questions",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "appearance",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
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
    "url": "/api/projects/{project_id}/surveys/{id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "A UUID string identifying this survey.",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
      },
      {
        "name": "description",
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
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "linked_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "linked_flag_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targeting_flag",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "questions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "appearance",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "created_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
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
    "url": "/api/projects/{project_id}/surveys/responses_count",
    "method": "getResponsesCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "surveys",
    "typeScriptTag": "surveys",
    "description": "",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.",
        "example": "PROJECT_ID"
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
    "url": "/api/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "isStaff",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return per page."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The initial index from which to return the results."
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
    "url": "/api/users/{uuid}",
    "method": "retrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/users/{uuid}",
    "method": "patchUuid",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "date_joined",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "distinct_id",
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
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pending_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_opt_in",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_email_verified",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "notification_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "anonymize_data",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "toolbar_mode",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "has_password",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_impersonated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "team",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organizations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "set_current_organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "set_current_team",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "current_password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "events_column_config",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "has_social_auth",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "has_seen_product_intro_for",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "scene_personalisation",
        "schema": "array",
        "description": ""
      },
      {
        "name": "theme_mode",
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
  },
  {
    "url": "/api/users/{uuid}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "date_joined",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_JOINED"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "pending_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_email_verified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notification_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymize_data",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "toolbar_mode",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_password",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_impersonated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "team",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "set_current_organization",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "set_current_team",
        "schema": "string",
        "required": false,
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
        "name": "current_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "events_column_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_social_auth",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_seen_product_intro_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "scene_personalisation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "theme_mode",
        "schema": "undefined",
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
    "url": "/api/users/{uuid}/request_email_verification",
    "method": "requestEmailVerificationCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "date_joined",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_JOINED"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "pending_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_email_verified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notification_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymize_data",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "toolbar_mode",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_password",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_impersonated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "team",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "set_current_organization",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "set_current_team",
        "schema": "string",
        "required": false,
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
        "name": "current_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "events_column_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_social_auth",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_seen_product_intro_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "scene_personalisation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "theme_mode",
        "schema": "undefined",
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
    "url": "/api/users/{uuid}/scene_personalisation",
    "method": "createScenePersonalisation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "date_joined",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_JOINED"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "pending_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_email_verified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notification_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymize_data",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "toolbar_mode",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_password",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_impersonated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "team",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "set_current_organization",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "set_current_team",
        "schema": "string",
        "required": false,
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
        "name": "current_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "events_column_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_social_auth",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_seen_product_intro_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "scene_personalisation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "theme_mode",
        "schema": "undefined",
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
    "url": "/api/users/{uuid}/start_2fa_setup",
    "method": "start2FaSetupRetrieve",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
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
    "url": "/api/users/{uuid}/validate_2fa",
    "method": "validate2FaCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "date_joined",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_JOINED"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "pending_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_email_verified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notification_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymize_data",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "toolbar_mode",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_password",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_impersonated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "team",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "set_current_organization",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "set_current_team",
        "schema": "string",
        "required": false,
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
        "name": "current_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "events_column_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_social_auth",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_seen_product_intro_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "scene_personalisation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "theme_mode",
        "schema": "undefined",
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
    "url": "/api/users/{uuid}/verify_email",
    "method": "verifyEmailCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "date_joined",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE_JOINED"
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UUID"
      },
      {
        "name": "distinct_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "pending_email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_opt_in",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_email_verified",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notification_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "anonymize_data",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "toolbar_mode",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "has_password",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "is_staff",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_impersonated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "team",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "organizations",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "set_current_organization",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "set_current_team",
        "schema": "string",
        "required": false,
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
        "name": "current_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "events_column_config",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "is_2fa_enabled",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_social_auth",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "has_seen_product_intro_for",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "scene_personalisation",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "theme_mode",
        "schema": "undefined",
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
  }
]
    }
      language="TypeScript"
      apiTitle="PostHog API"
      apiBaseUrl="https://app.posthog.com"
      apiVersion="null"
      endpoints={240}
      sdkMethods={390}
      schemas={377}
      parameters={3268}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/posthog/openapi.yaml"
      developerDocumentation="posthog.com/docs"
    />
  );
}
  