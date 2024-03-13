import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MultiwovenTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="multiwoven-typescript-sdk"
      metaDescription="Open-source Reverse ETL that makes data segmentation, sync and activation both easy and fully secure."
      company="Multiwoven"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/logo.png"
      clientNameCamelCase="multiwoven"
      homepage="www.multiwoven.com/"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["open_source","automation","data_management","open_source","developer_tools","reverse_etl","data_segmentation","data_sync","data_activation"]}
      methods={[
  {
    "url": "/api/v1/models",
    "method": "listAllModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Models",
    "typeScriptTag": "models",
    "description": "Lists all models",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/models",
    "method": "createModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Models",
    "typeScriptTag": "models",
    "description": "Creates a model",
    "parameters": [
      {
        "name": "model",
        "schema": "object",
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
    "url": "/api/v1/models/{id}",
    "method": "deleteModel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Models",
    "typeScriptTag": "models",
    "description": "Deletes a model",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Model deleted"
      }
    ]
  },
  {
    "url": "/api/v1/models/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Models",
    "typeScriptTag": "models",
    "description": "Retrieves a model",
    "parameters": [
      {
        "name": "id",
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
    "url": "/api/v1/models/{id}",
    "method": "updateModelById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Models",
    "typeScriptTag": "models",
    "description": "Updates a model",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "model",
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
    "url": "/api/v1/connector_definitions",
    "method": "getBasedOnType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connector Definitions",
    "typeScriptTag": "connectorDefinitions",
    "description": "Retrieve connector definitions based on type",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of the connector (source or destination)",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/connector_definitions/{connector_name}",
    "method": "getByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connector Definitions",
    "typeScriptTag": "connectorDefinitions",
    "description": "Retrieve specific connector definition based on its name",
    "parameters": [
      {
        "name": "connectorName",
        "schema": "string",
        "required": true,
        "description": "Name of the connector",
        "example": "CONNECTOR_NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of the connector (source or destination)",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/connector_definitions/check_connection",
    "method": "checkConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connector Definitions",
    "typeScriptTag": "connectorDefinitions",
    "description": "Checks the connection for a specified connector definition",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connection_spec",
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
    "url": "/api/v1/connectors",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Lists all connectors",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/connectors",
    "method": "createNewConnector",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Creates a connector",
    "parameters": [
      {
        "name": "connector",
        "schema": "object",
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
    "url": "/api/v1/connectors/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Deletes a specific connector by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the connector",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content, indicating successful deletion"
      }
    ]
  },
  {
    "url": "/api/v1/connectors/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Retrieves a specific connector by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the connector",
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
    "url": "/api/v1/connectors/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Updates a specific connector by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the connector",
        "example": "ID"
      },
      {
        "name": "connector",
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
    "url": "/api/v1/connectors/{id}/discover",
    "method": "discoverCatalogInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Discovers catalog information for a specified connector",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique ID of the connector",
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
    "url": "/api/v1/connectors/{id}/query_source",
    "method": "querySource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Connectors",
    "typeScriptTag": "connectors",
    "description": "Query your source data",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the connector to query",
        "example": 0
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/syncs",
    "method": "listOperations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syncs",
    "typeScriptTag": "syncs",
    "description": "List all sync operations",
    "parameters": [
      {
        "name": "page[number]",
        "schema": "integer",
        "required": false,
        "description": "Page number for pagination"
      },
      {
        "name": "page[size]",
        "schema": "integer",
        "required": false,
        "description": "Number of items per page for pagination"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/syncs",
    "method": "createNewSyncOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Syncs",
    "typeScriptTag": "syncs",
    "description": "Create a new sync operation",
    "parameters": [
      {
        "name": "sync",
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
    "url": "/api/v1/syncs/{id}",
    "method": "deleteSyncOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Syncs",
    "typeScriptTag": "syncs",
    "description": "Delete a specific sync operation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the sync operation to delete",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content, indicating the sync operation was successfully deleted"
      }
    ]
  },
  {
    "url": "/api/v1/syncs/{id}",
    "method": "showDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syncs",
    "typeScriptTag": "syncs",
    "description": "Show details of a specific sync operation",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/syncs/{id}",
    "method": "updateSpecificSync",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Syncs",
    "typeScriptTag": "syncs",
    "description": "Update a specific sync operation",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "sync",
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
    "url": "/api/v1/syncs/configurations",
    "method": "getReportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Syncs",
    "typeScriptTag": "syncs",
    "description": "Get report data based on given type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/reports",
    "method": "getDataBasedOnType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Get report data based on given type",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "Type of the report to query.",
        "example": "TYPE"
      },
      {
        "name": "metric",
        "schema": "string",
        "description": "Specific metric of interest in the report."
      },
      {
        "name": "connectorIds",
        "schema": "array",
        "description": "IDs of the connectors."
      },
      {
        "name": "timePeriod",
        "schema": "string",
        "description": "Time period for the report."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Validation error occurred."
      }
    ]
  },
  {
    "url": "/api/v1/syncs/{sync_id}/sync_runs",
    "method": "listBySyncId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SyncRuns",
    "typeScriptTag": "syncRuns",
    "description": "List sync runs for a specific sync",
    "parameters": [
      {
        "name": "syncId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the sync to list runs for.",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Optional status to filter the sync runs by."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number for pagination."
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
    "url": "/api/v1/syncs/{sync_id}/sync_runs/{sync_run_id}/sync_records",
    "method": "listForSyncRun",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "SyncRecords",
    "typeScriptTag": "syncRecords",
    "description": "List sync records for a specific sync run",
    "parameters": [
      {
        "name": "syncId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the sync to list records for.",
        "example": 0
      },
      {
        "name": "syncRunId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the sync run to list records for.",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Optional status to filter the sync records by."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page number for pagination."
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
  }
]
    }
      language="TypeScript"
      apiTitle="MultiWoven API"
      apiBaseUrl="https://api.multiwoven.com"
      apiVersion="1.0.0"
      endpoints={15}
      sdkMethods={24}
      schemas={31}
      parameters={37}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/multiwoven/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/multiwoven/openapi.yaml"
      developerDocumentation="docs.multiwoven.com/get-started/introduction"
    />
  );
}
  