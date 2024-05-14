import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VerifiableTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="verifiable-typescript-sdk"
      metaDescription={`Verifiable is an API-first, provider network management platform built to help healthcare provider and payer organizations speed up network operations, save costs and streamline the provider experience.

Verifiable industry-leading provider data infrastructure connects to thousands of primary sources to deliver real-time provider verification & monitoring to automate the credentialing process - resulting 78% faster turnaround times and millions in added revenue capture.

Verifiable works with innovative healthcare provider and payer organizations like Humana, Lyra Health, Talkspace, Modern Health, Wheel, Grow Therapy, and many others. Verifiable is a proud Y-Combinator company whose investors include Craft Ventures, Highland Capital Partners, Tiger Global, The Altman Fund, Struck Capital, Liquid2 Ventures, 137 Ventures, Cooley and Soma Capital.`}
      company="Verifiable"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/logo.png"
      companyKebabCase="verifiable"
      clientNameCamelCase="verifiable"
      homepage="verifiable.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["health_data","provider_network_management_platform"]}
      methods={[
  {
    "url": "/auth/token/password",
    "method": "authenticateWithPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Password Authentication\n",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "password",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "***"
      },
      {
        "name": "newPassword",
        "schema": "object",
        "required": false,
        "description": "",
        "example": "***"
      },
      {
        "name": "timeToLive",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/auth/password/reset",
    "method": "resetPassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Resets a password\n",
    "parameters": [
      {
        "name": "token",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "***"
      },
      {
        "name": "newPassword",
        "schema": "object",
        "required": true,
        "description": "",
        "example": "***"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/auth/password/requestreset",
    "method": "requestPasswordReset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Requests a password reset\n",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/auth/token/google",
    "method": "googleTokenPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Google Authentication\n",
    "parameters": [
      {
        "name": "code",
        "schema": "object",
        "description": "",
        "example": "***"
      },
      {
        "name": "timeToLive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
        "schema": "object",
        "description": "",
        "example": "***"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/auth/token",
    "method": "listActiveAccessTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "List active access tokens\n",
    "parameters": [
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/auth/token/{tokenId}/invalidate",
    "method": "invalidateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Invalidate an access token\n",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the access token to be invalidated.",
        "example": "TOKENID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/auth/token/invalidate",
    "method": "invalidateMultipleTokens",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Invalidate multiple access tokens\n",
    "parameters": [
      {
        "name": "invalidateCurrent",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "tokenIds",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers",
    "method": "listPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List providers\n",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "If set, the items will be filtered on providers with the specified status."
      },
      {
        "name": "providerName",
        "schema": "string",
        "description": "If set, the items will be filtered on providers with the specified name or alias name."
      },
      {
        "name": "credentialingStatus",
        "schema": "array",
        "description": "If set, the items will be filtered on providers with the specified credentialing status."
      },
      {
        "name": "providerTypeId",
        "schema": "string",
        "description": "If set, the items will be filtered on providers with the specified provider type."
      },
      {
        "name": "npi",
        "schema": "integer",
        "description": "If set, the items will be filtered on providers with the specified npi number."
      },
      {
        "name": "deactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on providers with the specified deactivated status."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers",
    "method": "createNewProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Create a new provider\n",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "object",
        "description": "",
        "example": "***"
      },
      {
        "name": "npi",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "aliases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "credentialingStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "credentialedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recredentialedDates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "providerTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deactivated",
        "schema": "boolean",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}",
    "method": "deleteExistingProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Delete an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to get the data for.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to get the data for.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}",
    "method": "updateProviderData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Patch an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to patch.",
        "example": "PROVIDERID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "object",
        "description": "",
        "example": "***"
      },
      {
        "name": "npi",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "aliases",
        "schema": "array",
        "description": ""
      },
      {
        "name": "credentialingStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emails",
        "schema": "array",
        "description": ""
      },
      {
        "name": "addresses",
        "schema": "array",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "description": ""
      },
      {
        "name": "credentialedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recredentialedDates",
        "schema": "array",
        "description": ""
      },
      {
        "name": "providerTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deactivated",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/aggregations",
    "method": "getAggregations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Get provider aggregations\n",
    "parameters": [
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on providers with the specified deactivated status."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providertypes",
    "method": "listProviderTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "List provider types\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/report",
    "method": "generateReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Providers",
    "typeScriptTag": "providers",
    "description": "Generate report for an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to generate report.",
        "example": "PROVIDERID"
      },
      {
        "name": "sections",
        "schema": "array",
        "description": ""
      },
      {
        "name": "datasetTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deaRecordNumbers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "licenseIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "boardCertificateIds",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to get the data for.",
        "example": "PROVIDERID"
      },
      {
        "name": "providerInfoType",
        "schema": "array",
        "description": "If not specified, will return all data for the provider. Info types can be combined, ex.: `providerInfoType=licenses&providerInfoType=deaRegistrations`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/caqh",
    "method": "deleteCaqhLogin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing CAQH login info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/caqh",
    "method": "getCaqhLoginInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get CAQH login info for a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/caqh",
    "method": "changeCaqhLogin",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's CAQH login info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "caqhId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "object",
        "description": "",
        "example": "***"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/caqh",
    "method": "createOrUpdateCaqhLogin",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create or replace caqh login info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "caqhId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "object",
        "description": "",
        "example": "***"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/aliases/{aliasId}",
    "method": "changeAlias",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's alias\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "aliasId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIASID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/aliases/{id}",
    "method": "deleteAlias",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing alias for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/aliases/{id}",
    "method": "getAlias",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get alias for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/boardCertifications",
    "method": "listBoardCertifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List board certifications\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/boardCertifications",
    "method": "addBoardCertification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create board certification info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "boardCertificationNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "specialty",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nonVerifiedInfo",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/boardCertifications/{id}",
    "method": "deleteBoardCertificationById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing board certification info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/boardCertifications/{id}",
    "method": "getBoardCertification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get board certification for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/boardCertifications/{id}",
    "method": "updateCertificationInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's board certification info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "boardCertificationNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "specialty",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nonVerifiedInfo",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/certificates",
    "method": "listCertificates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List certificates\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/certificates",
    "method": "createCertificateInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create certificate info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "certificateNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CERTIFICATENUMBER"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "issueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "certifyingOrganization",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/certificates/{id}",
    "method": "deleteCertificateInfo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing certificate info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/certificates/{id}",
    "method": "getCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get certificate for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/certificates/{id}",
    "method": "updateCertificateInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's certificate info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certificateNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "issueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "certifyingOrganization",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/liabilityInsurances",
    "method": "listLiabilityInsurances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List liability insurances\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/liabilityInsurances",
    "method": "createLiabilityInsurance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create liability insurance info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSelfInsured",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "originalEffectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentEffectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentExpirationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "coverageType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isUnlimitedCoverage",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "includesTailCoverage",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "occurrenceCoverageAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "aggregateCoverageAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "policyNumber",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/liabilityInsurances/{id}",
    "method": "deleteLiabilityInsuranceById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing liability insurance info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/liabilityInsurances/{id}",
    "method": "getLiabilityInsurance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get liability insurance for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/liabilityInsurances/{id}",
    "method": "updateLiabilityInsurance",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's liability insurance\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "description": ""
      },
      {
        "name": "isSelfInsured",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "originalEffectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentEffectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "currentExpirationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "coverageType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isUnlimitedCoverage",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "includesTailCoverage",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "occurrenceCoverageAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "aggregateCoverageAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "policyNumber",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/educations",
    "method": "listEducations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List educations\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/educations",
    "method": "createEducationInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create education info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "ecfmgNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ecfmgIssueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "graduateType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "branchCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "degree",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/educations/{id}",
    "method": "deleteExistingEducation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing education info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/educations/{id}",
    "method": "getEducation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get education for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/educations/{id}",
    "method": "updateEducationInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's education info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "ecfmgNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ecfmgIssueDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "graduateType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "degree",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/trainings",
    "method": "listTrainings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List trainings\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/trainings",
    "method": "createTraining",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create training info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "trainingType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "institutionName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completed",
        "schema": "boolean",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/trainings/{id}",
    "method": "deleteTrainingInfo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing training info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/trainings/{id}",
    "method": "getTraining",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get training for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/trainings/{id}",
    "method": "updateTrainingInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's training info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "trainingType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "institutionName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schoolName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "completed",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/workHistory",
    "method": "listWorkHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List work history entries\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/workHistory",
    "method": "createWorkHistory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create work history info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "workHistoryType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isCurrentEmployer",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "departureReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gapExplanation",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/workHistory/{id}",
    "method": "deleteWorkHistoryInfo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing work history info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/workHistory/{id}",
    "method": "getWorkHistoryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get work history for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/workHistory/{id}",
    "method": "updateWorkHistory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's work history info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "workHistoryType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isCurrentEmployer",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "departureReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "gapExplanation",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/profiles/import/sources",
    "method": "listImportSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProviderProfiles",
    "typeScriptTag": "providerProfiles",
    "description": "List provider profile import sources\n",
    "parameters": [
      {
        "name": "source",
        "schema": "string",
        "description": "The source of the import to get profiles."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/profiles/import",
    "method": "listImports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProviderProfiles",
    "typeScriptTag": "providerProfiles",
    "description": "List provider profile imports\n",
    "parameters": [
      {
        "name": "latest",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": "The status of the import to get profiles."
      },
      {
        "name": "source",
        "schema": "string",
        "description": "The source of the import to get profiles."
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/profiles/import",
    "method": "createProfileImport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProviderProfiles",
    "typeScriptTag": "providerProfiles",
    "description": "Create a new provider profile import\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "source",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/profiles/import/{importId}",
    "method": "getExistingImport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProviderProfiles",
    "typeScriptTag": "providerProfiles",
    "description": "Get an existing provider profile import\n",
    "parameters": [
      {
        "name": "importId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider profile import to get the data for.",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/notes",
    "method": "listProviderNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "List provider notes\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to get all notes for.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/notes",
    "method": "createNewProviderNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Create a new provider note\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider to create a note for.",
        "example": "PROVIDERID"
      },
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/notes/{noteId}",
    "method": "deleteExistingNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete an existing provider note\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider associated with the note to delete.",
        "example": "PROVIDERID"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the note to be deleted.",
        "example": "NOTEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/notes/{noteId}",
    "method": "getExistingProviderNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get an existing provider note\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider associated with the note.",
        "example": "PROVIDERID"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the note.",
        "example": "NOTEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/notes/{noteId}",
    "method": "updateExistingProviderNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Change an existing provider note\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider associated with the note to change.",
        "example": "PROVIDERID"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the note to be changed.",
        "example": "NOTEID"
      },
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/uploads/{path}",
    "method": "uploadFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload a file\n",
    "parameters": [
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "The complete path to the file including -but not necessarily requiring- folder separators.",
        "example": "PATH"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/uploads/{path}",
    "method": "uploadAndOverwrite",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Upload and overwrite a file\n",
    "parameters": [
      {
        "name": "path",
        "schema": "string",
        "required": true,
        "description": "The complete path to the file including -but not necessarily requiring- folder separators.",
        "example": "PATH"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/uploads/{pathOrId}",
    "method": "removeFile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete a file\n",
    "parameters": [
      {
        "name": "pathOrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATHORID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/{pathOrId}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download a file\n",
    "parameters": [
      {
        "name": "pathOrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATHORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "304",
        "description": "Not Modified"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/{pathOrId}",
    "method": "getFileMetadata",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get file metadata\n",
    "parameters": [
      {
        "name": "pathOrId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PATHORID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "304",
        "description": "Not Modified"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/uploads",
    "method": "listUploadedFilesMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List uploaded files\n",
    "parameters": [
      {
        "name": "prefix",
        "schema": "string",
        "description": "If set the result is filtered to return only files whose path begin with the specified prefix."
      },
      {
        "name": "before",
        "schema": "string",
        "description": "If set, only returns events from before this date."
      },
      {
        "name": "beforeInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `before` date and time too."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "If set, only returns events from after this date."
      },
      {
        "name": "afterInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `after` date and time too."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/provider-licenses",
    "method": "listProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "List provider licenses\n",
    "parameters": [
      {
        "name": "providerName",
        "schema": "string",
        "description": "If set, the items will be filtered on providers with the specified (first or last) name."
      },
      {
        "name": "providerCredentialingStatus",
        "schema": "array",
        "description": "If set, the items will be filtered on providers with the specified credentialing status."
      },
      {
        "name": "licenseState",
        "schema": "string",
        "description": "If set, the items will be filtered on licenses with the specified license state."
      },
      {
        "name": "licenseType",
        "schema": "string",
        "description": "If set, the items will be filtered on licenses with the specified license type."
      },
      {
        "name": "licenseStatus",
        "schema": "string",
        "description": "If set, the items will be filtered on licenses with the specified license status."
      },
      {
        "name": "licenseVerificationStatus",
        "schema": "string",
        "description": "If set, the items will be filtered on licenses with the verification status."
      },
      {
        "name": "licenseApprovedStatus",
        "schema": "array",
        "description": ""
      },
      {
        "name": "export",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}/verify",
    "method": "triggerNewVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Trigger a new license verification\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license to be verified again.",
        "example": "LICENSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/verify",
    "method": "triggerVerification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Trigger license verifications\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}",
    "method": "detachProviderLicense",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Detach a license from a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider to detach the license from.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license that you want to detach.",
        "example": "LICENSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}",
    "method": "getSpecificProviderLicense",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Get a specific license from a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license that you want to get the data for.",
        "example": "LICENSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}/verifications/{verificationId}",
    "method": "getVerificationData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Get a specific license verification\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license that was previously verified.",
        "example": "LICENSEID"
      },
      {
        "name": "verificationId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license verification that you want to retrieve.",
        "example": "VERIFICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}/verifications/{verificationId}",
    "method": "resolveVerificationProblem",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Resolve problems with a license verification\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license that has a verification problem.",
        "example": "LICENSEID"
      },
      {
        "name": "verificationId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license verification that needs to be patched.",
        "example": "VERIFICATIONID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "correctResultIndex",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}/verifications/{verificationId}/diff",
    "method": "diffVerification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Diff two license verifications\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license that was previously verified.",
        "example": "LICENSEID"
      },
      {
        "name": "verificationId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license verification that you want to diff with the previous one.",
        "example": "VERIFICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses/{licenseId}/verifications",
    "method": "listVerifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "List all verifications for a license\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider that holds the license.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the license to get the verifications from.",
        "example": "LICENSEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/licensetypes",
    "method": "listLicenseTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "List license types\n",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "If set, the items will be filtered on the state specified by this parameter"
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/licensetypes/status",
    "method": "listLicenseSourceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "List license source status\n",
    "parameters": [
      {
        "name": "licenseTypeId",
        "schema": "string",
        "description": "If set, the items will be filtered by the License type id. Please refer to [LicenseTypes](../ListLicenseTypes) for more information on the License type id."
      },
      {
        "name": "state",
        "schema": "string",
        "description": "If set, the items will be filtered by the state specified in this parameter."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/scans",
    "method": "listScans",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "List dataset scans\n",
    "parameters": [
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": "If set, the results will only contain scans for this provider."
      },
      {
        "name": "type",
        "schema": "string",
        "description": "If set, the results will only contain scans for this dataset."
      },
      {
        "name": "parameterSetId",
        "schema": "string",
        "description": "If set, the results will only contain scans with the specified parameter set."
      },
      {
        "name": "referenceId",
        "schema": "string",
        "description": "If set, the results will only contain scans with the specified provider info reference id."
      },
      {
        "name": "status",
        "schema": "array",
        "description": "If set, the results will only contain scans with the specified statuses."
      },
      {
        "name": "credentialingStatus",
        "schema": "string",
        "description": "If set, the results will only contain scans for providers ih the specified credentialing status."
      },
      {
        "name": "includeOldScans",
        "schema": "boolean",
        "description": "If set, the results will contain all dataset scans, otherwise, only the most recent scans will be included."
      },
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the results will only contain scans for providers in the specified deactivated status."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/scans",
    "method": "startScan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Start a dataset scan\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/scans/{scanId}",
    "method": "getScanResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get dataset scan\n",
    "parameters": [
      {
        "name": "scanId",
        "schema": "string",
        "required": true,
        "description": "The identifier of the scan to get results for.",
        "example": "SCANID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/matches",
    "method": "listMatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "List dataset matches\n",
    "parameters": [
      {
        "name": "distinctPerProvider",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": "If set, the results will only contain matches for this provider."
      },
      {
        "name": "types",
        "schema": "array",
        "description": "If set, the results will only contain matches for the specified dataset types. As opposed to `type` you can filter on more than 1 different dataset type this way."
      },
      {
        "name": "userActionNeeded",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "referenceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentialingStatus",
        "schema": "array",
        "description": "If set, the results will only contain scans for providers ih the specified credentialing status."
      },
      {
        "name": "providerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerNpi",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "includeOldMatches",
        "schema": "boolean",
        "description": "If set, the results will contain all dataset matches, otherwise, only matches from the most recent completed scans will be included."
      },
      {
        "name": "userActionResolution",
        "schema": "string",
        "description": ""
      },
      {
        "name": "matchRelevance",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the results will only contain scans for providers in the specified deactivated status."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/{datasetType}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get dataset metadata\n",
    "parameters": [
      {
        "name": "datasetType",
        "schema": "string",
        "required": true,
        "description": "The specific dataset type to get the metadata for.",
        "example": "DATASETTYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "List datasets metadata\n",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "description": "If set, the result will contain items with matching associated tags. Currently supported tags are: \"Sanctions and Exclusions\", \"Board Certifications\", \"NPI\", \"Id Check\", \"NPDB\""
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/monitors",
    "method": "listMonitoredItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Lists all the monitored items\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "If set, the items will be filtered on monitor type."
      },
      {
        "name": "providerIds",
        "schema": "array",
        "description": "If set, the items will be filtered on providers with the specified ids."
      },
      {
        "name": "datasetTypes",
        "schema": "array",
        "description": "If set, the items will be filtered on datasets with the specified types."
      },
      {
        "name": "licenseIds",
        "schema": "array",
        "description": "If set, the items will be filtered on licenses with the specified ids."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/monitors",
    "method": "initiateProviderMonitoring",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Initiate monitoring for a provider\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "datasetType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "licenseId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "monitoringInterval",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nextMonitoringDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "options",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "triggerImmediateVerification",
        "schema": "boolean",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/monitors/{id}",
    "method": "stopItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Stop monitoring an item\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the monitored item.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/monitors/{id}",
    "method": "getMonitoredItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Returns a specified monitored item\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the monitored item.",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/monitors/{id}",
    "method": "updateMonitoredItem",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Monitoring",
    "typeScriptTag": "monitoring",
    "description": "Patch an existing monitored item\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the monitored item.",
        "example": "ID"
      },
      {
        "name": "monitoringInterval",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nextMonitoringDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "triggerImmediateVerification",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/alerts/{alertId}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get an existing alert\n",
    "parameters": [
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the alert to get the data for.",
        "example": "ALERTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/alerts/{alertId}/dismiss",
    "method": "dismissAlert",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Dismiss an alert\n",
    "parameters": [
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the alert to dismiss.",
        "example": "ALERTID"
      },
      {
        "name": "dismissalNote",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/alerts/aggregations",
    "method": "getAggregations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get alert aggregations\n",
    "parameters": [
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on providers with the specified deactivated status."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "getPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "List alerts\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "description": "If set, the items will be filtered on provider with the specified identifier."
      },
      {
        "name": "providerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerNpi",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "array",
        "description": "If set, the items will be filtered on alerts of the specified type"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "If set, filter the items by the dismissal status."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on providers with the specified deactivated status."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List groups\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "description": "If set, the items will be filtered by `providerId`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups",
    "method": "registerNewProviderGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create a new group\n",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "npi",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "remitAddress",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}",
    "method": "deleteGroupWithAssociations",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete an existing group\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get an existing group\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the group to get the data for.",
        "example": "GROUPID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}",
    "method": "updateGroupProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Patch an existing group\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "npi",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "taxId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "remitAddress",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}/enrollments",
    "method": "listEnrollments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List enrollments for the group\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the group to get enrollments for.",
        "example": "GROUPID"
      },
      {
        "name": "payerPlanId",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified payer plan."
      },
      {
        "name": "networkStatus",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified network status."
      },
      {
        "name": "enrollmentStatus",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified enrollment status."
      },
      {
        "name": "specialistType",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified specialist type."
      },
      {
        "name": "submissionDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "rosterType",
        "schema": "string",
        "description": "If set, csv report of specified type will be generated."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}/providers",
    "method": "listProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List providers for the group\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the group to get providers for.",
        "example": "GROUPID"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "If set, the items will be filtered on providers with the specified status."
      },
      {
        "name": "providerName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "credentialingStatus",
        "schema": "array",
        "description": "If set, the items will be filtered on providers with the specified credentialing status."
      },
      {
        "name": "providerTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "npi",
        "schema": "integer",
        "description": "If set, the items will be filtered on providers with the specified npi number."
      },
      {
        "name": "deactivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "rosterType",
        "schema": "string",
        "description": "If set, csv report of specified type will be generated."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}/providers",
    "method": "updateProvidersGroupRelations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Patch providers-group relations\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the group.",
        "example": "GROUPID"
      },
      {
        "name": "add",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remove",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/groups/{groupId}/payer-plans",
    "method": "updatePayerPlansGroupRelations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Patch payer plans-group relations\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the group.",
        "example": "GROUPID"
      },
      {
        "name": "add",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remove",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payers",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payers",
    "typeScriptTag": "payers",
    "description": "List payers\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payers",
    "method": "registerNewPayer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payers",
    "typeScriptTag": "payers",
    "description": "Create a new payer\n",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payers/{payerId}",
    "method": "deletePayer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payers",
    "typeScriptTag": "payers",
    "description": "Delete an existing payer\n",
    "parameters": [
      {
        "name": "payerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the payer to delete.",
        "example": "PAYERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payers/{payerId}",
    "method": "getPayerData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payers",
    "typeScriptTag": "payers",
    "description": "Get an existing payer\n",
    "parameters": [
      {
        "name": "payerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the payer to get the data for.",
        "example": "PAYERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payers/{payerId}",
    "method": "updatePayerData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Payers",
    "typeScriptTag": "payers",
    "description": "Patch an existing payer\n",
    "parameters": [
      {
        "name": "payerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the payer to patch.",
        "example": "PAYERID"
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
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payer-plans",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayerPlans",
    "typeScriptTag": "payerPlans",
    "description": "List payer plans\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "description": "Identifier of the group to get the payer plans for."
      },
      {
        "name": "payerId",
        "schema": "string",
        "description": "Identifier of the payer to get the payer plans for."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payer-plans",
    "method": "createNewPlan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PayerPlans",
    "typeScriptTag": "payerPlans",
    "description": "Create a new payer plan\n",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYERID"
      },
      {
        "name": "state",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payer-plans/{payerPlanId}",
    "method": "deleteExistingPlan",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PayerPlans",
    "typeScriptTag": "payerPlans",
    "description": "Delete an existing payer plan\n",
    "parameters": [
      {
        "name": "payerPlanId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the payer plan to delete.",
        "example": "PAYERPLANID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payer-plans/{payerPlanId}",
    "method": "getPlanData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayerPlans",
    "typeScriptTag": "payerPlans",
    "description": "Get an existing payer plan\n",
    "parameters": [
      {
        "name": "payerPlanId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the payer plan to get the data for.",
        "example": "PAYERPLANID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/payer-plans/{payerPlanId}",
    "method": "updatePlanProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PayerPlans",
    "typeScriptTag": "payerPlans",
    "description": "Patch an existing payer plan\n",
    "parameters": [
      {
        "name": "payerPlanId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the payer plan to patch.",
        "example": "PAYERPLANID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/enrollments",
    "method": "listPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProviderEnrollments",
    "typeScriptTag": "providerEnrollments",
    "description": "List provider enrollments\n",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "description": "The unique identifier of the group to get enrollments for."
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified provider."
      },
      {
        "name": "payerPlanId",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified payer plan."
      },
      {
        "name": "networkStatus",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified network status."
      },
      {
        "name": "enrollmentStatus",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified enrollment status."
      },
      {
        "name": "specialistType",
        "schema": "string",
        "description": "If set, the items will be filtered on enrollments with the specified specialist type."
      },
      {
        "name": "submissionDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/enrollments",
    "method": "createNewEnrollment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProviderEnrollments",
    "typeScriptTag": "providerEnrollments",
    "description": "Create a new provider enrollment\n",
    "parameters": [
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "enrollmentStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "networkStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payerPlanId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYERPLANID"
      },
      {
        "name": "specialistType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "submissionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "closedDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "externalProviderPlanId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/enrollments/{providerEnrollmentId}",
    "method": "deleteEnrollment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProviderEnrollments",
    "typeScriptTag": "providerEnrollments",
    "description": "Delete an existing provider enrollment\n",
    "parameters": [
      {
        "name": "providerEnrollmentId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider enrollment to delete.",
        "example": "PROVIDERENROLLMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/enrollments/{providerEnrollmentId}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProviderEnrollments",
    "typeScriptTag": "providerEnrollments",
    "description": "Get an existing provider enrollment\n",
    "parameters": [
      {
        "name": "providerEnrollmentId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider enrollment to get the data for.",
        "example": "PROVIDERENROLLMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/enrollments/{providerEnrollmentId}",
    "method": "updateDataProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProviderEnrollments",
    "typeScriptTag": "providerEnrollments",
    "description": "Patch an existing provider enrollment\n",
    "parameters": [
      {
        "name": "providerEnrollmentId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the provider enrollment to patch.",
        "example": "PROVIDERENROLLMENTID"
      },
      {
        "name": "payerPlanId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enrollmentStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "submissionDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closedDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "networkStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "specialistType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalProviderPlanId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comments",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/integrations/fountain/webhook/{organizationId}",
    "method": "fountainWebhookPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Fountain integration webhook\n",
    "parameters": [
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The organization on which this webhook is called.",
        "example": "ORGANIZATIONID"
      },
      {
        "name": "applicant",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/integrations/salesforce/documentrequest",
    "method": "createSalesforceDocumentRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Integrations",
    "typeScriptTag": "integrations",
    "description": "Salesforce document request\n",
    "parameters": [
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
      },
      {
        "name": "pathOnClient",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "relatedIds",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "salesforceOrganizationId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a new webhook",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "allowInsecureUrl",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeSensitiveInfo",
        "schema": "boolean",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook\n",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a previously created webhook to be deleted.",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get details from a webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a previously created webhook.",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "updateWebhook",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook\n",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a previously created webhook.",
        "example": "WEBHOOKID"
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "allowInsecureUrl",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "includeSensitiveInfo",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/webhookslog",
    "method": "listAllLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all webhooks logs\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "If set, the items will be filtered with the specified webhook type."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "If set, the items will be filtered with the specified webhook log status."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "traceId",
        "schema": "string",
        "description": "If set, the items will be filtered with the specified webhook log trace id."
      },
      {
        "name": "before",
        "schema": "string",
        "description": "If set, the items will be filtered with timestamp value less the provided value."
      },
      {
        "name": "beforeInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `before` date and time too."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "If set, the items will be filtered with timestamp value more the provided value."
      },
      {
        "name": "afterInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `after` date and time too."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/log/events",
    "method": "listEventLogEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audit",
    "typeScriptTag": "audit",
    "description": "List event log entries\n",
    "parameters": [
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      },
      {
        "name": "type",
        "schema": "array",
        "description": "If set, only returns events with the specified type. More than 1 type can be specified."
      },
      {
        "name": "includeReadRequests",
        "schema": "boolean",
        "description": "If set to `true`, also includes read request events (these are filtered out by default)."
      },
      {
        "name": "includeFailedRequests",
        "schema": "boolean",
        "description": "If set to `true`, also includes failed request events (these are filtered out by default). Note that not all failed requests can be captured or assigned to your organization, depending on the nature of the failure."
      },
      {
        "name": "entityId",
        "schema": "array",
        "description": "If set, only returns events related to the specified identifier. For example, to filter on events for a given provider, set this parameter to the identifier of that provider. More than 1 entity identifier can be specified."
      },
      {
        "name": "category",
        "schema": "array",
        "description": "If set, only returns events related to the specified category. More than 1 category can be specified."
      },
      {
        "name": "subcategory",
        "schema": "array",
        "description": "If set, only returns events related to the specified subcategory. The subcategories differ per `category`. More than 1 subcategory can be specified."
      },
      {
        "name": "before",
        "schema": "string",
        "description": "If set, only returns events from before this date."
      },
      {
        "name": "beforeInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `before` date and time too."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "If set, only returns events from after this date."
      },
      {
        "name": "afterInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `after` date and time too."
      },
      {
        "name": "correlationId",
        "schema": "string",
        "description": "If set, only returns events related to the specified correlation identifier."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/users/me/password",
    "method": "changePassword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Change the password of the current user\n",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "newPassword",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEWPASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/organization/reports/sanctionsandexclusions",
    "method": "listSanctionsAndExclusions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "List sanctions and exclusions reports for the organization.\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/aggregations/owners",
    "method": "aggregateProviderOwners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Aggregate provider credentialing request owners\n",
    "parameters": [
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on requests for the providers with the specified deactivated status."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses",
    "method": "listFromProvider",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "List all licenses from a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider to list all licenses for.",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/licenses",
    "method": "attachProviderLicense",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Attach a license to a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier describing the provider to attach the license to.",
        "example": "PROVIDERID"
      },
      {
        "name": "licenseNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "licenseTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LICENSETYPEID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "taxonomyCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "restrictionStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "approvedStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nonVerifiedInfo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "skipVerification",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isCurrentlyPracticing",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "prescriptiveAuthority",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "collaboratingProviderId",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/integrations/cognito-forms/webhook/{type}",
    "method": "receiveData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CognitoFormsWebhook",
    "typeScriptTag": "cognitoFormsWebhook",
    "description": "",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests",
    "method": "listRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "List credentialing requests\n",
    "parameters": [
      {
        "name": "entityType",
        "schema": "string",
        "description": "Indicates whether to retrieve credentialing requests for providers or facilities. Defaults to providers."
      },
      {
        "name": "currentEventStatus",
        "schema": "array",
        "description": "If set, the items will be filtered by the specified current event status."
      },
      {
        "name": "providerCredentialingStatus",
        "schema": "array",
        "description": "If set, the items will be filtered by the specified provider credentialing status. Has no effect when querying facilities."
      },
      {
        "name": "priority",
        "schema": "array",
        "description": "If set, the items will be filtered by the specified priority."
      },
      {
        "name": "ownerId",
        "schema": "array",
        "description": "If set, the items will be filtered by the specified owner."
      },
      {
        "name": "includeUnassigned",
        "schema": "boolean",
        "description": "If set, the items will include credentialing requests that are not assigned to any specified owner. Intended to be used together with `ownerId`."
      },
      {
        "name": "credentialingRequestType",
        "schema": "string",
        "description": "If set, the items will be filtered by the specified credentialing request type."
      },
      {
        "name": "entityId",
        "schema": "string",
        "description": "If set, the items will be filtered by the specified entity identifier (`providerId` or `facilityId`)."
      },
      {
        "name": "entityName",
        "schema": "string",
        "description": "If set, the items will be filtered by the specified entity name (provider name/alias or facility name)."
      },
      {
        "name": "entityNpi",
        "schema": "integer",
        "description": "If set, the items will be filtered by the specified entity NPI number."
      },
      {
        "name": "entityDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered by the specified entity deactivated status."
      },
      {
        "name": "providerId",
        "schema": "string",
        "description": "See `entityId`."
      },
      {
        "name": "providerName",
        "schema": "string",
        "description": "See `entityName`."
      },
      {
        "name": "providerNpi",
        "schema": "integer",
        "description": "See `entityNpi`."
      },
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "See `entityDeactivated`."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests",
    "method": "submitNewRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Create a new credentialing request\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "facilityId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isSelfManaged",
        "schema": "boolean",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/{requestId}/events",
    "method": "createEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Create a new credentialing request event\n",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "note",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "attachments",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/dea",
    "method": "listDeaRegistrations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List DEA registrations\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/dea",
    "method": "createDeaRegistrationInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create DEA registration info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "registrationNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGISTRATIONNUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/addresses",
    "method": "listAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List addresses\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/addresses",
    "method": "addAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create address for an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIPCODE"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESSLINE1"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/aliases",
    "method": "listAliases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List aliases\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/aliases",
    "method": "createAlias",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create alias for an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/emails",
    "method": "listEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "List emails\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/emails",
    "method": "createEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Create email for an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/dea/{id}",
    "method": "deleteDeaRegistration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing DEA registration info for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/dea/{id}",
    "method": "getDeaRegistration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get DEA registration for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/dea/{id}",
    "method": "updateDea",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's DEA registration info\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "registrationNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REGISTRATIONNUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/addresses/{id}",
    "method": "deleteAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing address for a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/addresses/{id}",
    "method": "getAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get address for an existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/addresses/{id}",
    "method": "updateAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's address\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zipCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIPCODE"
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "addressLine1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESSLINE1"
      },
      {
        "name": "addressLine2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/emails/{id}",
    "method": "deleteEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Delete existing email for a provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/emails/{id}",
    "method": "getEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Get email for the existing provider\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
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
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/info/emails/{id}",
    "method": "updateEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProvidersInfo",
    "typeScriptTag": "providersInfo",
    "description": "Change an existing provider's email\n",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/{requestId}",
    "method": "getSpecificRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Get a specific credentialing request\n",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the credentialing request to get the data for.",
        "example": "REQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/{requestId}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Patch an existing credentialing request\n",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ownerId",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/aggregations",
    "method": "getAggregations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Get provider credentialing requests aggregations\n",
    "parameters": [
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on providers with the specified deactivated status."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/{requestId}/events/{eventId}",
    "method": "specificEventData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Get a specific credentialing request event\n",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the credentialing request associated to the event.",
        "example": "REQUESTID"
      },
      {
        "name": "eventId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the event to get the data for.",
        "example": "EVENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/matches/aggregations",
    "method": "getMatchesAggregations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get dataset matches aggregations\n",
    "parameters": [
      {
        "name": "providerDeactivated",
        "schema": "boolean",
        "description": "If set, the items will be filtered on providers with the specified deactivated status."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/{datasetType}/parameters/{providerId}",
    "method": "getScanParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get dataset scan parameters for a provider\n",
    "parameters": [
      {
        "name": "datasetType",
        "schema": "string",
        "required": true,
        "description": "The specific dataset type to get the scan parameters for.",
        "example": "DATASETTYPE"
      },
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "The identifier of the provider for which the parameters should be returned.",
        "example": "PROVIDERID"
      },
      {
        "name": "parameterSetId",
        "schema": "string",
        "description": "If set, the results will only return the parameters based on the specified parameter set else the parameters will be returned based on preferred dataset parameter."
      },
      {
        "name": "referenceId",
        "schema": "string",
        "description": "If set, the results will only use the associated provider info to derive the parameters."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/facilities/{facilityId}/info",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GetFacilityInfo",
    "typeScriptTag": "getFacilityInfo",
    "description": "",
    "parameters": [
      {
        "name": "facilityId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FACILITYID"
      },
      {
        "name": "facilityInfoTypes",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/providers/{providerId}/credentialing-data",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GetProviderCredentialingData",
    "typeScriptTag": "getProviderCredentialingData",
    "description": "",
    "parameters": [
      {
        "name": "providerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDERID"
      },
      {
        "name": "credentialingRequestId",
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
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/provider-licenses/aggregations",
    "method": "getAggregations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Get provider licenses aggregations\n",
    "parameters": [
      {
        "name": "providerDeactivated",
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/files/exports",
    "method": "listExportedEventLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "List event log exports\n",
    "parameters": [
      {
        "name": "prefix",
        "schema": "string",
        "description": "If set the result is filtered to return only files whose path begin with the specified prefix."
      },
      {
        "name": "before",
        "schema": "string",
        "description": "If set, only returns events from before this date."
      },
      {
        "name": "beforeInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `before` date and time too."
      },
      {
        "name": "after",
        "schema": "string",
        "description": "If set, only returns events from after this date."
      },
      {
        "name": "afterInclusive",
        "schema": "boolean",
        "description": "If set to `true`, will include events created exactly at `after` date and time too."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/nsc/schoolCodes",
    "method": "listSchools",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "List schools\n",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "If set, the items will be filtered on schools with the specified name."
      },
      {
        "name": "code",
        "schema": "string",
        "description": "If set, the items will be filtered on schools with the specified code."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "The number of items to include in a single page."
      },
      {
        "name": "sortedBy",
        "schema": "string",
        "description": "The property by which the returned data will be sorted."
      },
      {
        "name": "sort",
        "schema": "object",
        "description": "If set, the properties and directions the returned data will be sorted by."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The offset for the page to start."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "The cursor to render the page requested. To load the first page send an empty cursor, then the system will generate the cursors to go to the next and/or previous pages automatically."
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction the returned data will be sorted by."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/matches/{matchId}",
    "method": "modifyMatchStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Patch an existing dataset match\n",
    "parameters": [
      {
        "name": "matchId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the dataset match to patch.",
        "example": "MATCHID"
      },
      {
        "name": "userActionResolutionNote",
        "schema": "string",
        "description": ""
      },
      {
        "name": "userActionResolution",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/licenses/{licenseId}",
    "method": "updateExistingLicense",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Licenses",
    "typeScriptTag": "licenses",
    "description": "Patch an existing license\n",
    "parameters": [
      {
        "name": "licenseId",
        "schema": "string",
        "required": true,
        "description": "Identifier of the license to patch.",
        "example": "LICENSEID"
      },
      {
        "name": "restrictionStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "approvedStatus",
        "schema": "string",
        "description": ""
      },
      {
        "name": "nonVerifiedInfo",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isCurrentlyPracticing",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "prescriptiveAuthority",
        "schema": "string",
        "description": ""
      },
      {
        "name": "collaboratingProviderId",
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
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/credentialing-requests/{requestId}/checklist",
    "method": "replaceChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CredentialingRequests",
    "typeScriptTag": "credentialingRequests",
    "description": "Create or replace a credentialing request checklist\n",
    "parameters": [
      {
        "name": "requestId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTID"
      },
      {
        "name": "notes",
        "schema": "string",
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "description": ""
      },
      {
        "name": "details",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  },
  {
    "url": "/datasets/scans/{scanId}/refresh",
    "method": "refreshScan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Refresh dataset scan\n",
    "parameters": [
      {
        "name": "scanId",
        "schema": "string",
        "required": true,
        "description": "The identifier of the scan to trigger refresh for.",
        "example": "SCANID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": "Bad Request"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "409",
        "description": "Conflict"
      },
      {
        "statusCode": "500",
        "description": "Server Error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Verifiable API Documentation"
      apiBaseUrl="https://api.discovery.verifiable.com"
      apiVersion="24.14.3.683"
      endpoints={102}
      sdkMethods={168}
      schemas={364}
      parameters={718}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/verifiable/openapi.yaml"
      developerDocumentation="docs.discovery.verifiable.com/reference/current/overview/"
    />
  );
}
  