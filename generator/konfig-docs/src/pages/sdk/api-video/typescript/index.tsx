import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function ApiVideoTypeScriptSdk() {
  return (
    <Sdk
      sdkName="api-video-typescript-sdk"
      metaDescription="Deliver high-quality videos directly from your website, software, or app. 

api.video is an API-first platform that enables product builders to integrate video in their own apps and platforms in minutes, with just a few lines of code. 
The service handles the end-to-end workflow, from video ingestion to worldwide video delivery."
      company="api.video"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/logo.png"
      clientNameCamelCase="apiVideo"
      homepage="api.video"
      lastUpdated={new Date("2024-03-13T01:24:30.233Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["video","developer_tools","platform","storage","online_video","video_encoding","video_streaming","live_streaming","video_analytics","video_api","video_ondemand"]}
      methods={[
  {
    "url": "/auth/api-key",
    "method": "getBearerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Advanced authentication",
    "typeScriptTag": "advancedAuthentication",
    "description": "Get Bearer Token",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APIKEY"
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
    "url": "/auth/refresh",
    "method": "refreshBearerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Advanced authentication",
    "typeScriptTag": "advancedAuthentication",
    "description": "Refresh Bearer Token",
    "parameters": [
      {
        "name": "refreshToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESHTOKEN"
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
    "url": "/videos",
    "method": "listAllObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "List all video objects",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "The title of a specific video you want to find. The search will match exactly to what term you provide and return any videos that contain the same term as part of their titles.",
        "example": "My Video.mp4"
      },
      {
        "name": "tags[]",
        "schema": "array",
        "required": false,
        "description": "A tag is a category you create and apply to videos. You can search for videos with particular tags by listing one or more here. Only videos that have all the tags you list will be returned.",
        "example": "[\"captions\", \"dialogue\"]"
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": "Videos can be tagged with metadata tags in key:value pairs. You can search for videos with specific key value pairs using this parameter. [Dynamic Metadata](https://api.video/blog/endpoints/dynamic-metadata/) allows you to define a key that allows any value pair.",
        "example": "metadata[Author]=John Doe&metadata[Format]=Tutorial"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "Retrieve video objects by `description`.",
        "example": "New Zealand"
      },
      {
        "name": "liveStreamId",
        "schema": "string",
        "required": false,
        "description": "Retrieve video objects that were recorded from a live stream by `liveStreamId`.",
        "example": "li400mYKSgQ6xs7taUeSaEKr"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to sort videos by the their created time, published time, updated time, or by title.",
        "example": "publishedAt"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Use this parameter to sort results. `asc` is ascending and sorts from A to Z. `desc` is descending and sorts from Z to A.",
        "example": "asc"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/videos",
    "method": "createObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Create a video object",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "[\"maths\", \"string theory\", \"video\"]"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Maths video"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "A video about string theory."
      },
      {
        "name": "source",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://www.myvideo.url.com/video.mp4 OR vi4k0jvEUuaTdRAEjQ4JfOyl"
      },
      {
        "name": "public",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "panoramic",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false,
        "default": false
      },
      {
        "name": "mp4Support",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "playerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pl45KFKdlddgk654dspkze"
      },
      {
        "name": "metadata",
        "schema": "array",
        "required": false,
        "description": "",
        "example": "[{\"key\": \"Author\", \"value\": \"John Doe\"}]"
      },
      {
        "name": "clip",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "watermark",
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
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/source",
    "method": "ingestVideoFromSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Upload a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "Enter the videoId you want to use to upload your video.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "contentRange",
        "schema": "string",
        "required": false,
        "description": "`part <part>/<total_parts>` ; `bytes <from_byte>-<to_byte>/<total_bytes>`",
        "example": "bytes 209715200-419430399/524288000 OR part 2/3"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "@/path/to/video.mp4"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/watermarks",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watermarks",
    "typeScriptTag": "watermarks",
    "description": "List all watermarks",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Allowed: createdAt. You can search by the time watermark were created at.",
        "example": "createdAt"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Allowed: asc, desc. asc is ascending and sorts from A to Z. desc is descending and sorts from Z to A.",
        "example": "asc"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/watermarks",
    "method": "watermark",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Watermarks",
    "typeScriptTag": "watermarks",
    "description": "Upload a watermark",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
    "url": "/watermarks/{watermarkId}",
    "method": "watermark",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Watermarks",
    "typeScriptTag": "watermarks",
    "description": "Delete a watermark",
    "parameters": [
      {
        "name": "watermarkId",
        "schema": "string",
        "required": true,
        "description": "The watermark ID for the watermark you want to delete.",
        "example": "watermark_1BWr2L5MTQwxGkuxKjzh6i"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/thumbnail",
    "method": "setThumbnailFromInterval",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Set a thumbnail",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the video you want to add a thumbnail to, where you use a section of your video as the thumbnail.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "timecode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMECODE"
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
    "url": "/videos/{videoId}/thumbnail",
    "method": "uploadThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Upload a thumbnail",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the chosen video ",
        "example": "VIDEOID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/videos/{videoId}",
    "method": "deleteVideoObject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Delete a video object",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The video ID for the video you want to delete.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}",
    "method": "getVideoObject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Retrieve a video object",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want details about.",
        "example": "VIDEOID"
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
    "url": "/videos/{videoId}",
    "method": "updateVideoObjectParameters",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Update a video object",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The video ID for the video you want to update.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "",
        "example": "[\"maths\", \"string theory\", \"video\"]"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "A film about good books."
      },
      {
        "name": "playerId",
        "schema": "string",
        "description": "",
        "example": "pl4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "public",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "panoramic",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "mp4Support",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "metadata",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/status",
    "method": "getVideoStatusAndDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Retrieve video status and details",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want the status for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
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
    "url": "/upload-tokens",
    "method": "listActiveDelegatedTokens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Upload Tokens",
    "typeScriptTag": "uploadTokens",
    "description": "List all active upload tokens",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Allowed: createdAt, ttl. You can use these to sort by when a token was created, or how much longer the token will be active (ttl - time to live). Date and time is presented in ISO-8601 format.",
        "example": "ttl"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Allowed: asc, desc. Ascending is 0-9 or A-Z. Descending is 9-0 or Z-A.",
        "example": "asc"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/upload-tokens",
    "method": "generateToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload Tokens",
    "typeScriptTag": "uploadTokens",
    "description": "Generate an upload token",
    "parameters": [
      {
        "name": "ttl",
        "schema": "integer",
        "description": "",
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
      }
    ]
  },
  {
    "url": "/upload-tokens/{uploadToken}",
    "method": "deleteToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Upload Tokens",
    "typeScriptTag": "uploadTokens",
    "description": "Delete an upload token",
    "parameters": [
      {
        "name": "uploadToken",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the upload token you want to delete. Deleting a token will make it so the token can no longer be used for authentication.",
        "example": "to1tcmSFHeYY5KzyhOqVKMKb"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/upload-tokens/{uploadToken}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Upload Tokens",
    "typeScriptTag": "uploadTokens",
    "description": "Retrieve upload token",
    "parameters": [
      {
        "name": "uploadToken",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the token you want information about.",
        "example": "to1tcmSFHeYY5KzyhOqVKMKb"
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
    "url": "/upload",
    "method": "upload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos",
    "typeScriptTag": "videos",
    "description": "Upload with an delegated upload token",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the token you want to use to upload a video.",
        "example": "to1tcmSFHeYY5KzyhOqVKMKb"
      },
      {
        "name": "contentRange",
        "schema": "string",
        "required": false,
        "description": "Content-Range represents the range of bytes that will be returned as a result of the request. Byte ranges are inclusive, meaning that bytes 0-999 represents the first 1000 bytes in a file or object.",
        "example": "Content-Range: bytes 200-100/5000"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "path/to/video/video.mp4"
      },
      {
        "name": "videoId",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/live-streams",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "List all live streams",
    "parameters": [
      {
        "name": "streamKey",
        "schema": "string",
        "required": false,
        "description": "The unique stream key that allows you to stream videos.",
        "example": "dw-dew8-q6w9-k67w-1ws8"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "You can filter live streams by their name or a part of their name.",
        "example": "My Video"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "Enables you to sort live stream results. Allowed attributes: `name`, `createdAt`, `updatedAt`.\n`name` - the name of the live stream.\n`createdAt` - the time a live stream was created.\n`updatedAt` - the time a live stream was last updated.\n\nWhen using `createdAt` or `updatedAt`, the API sorts the results based on the ISO-8601 time format.\n",
        "example": "createdAt"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones. For title, it is 0-9 and A-Z ascending and Z-A, 9-0 descending.",
        "example": "desc"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/live-streams",
    "method": "createLivestreamObject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "Create live stream",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Live Stream Video"
      },
      {
        "name": "public",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "pl4f4ferf5erfr5zed4fsdd"
      },
      {
        "name": "restreams",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/live-streams/{liveStreamId}",
    "method": "deleteLivestream",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "Delete a live stream",
    "parameters": [
      {
        "name": "liveStreamId",
        "schema": "string",
        "required": true,
        "description": "The unique ID for the live stream that you want to remove.",
        "example": "li400mYKSgQ6xs7taUeSaEKr"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      }
    ]
  },
  {
    "url": "/live-streams/{liveStreamId}",
    "method": "getLivestreamById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "Retrieve live stream",
    "parameters": [
      {
        "name": "liveStreamId",
        "schema": "string",
        "required": true,
        "description": "The unique ID for the live stream you want to watch.",
        "example": "li400mYKSgQ6xs7taUeSaEKr"
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
    "url": "/live-streams/{liveStreamId}",
    "method": "updateLivestreamObject",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "Update a live stream",
    "parameters": [
      {
        "name": "liveStreamId",
        "schema": "string",
        "required": true,
        "description": "The unique ID for the live stream that you want to update information for such as player details.",
        "example": "li400mYKSgQ6xs7taUeSaEKr"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "My Live Stream Video"
      },
      {
        "name": "public",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "playerId",
        "schema": "string",
        "description": "",
        "example": "pl45KFKdlddgk654dspkze"
      },
      {
        "name": "restreams",
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
    "url": "/live-streams/{liveStreamId}/thumbnail",
    "method": "deleteThumbnail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "Delete a thumbnail",
    "parameters": [
      {
        "name": "liveStreamId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the live stream whose thumbnail you want to delete.",
        "example": "li400mYKSgQ6xs7taUeSaEKr"
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
    "url": "/live-streams/{liveStreamId}/thumbnail",
    "method": "uploadThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live Streams",
    "typeScriptTag": "liveStreams",
    "description": "Upload a thumbnail",
    "parameters": [
      {
        "name": "liveStreamId",
        "schema": "string",
        "required": true,
        "description": "The unique ID for the live stream you want to upload.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/captions/{language}",
    "method": "deleteByLanguage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Captions",
    "typeScriptTag": "captions",
    "description": "Delete a caption",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to delete a caption from.",
        "example": "vi4k0jvEUuaTdRAEjQ4Prklgc"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).\n\n- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error.\n- When the value in your request does not match any covered language, the API returns an error.\n- You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).",
        "example": "en"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/captions/{language}",
    "method": "getByLanguage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Captions",
    "typeScriptTag": "captions",
    "description": "Retrieve a caption",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want captions for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Prklg"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).\n\n- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error.\n- When the value in your request does not match any covered language, the API returns an error.\n- You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).",
        "example": "en"
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
      }
    ]
  },
  {
    "url": "/videos/{videoId}/captions/{language}",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Captions",
    "typeScriptTag": "captions",
    "description": "Update a caption",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to have automatic captions for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Prklg"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).\n\n- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error.\n- When the value in your request does not match any covered language, the API returns an error.\n- You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).",
        "example": "en"
      },
      {
        "name": "default",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/captions/{language}",
    "method": "uploadVttFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Captions",
    "typeScriptTag": "captions",
    "description": "Upload a caption",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to add a caption to.",
        "example": "vi4k0jvEUuaTdRAEjQ4Prklg"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid language identifier using IETF language tags. You can use primary subtags like `en` (English), extended subtags like `fr-CA` (French, Canada), or region subtags like `zh-Hans-CN` (Simplified Chinese used in the PRC).\n\n- This parameter **only accepts dashes for separators**, for example `fr-CA`. If you use a different separator in your request, the API returns an error.\n- When the value in your request does not match any covered language, the API returns an error.\n- You can find the list of supported tags [here](https://docs.api.video/vod/add-captions#supported-caption-language-tags).",
        "example": "en"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/videos/{videoId}/captions",
    "method": "listByVideoId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Captions",
    "typeScriptTag": "captions",
    "description": "List video captions",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to retrieve a list of captions for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Prklg"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/videos/{videoId}/chapters/{language}",
    "method": "deleteChapterInLanguage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Chapters",
    "typeScriptTag": "chapters",
    "description": "Delete a chapter",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to delete a chapter from.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.",
        "example": "en"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{videoId}/chapters/{language}",
    "method": "getChapterByLanguage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chapters",
    "typeScriptTag": "chapters",
    "description": "Retrieve a chapter",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to show a chapter for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.",
        "example": "en"
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
    "url": "/videos/{videoId}/chapters/{language}",
    "method": "uploadVttFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chapters",
    "typeScriptTag": "chapters",
    "description": "Upload a chapter",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to upload a chapter for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "A valid [BCP 47](https://github.com/libyal/libfwnt/wiki/Language-Code-identifiers) language representation.",
        "example": "en"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
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
      }
    ]
  },
  {
    "url": "/videos/{videoId}/chapters",
    "method": "listByVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chapters",
    "typeScriptTag": "chapters",
    "description": "List video chapters",
    "parameters": [
      {
        "name": "videoId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the video you want to retrieve a list of chapters for.",
        "example": "vi4k0jvEUuaTdRAEjQ4Jfrgz"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/players",
    "method": "players",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "List all player themes",
    "parameters": [
      {
        "name": "sortBy",
        "schema": "string",
        "required": false,
        "description": "createdAt is the time the player was created. updatedAt is the time the player was last updated. The time is presented in ISO-8601 format.",
        "example": "createdAt"
      },
      {
        "name": "sortOrder",
        "schema": "string",
        "required": false,
        "description": "Allowed: asc, desc. Ascending for date and time means that earlier values precede later ones. Descending means that later values preced earlier ones.",
        "example": "asc"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/players",
    "method": "players",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "Create a player",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkHover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackPlayed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackUnplayed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackBackground",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backgroundTop",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backgroundBottom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backgroundText",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableApi",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "enableControls",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "forceAutoplay",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "hideTitle",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "forceLoop",
        "schema": "boolean",
        "description": "",
        "default": false
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
    "url": "/players/{playerId}",
    "method": "deletePlayer",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "Delete a player",
    "parameters": [
      {
        "name": "playerId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the player you want to delete.",
        "example": "pl45d5vFFGrfdsdsd156dGhh"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/players/{playerId}",
    "method": "getThemeByPlayerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "Retrieve a player",
    "parameters": [
      {
        "name": "playerId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the player you want to retrieve. ",
        "example": "pl45d5vFFGrfdsdsd156dGhh"
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
    "url": "/players/{playerId}",
    "method": "updatePlayerDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "Update a player",
    "parameters": [
      {
        "name": "playerId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the player.",
        "example": "pl45d5vFFGrfdsdsd156dGhh"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkHover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkActive",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackPlayed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackUnplayed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trackBackground",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backgroundTop",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backgroundBottom",
        "schema": "string",
        "description": ""
      },
      {
        "name": "backgroundText",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enableApi",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "enableControls",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "forceAutoplay",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hideTitle",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "forceLoop",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/players/{playerId}/logo",
    "method": "removeLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "Delete logo",
    "parameters": [
      {
        "name": "playerId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the player.",
        "example": "pl14Db6oMJRH6SRVoOwORacK"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/players/{playerId}/logo",
    "method": "uploadLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Player Themes",
    "typeScriptTag": "playerThemes",
    "description": "Upload a logo",
    "parameters": [
      {
        "name": "playerId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier for the player.",
        "example": "pl14Db6oMJRH6SRVoOwORacK"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "mylogo.jpg"
      },
      {
        "name": "link",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://my-company.com"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/analytics/videos/plays",
    "method": "getVideoPlays",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Get play events for video",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Use this query parameter to set the start date for the time period that you want analytics for.\n- The API returns analytics data including the day you set in `from`.\n- The date you set must be **within the last 30 days**.\n- The value you provide must follow the `YYYY-MM-DD` format.\n",
        "example": "2023-06-01T00:00:00.000Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Use this optional query parameter to set the end date for the time period that you want analytics for.\n- If you do not specify a `to` date, the API returns analytics data starting from the `from` date up until today, and excluding today.\n- The date you set must be **within the last 30 days**.\n- The value you provide must follow the `YYYY-MM-DD` format.\n",
        "example": "2023-06-10T00:00:00.000Z"
      },
      {
        "name": "dimension",
        "schema": "string",
        "required": true,
        "description": "Use this query parameter to define the dimension that you want analytics for.\n- `videoId`: Returns analytics based on the public video identifiers.\n- `emittedAt`: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in `from` and `to` is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals.\n- `country`: Returns analytics based on the viewers' country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/).\n- `deviceType`: Returns analytics based on the type of device used by the viewers during the play event. Possible response values are: `computer`, `phone`, `tablet`, `tv`, `console`, `wearable`, `unknown`.\n- `operatingSystem`: Returns analytics based on the operating system used by the viewers during the play event. Response values include `windows`, `mac osx`, `android`, `ios`, `linux`.\n- `browser`: Returns analytics based on the browser used by the viewers during the play event. Response values include `chrome`, `firefox`, `edge`, `opera`.",
        "example": "browser"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Use this query parameter to filter your results to a specific video in a project that you want analytics for. You must use the `videoId:` prefix when specifying a video ID.",
        "example": "videoId:vi3q7HxhApxRF1c8F8r6VeaI"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/analytics/live-streams/plays",
    "method": "getLiveStreamPlays",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Analytics",
    "typeScriptTag": "analytics",
    "description": "Get play events for live stream",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Use this query parameter to set the start date for the time period that you want analytics for.\n- The API returns analytics data including the day you set in `from`.\n- The date you set must be **within the last 30 days**.\n- The value you provide must follow the `YYYY-MM-DD` format.\n",
        "example": "2023-06-01T00:00:00.000Z"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Use this optional query parameter to set the end date for the time period that you want analytics for.\n- If you do not specify a `to` date, the API returns analytics data starting from the `from` date up until today, and excluding today.\n- The date you set must be **within the last 30 days**.\n- The value you provide must follow the `YYYY-MM-DD` format.\n",
        "example": "2023-06-10T00:00:00.000Z"
      },
      {
        "name": "dimension",
        "schema": "string",
        "required": true,
        "description": "Use this query parameter to define the dimension that you want analytics for.\n- `liveStreamId`: Returns analytics based on the public live stream identifiers.\n- `emittedAt`: Returns analytics based on the times of the play events. The API returns data in specific interval groups. When the date period you set in `from` and `to` is less than or equals to 2 days, the response for this dimension is grouped in hourly intervals. Otherwise, it is grouped in daily intervals.\n- `country`: Returns analytics based on the viewers' country. The list of supported country names are based on the [GeoNames public database](https://www.geonames.org/countries/).\n- `deviceType`: Returns analytics based on the type of device used by the viewers during the play event. Possible response values are: `computer`, `phone`, `tablet`, `tv`, `console`, `wearable`, `unknown`.\n- `operatingSystem`: Returns analytics based on the operating system used by the viewers during the play event. Response values include `windows`, `mac osx`, `android`, `ios`, `linux`.\n- `browser`: Returns analytics based on the browser used by the viewers during the play event. Response values include `chrome`, `firefox`, `edge`, `opera`.",
        "example": "browser"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "Use this query parameter to filter your results to a specific live stream in a project that you want analytics for. You must use the `liveStreamId:` prefix when specifying a live stream ID.",
        "example": "liveStreamId:li3q7HxhApxRF1c8F8r6VeaI"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/webhooks",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List all webhooks",
    "parameters": [
      {
        "name": "events",
        "schema": "string",
        "required": false,
        "description": "The webhook event that you wish to filter on.",
        "example": "video.encoding.quality.completed"
      },
      {
        "name": "currentPage",
        "schema": "integer",
        "required": false,
        "description": "Choose the number of search results to return per page. Minimum value: 1",
        "example": 2,
        "default": 1
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "Results per page. Allowed values 1-100, default is 25.",
        "example": 30,
        "default": 25
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
    "url": "/webhooks",
    "method": "createWebhookEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create Webhook",
    "parameters": [
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "video.encoding.quality.completed"
        ]
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://example.com/webhooks"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "deleteWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "The webhook you wish to delete.",
        "example": "WEBHOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/{webhookId}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve Webhook details",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "The unique webhook you wish to retreive details on.",
        "example": "WEBHOOKID"
      }
    ],
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
      apiTitle="api.video"
      apiBaseUrl="https://ws.api.video"
      apiVersion="1"
      endpoints={26}
      sdkMethods={48}
      schemas={77}
      parameters={163}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/api-video/openapi.yaml"
    />
  );
}
  