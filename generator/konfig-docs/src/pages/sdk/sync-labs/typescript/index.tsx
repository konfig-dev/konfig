import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SyncLabsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sync-labs-typescript-sdk"
      metaDescription={`building generative models to modify + synthesize humans in video. 

the first product we released is our synchronizer – a state-of-the-art lip-syncing model to sync a video to any audio in any language. 

why is this important?

Imagine a world where you can watch your favorite films, content creators, or learn anything you want in your native tongue — seamlessly.

language should no longer be a barrier. 

we're building a suite of audio / video models to change how we live, work, and play.`}
      company="sync. labs"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/logo.png"
      clientNameCamelCase="syncLabs"
      homepage="synclabs.so"
      lastUpdated={new Date("2024-03-13T17:47:38.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["ai","audio_generation","video","language","media"]}
      methods={[
  {
    "url": "/video/cost",
    "method": "cost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "video",
    "typeScriptTag": "video",
    "description": "",
    "parameters": [
      {
        "name": "audioUrl",
        "schema": "string",
        "required": true,
        "description": "A url to the audio file to be synchronized -- must be publicly accessible",
        "example": "AUDIOURL"
      },
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "A url to the video file to be synchronized -- must be publicly accessible",
        "example": "VIDEOURL"
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
    "url": "/video",
    "method": "lipSync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "video",
    "typeScriptTag": "video",
    "description": "",
    "parameters": [
      {
        "name": "audioUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUDIOURL"
      },
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOURL"
      },
      {
        "name": "synergize",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "maxCredits",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "webhookUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sync-1.5.0"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/video/{id}",
    "method": "getLipSyncJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "video",
    "typeScriptTag": "video",
    "description": "",
    "parameters": [
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/lipsync/cost",
    "method": "lipsyncCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lipsync",
    "typeScriptTag": "lipsync",
    "description": "",
    "parameters": [
      {
        "name": "audioUrl",
        "schema": "string",
        "required": true,
        "description": "A url to the audio file to be synchronized -- must be publicly accessible",
        "example": "AUDIOURL"
      },
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "A url to the video file to be synchronized -- must be publicly accessible",
        "example": "VIDEOURL"
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
    "url": "/lipsync",
    "method": "lipSync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "lipsync",
    "typeScriptTag": "lipsync",
    "description": "",
    "parameters": [
      {
        "name": "audioUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUDIOURL"
      },
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOURL"
      },
      {
        "name": "synergize",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "maxCredits",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "webhookUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sync-1.5.0"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/lipsync/{id}",
    "method": "getLipsync",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "lipsync",
    "typeScriptTag": "lipsync",
    "description": "",
    "parameters": [
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/voices",
    "method": "voices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
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
    "url": "/translate/cost",
    "method": "translationCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "",
    "parameters": [
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "A url to the video file to be synchronized -- must be publicly accessible",
        "example": "VIDEOURL"
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
    "url": "/translate",
    "method": "translate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "",
    "parameters": [
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOURL"
      },
      {
        "name": "targetLanguage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETLANGUAGE"
      },
      {
        "name": "maxCredits",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "webhookUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sync-1.5.0"
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
    "url": "/translate/{id}",
    "method": "getTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "",
    "parameters": [
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/speak/cost",
    "method": "speakCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "speak",
    "typeScriptTag": "speak",
    "description": "",
    "parameters": [
      {
        "name": "transcript",
        "schema": "string",
        "required": false,
        "description": "A string of text to be spoken by the AI"
      },
      {
        "name": "transcriptUrl",
        "schema": "string",
        "required": false,
        "description": "A url pointing to a file of text to be spoken by the AI"
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
    "url": "/speak",
    "method": "speak",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "speak",
    "typeScriptTag": "speak",
    "description": "",
    "parameters": [
      {
        "name": "transcript",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSCRIPT"
      },
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VOICEID"
      },
      {
        "name": "maxCredits",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "webhookUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
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
    "url": "/speak/{id}",
    "method": "getSpeech",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "speak",
    "typeScriptTag": "speak",
    "description": "",
    "parameters": [
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/animate/cost",
    "method": "animateCost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "animate",
    "typeScriptTag": "animate",
    "description": "",
    "parameters": [
      {
        "name": "transcript",
        "schema": "string",
        "required": false,
        "description": "A string of text to be spoken by the AI"
      },
      {
        "name": "transcriptUrl",
        "schema": "string",
        "required": false,
        "description": "A url pointing to a file of text to be spoken by the AI"
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
    "url": "/animate",
    "method": "animate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "animate",
    "typeScriptTag": "animate",
    "description": "",
    "parameters": [
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VIDEOURL"
      },
      {
        "name": "transcript",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TRANSCRIPT"
      },
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VOICEID"
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "sync-1.5.0"
      },
      {
        "name": "maxCredits",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "webhookUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
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
    "url": "/animate/{id}",
    "method": "getAnimation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "animate",
    "typeScriptTag": "animate",
    "description": "",
    "parameters": [
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
        "statusCode": "default",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Synchronize API"
      apiBaseUrl="https://api.synclabs.so"
      apiVersion="1.0"
      endpoints={16}
      sdkMethods={16}
      schemas={15}
      parameters={41}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sync-labs/openapi.yaml"
      developerDocumentation="docs.synclabs.so/api-reference/introduction"
    />
  );
}
  