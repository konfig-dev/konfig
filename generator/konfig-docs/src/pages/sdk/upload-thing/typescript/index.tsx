import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function UploadThingTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="upload-thing-typescript-sdk"
      metaDescription={`UploadThing is the easiest way to add file uploads to your full stack TypeScript application. Many services have tried to build a "better S3", but in our opinion, none found the right compromise of ownership, flexibility and safety.`}
      company="UploadThing"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/logo.png"
      companyKebabCase="upload-thing"
      clientNameCamelCase="uploadThing"
      homepage="uploadthing.com"
      lastUpdated={new Date("2024-03-14T22:06:20.836Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["developer_tools","storage"]}
      methods={[
  {
    "url": "/serverCallback",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ServerCallback",
    "typeScriptTag": "serverCallback",
    "description": "Poll for server callback data. This is used to retrieve the data returned from `onUploadComplete` callback.",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHORIZATION"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/serverCallback",
    "method": "setData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ServerCallback",
    "typeScriptTag": "serverCallback",
    "description": "Set server callback data. This is used to set the data returned from `onUploadComplete` callback.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "fileKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEKEY"
      },
      {
        "name": "callbackData",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/listFiles",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "List files for the current app. Response is paginated.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 500
      },
      {
        "name": "offset",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 0
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/renameFiles",
    "method": "renameFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Rename files.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "updates",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/renameFile",
    "method": "updateFileName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Use /renameFiles instead.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "updates",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/deleteFile",
    "method": "markForDeletion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Mark files for deletion. The files will be deleted at the storage provider shortly after.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fileKeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customIds",
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/getFileUrl",
    "method": "getFileUrls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Get a list of URLs for given file keys. This API is deprecated, use `https://utfs.io/f/FILE_KEY`.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "files",
        "schema": "array",
        "description": ""
      },
      {
        "name": "fileKeys",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customIds",
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
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/getUsageInfo",
    "method": "getUsageInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UsageInfo",
    "typeScriptTag": "usageInfo",
    "description": "Retrieve usage info for the app associated with the provided API key.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/completeMultipart",
    "method": "completeUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Multipart",
    "typeScriptTag": "multipart",
    "description": "Complete a multipart upload. This will finalize the upload and make the file available for download.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "fileKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEKEY"
      },
      {
        "name": "uploadId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPLOADID"
      },
      {
        "name": "etags",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/failureCallback",
    "method": "markUploadFailed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Callback",
    "typeScriptTag": "callback",
    "description": "Mark an upload as failed, or abort a multipart upload. This will free up resources and revert the storage quota.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "fileKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEKEY"
      },
      {
        "name": "uploadId",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/requestFileAccess",
    "method": "requestPresignedUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Request a presigned GET url for a private file.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "fileKey",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expiresIn",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/prepareUpload",
    "method": "requestPresignedUrls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Request presigned URLs for file uploads through based on your file router. NOTE: This spec complies with SDK versions ^6.4. Response may vary for older versions.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACKURL"
      },
      {
        "name": "callbackSlug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALLBACKSLUG"
      },
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "routeConfig",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "metadata",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploadFiles",
    "method": "requestPresignedUrls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "Request presigned URLs for file uploads without file routes. NOTE: This spec complies with SDK versions ^6.4. Response may vary for older versions.",
    "parameters": [
      {
        "name": "xUploadthingVersion",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "6.4.0"
      },
      {
        "name": "xUploadthingFePackage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "@uploadthing/react"
      },
      {
        "name": "xUploadthingBeAdapter",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "express"
      },
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "acl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "contentDisposition",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTDISPOSITION",
        "default": "inline"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="UploadThing REST API"
      apiBaseUrl="https://uploadthing.com/api"
      apiVersion="6.4.0"
      endpoints={12}
      sdkMethods={13}
      schemas={32}
      parameters={78}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadthing/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadthing/openapi.yaml"
      developerDocumentation="docs.uploadthing.com/api-reference/openapi-spec"
    />
  );
}
  