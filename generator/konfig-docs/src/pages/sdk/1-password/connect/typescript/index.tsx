import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function Sdk1PasswordConnectTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="1-password-connect-typescript-sdk"
      metaDescription={`Trusted by more than 100,000 businesses to protect their data, 1Password gives you complete control over passwords and other sensitive business information. 

As an integral layer of the Identity and Access Management (IAM) stack, 1Password protects all employee accounts – even those you aren't aware of. Give employees secure access to any app or service and safely share everything you need to work together – including logins, documents, credit cards, and more – while keeping everything else private.

1Password is easy to deploy and integrates with Azure AD, Okta, OneLogin, and Slack, so you can automatically provision employees using the systems you already trust. It's simple to manage and fits seamlessly into your team's workflow, so you can secure your business without compromising productivity.`}
      company="1Password"
      serviceName="Connect"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/logo.png"
      clientNameCamelCase="onePasswordConnect"
      homepage="1password.com"
      lastUpdated={new Date("2024-03-13T17:47:38.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/favicon.png"
      contactUrl="https://support.1password.com/"
      contactEmail="support@1password.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["security","identity_and_access_management","password_management"]}
      methods={[
  {
    "url": "/activity",
    "method": "getApiRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activity",
    "typeScriptTag": "activity",
    "description": "Retrieve a list of API Requests that have been made.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "How many API Events should be retrieved in a single request.",
        "example": 10,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "How far into the collection of API Events should the response start",
        "example": 50,
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
    "url": "/vaults",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Get all Vaults",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "description": "Filter the Vault collection based on Vault name using SCIM eq filter",
        "example": "name eq \"Some Vault Name\""
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
    "url": "/vaults/{vaultUuid}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vaults",
    "typeScriptTag": "vaults",
    "description": "Get Vault details and metadata",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault to fetch Items from",
        "example": "VAULTUUID"
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
    "url": "/vaults/{vaultUuid}/items",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get all items for inside a Vault",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault to fetch Items from",
        "example": "VAULTUUID"
      },
      {
        "name": "filter",
        "schema": "string",
        "description": "Filter the Item collection based on Item name using SCIM eq filter",
        "example": "title eq \"Some Item Name\""
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
    "url": "/vaults/{vaultUuid}/items",
    "method": "createNewItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Create a new Item",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault to create an Item in",
        "example": "VAULTUUID"
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
    "url": "/vaults/{vaultUuid}/items/{itemUuid}",
    "method": "deleteItemById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Delete an Item",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault the item is in",
        "example": "VAULTUUID"
      },
      {
        "name": "itemUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item to update",
        "example": "ITEMUUID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successfully deleted an item"
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
    "url": "/vaults/{vaultUuid}/items/{itemUuid}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Get the details of an Item",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault to fetch Item from",
        "example": "VAULTUUID"
      },
      {
        "name": "itemUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item to fetch",
        "example": "ITEMUUID"
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
    "url": "/vaults/{vaultUuid}/items/{itemUuid}",
    "method": "updateSubsetAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Update a subset of Item attributes",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault the item is in",
        "example": "VAULTUUID"
      },
      {
        "name": "itemUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item to update",
        "example": "ITEMUUID"
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
    "url": "/vaults/{vaultUuid}/items/{itemUuid}",
    "method": "updateItemDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Items",
    "typeScriptTag": "items",
    "description": "Update an Item",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item's Vault",
        "example": "VAULTUUID"
      },
      {
        "name": "itemUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item to update",
        "example": "ITEMUUID"
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
    "url": "/vaults/{vaultUuid}/items/{itemUuid}/files",
    "method": "getAllFilesInsideItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get all the files inside an Item",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault to fetch Items from",
        "example": "VAULTUUID"
      },
      {
        "name": "itemUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item to fetch files from",
        "example": "ITEMUUID"
      },
      {
        "name": "inlineFiles",
        "schema": "boolean",
        "description": "Tells server to return the base64-encoded file contents in the response.",
        "example": true
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
        "statusCode": "413",
        "description": ""
      }
    ]
  },
  {
    "url": "/vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}",
    "method": "getFileDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get the details of a File",
    "parameters": [
      {
        "name": "vaultUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Vault to fetch Item from",
        "example": "VAULTUUID"
      },
      {
        "name": "itemUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the Item to fetch File from",
        "example": "ITEMUUID"
      },
      {
        "name": "fileUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the File to fetch",
        "example": "FILEUUID"
      },
      {
        "name": "inlineFiles",
        "schema": "boolean",
        "description": "Tells server to return the base64-encoded file contents in the response.",
        "example": true
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
        "statusCode": "413",
        "description": ""
      }
    ]
  },
  {
    "url": "/vaults/{vaultUuid}/items/{itemUuid}/files/{fileUuid}/content",
    "method": "getContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get the content of a File",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/heartbeat",
    "method": "checkLiveness",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Ping the server for liveness",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/health",
    "method": "serverStateCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get state of the server and its dependencies.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/metrics",
    "method": "queryServerMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Metrics",
    "typeScriptTag": "metrics",
    "description": "Query server for exposed Prometheus metrics",
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
      apiTitle="1Password Connect"
      apiBaseUrl="http://localhost:8080/v1"
      apiVersion="1.5.7"
      endpoints={11}
      sdkMethods={16}
      schemas={18}
      parameters={22}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/1-password/connect/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/1-password/connect/openapi.yaml"
      developerDocumentation="developer.1password.com/docs/connect/connect-api-reference/"
    />
  );
}
  