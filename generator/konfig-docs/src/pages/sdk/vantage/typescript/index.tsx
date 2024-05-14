import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VantageTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="vantage-typescript-sdk"
      metaDescription={`Vantage is a cloud cost observability platform with more than a dozen native integrations, including AWS, Azure, GCP, Kubernetes, Datadog, Snowflake, Databricks and more. Thousands of organizations globally, ranging from startups to F500 companies, rely on Vantage to optimize billions of dollars in annualized infrastructure costs. Vantage was founded by former employees of AWS, Digital Ocean, and GitHub and is backed by top venture capital firms, Andreessen Horowitz and Scale Venture Partners.`}
      company="Vantage"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/logo.png"
      companyKebabCase="vantage"
      clientNameCamelCase="vantage"
      homepage="vantage.sh"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/favicon.png"
      contactUrl="https://www.vantage.sh"
      contactEmail="support@vantage.sh"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["cloud","cloud_cost_optimization","cloud_cost_observability","cloud_costs"]}
      methods={[
  {
    "url": "/workspaces",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Return all Workspaces that the current API token has access to.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Workspaces model"
      }
    ]
  },
  {
    "url": "/workspaces/{workspace_token}",
    "method": "getSpecificWorkspace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "Return a specific Workspace.",
    "parameters": [
      {
        "name": "workspaceToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKSPACE_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Workspace model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/folders",
    "method": "listCostReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Return all Folders for CostReports.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Folders model"
      }
    ]
  },
  {
    "url": "/folders",
    "method": "createFolderForCostReports",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Create a Folder for CostReports.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "parent_folder_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saved_filter_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace_token",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Folder model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/folders/{folder_token}",
    "method": "deleteFolderForCostReports",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Delete a Folder for CostReports.",
    "parameters": [
      {
        "name": "folderToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FOLDER_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Folder model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/folders/{folder_token}",
    "method": "getSpecificFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Return a specific Folder for CostReports.",
    "parameters": [
      {
        "name": "folderToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FOLDER_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Folder model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/folders/{folder_token}",
    "method": "updateFolderForCostReports",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Update a Folder for CostReports.",
    "parameters": [
      {
        "name": "folderToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FOLDER_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_folder_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saved_filter_tokens",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Folder model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/saved_filters",
    "method": "getCostReportFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Return all SavedFilters that can be applied to a CostReport.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SavedFilters model"
      }
    ]
  },
  {
    "url": "/saved_filters",
    "method": "createSavedFilterForCostReports",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Create a SavedFilter for CostReports.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "workspace_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "SavedFilter model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/saved_filters/{saved_filter_token}",
    "method": "deleteSavedFilter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Delete a SavedFilter for CostReports.",
    "parameters": [
      {
        "name": "savedFilterToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAVED_FILTER_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "SavedFilter model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/saved_filters/{saved_filter_token}",
    "method": "getSavedFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Return a specific SavedFilter.",
    "parameters": [
      {
        "name": "savedFilterToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAVED_FILTER_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SavedFilter model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/saved_filters/{saved_filter_token}",
    "method": "updateSavedFilterForCostReports",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Update a SavedFilter for CostReports.",
    "parameters": [
      {
        "name": "savedFilterToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SAVED_FILTER_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SavedFilter model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/cost_reports",
    "method": "getAllCostReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Costs",
    "typeScriptTag": "costs",
    "description": "Return all CostReports.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CostReports model"
      }
    ]
  },
  {
    "url": "/cost_reports",
    "method": "createReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Costs",
    "typeScriptTag": "costs",
    "description": "Create a CostReport.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "workspace_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupings",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "saved_filter_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "business_metric_tokens_with_metadata",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "CostReport model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/cost_reports/{cost_report_token}",
    "method": "deleteCostReport",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Costs",
    "typeScriptTag": "costs",
    "description": "Delete a CostReport.",
    "parameters": [
      {
        "name": "costReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COST_REPORT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "CostReport model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/cost_reports/{cost_report_token}",
    "method": "getCostReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Costs",
    "typeScriptTag": "costs",
    "description": "Return a CostReport.",
    "parameters": [
      {
        "name": "costReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COST_REPORT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CostReport model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/cost_reports/{cost_report_token}",
    "method": "updateReport",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Costs",
    "typeScriptTag": "costs",
    "description": "Update a CostReport.",
    "parameters": [
      {
        "name": "costReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COST_REPORT_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupings",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "saved_filter_tokens",
        "schema": "array",
        "description": ""
      },
      {
        "name": "business_metric_tokens_with_metadata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "folder_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "settings",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "CostReport model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/segments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Return all Segments.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Segments model"
      }
    ]
  },
  {
    "url": "/segments",
    "method": "createSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Create a Segment.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "track_unallocated",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "report_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workspace_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parent_segment_token",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Segment model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/segments/{segment_token}",
    "method": "removeSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Delete a Segment.",
    "parameters": [
      {
        "name": "segmentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEGMENT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Segment model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/segments/{segment_token}",
    "method": "getSegmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Return a Segment.",
    "parameters": [
      {
        "name": "segmentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEGMENT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Segment model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/segments/{segment_token}",
    "method": "updateSegmentById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Update a Segment.",
    "parameters": [
      {
        "name": "segmentToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SEGMENT_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "track_unallocated",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "report_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "parent_segment_token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Segment model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/dashboards",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Return all Dashboards.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dashboards model"
      }
    ]
  },
  {
    "url": "/dashboards",
    "method": "createDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Create a Dashboard.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "widget_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "saved_filter_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "date_bin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_interval",
        "schema": "string",
        "required": false,
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
        "required": true,
        "description": "",
        "example": "END_DATE"
      },
      {
        "name": "workspace_token",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Dashboard model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_token}",
    "method": "deleteDashboard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Delete a Dashboard.",
    "parameters": [
      {
        "name": "dashboardToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DASHBOARD_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Dashboard model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_token}",
    "method": "getSpecificDashboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Return a specific Dashboard.",
    "parameters": [
      {
        "name": "dashboardToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DASHBOARD_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dashboard model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_token}",
    "method": "updateDashboard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dashboards",
    "typeScriptTag": "dashboards",
    "description": "Update a Dashboard.",
    "parameters": [
      {
        "name": "dashboardToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DASHBOARD_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "widget_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "saved_filter_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "date_bin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_interval",
        "schema": "string",
        "required": false,
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
        "required": true,
        "description": "",
        "example": "END_DATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Dashboard model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/costs",
    "method": "listCostReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Costs",
    "typeScriptTag": "costs",
    "description": "Return all Costs for a CostReport.",
    "parameters": [
      {
        "name": "costReportToken",
        "schema": "string",
        "required": true,
        "description": "The CostReport token.",
        "example": "COST_REPORT_TOKEN"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "First date you would like to filter costs from. ISO 8601 formatted."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Last date you would like to filter costs to. ISO 8601 formatted."
      },
      {
        "name": "groupings",
        "schema": "array",
        "required": false,
        "description": "Group the results by specific field(https://vantage.readme.io/reference/general. Defaults to provider, service, account_id. Valid groupings: account_id, billing_account_id, charge_type, cost_category, cost_subcategory, provider, region, resource_id, service, tagged, tag:<tag_value>. If providing multiple groupings, join as comma separated values: groupings=provider,service,region"
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": "Whether to order costs by date in an ascending or descending manner.",
        "default": "desc"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Costs model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "402",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Return all Teams that the current API token has access to.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Teams model"
      }
    ]
  },
  {
    "url": "/teams",
    "method": "createNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Create a new Team.",
    "parameters": [
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
        "name": "workspace_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "user_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "user_emails",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Team model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/teams/{team_token}",
    "method": "removeTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Delete a Team.",
    "parameters": [
      {
        "name": "teamToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Team model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/teams/{team_token}",
    "method": "getSpecificTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Return a specific Team.",
    "parameters": [
      {
        "name": "teamToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Team model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/teams/{team_token}",
    "method": "updateTeam",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Update a Team.",
    "parameters": [
      {
        "name": "teamToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_TOKEN"
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
        "name": "workspace_tokens",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user_tokens",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user_emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Team model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/access_grants",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccessGrants",
    "typeScriptTag": "accessGrants",
    "description": "Return all Access Grants that the current API token has access to.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AccessGrants model"
      }
    ]
  },
  {
    "url": "/access_grants",
    "method": "createGrant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "AccessGrants",
    "typeScriptTag": "accessGrants",
    "description": "Create an Access Grant.",
    "parameters": [
      {
        "name": "resource_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCE_TOKEN"
      },
      {
        "name": "team_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_TOKEN"
      },
      {
        "name": "access",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "AccessGrant model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "406",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/access_grants/{access_grant_token}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "AccessGrants",
    "typeScriptTag": "accessGrants",
    "description": "Delete an Access Grant.",
    "parameters": [
      {
        "name": "accessGrantToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS_GRANT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "AccessGrant model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/access_grants/{access_grant_token}",
    "method": "getSpecificGrant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AccessGrants",
    "typeScriptTag": "accessGrants",
    "description": "Return a specific Access Grant.",
    "parameters": [
      {
        "name": "accessGrantToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS_GRANT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AccessGrant model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/access_grants/{access_grant_token}",
    "method": "updateGrantToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "AccessGrants",
    "typeScriptTag": "accessGrants",
    "description": "Update an AccessGrant.",
    "parameters": [
      {
        "name": "accessGrantToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS_GRANT_TOKEN"
      },
      {
        "name": "access",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCESS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "AccessGrant model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/report_notifications",
    "method": "getAllReportNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Return all ReportNotifications.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ReportNotifications model"
      }
    ]
  },
  {
    "url": "/report_notifications",
    "method": "createReportNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Create a ReportNotification.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "cost_report_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COST_REPORT_TOKEN"
      },
      {
        "name": "workspace_token",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_tokens",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "recipient_channels",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FREQUENCY"
      },
      {
        "name": "change",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANGE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "ReportNotification model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/report_notifications/{report_notification_token}",
    "method": "deleteReportNotification",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Delete a ReportNotification.",
    "parameters": [
      {
        "name": "reportNotificationToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORT_NOTIFICATION_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "ReportNotification model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/report_notifications/{report_notification_token}",
    "method": "getReportNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Return a ReportNotification.",
    "parameters": [
      {
        "name": "reportNotificationToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORT_NOTIFICATION_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ReportNotification model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/report_notifications/{report_notification_token}",
    "method": "updateReportNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Update a ReportNotification.",
    "parameters": [
      {
        "name": "reportNotificationToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REPORT_NOTIFICATION_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cost_report_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_tokens",
        "schema": "array",
        "description": ""
      },
      {
        "name": "recipient_channels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "change",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ReportNotification model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/users",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Return all Users that the current API token has access to.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Users model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/users/{user_token}",
    "method": "getSpecificUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Return a specific User.",
    "parameters": [
      {
        "name": "userToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/business_metrics",
    "method": "getAllMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BusinessMetrics",
    "typeScriptTag": "businessMetrics",
    "description": "Return all Business Metrics that the current API token has access to.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "BusinessMetrics model"
      }
    ]
  },
  {
    "url": "/business_metrics",
    "method": "createNewMetric",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BusinessMetrics",
    "typeScriptTag": "businessMetrics",
    "description": "Create a new Business Metric.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "cost_report_tokens_with_metadata",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "BusinessMetric model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/business_metrics/{business_metric_token}",
    "method": "deleteExistingMetric",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "BusinessMetrics",
    "typeScriptTag": "businessMetrics",
    "description": "Deletes an existing BusinessMetric.",
    "parameters": [
      {
        "name": "businessMetricToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESS_METRIC_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "BusinessMetric model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/business_metrics/{business_metric_token}",
    "method": "getMetricById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BusinessMetrics",
    "typeScriptTag": "businessMetrics",
    "description": "Return a specific Business Metric.",
    "parameters": [
      {
        "name": "businessMetricToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESS_METRIC_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "BusinessMetric model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/business_metrics/{business_metric_token}",
    "method": "updateExistingMetric",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BusinessMetrics",
    "typeScriptTag": "businessMetrics",
    "description": "Updates an existing BusinessMetric.",
    "parameters": [
      {
        "name": "businessMetricToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESS_METRIC_TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cost_report_tokens_with_metadata",
        "schema": "array",
        "description": ""
      },
      {
        "name": "values",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "BusinessMetric model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/business_metrics/{business_metric_token}/values.csv",
    "method": "updateValuesCsv",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "BusinessMetrics",
    "typeScriptTag": "businessMetrics",
    "description": "Updates the values for an existing BusinessMetric from a CSV file.",
    "parameters": [
      {
        "name": "businessMetricToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BUSINESS_METRIC_TOKEN"
      },
      {
        "name": "csv",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CSV"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "BusinessMetric model"
      },
      {
        "statusCode": "400",
        "description": "Errors model"
      },
      {
        "statusCode": "403",
        "description": "Errors model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      },
      {
        "statusCode": "422",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/products",
    "method": "listAvailableProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prices",
    "typeScriptTag": "prices",
    "description": "Return available Products for a Service. For example, with a Provider of AWS and a Service of EC2, Products will be a list of all EC2 Instances. By default, this endpoint returns all Products across all Services and Providers but has optional query parameters for filtering listed below.",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": false,
        "description": "Query by Provider to list all Products across all Services for a Provider. e.g. aws"
      },
      {
        "name": "serviceId",
        "schema": "string",
        "required": false,
        "description": "Query by Service to list all Products for a specific provider service. e.g. aws-ec2"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Query by name of the Product to see a list of products which match that name. e.g. m5a.16xlarge"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Products model"
      }
    ]
  },
  {
    "url": "/products/{id}",
    "method": "getProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prices",
    "typeScriptTag": "prices",
    "description": "Return a product",
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
        "description": "Product model"
      }
    ]
  },
  {
    "url": "/products/{product_id}/prices",
    "method": "getProductPrices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prices",
    "typeScriptTag": "prices",
    "description": "Return available Prices across all Regions for a Product.",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Prices model"
      }
    ]
  },
  {
    "url": "/products/{product_id}/prices/{id}",
    "method": "getProductPrice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prices",
    "typeScriptTag": "prices",
    "description": "Returns a price",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_ID"
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
        "statusCode": "200",
        "description": "Price model"
      }
    ]
  },
  {
    "url": "/resource_reports",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ResourceReports",
    "typeScriptTag": "resourceReports",
    "description": "Return all ResourceReports.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The number of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ResourceReports model"
      }
    ]
  },
  {
    "url": "/resource_reports/{resource_report_token}",
    "method": "removeReport",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ResourceReports",
    "typeScriptTag": "resourceReports",
    "description": "Delete a ResourceReport.",
    "parameters": [
      {
        "name": "resourceReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCE_REPORT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "ResourceReport model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/resource_reports/{resource_report_token}",
    "method": "getResourceReport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ResourceReports",
    "typeScriptTag": "resourceReports",
    "description": "Return a ResourceReport.",
    "parameters": [
      {
        "name": "resourceReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESOURCE_REPORT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "ResourceReport model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/financial_commitment_reports",
    "method": "getAllReports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FinancialCommitmentReports",
    "typeScriptTag": "financialCommitmentReports",
    "description": "Return all FinancialCommitmentReports.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to return."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The amount of results to return. The maximum is 1000."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FinancialCommitmentReports model"
      }
    ]
  },
  {
    "url": "/financial_commitment_reports/{financial_commitment_report_token}",
    "method": "deleteReport",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FinancialCommitmentReports",
    "typeScriptTag": "financialCommitmentReports",
    "description": "Delete a FinancialCommitmentReport.",
    "parameters": [
      {
        "name": "financialCommitmentReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FINANCIAL_COMMITMENT_REPORT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "FinancialCommitmentReport model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/financial_commitment_reports/{financial_commitment_report_token}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FinancialCommitmentReports",
    "typeScriptTag": "financialCommitmentReports",
    "description": "Return a FinancialCommitmentReport.",
    "parameters": [
      {
        "name": "financialCommitmentReportToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FINANCIAL_COMMITMENT_REPORT_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "FinancialCommitmentReport model"
      },
      {
        "statusCode": "404",
        "description": "Errors model"
      }
    ]
  },
  {
    "url": "/ping",
    "method": "healthCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Ping",
    "typeScriptTag": "ping",
    "description": "This is a health check endpoint that can be used to determine Vantage API healthiness. It will return 200 if everything is running smoothly.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "This is a health check endpoint that can be used to determine Vantage API healthiness. It will return 200 if everything is running smoothly."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Vantage"
      apiBaseUrl="https://api.vantage.sh/v2"
      apiVersion="2.0.0"
      endpoints={45}
      sdkMethods={88}
      schemas={52}
      parameters={232}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vantage/openapi.yaml"
      developerDocumentation="vantage.readme.io/reference/general"
    />
  );
}
  