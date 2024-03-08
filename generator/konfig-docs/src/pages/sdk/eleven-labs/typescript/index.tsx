import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function ElevenLabsTypeScriptSdk() {
  return (
    <Sdk
      sdkName="eleven-labs-typescript-sdk"
      metaDescription="Elevate your projects with the fastest & most powerful text to speech & voice API. Quickly generate AI voices in multiple languages for your chatbots, agents, LLMs, websites, apps and more."
      company="ElevenLabs"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/logo.png"
      clientNameCamelCase="elevenLabs"
      homepage="elevenlabs.com"
      lastUpdated={new Date("2024-03-08T23:53:01.279Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v1/history",
    "method": "getGeneratedAudioMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "speech-history",
    "typeScriptTag": "speechHistory",
    "description": "Get Generated Items",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "How many history items to return at maximum. Can not exceed 1000, defaults to 100."
      },
      {
        "name": "startAfterHistoryItemId",
        "schema": "string",
        "required": false,
        "description": "After which ID to start fetching, use this parameter to paginate across a large collection of history items. In case this parameter is not provided history items will be fetched starting from the most recently created one ordered descending by their creation date."
      },
      {
        "name": "voiceId",
        "schema": "string",
        "required": false,
        "description": "Voice ID to be filtered for, you can use GET https://api.elevenlabs.io/v1/voices to receive a list of voices and their IDs."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/history/{history_item_id}",
    "method": "deleteHistoryItemById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "speech-history",
    "typeScriptTag": "speechHistory",
    "description": "Delete History Item",
    "parameters": [
      {
        "name": "historyItemId",
        "schema": "string",
        "required": true,
        "description": "History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/history/{history_item_id}",
    "method": "getHistoryItemById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "speech-history",
    "typeScriptTag": "speechHistory",
    "description": "Get History Item By Id",
    "parameters": [
      {
        "name": "historyItemId",
        "schema": "string",
        "required": true,
        "description": "History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/history/{history_item_id}/audio",
    "method": "getHistoryItemAudio",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "speech-history",
    "typeScriptTag": "speechHistory",
    "description": "Get Audio From History Item",
    "parameters": [
      {
        "name": "historyItemId",
        "schema": "string",
        "required": true,
        "description": "History item ID to be used, you can use GET https://api.elevenlabs.io/v1/history to receive a list of history items and their IDs."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/history/download",
    "method": "downloadHistoryItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "speech-history",
    "typeScriptTag": "speechHistory",
    "description": "Download History Items",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "history_item_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}/samples/{sample_id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "samples",
    "typeScriptTag": "samples",
    "description": "Delete Sample",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "sampleId",
        "schema": "string",
        "required": true,
        "description": "Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}/samples/{sample_id}/audio",
    "method": "getAudioFromSample",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "samples",
    "typeScriptTag": "samples",
    "description": "Get Audio From Sample",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "sampleId",
        "schema": "string",
        "required": true,
        "description": "Sample ID to be used, you can use GET https://api.elevenlabs.io/v1/voices/{voice_id} to list all the available samples for a voice."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/text-to-speech/{voice_id}",
    "method": "convertTextToSpeech",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "text-to-speech",
    "typeScriptTag": "textToSpeech",
    "description": "Text To Speech",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "optimizeStreamingLatency",
        "schema": "integer",
        "required": false,
        "description": "You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values:\n0 - default mode (no latency optimizations)\n1 - normal latency optimizations (about 50% of possible latency improvement of option 3)\n2 - strong latency optimizations (about 75% of possible latency improvement of option 3)\n3 - max latency optimizations\n4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).\n\nDefaults to 0.\n"
      },
      {
        "name": "outputFormat",
        "schema": "string",
        "required": false,
        "description": "Output format of the generated audio. Must be one of:\nmp3_22050_32 - output format, mp3 with 22.05kHz sample rate at 32kbps.\nmp3_44100_32 - output format, mp3 with 44.1kHz sample rate at 32kbps.\nmp3_44100_64 - output format, mp3 with 44.1kHz sample rate at 64kbps.\nmp3_44100_96 - output format, mp3 with 44.1kHz sample rate at 96kbps.\nmp3_44100_128 - default output format, mp3 with 44.1kHz sample rate at 128kbps.\nmp3_44100_192 - output format, mp3 with 44.1kHz sample rate at 192kbps. Requires you to be subscribed to Creator tier or above.\npcm_16000 - PCM format (S16LE) with 16kHz sample rate.\npcm_22050 - PCM format (S16LE) with 22.05kHz sample rate.\npcm_24000 - PCM format (S16LE) with 24kHz sample rate.\npcm_44100 - PCM format (S16LE) with 44.1kHz sample rate. Requires you to be subscribed to Independent Publisher tier or above.\nulaw_8000 - μ-law format (sometimes written mu-law, often approximated as u-law) with 8kHz sample rate. Note that this format is commonly used for Twilio audio inputs.\n"
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "model_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "voice_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "pronunciation_dictionary_locators",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/text-to-speech/{voice_id}/stream",
    "method": "convertTextToSpeechStream",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "text-to-speech",
    "typeScriptTag": "textToSpeech",
    "description": "Text To Speech",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "optimizeStreamingLatency",
        "schema": "integer",
        "required": false,
        "description": "You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values:\n0 - default mode (no latency optimizations)\n1 - normal latency optimizations (about 50% of possible latency improvement of option 3)\n2 - strong latency optimizations (about 75% of possible latency improvement of option 3)\n3 - max latency optimizations\n4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).\n\nDefaults to 0.\n"
      },
      {
        "name": "outputFormat",
        "schema": "string",
        "required": false,
        "description": "Output format of the generated audio. Must be one of:\nmp3_22050_32 - output format, mp3 with 22.05kHz sample rate at 32kbps.\nmp3_44100_32 - output format, mp3 with 44.1kHz sample rate at 32kbps.\nmp3_44100_64 - output format, mp3 with 44.1kHz sample rate at 64kbps.\nmp3_44100_96 - output format, mp3 with 44.1kHz sample rate at 96kbps.\nmp3_44100_128 - default output format, mp3 with 44.1kHz sample rate at 128kbps.\nmp3_44100_192 - output format, mp3 with 44.1kHz sample rate at 192kbps. Requires you to be subscribed to Creator tier or above.\npcm_16000 - PCM format (S16LE) with 16kHz sample rate.\npcm_22050 - PCM format (S16LE) with 22.05kHz sample rate.\npcm_24000 - PCM format (S16LE) with 24kHz sample rate.\npcm_44100 - PCM format (S16LE) with 44.1kHz sample rate. Requires you to be subscribed to Independent Publisher tier or above.\nulaw_8000 - μ-law format (sometimes written mu-law, often approximated as u-law) with 8kHz sample rate. Note that this format is commonly used for Twilio audio inputs.\n"
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "model_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "voice_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "pronunciation_dictionary_locators",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/speech-to-speech/{voice_id}",
    "method": "createWithVoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "speech-to-speech",
    "typeScriptTag": "speechToSpeech",
    "description": "Speech To Speech",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "optimizeStreamingLatency",
        "schema": "integer",
        "required": false,
        "description": "You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values:\n0 - default mode (no latency optimizations)\n1 - normal latency optimizations (about 50% of possible latency improvement of option 3)\n2 - strong latency optimizations (about 75% of possible latency improvement of option 3)\n3 - max latency optimizations\n4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).\n\nDefaults to 0.\n"
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "audio",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "model_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "voice_settings",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/speech-to-speech/{voice_id}/stream",
    "method": "createWithVoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "speech-to-speech",
    "typeScriptTag": "speechToSpeech",
    "description": "Speech To Speech Streaming",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "optimizeStreamingLatency",
        "schema": "integer",
        "required": false,
        "description": "You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model. Possible values:\n0 - default mode (no latency optimizations)\n1 - normal latency optimizations (about 50% of possible latency improvement of option 3)\n2 - strong latency optimizations (about 75% of possible latency improvement of option 3)\n3 - max latency optimizations\n4 - max latency optimizations, but also with text normalizer turned off for even more latency savings (best latency, but can mispronounce eg numbers and dates).\n\nDefaults to 0.\n"
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "audio",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "model_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "voice_settings",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voice-generation/generate-voice/parameters",
    "method": "getVoiceGenerationParameters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voice-generation",
    "typeScriptTag": "voiceGeneration",
    "description": "Voice Generation Parameters",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voice-generation/generate-voice",
    "method": "generateRandomVoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voice-generation",
    "typeScriptTag": "voiceGeneration",
    "description": "Generate A Random Voice",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "gender",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "accent",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "age",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "accent_strength",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "text",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voice-generation/create-voice",
    "method": "createVoice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voice-generation",
    "typeScriptTag": "voiceGeneration",
    "description": "Create A Previously Generated Voice",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "voice_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "voice_description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "generated_voice_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "labels",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/user/subscription",
    "method": "getSubscriptionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Get User Subscription Info",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/user",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "user",
    "typeScriptTag": "user",
    "description": "Get User Info",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices",
    "method": "listAllVoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Get Voices",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/settings/default",
    "method": "getDefaultVoiceSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Get Default Voice Settings.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}/settings",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Get Voice Settings",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Delete Voice",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}",
    "method": "getVoiceMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Get Voice",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "withSettings",
        "schema": "boolean",
        "required": false,
        "description": "If set will return settings information corresponding to the voice, requires authorization."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}/settings/edit",
    "method": "editSettingsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Edit Voice Settings",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "stability",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "similarity_boost",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "style",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "use_speaker_boost",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/add",
    "method": "addVoiceToCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Add Voice",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "labels",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/{voice_id}/edit",
    "method": "updateVoiceById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Edit Voice",
    "parameters": [
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "files",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/voices/add/{public_user_id}/{voice_id}",
    "method": "addToCollection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Add Sharing Voice",
    "parameters": [
      {
        "name": "publicUserId",
        "schema": "string",
        "required": true,
        "description": "Public user ID used to publicly identify ElevenLabs users."
      },
      {
        "name": "voiceId",
        "schema": "string",
        "required": true,
        "description": "Voice ID to be used, you can use https://api.elevenlabs.io/v1/voices to list all the available voices."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "new_name",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects",
    "method": "getAllProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get Projects",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/add",
    "method": "createNewProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Add Project",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "from_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "from_document",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "default_title_voice_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "default_paragraph_voice_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "default_model_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "quality_preset",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isbn_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "acx_volume_normalization",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "volume_normalization",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "pronunciation_dictionary_locators",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "callback_url",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get Project By Id",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/convert",
    "method": "startConversion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Convert Project",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/snapshots",
    "method": "listSnapshots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get Project Snapshots",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/snapshots/{project_snapshot_id}/stream",
    "method": "streamAudioFromSnapshot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Stream Project Audio",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "projectSnapshotId",
        "schema": "string",
        "required": true,
        "description": "The project_snapshot_id of the project snapshot. You can query GET /v1/projects/{project_id}/snapshots to list all available snapshots for a project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/chapters",
    "method": "listChapters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get Chapters",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/chapters/{chapter_id}",
    "method": "deleteChapterById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Delete Chapter",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "chapterId",
        "schema": "string",
        "required": true,
        "description": "The chapter_id of the chapter. You can query GET https://api.elevenlabs.io/v1/projects/{project_id}/chapters to list all available chapters for a project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/chapters/{chapter_id}",
    "method": "getChapterById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get Chapter By Id",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "chapterId",
        "schema": "string",
        "required": true,
        "description": "The chapter_id of the chapter. You can query GET https://api.elevenlabs.io/v1/projects/{project_id}/chapters to list all available chapters for a project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/chapters/{chapter_id}/convert",
    "method": "startChapterConversion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Convert Chapter",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "chapterId",
        "schema": "string",
        "required": true,
        "description": "The chapter_id of the chapter. You can query GET https://api.elevenlabs.io/v1/projects/{project_id}/chapters to list all available chapters for a project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/chapters/{chapter_id}/snapshots",
    "method": "getChapterSnapshots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Get Chapter Snapshots",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "chapterId",
        "schema": "string",
        "required": true,
        "description": "The chapter_id of the chapter. You can query GET https://api.elevenlabs.io/v1/projects/{project_id}/chapters to list all available chapters for a project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/chapters/{chapter_id}/snapshots/{chapter_snapshot_id}/stream",
    "method": "streamAudioFromSnapshotPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Stream Chapter Audio",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "chapterId",
        "schema": "string",
        "required": true,
        "description": "The chapter_id of the chapter. You can query GET https://api.elevenlabs.io/v1/projects/{project_id}/chapters to list all available chapters for a project."
      },
      {
        "name": "chapterSnapshotId",
        "schema": "string",
        "required": true,
        "description": "The chapter_snapshot_id of the chapter snapshot. You can query GET /v1/projects/{project_id}/chapters/{chapter_id}/snapshots to the all available snapshots for a chapter."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Successful Response"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/projects/{project_id}/update-pronunciation-dictionaries",
    "method": "updatePronunciationDictionaries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "projects",
    "typeScriptTag": "projects",
    "description": "Update Pronunciation Dictionaries",
    "parameters": [
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "The project_id of the project, you can query GET https://api.elevenlabs.io/v1/projects to list all available projects."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "pronunciation_dictionary_locators",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dubbing",
    "method": "fileInLanguage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dubbing",
    "typeScriptTag": "dubbing",
    "description": "Dub A Video Or An Audio File",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "mode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "csv_file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "foreground_audio_file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "background_audio_file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source_lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "target_lang",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "num_speakers",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "watermark",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end_time",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "highest_resolution",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "dubbing_studio",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dubbing/{dubbing_id}",
    "method": "deleteProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "dubbing",
    "typeScriptTag": "dubbing",
    "description": "Delete Dubbing Project",
    "parameters": [
      {
        "name": "dubbingId",
        "schema": "string",
        "required": true,
        "description": "ID of the dubbing project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dubbing/{dubbing_id}",
    "method": "getProjectMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dubbing",
    "typeScriptTag": "dubbing",
    "description": "Get Dubbing Project Metadata",
    "parameters": [
      {
        "name": "dubbingId",
        "schema": "string",
        "required": true,
        "description": "ID of the dubbing project."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/dubbing/{dubbing_id}/audio/{language_code}",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dubbing",
    "typeScriptTag": "dubbing",
    "description": "Get Dubbed File",
    "parameters": [
      {
        "name": "dubbingId",
        "schema": "string",
        "required": true,
        "description": "ID of the dubbing project."
      },
      {
        "name": "languageCode",
        "schema": "string",
        "required": true,
        "description": "ID of the language."
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/{admin_url_prefix}/sso-provider",
    "method": "getSsoProviderAdmin",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workspace",
    "typeScriptTag": "workspace",
    "description": "Get Sso Provider Admin",
    "parameters": [
      {
        "name": "workspaceId",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/models",
    "method": "listAvailableModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "models",
    "typeScriptTag": "models",
    "description": "Get Models",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/audio-native",
    "method": "createProjectWithEmbeddableHtml",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "audio-native",
    "typeScriptTag": "audioNative",
    "description": "Creates Audionative Enabled Project.",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "small",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "text_color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "background_color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sessionization",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "voice_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "model_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "auto_convert",
        "schema": "boolean",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/shared-voices",
    "method": "getSharedVoices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "voices",
    "typeScriptTag": "voices",
    "description": "Get Voices",
    "parameters": [
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "How many shared voices to return at maximum. Can not exceed 500, defaults to 30."
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": "voice category used for filtering"
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": "gender used for filtering"
      },
      {
        "name": "age",
        "schema": "string",
        "required": false,
        "description": "age used for filtering"
      },
      {
        "name": "accent",
        "schema": "string",
        "required": false,
        "description": "accent used for filtering"
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "search term used for filtering"
      },
      {
        "name": "useCases",
        "schema": "array",
        "required": false,
        "description": "use-case used for filtering"
      },
      {
        "name": "descriptives",
        "schema": "array",
        "required": false,
        "description": "search term used for filtering"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "sort criteria"
      },
      {
        "name": "featured",
        "schema": "boolean",
        "required": false,
        "description": "Filter featured voices"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/pronunciation-dictionaries/add-from-file",
    "method": "createFromFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pronunciation Dictionary",
    "typeScriptTag": "pronunciationDictionary",
    "description": "Add A Pronunciation Dictionary",
    "parameters": [
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/docs",
    "method": "toMintlifyDocsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "redirect",
    "typeScriptTag": "redirect",
    "description": "Redirect To Mintlify",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/pronunciation-dictionaries/{pronunciation_dictionary_id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pronunciation Dictionary",
    "typeScriptTag": "pronunciationDictionary",
    "description": "Get Metadata For A Pronunciation Dictionary",
    "parameters": [
      {
        "name": "pronunciationDictionaryId",
        "schema": "string",
        "required": true,
        "description": "The id of the pronunciation dictionary"
      },
      {
        "name": "xiApiKey",
        "schema": "string",
        "required": false,
        "description": "Your API key. This is required by most endpoints to access our API programatically. You can view your xi-api-key using the 'Profile' tab on the website."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="ElevenLabs API Documentation"
      apiBaseUrl="https://api.elevenlabs.io"
      apiVersion="1.0"
      endpoints={45}
      sdkMethods={50}
      schemas={59}
      parameters={188}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/elevenlabs/openapi.yaml"
    />
  );
}
  