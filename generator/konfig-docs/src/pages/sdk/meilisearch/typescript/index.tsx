import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function MeilisearchTypeScriptSdk() {
  return (
    <Sdk
      sdkName="meilisearch-typescript-sdk"
      metaDescription="Meilisearch is a powerful, fast, open-source, and easy-to-use search engine that provides instant search results for large datasets. It offers features like typo-tolerance, faceting, filters, and customizable ranking to enhance search experiences for developers and users alike."
      company="Meilisearch"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/logo.png"
      clientNameCamelCase="meilisearch"
      homepage="www.meilisearch.com/"
      lastUpdated={new Date("2024-03-13T01:24:30.233Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/favicon.png"
      // Missing contactUrl
      contactEmail="bonjour@Meilisearch.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["database","search","cloud","open_source","geosearch","nlp"]}
      methods={[
  {
    "url": "/dumps",
    "method": "triggerDumpCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dumps",
    "typeScriptTag": "dumps",
    "description": "Create a Dump",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/snapshots",
    "method": "createSnapshotProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Snapshots",
    "typeScriptTag": "snapshots",
    "description": "Create a Snapshot",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/health",
    "method": "checkMeilisearchInstance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get health",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/indexes",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Indexes",
    "typeScriptTag": "indexes",
    "description": "List Indexes",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": "Maximum number of results to return.",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Number of results to skip.",
        "default": 0
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
    "url": "/indexes",
    "method": "createIndex",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Indexes",
    "typeScriptTag": "indexes",
    "description": "Create Index",
    "parameters": [
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UID"
      },
      {
        "name": "primaryKey",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
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
    "url": "/indexes/{indexUid}",
    "method": "deleteIndex",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Indexes",
    "typeScriptTag": "indexes",
    "description": "Delete Index",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}",
    "method": "getIndex",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Indexes",
    "typeScriptTag": "indexes",
    "description": "Get Index",
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}",
    "method": "updateIndexPrimaryKey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Indexes",
    "typeScriptTag": "indexes",
    "description": "Update Index",
    "parameters": [
      {
        "name": "primaryKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRIMARYKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents",
    "method": "deleteAll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete all documents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents",
    "method": "getByBatch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get Documents",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": "Maximum number of results to return.",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Number of results to skip.",
        "default": 0
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Comma-separated list of fields to display for an API resource. By default it contains all fields of an API resource.",
        "example": "uid,createdAt",
        "default": "*"
      },
      {
        "name": "filter",
        "schema": "undefined",
        "required": false,
        "description": "Attribute(s) to filter on.\n\nCan be made of 3 syntaxes\n\n- Nested Array: `[\"something > 1\", \"genres=comedy\", [\"genres=horror\", \"title=batman\"]]`\n- String: `something > 1 AND genres=comedy AND (genres=horror OR title=batman)`\n- Mixed: `[\"something > 1 AND genres=comedy\", \"genres=horror OR title=batman\"]`\n\n> info\n> _geoRadius({lat}, {lng}, {distance_in_meters}) and _geoBoundingBox([{lat, lng}], [{lat}, {lng}]) built-in filter rules can be used to filter documents within geo shapes.\n\n> warn\n> Attribute(s) used in `filter` should be declared as filterable attributes. See [Filtering and Faceted Search](https://docs.meilisearch.com/reference/features/filtering_and_faceted_search.html).\n",
        "example": "something > 1 AND genres=comedy AND (genres=horror OR title=batman)"
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents",
    "method": "addOrUpdateBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Add or replace documents",
    "parameters": [
      {
        "name": "primaryKey",
        "schema": "string",
        "description": "The [primary key](https://docs.meilisearch.com/learn/core_concepts/documents.html#primary-key) of the documents. primaryKey is optional.\nIf you want to set the primary key of your index through this route, it only has to be done the first time you add documents to the index. After which it will be ignored if given.\n"
      },
      {
        "name": "csvDelimiter",
        "schema": "string",
        "description": "Customize the csv delimiter when importing CSV documents. By default its a comma \",\"",
        "default": ","
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "413",
        "description": ""
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents",
    "method": "addOrUpdateBatch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Add or update documents",
    "parameters": [
      {
        "name": "primaryKey",
        "schema": "string",
        "description": "The [primary key](https://docs.meilisearch.com/learn/core_concepts/documents.html#primary-key) of the documents. primaryKey is optional.\nIf you want to set the primary key of your index through this route, it only has to be done the first time you add documents to the index. After which it will be ignored if given.\n"
      },
      {
        "name": "csvDelimiter",
        "schema": "string",
        "description": "Customize the csv delimiter when importing CSV documents. By default its a comma \",\"",
        "default": ","
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "413",
        "description": ""
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents/fetch",
    "method": "getByBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get Documents",
    "parameters": [
      {
        "name": "offset",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 20
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "undefined",
        "description": "",
        "example": [
          "director:Mati Diop",
          [
            "genres:Comedy",
            "genres:Romance"
          ]
        ]
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents/delete-batch",
    "method": "deleteSelectionByFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete documents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents/delete",
    "method": "deleteSelectionBasedFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete documents",
    "parameters": [
      {
        "name": "filter",
        "schema": "undefined",
        "description": "",
        "example": [
          "director:Mati Diop",
          [
            "genres:Comedy",
            "genres:Romance"
          ]
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents/{documentId}",
    "method": "deleteDocumentById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Delete one document",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/documents/{documentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Get one document",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "description": "Comma-separated list of fields to display for an API resource. By default it contains all fields of an API resource.",
        "example": "uid,createdAt",
        "default": "*"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A document made of attribute. The maximum number of attribute for a document is 65,535."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/search",
    "method": "documents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "Query string.",
        "example": "back to the future",
        "default": "\"\""
      },
      {
        "name": "attributesToRetrieve",
        "schema": "string",
        "description": "Comma-separated list of attributes whose fields will be present in the returned documents. Defaults to the [displayedAttributes list](https://docs.meilisearch.com/reference/features/settings.html#displayed-attributes) which contains by default all attributes found in the documents.",
        "example": "title,description",
        "default": "*"
      },
      {
        "name": "attributesToHighlight",
        "schema": "string",
        "description": "Comma-separated list of attributes whose values will contain highlighted matching terms. Highlighted attributes are returned in `_formatted` response object.",
        "example": "title,description"
      },
      {
        "name": "highlightPreTag",
        "schema": "string",
        "required": false,
        "description": "Specify the tag to put before the highlighted query terms.",
        "default": "<em>"
      },
      {
        "name": "highlightPostTag",
        "schema": "string",
        "required": false,
        "description": "Specify the tag to put after the highlighted query terms.",
        "default": "</em>"
      },
      {
        "name": "attributesToCrop",
        "schema": "string",
        "required": false,
        "description": "Comma-separated list of attributes whose values have to be cropped. Cropped attributes are returned in `_formatted` response object.",
        "example": "overview:10"
      },
      {
        "name": "cropMarker",
        "schema": "string",
        "required": false,
        "description": "Sets the crop marker to apply before and/or after cropped part selected within an attribute defined in `attributesToCrop` parameter.",
        "default": "…"
      },
      {
        "name": "cropLength",
        "schema": "integer",
        "required": false,
        "description": "Sets the total number of words to keep around the matched part of an attribute specified in the `attributesToCrop` parameter.",
        "example": 5,
        "default": 10
      },
      {
        "name": "facets",
        "schema": "string",
        "description": "Comma-separated list of attributes whose fields will be distributed as a facet. If you have [set up filterableAttributes](https://docs.meilisearch.com/reference/features/settings.html#filterable-attributes), you can retrieve the count of matching terms for each facets.[Learn more about facet distribution in the dedicated guide](https://docs.meilisearch.com/reference/features/search_parameters.html#facet-distribution)",
        "example": "genres,author"
      },
      {
        "name": "filter",
        "schema": "undefined",
        "required": false,
        "description": "Attribute(s) to filter on.\n\nCan be made of 3 syntaxes\n\n- Nested Array: `[\"something > 1\", \"genres=comedy\", [\"genres=horror\", \"title=batman\"]]`\n- String: `something > 1 AND genres=comedy AND (genres=horror OR title=batman)`\n- Mixed: `[\"something > 1 AND genres=comedy\", \"genres=horror OR title=batman\"]`\n\n> info\n> _geoRadius({lat}, {lng}, {distance_in_meters}) and _geoBoundingBox([{lat, lng}], [{lat}, {lng}]) built-in filter rules can be used to filter documents within geo shapes.\n\n> warn\n> Attribute(s) used in `filter` should be declared as filterable attributes. See [Filtering and Faceted Search](https://docs.meilisearch.com/reference/features/filtering_and_faceted_search.html).\n",
        "example": "something > 1 AND genres=comedy AND (genres=horror OR title=batman)"
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Number of results to skip.",
        "default": 0
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Fields on which you want to sort the results.\n\n> warn\n> Attribute(s) used in `sort` should be declared as sortable attributes. See [Sorting](https://docs.meilisearch.com/reference/features/sorting.html).\n\n> info\n> _geoPoint({lat}, {long}) built-in sort rule can be used to sort documents around a geo point.\n",
        "example": "price:asc"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "Maximum number of results to return.",
        "default": 20
      },
      {
        "name": "page",
        "schema": "number",
        "description": "Sets the specific results page.",
        "default": 1
      },
      {
        "name": "hitsPerPage",
        "schema": "number",
        "description": "Sets the number of results returned for a query. If hitsPerPage is not provided as a query parameter, this parameter is ignored.",
        "default": 20
      },
      {
        "name": "showMatchesPosition",
        "schema": "boolean",
        "required": false,
        "description": "Defines whether an `_matchesPosition` object that contains information about the matches should be returned or not.",
        "default": "false"
      },
      {
        "name": "matchingStrategy",
        "schema": "string",
        "required": false,
        "description": "Defines which strategy to use to match the query terms within the documents as search results. Two different strategies are available, `last` and `all`. By default, the `last` strategy is chosen.",
        "default": "last"
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/search",
    "method": "documentsSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "",
        "example": "\"Back to the future\"",
        "default": "\"\""
      },
      {
        "name": "vector",
        "schema": "array",
        "description": "",
        "example": "[0.8, 0.145, 0.26, 0.3]",
        "default": "null"
      },
      {
        "name": "attributesToRetrieve",
        "schema": "array",
        "description": ""
      },
      {
        "name": "attributesToHighlight",
        "schema": "array",
        "description": ""
      },
      {
        "name": "highlightPreTag",
        "schema": "string",
        "description": "",
        "example": "<mark>",
        "default": "<em>"
      },
      {
        "name": "highlightPostTag",
        "schema": "string",
        "description": "",
        "example": "</mark>",
        "default": "</em>"
      },
      {
        "name": "attributesToCrop",
        "schema": "array",
        "description": ""
      },
      {
        "name": "cropMarker",
        "schema": "string",
        "description": "",
        "default": "…"
      },
      {
        "name": "cropLength",
        "schema": "number",
        "description": "",
        "default": 10
      },
      {
        "name": "showMatchesPosition",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "showRankingScore",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "showRankingScoreDetails",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "matchingStrategy",
        "schema": "string",
        "description": "",
        "default": "last"
      },
      {
        "name": "attributesToSearchOn",
        "schema": "array",
        "description": "",
        "default": "[\"*\"]"
      },
      {
        "name": "filter",
        "schema": "undefined",
        "description": "",
        "example": [
          "director:Mati Diop",
          [
            "genres:Comedy",
            "genres:Romance"
          ]
        ]
      },
      {
        "name": "facets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "default": 20
      },
      {
        "name": "page",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "hitsPerPage",
        "schema": "number",
        "description": "",
        "example": 20
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "",
        "example": [
          "price:desc"
        ]
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/facet-search",
    "method": "facetValuesQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Facet Search",
    "parameters": [
      {
        "name": "facetName",
        "schema": "string",
        "description": "",
        "example": "\"genres\""
      },
      {
        "name": "facetQuery",
        "schema": "string",
        "description": "",
        "example": "\"Horror\"",
        "default": "\"\""
      },
      {
        "name": "q",
        "schema": "string",
        "description": "",
        "example": "\"Back to the future\"",
        "default": "\"\""
      },
      {
        "name": "matchingStrategy",
        "schema": "string",
        "description": "",
        "default": "last"
      },
      {
        "name": "filter",
        "schema": "undefined",
        "description": "",
        "example": [
          "director:Mati Diop",
          [
            "genres:Comedy",
            "genres:Romance"
          ]
        ]
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings",
    "method": "resetSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get settings",
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update settings",
    "parameters": [
      {
        "name": "synonyms",
        "schema": "object",
        "description": "",
        "example": {
          "wolverine": [
            "xmen",
            "logan"
          ],
          "logan": [
            "wolverine",
            "xmen"
          ],
          "wow": [
            "world of warcraft"
          ]
        }
      },
      {
        "name": "stopWords",
        "schema": "array",
        "description": "",
        "example": [
          "of",
          "the",
          "to"
        ]
      },
      {
        "name": "rankingRules",
        "schema": "array",
        "description": "",
        "example": [
          "words",
          "typo",
          "proximity",
          "attribute",
          "sort",
          "exactness",
          "release_date:asc"
        ]
      },
      {
        "name": "distinctAttribute",
        "schema": "string",
        "description": ""
      },
      {
        "name": "searchableAttributes",
        "schema": "array",
        "description": "",
        "example": [
          "title",
          "description",
          "genre"
        ]
      },
      {
        "name": "displayedAttributes",
        "schema": "array",
        "description": "",
        "example": [
          "title",
          "description",
          "genre",
          "release_date"
        ]
      },
      {
        "name": "filterableAttributes",
        "schema": "array",
        "description": "",
        "example": [
          "genres",
          "director"
        ]
      },
      {
        "name": "sortableAttributes",
        "schema": "array",
        "description": "",
        "example": [
          "price",
          "author",
          "title"
        ]
      },
      {
        "name": "typoTolerance",
        "schema": "object",
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
        "description": ""
      },
      {
        "name": "faceting",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/synonyms",
    "method": "resetSynonyms",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset synonyms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/synonyms",
    "method": "getSynonyms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get synonyms",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of associated words treated similarly. A word associated to an array of word as synonyms."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/synonyms",
    "method": "updateSynonyms",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update synonyms",
    "parameters": [
      {
        "name": "wolverine",
        "schema": "array",
        "description": ""
      },
      {
        "name": "logan",
        "schema": "array",
        "description": ""
      },
      {
        "name": "wow",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/sortable-attributes",
    "method": "resetSortableAttributes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset sortable attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/sortable-attributes",
    "method": "getSortableAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get sortable attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of attributes to sort on at search."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/sortable-attributes",
    "method": "updateSortableAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update sortable attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/stop-words",
    "method": "resetStopWords",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset stop-words",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/stop-words",
    "method": "getStopWords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get stop-words",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of words ignored when present in search queries."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/stop-words",
    "method": "updateStopWords",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update stop-words",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/ranking-rules",
    "method": "resetRankingRules",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset ranking rules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/ranking-rules",
    "method": "getRankingRules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get ranking rules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "List of ranking rules sorted by order of importance. The order is customizable.\n\n[A list of ordered built-in ranking rules](https://docs.meilisearch.com/learn/core_concepts/relevancy.html).\n"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/ranking-rules",
    "method": "updateRankingRules",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update ranking rules",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/typo-tolerance",
    "method": "resetTypoTolerance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset typo tolerance settings to the default configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/typo-tolerance",
    "method": "getTypoToleranceConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get typo tolerance configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Customize typo tolerance feature."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/typo-tolerance",
    "method": "updateTypoToleranceConfiguration",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update typo tolerance settings",
    "parameters": [
      {
        "name": "enabled",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "disableOnAttributes",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "disableOnWords",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "minWordSizeForTypos",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/pagination",
    "method": "resetPaginationSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset pagination settings to the default configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/pagination",
    "method": "getPaginationConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get pagination configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Customize pagination settings"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/pagination",
    "method": "updatePaginationSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update pagination settings",
    "parameters": [
      {
        "name": "maxTotalHits",
        "schema": "integer",
        "description": "",
        "default": 1000
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/faceting",
    "method": "resetFacetingSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset faceting settings to the default configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/faceting",
    "method": "getFacetingConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get faceting configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Customize faceting settings"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/faceting",
    "method": "updateFacetingSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update faceting settings",
    "parameters": [
      {
        "name": "maxValuesPerFacet",
        "schema": "integer",
        "description": "",
        "default": 100
      },
      {
        "name": "sortFacetValuesBy",
        "schema": "object",
        "description": "",
        "example": {
          "*": "alpha",
          "genres": "count"
        }
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/filterable-attributes",
    "method": "resetFilterableAttributes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset Filterable Attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/filterable-attributes",
    "method": "getFilterableAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get Filterable Attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Attributes to use for faceting and filtering. See [Filtering and Faceted Search](https://docs.meilisearch.com/reference/features/filtering_and_faceted_search.html).\n"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/filterable-attributes",
    "method": "updateFilterableAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update Filterable Attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/distinct-attribute",
    "method": "resetDistinctAttribute",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset distinct attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/distinct-attribute",
    "method": "getDistinctAttribute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get distinct attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Search returns documents with distinct (different) values of the given field."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/distinct-attribute",
    "method": "updateDistinctAttribute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update distinct attribute",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/searchable-attributes",
    "method": "resetSearchableAttributes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset searchable attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/searchable-attributes",
    "method": "getSearchableAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get searchable attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Fields in which to search for matching query words sorted by order of importance."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/searchable-attributes",
    "method": "updateSearchableAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update searchable attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/displayed-attributes",
    "method": "resetDisplayedAttributes",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Reset displayed attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/displayed-attributes",
    "method": "getDisplayedAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Get displayed attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Fields displayed in the returned documents."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/settings/displayed-attributes",
    "method": "updateDisplayedAttributes",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Settings",
    "typeScriptTag": "settings",
    "description": "Update displayed attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/indexes/{indexUid}/stats",
    "method": "getIndexStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Get stat of an index",
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
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/multi-search",
    "method": "search",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Multi Search",
    "parameters": [
      {
        "name": "queries",
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
      }
    ]
  },
  {
    "url": "/keys",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keys",
    "typeScriptTag": "keys",
    "description": "Get API Keys",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": "Maximum number of results to return.",
        "default": 20
      },
      {
        "name": "offset",
        "schema": "number",
        "description": "Number of results to skip.",
        "default": 0
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
    "url": "/keys",
    "method": "createApiKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Keys",
    "typeScriptTag": "keys",
    "description": "Create an API Key",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "uid",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "01b4bc42-eb33-4041-b481-254d00cce834"
      },
      {
        "name": "key",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "d0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4"
      },
      {
        "name": "actions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "indexes",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "expiresAt",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2021-11-12T10:00:00Z"
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API keys are stored and managed by the master key holder and the default admin key holder. These are the keys used by the technical teams to interact with Meilisearch at the level of the client/server code. API keys can have restrictions on which methods can be accessed via an actions list; they can also expiresAt a specific date time and be restricted to a specific set of indexes."
      }
    ]
  },
  {
    "url": "/keys/{uid_or_key}",
    "method": "deleteKeyByUidOrKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Keys",
    "typeScriptTag": "keys",
    "description": "Delete an API key specified by its uid or key field.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/keys/{uid_or_key}",
    "method": "getApiKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keys",
    "typeScriptTag": "keys",
    "description": "Get an API key from its uid or key field.",
    "parameters": [
      {
        "name": "uidOrKey",
        "schema": "string",
        "required": true,
        "description": "The uid or the key field value of the API Key.",
        "example": "UIDORKEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API keys are stored and managed by the master key holder and the default admin key holder. These are the keys used by the technical teams to interact with Meilisearch at the level of the client/server code. API keys can have restrictions on which methods can be accessed via an actions list; they can also expiresAt a specific date time and be restricted to a specific set of indexes."
      }
    ]
  },
  {
    "url": "/keys/{uid_or_key}",
    "method": "updateApiKey",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Keys",
    "typeScriptTag": "keys",
    "description": "Update an API key specified by its uid or key field.",
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
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "API keys are stored and managed by the master key holder and the default admin key holder. These are the keys used by the technical teams to interact with Meilisearch at the level of the client/server code. API keys can have restrictions on which methods can be accessed via an actions list; they can also expiresAt a specific date time and be restricted to a specific set of indexes."
      }
    ]
  },
  {
    "url": "/stats",
    "method": "getAllIndexesStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Get stats of all indexes",
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
    "url": "/version",
    "method": "getMeilisearchVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Version",
    "typeScriptTag": "version",
    "description": "Get version of Meilisearch",
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
    "url": "/tasks",
    "method": "deleteOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete tasks",
    "parameters": [
      {
        "name": "uids",
        "schema": "number",
        "required": false,
        "description": "Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character."
      },
      {
        "name": "indexUids",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character."
      },
      {
        "name": "statuses",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character."
      },
      {
        "name": "types",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character."
      },
      {
        "name": "canceledBy",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character."
      },
      {
        "name": "beforeEnqueuedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterEnqueuedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format."
      },
      {
        "name": "beforeStartedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterStartedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format."
      },
      {
        "name": "beforeFinishedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterFinishedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get all tasks",
    "parameters": [
      {
        "name": "limit",
        "schema": "number",
        "description": "Maximum number of results to return.",
        "default": 20
      },
      {
        "name": "from",
        "schema": "number",
        "description": "Fetch the next set of results from the given uid."
      },
      {
        "name": "uids",
        "schema": "number",
        "required": false,
        "description": "Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character."
      },
      {
        "name": "indexUids",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character."
      },
      {
        "name": "statuses",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character."
      },
      {
        "name": "types",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character."
      },
      {
        "name": "canceledBy",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character."
      },
      {
        "name": "beforeEnqueuedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterEnqueuedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format."
      },
      {
        "name": "beforeStartedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterStartedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format."
      },
      {
        "name": "beforeFinishedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterFinishedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/:taskUid",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get a task",
    "parameters": [
      {
        "name": "taskUid",
        "schema": "integer",
        "required": true,
        "description": "The task identifier",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Meilisearch is an asynchronous API. It means that the API does not behave as you would typically expect when handling the request's responses.\n\nSome operations are put in a queue and will be executed in turn (asynchronously). In this case, the server response contains the identifier to track the execution of the operation.\n\n[Learn More](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html).\n"
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
    "url": "/tasks/cancel",
    "method": "cancelOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Cancel tasks",
    "parameters": [
      {
        "name": "uids",
        "schema": "number",
        "required": false,
        "description": "Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character."
      },
      {
        "name": "indexUids",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character."
      },
      {
        "name": "statuses",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character."
      },
      {
        "name": "types",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character."
      },
      {
        "name": "canceledBy",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character."
      },
      {
        "name": "beforeEnqueuedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterEnqueuedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format."
      },
      {
        "name": "beforeStartedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterStartedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format."
      },
      {
        "name": "beforeFinishedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format."
      },
      {
        "name": "afterFinishedAt",
        "schema": "string",
        "required": false,
        "description": "Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format."
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "A summarized version of an asynchronous task. Summarized task representation are given for the 202 Accepted HTTP response. [Learn More](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html)."
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
    "url": "/swap-indexes",
    "method": "swapIndexes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Indexes",
    "typeScriptTag": "indexes",
    "description": "Swap Indexes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": "Accepted"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/experimental-features",
    "method": "runtimeFeaturesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Experimental",
    "typeScriptTag": "experimental",
    "description": "(EXPERIMENTAL) Get the status of runtime experimental features",
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
    "url": "/experimental-features",
    "method": "setRuntimeExperimentalFeatures",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Experimental",
    "typeScriptTag": "experimental",
    "description": "(EXPERIMENTAL) Set the status of runtime experimental features",
    "parameters": [
      {
        "name": "vectorStore",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "scoreDetails",
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
      }
    ]
  },
  {
    "url": "/metrics",
    "method": "getPrometheusMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "(EXPERIMENTAL) Get prometheus format metrics for observability and monitoring",
    "parameters": [],
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
      apiTitle="Meilisearch Core API"
      apiBaseUrl="{protocol}://{domain}:{port}"
      apiVersion="1.6.0"
      endpoints={36}
      sdkMethods={94}
      schemas={71}
      parameters={158}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/meilisearch/openapi.yaml"
    />
  );
}
  