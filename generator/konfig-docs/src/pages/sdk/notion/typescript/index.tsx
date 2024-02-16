import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function NotionTypeScriptSdk() {
  return (
    <Sdk
      sdkName="notion-typescript-sdk"
      metaDescription="Notion is a new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team."
      company="Notion"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/logo.png"
      clientNameCamelCase="notion"
      homepage="developers.notion.com"
      lastUpdated={new Date("2024-02-09T23:50:03.376Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v1/oauth/token",
    "method": "generateAccess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Token",
    "typeScriptTag": "token",
    "description": "Create a token",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "external_account",
        "schema": "object",
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
      }
    ]
  },
  {
    "url": "/v1/blocks/{block_id}/children",
    "method": "getChildren",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "Retrieve block children",
    "parameters": [
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a [block](ref:block)"
      },
      {
        "name": "startCursor",
        "schema": "string",
        "description": "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of items from the full list desired in the response. Maximum: 100"
      },
      {
        "name": "notionVersion",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/blocks/{block_id}/children",
    "method": "appendChildren",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "Append block children",
    "parameters": [
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a [block](ref:block). Also accepts a [page](ref:page) ID."
      },
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "children",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "after",
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
      }
    ]
  },
  {
    "url": "/v1/blocks/{block_id}",
    "method": "removeBlockById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "Delete a block",
    "parameters": [
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion block"
      },
      {
        "name": "notionVersion",
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
      }
    ]
  },
  {
    "url": "/v1/blocks/{block_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "Retrieve a block",
    "parameters": [
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion block"
      },
      {
        "name": "notionVersion",
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
      }
    ]
  },
  {
    "url": "/v1/blocks/{block_id}",
    "method": "updateBlockById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Block",
    "typeScriptTag": "block",
    "description": "Update a block",
    "parameters": [
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion block"
      },
      {
        "name": "notionVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "{type}",
        "schema": "object",
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
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/pages",
    "method": "createNewPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Page",
    "typeScriptTag": "page",
    "description": "Create a page",
    "parameters": [
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "children",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cover",
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
    "url": "/v1/pages/{page_id}",
    "method": "getPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Page",
    "typeScriptTag": "page",
    "description": "Retrieve a page",
    "parameters": [
      {
        "name": "pageId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion page"
      },
      {
        "name": "filterProperties",
        "schema": "string",
        "description": "A list of page property value IDs associated with the page. Use this param to limit the response to a specific page property value or values. To retrieve multiple properties, specify each page property ID. For example: `?filter_properties=iAk8&filter_properties=b7dh`."
      },
      {
        "name": "notionVersion",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/pages/{page_id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Page",
    "typeScriptTag": "page",
    "description": "Update page properties",
    "parameters": [
      {
        "name": "pageId",
        "schema": "string",
        "required": true,
        "description": "The identifier for the Notion page to be updated."
      },
      {
        "name": "notionVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "properties",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "icon",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cover",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/pages/{page_id}/properties/{property_id}",
    "method": "getPropertyItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Page",
    "typeScriptTag": "page",
    "description": "Retrieve a page property item",
    "parameters": [
      {
        "name": "pageId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion page"
      },
      {
        "name": "propertyId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a page [property](https://developers.notion.com/reference/page#all-property-values)"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "For paginated properties. The max number of property item objects on a page. The default size is 100"
      },
      {
        "name": "startCursor",
        "schema": "string",
        "description": "For paginated properties."
      },
      {
        "name": "notionVersion",
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
    "url": "/v1/databases",
    "method": "createNewDatabase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database",
    "typeScriptTag": "database",
    "description": "Create a database",
    "parameters": [
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "title",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "properties",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/databases/{database_id}/query",
    "method": "executeQuery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Database",
    "typeScriptTag": "database",
    "description": "Query a database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion database."
      },
      {
        "name": "filterProperties",
        "schema": "string",
        "description": "A list of page property value IDs associated with the database. Use this param to limit the response to a specific page property value or values for pages that meet the `filter` criteria."
      },
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "filter",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sorts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "start_cursor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page_size",
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
      }
    ]
  },
  {
    "url": "/v1/databases/{database_id}",
    "method": "getDatabase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Database",
    "typeScriptTag": "database",
    "description": "Retrieve a database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "An identifier for the Notion database."
      },
      {
        "name": "notionVersion",
        "schema": "string",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/databases/{database_id}",
    "method": "updateDatabase",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Database",
    "typeScriptTag": "database",
    "description": "Update a database",
    "parameters": [
      {
        "name": "databaseId",
        "schema": "string",
        "required": true,
        "description": "identifier for a Notion database"
      },
      {
        "name": "notionVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "title",
        "schema": "array",
        "description": ""
      },
      {
        "name": "description",
        "schema": "array",
        "description": ""
      },
      {
        "name": "properties",
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/users",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List all users",
    "parameters": [
      {
        "name": "startCursor",
        "schema": "string",
        "description": "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of items from the full list desired in the response. Maximum: 100"
      },
      {
        "name": "notionVersion",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/users/{user_id}",
    "method": "getUserById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion user"
      },
      {
        "name": "notionVersion",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/users/me",
    "method": "getTokenBotUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Retrieve your token's bot user",
    "parameters": [
      {
        "name": "notionVersion",
        "schema": "string",
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
      }
    ]
  },
  {
    "url": "/v1/comments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comment",
    "typeScriptTag": "comment",
    "description": "Retrieve comments",
    "parameters": [
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "blockId",
        "schema": "string",
        "required": true,
        "description": "Identifier for a Notion block or page"
      },
      {
        "name": "startCursor",
        "schema": "string",
        "description": "If supplied, this endpoint will return a page of results starting after the cursor provided. If not supplied, this endpoint will return the first page of results."
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "The number of items from the full list desired in the response. Maximum: 100"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/comments",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comment",
    "typeScriptTag": "comment",
    "description": "Create comment",
    "parameters": [
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discussion_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rich_text",
        "schema": "string",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/search",
    "method": "byTitle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search by title",
    "parameters": [
      {
        "name": "notionVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filter",
        "schema": "object",
        "description": ""
      },
      {
        "name": "start_cursor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page_size",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Notion API"
      apiBaseUrl="https://api.notion.com"
      apiVersion="1"
      endpoints={14}
      sdkMethods={20}
      schemas={0}
      parameters={78}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notion/openapi.yaml"
    />
  );
}
  