import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function LangfuseTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="langfuse-typescript-sdk"
      metaDescription={`Open source LLM engineering platform. Traces, evals, prompt management and metrics to debug and improve your LLM application.`}
      company="Langfuse"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/logo.png"
      companyKebabCase="langfuse"
      clientNameCamelCase="langfuse"
      homepage="langfuse.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["llm","machine_learning","llmops"]}
      methods={[
  {
    "url": "/api/public/dataset-items",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DatasetItems",
    "typeScriptTag": "datasetItems",
    "description": "Create a dataset item",
    "parameters": [
      {
        "name": "datasetName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASETNAME"
      },
      {
        "name": "input",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "expectedOutput",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/dataset-items/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DatasetItems",
    "typeScriptTag": "datasetItems",
    "description": "Get a dataset item",
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
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/dataset-run-items",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DatasetRunItems",
    "typeScriptTag": "datasetRunItems",
    "description": "Create a dataset run item",
    "parameters": [
      {
        "name": "runName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUNNAME"
      },
      {
        "name": "datasetItemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASETITEMID"
      },
      {
        "name": "observationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBSERVATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/datasets/{datasetName}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get a dataset and its items",
    "parameters": [
      {
        "name": "datasetName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASETNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/datasets",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Create a dataset",
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
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/datasets/{datasetName}/runs/{runName}",
    "method": "getRuns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get a dataset run and its items",
    "parameters": [
      {
        "name": "datasetName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATASETNAME"
      },
      {
        "name": "runName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUNNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/health",
    "method": "health",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Check health of API and database",
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
        "statusCode": "405",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/ingestion",
    "method": "batch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Ingestion",
    "typeScriptTag": "ingestion",
    "description": "Batched ingestion for Langfuse Tracing",
    "parameters": [
      {
        "name": "batch",
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
      }
    ]
  },
  {
    "url": "/api/public/metrics/daily",
    "method": "daily",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Get daily metrics of the Langfuse project",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "traceName",
        "schema": "string",
        "required": false,
        "description": "Optional filter by the name of the trace"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "Optional filter by the userId associated with the trace"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Optional filter for metrics where traces include all of these tags"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/observations/{observationId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Observations",
    "typeScriptTag": "observations",
    "description": "Get a observation",
    "parameters": [
      {
        "name": "observationId",
        "schema": "string",
        "required": true,
        "description": "The unique langfuse identifier of an observation, can be an event, span or generation",
        "example": "OBSERVATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/observations",
    "method": "getMany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Observations",
    "typeScriptTag": "observations",
    "description": "Get a list of observations",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "name": "userId",
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
        "name": "traceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parentObservationId",
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/projects",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get Project associated with API key",
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/prompts",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompts",
    "typeScriptTag": "prompts",
    "description": "Get a prompt",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "version",
        "schema": "integer",
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/prompts",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prompts",
    "typeScriptTag": "prompts",
    "description": "Create a prompt",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "prompt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROMPT"
      },
      {
        "name": "config",
        "schema": "undefined",
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/scores",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Score",
    "typeScriptTag": "score",
    "description": "Get a list of scores",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "name": "name",
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/scores",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Score",
    "typeScriptTag": "score",
    "description": "Create a score",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "traceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRACEID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "observationId",
        "schema": "string",
        "required": false,
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/scores/{scoreId}",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Score",
    "typeScriptTag": "score",
    "description": "Delete a score",
    "parameters": [
      {
        "name": "scoreId",
        "schema": "string",
        "required": true,
        "description": "The unique langfuse identifier of a score",
        "example": "SCOREID"
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
        "statusCode": "405",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/public/scores/{scoreId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Score",
    "typeScriptTag": "score",
    "description": "Get a score",
    "parameters": [
      {
        "name": "scoreId",
        "schema": "string",
        "required": true,
        "description": "The unique langfuse identifier of a score",
        "example": "SCOREID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/sessions/{sessionId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Get a session",
    "parameters": [
      {
        "name": "sessionId",
        "schema": "string",
        "required": true,
        "description": "The unique id of a session",
        "example": "SESSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/traces/{traceId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trace",
    "typeScriptTag": "trace",
    "description": "Get a specific trace",
    "parameters": [
      {
        "name": "traceId",
        "schema": "string",
        "required": true,
        "description": "The unique langfuse identifier of a trace",
        "example": "TRACEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  },
  {
    "url": "/api/public/traces",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trace",
    "typeScriptTag": "trace",
    "description": "Get list of traces",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Format of the string [field].[asc/desc]. Fields: id, timestamp, name, userId, release, version, public, bookmarked, sessionId. Example: timestamp.asc"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "Only traces that include all of these tags will be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="langfuse"
      apiBaseUrl="https://cloud.langfuse.com"
      apiVersion=""
      endpoints={18}
      sdkMethods={22}
      schemas={151}
      parameters={59}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/langfuse/openapi.yaml"
      developerDocumentation="langfuse.com/docs"
    />
  );
}
  