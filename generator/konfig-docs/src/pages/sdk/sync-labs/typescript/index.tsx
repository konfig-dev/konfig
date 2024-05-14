import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
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
      companyKebabCase="sync-labs"
      clientNameCamelCase="syncLabs"
      homepage="synclabs.so"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/imagePreview.png"
      GettingStarted={GettingStarted}
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
        "default": "sync-1.6.0"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/voices/cost",
    "method": "voiceCost",
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
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/voices/create",
    "method": "createVoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This is a test voice. It's used for testing purposes."
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Test voice"
      },
      {
        "name": "inputSamples",
        "schema": "array",
        "required": true,
        "description": ""
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/voices/{id}",
    "method": "getVoice",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
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
      },
      {
        "statusCode": "403",
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
        "example": "https://synchlabs-public.s3.us-west-2.amazonaws.com/david_demo_shortaud-27623a4f-edab-4c6a-8383-871b18961a4a.wav"
      },
      {
        "name": "videoUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://synchlabs-public.s3.us-west-2.amazonaws.com/david_demo_shortvid-03a10044-7741-4cfc-816a-5bccd392d1ee.mp4"
      },
      {
        "name": "maxCredits",
        "schema": "number",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sync-1.6.0",
        "default": "sync-1.6.0"
      },
      {
        "name": "synergize",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": true
      },
      {
        "name": "pads",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          0,
          5,
          0,
          0
        ]
      },
      {
        "name": "synergizerStrength",
        "schema": "number",
        "required": false,
        "description": "",
        "example": 1
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
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
      },
      {
        "statusCode": "403",
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
        "example": "https://synchlabs-public.s3.us-west-2.amazonaws.com/david_demo_shortvid-03a10044-7741-4cfc-816a-5bccd392d1ee.mp4"
      },
      {
        "name": "targetLanguage",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "en",
        "default": "en"
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
        "example": "sync-1.6.0",
        "default": "sync-1.6.0"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
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
      },
      {
        "statusCode": "403",
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
        "example": "Hello, I hope you enjoy this audio!"
      },
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "e5361405-4967-446d-ad63-2f6ed8729c66",
        "default": "e5361405-4967-446d-ad63-2f6ed8729c66"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
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
      },
      {
        "statusCode": "403",
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
        "example": "https://synchlabs-public.s3.us-west-2.amazonaws.com/david_demo_shortvid-03a10044-7741-4cfc-816a-5bccd392d1ee.mp4"
      },
      {
        "name": "transcript",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Hello, welcome to our video!"
      },
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "e5361405-4967-446d-ad63-2f6ed8729c66",
        "default": "e5361405-4967-446d-ad63-2f6ed8729c66"
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "sync-1.6.0",
        "default": "sync-1.6.0"
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
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
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
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
      endpoints={19}
      sdkMethods={19}
      schemas={20}
      parameters={49}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sync-labs/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sync-labs/openapi.yaml"
      developerDocumentation="docs.synclabs.so/api-reference/introduction"
    />
  );
}
  