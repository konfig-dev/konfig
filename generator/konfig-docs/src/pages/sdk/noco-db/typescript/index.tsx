import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NocoDbTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="noco-db-typescript-sdk"
      metaDescription={`Turn software consumers into software producers within each organisation.`}
      company="NocoDB"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/logo.png"
      companyKebabCase="noco-db"
      clientNameCamelCase="nocoDb"
      homepage="nocodb.com"
      lastUpdated={new Date("2024-03-25T04:39:03.984Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["database","airtable","no_code","developer_tools","spreadsheet"]}
      methods={[
  {
    "url": "/api/v2/meta/bases/{baseId}/users",
    "method": "listBaseUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "List Base Users",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/users",
    "method": "addBaseUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Create Base User",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "roles",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLES"
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
    "url": "/api/v2/meta/bases/{baseId}/info",
    "method": "getInfoById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Get Base info",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/users/{userId}",
    "method": "deleteBaseUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Delete Base User",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/users/{userId}",
    "method": "updateBaseUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Update Base User",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "roles",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLES"
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
    "url": "/api/v2/meta/bases/{baseId}/visibility-rules",
    "method": "getUiAcl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Get UI ACL",
    "parameters": [
      {
        "name": "includeM2M",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/visibility-rules",
    "method": "createUiAcl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Create UI ACL",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/duplicate/{baseId}/{sourceId}",
    "method": "duplicatePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Duplicate Base Source",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "baseId",
        "schema": "string",
        "required": true,
        "description": "Unique Base ID",
        "example": "string"
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": false,
        "description": "Unique Source ID",
        "example": "string"
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "base",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/duplicate/{baseId}",
    "method": "duplicateBasePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Duplicate Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "baseId",
        "schema": "string",
        "required": true,
        "description": "Unique Base ID",
        "example": "string"
      },
      {
        "name": "options",
        "schema": "object",
        "description": ""
      },
      {
        "name": "base",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}",
    "method": "removeBase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Delete Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Get Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Base"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}",
    "method": "updateBaseMeta",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Update Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "My Base"
      },
      {
        "name": "color",
        "schema": "string",
        "description": "",
        "example": "#24716E"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "status",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "linked_db_project_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 1
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
    "url": "/api/v2/meta/bases/{baseId}/user",
    "method": "updateMetaUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Base user meta update",
    "parameters": [
      {
        "name": "starred",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "hidden",
        "schema": "undefined",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/sources/{sourceId}",
    "method": "deleteDetails",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Delete Source",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/sources/{sourceId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Get Source",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Source"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/sources/{sourceId}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Update Source",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "alias",
        "schema": "string",
        "description": "",
        "example": "sakila"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "mysql2"
      },
      {
        "name": "config",
        "schema": "object",
        "description": ""
      },
      {
        "name": "inflection_column",
        "schema": "string",
        "description": "",
        "example": "camelize"
      },
      {
        "name": "inflection_table",
        "schema": "string",
        "description": "",
        "example": "camelize"
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
    "url": "/api/v2/meta/bases/:baseId/sources/:sourceId/sqlView",
    "method": "createSqlView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create sql view",
    "parameters": [
      {
        "name": "view_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "view_definition",
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
    "url": "/api/v2/meta/bases/{baseId}/sources/{sourceId}/share/erd",
    "method": "deleteErdShare",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/sources/{sourceId}/share/erd",
    "method": "createErdShare",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "share ERD view",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Source"
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/shared",
    "method": "deleteSharedBase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Delete Base Shared Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/shared",
    "method": "getSharedBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Get Base Shared Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/shared",
    "method": "updateSharedBase",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Update Base Shared Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "password123"
      },
      {
        "name": "roles",
        "schema": "string",
        "description": "",
        "example": "editor"
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
    "url": "/api/v2/meta/bases/{baseId}/shared",
    "method": "createSharedBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Create Base Shared Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "password123"
      },
      {
        "name": "roles",
        "schema": "string",
        "description": "",
        "example": "editor"
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
    "url": "/api/v2/meta/bases/{baseId}/cost",
    "method": "calculateCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Base Cost",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/tables",
    "method": "listTables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "List Tables",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "page",
        "schema": "number",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeM2M",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Table List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/tables",
    "method": "createNewTable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "Create Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Table"
      },
      {
        "name": "columns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "meta",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": {}
      },
      {
        "name": "order",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "table_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my_table"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Table"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}",
    "method": "deleteByTableId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "Delete Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/tables/{tableId}",
    "method": "readByTableId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "Read Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Table"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}",
    "method": "updateMeta",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "Update Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Users"
      },
      {
        "name": "table_name",
        "schema": "string",
        "description": "",
        "example": "users"
      },
      {
        "name": "base_id",
        "schema": "string",
        "description": "",
        "example": "p_124hhlkbeasewh"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
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
    "url": "/api/v2/meta/duplicate/{baseId}/table/{tableId}",
    "method": "duplicateTablePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "Duplicate Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "baseId",
        "schema": "string",
        "required": true,
        "description": "Unique Base ID",
        "example": "string"
      },
      {
        "name": "tableId",
        "schema": "string",
        "required": true,
        "description": "Unique Table ID",
        "example": "string"
      },
      {
        "name": "options",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/{sourceId}/tables",
    "method": "getTables",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Tables",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "page",
        "schema": "number",
        "description": ""
      },
      {
        "name": "pageSize",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "includeM2M",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Table List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/{sourceId}/tables",
    "method": "createTable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "My Table"
      },
      {
        "name": "columns",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "meta",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": {}
      },
      {
        "name": "order",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "table_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my_table"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Table"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/reorder",
    "method": "updateTableOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table",
    "typeScriptTag": "dbTable",
    "description": "Reorder Table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "order",
        "schema": "number",
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
    "url": "/api/v2/meta/tables/{tableId}/columns",
    "method": "createNewColumn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Create Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Title"
      },
      {
        "name": "ai",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "au",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "source_id",
        "schema": "string",
        "description": "",
        "example": "ds_krsappzu9f8vmo"
      },
      {
        "name": "cc",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "cdf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clen",
        "schema": "string",
        "description": "",
        "example": "45"
      },
      {
        "name": "column_name",
        "schema": "string",
        "description": "",
        "example": "title"
      },
      {
        "name": "cop",
        "schema": "string",
        "description": "",
        "example": "2"
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2023-03-02 13:14:16"
      },
      {
        "name": "csn",
        "schema": "string",
        "description": "",
        "example": "utf8mb4"
      },
      {
        "name": "ct",
        "schema": "string",
        "description": "",
        "example": "varchar(45)"
      },
      {
        "name": "deleted",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dt",
        "schema": "string",
        "description": "",
        "example": "varchar"
      },
      {
        "name": "dtx",
        "schema": "string",
        "description": "",
        "example": "specificType"
      },
      {
        "name": "dtxp",
        "schema": "string",
        "description": "",
        "example": "45"
      },
      {
        "name": "dtxs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fk_model_id",
        "schema": "string",
        "description": "",
        "example": "md_yvwvbt2i78rgcm"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "cl_0j9gv0oi8vjy46"
      },
      {
        "name": "meta",
        "schema": "string",
        "description": ""
      },
      {
        "name": "np",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ns",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 2
      },
      {
        "name": "pk",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "base_id",
        "schema": "string",
        "description": "",
        "example": "p_01clqvzik3izk6"
      },
      {
        "name": "pv",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "rqd",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "system",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "uidt",
        "schema": "string",
        "description": "",
        "example": "SingleLineText"
      },
      {
        "name": "un",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "unique",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": "",
        "example": "2023-03-02 13:14:16"
      },
      {
        "name": "validate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "virtual",
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
      }
    ]
  },
  {
    "url": "/api/v2/meta/columns/{columnId}",
    "method": "deleteByColumnId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Delete Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
      }
    ]
  },
  {
    "url": "/api/v2/meta/columns/{columnId}",
    "method": "getColumnById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Get Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
      }
    ]
  },
  {
    "url": "/api/v2/meta/columns/{columnId}",
    "method": "updateByColumnId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Update Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Title"
      },
      {
        "name": "ai",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "au",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "source_id",
        "schema": "string",
        "description": "",
        "example": "ds_krsappzu9f8vmo"
      },
      {
        "name": "cc",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "cdf",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clen",
        "schema": "string",
        "description": "",
        "example": "45"
      },
      {
        "name": "column_name",
        "schema": "string",
        "description": "",
        "example": "title"
      },
      {
        "name": "cop",
        "schema": "string",
        "description": "",
        "example": "2"
      },
      {
        "name": "created_at",
        "schema": "string",
        "description": "",
        "example": "2023-03-02 13:14:16"
      },
      {
        "name": "csn",
        "schema": "string",
        "description": "",
        "example": "utf8mb4"
      },
      {
        "name": "ct",
        "schema": "string",
        "description": "",
        "example": "varchar(45)"
      },
      {
        "name": "deleted",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dt",
        "schema": "string",
        "description": "",
        "example": "varchar"
      },
      {
        "name": "dtx",
        "schema": "string",
        "description": "",
        "example": "specificType"
      },
      {
        "name": "dtxp",
        "schema": "string",
        "description": "",
        "example": "45"
      },
      {
        "name": "dtxs",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fk_model_id",
        "schema": "string",
        "description": "",
        "example": "md_yvwvbt2i78rgcm"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "cl_0j9gv0oi8vjy46"
      },
      {
        "name": "meta",
        "schema": "string",
        "description": ""
      },
      {
        "name": "np",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ns",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 2
      },
      {
        "name": "pk",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "base_id",
        "schema": "string",
        "description": "",
        "example": "p_01clqvzik3izk6"
      },
      {
        "name": "pv",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "rqd",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "system",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "uidt",
        "schema": "string",
        "description": "",
        "example": "SingleLineText"
      },
      {
        "name": "un",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "unique",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "updated_at",
        "schema": "string",
        "description": "",
        "example": "2023-03-02 13:14:16"
      },
      {
        "name": "validate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "virtual",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Column"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/columns/{columnId}/primary",
    "method": "setPrimaryValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Create Primary Value",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/tables/{tableId}/views",
    "method": "listTableViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "List Views",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}",
    "method": "deleteViewById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Delete View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/views/{viewId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Grid View 1"
      },
      {
        "name": "uuid",
        "schema": "string",
        "description": "",
        "example": "e2457bbf-e29c-4fec-866e-fe3b01dba57f"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "password123"
      },
      {
        "name": "lock_type",
        "schema": "string",
        "description": "",
        "example": "collaborative"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "show_system_fields",
        "schema": "undefined",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/show-all",
    "method": "showAllColumns",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Show All Columns In View",
    "parameters": [
      {
        "name": "ignoreIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/views/{viewId}/hide-all",
    "method": "hideAllColumns",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Hide All Columns In View",
    "parameters": [
      {
        "name": "ignoreIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/tables/{tableId}/share",
    "method": "listSharedViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View Share",
    "typeScriptTag": "dbViewShare",
    "description": "List Shared Views",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Shared View List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/share",
    "method": "deleteSharedView",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB View Share",
    "typeScriptTag": "dbViewShare",
    "description": "Delete Shared View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/views/{viewId}/share",
    "method": "updateSharedView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View Share",
    "typeScriptTag": "dbViewShare",
    "description": "Update Shared View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "password",
        "schema": "undefined",
        "description": "",
        "example": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Shared View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/share",
    "method": "createSharedView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View Share",
    "typeScriptTag": "dbViewShare",
    "description": "Create Shared View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Shared View Request"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/columns",
    "method": "listByView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View Column",
    "typeScriptTag": "dbViewColumn",
    "description": "List Columns In View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Column List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/columns",
    "method": "createNewColumn",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View Column",
    "typeScriptTag": "dbViewColumn",
    "description": "Create Column in View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "fk_column_id",
        "schema": "string",
        "description": "",
        "example": "string"
      },
      {
        "name": "show",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Column"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/columns/{columnId}",
    "method": "updateColumn",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View Column",
    "typeScriptTag": "dbViewColumn",
    "description": "Update View Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "show",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "order",
        "schema": "number",
        "description": "",
        "example": 1
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
    "url": "/api/v2/meta/views/{viewId}/sorts",
    "method": "getAllSorts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Sort",
    "typeScriptTag": "dbTableSort",
    "description": "List View Sorts",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Sort List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/sorts",
    "method": "updateViewSort",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Sort",
    "typeScriptTag": "dbTableSort",
    "description": "Update View Sort",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/sorts/{sortId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB Table Sort",
    "typeScriptTag": "dbTableSort",
    "description": "Delete Sort",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/sorts/{sortId}",
    "method": "getSortById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Sort",
    "typeScriptTag": "dbTableSort",
    "description": "Get Sort",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Sort"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/sorts/{sortId}",
    "method": "updateSortById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB Table Sort",
    "typeScriptTag": "dbTableSort",
    "description": "Update Sort",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "fk_column_id",
        "schema": "string",
        "description": "",
        "example": "string"
      },
      {
        "name": "direction",
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
    "url": "/api/v2/meta/views/{viewId}/filters",
    "method": "getViewData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Filter",
    "typeScriptTag": "dbTableFilter",
    "description": "Get View Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Filter List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/views/{viewId}/filters",
    "method": "createViewFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Filter",
    "typeScriptTag": "dbTableFilter",
    "description": "Create View Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "comparison_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comparison_sub_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fk_column_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_parent_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "is_group",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "logical_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Filter"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/hooks/{hookId}/filters",
    "method": "getHookFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Webhook Filter",
    "typeScriptTag": "dbTableWebhookFilter",
    "description": "Get Hook Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Filter List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/hooks/{hookId}/filters",
    "method": "createNewFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Webhook Filter",
    "typeScriptTag": "dbTableWebhookFilter",
    "description": "Create Hook Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "comparison_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comparison_sub_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fk_column_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_parent_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "is_group",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "logical_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Filter"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/hooks/{hookId}/logs",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Webhook Logs",
    "typeScriptTag": "dbTableWebhookLogs",
    "description": "List Hook Logs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Hook Log List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/filters/{filterId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB Table Filter",
    "typeScriptTag": "dbTableFilter",
    "description": "Delete Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/filters/{filterId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Filter",
    "typeScriptTag": "dbTableFilter",
    "description": "Get Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Filter"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/filters/{filterId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB Table Filter",
    "typeScriptTag": "dbTableFilter",
    "description": "Update Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "comparison_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comparison_sub_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fk_column_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_parent_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "is_group",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "logical_op",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "undefined",
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
    "url": "/api/v2/meta/filters/{filterGroupId}/children",
    "method": "getChildren",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Filter",
    "typeScriptTag": "dbTableFilter",
    "description": "Get Filter Group Children",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Filter List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/grids",
    "method": "createGridView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Create Grid View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My View"
      },
      {
        "name": "type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "copy_from_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_grp_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_geo_data_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/forms",
    "method": "createFormView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Create Form View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My View"
      },
      {
        "name": "type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "copy_from_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_grp_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_geo_data_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/forms/{formViewId}",
    "method": "getFormById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Get Form",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Form"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/forms/{formViewId}",
    "method": "updateFormView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Form View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "banner_image_url",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "email",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "heading",
        "schema": "string",
        "description": "",
        "example": "My Form"
      },
      {
        "name": "logo_url",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "redirect_after_secs",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "redirect_url",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "show_blank_form",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "subheading",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "submit_another_form",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "success_msg",
        "schema": "undefined",
        "description": "",
        "example": "string"
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
    "url": "/api/v2/meta/form-columns/{formViewColumnId}",
    "method": "updateFormColumn",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Form Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "description",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "help",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "label",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
      },
      {
        "name": "order",
        "schema": "number",
        "description": ""
      },
      {
        "name": "required",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "show",
        "schema": "undefined",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Form Column Request"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/grids/{viewId}",
    "method": "updateGridView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Grid View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "row_height",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
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
    "url": "/api/v2/meta/grids/{gridId}/grid-columns",
    "method": "listGridColumns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "List Grid Columns",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/grid-columns/{columnId}",
    "method": "updateGridColumnPatch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Grid Column",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "fk_column_id",
        "schema": "string",
        "description": "",
        "example": "string"
      },
      {
        "name": "help",
        "schema": "string",
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "description": "",
        "example": "My Column"
      },
      {
        "name": "width",
        "schema": "string",
        "description": "",
        "example": "200px"
      },
      {
        "name": "group_by",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "group_by_order",
        "schema": "number",
        "description": "",
        "example": 1
      },
      {
        "name": "group_by_sort",
        "schema": "undefined",
        "description": "",
        "example": "string"
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
    "url": "/api/v2/meta/tables/{tableId}/galleries",
    "method": "createGalleryView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Create Gallery View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My View"
      },
      {
        "name": "type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "copy_from_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_grp_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_geo_data_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/galleries/{galleryViewId}",
    "method": "getGalleryView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Get Gallery View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Gallery"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/galleries/{galleryViewId}",
    "method": "updateGalleryViewData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Gallery View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "fk_cover_image_col_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
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
    "url": "/api/v2/meta/tables/{tableId}/kanbans",
    "method": "createKanbanView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Create Kanban View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My View"
      },
      {
        "name": "type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "copy_from_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_grp_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_geo_data_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/kanbans/{kanbanViewId}",
    "method": "kanbanViewGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Get Kanban View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Kanban"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/kanbans/{kanbanViewId}",
    "method": "updateKanbanView",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Kanban View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "fk_grp_col_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_cover_image_col_id",
        "schema": "undefined",
        "description": "",
        "example": "string"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
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
    "url": "/api/v2/meta/tables/{tableId}/maps",
    "method": "createMapView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Create Map View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My View"
      },
      {
        "name": "type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "copy_from_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_grp_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "fk_geo_data_col_id",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for View"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/maps/{mapViewId}",
    "method": "getMapViewById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Get Map View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Map"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/maps/{mapViewId}",
    "method": "updateMapViewData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB View",
    "typeScriptTag": "dbView",
    "description": "Update Map View",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "fk_geo_data_col_id",
        "schema": "string",
        "description": "",
        "example": "cl_8iw2o4ejzvdyna"
      },
      {
        "name": "meta",
        "schema": "undefined",
        "description": "",
        "example": {}
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
    "url": "/api/v2/meta/bases/{baseId}/meta-diff",
    "method": "metaDiffGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Meta Diff",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/meta-diff",
    "method": "syncMetaDiff",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Sync Meta",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/meta-diff/{sourceId}",
    "method": "getMetaDiff",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Source Meta Diff",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/meta-diff/{sourceId}",
    "method": "syncMetaDiff",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Synchronise Source Meta",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/has-empty-or-null-filters",
    "method": "checkEmptyFilters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "List Empty & Null Filter",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/group/{columnId}",
    "method": "sharedViewGroupDataList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "List Shared View Grouped Data",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Which fields to be shown"
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "The result will be sorted based on `sort` query"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Extra filtering"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset in rows"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit in rows"
      },
      {
        "name": "sortArrJson",
        "schema": "string",
        "description": "Used for multiple sort queries"
      },
      {
        "name": "filterArrJson",
        "schema": "string",
        "description": "Used for multiple filter queries"
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
    "url": "/api/v2/public/calendar-view/{sharedViewUuid}/countByDate",
    "method": "calendarViewCountByDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Count of Records in Dates in Calendar View",
    "parameters": [
      {
        "name": "sort",
        "schema": "array",
        "description": ""
      },
      {
        "name": "where",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/rows",
    "method": "listSharedRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "List Shared View Rows",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Which fields to be shown"
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "The result will be sorted based on `sort` query"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Extra filtering"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset in rows"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit in rows"
      },
      {
        "name": "sortArrJson",
        "schema": "string",
        "description": "Used for multiple sort queries"
      },
      {
        "name": "filterArrJson",
        "schema": "string",
        "description": "Used for multiple filter queries"
      },
      {
        "name": "pks",
        "schema": "string",
        "description": "Comma separated list of pks"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Shared View List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/rows",
    "method": "createSharedViewRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Create Share View Row",
    "parameters": [
      {
        "name": "xcPassword",
        "schema": "string",
        "description": "Shared view password"
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
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/groupby",
    "method": "listSharedViewRowsGroupBy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "List Shared View Rows",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Which fields to be shown"
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "The result will be sorted based on `sort` query"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Extra filtering"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset in rows"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit in rows"
      },
      {
        "name": "sortArrJson",
        "schema": "string",
        "description": "Used for multiple sort queries"
      },
      {
        "name": "filterArrJson",
        "schema": "string",
        "description": "Used for multiple filter queries"
      },
      {
        "name": "columnName",
        "schema": "string",
        "description": "Columns to group by"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Shared View List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/rows/{rowId}/{relationType}/{columnName}",
    "method": "listNestedData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "List Nested List Data",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Which fields to be shown"
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "The result will be sorted based on `sort` query"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Extra filtering"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset in rows"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit in rows"
      },
      {
        "name": "sortArrJson",
        "schema": "string",
        "description": "Used for multiple sort queries"
      },
      {
        "name": "filterArrJson",
        "schema": "string",
        "description": "Used for multiple filter queries"
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
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/rows/export/{type}",
    "method": "rowsExportType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Export Rows in Share View",
    "parameters": [],
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
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/nested/{columnName}",
    "method": "nestedDataRelationList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "List Nested Data Relation",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Which fields to be shown"
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "The result will be sorted based on `sort` query"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Extra filtering"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset in rows"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit in rows"
      },
      {
        "name": "sortArrJson",
        "schema": "string",
        "description": "Used for multiple sort queries"
      },
      {
        "name": "filterArrJson",
        "schema": "string",
        "description": "Used for multiple filter queries"
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
    "url": "/api/v2/public/shared-base/{sharedBaseUuid}/meta",
    "method": "sharedBaseMetaGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Get Share Source Meta",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/public/shared-view/{sharedViewUuid}/meta",
    "method": "viewMetaGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Get Share View Meta",
    "parameters": [],
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
    "url": "/api/v2/public/shared-erd/{sharedErdUuid}/meta",
    "method": "sharedErdMetaGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v2/meta/audits/comments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "List Comments in Audit",
    "parameters": [
      {
        "name": "rowId",
        "schema": "string",
        "required": true,
        "description": "Row ID",
        "example": "10"
      },
      {
        "name": "fkModelId",
        "schema": "string",
        "required": true,
        "description": "Foreign Key to Model",
        "example": "string"
      },
      {
        "name": "commentsOnly",
        "schema": "boolean",
        "description": "Is showing comments only?",
        "example": true
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/audits/comments",
    "method": "createNewCommentRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Comment Rows",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is the comment for the row"
      },
      {
        "name": "fk_model_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "md_ehn5izr99m7d45"
      },
      {
        "name": "row_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Audit"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/audits/{auditId}/comment",
    "method": "updateAuditComment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Update Comment in Audit",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is the comment for the row"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/audits/comments/count",
    "method": "countComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Count Comments",
    "parameters": [
      {
        "name": "ids",
        "schema": "undefined",
        "required": true,
        "description": "Comment IDs"
      },
      {
        "name": "fkModelId",
        "schema": "string",
        "required": true,
        "description": "Foreign Key to Model",
        "example": "string"
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/audits",
    "method": "listAuditsInBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "List Audits in Base",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/audits/rows/{rowId}/update",
    "method": "updateAuditRow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Update Audit Row",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "column_name",
        "schema": "string",
        "description": "",
        "example": "baz"
      },
      {
        "name": "fk_model_id",
        "schema": "string",
        "description": "",
        "example": "md_ehn5izr99m7d45"
      },
      {
        "name": "row_id",
        "schema": "string",
        "description": "",
        "example": "rec0Adp9PMG9o7uJy"
      },
      {
        "name": "prev_value",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Audit"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/hooks",
    "method": "listTableHooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Webhook",
    "typeScriptTag": "dbTableWebhook",
    "description": "List Table Hooks",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Hook List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/hooks",
    "method": "createHook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Webhook",
    "typeScriptTag": "dbTableWebhook",
    "description": "Create Table Hook",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Webhook"
      },
      {
        "name": "description",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "active",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "async",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": true
      },
      {
        "name": "env",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "all"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "after"
      },
      {
        "name": "fk_model_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "md_rsu68aqjsbyqtl"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "string"
      },
      {
        "name": "notification",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "operation",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "insert"
      },
      {
        "name": "retries",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "retry_interval",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 60000
      },
      {
        "name": "timeout",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 60000
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "condition",
        "schema": "undefined",
        "required": false,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Hook"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/hooks/test",
    "method": "testHookCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Webhook",
    "typeScriptTag": "dbTableWebhook",
    "description": "Test Hook",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "hook",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "title": "My Webhook",
          "description": "This is my hook description",
          "active": 0,
          "async": 0,
          "env": "all",
          "event": "after",
          "fk_model_id": "md_rsu68aqjsbyqtl",
          "id": "stringX",
          "notification": "{\"type\":\"URL\",\"payload\":{\"method\":\"POST\",\"body\":\"{{ json data }}\",\"headers\":[{}],\"parameters\":[{}],\"auth\":\"\",\"path\":\"http://example.com\"}}",
          "null": null,
          "operation": "insert",
          "retries": 10,
          "retry_interval": 60000,
          "timeout": 60000,
          "condition": false
        }
      },
      {
        "name": "payload",
        "schema": "undefined",
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
    "url": "/api/v2/meta/tables/{tableId}/hooks/samplePayload/{operation}/{version}",
    "method": "getSamplePayload",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Webhook",
    "typeScriptTag": "dbTableWebhook",
    "description": "Get Sample Hook Payload",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/hooks/{hookId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DB Table Webhook",
    "typeScriptTag": "dbTableWebhook",
    "description": "Delete Hook",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/hooks/{hookId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "DB Table Webhook",
    "typeScriptTag": "dbTableWebhook",
    "description": "Update Hook",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "My Webhook"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This is my hook description"
      },
      {
        "name": "version",
        "schema": "string",
        "description": "",
        "example": "v2"
      },
      {
        "name": "active",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "async",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "env",
        "schema": "string",
        "description": "",
        "example": "all"
      },
      {
        "name": "event",
        "schema": "string",
        "description": "",
        "example": "after"
      },
      {
        "name": "fk_model_id",
        "schema": "string",
        "description": "",
        "example": "md_rsu68aqjsbyqtl"
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "string"
      },
      {
        "name": "notification",
        "schema": "object",
        "description": ""
      },
      {
        "name": "operation",
        "schema": "string",
        "description": "",
        "example": "insert"
      },
      {
        "name": "retries",
        "schema": "number",
        "description": "",
        "example": 10
      },
      {
        "name": "retry_interval",
        "schema": "number",
        "description": "",
        "example": 60000
      },
      {
        "name": "timeout",
        "schema": "number",
        "description": "",
        "example": 60000
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Hook"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/plugins",
    "method": "listAllPlugins",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plugin",
    "typeScriptTag": "plugin",
    "description": "List Plugins",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/plugins/webhook",
    "method": "webhookListPlugins",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plugin",
    "typeScriptTag": "plugin",
    "description": "Webhook List Plugins",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/plugins/{pluginTitle}/status",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plugin",
    "typeScriptTag": "plugin",
    "description": "Get Plugin Status",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/plugins/test",
    "method": "testConfigurationPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Plugin",
    "typeScriptTag": "plugin",
    "description": "Test Plugin",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "input",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Email"
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
    "url": "/api/v2/meta/plugins/{pluginId}",
    "method": "getDataById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Plugin",
    "typeScriptTag": "plugin",
    "description": "Get Plugin",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Plugin"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/plugins/{pluginId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Plugin",
    "typeScriptTag": "plugin",
    "description": "Update Plugin",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "active",
        "schema": "undefined",
        "description": "",
        "example": true
      },
      {
        "name": "input",
        "schema": "undefined",
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
    "url": "/api/v2/meta/connection/test",
    "method": "testDbConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Test DB Connection",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "client",
        "schema": "string",
        "description": "",
        "example": "mysql2"
      },
      {
        "name": "connection",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/connection/select",
    "method": "selectConnectionPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/nocodb/info",
    "method": "getAppInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Get App Info",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/axiosRequestMake",
    "method": "makeAxiosRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Axios Request",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/cache",
    "method": "clearNocoCache",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Delete Cache",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/cache",
    "method": "getAllNocoCache",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Utils",
    "typeScriptTag": "utils",
    "description": "Get Cache",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/api-tokens",
    "method": "listInBase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Token",
    "typeScriptTag": "apiToken",
    "description": "List API Tokens in Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for API Token List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/api-tokens",
    "method": "createInBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Token",
    "typeScriptTag": "apiToken",
    "description": "Create API Token",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "This API Token is for ABC application"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for API Token"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/api-tokens/{token}",
    "method": "deleteInBase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Token",
    "typeScriptTag": "apiToken",
    "description": "Delete API Token",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/storage/upload",
    "method": "uploadAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Storage",
    "typeScriptTag": "storage",
    "description": "Attachment Upload",
    "parameters": [
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "Target File Path",
        "example": "download/noco/jango_fett/Table1/attachment/uVbjPVQxC_SSfs8Ctx.jpg"
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mimetype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "path",
        "schema": "string",
        "description": ""
      },
      {
        "name": "size",
        "schema": "number",
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
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v2/storage/upload-by-url",
    "method": "uploadByUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Storage",
    "typeScriptTag": "storage",
    "description": "Attachment Upload by URL",
    "parameters": [
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "Target File Path",
        "example": "download/noco/jango_fett/Table1/attachment/c7z_UF8sZBgJUxMjpN.jpg"
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/users/{userId}/resend-invite",
    "method": "resendInviteUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Auth",
    "typeScriptTag": "auth",
    "description": "Resend User Invitation",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/tables/{tableId}/columns/hash",
    "method": "getTableColumnsHash",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Get columns hash for table",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/tables/{tableId}/columns/bulk",
    "method": "bulkCreateUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DB Table Column",
    "typeScriptTag": "dbTableColumn",
    "description": "Bulk create-update-delete columns",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      },
      {
        "name": "hash",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ops",
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
      }
    ]
  },
  {
    "url": "/api/v2/tables/{tableId}/records",
    "method": "deleteByArray",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Delete Table Records",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/records",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "List Table Records",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "description": "Allows you to specify the fields that you wish to include in your API response. By default, all the fields are included in the response.\n\nExample: `fields=field1,field2` will include only 'field1' and 'field2' in the API response. \n\nPlease note that it's essential not to include spaces between field names in the comma-separated list."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Allows you to specify the fields by which you want to sort the records in your API response. By default, sorting is done in ascending order for the designated fields. To sort in descending order, add a '-' symbol before the field name.\n\nExample: `sort=field1,-field2` will sort the records first by 'field1' in ascending order and then by 'field2' in descending order.\n\nIf `viewId` query parameter is also included, the sort included here will take precedence over any sorting configuration defined in the view.\n\nPlease note that it's essential not to include spaces between field names in the comma-separated list."
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Enables you to define specific conditions for filtering records in your API response. Multiple conditions can be combined using logical operators such as 'and' and 'or'. Each condition consists of three parts: a field name, a comparison operator, and a value.\n\nExample: `where=(field1,eq,value1)~and(field2,eq,value2)` will filter records where 'field1' is equal to 'value1' AND 'field2' is equal to 'value2'. \n\nYou can also use other comparison operators like 'ne' (not equal), 'gt' (greater than), 'lt' (less than), and more, to create complex filtering rules.\n\nIf `viewId` query parameter is also included, then the filters included here will be applied over the filtering configuration defined in the view. \n\nPlease remember to maintain the specified format, and do not include spaces between the different condition components"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Enables you to control the pagination of your API response by specifying the number of records you want to skip from the beginning of the result set. The default value for this parameter is set to 0, meaning no records are skipped by default.\n\nExample: `offset=25` will skip the first 25 records in your API response, allowing you to access records starting from the 26th position.\n\nPlease note that the 'offset' value represents the number of records to exclude, not an index value, so an offset of 25 will skip the first 25 records."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Enables you to set a limit on the number of records you want to retrieve in your API response. By default, your response includes all the available records, but by using this parameter, you can control the quantity you receive.\n\nExample: `limit=100` will constrain your response to the first 100 records in the dataset."
      },
      {
        "name": "viewId",
        "schema": "string",
        "description": "***View Identifier***. Allows you to fetch records that are currently visible within a specific view. API retrieves records in the order they are displayed if the SORT option is enabled within that view.\n\nAdditionally, if you specify a `sort` query parameter, it will take precedence over any sorting configuration defined in the view. If you specify a `where` query parameter, it will be applied over the filtering configuration defined in the view. \n\nBy default, all fields, including those that are disabled within the view, are included in the response. To explicitly specify which fields to include or exclude, you can use the `fields` query parameter to customize the output according to your requirements."
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/records",
    "method": "updatePatchTableRecords",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Update Table Records",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/records",
    "method": "createNewRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Create Table Records",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/records/{recordId}",
    "method": "readById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Read Table Record",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "description": "Allows you to specify the fields that you wish to include in your API response. By default, all the fields are included in the response.\n\nExample: `fields=field1,field2` will include only 'field1' and 'field2' in the API response. \n\nPlease note that it's essential not to include spaces between field names in the comma-separated list."
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/records/count",
    "method": "getCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Count Table Records",
    "parameters": [
      {
        "name": "where",
        "schema": "string",
        "description": "Enables you to define specific conditions for filtering record count in your API response. Multiple conditions can be combined using logical operators such as 'and' and 'or'. Each condition consists of three parts: a field name, a comparison operator, and a value.\n\nExample: `where=(field1,eq,value1)~and(field2,eq,value2)` will filter records where 'field1' is equal to 'value1' AND 'field2' is equal to 'value2'. \n\nYou can also use other comparison operators like 'ne' (not equal), 'gt' (greater than), 'lt' (less than), and more, to create complex filtering rules.\n\nIf `viewId` query parameter is also included, then the filters included here will be applied over the filtering configuration defined in the view. \n\nPlease remember to maintain the specified format, and do not include spaces between the different condition components"
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/links/{linkFieldId}/records/{recordId}",
    "method": "unlinkRecords",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Unlink Records",
    "parameters": [
      {
        "name": "recordId",
        "schema": "string",
        "required": true,
        "description": "**Record Identifier** corresponding to the record in this table for which links are being removed.",
        "example": "RECORDID"
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/links/{linkFieldId}/records/{recordId}",
    "method": "listLinkedRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "List Linked Records",
    "parameters": [
      {
        "name": "recordId",
        "schema": "string",
        "required": true,
        "description": "**Record Identifier** corresponding to the record in this table for which linked records are being fetched.",
        "example": "RECORDID"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "Allows you to specify the fields that you wish to include from the linked records in your API response. By default, only Primary Key and associated display value field is included.\n\nExample: `fields=field1,field2` will include only 'field1' and 'field2' in the API response. \n\nPlease note that it's essential not to include spaces between field names in the comma-separated list."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Allows you to specify the fields by which you want to sort linked records in your API response. By default, sorting is done in ascending order for the designated fields. To sort in descending order, add a '-' symbol before the field name.\n\nExample: `sort=field1,-field2` will sort the records first by 'field1' in ascending order and then by 'field2' in descending order.\n\nPlease note that it's essential not to include spaces between field names in the comma-separated list."
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Enables you to define specific conditions for filtering linked records in your API response. Multiple conditions can be combined using logical operators such as 'and' and 'or'. Each condition consists of three parts: a field name, a comparison operator, and a value.\n\nExample: `where=(field1,eq,value1)~and(field2,eq,value2)` will filter linked records where 'field1' is equal to 'value1' AND 'field2' is equal to 'value2'. \n\nYou can also use other comparison operators like 'ne' (not equal), 'gt' (greater than), 'lt' (less than), and more, to create complex filtering rules.\n\nPlease remember to maintain the specified format, and do not include spaces between the different condition components"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Enables you to control the pagination of your API response by specifying the number of linked records you want to skip from the beginning of the result set. The default value for this parameter is set to 0, meaning no linked records are skipped by default.\n\nExample: `offset=25` will skip the first 25 linked records in your API response, allowing you to access linked records starting from the 26th position.\n\nPlease note that the 'offset' value represents the number of linked records to exclude, not an index value, so an offset of 25 will skip the first 25 linked records."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Enables you to set a limit on the number of linked records you want to retrieve in your API response. By default, your response includes all the available linked records, but by using this parameter, you can control the quantity you receive.\n\nExample: `limit=100` will constrain your response to the first 100 linked records in the dataset."
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/tables/{tableId}/links/{linkFieldId}/records/{recordId}",
    "method": "linkRecordsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Table Records",
    "typeScriptTag": "tableRecords",
    "description": "Link Records",
    "parameters": [
      {
        "name": "recordId",
        "schema": "string",
        "required": true,
        "description": "**Record Identifier** corresponding to the record in this table for which links are being created.",
        "example": "RECORDID"
      },
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases",
    "method": "listBases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "List Bases",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Base List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases",
    "method": "createNewBase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Base",
    "typeScriptTag": "base",
    "description": "Create Base",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Base"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/meta/bases/{baseId}/sources",
    "method": "baseIdSourcesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "List Sources",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
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
    "url": "/api/v2/meta/bases/{baseId}/sources",
    "method": "createNewSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "Create Source",
    "parameters": [
      {
        "name": "xcAuth",
        "schema": "string",
        "required": false,
        "description": "Auth Token is a JWT Token generated based on the logged-in user. By default, the token is only valid for 10 hours. However, you can change the value by defining it using environment variable NC_JWT_EXPIRES_IN."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Source"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v2/public/calendar-view/{sharedViewUuid}",
    "method": "calendarViewListSharedRows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "List Shared View Rows",
    "parameters": [
      {
        "name": "fields",
        "schema": "array",
        "description": "Which fields to be shown"
      },
      {
        "name": "sort",
        "schema": "undefined",
        "description": "The result will be sorted based on `sort` query"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "From Date"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "To Date"
      },
      {
        "name": "where",
        "schema": "string",
        "description": "Extra filtering"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Offset in rows"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit in rows"
      },
      {
        "name": "sortArrJson",
        "schema": "string",
        "description": "Used for multiple sort queries"
      },
      {
        "name": "filterArrJson",
        "schema": "string",
        "description": "Used for multiple filter queries"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Model for Shared View List"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="NocoDB v2"
      apiBaseUrl="http://localhost:8080"
      apiVersion=""
      endpoints={95}
      sdkMethods={233}
      schemas={219}
      parameters={412}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nocodb/openapi.yaml"
      developerDocumentation="docs.nocodb.com/"
    />
  );
}
  