import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LaunchDarklyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="launch-darkly-typescript-sdk"
      metaDescription={`LaunchDarkly is a feature management platform that empowers software teams to build better software faster with feature flags. By decoupling features from code deployments, teams can control and manage feature releases, target specific user segments, and monitor feature performance in real-time. With LaunchDarkly, teams can mitigate risks, optimize development workflows, and deliver value to customers with confidence.`}
      company="LaunchDarkly"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/logo.png"
      companyKebabCase="launch-darkly"
      clientNameCamelCase="launchDarkly"
      homepage="launchdarkly.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/favicon.png"
      contactUrl="https://support.launchdarkly.com"
      contactEmail="support@launchdarkly.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["developer_tools","automation","feature_management","software_development","feature_flags","analytics"]}
      methods={[
  {
    "url": "/api/v2",
    "method": "getResourceCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other",
    "typeScriptTag": "other",
    "description": "Root resource",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/relay-auto-configs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Relay Proxy configurations",
    "typeScriptTag": "relayProxyConfigurations",
    "description": "List Relay Proxy configs",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/relay-auto-configs",
    "method": "createNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Relay Proxy configurations",
    "typeScriptTag": "relayProxyConfigurations",
    "description": "Create a new Relay Proxy config",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "policy",
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/relay-auto-configs/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Relay Proxy configurations",
    "typeScriptTag": "relayProxyConfigurations",
    "description": "Delete Relay Proxy config by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The relay auto config id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/relay-auto-configs/{id}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Relay Proxy configurations",
    "typeScriptTag": "relayProxyConfigurations",
    "description": "Get Relay Proxy config",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The relay auto config id",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/account/relay-auto-configs/{id}",
    "method": "updateConfigPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Relay Proxy configurations",
    "typeScriptTag": "relayProxyConfigurations",
    "description": "Update a Relay Proxy config",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The relay auto config id",
        "example": "ID"
      },
      {
        "name": "patch",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
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
    "url": "/api/v2/account/relay-auto-configs/{id}/reset",
    "method": "resetSecretKeyWithExpiry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Relay Proxy configurations",
    "typeScriptTag": "relayProxyConfigurations",
    "description": "Reset Relay Proxy configuration key",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Relay Proxy configuration ID",
        "example": "ID"
      },
      {
        "name": "expiry",
        "schema": "integer",
        "description": "An expiration time for the old Relay Proxy configuration key, expressed as a Unix epoch time in milliseconds. By default, the Relay Proxy configuration will expire immediately."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications",
    "method": "listApplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Get applications",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "Accepts filter by `key`, `name`, `kind`, and `autoAdded`. Example: `filter=kind anyOf ['mobile', 'server'],key equals 'test-key'`. To learn more about the filter syntax, read [Filtering applications and application versions](https://apidocs.launchdarkly.com)#filtering-contexts-and-context-instances)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of applications to return. Defaults to 10."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response. Options: `flags`."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications/{applicationKey}",
    "method": "removeApplication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Delete application",
    "parameters": [
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The application key",
        "example": "APPLICATIONKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications/{applicationKey}",
    "method": "getApplicationByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Get application by key",
    "parameters": [
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The application key",
        "example": "APPLICATIONKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response. Options: `flags`."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications/{applicationKey}",
    "method": "updateApplicationPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Update application",
    "parameters": [
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The application key",
        "example": "APPLICATIONKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications/{applicationKey}/versions",
    "method": "getApplicationVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Get application versions by application key",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "Accepts filter by `key`, `name`, `supported`, and `autoAdded`. Example: `filter=key equals 'test-key'`. To learn more about the filter syntax, read [Filtering applications and application versions](https://apidocs.launchdarkly.com)#filtering-contexts-and-context-instances)."
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The application key",
        "example": "APPLICATIONKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of versions to return. Defaults to 50."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Accepts sorting order and fields. Fields can be comma separated. Possible fields are `creationDate`, `name`. Examples: `sort=name` sort by names ascending, `sort=-name,creationDate` sort by names descending and creationDate ascending."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications/{applicationKey}/versions/{versionKey}",
    "method": "removeVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Delete application version",
    "parameters": [
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The application key",
        "example": "APPLICATIONKEY"
      },
      {
        "name": "versionKey",
        "schema": "string",
        "required": true,
        "description": "The application version key",
        "example": "VERSIONKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/applications/{applicationKey}/versions/{versionKey}",
    "method": "updateVersionPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Applications (https://",
    "typeScriptTag": "applicationsHttps:",
    "description": "Update application version",
    "parameters": [
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "The application key",
        "example": "APPLICATIONKEY"
      },
      {
        "name": "versionKey",
        "schema": "string",
        "required": true,
        "description": "The application version key",
        "example": "VERSIONKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/approval-requests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "List approval requests",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of fields to expand in the response. Supported fields are explained above."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of approvals to return. Defaults to 20. Maximum limit is 200."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
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
      }
    ]
  },
  {
    "url": "/api/v2/approval-requests",
    "method": "createRequestFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Create approval request",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Requesting to update targeting"
      },
      {
        "name": "resourceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCEID"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "notifyMemberIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "1234a56b7c89d012345e678f"
        ]
      },
      {
        "name": "notifyTeamKeys",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-reviewer-team"
        ]
      },
      {
        "name": "integrationConfig",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/approval-requests/{id}",
    "method": "deleteRequest",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Delete approval request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The approval request ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/approval-requests/{id}",
    "method": "getRequestById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Get approval request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The approval request ID",
        "example": "ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of fields to expand in the response. Supported fields are explained above."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/approval-requests/{id}/apply",
    "method": "applyRequestFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Apply approval request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature flag approval request ID",
        "example": "ID"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "Looks good, thanks for updating"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/approval-requests/{id}/reviews",
    "method": "reviewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Review approval request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The approval request ID",
        "example": "ID"
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "",
        "example": "approve"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "Looks good, thanks for updating"
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
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/auditlog",
    "method": "listAuditLogEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "List audit log entries",
    "parameters": [
      {
        "name": "before",
        "schema": "integer",
        "description": "A timestamp filter, expressed as a Unix epoch time in milliseconds.  All entries this returns occurred before the timestamp."
      },
      {
        "name": "after",
        "schema": "integer",
        "description": "A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries this returns occurred after the timestamp."
      },
      {
        "name": "q",
        "schema": "string",
        "description": "Text to search for. You can search for the full or partial name of the resource."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "A limit on the number of audit log entries that return. Set between 1 and 20. The default is 10."
      },
      {
        "name": "spec",
        "schema": "string",
        "description": "A resource specifier that lets you filter audit log listings by resource"
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
      }
    ]
  },
  {
    "url": "/api/v2/auditlog/{id}",
    "method": "detailEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit log",
    "typeScriptTag": "auditLog",
    "description": "Get audit log entry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the audit log entry",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/extinctions",
    "method": "listExtinctions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "List extinctions",
    "parameters": [
      {
        "name": "repoName",
        "schema": "string",
        "description": "Filter results to a specific repository"
      },
      {
        "name": "branchName",
        "schema": "string",
        "description": "Filter results to a specific branch. By default, only the default branch will be queried for extinctions."
      },
      {
        "name": "projKey",
        "schema": "string",
        "description": "Filter results to a specific project"
      },
      {
        "name": "flagKey",
        "schema": "string",
        "description": "Filter results to a specific flag key"
      },
      {
        "name": "from",
        "schema": "integer",
        "description": "Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `to`."
      },
      {
        "name": "to",
        "schema": "integer",
        "description": "Filter results to a specific timeframe based on commit time, expressed as a Unix epoch time in milliseconds. Must be used with `from`."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories",
    "method": "listRepositories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "List repositories",
    "parameters": [
      {
        "name": "withBranches",
        "schema": "string",
        "description": "If set to any value, the endpoint returns repositories with associated branch data"
      },
      {
        "name": "withReferencesForDefaultBranch",
        "schema": "string",
        "description": "If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch"
      },
      {
        "name": "projKey",
        "schema": "string",
        "description": "A LaunchDarkly project key. If provided, this filters code reference results to the specified project."
      },
      {
        "name": "flagKey",
        "schema": "string",
        "description": "If set to any value, the endpoint returns repositories with associated branch data, as well as code references for the default git branch"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories",
    "method": "createRepository",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Create repository",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LaunchDarkly-Docs"
      },
      {
        "name": "sourceLink",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://github.com/launchdarkly/LaunchDarkly-Docs"
      },
      {
        "name": "commitUrlTemplate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://github.com/launchdarkly/LaunchDarkly-Docs/commit/${sha}"
      },
      {
        "name": "hunkUrlTemplate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://github.com/launchdarkly/LaunchDarkly-Docs/blob/${sha}/${filePath}#L${lineNumber}"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "github"
      },
      {
        "name": "defaultBranch",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "main"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}",
    "method": "deleteRepository",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Delete repository",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}",
    "method": "getRepositoryByRepo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Get repository",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}",
    "method": "updateRepositorySettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Update repository",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}/branch-delete-tasks",
    "method": "asynchronouslyDeleteBranches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Delete branches",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name to delete branches for.",
        "example": "REPO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}/branches",
    "method": "listBranches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "List branches",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}/branches/{branch}",
    "method": "getBranch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Get branch",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The url-encoded branch name",
        "example": "BRANCH"
      },
      {
        "name": "projKey",
        "schema": "string",
        "description": "Filter results to a specific project"
      },
      {
        "name": "flagKey",
        "schema": "string",
        "description": "Filter results to a specific flag key"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}/branches/{branch}",
    "method": "upsertBranch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Upsert branch",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The URL-encoded branch name",
        "example": "BRANCH"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "main"
      },
      {
        "name": "head",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3"
      },
      {
        "name": "updateSequenceId",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 25
      },
      {
        "name": "syncTime",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "references",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "commitTime",
        "schema": "integer",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/repositories/{repo}/branches/{branch}/extinction-events",
    "method": "createExtinction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Create extinction",
    "parameters": [
      {
        "name": "repo",
        "schema": "string",
        "required": true,
        "description": "The repository name",
        "example": "REPO"
      },
      {
        "name": "branch",
        "schema": "string",
        "required": true,
        "description": "The URL-encoded branch name",
        "example": "BRANCH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/statistics",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Get links to code reference repositories for each project",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/code-refs/statistics/{projectKey}",
    "method": "getStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Code references",
    "typeScriptTag": "codeReferences",
    "description": "Get code references statistics for flags",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "flagKey",
        "schema": "string",
        "description": "Filter results to a specific flag key"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/destinations",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Export destinations",
    "typeScriptTag": "dataExportDestinations",
    "description": "List destinations",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/destinations/{projectKey}/{environmentKey}",
    "method": "createDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Data Export destinations",
    "typeScriptTag": "dataExportDestinations",
    "description": "Create Data Export destination",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "example-destination"
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "",
        "example": "google-pubsub"
      },
      {
        "name": "config",
        "schema": "undefined",
        "description": "",
        "example": "{\"project\":\"test-prod\",\"topic\":\"ld-pubsub-test-192301\"}"
      },
      {
        "name": "on",
        "schema": "boolean",
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
        "description": ""
      },
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/destinations/{projectKey}/{environmentKey}/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Data Export destinations",
    "typeScriptTag": "dataExportDestinations",
    "description": "Delete Data Export destination",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Data Export destination ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Destination response"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/destinations/{projectKey}/{environmentKey}/{id}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Export destinations",
    "typeScriptTag": "dataExportDestinations",
    "description": "Get destination",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Data Export destination ID",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/destinations/{projectKey}/{environmentKey}/{id}",
    "method": "updateDestinationPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Data Export destinations",
    "typeScriptTag": "dataExportDestinations",
    "description": "Update Data Export destination",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Data Export destination ID",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}",
    "method": "listLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flag links (https://",
    "typeScriptTag": "flagLinksHttps:",
    "description": "List flag links",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}",
    "method": "createFlagLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flag links (https://",
    "typeScriptTag": "flagLinksHttps:",
    "description": "Create flag link",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Example link title"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Example link description"
      },
      {
        "name": "key",
        "schema": "string",
        "description": "",
        "example": "flag-link-key-123abc"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "deepLink",
        "schema": "string",
        "description": "",
        "example": "https://example.com/archives/123123123"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}",
    "method": "deleteFlagLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Flag links (https://",
    "typeScriptTag": "flagLinksHttps:",
    "description": "Delete flag link",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The flag link ID or Key",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-links/projects/{projectKey}/flags/{featureFlagKey}/{id}",
    "method": "updateFlagLink",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Flag links (https://",
    "typeScriptTag": "flagLinksHttps:",
    "description": "Update flag link",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The flag link ID",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-status/{projectKey}/{featureFlagKey}",
    "method": "acrossEnvironments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Get flag status across environments",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "env",
        "schema": "string",
        "description": "Optional environment filter"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-statuses/{projectKey}/{environmentKey}",
    "method": "listFlagStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "List feature flag statuses",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Get feature flag status",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "List feature flags",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "env",
        "schema": "string",
        "description": "Filter configurations by environment"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter feature flags by tag"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of feature flags to return. Defaults to -1, which returns all flags"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "Deprecated, use `filter=archived:true` instead. A boolean to filter the list to archived flags. When this is absent, only unarchived flags will be returned"
      },
      {
        "name": "summary",
        "schema": "boolean",
        "description": "By default, flags do _not_ include their lists of prerequisites, targets, or rules for each environment. Set `summary=0` to include these fields for each flag returned."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order. Read the endpoint description for a full list of available sort fields."
      },
      {
        "name": "compare",
        "schema": "boolean",
        "description": "A boolean to filter results by only flags that have differences between environments"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of fields to expand in the response. Supported fields are explained above."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}",
    "method": "createFeatureFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Create a feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "clone",
        "schema": "string",
        "description": "The key of the feature flag to be cloned. The key identifies the flag in your code. For example, setting `clone=flagKey` copies the full targeting configuration for all environments, including `on/off` state, from the original flag to the new flag."
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-tag"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This flag controls the example widgets"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My flag"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "flag-key-123abc"
      },
      {
        "name": "includeInSnippet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "clientSideAvailability",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "variations",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "value": true
          },
          {
            "value": false
          }
        ]
      },
      {
        "name": "temporary",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "customProperties",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "defaults",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "purpose",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "migration"
      },
      {
        "name": "migrationSettings",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{environmentKey}/{featureFlagKey}/dependent-flags",
    "method": "listDependentFlagsByEnv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags (https://",
    "typeScriptTag": "featureFlagsHttps:",
    "description": "List dependent feature flags by environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}",
    "method": "deleteFlag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Delete feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key. The key identifies the flag in your code.",
        "example": "FEATUREFLAGKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}",
    "method": "singleFlagByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Get feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "env",
        "schema": "string",
        "description": "Filter configurations by environment"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of fields to expand in the response. Supported fields are explained above."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}",
    "method": "updateFeatureFlag",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Update feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key. The key identifies the flag in your code.",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "patch",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/copy",
    "method": "copyFlagSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Copy feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key. The key identifies the flag in your code.",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "source",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "target",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includedActions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "updateOn"
        ]
      },
      {
        "name": "excludedActions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "updateOn"
        ]
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/dependent-flags",
    "method": "listDependentFlags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags (https://",
    "typeScriptTag": "featureFlagsHttps:",
    "description": "List dependent feature flags",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/experiments/{environmentKey}/{metricKey}",
    "method": "getLegacyExperimentResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Get legacy experiment results (https://",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "metricKey",
        "schema": "string",
        "required": true,
        "description": "The metric key",
        "example": "METRICKEY"
      },
      {
        "name": "from",
        "schema": "integer",
        "description": "A timestamp denoting the start of the data collection period, expressed as a Unix epoch time in milliseconds."
      },
      {
        "name": "to",
        "schema": "integer",
        "description": "A timestamp denoting the end of the data collection period, expressed as a Unix epoch time in milliseconds."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}",
    "method": "getContextInstanceSegmentsMembershipByEnv",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Get expiring context targets for feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-targets/{environmentKey}",
    "method": "updateExpiringContextTargets",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Update expiring context targets on feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "kind": "addExpireUserTargetDate",
            "userKey": "sandy",
            "value": 1686412800000,
            "variationId": "ce12d345-a1b2-4fb5-a123-ab123d4d5f5d"
          }
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}",
    "method": "listExpiringUserTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Get expiring user targets for feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/expiring-user-targets/{environmentKey}",
    "method": "updateExpiringUserTargets",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Feature flags",
    "typeScriptTag": "featureFlags",
    "description": "Update expiring user targets on feature flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "kind": "addExpireUserTargetDate",
            "userKey": "sandy",
            "value": 1686412800000,
            "variationId": "ce12d345-a1b2-4fb5-a123-ab123d4d5f5d"
          }
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}",
    "method": "listTriggerWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flag triggers",
    "typeScriptTag": "flagTriggers",
    "description": "List flag triggers",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}",
    "method": "createTriggerWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Flag triggers",
    "typeScriptTag": "flagTriggers",
    "description": "Create flag trigger",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "example comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          {
            "kind": "turnFlagOn"
          }
        ]
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "generic-trigger"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Flag triggers",
    "typeScriptTag": "flagTriggers",
    "description": "Delete flag trigger",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The flag trigger ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}",
    "method": "getTriggerById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flag triggers",
    "typeScriptTag": "flagTriggers",
    "description": "Get flag trigger by ID",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The flag trigger ID",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{featureFlagKey}/triggers/{environmentKey}/{id}",
    "method": "updateTriggerWorkflowPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Flag triggers",
    "typeScriptTag": "flagTriggers",
    "description": "Update flag trigger",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The flag trigger ID",
        "example": "ID"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "description": "",
        "example": [
          {
            "kind": "disableTrigger"
          }
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/flags/{projectKey}/{flagKey}/release",
    "method": "getCurrentRelease",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Releases (https://",
    "typeScriptTag": "releasesHttps:",
    "description": "Get release for flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "flagKey",
        "schema": "string",
        "required": true,
        "description": "The flag key",
        "example": "FLAGKEY"
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
    "url": "/api/v2/flags/{projectKey}/{flagKey}/release",
    "method": "updateActiveReleasePatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Releases (https://",
    "typeScriptTag": "releasesHttps:",
    "description": "Patch release for flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "flagKey",
        "schema": "string",
        "required": true,
        "description": "The flag key",
        "example": "FLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/big-segment-store",
    "method": "listBigSegmentStoreIntegrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations (https://",
    "typeScriptTag": "integrationsHttps:",
    "description": "List all big segment store integrations",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}",
    "method": "createPersistentStoreIntegration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations (https://",
    "typeScriptTag": "integrationsHttps:",
    "description": "Create big segment store integration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key, either `redis` or `dynamodb`",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-tag"
        ]
      },
      {
        "name": "on",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "config",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Sample integration"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}",
    "method": "deleteBigSegmentStoreIntegration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integrations (https://",
    "typeScriptTag": "integrationsHttps:",
    "description": "Delete big segment store integration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key, either `redis` or `dynamodb`",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "The integration ID",
        "example": "INTEGRATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action completed successfully"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}",
    "method": "getBigSegmentStoreIntegrationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integrations (https://",
    "typeScriptTag": "integrationsHttps:",
    "description": "Get big segment store integration by ID",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key, either `redis` or `dynamodb`",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "The integration ID",
        "example": "INTEGRATIONID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/big-segment-store/{projectKey}/{environmentKey}/{integrationKey}/{integrationId}",
    "method": "updateBigSegmentStore",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integrations (https://",
    "typeScriptTag": "integrationsHttps:",
    "description": "Update big segment store integration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key, either `redis` or `dynamodb`",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "The integration ID",
        "example": "INTEGRATIONID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore",
    "method": "listDeliveryConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "List all delivery configurations",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}",
    "method": "getDeliveryConfigurationsByEnvironment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "Get delivery configurations by environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}",
    "method": "createDeliveryConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "Create delivery configuration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-tag"
        ]
      },
      {
        "name": "on",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "config",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Sample integration"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}",
    "method": "deleteDeliveryConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "Delete delivery configuration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The configuration ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "Get delivery configuration by ID",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The configuration ID",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}",
    "method": "updateDeliveryConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "Update delivery configuration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The configuration ID",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integration-capabilities/featureStore/{projectKey}/{environmentKey}/{integrationKey}/{id}/validate",
    "method": "validateDeliveryConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration delivery configurations (https://",
    "typeScriptTag": "integrationDeliveryConfigurationsHttps:",
    "description": "Validate delivery configuration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The configuration ID",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integrations/{integrationKey}",
    "method": "listByIntegration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration audit log subscriptions",
    "typeScriptTag": "integrationAuditLogSubscriptions",
    "description": "Get audit log subscriptions by integration",
    "parameters": [
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integrations/{integrationKey}",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integration audit log subscriptions",
    "typeScriptTag": "integrationAuditLogSubscriptions",
    "description": "Create audit log subscription",
    "parameters": [
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "testing-tag"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example audit log subscription."
      },
      {
        "name": "statements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "on",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "config",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "optional": "an optional property",
          "required": "the required property",
          "url": "https://example.com"
        }
      },
      {
        "name": "url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "apiKey",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integrations/{integrationKey}/{id}",
    "method": "deleteSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Integration audit log subscriptions",
    "typeScriptTag": "integrationAuditLogSubscriptions",
    "description": "Delete audit log subscription",
    "parameters": [
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The subscription ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integrations/{integrationKey}/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Integration audit log subscriptions",
    "typeScriptTag": "integrationAuditLogSubscriptions",
    "description": "Get audit log subscription by ID",
    "parameters": [
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The subscription ID",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/integrations/{integrationKey}/{id}",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Integration audit log subscriptions",
    "typeScriptTag": "integrationAuditLogSubscriptions",
    "description": "Update audit log subscription",
    "parameters": [
      {
        "name": "integrationKey",
        "schema": "string",
        "required": true,
        "description": "The integration key",
        "example": "INTEGRATIONKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the audit log subscription",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members",
    "method": "listMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account members",
    "typeScriptTag": "accountMembers",
    "description": "List account members",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of members to return in the response. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members",
    "method": "modifyMembersRoles",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Account members (https://",
    "typeScriptTag": "accountMembersHttps:",
    "description": "Modify account members",
    "parameters": [
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Optional comment about the update"
      },
      {
        "name": "instructions",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members",
    "method": "inviteNewMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account members",
    "typeScriptTag": "accountMembers",
    "description": "Invite new members",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Account members",
    "typeScriptTag": "accountMembers",
    "description": "Delete account member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The member ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account members",
    "typeScriptTag": "accountMembers",
    "description": "Get account member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The member ID",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members/{id}",
    "method": "updateMemberPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Account members",
    "typeScriptTag": "accountMembers",
    "description": "Modify an account member",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The member ID",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/members/{id}/teams",
    "method": "addToTeams",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account members",
    "typeScriptTag": "accountMembers",
    "description": "Add a member to teams",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The member ID",
        "example": "ID"
      },
      {
        "name": "teamKeys",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "team1",
          "team2"
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/metrics/{projectKey}",
    "method": "listForProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "List metrics",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
    "url": "/api/v2/metrics/{projectKey}",
    "method": "createNewMetric",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Create metric",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-tag"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional description"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "metric-key-123abc"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Example metric"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "custom"
      },
      {
        "name": "selector",
        "schema": "string",
        "required": false,
        "description": "",
        "example": ".dropdown-toggle"
      },
      {
        "name": "urls",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "invalid example"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "isNumeric",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "unit",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "orders"
      },
      {
        "name": "eventKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sales generated"
      },
      {
        "name": "successCriteria",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "HigherThanBaseline"
      },
      {
        "name": "randomizationUnits",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "user"
        ]
      },
      {
        "name": "unitAggregationType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "average"
      },
      {
        "name": "analysisType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "mean"
      },
      {
        "name": "percentileValue",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 95
      },
      {
        "name": "eventDefault",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/metrics/{projectKey}/{metricKey}",
    "method": "deleteByProjectAndMetricKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Delete metric",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "metricKey",
        "schema": "string",
        "required": true,
        "description": "The metric key",
        "example": "METRICKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/metrics/{projectKey}/{metricKey}",
    "method": "getSingleMetric",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get metric",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "metricKey",
        "schema": "string",
        "required": true,
        "description": "The metric key",
        "example": "METRICKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": "The specific version ID of the metric"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/metrics/{projectKey}/{metricKey}",
    "method": "updateByJsonPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Update metric",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "metricKey",
        "schema": "string",
        "required": true,
        "description": "The metric key",
        "example": "METRICKEY"
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
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/oauth/clients",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OAuth2 Clients",
    "typeScriptTag": "oAuth2Clients",
    "description": "Get clients",
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
      }
    ]
  },
  {
    "url": "/api/v2/oauth/clients",
    "method": "createClient",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OAuth2 Clients",
    "typeScriptTag": "oAuth2Clients",
    "description": "Create a LaunchDarkly OAuth 2.0 client",
    "parameters": [
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
        "name": "redirectUri",
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/oauth/clients/{clientId}",
    "method": "deleteClientById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OAuth2 Clients",
    "typeScriptTag": "oAuth2Clients",
    "description": "Delete OAuth 2.0 client",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client ID",
        "example": "CLIENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/api/v2/oauth/clients/{clientId}",
    "method": "getClientById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OAuth2 Clients",
    "typeScriptTag": "oAuth2Clients",
    "description": "Get client by ID",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client ID",
        "example": "CLIENTID"
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
    "url": "/api/v2/oauth/clients/{clientId}",
    "method": "updateClientById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "OAuth2 Clients",
    "typeScriptTag": "oAuth2Clients",
    "description": "Patch client by ID",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client ID",
        "example": "CLIENTID"
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
    "url": "/api/v2/openapi.json",
    "method": "getOpenapiSpec",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other",
    "typeScriptTag": "other",
    "description": "Gets the OpenAPI spec in json",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OpenAPI Spec"
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects",
    "method": "listProjectsDefault",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List projects",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of projects to return in the response. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is constructed as `field:value`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
      }
    ]
  },
  {
    "url": "/api/v2/projects",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create project",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "ops"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Project"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "project-key-123abc"
      },
      {
        "name": "includeInSnippetByDefault",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "defaultClientSideAvailability",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "environments",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}",
    "method": "deleteByProjectKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete project",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}",
    "method": "singleByProjectKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key.",
        "example": "PROJECTKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}",
    "method": "updateProjectPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update project",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/context-kinds",
    "method": "listContextKindsByProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Get context kinds",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/context-kinds/{key}",
    "method": "createOrUpdateKind",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Create or update context kind",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The context kind key",
        "example": "KEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An example context kind for organizations"
      },
      {
        "name": "version",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "organization"
      },
      {
        "name": "hideInTargeting",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "archived",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
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
    "url": "/api/v2/projects/{projectKey}/environments",
    "method": "listEnvironments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "List environments",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of environments to return in the response. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form `field:value`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments",
    "method": "createNewEnvironment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Create environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "ops"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Environment"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "environment-key-123abc"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "F5A623"
      },
      {
        "name": "defaultTtl",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 5
      },
      {
        "name": "secureMode",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "defaultTrackEvents",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "confirmChanges",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "requireComments",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "source",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "critical",
        "schema": "boolean",
        "required": false,
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}",
    "method": "removeByEnvironmentKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Delete environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}",
    "method": "getByProjectAndKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Get environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}",
    "method": "updateEnvironmentPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Update environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/apiKey",
    "method": "resetSdkKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Reset environment SDK key",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "expiry",
        "schema": "integer",
        "description": "The time at which you want the old SDK key to expire, in UNIX milliseconds. By default, the key expires immediately. During the period between this call and the time when the old SDK key expires, both the old SDK key and the new SDK key will work."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes",
    "method": "getAttributeNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Get context attribute names",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `name` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://apidocs.launchdarkly.com)."
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName}",
    "method": "getContextAttributeValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Get context attribute values",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "attributeName",
        "schema": "string",
        "required": true,
        "description": "The attribute name",
        "example": "ATTRIBUTENAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of context filters. This endpoint only accepts `kind` filters, with the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more about the filter syntax, read [Filtering contexts and context instances](https://apidocs.launchdarkly.com)."
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search",
    "method": "searchContextInstances",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Search for context instances",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the maximum number of items in the collection to return (max: 50, default: 20)"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://apidocs.launchdarkly.com)."
      },
      {
        "name": "includeTotalCount",
        "schema": "boolean",
        "description": "Specifies whether to include or omit the total count of matching context instances. Defaults to true."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "",
        "example": "{\"filter\": \"kindKeys:{\"contains\": [\"user:Henry\"]},\"sort\": \"-ts\",\"limit\": 50}"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "-ts"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "",
        "example": "QAGFKH1313KUGI2351"
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}",
    "method": "deleteContextInstance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Delete context instances",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The context instance ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}",
    "method": "getContextInstances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Get context instances",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The context instance ID",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the maximum number of context instances to return (max: 50, default: 20)"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Limits results to context instances with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://apidocs.launchdarkly.com)."
      },
      {
        "name": "includeTotalCount",
        "schema": "boolean",
        "description": "Specifies whether to include or omit the total count of matching context instances. Defaults to true."
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search",
    "method": "searchContexts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Search for contexts",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the maximum number of items in the collection to return (max: 50, default: 20)"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of context filters. To learn more about the filter syntax, read [Filtering contexts and context instances](https://apidocs.launchdarkly.com)."
      },
      {
        "name": "includeTotalCount",
        "schema": "boolean",
        "description": "Specifies whether to include or omit the total count of matching contexts. Defaults to true."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "",
        "example": "*.name startsWith Jo,kind anyOf [\"user\",\"organization\"]"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "-ts"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "",
        "example": "QAGFKH1313KUGI2351"
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{contextKind}/{contextKey}/flags/{featureFlagKey}",
    "method": "updateSettingsForContext",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Context settings",
    "typeScriptTag": "contextSettings",
    "description": "Update flag settings for context",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "contextKind",
        "schema": "string",
        "required": true,
        "description": "The context kind",
        "example": "CONTEXTKIND"
      },
      {
        "name": "contextKey",
        "schema": "string",
        "required": true,
        "description": "The context key",
        "example": "CONTEXTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "setting",
        "schema": "undefined",
        "description": "",
        "example": "existing_variation_value_to_use"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "make sure this context experiences a specific variation"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key}",
    "method": "getByKindAndKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Get contexts",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "The context kind",
        "example": "KIND"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "The context key",
        "example": "KEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the maximum number of items in the collection to return (max: 50, default: 20)"
      },
      {
        "name": "continuationToken",
        "schema": "string",
        "description": "Limits results to contexts with sort values after the value specified. You can use this for pagination, however, we recommend using the `next` link we provide instead."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending order by specifying `ts` for this value, or descending order by specifying `-ts`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of context filters. This endpoint only accepts an `applicationId` filter. To learn more about the filter syntax, read [Filtering contexts and context instances](https://apidocs.launchdarkly.com)."
      },
      {
        "name": "includeTotalCount",
        "schema": "boolean",
        "description": "Specifies whether to include or omit the total count of matching contexts. Defaults to true."
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments",
    "method": "listExperimentsInEnvironment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Get experiments",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of experiments to return. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form `field:value`. Supported fields are explained above."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above."
      },
      {
        "name": "lifecycleState",
        "schema": "string",
        "description": "A comma-separated list of experiment archived states. Supports `archived`, `active`, or both. Defaults to `active` experiments."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Create experiment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An example experiment, used in testing"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example experiment"
      },
      {
        "name": "maintainerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "12ab3c45de678910fgh12345"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "experiment-key-123abc"
      },
      {
        "name": "iteration",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Get experiment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "experimentKey",
        "schema": "string",
        "required": true,
        "description": "The experiment key",
        "example": "EXPERIMENTKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}",
    "method": "updateSemanticPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Patch experiment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "experimentKey",
        "schema": "string",
        "required": true,
        "description": "The experiment key",
        "example": "EXPERIMENTKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Optional comment"
      },
      {
        "name": "instructions",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/iterations",
    "method": "createIteration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Create iteration",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "experimentKey",
        "schema": "string",
        "required": true,
        "description": "The experiment key",
        "example": "EXPERIMENTKEY"
      },
      {
        "name": "hypothesis",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example hypothesis, the new button placement will increase conversion"
      },
      {
        "name": "canReshuffleTraffic",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "metrics",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "primarySingleMetricKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "metric-key-123abc"
      },
      {
        "name": "primaryFunnelKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "metric-group-key-123abc"
      },
      {
        "name": "treatments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "flags",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "randomizationUnit",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "user"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metric-groups/{metricGroupKey}/results",
    "method": "getResultsForMetricGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Get experiment results for metric group",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "experimentKey",
        "schema": "string",
        "required": true,
        "description": "The experiment key",
        "example": "EXPERIMENTKEY"
      },
      {
        "name": "metricGroupKey",
        "schema": "string",
        "required": true,
        "description": "The metric group key",
        "example": "METRICGROUPKEY"
      },
      {
        "name": "iterationId",
        "schema": "string",
        "description": "The iteration ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/experiments/{experimentKey}/metrics/{metricKey}/results",
    "method": "getExperimentMetricResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Get experiment results",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "experimentKey",
        "schema": "string",
        "required": true,
        "description": "The experiment key",
        "example": "EXPERIMENTKEY"
      },
      {
        "name": "metricKey",
        "schema": "string",
        "required": true,
        "description": "The metric key",
        "example": "METRICKEY"
      },
      {
        "name": "iterationId",
        "schema": "string",
        "description": "The iteration ID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of fields to expand in the response. Supported fields are explained above."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate",
    "method": "evaluateFlagsForContextInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contexts",
    "typeScriptTag": "contexts",
    "description": "Evaluate flags for context instance",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of feature flags to return. Defaults to -1, which returns all flags"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in descending order"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form `field operator value`. Supported fields are explained above."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/followers",
    "method": "getAllFlagFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Follow flags",
    "typeScriptTag": "followFlags",
    "description": "Get followers of all flags in a given project and environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/mobileKey",
    "method": "resetMobileSdkKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Environments",
    "typeScriptTag": "environments",
    "description": "Reset environment mobile SDK key",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/environments/{environmentKey}/segments/evaluate",
    "method": "evaluateSegmentMemberships",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "List segment memberships for context instance",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
    "url": "/api/v2/projects/{projectKey}/experimentation-settings",
    "method": "getExperimentationSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Get experimentation settings",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/experimentation-settings",
    "method": "updateExperimentationSettings",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Experiments (https://",
    "typeScriptTag": "experimentsHttps:",
    "description": "Update experimentation settings",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "randomizationUnits",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flag-defaults",
    "method": "getFlagDefaults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get flag defaults for project",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flag-defaults",
    "method": "updateFlagDefault",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update flag default for project",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flag-defaults",
    "method": "updateFlagDefaultsForProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create or update flag defaults for project",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "tag-1",
          "tag-2"
        ]
      },
      {
        "name": "temporary",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "booleanDefaults",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "defaultClientSideAvailability",
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
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests",
    "method": "listRequestsForFlag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "List approval requests for a flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests",
    "method": "createRequestFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Create approval request for a flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Requesting to update targeting"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "notifyMemberIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "1234a56b7c89d012345e678f"
        ]
      },
      {
        "name": "notifyTeamKeys",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-reviewer-team"
        ]
      },
      {
        "name": "executionDate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "operatingOnId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "6297ed79dee7dc14e1f9a80c"
      },
      {
        "name": "integrationConfig",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests-flag-copy",
    "method": "createFlagCopyRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Create approval request to copy flag configurations across environments",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key for the target environment",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "copy flag settings to another environment"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "notifyMemberIds",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "1234a56b7c89d012345e678f"
        ]
      },
      {
        "name": "notifyTeamKeys",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-reviewer-team"
        ]
      },
      {
        "name": "source",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "includedActions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "updateOn"
        ]
      },
      {
        "name": "excludedActions",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "updateOn"
        ]
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}",
    "method": "deleteApprovalRequestFlag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Delete approval request for a flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature flag approval request ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}",
    "method": "singleRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Get approval request for a flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature flag approval request ID",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply",
    "method": "applyRequestFlag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Apply approval request for a flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature flag approval request ID",
        "example": "ID"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "Looks good, thanks for updating"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews",
    "method": "reviewFlagRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Approvals",
    "typeScriptTag": "approvals",
    "description": "Review approval request for a flag",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The feature flag approval request ID",
        "example": "ID"
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "",
        "example": "approve"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "Looks good, thanks for updating"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers",
    "method": "flagFollowersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Follow flags",
    "typeScriptTag": "followFlags",
    "description": "Get followers of a flag in a project and environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}",
    "method": "removeFollower",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Follow flags",
    "typeScriptTag": "followFlags",
    "description": "Remove a member as a follower of a flag in a project and environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "memberId",
        "schema": "string",
        "required": true,
        "description": "The memberId of the member to remove as a follower of the flag. Reader roles can only remove themselves.",
        "example": "MEMBERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/followers/{memberId}",
    "method": "memberFollower",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Follow flags",
    "typeScriptTag": "followFlags",
    "description": "Add a member as a follower of a flag in a project and environment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "memberId",
        "schema": "string",
        "required": true,
        "description": "The memberId of the member to add as a follower of the flag. Reader roles can only add themselves.",
        "example": "MEMBERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes",
    "method": "listChanges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled changes",
    "typeScriptTag": "scheduledChanges",
    "description": "List scheduled changes",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes",
    "method": "createWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Scheduled changes",
    "typeScriptTag": "scheduledChanges",
    "description": "Create scheduled changes workflow",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "ignoreConflicts",
        "schema": "boolean",
        "description": "Whether to succeed (`true`) or fail (`false`) when these instructions conflict with existing scheduled changes"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "executionDate",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "instructions",
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}",
    "method": "deleteWorkflow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Scheduled changes",
    "typeScriptTag": "scheduledChanges",
    "description": "Delete scheduled changes workflow",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The scheduled change id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scheduled changes",
    "typeScriptTag": "scheduledChanges",
    "description": "Get a scheduled change",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The scheduled change id",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/scheduled-changes/{id}",
    "method": "updateWorkflow",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Scheduled changes",
    "typeScriptTag": "scheduledChanges",
    "description": "Update scheduled changes workflow",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The scheduled change ID",
        "example": "ID"
      },
      {
        "name": "ignoreConflicts",
        "schema": "boolean",
        "description": "Whether to succeed (`true`) or fail (`false`) when these new instructions conflict with existing scheduled changes"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows",
    "method": "getFeatureFlagEnvironmentsWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get workflows",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter results by workflow status. Valid status filters are `active`, `completed`, and `failed`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "A field to sort the items by. Prefix field by a dash ( - ) to sort in descending order. This endpoint supports sorting by `creationDate` or `stopDate`."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows",
    "method": "createWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Create workflow",
    "parameters": [
      {
        "name": "templateKey",
        "schema": "string",
        "description": "The template key to apply as a starting point for the new workflow"
      },
      {
        "name": "dryRun",
        "schema": "boolean",
        "description": "Whether to call the endpoint in dry-run mode"
      },
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Turn flag on for 10% of users each day"
      },
      {
        "name": "maintainerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Progressive rollout starting in two days"
      },
      {
        "name": "stages",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "templateKey",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}",
    "method": "deleteFromFeatureFlag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Delete workflow",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The workflow id",
        "example": "WORKFLOWID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action completed successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/workflows/{workflowId}",
    "method": "getCustomWorkflowById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Get custom workflow",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The workflow ID",
        "example": "WORKFLOWID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/flags/{flagKey}/environments/{environmentKey}/migration-safety-issues",
    "method": "getMigrationSafetyIssues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feature flags (https://",
    "typeScriptTag": "featureFlagsHttps:",
    "description": "Get migration safety issues",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "flagKey",
        "schema": "string",
        "required": true,
        "description": "The migration flag key",
        "example": "FLAGKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
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
        "statusCode": "204",
        "description": "No safety issues found"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/metric-groups",
    "method": "listMetricGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics (https://",
    "typeScriptTag": "metricsHttps:",
    "description": "List metric groups",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/metric-groups",
    "method": "createMetricGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Metrics (https://",
    "typeScriptTag": "metricsHttps:",
    "description": "Create metric group",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "ops"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Description of the metric group"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "metric-group-key-123abc"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My metric group"
      },
      {
        "name": "kind",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "funnel"
      },
      {
        "name": "maintainerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "569fdeadbeef1644facecafe"
      },
      {
        "name": "metrics",
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
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}",
    "method": "deleteMetricGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Metrics (https://",
    "typeScriptTag": "metricsHttps:",
    "description": "Delete metric group",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "metricGroupKey",
        "schema": "string",
        "required": true,
        "description": "The metric group key",
        "example": "METRICGROUPKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}",
    "method": "getMetricGroupDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics (https://",
    "typeScriptTag": "metricsHttps:",
    "description": "Get metric group",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "metricGroupKey",
        "schema": "string",
        "required": true,
        "description": "The metric group key",
        "example": "METRICGROUPKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/metric-groups/{metricGroupKey}",
    "method": "updateMetricGroupByKey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Metrics (https://",
    "typeScriptTag": "metricsHttps:",
    "description": "Patch metric group",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "metricGroupKey",
        "schema": "string",
        "required": true,
        "description": "The metric group key",
        "example": "METRICGROUPKEY"
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/release-pipelines",
    "method": "getAllReleasePipelines",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Release pipelines (https://",
    "typeScriptTag": "releasePipelinesHttps:",
    "description": "Get all release pipelines",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is of the form field:value. Read the endpoint description for a full list of available filter fields."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Defaults to 0. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
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
    "url": "/api/v2/projects/{projectKey}/release-pipelines",
    "method": "createNewPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Release pipelines (https://",
    "typeScriptTag": "releasePipelinesHttps:",
    "description": "Create a release pipeline",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-tag"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Standard pipeline to roll out to production"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "standard-pipeline"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Standard Pipeline"
      },
      {
        "name": "phases",
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
      }
    ]
  },
  {
    "url": "/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}",
    "method": "deletePipeline",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Release pipelines (https://",
    "typeScriptTag": "releasePipelinesHttps:",
    "description": "Delete release pipeline",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "pipelineKey",
        "schema": "string",
        "required": true,
        "description": "The release pipeline key",
        "example": "PIPELINEKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
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
    "url": "/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}",
    "method": "getByPipeKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Release pipelines (https://",
    "typeScriptTag": "releasePipelinesHttps:",
    "description": "Get release pipeline by key",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "pipelineKey",
        "schema": "string",
        "required": true,
        "description": "The release pipeline key",
        "example": "PIPELINEKEY"
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
    "url": "/api/v2/projects/{projectKey}/release-pipelines/{pipelineKey}",
    "method": "updatePipelinePatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Release pipelines (https://",
    "typeScriptTag": "releasePipelinesHttps:",
    "description": "Update a release pipeline",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "pipelineKey",
        "schema": "string",
        "required": true,
        "description": "The release pipeline key",
        "example": "PIPELINEKEY"
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
    "url": "/api/v2/public-ip-list",
    "method": "getIpList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other",
    "typeScriptTag": "other",
    "description": "Gets the public IP list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/roles",
    "method": "listCustomRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom roles",
    "typeScriptTag": "customRoles",
    "description": "List custom roles",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/roles",
    "method": "createNewRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom roles",
    "typeScriptTag": "customRoles",
    "description": "Create custom role",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An example role for members of the ops team"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Ops team"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "role-key-123abc"
      },
      {
        "name": "policy",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "basePermissions",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/roles/{customRoleKey}",
    "method": "deleteRoleByCustomKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom roles",
    "typeScriptTag": "customRoles",
    "description": "Delete custom role",
    "parameters": [
      {
        "name": "customRoleKey",
        "schema": "string",
        "required": true,
        "description": "The custom role key",
        "example": "CUSTOMROLEKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/roles/{customRoleKey}",
    "method": "getByCustomKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom roles",
    "typeScriptTag": "customRoles",
    "description": "Get custom role",
    "parameters": [
      {
        "name": "customRoleKey",
        "schema": "string",
        "required": true,
        "description": "The custom role key or ID",
        "example": "CUSTOMROLEKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/roles/{customRoleKey}",
    "method": "updateSingleCustomRole",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Custom roles",
    "typeScriptTag": "customRoles",
    "description": "Update custom role",
    "parameters": [
      {
        "name": "customRoleKey",
        "schema": "string",
        "required": true,
        "description": "The custom role key",
        "example": "CUSTOMROLEKEY"
      },
      {
        "name": "patch",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}",
    "method": "getSegmentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "List segments",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of segments to return. Defaults to 50."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Accepts sorting order and fields. Fields can be comma separated. Possible fields are 'creationDate', 'name', 'lastModified'. Example: `sort=name` sort by names ascending or `sort=-name,creationDate` sort by names descending and creationDate ascending."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Accepts filter by kind, query, tags, unbounded, or external. To filter by kind or query, use the `equals` operator. To filter by tags, use the `anyOf` operator. Query is a 'fuzzy' search across segment key, name, and description. Example: `filter=tags anyOf ['enterprise', 'beta'],query equals 'toggle'` returns segments with 'toggle' in their key, name, or description that also have 'enterprise' or 'beta' as a tag. To filter by unbounded, use the `equals` operator. Example: `filter=unbounded equals true`. To filter by external, use the `exists` operator. Example: `filter=external exists true`."
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
    "url": "/api/v2/segments/{projectKey}/{environmentKey}",
    "method": "createSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Create segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "testing"
        ]
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bundle our sample customers together"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example segment"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "segment-key-123abc"
      },
      {
        "name": "unbounded",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "unboundedContextKind",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "device"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}",
    "method": "removeSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Delete segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}",
    "method": "singleSegmentByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}",
    "method": "updateSemanticPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Patch segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "patch",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts",
    "method": "updateContextTargets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Update context targets on a big segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "included",
        "schema": "object",
        "description": ""
      },
      {
        "name": "excluded",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/contexts/{contextKey}",
    "method": "getContextMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get big segment membership for context",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "contextKey",
        "schema": "string",
        "required": true,
        "description": "The context key",
        "example": "CONTEXTKEY"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports",
    "method": "startBigSegmentExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments (https://",
    "typeScriptTag": "segmentsHttps:",
    "description": "Create big segment export",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Action succeeded"
      },
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/exports/{exportID}",
    "method": "getBigSegmentExportInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments (https://",
    "typeScriptTag": "segmentsHttps:",
    "description": "Get big segment export",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "exportId",
        "schema": "string",
        "required": true,
        "description": "The export ID",
        "example": "EXPORTID"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports",
    "method": "startBigSegmentImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments (https://",
    "typeScriptTag": "segmentsHttps:",
    "description": "Create big segment import",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mode",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Import request submitted successfully"
      },
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
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/imports/{importID}",
    "method": "getImportInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments (https://",
    "typeScriptTag": "segmentsHttps:",
    "description": "Get big segment import",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "importId",
        "schema": "string",
        "required": true,
        "description": "The import ID",
        "example": "IMPORTID"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users",
    "method": "updateUserContextTargets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Update user context targets on a big segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "included",
        "schema": "object",
        "description": ""
      },
      {
        "name": "excluded",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{environmentKey}/{segmentKey}/users/{userKey}",
    "method": "getUserMembershipStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get big segment membership for user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}",
    "method": "getExpiringTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get expiring targets for segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{segmentKey}/expiring-targets/{environmentKey}",
    "method": "updateExpiringTargetsForSegment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Update expiring targets for segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "version": 0,
            "contextKey": "user@email.com",
            "contextKind": "user",
            "kind": "updateExpiringTarget",
            "targetType": "included",
            "value": 1587582000000
          }
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}",
    "method": "getExpiringUserTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get expiring user targets for segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/segments/{projectKey}/{segmentKey}/expiring-user-targets/{environmentKey}",
    "method": "updateExpiringTargetsForSegment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Update expiring user targets for segment",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "segmentKey",
        "schema": "string",
        "required": true,
        "description": "The segment key",
        "example": "SEGMENTKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "version": 0,
            "contextKey": "contextKey",
            "contextKind": "user",
            "kind": "updateExpiringTarget",
            "targetType": "included",
            "value": 1587582000000
          }
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tags",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "List tags",
    "parameters": [
      {
        "name": "kind",
        "schema": "string",
        "description": "Fetch tags associated with the specified resource type. Options are `flag`, `project`, `environment`, `segment`. Returns all types by default."
      },
      {
        "name": "pre",
        "schema": "string",
        "description": "Return tags with the specified prefix"
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "Whether or not to return archived flags"
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
      }
    ]
  },
  {
    "url": "/api/v2/teams",
    "method": "listTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "List teams",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of teams to return in the response. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and returns the next `limit` items."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of filters. Each filter is constructed as `field:value`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams",
    "method": "updateMultipleTeamsSemanticPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teams (https://",
    "typeScriptTag": "teamsHttps:",
    "description": "Update teams",
    "parameters": [
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Optional comment about the update"
      },
      {
        "name": "instructions",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create team",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "An example team"
      },
      {
        "name": "customRoleKeys",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "example-role1",
          "example-role2"
        ]
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "team-key-123abc"
      },
      {
        "name": "memberIDs",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "12ab3c45de678910fgh12345"
        ]
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Example team"
      },
      {
        "name": "permissionGrants",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams/{teamKey}",
    "method": "removeByTeamKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Delete team",
    "parameters": [
      {
        "name": "teamKey",
        "schema": "string",
        "required": true,
        "description": "The team key",
        "example": "TEAMKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams/{teamKey}",
    "method": "getByTeamKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get team",
    "parameters": [
      {
        "name": "teamKey",
        "schema": "string",
        "required": true,
        "description": "The team key.",
        "example": "TEAMKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams/{teamKey}",
    "method": "updateSemanticPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update team",
    "parameters": [
      {
        "name": "teamKey",
        "schema": "string",
        "required": true,
        "description": "The team key",
        "example": "TEAMKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "A comma-separated list of properties that can reveal additional information in the response. Supported fields are explained above."
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Optional comment about the update"
      },
      {
        "name": "instructions",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams/{teamKey}/maintainers",
    "method": "getMaintainers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get team maintainers",
    "parameters": [
      {
        "name": "teamKey",
        "schema": "string",
        "required": true,
        "description": "The team key",
        "example": "TEAMKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of maintainers to return in the response. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams/{teamKey}/members",
    "method": "addMultipleMembersToTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Add multiple members to team",
    "parameters": [
      {
        "name": "teamKey",
        "schema": "string",
        "required": true,
        "description": "The team key",
        "example": "TEAMKEY"
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/teams/{teamKey}/roles",
    "method": "getCustomRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Get team custom roles",
    "parameters": [
      {
        "name": "teamKey",
        "schema": "string",
        "required": true,
        "description": "The team key",
        "example": "TEAMKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of roles to return in the response. Defaults to 20."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/templates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflow templates",
    "typeScriptTag": "workflowTemplates",
    "description": "Get workflow templates",
    "parameters": [
      {
        "name": "summary",
        "schema": "boolean",
        "description": "Whether the entire template object or just a summary should be returned"
      },
      {
        "name": "search",
        "schema": "string",
        "description": "The substring in either the name or description of a template"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/templates",
    "method": "createFeatureFlagTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Workflow templates",
    "typeScriptTag": "workflowTemplates",
    "description": "Create workflow template",
    "parameters": [
      {
        "name": "description",
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
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stages",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "projectKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "flagKey",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/templates/{templateKey}",
    "method": "deleteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflow templates",
    "typeScriptTag": "workflowTemplates",
    "description": "Delete workflow template",
    "parameters": [
      {
        "name": "templateKey",
        "schema": "string",
        "required": true,
        "description": "The template key",
        "example": "TEMPLATEKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action completed successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tokens",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access tokens",
    "typeScriptTag": "accessTokens",
    "description": "List access tokens",
    "parameters": [
      {
        "name": "showAll",
        "schema": "boolean",
        "description": "If set to true, and the authentication access token has the 'Admin' role, personal access tokens for all members will be retrieved."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of access tokens to return in the response. Defaults to 25."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. This is for use with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tokens",
    "method": "createNewToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Access tokens",
    "typeScriptTag": "accessTokens",
    "description": "Create access token",
    "parameters": [
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
        "name": "role",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customRoleIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inlineRole",
        "schema": "array",
        "description": ""
      },
      {
        "name": "serviceToken",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "defaultApiVersion",
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
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/v2/tokens/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Access tokens",
    "typeScriptTag": "accessTokens",
    "description": "Delete access token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the access token to update",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tokens/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Access tokens",
    "typeScriptTag": "accessTokens",
    "description": "Get access token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the access token",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/tokens/{id}",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Access tokens",
    "typeScriptTag": "accessTokens",
    "description": "Patch access token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the access token to update",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/api/v2/tokens/{id}/reset",
    "method": "resetSecretKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Access tokens",
    "typeScriptTag": "accessTokens",
    "description": "Reset access token",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the access token to update",
        "example": "ID"
      },
      {
        "name": "expiry",
        "schema": "integer",
        "description": "An expiration time for the old token key, expressed as a Unix epoch time in milliseconds. By default, the token will expire immediately."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/evaluations/{projectKey}/{environmentKey}/{featureFlagKey}",
    "method": "getEvaluationsUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get evaluations usage",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp. Defaults to 30 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp. Defaults to the current time."
      },
      {
        "name": "tz",
        "schema": "string",
        "description": "The timezone to use for breaks between days when returning daily data."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/events/{type}",
    "method": "getEventsUsageData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get events usage",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "The type of event to retrieve. Must be either `received` or `published`.",
        "example": "TYPE"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp. Defaults to 24 hours ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp. Defaults to the current time."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/experimentation-keys",
    "method": "getExperimentationKeysUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get experimentation keys usage",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time."
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/experimentation-units",
    "method": "getExperimentationUnitsUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get experimentation units usage",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp (Unix seconds). Defaults to the beginning of the current month."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp (Unix seconds). Defaults to the current time."
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/mau",
    "method": "getMauUsageData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get MAU usage",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp. Defaults to 30 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp. Defaults to the current time."
      },
      {
        "name": "project",
        "schema": "string",
        "description": "A project key to filter results to. Can be specified multiple times, one query parameter per project key, to view data for multiple projects."
      },
      {
        "name": "environment",
        "schema": "string",
        "description": "An environment key to filter results to. When using this parameter, exactly one project key must also be set. Can be specified multiple times as separate query parameters to view data for multiple environments within a single project."
      },
      {
        "name": "sdktype",
        "schema": "string",
        "description": "An SDK type to filter results to. Can be specified multiple times, one query parameter per SDK type. Valid values: client, server"
      },
      {
        "name": "sdk",
        "schema": "string",
        "description": "An SDK name to filter results to. Can be specified multiple times, one query parameter per SDK."
      },
      {
        "name": "anonymous",
        "schema": "string",
        "description": "If specified, filters results to either anonymous or nonanonymous users."
      },
      {
        "name": "groupby",
        "schema": "string",
        "description": "If specified, returns data for each distinct value of the given field. Can be specified multiple times to group data by multiple dimensions (for example, to group by both project and SDK). Valid values: project, environment, sdktype, sdk, anonymous"
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
      }
    ]
  },
  {
    "url": "/api/v2/usage/mau/bycategory",
    "method": "getMauUsageByCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get MAU usage by category",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp. Defaults to 30 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp. Defaults to the current time."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/mau/sdks",
    "method": "listMauSdksByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get MAU SDKs by type",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "description": "The data returned starts from this timestamp. Defaults to seven days ago. The timestamp is in Unix milliseconds, for example, 1656694800000."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The data returned ends at this timestamp. Defaults to the current time. The timestamp is in Unix milliseconds, for example, 1657904400000."
      },
      {
        "name": "sdktype",
        "schema": "string",
        "description": "The type of SDK with monthly active users (https:// to list. Must be either `client` or `server`."
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
      }
    ]
  },
  {
    "url": "/api/v2/usage/streams/{source}",
    "method": "getStreamUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get stream usage",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "The source of streaming connections to describe. Must be either `client` or `server`.",
        "example": "SOURCE"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp. Defaults to 30 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp. Defaults to the current time."
      },
      {
        "name": "tz",
        "schema": "string",
        "description": "The timezone to use for breaks between days when returning daily data."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/streams/{source}/bysdkversion",
    "method": "getStreamUsageBySdkVersionData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get stream usage by SDK version",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "The source of streaming connections to describe. Must be either `client` or `server`.",
        "example": "SOURCE"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "The series of data returned starts from this timestamp. Defaults to 24 hours ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "The series of data returned ends at this timestamp. Defaults to the current time."
      },
      {
        "name": "tz",
        "schema": "string",
        "description": "The timezone to use for breaks between days when returning daily data."
      },
      {
        "name": "sdk",
        "schema": "string",
        "description": "If included, this filters the returned series to only those that match this SDK name."
      },
      {
        "name": "version",
        "schema": "string",
        "description": "If included, this filters the returned series to only those that match this SDK version."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/usage/streams/{source}/sdkversions",
    "method": "listSdkVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account usage (https://",
    "typeScriptTag": "accountUsageHttps:",
    "description": "Get stream usage SDK versions",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "The source of streaming connections to describe. Must be either `client` or `server`.",
        "example": "SOURCE"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/user-attributes/{projectKey}/{environmentKey}",
    "method": "getAllInUseUserAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users (https://",
    "typeScriptTag": "usersHttps:",
    "description": "Get user attribute names",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
    "url": "/api/v2/user-search/{projectKey}/{environmentKey}",
    "method": "searchUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Find users",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "Full-text search for users based on name, first name, last name, e-mail address, or key"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the maximum number of items in the collection to return (max: 50, default: 20)"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Deprecated, use `searchAfter` instead. Specifies the first item to return in the collection."
      },
      {
        "name": "after",
        "schema": "integer",
        "description": "A Unix epoch time in milliseconds specifying the maximum last time a user requested a feature flag from LaunchDarkly"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Specifies a field by which to sort. LaunchDarkly supports the `userKey` and `lastSeen` fields. Fields prefixed by a dash ( - ) sort in descending order."
      },
      {
        "name": "searchAfter",
        "schema": "string",
        "description": "Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead."
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "A comma-separated list of user attribute filters. Each filter is in the form of attributeKey:attributeValue"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{environmentKey}",
    "method": "listEnvironmentUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List users",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of elements to return per page"
      },
      {
        "name": "searchAfter",
        "schema": "string",
        "description": "Limits results to users with sort values after the value you specify. You can use this for pagination, but we recommend using the `next` link we provide instead."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{environmentKey}/{userKey}",
    "method": "deleteByProjectEnvironmentKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{environmentKey}/{userKey}",
    "method": "getUserByKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags",
    "method": "listFlagSettingsForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User settings",
    "typeScriptTag": "userSettings",
    "description": "List flag settings for user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}",
    "method": "singleFlagSetting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User settings",
    "typeScriptTag": "userSettings",
    "description": "Get flag setting for user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}",
    "method": "updateFlagSettingsForUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User settings",
    "typeScriptTag": "userSettings",
    "description": "Update flag settings for user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
      },
      {
        "name": "featureFlagKey",
        "schema": "string",
        "required": true,
        "description": "The feature flag key",
        "example": "FEATUREFLAGKEY"
      },
      {
        "name": "setting",
        "schema": "undefined",
        "description": "",
        "example": "existing_variation_value_to_use"
      },
      {
        "name": "comment",
        "schema": "string",
        "description": "",
        "example": "make sure this context experiences a specific variation"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}",
    "method": "getUserExpiringFlagTargets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User settings",
    "typeScriptTag": "userSettings",
    "description": "Get expiring dates on flags for user",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/users/{projectKey}/{userKey}/expiring-user-targets/{environmentKey}",
    "method": "updateExpiringUserTarget",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User settings",
    "typeScriptTag": "userSettings",
    "description": "Update expiring user target for flags",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "userKey",
        "schema": "string",
        "required": true,
        "description": "The user key",
        "example": "USERKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "optional comment"
      },
      {
        "name": "instructions",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/versions",
    "method": "getVersionInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other",
    "typeScriptTag": "other",
    "description": "Get version information",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/webhooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List webhooks",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Creates a webhook",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": []
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Example hook"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://www.example.com"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "frobozz"
      },
      {
        "name": "statements",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sign",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "on",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/webhooks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/webhooks/{id}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook",
        "example": "ID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/webhooks/{id}",
    "method": "updateSettingsPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook to update",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/charts/deployments/frequency",
    "method": "deploymentFrequencyChartData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights charts (https://",
    "typeScriptTag": "insightsChartsHttps:",
    "description": "Get deployment frequency chart data",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "description": "The project key"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "description": "The environment key"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Unix timestamp in milliseconds. Default value is 7 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Unix timestamp in milliseconds. Default value is now."
      },
      {
        "name": "bucketType",
        "schema": "string",
        "description": "Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`."
      },
      {
        "name": "bucketMs",
        "schema": "integer",
        "description": "Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds)."
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Options: `application`, `kind`"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Options: `metrics`"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/charts/flags/stale",
    "method": "staleFlagsChartData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights charts (https://",
    "typeScriptTag": "insightsChartsHttps:",
    "description": "Get stale flags chart data",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Property to group results by. Options: `maintainer`"
      },
      {
        "name": "maintainerId",
        "schema": "string",
        "description": "Comma-separated list of individual maintainers to filter results."
      },
      {
        "name": "maintainerTeamKey",
        "schema": "string",
        "description": "Comma-separated list of team maintainer keys to filter results."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Options: `metrics`"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/charts/flags/status",
    "method": "getFlagStatusChartData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights charts (https://",
    "typeScriptTag": "insightsChartsHttps:",
    "description": "Get flag status chart data",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/charts/lead-time",
    "method": "leadTimeChartData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights charts (https://",
    "typeScriptTag": "insightsChartsHttps:",
    "description": "Get lead time chart data",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "description": "The environment key"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
      },
      {
        "name": "from",
        "schema": "integer",
        "description": "Unix timestamp in milliseconds. Default value is 7 days ago."
      },
      {
        "name": "to",
        "schema": "integer",
        "description": "Unix timestamp in milliseconds. Default value is now."
      },
      {
        "name": "bucketType",
        "schema": "string",
        "description": "Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`."
      },
      {
        "name": "bucketMs",
        "schema": "integer",
        "description": "Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds)."
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Options: `application`, `stage`. Default: `stage`."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Options: `metrics`, `percentiles`."
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/charts/releases/frequency",
    "method": "releaseFrequencyData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights charts (https://",
    "typeScriptTag": "insightsChartsHttps:",
    "description": "Get release frequency chart data",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
      },
      {
        "name": "hasExperiments",
        "schema": "boolean",
        "description": "Filter events to those associated with an experiment (`true`) or without an experiment (`false`)"
      },
      {
        "name": "global",
        "schema": "string",
        "description": "Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`"
      },
      {
        "name": "groupBy",
        "schema": "string",
        "description": "Property to group results by. Options: `impact`"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Unix timestamp in milliseconds. Default value is 7 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Unix timestamp in milliseconds. Default value is now."
      },
      {
        "name": "bucketType",
        "schema": "string",
        "description": "Specify type of bucket. Options: `rolling`, `hour`, `day`. Default: `rolling`."
      },
      {
        "name": "bucketMs",
        "schema": "integer",
        "description": "Duration of intervals for x-axis in milliseconds. Default value is one day (`86400000` milliseconds)."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Options: `metrics`"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/deployment-events",
    "method": "createDeploymentEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Insights deployments (https://",
    "typeScriptTag": "insightsDeploymentsHttps:",
    "description": "Create deployment event",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "a90a8a2"
      },
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "default"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "production"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "billing-service"
      },
      {
        "name": "applicationName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Billing Service"
      },
      {
        "name": "applicationKind",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "server"
      },
      {
        "name": "versionName",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "v1.0.0"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "started"
      },
      {
        "name": "eventTime",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "eventMetadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "buildSystemVersion": "v1.2.3"
        }
      },
      {
        "name": "deploymentMetadata",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "buildNumber": "1234"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/deployments",
    "method": "listDeployments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights deployments (https://",
    "typeScriptTag": "insightsDeploymentsHttps:",
    "description": "List deployments",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of deployments to return. Default is 20. Maximum allowed is 100."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand properties in response. Options: `pullRequests`, `flagReferences`"
      },
      {
        "name": "from",
        "schema": "integer",
        "description": "Unix timestamp in milliseconds. Default value is 7 days ago."
      },
      {
        "name": "to",
        "schema": "integer",
        "description": "Unix timestamp in milliseconds. Default value is now."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Identifier used for pagination"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Identifier used for pagination"
      },
      {
        "name": "kind",
        "schema": "string",
        "description": "The deployment kind"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The deployment status"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/deployments/{deploymentID}",
    "method": "getDeploymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights deployments (https://",
    "typeScriptTag": "insightsDeploymentsHttps:",
    "description": "Get deployment",
    "parameters": [
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "The deployment ID",
        "example": "DEPLOYMENTID"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand properties in response. Options: `pullRequests`, `flagReferences`"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/deployments/{deploymentID}",
    "method": "updateDeploymentById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Insights deployments (https://",
    "typeScriptTag": "insightsDeploymentsHttps:",
    "description": "Update deployment",
    "parameters": [
      {
        "name": "deploymentId",
        "schema": "string",
        "required": true,
        "description": "The deployment ID",
        "example": "DEPLOYMENTID"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/flag-events",
    "method": "listFlagEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights flag events (https://",
    "typeScriptTag": "insightsFlagEventsHttps:",
    "description": "List flag events",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter events by flag key"
      },
      {
        "name": "impactSize",
        "schema": "string",
        "description": "Filter events by impact size. A small impact created a less than 20% change in the proportion of end users receiving one or more flag variations. A medium impact created between a 20%-80% change. A large impact created a more than 80% change. Options: `none`, `small`, `medium`, `large`"
      },
      {
        "name": "hasExperiments",
        "schema": "boolean",
        "description": "Filter events to those associated with an experiment (`true`) or without an experiment (`false`)"
      },
      {
        "name": "global",
        "schema": "string",
        "description": "Filter to include or exclude global events. Default value is `include`. Options: `include`, `exclude`"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand properties in response. Options: `experiments`"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of deployments to return. Default is 20. Maximum allowed is 100."
      },
      {
        "name": "from",
        "schema": "integer",
        "description": "Unix timestamp in milliseconds. Default value is 7 days ago."
      },
      {
        "name": "to",
        "schema": "integer",
        "description": "Unix timestamp in milliseconds. Default value is now."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Identifier used for pagination"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Identifier used for pagination"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/insights/group",
    "method": "createInsightGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Insights scores (https://",
    "typeScriptTag": "insightsScoresHttps:",
    "description": "Create insight group",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Production - All Apps"
      },
      {
        "name": "key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "default-production-all-apps"
      },
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "default"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "production"
      },
      {
        "name": "applicationKeys",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "billing-service",
          "inventory-service"
        ]
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/insights/groups",
    "method": "listGroupInsightScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights scores (https://",
    "typeScriptTag": "insightsScoresHttps:",
    "description": "List insight groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of insight groups to return. Default is 20. Must be between 1 and 20 inclusive."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Where to start in the list. Use this with pagination. For example, an offset of 10 skips the first ten items and then returns the next items in the list, up to the query `limit`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort flag list by field. Prefix field with <code>-</code> to sort in descending order. Allowed fields: name"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter list of insights groups by name."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Options: `scores`, `environment`, `metadata`"
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
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/insights/groups/{insightGroupKey}",
    "method": "deleteInsightGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Insights scores (https://",
    "typeScriptTag": "insightsScoresHttps:",
    "description": "Delete insight group",
    "parameters": [
      {
        "name": "insightGroupKey",
        "schema": "string",
        "required": true,
        "description": "The insight group key",
        "example": "INSIGHTGROUPKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/insights/groups/{insightGroupKey}",
    "method": "expandGroupInsightScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights scores (https://",
    "typeScriptTag": "insightsScoresHttps:",
    "description": "Get insight group",
    "parameters": [
      {
        "name": "insightGroupKey",
        "schema": "string",
        "required": true,
        "description": "The insight group key",
        "example": "INSIGHTGROUPKEY"
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Options: `scores`, `environment`"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/insights/groups/{insightGroupKey}",
    "method": "updateInsightGroupPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Insights scores (https://",
    "typeScriptTag": "insightsScoresHttps:",
    "description": "Patch insight group",
    "parameters": [
      {
        "name": "insightGroupKey",
        "schema": "string",
        "required": true,
        "description": "The insight group key",
        "example": "INSIGHTGROUPKEY"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/insights/scores",
    "method": "getInsightScores",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights scores (https://",
    "typeScriptTag": "insightsScoresHttps:",
    "description": "Get insight scores",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "required": true,
        "description": "The environment key",
        "example": "ENVIRONMENTKEY"
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Comma separated list of application keys"
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
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/pull-requests",
    "method": "listPullRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights pull requests (https://",
    "typeScriptTag": "insightsPullRequestsHttps:",
    "description": "List pull requests",
    "parameters": [
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      },
      {
        "name": "environmentKey",
        "schema": "string",
        "description": "Required if you are using the <code>sort</code> parameter's <code>leadTime</code> option to sort pull requests."
      },
      {
        "name": "applicationKey",
        "schema": "string",
        "description": "Filter the results to pull requests deployed to a comma separated list of applications"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter results to pull requests with the given status. Options: `open`, `merged`, `closed`, `deployed`."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Filter list of pull requests by title or author"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of pull requests to return. Default is 20. Maximum allowed is 100."
      },
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand properties in response. Options: `deployments`, `flagReferences`, `leadTime`."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Sort results. Requires the `environmentKey` to be set. Options: `leadTime` (https:// and `-leadTime` (https://. When query option is excluded, default sort is by created or merged date."
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Unix timestamp in milliseconds. Default value is 7 days ago."
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Unix timestamp in milliseconds. Default value is now."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Identifier used for pagination"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Identifier used for pagination"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/repositories",
    "method": "listRepositories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Insights repositories (https://",
    "typeScriptTag": "insightsRepositoriesHttps:",
    "description": "List repositories",
    "parameters": [
      {
        "name": "expand",
        "schema": "string",
        "description": "Expand properties in response. Options: `projects`"
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/repositories/projects",
    "method": "associateRepositoriesAndProjects",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Insights repositories (https://",
    "typeScriptTag": "insightsRepositoriesHttps:",
    "description": "Associate repositories with projects",
    "parameters": [
      {
        "name": "mappings",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/engineering-insights/repositories/{repositoryKey}/projects/{projectKey}",
    "method": "removeRepositoryProjectAssociation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Insights repositories (https://",
    "typeScriptTag": "insightsRepositoriesHttps:",
    "description": "Remove repository project association",
    "parameters": [
      {
        "name": "repositoryKey",
        "schema": "string",
        "required": true,
        "description": "The repository key",
        "example": "REPOSITORYKEY"
      },
      {
        "name": "projectKey",
        "schema": "string",
        "required": true,
        "description": "The project key",
        "example": "PROJECTKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Action succeeded"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="LaunchDarkly REST API"
      apiBaseUrl="https://app.launchdarkly.com"
      apiVersion="2.0"
      endpoints={166}
      sdkMethods={259}
      schemas={448}
      parameters={992}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/launchdarkly/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/launchdarkly/openapi.yaml"
      
    />
  );
}
  