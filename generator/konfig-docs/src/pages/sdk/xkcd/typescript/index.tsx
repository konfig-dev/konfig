import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function XkcdTypeScriptSdk() {
  return (
    <Sdk
      sdkName="xkcd-typescript-sdk"
      metaDescription="xkcd is a webcomic of romance, sarcasm, math, and language. It delivers a mix of humor and intelligence through its stick-figure comics that explore various topics such as science, technology, and pop culture in a witty and insightful manner."
      company="xkcd"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/logo.png"
      clientNameCamelCase="xkcd"
      homepage="xkcd.com/"
      lastUpdated={new Date("2024-03-13T01:35:30.474Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["media"]}
      methods={[
  {
    "url": "/info.0.json",
    "method": "getComicMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Info",
    "typeScriptTag": "info",
    "description": "Fetch current comic and metadata.\n",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/{comicId}/info.0.json",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Info",
    "typeScriptTag": "info",
    "description": "Fetch comics and metadata  by comic id.\n",
    "parameters": [
      {
        "name": "comicId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
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
      apiTitle="XKCD"
      apiBaseUrl="http://xkcd.com/"
      apiVersion="1.0.0"
      endpoints={2}
      sdkMethods={2}
      schemas={1}
      parameters={1}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xkcd/openapi.yaml"
    />
  );
}
  