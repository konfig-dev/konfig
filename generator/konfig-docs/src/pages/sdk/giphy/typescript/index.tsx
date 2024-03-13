import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function GiphyTypeScriptSdk() {
  return (
    <Sdk
      sdkName="giphy-typescript-sdk"
      metaDescription="Giphy is a platform that provides a vast collection of animated GIFs and stickers for users to express themselves in various online conversations. It offers a wide range of categories and search functionalities to easily find and share engaging visual content across social media, messaging platforms, and more."
      company="Giphy"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/logo.png"
      clientNameCamelCase="giphy"
      homepage="giphy.com"
      lastUpdated={new Date("2024-03-13T01:24:30.233Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/favicon.png"
      // Missing contactUrl
      contactEmail="support@giphy.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["media","collaboration","social_media","animated_gifs","stickers","visual_content"]}
      methods={[
  {
    "url": "/gifs",
    "method": "getByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gifs",
    "typeScriptTag": "gifs",
    "description": "Get GIFs by ID",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "description": "Filters results by specified GIF IDs, separated by commas."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gifs/random",
    "method": "getRandomGif",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gifs",
    "typeScriptTag": "gifs",
    "description": "Random GIF",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filters results by specified tag."
      },
      {
        "name": "rating",
        "schema": "string",
        "description": "Filters results by specified rating."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gifs/search",
    "method": "searchGifs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gifs",
    "typeScriptTag": "gifs",
    "description": "Search GIFs",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "Search query term or prhase.",
        "example": "Q"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return.",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "An optional results offset.",
        "default": 0
      },
      {
        "name": "rating",
        "schema": "string",
        "description": "Filters results by specified rating."
      },
      {
        "name": "lang",
        "schema": "string",
        "description": "Specify default language for regional content; use a 2-letter ISO 639-1 language code."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gifs/translate",
    "method": "translatePhraseGif",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gifs",
    "typeScriptTag": "gifs",
    "description": "Translate phrase to GIF",
    "parameters": [
      {
        "name": "s",
        "schema": "string",
        "required": true,
        "description": "Search term.",
        "example": "S"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gifs/trending",
    "method": "getTrendingGifs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gifs",
    "typeScriptTag": "gifs",
    "description": "Trending GIFs",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return.",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "An optional results offset.",
        "default": 0
      },
      {
        "name": "rating",
        "schema": "string",
        "description": "Filters results by specified rating."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/gifs/{gifId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "gifs",
    "typeScriptTag": "gifs",
    "description": "Get GIF by Id",
    "parameters": [
      {
        "name": "gifId",
        "schema": "integer",
        "required": true,
        "description": "Filters results by specified GIF ID.",
        "example": 0
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/stickers/random",
    "method": "getRandom",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stickers",
    "typeScriptTag": "stickers",
    "description": "Random Sticker",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filters results by specified tag."
      },
      {
        "name": "rating",
        "schema": "string",
        "description": "Filters results by specified rating."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/stickers/search",
    "method": "findAnimatedStickers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stickers",
    "typeScriptTag": "stickers",
    "description": "Search Stickers",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": "Search query term or prhase.",
        "example": "Q"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return.",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "An optional results offset.",
        "default": 0
      },
      {
        "name": "rating",
        "schema": "string",
        "description": "Filters results by specified rating."
      },
      {
        "name": "lang",
        "schema": "string",
        "description": "Specify default language for regional content; use a 2-letter ISO 639-1 language code."
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/stickers/translate",
    "method": "translatePhraseToSticker",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stickers",
    "typeScriptTag": "stickers",
    "description": "Translate phrase to Sticker",
    "parameters": [
      {
        "name": "s",
        "schema": "string",
        "required": true,
        "description": "Search term.",
        "example": "S"
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
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/stickers/trending",
    "method": "getTrending",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stickers",
    "typeScriptTag": "stickers",
    "description": "Trending Stickers",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return.",
        "default": 25
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "An optional results offset.",
        "default": 0
      },
      {
        "name": "rating",
        "schema": "string",
        "description": "Filters results by specified rating."
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
      apiTitle="Giphy API"
      apiBaseUrl="https://api.giphy.com/v1"
      apiVersion="1.0"
      endpoints={10}
      sdkMethods={10}
      schemas={15}
      parameters={24}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/giphy/openapi.yaml"
    />
  );
}
  