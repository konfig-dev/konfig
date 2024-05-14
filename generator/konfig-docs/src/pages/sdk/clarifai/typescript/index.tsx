import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ClarifaiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="clarifai-typescript-sdk"
      metaDescription={`Clarifai is an independent artificial intelligence company that specializes in computer vision, natural language processing, and audio recognition.  One of the first deep learning platforms having been founded in 2013, Clarifai provides an AI platform for unstructured image, video, text, and audio data. Its platform supports the full AI lifecycle for data exploration, data labeling, model training, evaluation, and inference around images, video, text, and audio data. Headquartered in Washington DC, Clarifai uses machine learning and deep neural networks to identify and analyze images, videos, text, and audio automatically. Clarifai enables users to implement AI technology into their products via API, Mobile SDK, and/or on-premise solutions.`}
      company="Clarifai"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/logo.png"
      companyKebabCase="clarifai"
      clientNameCamelCase="clarifai"
      homepage="clarifai.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai"]}
      methods={[
  {
    "url": "/v2/annotation_filters",
    "method": "deleteAnnotationFilters2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more annotation filters in a single request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotationFilterIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotation_filters",
    "method": "listAnnotationFilters2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the annotation filters.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotation_filters",
    "method": "patchAnnotationFilters2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more annotation filters.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotationFilters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotation_filters",
    "method": "postAnnotationFilters2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add annotation filters.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotationFilters",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotation_filters/{annotationFilterId}",
    "method": "getAnnotationFilter2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific annotation filter.",
    "parameters": [
      {
        "name": "annotationFilterId",
        "schema": "string",
        "required": true,
        "description": "Identify annotation filter by id.",
        "example": "ANNOTATIONFILTERID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations",
    "method": "deleteAnnotations4",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple annotations in one request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inputIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations",
    "method": "listAnnotations2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the annotation.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List annotations for these IDs"
      },
      {
        "name": "inputIds",
        "schema": "array",
        "required": false,
        "description": "List annotations for these Input IDs\nNote that 'ids' are optional but if the are provided the number and order in\n'ids' and 'input_ids' should match\nIf you do not specify 'ids' all the annotations for 'input_ids' are returned\nIf a you do not specify both 'input_ids' and 'ids' all the annotations in the app are returned"
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "Only return the annotations that has one of these user IDs, effectively operating as an\nOR among them to filter down the results.\nIf model_version_ids are also provided these user_ids are OR'd with them as well since\nannotations are either provided by users or model versions and we want the union of any\nprovided user or model version annotations in the results of ListAnnotations request.\nIf no user_ids are provided then annotations from all users are returned."
      },
      {
        "name": "modelVersionIds",
        "schema": "array",
        "required": false,
        "description": "Only return the annotations that has one of these model version IDs, effectively operating as an\nOR among them to filter down the results.\nIf user_ids are also provided these model_versions_ids are OR'd with them as well since\nannotations are either provided by users or model versions and we want the union of any\nprovided user or model version annotations in the results of ListAnnotations request.\nIf no model_version_ids are provided then annotations from all model versions are returned."
      },
      {
        "name": "listAllAnnotations",
        "schema": "boolean",
        "required": false,
        "description": "Set this flag to list both trusted and not trusted annotations\nby default it's listing only trusted annotations"
      },
      {
        "name": "returnModelOutput",
        "schema": "boolean",
        "required": false,
        "description": "Set this flag to return the model output for model annotations in the response."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": false,
        "description": "Flag to filter annotations by task_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations",
    "method": "patchAnnotations2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more annotations.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleteIfEmptyData",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations",
    "method": "postAnnotations2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post annotations.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotations",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/searches",
    "method": "patchAnnotationsSearches2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch saved annotations searches by ids.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/searches",
    "method": "postAnnotationsSearches2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a search over annotations",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/searches/metrics",
    "method": "listAnnotationSearchMetrics2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the evaluation results between two search requests",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/searches/metrics",
    "method": "postAnnotationSearchMetrics2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Evaluate the results of two search requests",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groundTruth",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searchToEval",
        "schema": "object",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evaluationType",
        "schema": "string",
        "description": "",
        "default": "Undefined"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/searches/metrics/{id}",
    "method": "deleteAnnotationSearchMetrics2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "DeleteAnnotationSearchMetrics",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/searches/metrics/{id}",
    "method": "getAnnotationSearchMetrics2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the evaluation results between two search requests",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique custom facing id that identifies the eval to get",
        "example": "ID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/annotations/workers",
    "method": "listAnnotationWorkers2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "ListAnnotationWorkers lists users, models, and workflows (collectively\nknown as \"workers\") that have added annotations to the application.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response.\nCurrently supported: all, names"
      },
      {
        "name": "trustedOnly",
        "schema": "boolean",
        "required": false,
        "description": "(optional URL parameter) Only list workers that have created trusted annotations."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/app",
    "method": "getApp2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific app from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/apps",
    "method": "listApps2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the apps.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByName",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:\nIf true, we only return apps that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return apps that are starred by the requesting user"
      },
      {
        "name": "templateOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return apps that are marked as a template by the app owner."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the application:\n  - id\n  - name\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query various text fields (id, name, description, and notes) that can contain the words in the query string\nDeprecated: use search instead."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the id, name and notes of the app. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter by the user-unique-id of the app. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bulk_operations",
    "method": "deleteBulkOperations2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "delete one or more terminated bulk operations",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bulk_operations",
    "method": "listBulkOperations2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the bulk operations",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bulk_operations",
    "method": "cancelBulkOperations2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Cancel one or more bulk operations",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bulk_operations",
    "method": "postBulkOperations2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Perform bulk operations on a list of inputs based on input source.\nOperation include add, update, delete of concepts, metadata and geo data.\nThis is an Asynchronous process. Use ListBulkOperations or GetBulkOperation to check the status.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bulkOperations",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/bulk_operations/{id}",
    "method": "getBulkOperation2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the bulk operation details by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The bulk operation id",
        "example": "ID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/collectors",
    "method": "deleteCollectors2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple collectors in one request.\nThis call is asynchronous. Use DeleteCollector if you want a synchronous version.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleteAll",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/collectors",
    "method": "listCollectors2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the collectors.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Collectors."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/collectors",
    "method": "patchCollectors2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more collectors.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collectors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Collectors."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/collectors",
    "method": "postCollectors2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a list of Collectors to an app.\nIn the handler of this endpoint we also check for all the scopes of the  POST /inputs\nendpoint.\nThose current scopes are listed here as a hard requirement.\nThey are needed when adding the collectors just so we now that you have permission with\nthat key at least to do the writing to this app with POST /inputs.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collectors",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Collectors."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/collectors/{collectorId}",
    "method": "getCollector2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific collector from an app.",
    "parameters": [
      {
        "name": "collectorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTORID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with a single Collector."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts",
    "method": "listConcepts2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the concepts.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Fuzzy match on concept ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts",
    "method": "patchConcepts2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more concepts.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "concepts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts",
    "method": "postConcepts2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a concept to an app.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "concepts",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/knowledge_graphs",
    "method": "listKnowledgeGraphs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all domain graphs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/knowledge_graphs",
    "method": "postKnowledgeGraphs2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post domain graphs.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "knowledgeGraphs",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/mappings/jobs",
    "method": "postConceptMappingJobs2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Start concept mapping jobs.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptMappingJobs",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/searches",
    "method": "postConceptsSearches2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the concepts to find one or more you're looking for.\nThis leverage the \"body\" parameter because we also have page and\nper_page as url query param variables in this request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptQuery",
        "schema": "object",
        "description": ""
      },
      {
        "name": "extraInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/status",
    "method": "getConceptCounts2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the concepts with their positive and negative counts",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/{conceptId}",
    "method": "getConcept2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific concept from an app.",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The concept's id.",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/{conceptId}/languages",
    "method": "listConceptLanguages2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the concept in all the translated languages.",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/{conceptId}/languages",
    "method": "patchConceptLanguages2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch the name for a given language names by passing in a list of concepts with the new names\nfor the languages.",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptLanguages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/{conceptId}/languages",
    "method": "postConceptLanguages2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a new translation for this concept.",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptLanguages",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/concepts/{conceptId}/languages/{language}",
    "method": "getConceptLanguage2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific concept from an app.",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "This is the language identifier.",
        "example": "LANGUAGE"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets",
    "method": "deleteDatasets2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more datasets in a single request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets",
    "method": "listDatasets3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the datasets.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "If neither sort option is set to true, will sort by modified_at."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the external id"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter datasets by bookmark. If set, only return bookmarked datasets. Otherwise none bookmarked datasets only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the dataset:\n  - id\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Fuzzy filter on dataset ID\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets",
    "method": "patchDatasets2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more datasets.\nThe process is atomic, i.e. either all or no datasets are patched.\nIf there is an error for one dataset,\nthe process will stop, revert the transaction and return the error.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets",
    "method": "postDatasets2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add datasets to an app.\nThe process is atomic, i.e. either all or no datasets are added.\nIf there is an error for one dataset,\nthe process will stop, revert the transaction and return the error.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasets",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}",
    "method": "getDataset2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific dataset.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/inputs",
    "method": "deleteDatasetInputs2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more dataset inputs in a single request.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/inputs",
    "method": "listDatasetInputs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the dataset inputs in a dataset.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/inputs",
    "method": "postDatasetInputs2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add dataset inputs to a dataset.\nThe process is not atomic, i.e. if there are errors with some dataset\ninputs, others might still be added. The response reports\n  - SUCCESS if all dataset inputs were added,\n  - MIXED_STATUS if only some dataset inputs were added, and\n  - FAILURE if no dataset inputs were added.\nEach individual dataset input in the response has the status set to\nindicate if it was successful or if there was an error.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "search",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/inputs/{inputId}",
    "method": "getDatasetInput2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific dataset input.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset input by id.",
        "example": "INPUTID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions",
    "method": "deleteDatasetVersions2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more dataset versions in a single request.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetVersionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions",
    "method": "listDatasetVersions2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the dataset versions.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions",
    "method": "patchDatasetVersions2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more dataset versions.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions",
    "method": "postDatasetVersions2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add dataset versions to a dataset.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetVersions",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions/{datasetVersionId}",
    "method": "getDatasetVersion2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific dataset version.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "datasetVersionId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset version by id.",
        "example": "DATASETVERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions/{datasetVersionId}/exports",
    "method": "putDatasetVersionExports2",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Create export of a dataset version.",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "datasetVersionId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset version by id.",
        "example": "DATASETVERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exports",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/datasets/{datasetId}/versions/{datasetVersionId}/metrics",
    "method": "listDatasetVersionMetricsGroups2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "datasetVersionId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset version by id.",
        "example": "DATASETVERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "parentPaths",
        "schema": "array",
        "required": false,
        "description": "Filter by parent path. Multiple parent paths are OR-ed. Empty list results in no filter."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter by parent type. Multiple types are OR-ed. Empty list results in no filter.\n\n - INPUT_TYPE: Group data examples by input type.\nExamples: images, videos, text, audio.\n - CONCEPT_ID: Group data examples by concept ID.\nExamples: inputs with cat concept, inputs with dog concept.\n - CONCEPTS_COUNT: Group data examples by concepts count.\nExamples: inputs with 20 concepts, inputs with 21 concepts.\n - BOUNDING_BOXES_COUNT: Group data examples by bounding boxes count.\nExamples: inputs with 20 bounding boxes, inputs with 21 bounding boxes.\n - POLYGONS_COUNT: Group data examples by polygons count.\nExamples: inputs with 20 polygons, inputs with 21 polygons.\n - POINTS_COUNT: Group data examples by points count.\nExamples: inputs with 20 points, inputs with 21 points.\n - MASKS_COUNT: Group data examples by masks count.\nExamples: inputs with 20 masks, inputs with 21 masks.\n - PIXELS_COUNT: Group data examples by pixels count.\nIn order to reduce the number of groups, we use bins.\nExamples for bin size = 400: inputs with [200000, 200400) pixels, inputs with [200400, 200800) pixels.\n - ASPECT_RATIO: Group data examples by aspect ratio.\nIn order to reduce the number of groups, we use bins.\nExamples for bin size = 0.1: inputs with [0.5, 0.6) aspect ratio, inputs with [0.6, 0.7) aspect ratio."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/evaluations",
    "method": "listEvaluations3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "If true, sort in ascending order, otherwise sort in descending order."
      },
      {
        "name": "sortByAppId",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by application id"
      },
      {
        "name": "sortByRocAuc",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_roc_auc"
      },
      {
        "name": "sortByF1",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.f1"
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by when the metric was created"
      },
      {
        "name": "sortByMeanAvgPrecision",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.mean_avg_precision_iou_50"
      },
      {
        "name": "sortByPrecision",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_precision"
      },
      {
        "name": "sortByRecall",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_recall"
      },
      {
        "name": "sortByModelId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortByEvalDatasetId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortByTrainDatasetId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": false,
        "description": "Filter on model type id"
      },
      {
        "name": "evalDatasetIds",
        "schema": "array",
        "required": false,
        "description": "Filter on dataset ID of the dataset version specified in the metric version"
      },
      {
        "name": "trainDatasetIds",
        "schema": "array",
        "required": false,
        "description": "Filter on dataset ID of the dataset version specified by the model version"
      },
      {
        "name": "conceptIds",
        "schema": "array",
        "required": false,
        "description": "Filter on concept IDs specified in the modele version's output_info"
      },
      {
        "name": "showFailedMetrics",
        "schema": "boolean",
        "required": false,
        "description": "Whether to show failed metrics, defaults to false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/evaluations",
    "method": "postEvaluations2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evalMetrics",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/evaluations/{evaluationId}",
    "method": "getEvaluation2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "evaluationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVALUATIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsConfusionMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsCooccurrenceMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsLabelCounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsBinaryMetrics",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsTestSet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByArea",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByClass",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs",
    "method": "deleteInputs2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple inputs in one request.\nThis call is asynchronous.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs",
    "method": "listInputs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the inputs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": "Status code from internal codes.\n\n - ZERO: to be revised and greatly expanded\n - SUCCESS: Generic\n - MOVED: Resource moved. Respond with Http status 307 and add new Location header to response\n - TEAPOT: SUCCESS_WARNING_API_DEPRECATED = 10001;\nSUCCESS_WARNING_CLIENT_DEPRECATED = 10002;\n - CONN_ACCOUNT_ISSUES: Clarifai Connection Codes: 11xxx\n\nexpired cc, still in trial, feature not supported in your tier\n - CONN_TOKEN_INVALID: invalid auth token used. Deprecated: we should return CONN_KEY_INVALID instead now in all cases.\n - CONN_CREDENTIALS_INVALID: invalid auth credentials\n - CONN_EXCEED_HOURLY_LIMIT: throttle hourly limit exceeded\n - CONN_EXCEED_MONTHLY_LIMIT: throttle monthly limit exceeded\n - CONN_THROTTLED: throttler and billing stuff\n - CONN_EXCEEDS_LIMITS: throttler and billing stuff\n - CONN_INSUFFICIENT_SCOPES: api key has insufficient permissions\n - CONN_KEY_INVALID: api key is invalid\n - CONN_KEY_NOT_FOUND: api key not found\n - CONN_BAD_REQUEST_FORMAT: multipart form parsing, broken json, etc\n - CONN_DOES_NOT_EXIST: when path is bad\n - CONN_INVALID_REQUEST: something wrong with a header\n - CONN_METHOD_NOT_ALLOWED: when a request method is not allowed\n - CONN_NO_GDPR_CONSENT: lack GDPR consent\n - CONN_AUTH_METHOD_DISABLED: authentication method is disabled\n - MODEL_TRAINED: Model/Custom Training related 20xxx\n\nCustom model has been already trained.\n - MODEL_TRAINING: Custom model is currently training.\n - MODEL_UNTRAINED: Custom model has not yet been trained.\n - MODEL_QUEUED_FOR_TRAINING: Custom model is currently in queue for training, waiting on assets to process first.\n - MODEL_TRAINING_FAILED: generic err msg for any type of model training err.\n - MODEL_TRAINING_NO_DATA: Custom model training had no data.  FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_NO_POSITIVES: Custom model training had no positive examples. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_ONE_VS_N_SINGLE_CLASS: Custom model training was ONE_VS_N but with a single class. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_TIMED_OUT: Training took longer than hard coded timeouts. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_WAITING_ERROR: Training got error waiting on asset pipeline to finish. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_UNKNOWN_ERROR: Training threw an unknown exception.\n - MODEL_TRAINING_MSG_REDELIVER: Training message was redelivered. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_INSUFFICIENT_DATA: Training got error due to insufficient labelled data. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_INVALID_PARAMS: FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_INVALID_DATA_TOLERANCE_EXCEEDED: Training is stopped because too much data was dropped. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_EVALUATION_TIMED_OUT: Evaluation took longer than hard coded timeouts. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_WAITING_ERROR: Evaluation got error waiting on asset pipeline to finish.FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_UNKNOWN_ERROR: EVALUATION THREW AN UNKNOWN EXCEPTION.\n - MODEL_EVALUATION_MSG_REDELIVER: Eval message was redelivered. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_NEED_LABELS: Don't have enough concepts labelled to perform evaluation. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_NEED_INPUTS: Don't have enough inputs per concept to perform evaluation. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_FAILED: Generic err code for eval failure.\n - MODEL_DEPLOYMENT_FAILED: Used when inference coordinator failed to deploy spire and throws an error\n - MODEL_DEPLOYING: Used when calling the inference coordinator to deploy a spire\n - MODEL_QUEUED_FOR_DEPLOYMENT: Used when training is completed\n - MODEL_NOT_DEPLOYED: Used when model spire deployment is manually taken down or due to inactivity\n - MODEL_REFERENCE_INVALID_ARGUMENT: Used when a model reference field is not set properly\n - MODEL_EXAMPLE_INPUT_INVALID_ARGUMENT: Used when a model example input field is not set properly\n - MODEL_EXPORTED: Model Export status codes\n - WORKFLOW_NO_MATCHING_INPUT: specified model input not in workflow\n - WORKFLOW_REQUIRE_TRAINED_MODEL: specified model must be trained\n - WORKFLOW_INVALID_ARGUMENT: error in the request somewhere\n - WORKFLOW_INVALID_REQUEST: error in the request somewhere\n - CONCEPT_MODIFY_SUCCESS: Concept related 23xxx\n - ANNOTATION_SUCCESS: Annotation related 24xxx\n - METADATA_INVALID_PATCH_ARGUMENTS: Metadata related 249xx\n - TRAINER_JOB_STATE_NONE: Training service related 25xxx\n - DATA_DUMP_SUCCESS: Data Dump related 251xx\n - DATA_DUMP_NO_DATA: DEPRECATED: Not used anymore. Now for an empty data dump, DATA_DUMP_SUCCESS is returned. To detect an empty data dump, check if the inptus count is 0.\n - APP_DUPLICATION_SUCCESS: Duplicate related 252xx\n - MODULE_DOES_NOT_EXIST: Module related codes 253xx\n - BULK_OPERATION_SUCCESS: Bulk Operation related codes 254xx\n - RUNNER_DOES_NOT_EXIST: Runner related codes 256xx\n - INPUT_DOWNLOAD_SUCCESS: Input:Image related 30xxx\n - INPUT_DOWNLOAD_PENDING: when things are async, this is the default status.\n - INPUT_DOWNLOAD_FAILED: any type of error downloading and processing\n - INPUT_VIDEO_DOWNLOAD_SUCCESS: Input:Video related 31xxx -- Deprecated\n - INPUT_WRITES_DISABLED_FOR_MAINTENANCE: deprecate this one. Use REQUEST_DISABLED_FOR_MAINTENANCE\n - PREDICT_INVALID_REQUEST: API formatting issues 4000x\n - DATABASE_DUPLICATE_KEY: Other related 400xx\n - EXTERNAL_CONNECTION_ERROR: could not connect to external services\n - QUEUE_CONN_ERROR: Queue related errors 41xxx\n - SQS_OVERLIMIT: SQS related errors 411xx\n - SEARCH_INTERNAL_FAILURE: Search related errors 43xxxx\n - EVALUATION_QUEUED: Workflow evaluation err code\n - STRIPE_EVENT_ERROR: Stripe 44xxx\n - CACHE_MISS: Redis/Cache 45xxx\n - SIGNUP_EVENT_ERROR: Sift Science 46xxx\n - APP_COUNT_INVALID_MESSAGE: Application counts related errors 470xx\n - MP_DOWNLOAD_ERROR: Media processor related errors 471xx -- DEPRECATED\n - DATATIER_CONN_ERROR: DataTier related error 472xx\n - USER_CONSENT_FACE: User legal consent stauts related 50xxx\n - WORKER_MISSING: Workers 51xxx\n - COLLECTOR_MISSING: Collectors 52xxx\n - SSO_IDENTITY_PROVIDER_DOES_NOT_EXIST: SSO 53xxx\n - TASK_IN_PROGRESS: Tasks 54xxx\nThe task was created.\n - TASK_DONE: The task is completed.\n - TASK_WONT_DO: The task is marked as abandoned.\n - TASK_FAILED: An error occurred during add-task-annotations or add-auto-annotations pipeline.\n - TASK_IDLE: When an Auto Annotation task job has finished processing its last batch and is waiting for more dataset assets.\n - TASK_CONFLICT: The task operation is in conflict with the current state of the server.\n - TASK_NOT_IMPLEMENTED: Certain task-related scenarios are not implemented.\n - TASK_MISSING: Task was not found.\n - TASK_PERMISSION_DENIED: Not allowed to perform a task-related action.\n - LABEL_ORDER_PENDING: Label Order Related Status Code 55xxx\n - LICENSE_ACTIVE: License Related Status Code 600xx\n - LICENSE_DELETED: hidden state not reflected to users\n - PASSWORD_VALIDATION_SUCCESS: Password Related Status Code\n - FEATUREFLAG_CONFIG_NOT_FOUND: Feature flags status code\n - MAINTENANCE_SUCCESS: Maintenance status code\n - DATASET_VERSION_PENDING: Datasets 64xxx\nThe dataset version is pending to be processed.\n - DATASET_VERSION_IN_PROGRESS: The dataset version is currently being processed.\n - DATASET_VERSION_READY: The dataset version is ready to be used.\n - DATASET_VERSION_FAILURE: An error occurred during the dataset version processing.\n - DATASET_VERSION_UNEXPECTED_ERROR: An unexpected error occurred during the dataset version processing.\n - DATASET_VERSION_CONFLICT: An alteration to dataset version would create a conflict\n - DATASET_INPUT_SUCCESS: The dataset input was successfully added.\n - DATASET_INPUT_DUPLICATE: The dataset input is a duplicate.\nDeprecated: Unused.\n - DATASET_VERSION_EXPORT_SUCCESS: The dataset version export is completed.\n - DATASET_VERSION_EXPORT_PENDING: The dataset version is pending to be exported.\n - DATASET_VERSION_EXPORT_FAILED: An error occurred during the dataset version export.\n - DATASET_VERSION_EXPORT_IN_PROGRESS: The dataset version is currently being exported.\n - DATASET_VERSION_EXPORT_UNEXPECTED_ERROR: An unexpected error occurred during the dataset version export.\n - JOB_QUEUED: Generic Job status codes\n - AUTH_MISSING_IDP_ASSOC: auth issues\n\nTODO: Knowledge graph related 80xxx\n - UPLOAD_IN_PROGRESS: Multipart uploading status codes\n - BILLING_INVALID_INFO: Billing related issues: 69xxx\n - INTERNAL_SERVER_ISSUE: Internal issues: 98xxx\n - CONN_UNCATEGORIZED: Uncategorized: 99xxx: move off as soon as known\n - BAD_REQUEST: Deprecated: migrate off to one of the internal issues\n - SERVER_ERROR: Deprecated: migrate off to one of the internal issues",
        "default": "ZERO"
      },
      {
        "name": "statusDescription",
        "schema": "string",
        "required": false,
        "description": "A short description of the error."
      },
      {
        "name": "statusDetails",
        "schema": "string",
        "required": false,
        "description": "More details of the given error.\nThese details may be exposed to non-technical users.\nFor technical details, try to use developer_notes field."
      },
      {
        "name": "statusStackTrace",
        "schema": "array",
        "required": false,
        "description": "For some environment we may return a stack trace to help debug\nany issues."
      },
      {
        "name": "statusPercentCompleted",
        "schema": "integer",
        "required": false,
        "description": "specifically for long running jobs"
      },
      {
        "name": "statusTimeRemaining",
        "schema": "integer",
        "required": false,
        "description": "if status is pending, how much time is remaining (in seconds)"
      },
      {
        "name": "statusReqId",
        "schema": "string",
        "required": false,
        "description": "A request ID may be present, to help monitoring and tracking requests"
      },
      {
        "name": "statusInternalDetails",
        "schema": "string",
        "required": false,
        "description": "Internal Annotation (do not set in production, for internal Clarifai use only)."
      },
      {
        "name": "statusRedirectInfoUrl",
        "schema": "string",
        "required": false,
        "description": "New location for the resource. Used to set response Location header."
      },
      {
        "name": "statusRedirectInfoResourceType",
        "schema": "string",
        "required": false,
        "description": "Resource type"
      },
      {
        "name": "statusRedirectInfoOldResourceId",
        "schema": "string",
        "required": false,
        "description": "Old resource id"
      },
      {
        "name": "statusRedirectInfoNewResourceId",
        "schema": "string",
        "required": false,
        "description": "New resource id"
      },
      {
        "name": "statusDeveloperNotes",
        "schema": "string",
        "required": false,
        "description": "Notes for developer.\nThese notes are rather technical details for developers how to interpret the status,\ne.g. why an error occurred and how to avoid getting the error."
      },
      {
        "name": "ids",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs",
    "method": "patchInputs2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more inputs.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs",
    "method": "postInputs2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add 1 or more input to an app.\nThe actual inputs processing is asynchronous.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inputsAddJobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputIdConflictResolution",
        "schema": "string",
        "description": "",
        "default": "INPUT_ID_CONFLICT_RESOLUTION_NOT_SET"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/annotations",
    "method": "deleteAnnotations2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple annotations in one request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inputIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/data_sources",
    "method": "postInputsDataSources2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Initiates retrieval of inputs from cloud storage from a user provided data source.\nWill create and return an inputs-add-job for tracking progress.\nArchives will be extracted and their contents will be processed as inputs.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataSources",
        "schema": "array",
        "description": ""
      },
      {
        "name": "callBackUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appPat",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/jobs/add",
    "method": "listInputsAddJobs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the inputs add jobs",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/jobs/add/{id}",
    "method": "getInputsAddJob2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the input add job details by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id of add inputs job",
        "example": "ID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/jobs/add/{id}",
    "method": "cancelInputsAddJob2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "cancel the input add job by ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id of add inputs job to be cancelled",
        "example": "ID"
      },
      {
        "name": "userAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/jobs/extraction",
    "method": "listInputsExtractionJobs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the input extraction jobs",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/jobs/extraction",
    "method": "cancelInputsExtractionJobs2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/jobs/extraction/{inputsExtractionJobId}",
    "method": "getInputsExtractionJob2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the input extraction job details by ID",
    "parameters": [
      {
        "name": "inputsExtractionJobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTSEXTRACTIONJOBID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/searches",
    "method": "patchInputsSearches2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch saved inputs searches by ids.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/searches",
    "method": "postInputsSearches2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a search over inputs",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
        "description": ""
      },
      {
        "name": "onlyCount",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/status",
    "method": "getInputCount2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get input count per status.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/stream",
    "method": "streamInputs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Streams all the inputs starting from oldest assets.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 20."
      },
      {
        "name": "lastId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "orderById",
        "schema": "boolean",
        "required": false,
        "description": "By default, the endpoint return inputs by the time when it is added.\nIf this is set to true, we will return inputs by id."
      },
      {
        "name": "descending",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/uploads",
    "method": "postInputsUploads2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Start uploading a file archive containing inputs.\nWill create and return an inputs-add-job for tracking progress.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputsUploads",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/{inputId}",
    "method": "deleteInput2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single input asynchronously.",
    "parameters": [
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/{inputId}",
    "method": "getInput2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific input from an app.",
    "parameters": [
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/{inputId}/annotations/{annotationId}",
    "method": "deleteAnnotation2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single annotation.",
    "parameters": [
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANNOTATIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/{inputId}/annotations/{annotationId}",
    "method": "getAnnotation2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific annotation from an app.",
    "parameters": [
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANNOTATIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/inputs/{inputId}/video_manifest",
    "method": "getInputVideoManifest2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a video input manifest.",
    "parameters": [
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/label_orders",
    "method": "deleteLabelOrders2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple label orders in one request.\nthis do not change task status",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/label_orders",
    "method": "listLabelOrders2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List label orders.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/label_orders",
    "method": "patchLabelOrders2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more label orders.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "labelOrders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/label_orders",
    "method": "postLabelOrders2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add Label orders.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "labelOrders",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/label_orders/{labelOrderId}",
    "method": "getLabelOrder2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a label order.",
    "parameters": [
      {
        "name": "labelOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABELORDERID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with a label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models",
    "method": "deleteModels2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple models in one request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleteAll",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models",
    "method": "listModels3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the models.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByName",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByNumInputs",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of training inputs"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time of the latest model version.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at"
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by count of stars"
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": false,
        "description": "Filtering options:\nFilter models by the specific model_type_id. See ListModelTypes for the list of ModelType.Id's\nsupported."
      },
      {
        "name": "trainedOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that have the status MODEL_TRAINED, which includes non-trainable model types."
      },
      {
        "name": "inputFields",
        "schema": "array",
        "required": false,
        "description": "The list of input fields to the model.\nFor example, you can specify 'image', which will return models that make inferences on images like visual-classifier models."
      },
      {
        "name": "outputFields",
        "schema": "array",
        "required": false,
        "description": "The list of output fields to the model.\nFor example, you can specify 'regions[...].data.concepts', which will return visual-detector models."
      },
      {
        "name": "license",
        "schema": "string",
        "required": false,
        "description": "Filter by the license of the model version"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that are starred by the requesting user"
      },
      {
        "name": "toolkits",
        "schema": "array",
        "required": false,
        "description": "List of toolkit tags to filter by"
      },
      {
        "name": "useCases",
        "schema": "array",
        "required": false,
        "description": "List of use_case tags to filter by"
      },
      {
        "name": "languages",
        "schema": "array",
        "required": false,
        "description": "List of language tags to filter by"
      },
      {
        "name": "dontFetchFromMain",
        "schema": "boolean",
        "required": false,
        "description": "Old API behavior resulted in returning clarifai main models when calling ListModels while scoped to an app. While we transition\naway from that, we can use this flag to not always fetch clarifai main models, unless that is the app we are explicitly listing for."
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter models by bookmark. If set, only return bookmarked models. Otherwise none bookmarked models only.\nNote: you can not filter `trained_only` and bookmark at the same time.\nWhen filter by bookmark, we will return trained and untrained models."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the model:\n  - id\n  - name\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query name, description and id fields, that can contain the words in the query string. Does NOT support wildcards - full words only. Supports operators \"OR\" and \"-\" as NOT.\nDeprecated: use search instead."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the description and id of the model. This supports wildcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "filterByUserId",
        "schema": "boolean",
        "required": false,
        "description": "Extends the name filter to include the user_id of the application owner that the model belongs to.\nDeprecated: use search instead of name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models",
    "method": "patchModels2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more models.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "models",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models",
    "method": "postModels2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a models to an app.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "models",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/searches",
    "method": "postModelsSearches2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the models to find one or more you're looking for.\nThis leverage the \"body\" parameter because we also have page and\nper_page as url query param variables in this request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelQuery",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/types",
    "method": "listModelTypes2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the model types available in the platform.\nThis MUST be above ListModels so that the /models/types endpoint takes precedence.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/types/{modelTypeId}",
    "method": "getModelType2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific model type.",
    "parameters": [
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": true,
        "description": "The specific ModelType.Id you want to retrieve.",
        "example": "MODELTYPEID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/versions/upload",
    "method": "postModelVersionsUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "This is a streaming endpoint, the request has a field, upload_data, which can either be the config for the upload or the actual data to upload.\nThe config must be sent first before the model_bytes can be uploaded.\nOnce the config has been sent, the server will respond with a confirmation containing the model_version_id.\nThis is so that if your upload is interrupted, you can resume the upload by sending the config again with the model_version_id specified for your model_version.\nThe actual upload will be done via a multipart upload, the latest successful part_id will be sent from the server in the response to the model_bytes.",
    "parameters": [
      {
        "name": "uploadConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contentPart",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}",
    "method": "deleteModel2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single model.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}",
    "method": "getModel2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific model from an app.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": "This is included so that we can re-use this request for multiple\nrpcs with and without the version_id."
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trainedBefore",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/check_consents",
    "method": "patchModelCheckConsents2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model check consents",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "the model id",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "checkConsents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/inputs",
    "method": "listModelInputs2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated: Unmaintained and ideally replaced with usage of datasets",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/languages",
    "method": "patchModelLanguages2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model languages tags",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/output_info",
    "method": "getModelOutputInfo2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a the output info for a given model_id or model_id/version_id\ncombo.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": "This is included so that we can re-use this request for multiple\nrpcs with and without the version_id."
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trainedBefore",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/outputs",
    "method": "postModelOutputs4",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get predicted outputs from the model.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/publish",
    "method": "postModelVersionsPublish2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostModelVersionsPublish",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/references",
    "method": "listModelReferences2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Lists model references tied to a particular model id.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 128 references per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/toolkits",
    "method": "patchModelToolkits2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model toolkits tags",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "toolkits",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/unpublish",
    "method": "postModelVersionsUnPublish2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostModelVersionsUnPublish",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/usecases",
    "method": "patchModelUseCases2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model use_cases tags",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "usecases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions",
    "method": "listModelVersions2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the models.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "conceptIds",
        "schema": "array",
        "required": false,
        "description": "Filtering options:\nTo list only the model versions that have these concept ids present in them."
      },
      {
        "name": "trainedOnly",
        "schema": "boolean",
        "required": false,
        "description": "To list only the model versions that have been trained."
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByStatusCode",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the status code"
      },
      {
        "name": "sortByNumInputs",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of training inputs"
      },
      {
        "name": "sortByDescription",
        "schema": "boolean",
        "required": false,
        "description": "Whether to sort by the description"
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time\nIf neither sort option is set to true, will sort by created_at."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions",
    "method": "postModelVersions2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Create a new model version to trigger training of the model.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "evalInfo",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/time_estimate",
    "method": "postModelVersionsTrainingTimeEstimate2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the training time estimate based off train request and estimated input count.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "estimatedInputCount",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{modelVersionId}/evaluations",
    "method": "listModelVersionEvaluations2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use GetEvaluation instead\nList the evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELVERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{modelVersionId}/evaluations",
    "method": "postModelVersionEvaluations2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use PostEvaluations instead",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELVERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evalMetrics",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{modelVersionId}/evaluations/{evaluationId}",
    "method": "getModelVersionEvaluation2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use GetEvaluation instead\nGet an evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELVERSIONID"
      },
      {
        "name": "evaluationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVALUATIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsConfusionMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsCooccurrenceMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsLabelCounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsBinaryMetrics",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsTestSet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByArea",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByClass",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{modelVersionId}/input_examples",
    "method": "listModelVersionInputExamples2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "ListModelVersionInputExamples",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "id of model the example belongs to",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "specific version the example belongs to",
        "example": "MODELVERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 128 references per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{modelVersionId}/input_examples/{exampleId}",
    "method": "getModelVersionInputExample2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "GetModelVersionInputExample",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "id of model the example belongs to",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "specific version the example belongs to",
        "example": "MODELVERSIONID"
      },
      {
        "name": "exampleId",
        "schema": "string",
        "required": true,
        "description": "Id of example to fetch",
        "example": "EXAMPLEID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}",
    "method": "deleteModelVersion2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single model.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}",
    "method": "getModelVersion2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific model from an app.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/exports",
    "method": "getModelVersionExport2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "GetModelVersionExport",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/exports",
    "method": "putModelVersionExports2",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Export a model",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/inputs",
    "method": "listModelInputs4",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated: Unmaintained and ideally replaced with usage of datasets",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/metrics",
    "method": "getModelVersionMetrics2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated: Use GetEvaluation instead\nGet the evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsConfusionMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsCooccurrenceMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsLabelCounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsBinaryMetrics",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsTestSet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByArea",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByClass",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/metrics",
    "method": "postModelVersionMetrics2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use PostEvaluations instead\nRun the evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "testSearch",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evalInfo",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/output_info",
    "method": "getModelOutputInfo4",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a the output info for a given model_id or model_id/version_id\ncombo.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "This is included so that we can re-use this request for multiple\nrpcs with and without the version_id.",
        "example": "VERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trainedBefore",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/models/{modelId}/versions/{versionId}/outputs",
    "method": "postModelOutputs2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get predicted outputs from the model.",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/modules",
    "method": "listModules3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the modules in community, by user or by app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "If neither sort option is set to true, will sort by modified_at."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the external id"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter modules by bookmark. If set, only return bookmarked modules. Otherwise none bookmarked modules only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the module:\n  - id\n  - description\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the id and description of the module. This supports wildcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "filterByUserId",
        "schema": "boolean",
        "required": false,
        "description": "Filter by the application owner whose this module belongs to\nDeprecated: use search instead of name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/my_scopes",
    "method": "myScopes3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "API Keys in the public API -- request is itself Key authorized, and will tell\nthe user the scopes/access of the key/credential they're providing, as computed by\nour authorizer:",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/myscopes",
    "method": "myScopes2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "API Keys in the public API -- request is itself Key authorized, and will tell\nthe user the scopes/access of the key/credential they're providing, as computed by\nour authorizer:",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/myscopesroot",
    "method": "myScopesRoot",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/open_source_licenses",
    "method": "listOpenSourceLicenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the supported open source licenses in the platform.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/resource_counts",
    "method": "getResourceCounts2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the resource counts for the app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/searches",
    "method": "listSearches2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all saved legacy searches.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/searches",
    "method": "patchSearches2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch saved legacy searches by ids.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/searches",
    "method": "postSearches2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a new search and optionally save it.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/searches/{id}",
    "method": "deleteSearch2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a saved search.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/searches/{id}",
    "method": "getSearch2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a saved legacy search.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/searches/{id}",
    "method": "postSearchesById2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a previously saved legacy search.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID for saves search to be executed",
        "example": "ID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/stats/values",
    "method": "postStatValues2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostStatValues",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "statValues",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/stats/values/aggregate",
    "method": "postStatValuesAggregate2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostStatValuesAggregate",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "statValueAggregateQueries",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/status_codes",
    "method": "listStatusCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all status codes.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/status_codes/{statusCodeId}",
    "method": "getStatusCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get more details for a status code.",
    "parameters": [
      {
        "name": "statusCodeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUSCODEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks",
    "method": "deleteTasks2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple tasks in one request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks",
    "method": "listTasks2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List tasks from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "workerUserIds",
        "schema": "array",
        "required": false,
        "description": "Get tasks that have ANY user from this list assigned as worker."
      },
      {
        "name": "reviewUserIds",
        "schema": "array",
        "required": false,
        "description": "Get tasks that have ANY user from this list assigned as reviewer."
      },
      {
        "name": "labelOrderIds",
        "schema": "array",
        "required": false,
        "description": "Get tasks that are associated to ANY label order from this list."
      },
      {
        "name": "includingLabelOrderTasks",
        "schema": "boolean",
        "required": false,
        "description": "Get label order tasks as well\nIt is automatically set to true if label_order_ids is set."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response.\nCurrently supported additional fields:\n- all\n- worker.users\n- review.users\n- metrics.work.inputs_count_estimated\n- metrics.work.inputs_percent_estimated"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "(https://docs.clarifai.com/ task IDs to filter on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Tasks."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks",
    "method": "patchTasks2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more tasks.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tasks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Tasks."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks",
    "method": "postTasks2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add tasks to an app.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tasks",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Tasks."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{taskId}",
    "method": "getTask2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific task from an app.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response.\nCurrently supported additional fields:\n- all\n- worker.users\n- review.users\n- metrics.work.inputs_count_estimated\n- metrics.work.inputs_percent_estimated"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with a single Task."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{taskId}/annotations/count",
    "method": "getTaskAnnotationCount2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Task annotation count",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "task_id for which count per user per status is needed",
        "example": "TASKID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "for given task_id, user_ids to filter on (https://docs.clarifai.com/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{taskId}/assignments",
    "method": "listNextTaskAssignments2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List next non-labeled and unassigned inputs from task's dataset",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{taskId}/inputs/count",
    "method": "getTaskInputCount2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Task Input count",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "task_id for which count per user per status is needed",
        "example": "TASKID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "for given task_id, user_ids to filter on (https://docs.clarifai.com/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/tasks/{taskId}/inputs/samples",
    "method": "getInputSamples2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific input from an app.",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "URL param. If zero ids provided, returns for all task labelers"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/trending_metrics/views/{viewType}",
    "method": "listTrendingMetricsViews2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the view metrics for a detail view",
    "parameters": [
      {
        "name": "viewType",
        "schema": "string",
        "required": true,
        "description": "For now view types 'apps', 'workflows', and 'models' are supported.",
        "example": "VIEWTYPE"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uploads",
    "method": "deleteUploads2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uploads",
    "method": "listUploads2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uploads",
    "method": "postUploads2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "uploads",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uploads/{uploadId}",
    "method": "getUpload2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "uploadId",
        "schema": "string",
        "required": true,
        "description": "Upload ID",
        "example": "UPLOADID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/uploads/{uploadId}/content_parts",
    "method": "putUploadContentParts2",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Upload a part of a multipart upload.\nBehaviour on completion depends on the endpoint that was used to initiate the upload.",
    "parameters": [
      {
        "name": "uploadId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPLOADID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{runnerSelector.deployment.userId}/deployments/{runnerSelector.deployment.id}/outputs",
    "method": "postModelOutputs5",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get predicted outputs from the model.",
    "parameters": [
      {
        "name": "runnerSelectorDeploymentUserId",
        "schema": "string",
        "required": true,
        "description": "The user who owns the deployment. These live in the user/org account.",
        "example": "RUNNERSELECTOR.DEPLOYMENT.USERID"
      },
      {
        "name": "runnerSelectorDeploymentId",
        "schema": "string",
        "required": true,
        "description": "An id for this configured deployment.",
        "example": "RUNNERSELECTOR.DEPLOYMENT.ID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get user information",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps",
    "method": "listApps",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the apps.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByName",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:\nIf true, we only return apps that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return apps that are starred by the requesting user"
      },
      {
        "name": "templateOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return apps that are marked as a template by the app owner."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the application:\n  - id\n  - name\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query various text fields (id, name, description, and notes) that can contain the words in the query string\nDeprecated: use search instead."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the id, name and notes of the app. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter by the user-unique-id of the app. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps",
    "method": "patchApps",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more apps.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "apps",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataAction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reindex",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps",
    "method": "postApps",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a app to an app.\nThis needs to load the default workflow to make a copy, validating all the models in it, and\nthen writing the new workflow back to this new app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "apps",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/ids",
    "method": "patchAppsIds",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch apps ids.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/searches",
    "method": "postAppsSearches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the applications to find one or more you're looking for.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "appQuery",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}",
    "method": "deleteApp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the apps to find one or more you're looking for.\nThis leverage the \"body\" parameter because we also have page and\nper_page as url query param variables in this request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}",
    "method": "getApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific app from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}",
    "method": "patchApp",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "app",
        "schema": "object",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadataAction",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reindex",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotation_filters",
    "method": "deleteAnnotationFilters",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more annotation filters in a single request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotationFilterIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotation_filters",
    "method": "listAnnotationFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the annotation filters.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotation_filters",
    "method": "patchAnnotationFilters",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more annotation filters.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotationFilters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotation_filters",
    "method": "postAnnotationFilters",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add annotation filters.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotationFilters",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotation_filters/{annotationFilterId}",
    "method": "getAnnotationFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific annotation filter.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "annotationFilterId",
        "schema": "string",
        "required": true,
        "description": "Identify annotation filter by id.",
        "example": "ANNOTATIONFILTERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations",
    "method": "deleteAnnotations3",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple annotations in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inputIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations",
    "method": "listAnnotations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the annotation.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "List annotations for these IDs"
      },
      {
        "name": "inputIds",
        "schema": "array",
        "required": false,
        "description": "List annotations for these Input IDs\nNote that 'ids' are optional but if the are provided the number and order in\n'ids' and 'input_ids' should match\nIf you do not specify 'ids' all the annotations for 'input_ids' are returned\nIf a you do not specify both 'input_ids' and 'ids' all the annotations in the app are returned"
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "Only return the annotations that has one of these user IDs, effectively operating as an\nOR among them to filter down the results.\nIf model_version_ids are also provided these user_ids are OR'd with them as well since\nannotations are either provided by users or model versions and we want the union of any\nprovided user or model version annotations in the results of ListAnnotations request.\nIf no user_ids are provided then annotations from all users are returned."
      },
      {
        "name": "modelVersionIds",
        "schema": "array",
        "required": false,
        "description": "Only return the annotations that has one of these model version IDs, effectively operating as an\nOR among them to filter down the results.\nIf user_ids are also provided these model_versions_ids are OR'd with them as well since\nannotations are either provided by users or model versions and we want the union of any\nprovided user or model version annotations in the results of ListAnnotations request.\nIf no model_version_ids are provided then annotations from all model versions are returned."
      },
      {
        "name": "listAllAnnotations",
        "schema": "boolean",
        "required": false,
        "description": "Set this flag to list both trusted and not trusted annotations\nby default it's listing only trusted annotations"
      },
      {
        "name": "returnModelOutput",
        "schema": "boolean",
        "required": false,
        "description": "Set this flag to return the model output for model annotations in the response."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": false,
        "description": "Flag to filter annotations by task_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations",
    "method": "patchAnnotations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more annotations.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deleteIfEmptyData",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations",
    "method": "postAnnotations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post annotations.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "annotations",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/searches",
    "method": "patchAnnotationsSearches",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch saved annotations searches by ids.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/searches",
    "method": "postAnnotationsSearches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a search over annotations",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/searches/metrics",
    "method": "listAnnotationSearchMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the evaluation results between two search requests",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/searches/metrics",
    "method": "postAnnotationSearchMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Evaluate the results of two search requests",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groundTruth",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searchToEval",
        "schema": "object",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evaluationType",
        "schema": "string",
        "description": "",
        "default": "Undefined"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/searches/metrics/{id}",
    "method": "deleteAnnotationSearchMetrics",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "DeleteAnnotationSearchMetrics",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
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
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/searches/metrics/{id}",
    "method": "getAnnotationSearchMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the evaluation results between two search requests",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique custom facing id that identifies the eval to get",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/annotations/workers",
    "method": "listAnnotationWorkers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "ListAnnotationWorkers lists users, models, and workflows (collectively\nknown as \"workers\") that have added annotations to the application.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response.\nCurrently supported: all, names"
      },
      {
        "name": "trustedOnly",
        "schema": "boolean",
        "required": false,
        "description": "(optional URL parameter) Only list workers that have created trusted annotations."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/bulk_operations",
    "method": "deleteBulkOperations",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "delete one or more terminated bulk operations",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/bulk_operations",
    "method": "listBulkOperations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the bulk operations",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/bulk_operations",
    "method": "cancelBulkOperations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Cancel one or more bulk operations",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/bulk_operations",
    "method": "postBulkOperations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Perform bulk operations on a list of inputs based on input source.\nOperation include add, update, delete of concepts, metadata and geo data.\nThis is an Asynchronous process. Use ListBulkOperations or GetBulkOperation to check the status.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "bulkOperations",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/bulk_operations/{id}",
    "method": "getBulkOperation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the bulk operation details by ID",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The bulk operation id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collaborators",
    "method": "deleteCollaborators",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete existing collaborators.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collaboratorIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "userEmails",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collaborators",
    "method": "listCollaborators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "owner list users who the app is shared with",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "listAllCollaborators",
        "schema": "boolean",
        "required": false,
        "description": "Set this flag to list both deleted and not deleted collaborators\nby default it's listing only not deleted collaborators"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collaborators",
    "method": "patchCollaborators",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch existing collaborators.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collaborators",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collaborators",
    "method": "postCollaborators",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "add collaborators to an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collaborators",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collectors",
    "method": "deleteCollectors",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple collectors in one request.\nThis call is asynchronous. Use DeleteCollector if you want a synchronous version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleteAll",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collectors",
    "method": "listCollectors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the collectors.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Collectors."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collectors",
    "method": "patchCollectors",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more collectors.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collectors",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Collectors."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collectors",
    "method": "postCollectors",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a list of Collectors to an app.\nIn the handler of this endpoint we also check for all the scopes of the  POST /inputs\nendpoint.\nThose current scopes are listed here as a hard requirement.\nThey are needed when adding the collectors just so we now that you have permission with\nthat key at least to do the writing to this app with POST /inputs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "collectors",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Collectors."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/collectors/{collectorId}",
    "method": "getCollector",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific collector from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "collectorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLLECTORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with a single Collector."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts",
    "method": "listConcepts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the concepts.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Fuzzy match on concept ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts",
    "method": "patchConcepts",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more concepts.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "concepts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts",
    "method": "postConcepts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a concept to an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "concepts",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/knowledge_graphs",
    "method": "listKnowledgeGraphs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all domain graphs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/knowledge_graphs",
    "method": "postKnowledgeGraphs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post domain graphs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "knowledgeGraphs",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/mappings/jobs",
    "method": "postConceptMappingJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Start concept mapping jobs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptMappingJobs",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/relations",
    "method": "listConceptRelations2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List concept relations between concepts in the platform.\nMUST be above ListConcepts so that if concept_id is empty this will still match\n/concepts/relations to list all the concept relations in the app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": false,
        "description": "The subject concept id in your app to get all the relationships for.\nLeave as an empty string (GET /concepts/relations) to list ALL the relations in the app.\n\nWhen listing all the relations it will only return one direction of the relationship\nwith the predicate acting on the subject and not the inverse like is done when providing a\nconcept_id so that we can return a reliable page size always.\n\nWhen providing a concept_id, if a hyponym is present in the DB such as:\n'honey' (https://docs.clarifai.com/, 'hyponym' (predicate for \"is a kind of\"), 'food' (https://docs.clarifai.com/\nthen you can list the concept relations for 'honey' and get hyponym predicate with 'food'\nobject.\nBut you can also list the concept relations for 'food' and it will return the same hyponym\nrelationship with 'honey' as object and 'hypernym' as predicate.\nSynonyms by nature are symmetrical relationships so either side can be the concept_id (https://docs.clarifai.com/\nwhen listing the relations."
      },
      {
        "name": "predicate",
        "schema": "string",
        "required": false,
        "description": "If predicate is provided then only list relations with that predicate.\n\nNote that if no subject is set in concept_id and predicate is set to\n'hypernym', then it will return any stored hyponyms as hypernyms with\njust the subject and object swapped since they are reversed relations.\n\nValid predicates are:\n- 'hypernym'\n- 'hyponym'\n- 'synonym'"
      },
      {
        "name": "knowledgeGraphId",
        "schema": "string",
        "required": false,
        "description": "If knowledge_graph_id is provided then just list relations from that knowledge graph.\nIf not provided then list relations from all knowledge graphs including the global one for this\napp one (ie. knowledge_graph \"\") and any specific ones in the app."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/searches",
    "method": "postConceptsSearches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the concepts to find one or more you're looking for.\nThis leverage the \"body\" parameter because we also have page and\nper_page as url query param variables in this request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptQuery",
        "schema": "object",
        "description": ""
      },
      {
        "name": "extraInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/status",
    "method": "getConceptCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the concepts with their positive and negative counts",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}",
    "method": "getConcept",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific concept from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The concept's id.",
        "example": "CONCEPTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/languages",
    "method": "listConceptLanguages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the concept in all the translated languages.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/languages",
    "method": "patchConceptLanguages",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch the name for a given language names by passing in a list of concepts with the new names\nfor the languages.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptLanguages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/languages",
    "method": "postConceptLanguages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a new translation for this concept.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptLanguages",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/languages/{language}",
    "method": "getConceptLanguage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific concept from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONCEPTID"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "This is the language identifier.",
        "example": "LANGUAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/relations",
    "method": "deleteConceptRelations",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post concept relations to create relations between concepts in the platform.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The concept to delete relationship for.",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/relations",
    "method": "listConceptRelations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List concept relations between concepts in the platform.\nMUST be above ListConcepts so that if concept_id is empty this will still match\n/concepts/relations to list all the concept relations in the app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The subject concept id in your app to get all the relationships for.\nLeave as an empty string (GET /concepts/relations) to list ALL the relations in the app.\n\nWhen listing all the relations it will only return one direction of the relationship\nwith the predicate acting on the subject and not the inverse like is done when providing a\nconcept_id so that we can return a reliable page size always.\n\nWhen providing a concept_id, if a hyponym is present in the DB such as:\n'honey' (https://docs.clarifai.com/, 'hyponym' (predicate for \"is a kind of\"), 'food' (https://docs.clarifai.com/\nthen you can list the concept relations for 'honey' and get hyponym predicate with 'food'\nobject.\nBut you can also list the concept relations for 'food' and it will return the same hyponym\nrelationship with 'honey' as object and 'hypernym' as predicate.\nSynonyms by nature are symmetrical relationships so either side can be the concept_id (https://docs.clarifai.com/\nwhen listing the relations.",
        "example": "CONCEPTID"
      },
      {
        "name": "predicate",
        "schema": "string",
        "required": false,
        "description": "If predicate is provided then only list relations with that predicate.\n\nNote that if no subject is set in concept_id and predicate is set to\n'hypernym', then it will return any stored hyponyms as hypernyms with\njust the subject and object swapped since they are reversed relations.\n\nValid predicates are:\n- 'hypernym'\n- 'hyponym'\n- 'synonym'"
      },
      {
        "name": "knowledgeGraphId",
        "schema": "string",
        "required": false,
        "description": "If knowledge_graph_id is provided then just list relations from that knowledge graph.\nIf not provided then list relations from all knowledge graphs including the global one for this\napp one (ie. knowledge_graph \"\") and any specific ones in the app."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/concepts/{conceptId}/relations",
    "method": "postConceptRelations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post concept relations to create relations between concepts in the platform.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The subject concept id you're going to add relations for.",
        "example": "CONCEPTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "conceptRelations",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets",
    "method": "deleteDatasets",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more datasets in a single request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets",
    "method": "listDatasets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the datasets.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "If neither sort option is set to true, will sort by modified_at."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the external id"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter datasets by bookmark. If set, only return bookmarked datasets. Otherwise none bookmarked datasets only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the dataset:\n  - id\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Fuzzy filter on dataset ID\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets",
    "method": "patchDatasets",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more datasets.\nThe process is atomic, i.e. either all or no datasets are patched.\nIf there is an error for one dataset,\nthe process will stop, revert the transaction and return the error.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets",
    "method": "postDatasets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add datasets to an app.\nThe process is atomic, i.e. either all or no datasets are added.\nIf there is an error for one dataset,\nthe process will stop, revert the transaction and return the error.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasets",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}",
    "method": "getDataset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific dataset.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "additionalFields",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/inputs",
    "method": "deleteDatasetInputs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more dataset inputs in a single request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/inputs",
    "method": "listDatasetInputs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the dataset inputs in a dataset.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/inputs",
    "method": "postDatasetInputs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add dataset inputs to a dataset.\nThe process is not atomic, i.e. if there are errors with some dataset\ninputs, others might still be added. The response reports\n  - SUCCESS if all dataset inputs were added,\n  - MIXED_STATUS if only some dataset inputs were added, and\n  - FAILURE if no dataset inputs were added.\nEach individual dataset input in the response has the status set to\nindicate if it was successful or if there was an error.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "search",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/inputs/{inputId}",
    "method": "getDatasetInput",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific dataset input.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset input by id.",
        "example": "INPUTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions",
    "method": "deleteDatasetVersions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete one or more dataset versions in a single request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetVersionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions",
    "method": "listDatasetVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the dataset versions.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions",
    "method": "patchDatasetVersions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more dataset versions.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions",
    "method": "postDatasetVersions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add dataset versions to a dataset.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "datasetVersions",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions/{datasetVersionId}",
    "method": "getDatasetVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific dataset version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "datasetVersionId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset version by id.",
        "example": "DATASETVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions/{datasetVersionId}/exports",
    "method": "putDatasetVersionExports",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Create export of a dataset version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "datasetVersionId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset version by id.",
        "example": "DATASETVERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exports",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/datasets/{datasetId}/versions/{datasetVersionId}/metrics",
    "method": "listDatasetVersionMetricsGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "datasetId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset by id.",
        "example": "DATASETID"
      },
      {
        "name": "datasetVersionId",
        "schema": "string",
        "required": true,
        "description": "Identify dataset version by id.",
        "example": "DATASETVERSIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "parentPaths",
        "schema": "array",
        "required": false,
        "description": "Filter by parent path. Multiple parent paths are OR-ed. Empty list results in no filter."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter by parent type. Multiple types are OR-ed. Empty list results in no filter.\n\n - INPUT_TYPE: Group data examples by input type.\nExamples: images, videos, text, audio.\n - CONCEPT_ID: Group data examples by concept ID.\nExamples: inputs with cat concept, inputs with dog concept.\n - CONCEPTS_COUNT: Group data examples by concepts count.\nExamples: inputs with 20 concepts, inputs with 21 concepts.\n - BOUNDING_BOXES_COUNT: Group data examples by bounding boxes count.\nExamples: inputs with 20 bounding boxes, inputs with 21 bounding boxes.\n - POLYGONS_COUNT: Group data examples by polygons count.\nExamples: inputs with 20 polygons, inputs with 21 polygons.\n - POINTS_COUNT: Group data examples by points count.\nExamples: inputs with 20 points, inputs with 21 points.\n - MASKS_COUNT: Group data examples by masks count.\nExamples: inputs with 20 masks, inputs with 21 masks.\n - PIXELS_COUNT: Group data examples by pixels count.\nIn order to reduce the number of groups, we use bins.\nExamples for bin size = 400: inputs with [200000, 200400) pixels, inputs with [200400, 200800) pixels.\n - ASPECT_RATIO: Group data examples by aspect ratio.\nIn order to reduce the number of groups, we use bins.\nExamples for bin size = 0.1: inputs with [0.5, 0.6) aspect ratio, inputs with [0.6, 0.7) aspect ratio."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/duplications",
    "method": "postAppDuplications",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostAppDuplications starts async app duplication jobs which copy resources\n(inputs, annotations, models etc) from one application to another. It can\nalso create the destination application if it does not exist, with fields\n(description, metadata etc) copied from the source application.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "appDuplications",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/evaluations",
    "method": "listEvaluations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "If true, sort in ascending order, otherwise sort in descending order."
      },
      {
        "name": "sortByAppId",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by application id"
      },
      {
        "name": "sortByRocAuc",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_roc_auc"
      },
      {
        "name": "sortByF1",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.f1"
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by when the metric was created"
      },
      {
        "name": "sortByMeanAvgPrecision",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.mean_avg_precision_iou_50"
      },
      {
        "name": "sortByPrecision",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_precision"
      },
      {
        "name": "sortByRecall",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_recall"
      },
      {
        "name": "sortByModelId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortByEvalDatasetId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortByTrainDatasetId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": false,
        "description": "Filter on model type id"
      },
      {
        "name": "evalDatasetIds",
        "schema": "array",
        "required": false,
        "description": "Filter on dataset ID of the dataset version specified in the metric version"
      },
      {
        "name": "trainDatasetIds",
        "schema": "array",
        "required": false,
        "description": "Filter on dataset ID of the dataset version specified by the model version"
      },
      {
        "name": "conceptIds",
        "schema": "array",
        "required": false,
        "description": "Filter on concept IDs specified in the modele version's output_info"
      },
      {
        "name": "showFailedMetrics",
        "schema": "boolean",
        "required": false,
        "description": "Whether to show failed metrics, defaults to false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/evaluations",
    "method": "postEvaluations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evalMetrics",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/evaluations/{evaluationId}",
    "method": "getEvaluation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "evaluationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVALUATIONID"
      },
      {
        "name": "fieldsConfusionMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsCooccurrenceMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsLabelCounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsBinaryMetrics",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsTestSet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByArea",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByClass",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs",
    "method": "deleteInputs",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple inputs in one request.\nThis call is asynchronous.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs",
    "method": "listInputs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the inputs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": "Status code from internal codes.\n\n - ZERO: to be revised and greatly expanded\n - SUCCESS: Generic\n - MOVED: Resource moved. Respond with Http status 307 and add new Location header to response\n - TEAPOT: SUCCESS_WARNING_API_DEPRECATED = 10001;\nSUCCESS_WARNING_CLIENT_DEPRECATED = 10002;\n - CONN_ACCOUNT_ISSUES: Clarifai Connection Codes: 11xxx\n\nexpired cc, still in trial, feature not supported in your tier\n - CONN_TOKEN_INVALID: invalid auth token used. Deprecated: we should return CONN_KEY_INVALID instead now in all cases.\n - CONN_CREDENTIALS_INVALID: invalid auth credentials\n - CONN_EXCEED_HOURLY_LIMIT: throttle hourly limit exceeded\n - CONN_EXCEED_MONTHLY_LIMIT: throttle monthly limit exceeded\n - CONN_THROTTLED: throttler and billing stuff\n - CONN_EXCEEDS_LIMITS: throttler and billing stuff\n - CONN_INSUFFICIENT_SCOPES: api key has insufficient permissions\n - CONN_KEY_INVALID: api key is invalid\n - CONN_KEY_NOT_FOUND: api key not found\n - CONN_BAD_REQUEST_FORMAT: multipart form parsing, broken json, etc\n - CONN_DOES_NOT_EXIST: when path is bad\n - CONN_INVALID_REQUEST: something wrong with a header\n - CONN_METHOD_NOT_ALLOWED: when a request method is not allowed\n - CONN_NO_GDPR_CONSENT: lack GDPR consent\n - CONN_AUTH_METHOD_DISABLED: authentication method is disabled\n - MODEL_TRAINED: Model/Custom Training related 20xxx\n\nCustom model has been already trained.\n - MODEL_TRAINING: Custom model is currently training.\n - MODEL_UNTRAINED: Custom model has not yet been trained.\n - MODEL_QUEUED_FOR_TRAINING: Custom model is currently in queue for training, waiting on assets to process first.\n - MODEL_TRAINING_FAILED: generic err msg for any type of model training err.\n - MODEL_TRAINING_NO_DATA: Custom model training had no data.  FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_NO_POSITIVES: Custom model training had no positive examples. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_ONE_VS_N_SINGLE_CLASS: Custom model training was ONE_VS_N but with a single class. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_TIMED_OUT: Training took longer than hard coded timeouts. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_WAITING_ERROR: Training got error waiting on asset pipeline to finish. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_UNKNOWN_ERROR: Training threw an unknown exception.\n - MODEL_TRAINING_MSG_REDELIVER: Training message was redelivered. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_INSUFFICIENT_DATA: Training got error due to insufficient labelled data. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_INVALID_PARAMS: FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_TRAINING_INVALID_DATA_TOLERANCE_EXCEEDED: Training is stopped because too much data was dropped. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21106 + errStatusMsg\n - MODEL_EVALUATION_TIMED_OUT: Evaluation took longer than hard coded timeouts. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_WAITING_ERROR: Evaluation got error waiting on asset pipeline to finish.FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_UNKNOWN_ERROR: EVALUATION THREW AN UNKNOWN EXCEPTION.\n - MODEL_EVALUATION_MSG_REDELIVER: Eval message was redelivered. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_NEED_LABELS: Don't have enough concepts labelled to perform evaluation. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_NEED_INPUTS: Don't have enough inputs per concept to perform evaluation. FIXME(https://docs.clarifai.com/: deprecate this. Use the 21317 + errStatusMsg\n - MODEL_EVALUATION_FAILED: Generic err code for eval failure.\n - MODEL_DEPLOYMENT_FAILED: Used when inference coordinator failed to deploy spire and throws an error\n - MODEL_DEPLOYING: Used when calling the inference coordinator to deploy a spire\n - MODEL_QUEUED_FOR_DEPLOYMENT: Used when training is completed\n - MODEL_NOT_DEPLOYED: Used when model spire deployment is manually taken down or due to inactivity\n - MODEL_REFERENCE_INVALID_ARGUMENT: Used when a model reference field is not set properly\n - MODEL_EXAMPLE_INPUT_INVALID_ARGUMENT: Used when a model example input field is not set properly\n - MODEL_EXPORTED: Model Export status codes\n - WORKFLOW_NO_MATCHING_INPUT: specified model input not in workflow\n - WORKFLOW_REQUIRE_TRAINED_MODEL: specified model must be trained\n - WORKFLOW_INVALID_ARGUMENT: error in the request somewhere\n - WORKFLOW_INVALID_REQUEST: error in the request somewhere\n - CONCEPT_MODIFY_SUCCESS: Concept related 23xxx\n - ANNOTATION_SUCCESS: Annotation related 24xxx\n - METADATA_INVALID_PATCH_ARGUMENTS: Metadata related 249xx\n - TRAINER_JOB_STATE_NONE: Training service related 25xxx\n - DATA_DUMP_SUCCESS: Data Dump related 251xx\n - DATA_DUMP_NO_DATA: DEPRECATED: Not used anymore. Now for an empty data dump, DATA_DUMP_SUCCESS is returned. To detect an empty data dump, check if the inptus count is 0.\n - APP_DUPLICATION_SUCCESS: Duplicate related 252xx\n - MODULE_DOES_NOT_EXIST: Module related codes 253xx\n - BULK_OPERATION_SUCCESS: Bulk Operation related codes 254xx\n - RUNNER_DOES_NOT_EXIST: Runner related codes 256xx\n - INPUT_DOWNLOAD_SUCCESS: Input:Image related 30xxx\n - INPUT_DOWNLOAD_PENDING: when things are async, this is the default status.\n - INPUT_DOWNLOAD_FAILED: any type of error downloading and processing\n - INPUT_VIDEO_DOWNLOAD_SUCCESS: Input:Video related 31xxx -- Deprecated\n - INPUT_WRITES_DISABLED_FOR_MAINTENANCE: deprecate this one. Use REQUEST_DISABLED_FOR_MAINTENANCE\n - PREDICT_INVALID_REQUEST: API formatting issues 4000x\n - DATABASE_DUPLICATE_KEY: Other related 400xx\n - EXTERNAL_CONNECTION_ERROR: could not connect to external services\n - QUEUE_CONN_ERROR: Queue related errors 41xxx\n - SQS_OVERLIMIT: SQS related errors 411xx\n - SEARCH_INTERNAL_FAILURE: Search related errors 43xxxx\n - EVALUATION_QUEUED: Workflow evaluation err code\n - STRIPE_EVENT_ERROR: Stripe 44xxx\n - CACHE_MISS: Redis/Cache 45xxx\n - SIGNUP_EVENT_ERROR: Sift Science 46xxx\n - APP_COUNT_INVALID_MESSAGE: Application counts related errors 470xx\n - MP_DOWNLOAD_ERROR: Media processor related errors 471xx -- DEPRECATED\n - DATATIER_CONN_ERROR: DataTier related error 472xx\n - USER_CONSENT_FACE: User legal consent stauts related 50xxx\n - WORKER_MISSING: Workers 51xxx\n - COLLECTOR_MISSING: Collectors 52xxx\n - SSO_IDENTITY_PROVIDER_DOES_NOT_EXIST: SSO 53xxx\n - TASK_IN_PROGRESS: Tasks 54xxx\nThe task was created.\n - TASK_DONE: The task is completed.\n - TASK_WONT_DO: The task is marked as abandoned.\n - TASK_FAILED: An error occurred during add-task-annotations or add-auto-annotations pipeline.\n - TASK_IDLE: When an Auto Annotation task job has finished processing its last batch and is waiting for more dataset assets.\n - TASK_CONFLICT: The task operation is in conflict with the current state of the server.\n - TASK_NOT_IMPLEMENTED: Certain task-related scenarios are not implemented.\n - TASK_MISSING: Task was not found.\n - TASK_PERMISSION_DENIED: Not allowed to perform a task-related action.\n - LABEL_ORDER_PENDING: Label Order Related Status Code 55xxx\n - LICENSE_ACTIVE: License Related Status Code 600xx\n - LICENSE_DELETED: hidden state not reflected to users\n - PASSWORD_VALIDATION_SUCCESS: Password Related Status Code\n - FEATUREFLAG_CONFIG_NOT_FOUND: Feature flags status code\n - MAINTENANCE_SUCCESS: Maintenance status code\n - DATASET_VERSION_PENDING: Datasets 64xxx\nThe dataset version is pending to be processed.\n - DATASET_VERSION_IN_PROGRESS: The dataset version is currently being processed.\n - DATASET_VERSION_READY: The dataset version is ready to be used.\n - DATASET_VERSION_FAILURE: An error occurred during the dataset version processing.\n - DATASET_VERSION_UNEXPECTED_ERROR: An unexpected error occurred during the dataset version processing.\n - DATASET_VERSION_CONFLICT: An alteration to dataset version would create a conflict\n - DATASET_INPUT_SUCCESS: The dataset input was successfully added.\n - DATASET_INPUT_DUPLICATE: The dataset input is a duplicate.\nDeprecated: Unused.\n - DATASET_VERSION_EXPORT_SUCCESS: The dataset version export is completed.\n - DATASET_VERSION_EXPORT_PENDING: The dataset version is pending to be exported.\n - DATASET_VERSION_EXPORT_FAILED: An error occurred during the dataset version export.\n - DATASET_VERSION_EXPORT_IN_PROGRESS: The dataset version is currently being exported.\n - DATASET_VERSION_EXPORT_UNEXPECTED_ERROR: An unexpected error occurred during the dataset version export.\n - JOB_QUEUED: Generic Job status codes\n - AUTH_MISSING_IDP_ASSOC: auth issues\n\nTODO: Knowledge graph related 80xxx\n - UPLOAD_IN_PROGRESS: Multipart uploading status codes\n - BILLING_INVALID_INFO: Billing related issues: 69xxx\n - INTERNAL_SERVER_ISSUE: Internal issues: 98xxx\n - CONN_UNCATEGORIZED: Uncategorized: 99xxx: move off as soon as known\n - BAD_REQUEST: Deprecated: migrate off to one of the internal issues\n - SERVER_ERROR: Deprecated: migrate off to one of the internal issues",
        "default": "ZERO"
      },
      {
        "name": "statusDescription",
        "schema": "string",
        "required": false,
        "description": "A short description of the error."
      },
      {
        "name": "statusDetails",
        "schema": "string",
        "required": false,
        "description": "More details of the given error.\nThese details may be exposed to non-technical users.\nFor technical details, try to use developer_notes field."
      },
      {
        "name": "statusStackTrace",
        "schema": "array",
        "required": false,
        "description": "For some environment we may return a stack trace to help debug\nany issues."
      },
      {
        "name": "statusPercentCompleted",
        "schema": "integer",
        "required": false,
        "description": "specifically for long running jobs"
      },
      {
        "name": "statusTimeRemaining",
        "schema": "integer",
        "required": false,
        "description": "if status is pending, how much time is remaining (in seconds)"
      },
      {
        "name": "statusReqId",
        "schema": "string",
        "required": false,
        "description": "A request ID may be present, to help monitoring and tracking requests"
      },
      {
        "name": "statusInternalDetails",
        "schema": "string",
        "required": false,
        "description": "Internal Annotation (do not set in production, for internal Clarifai use only)."
      },
      {
        "name": "statusRedirectInfoUrl",
        "schema": "string",
        "required": false,
        "description": "New location for the resource. Used to set response Location header."
      },
      {
        "name": "statusRedirectInfoResourceType",
        "schema": "string",
        "required": false,
        "description": "Resource type"
      },
      {
        "name": "statusRedirectInfoOldResourceId",
        "schema": "string",
        "required": false,
        "description": "Old resource id"
      },
      {
        "name": "statusRedirectInfoNewResourceId",
        "schema": "string",
        "required": false,
        "description": "New resource id"
      },
      {
        "name": "statusDeveloperNotes",
        "schema": "string",
        "required": false,
        "description": "Notes for developer.\nThese notes are rather technical details for developers how to interpret the status,\ne.g. why an error occurred and how to avoid getting the error."
      },
      {
        "name": "ids",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs",
    "method": "patchInputs",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more inputs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs",
    "method": "postInputs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add 1 or more input to an app.\nThe actual inputs processing is asynchronous.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inputsAddJobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputIdConflictResolution",
        "schema": "string",
        "description": "",
        "default": "INPUT_ID_CONFLICT_RESOLUTION_NOT_SET"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/annotations",
    "method": "deleteAnnotations",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple annotations in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "inputIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/data_sources",
    "method": "postInputsDataSources",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Initiates retrieval of inputs from cloud storage from a user provided data source.\nWill create and return an inputs-add-job for tracking progress.\nArchives will be extracted and their contents will be processed as inputs.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "dataSources",
        "schema": "array",
        "description": ""
      },
      {
        "name": "callBackUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appPat",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/jobs/add",
    "method": "listInputsAddJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the inputs add jobs",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/jobs/add/{id}",
    "method": "getInputsAddJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the input add job details by ID",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id of add inputs job",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/jobs/add/{id}",
    "method": "cancelInputsAddJob",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "cancel the input add job by ID",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id of add inputs job to be cancelled",
        "example": "ID"
      },
      {
        "name": "userAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/jobs/extraction",
    "method": "listInputsExtractionJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the input extraction jobs",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/jobs/extraction",
    "method": "cancelInputsExtractionJobs",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/jobs/extraction/{inputsExtractionJobId}",
    "method": "getInputsExtractionJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the input extraction job details by ID",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "inputsExtractionJobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTSEXTRACTIONJOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/searches",
    "method": "patchInputsSearches",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch saved inputs searches by ids.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/searches",
    "method": "postInputsSearches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a search over inputs",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
        "description": ""
      },
      {
        "name": "onlyCount",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/status",
    "method": "getInputCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get input count per status.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/stream",
    "method": "streamInputs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Streams all the inputs starting from oldest assets.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 20."
      },
      {
        "name": "lastId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "orderById",
        "schema": "boolean",
        "required": false,
        "description": "By default, the endpoint return inputs by the time when it is added.\nIf this is set to true, we will return inputs by id."
      },
      {
        "name": "descending",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/uploads",
    "method": "postInputsUploads",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Start uploading a file archive containing inputs.\nWill create and return an inputs-add-job for tracking progress.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputsUploads",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/{inputId}",
    "method": "deleteInput",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single input asynchronously.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/{inputId}",
    "method": "getInput",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific input from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/{inputId}/annotations/{annotationId}",
    "method": "deleteAnnotation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single annotation.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANNOTATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/{inputId}/annotations/{annotationId}",
    "method": "getAnnotation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific annotation from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      },
      {
        "name": "annotationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANNOTATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/inputs/{inputId}/video_manifest",
    "method": "getInputVideoManifest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a video input manifest.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "inputId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INPUTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/installed_module_versions",
    "method": "deleteInstalledModuleVersions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Uninstall an installed module version which will deploy the specific ModuleVersion to the app\nin the url.\nThis cleaned up any associated caller keys so needs the Keys_Delete scope.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/installed_module_versions",
    "method": "listInstalledModuleVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List installed modules vesrions for an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/installed_module_versions",
    "method": "postInstalledModuleVersions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Install a new module version which will deploy the specific ModuleVersion to the app in the url.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "installedModuleVersions",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/installed_module_versions/{installedModuleVersionId}",
    "method": "getInstalledModuleVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get installed modules vesrions for an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "installedModuleVersionId",
        "schema": "string",
        "required": true,
        "description": "the ID to get of the install module version.",
        "example": "INSTALLEDMODULEVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/installed_module_versions/{installedModuleVersionId}/key",
    "method": "postInstalledModuleVersionsKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Assign a key that the caller owns to be used when accessing this installed module version\nIf this endpoint is called with a different key then it overwrites what is there.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "installedModuleVersionId",
        "schema": "string",
        "required": true,
        "description": "the ID to get of the install module version.\n\nNote(https://docs.clarifai.com/: we don't provide a key to create since it's always deterministic.\n we'll create a PAT, owned by the caller with the scopes that the module requests.\n in the future if we want we can pass in a Key key = 3; field so that the caller\n can adjust the scopes, but for now that doesn't seem necessary.",
        "example": "INSTALLEDMODULEVERSIONID"
      },
      {
        "name": "userAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/keys",
    "method": "listAppKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List keys by app_id",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/label_orders",
    "method": "deleteLabelOrders",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple label orders in one request.\nthis do not change task status",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/label_orders",
    "method": "listLabelOrders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List label orders.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/label_orders",
    "method": "patchLabelOrders",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more label orders.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "labelOrders",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/label_orders",
    "method": "postLabelOrders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add Label orders.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "labelOrders",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/label_orders/{labelOrderId}",
    "method": "getLabelOrder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a label order.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "labelOrderId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABELORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with a label order."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models",
    "method": "deleteModels",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple models in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleteAll",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models",
    "method": "listModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the models.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByName",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByNumInputs",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of training inputs"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time of the latest model version.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at"
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by count of stars"
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": false,
        "description": "Filtering options:\nFilter models by the specific model_type_id. See ListModelTypes for the list of ModelType.Id's\nsupported."
      },
      {
        "name": "trainedOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that have the status MODEL_TRAINED, which includes non-trainable model types."
      },
      {
        "name": "inputFields",
        "schema": "array",
        "required": false,
        "description": "The list of input fields to the model.\nFor example, you can specify 'image', which will return models that make inferences on images like visual-classifier models."
      },
      {
        "name": "outputFields",
        "schema": "array",
        "required": false,
        "description": "The list of output fields to the model.\nFor example, you can specify 'regions[...].data.concepts', which will return visual-detector models."
      },
      {
        "name": "license",
        "schema": "string",
        "required": false,
        "description": "Filter by the license of the model version"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that are starred by the requesting user"
      },
      {
        "name": "toolkits",
        "schema": "array",
        "required": false,
        "description": "List of toolkit tags to filter by"
      },
      {
        "name": "useCases",
        "schema": "array",
        "required": false,
        "description": "List of use_case tags to filter by"
      },
      {
        "name": "languages",
        "schema": "array",
        "required": false,
        "description": "List of language tags to filter by"
      },
      {
        "name": "dontFetchFromMain",
        "schema": "boolean",
        "required": false,
        "description": "Old API behavior resulted in returning clarifai main models when calling ListModels while scoped to an app. While we transition\naway from that, we can use this flag to not always fetch clarifai main models, unless that is the app we are explicitly listing for."
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter models by bookmark. If set, only return bookmarked models. Otherwise none bookmarked models only.\nNote: you can not filter `trained_only` and bookmark at the same time.\nWhen filter by bookmark, we will return trained and untrained models."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the model:\n  - id\n  - name\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query name, description and id fields, that can contain the words in the query string. Does NOT support wildcards - full words only. Supports operators \"OR\" and \"-\" as NOT.\nDeprecated: use search instead."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the description and id of the model. This supports wildcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "filterByUserId",
        "schema": "boolean",
        "required": false,
        "description": "Extends the name filter to include the user_id of the application owner that the model belongs to.\nDeprecated: use search instead of name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models",
    "method": "patchModels",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more models.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "models",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models",
    "method": "postModels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a models to an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "models",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/ids",
    "method": "patchModelIds",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more models ids.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/searches",
    "method": "postModelsSearches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the models to find one or more you're looking for.\nThis leverage the \"body\" parameter because we also have page and\nper_page as url query param variables in this request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelQuery",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/types",
    "method": "listModelTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the model types available in the platform.\nThis MUST be above ListModels so that the /models/types endpoint takes precedence.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/types/{modelTypeId}",
    "method": "getModelType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific model type.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": true,
        "description": "The specific ModelType.Id you want to retrieve.",
        "example": "MODELTYPEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}",
    "method": "deleteModel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single model.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}",
    "method": "getModel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific model from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": "This is included so that we can re-use this request for multiple\nrpcs with and without the version_id."
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trainedBefore",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/check_consents",
    "method": "patchModelCheckConsents",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model check consents",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "the model id",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "checkConsents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/concepts",
    "method": "listModelConcepts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List models concepts.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": "Model version Id. Optional, if not provided latest model version is used."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the concept:\n  - id\n  - name\n\nKeywords are used for partial prefix-matching (so searching for \"larif\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/inputs",
    "method": "listModelInputs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated: Unmaintained and ideally replaced with usage of datasets",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/languages",
    "method": "patchModelLanguages",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model languages tags",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/output_info",
    "method": "getModelOutputInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a the output info for a given model_id or model_id/version_id\ncombo.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": false,
        "description": "This is included so that we can re-use this request for multiple\nrpcs with and without the version_id."
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trainedBefore",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/outputs",
    "method": "postModelOutputs3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get predicted outputs from the model.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/outputs/generate",
    "method": "generateModelOutputs2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "TODO(https://docs.clarifai.com/: will need to\nSingle request but streaming resopnses.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/publish",
    "method": "postModelVersionsPublish",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostModelVersionsPublish",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/references",
    "method": "listModelReferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Lists model references tied to a particular model id.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 128 references per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/toolkits",
    "method": "patchModelToolkits",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model toolkits tags",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "toolkits",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/unpublish",
    "method": "postModelVersionsUnPublish",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostModelVersionsUnPublish",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/usecases",
    "method": "patchModelUseCases",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Update model use_cases tags",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "usecases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions",
    "method": "listModelVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the models.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "conceptIds",
        "schema": "array",
        "required": false,
        "description": "Filtering options:\nTo list only the model versions that have these concept ids present in them."
      },
      {
        "name": "trainedOnly",
        "schema": "boolean",
        "required": false,
        "description": "To list only the model versions that have been trained."
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByStatusCode",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the status code"
      },
      {
        "name": "sortByNumInputs",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of training inputs"
      },
      {
        "name": "sortByDescription",
        "schema": "boolean",
        "required": false,
        "description": "Whether to sort by the description"
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time\nIf neither sort option is set to true, will sort by created_at."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions",
    "method": "patchModelVersions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PatchModelVersions",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions",
    "method": "postModelVersions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Create a new model version to trigger training of the model.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "evalInfo",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/time_estimate",
    "method": "postModelVersionsTrainingTimeEstimate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get the training time estimate based off train request and estimated input count.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "estimatedInputCount",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{modelVersionId}/evaluations",
    "method": "listModelVersionEvaluations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use GetEvaluation instead\nList the evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELVERSIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{modelVersionId}/evaluations",
    "method": "postModelVersionEvaluations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use PostEvaluations instead",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELVERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evalMetrics",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{modelVersionId}/evaluations/{evaluationId}",
    "method": "getModelVersionEvaluation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use GetEvaluation instead\nGet an evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELVERSIONID"
      },
      {
        "name": "evaluationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVALUATIONID"
      },
      {
        "name": "fieldsConfusionMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsCooccurrenceMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsLabelCounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsBinaryMetrics",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsTestSet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByArea",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByClass",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{modelVersionId}/input_examples",
    "method": "listModelVersionInputExamples",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "ListModelVersionInputExamples",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "id of model the example belongs to",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "specific version the example belongs to",
        "example": "MODELVERSIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Optional, defaults to 128 references per page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{modelVersionId}/input_examples/{exampleId}",
    "method": "getModelVersionInputExample",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "GetModelVersionInputExample",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "id of model the example belongs to",
        "example": "MODELID"
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "required": true,
        "description": "specific version the example belongs to",
        "example": "MODELVERSIONID"
      },
      {
        "name": "exampleId",
        "schema": "string",
        "required": true,
        "description": "Id of example to fetch",
        "example": "EXAMPLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}",
    "method": "deleteModelVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single model.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}",
    "method": "getModelVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific model from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/concepts",
    "method": "listModelConcepts2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List models concepts.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "Model id",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Model version Id. Optional, if not provided latest model version is used.",
        "example": "VERSIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the concept:\n  - id\n  - name\n\nKeywords are used for partial prefix-matching (so searching for \"larif\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/exports",
    "method": "getModelVersionExport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "GetModelVersionExport",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/exports",
    "method": "putModelVersionExports",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Export a model",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/inputs",
    "method": "listModelInputs3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated: Unmaintained and ideally replaced with usage of datasets",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/metrics",
    "method": "getModelVersionMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated: Use GetEvaluation instead\nGet the evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "fieldsConfusionMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsCooccurrenceMatrix",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsLabelCounts",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsBinaryMetrics",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsTestSet",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByArea",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldsMetricsByClass",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/metrics",
    "method": "postModelVersionMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Deprecated, use PostEvaluations instead\nRun the evaluation metrics for a model version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "testSearch",
        "schema": "object",
        "description": ""
      },
      {
        "name": "evalInfo",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/output_info",
    "method": "getModelOutputInfo3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a the output info for a given model_id or model_id/version_id\ncombo.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "This is included so that we can re-use this request for multiple\nrpcs with and without the version_id.",
        "example": "VERSIONID"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trainedBefore",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/outputs",
    "method": "postModelOutputs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get predicted outputs from the model.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/models/{modelId}/versions/{versionId}/outputs/generate",
    "method": "generateModelOutputs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "TODO(https://docs.clarifai.com/: will need to\nSingle request but streaming resopnses.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "model",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerSelector",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules",
    "method": "deleteModules",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple modules in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules",
    "method": "listModules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the modules in community, by user or by app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "If neither sort option is set to true, will sort by modified_at."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the external id"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter modules by bookmark. If set, only return bookmarked modules. Otherwise none bookmarked modules only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the module:\n  - id\n  - description\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the id and description of the module. This supports wildcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "filterByUserId",
        "schema": "boolean",
        "required": false,
        "description": "Filter by the application owner whose this module belongs to\nDeprecated: use search instead of name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules",
    "method": "patchModules",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more modules.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules",
    "method": "postModules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a modules to an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modules",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}",
    "method": "getModule",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific module from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "additionalFields",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}/versions",
    "method": "deleteModuleVersions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a multiple module version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}/versions",
    "method": "listModuleVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the modules versions for a given module.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}/versions",
    "method": "patchModuleVersions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Modify details of an existing module version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "moduleVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}/versions",
    "method": "postModuleVersions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Create a new module version to trigger training of the module.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "moduleVersions",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}/versions/{moduleVersionId}",
    "method": "getModuleVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific module version for a module.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "moduleVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/modules/{moduleId}/versions/{moduleVersionId}/usage_count",
    "method": "getModuleVersionUsageCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get usage count for specific module version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "moduleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEID"
      },
      {
        "name": "moduleVersionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODULEVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/myscopes",
    "method": "myScopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "API Keys in the public API -- request is itself Key authorized, and will tell\nthe user the scopes/access of the key/credential they're providing, as computed by\nour authorizer:",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/resource_counts",
    "method": "getResourceCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the resource counts for the app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/searches",
    "method": "listSearches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all saved legacy searches.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/searches",
    "method": "patchSearches",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch saved legacy searches by ids.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/searches",
    "method": "postSearches",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a new search and optionally save it.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "searches",
        "schema": "array",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/searches/{id}",
    "method": "deleteSearch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a saved search.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
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
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/searches/{id}",
    "method": "getSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a saved legacy search.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
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
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/searches/{id}",
    "method": "postSearchesById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Execute a previously saved legacy search.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID for saves search to be executed",
        "example": "ID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/stats/values",
    "method": "postStatValues",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostStatValues",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "statValues",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/stats/values/aggregate",
    "method": "postStatValuesAggregate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PostStatValuesAggregate",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "statValueAggregateQueries",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/task/{taskId}/annotations/status",
    "method": "patchAnnotationsStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch annotations status by worker id and task id.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Filter by task ID",
        "example": "TASKID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "userIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "statusCodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      },
      {
        "name": "statusCode",
        "schema": "string",
        "description": "",
        "default": "ZERO"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks",
    "method": "deleteTasks",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple tasks in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks",
    "method": "listTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List tasks from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "workerUserIds",
        "schema": "array",
        "required": false,
        "description": "Get tasks that have ANY user from this list assigned as worker."
      },
      {
        "name": "reviewUserIds",
        "schema": "array",
        "required": false,
        "description": "Get tasks that have ANY user from this list assigned as reviewer."
      },
      {
        "name": "labelOrderIds",
        "schema": "array",
        "required": false,
        "description": "Get tasks that are associated to ANY label order from this list."
      },
      {
        "name": "includingLabelOrderTasks",
        "schema": "boolean",
        "required": false,
        "description": "Get label order tasks as well\nIt is automatically set to true if label_order_ids is set."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response.\nCurrently supported additional fields:\n- all\n- worker.users\n- review.users\n- metrics.work.inputs_count_estimated\n- metrics.work.inputs_percent_estimated"
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": "(https://docs.clarifai.com/ task IDs to filter on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Tasks."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks",
    "method": "patchTasks",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more tasks.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tasks",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Tasks."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks",
    "method": "postTasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add tasks to an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tasks",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with multiple Tasks."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks/{taskId}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific task from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response.\nCurrently supported additional fields:\n- all\n- worker.users\n- review.users\n- metrics.work.inputs_count_estimated\n- metrics.work.inputs_percent_estimated"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response with a single Task."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks/{taskId}/annotations/count",
    "method": "getTaskAnnotationCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Task annotation count",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "task_id for which count per user per status is needed",
        "example": "TASKID"
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "for given task_id, user_ids to filter on (https://docs.clarifai.com/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks/{taskId}/assignments",
    "method": "listNextTaskAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List next non-labeled and unassigned inputs from task's dataset",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks/{taskId}/assignments",
    "method": "putTaskAssignments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "PutTaskAssignments performs an action for the task assignments in given task.\nAll the actions are theoretically idempotent, but practically, in the current implementation,\nthe REVIEW_START action is not idempotent. See PutTaskAssignmentsRequestAction for more details.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "action",
        "schema": "string",
        "description": "",
        "default": "PUT_TASK_ASSIGNMENTS_REQUEST_ACTION_NOT_SET"
      },
      {
        "name": "labelSubmitConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reviewApproveConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reviewRequestChangesConfig",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks/{taskId}/inputs/count",
    "method": "getTaskInputCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Task Input count",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "task_id for which count per user per status is needed",
        "example": "TASKID"
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "for given task_id, user_ids to filter on (https://docs.clarifai.com/"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/tasks/{taskId}/inputs/samples",
    "method": "getInputSamples",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific input from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TASKID"
      },
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "URL param. If zero ids provided, returns for all task labelers"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/trending_metrics/views/{viewType}",
    "method": "listTrendingMetricsViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List the view metrics for a detail view",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "viewType",
        "schema": "string",
        "required": true,
        "description": "For now view types 'apps', 'workflows', and 'models' are supported.",
        "example": "VIEWTYPE"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/trending_metrics/views/{viewType}/{objectId}",
    "method": "postTrendingMetricsView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Increase the view metric for a detail view",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "viewType",
        "schema": "string",
        "required": true,
        "description": "For now view types 'apps', 'workflows', and 'models' are supported.",
        "example": "VIEWTYPE"
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "ID of the views object.",
        "example": "OBJECTID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/uploads",
    "method": "deleteUploads",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/uploads",
    "method": "listUploads",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/uploads",
    "method": "postUploads",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "uploads",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/uploads/{uploadId}",
    "method": "getUpload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "uploadId",
        "schema": "string",
        "required": true,
        "description": "Upload ID",
        "example": "UPLOADID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/uploads/{uploadId}/content_parts",
    "method": "putUploadContentParts",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Upload a part of a multipart upload.\nBehaviour on completion depends on the endpoint that was used to initiate the upload.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "uploadId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPLOADID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "contentParts",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows",
    "method": "deleteWorkflows",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple workflows in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleteAll",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows",
    "method": "listWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the workflows.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the workflow"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:\nIf true, we only return workflows that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return workflows that are starred by the requesting user"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter workflows by bookmark. If set, only return bookmarked workflows. Otherwise none bookmarked workflows only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the workflow:\n  - id\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query various text fields (id, description and notes) that can contain the words in the query string.\nDeprecated: use search instead."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter by the id of the workflow. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "required": false,
        "description": "Full text and prefix matching on id, owner id, description and notes. Searchable fields may be added\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows",
    "method": "patchWorkflows",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more workflows.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows",
    "method": "postWorkflows",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a workflow to an app.\nNote(https://docs.clarifai.com/: the order of the workflows that are returned from this endpoint\nmay be different than the order in which the user provides them. This is because\nwe reorder by a sort that optimizes for performance of the graph and its dependencies.\nWhen using the workflow in any future call the order returned by this endpoint\nwill be used.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/ids",
    "method": "patchWorkflowIds",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more workflows ids.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}",
    "method": "deleteWorkflow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single workflow.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}",
    "method": "getWorkflow",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific workflow from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "Workflow ID to retrieve\nIf no ID is specified we return default workflow of the application\nIf an ID is specified by default we first looks into Clarifai workflows for a Workflow ID",
        "example": "WORKFLOWID"
      },
      {
        "name": "favorClarifaiWorkflows",
        "schema": "boolean",
        "required": false,
        "description": "Use this flag to look into clarifai published workflows first for a Workflow ID"
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "excludeClarifaiWorkflows",
        "schema": "boolean",
        "required": false,
        "description": "if true will not expand search to clarifai workflows"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/publish",
    "method": "postWorkflowVersionsPublish",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/results",
    "method": "postWorkflowResults2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Predict using a workflow.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "Workflow ID to retrieve\nIf no ID is specified we return default workflow of the application\nIf an ID is specified by default we first looks into Clarifai workflows for a Workflow ID",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "outputConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflowState",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/results/similarity",
    "method": "postWorkflowResultsSimilarity2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Compare embeddings distances using a workflow",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "probeInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "poolInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/unpublish",
    "method": "postWorkflowVersionsUnPublish",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/versions",
    "method": "deleteWorkflowVersions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete workflow versions.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The id of the workflow that has the requested versions to delete.",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflowVersionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/versions",
    "method": "listWorkflowVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List workflow versions.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "List versions for the workflow identified by this id",
        "example": "WORKFLOWID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/versions",
    "method": "patchWorkflowVersions",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch workflow versions.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The id of the workflow that has the requested versions to patch.",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflowVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/versions/{versionId}/results",
    "method": "postWorkflowResults",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Predict using a workflow.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "Workflow ID to retrieve\nIf no ID is specified we return default workflow of the application\nIf an ID is specified by default we first looks into Clarifai workflows for a Workflow ID",
        "example": "WORKFLOWID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Workflow version ID to retrieve\nIf no ID is specified, latest workflow version is used",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "outputConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflowState",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/versions/{versionId}/results/similarity",
    "method": "postWorkflowResultsSimilarity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Compare embeddings distances using a workflow",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "versionId",
        "schema": "string",
        "required": true,
        "description": "Workflow version ID to retrieve\nIf no ID is specified, latest workflow version is used",
        "example": "VERSIONID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "probeInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "poolInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/apps/{userAppId.appId}/workflows/{workflowId}/versions/{workflowVersionId}",
    "method": "getWorkflowVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get single workflow version.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERAPPID.APPID"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The id of the workflow that has the requested version.",
        "example": "WORKFLOWID"
      },
      {
        "name": "workflowVersionId",
        "schema": "string",
        "required": true,
        "description": "Get the identified by this id",
        "example": "WORKFLOWVERSIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/collaborations",
    "method": "listCollaborations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Collaboration includes the app user are invitied to work on",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "templateOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:\nIf true, we only return collaborations on apps that are marked as a template by the app owner."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/datasets",
    "method": "listDatasets2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the datasets.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "If neither sort option is set to true, will sort by modified_at."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the external id"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter datasets by bookmark. If set, only return bookmarked datasets. Otherwise none bookmarked datasets only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the dataset:\n  - id\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Fuzzy filter on dataset ID\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/duplications",
    "method": "listAppDuplications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "ListAppDuplications lists all app duplication jobs created by the user.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/duplications/{appDuplicationId}",
    "method": "getAppDuplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "GetAppDuplication returns an app duplication job created by the user.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "appDuplicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPDUPLICATIONID"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/evaluations",
    "method": "listEvaluations2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "If true, sort in ascending order, otherwise sort in descending order."
      },
      {
        "name": "sortByAppId",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by application id"
      },
      {
        "name": "sortByRocAuc",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_roc_auc"
      },
      {
        "name": "sortByF1",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.f1"
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by when the metric was created"
      },
      {
        "name": "sortByMeanAvgPrecision",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.mean_avg_precision_iou_50"
      },
      {
        "name": "sortByPrecision",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_precision"
      },
      {
        "name": "sortByRecall",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by eval metric summary.macro_avg_recall"
      },
      {
        "name": "sortByModelId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortByEvalDatasetId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sortByTrainDatasetId",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": false,
        "description": "Filter on model type id"
      },
      {
        "name": "evalDatasetIds",
        "schema": "array",
        "required": false,
        "description": "Filter on dataset ID of the dataset version specified in the metric version"
      },
      {
        "name": "trainDatasetIds",
        "schema": "array",
        "required": false,
        "description": "Filter on dataset ID of the dataset version specified by the model version"
      },
      {
        "name": "conceptIds",
        "schema": "array",
        "required": false,
        "description": "Filter on concept IDs specified in the modele version's output_info"
      },
      {
        "name": "showFailedMetrics",
        "schema": "boolean",
        "required": false,
        "description": "Whether to show failed metrics, defaults to false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/keys",
    "method": "listKeys",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the keys.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "notExpired",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "scopes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "endpoints",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/keys",
    "method": "patchKeys",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more keys.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "keys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/keys",
    "method": "postKeys",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a key to an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "keys",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/keys/{keyId}",
    "method": "deleteKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Search over the keys to find one or more you're looking for.\nThis leverage the \"body\" parameter because we also have page and\nper_page as url query param variables in this request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/keys/{keyId}",
    "method": "getKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific key from an app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEYID"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/models",
    "method": "listModels2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the models.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars, outputs, presets"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByName",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByNumInputs",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of training inputs"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time of the latest model version.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at"
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by count of stars"
      },
      {
        "name": "modelTypeId",
        "schema": "string",
        "required": false,
        "description": "Filtering options:\nFilter models by the specific model_type_id. See ListModelTypes for the list of ModelType.Id's\nsupported."
      },
      {
        "name": "trainedOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that have the status MODEL_TRAINED, which includes non-trainable model types."
      },
      {
        "name": "inputFields",
        "schema": "array",
        "required": false,
        "description": "The list of input fields to the model.\nFor example, you can specify 'image', which will return models that make inferences on images like visual-classifier models."
      },
      {
        "name": "outputFields",
        "schema": "array",
        "required": false,
        "description": "The list of output fields to the model.\nFor example, you can specify 'regions[...].data.concepts', which will return visual-detector models."
      },
      {
        "name": "license",
        "schema": "string",
        "required": false,
        "description": "Filter by the license of the model version"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return models that are starred by the requesting user"
      },
      {
        "name": "toolkits",
        "schema": "array",
        "required": false,
        "description": "List of toolkit tags to filter by"
      },
      {
        "name": "useCases",
        "schema": "array",
        "required": false,
        "description": "List of use_case tags to filter by"
      },
      {
        "name": "languages",
        "schema": "array",
        "required": false,
        "description": "List of language tags to filter by"
      },
      {
        "name": "dontFetchFromMain",
        "schema": "boolean",
        "required": false,
        "description": "Old API behavior resulted in returning clarifai main models when calling ListModels while scoped to an app. While we transition\naway from that, we can use this flag to not always fetch clarifai main models, unless that is the app we are explicitly listing for."
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter models by bookmark. If set, only return bookmarked models. Otherwise none bookmarked models only.\nNote: you can not filter `trained_only` and bookmark at the same time.\nWhen filter by bookmark, we will return trained and untrained models."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the model:\n  - id\n  - name\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query name, description and id fields, that can contain the words in the query string. Does NOT support wildcards - full words only. Supports operators \"OR\" and \"-\" as NOT.\nDeprecated: use search instead."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the description and id of the model. This supports wildcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "filterByUserId",
        "schema": "boolean",
        "required": false,
        "description": "Extends the name filter to include the user_id of the application owner that the model belongs to.\nDeprecated: use search instead of name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/modules",
    "method": "listModules2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the modules in community, by user or by app.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the app"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "If neither sort option is set to true, will sort by modified_at."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the external id"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter modules by bookmark. If set, only return bookmarked modules. Otherwise none bookmarked modules only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the module:\n  - id\n  - description\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "Filter by the id and description of the module. This supports wildcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "filterByUserId",
        "schema": "boolean",
        "required": false,
        "description": "Filter by the application owner whose this module belongs to\nDeprecated: use search instead of name."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/myscopes",
    "method": "myScopesUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/runners",
    "method": "deleteRunners",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple runners in one request.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/runners",
    "method": "listRunners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the runners for the user.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/runners",
    "method": "postRunners",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a runners to a user.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runners",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/runners/{runnerId}",
    "method": "getRunner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific runner.\nTODO(https://docs.clarifai.com/: runner_id is a UUID so can list globally as well.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "runnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUNNERID"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/runners/{runnerId}/items",
    "method": "listRunnerItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List items for the remote runner to work on.\nsince the runner_id is a UUID we can access it directly too.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "runnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUNNERID"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/runners/{runnerId}/items/{runnerItemId}/outputs",
    "method": "postRunnerItemOutputs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Post back outputs from remote runners\nsince the runner_id is a UUID we can access it directly too.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "runnerId",
        "schema": "string",
        "required": true,
        "description": "The particular runner that processed the work.",
        "example": "RUNNERID"
      },
      {
        "name": "runnerItemId",
        "schema": "string",
        "required": true,
        "description": "The particular item of work processed.",
        "example": "RUNNERITEMID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "runnerItemOutputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/scopes",
    "method": "listScopes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all auth scopes available to me as a user.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "keyType",
        "schema": "string",
        "required": false,
        "description": "If \"personal_access_token\" include scopes and endpoints available to personal access tokens.\nIf \"api_key\" include scopes and endpoints available to app-specific keys. (https://docs.clarifai.com/"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/validate_password",
    "method": "postValidatePassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Validate new password in real-time for a user",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "password",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users/{userAppId.userId}/workflows",
    "method": "listWorkflows2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the workflows.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": true,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user",
        "example": "USERAPPID.USERID"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the workflow"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:\nIf true, we only return workflows that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return workflows that are starred by the requesting user"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter workflows by bookmark. If set, only return bookmarked workflows. Otherwise none bookmarked workflows only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the workflow:\n  - id\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query various text fields (id, description and notes) that can contain the words in the query string.\nDeprecated: use search instead."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter by the id of the workflow. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "required": false,
        "description": "Full text and prefix matching on id, owner id, description and notes. Searchable fields may be added\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/validate_password",
    "method": "postValidatePassword2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Validate new password in real-time for a user",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "password",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows",
    "method": "deleteWorkflows2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete multiple workflows in one request.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deleteAll",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows",
    "method": "listWorkflows3",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List all the workflows.",
    "parameters": [
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "sortAscending",
        "schema": "boolean",
        "required": false,
        "description": "Sorting options:\nWhether to sort in ascending order. If false, will order in descending order."
      },
      {
        "name": "sortById",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the name"
      },
      {
        "name": "sortByModifiedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the modified_at time.\nIf none of the sort options is set to true, will sort by modified_at."
      },
      {
        "name": "sortByCreatedAt",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the created_at time."
      },
      {
        "name": "sortByStarCount",
        "schema": "boolean",
        "required": false,
        "description": "Whether to order by the number of users stared the workflow"
      },
      {
        "name": "featuredOnly",
        "schema": "boolean",
        "required": false,
        "description": "Filtering options:\nIf true, we only return workflows that are handpicked by clarifai staff"
      },
      {
        "name": "starredOnly",
        "schema": "boolean",
        "required": false,
        "description": "If true, we only return workflows that are starred by the requesting user"
      },
      {
        "name": "bookmark",
        "schema": "boolean",
        "required": false,
        "description": "Filter workflows by bookmark. If set, only return bookmarked workflows. Otherwise none bookmarked workflows only."
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Searching options:\nSpecify a search parameter in order to perform keyword search on the\nfollowing fields of the workflow:\n  - id\n  - description\n  - notes\n  - user_id (unless user_app_id.user_id is already set)\n\nKeywords are both normalized for search (so searching for \"satisfy\" matches \"satisfied\")\nand used for partial prefix-matching (so searching for \"clari\" matches \"clarifai\").\n\nNOTE: Both the list of fields searched and the exact keyword matching\nrules are subject to change and not guaranteed to be backwards-compatible."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "Query various text fields (id, description and notes) that can contain the words in the query string.\nDeprecated: use search instead."
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Filter by the id of the workflow. This supports wilcard queries like \"gen*\" to match \"general\" as an example.\nDeprecated: use search instead."
      },
      {
        "name": "searchTerm",
        "schema": "string",
        "required": false,
        "description": "Full text and prefix matching on id, owner id, description and notes. Searchable fields may be added\nDeprecated: use search instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows",
    "method": "patchWorkflows2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch one or more workflows.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows",
    "method": "postWorkflows2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Add a workflow to an app.\nNote(https://docs.clarifai.com/: the order of the workflows that are returned from this endpoint\nmay be different than the order in which the user provides them. This is because\nwe reorder by a sort that optimizes for performance of the graph and its dependencies.\nWhen using the workflow in any future call the order returned by this endpoint\nwill be used.",
    "parameters": [
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflows",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}",
    "method": "deleteWorkflow2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete a single workflow.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}",
    "method": "getWorkflow2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get a specific workflow from an app.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "Workflow ID to retrieve\nIf no ID is specified we return default workflow of the application\nIf an ID is specified by default we first looks into Clarifai workflows for a Workflow ID",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
        "schema": "boolean",
        "required": false,
        "description": "Use this flag to look into clarifai published workflows first for a Workflow ID"
      },
      {
        "name": "additionalFields",
        "schema": "array",
        "required": false,
        "description": "(optional URL parameter) List of additional fields to be included in the response. Currently supported: all, stars"
      },
      {
        "name": "excludeClarifaiWorkflows",
        "schema": "boolean",
        "required": false,
        "description": "if true will not expand search to clarifai workflows"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/publish",
    "method": "postWorkflowVersionsPublish2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/results",
    "method": "postWorkflowResults3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Predict using a workflow.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "Workflow ID to retrieve\nIf no ID is specified we return default workflow of the application\nIf an ID is specified by default we first looks into Clarifai workflows for a Workflow ID",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "inputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "outputConfig",
        "schema": "object",
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "workflowState",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/results/similarity",
    "method": "postWorkflowResultsSimilarity3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Compare embeddings distances using a workflow",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "versionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "modelVersionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "probeInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "poolInputs",
        "schema": "array",
        "description": ""
      },
      {
        "name": "favorClarifaiWorkflows",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/unpublish",
    "method": "postWorkflowVersionsUnPublish2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publications",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/versions",
    "method": "deleteWorkflowVersions2",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Delete workflow versions.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The id of the workflow that has the requested versions to delete.",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflowVersionIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Base message to return when there is a internal server error that\nis not caught elsewhere."
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/versions",
    "method": "listWorkflowVersions2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "List workflow versions.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "List versions for the workflow identified by this id",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The page number. Pagination is used to split the results into chunks.\nDefaults to 1."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "(optional URL parameter) The number of results that will be contained in each page. Defaults\nto 128."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/versions",
    "method": "patchWorkflowVersions2",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Patch workflow versions.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The id of the workflow that has the requested versions to patch.",
        "example": "WORKFLOWID"
      },
      {
        "name": "userAppId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workflowVersions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "action",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workflows/{workflowId}/versions/{workflowVersionId}",
    "method": "getWorkflowVersion2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "V2",
    "typeScriptTag": "v2",
    "description": "Get single workflow version.",
    "parameters": [
      {
        "name": "workflowId",
        "schema": "string",
        "required": true,
        "description": "The id of the workflow that has the requested version.",
        "example": "WORKFLOWID"
      },
      {
        "name": "workflowVersionId",
        "schema": "string",
        "required": true,
        "description": "Get the identified by this id",
        "example": "WORKFLOWVERSIONID"
      },
      {
        "name": "userAppIdUserId",
        "schema": "string",
        "required": false,
        "description": "Note user_id 'me' is reserved - it is the alias for the id of authorized user"
      },
      {
        "name": "userAppIdAppId",
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
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="proto/clarifai/api/service.proto"
      apiBaseUrl="api.clarifia.com"
      apiVersion="version not set"
      endpoints={248}
      sdkMethods={400}
      schemas={543}
      parameters={2023}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clarifai/openapi.yaml"
      developerDocumentation="docs.clarifai.com/"
    />
  );
}
  