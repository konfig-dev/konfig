import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function QuivrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="quivr-typescript-sdk"
      metaDescription={`Open-source RAG Framework`}
      company="Quivr"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/logo.png"
      companyKebabCase="quivr"
      clientNameCamelCase="quivr"
      homepage="quivr.app"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/favicon.jpg"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["open_source","data_pipeline","rag","llm","conversational_ai","second_brain"]}
      methods={[
  {
    "url": "/brains/public",
    "method": "getAllPublic",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Retrieve Public Brains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/brains/{brain_id}/secrets-values",
    "method": "updateSecretsValues",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Update Existing Brain Secrets",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/default",
    "method": "setDefault",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Set Brain As Default",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/documents",
    "method": "getQuestionContext",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Get Question Context For Brain",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
      },
      {
        "name": "question",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTION"
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
    "url": "/chat/healthz",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Healthz",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/chat",
    "method": "getAllChats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Get Chats",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/chat",
    "method": "createHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Create Chat Handler",
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
    "url": "/chat/{chat_id}",
    "method": "deleteChatById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Delete Chat",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
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
    "url": "/chat/{chat_id}/metadata",
    "method": "updateMetadataHandler",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Update Chat Metadata Handler",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
      },
      {
        "name": "chat_name",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/chat/{chat_id}/{message_id}",
    "method": "updateMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Update Chat Message",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
      },
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE_ID"
      },
      {
        "name": "thumbs",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
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
    "url": "/chat/{chat_id}/question",
    "method": "handleQuestion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Create Question Handler",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
      },
      {
        "name": "brainId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "question",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTION"
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "brain_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "prompt_id",
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
    "url": "/chat/{chat_id}/question/stream",
    "method": "createStreamQuestionHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Create Stream Question Handler",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
      },
      {
        "name": "brainId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "question",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTION"
      },
      {
        "name": "model",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "brain_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "prompt_id",
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
    "url": "/chat/{chat_id}/history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Get Chat History Handler",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
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
    "url": "/chat/{chat_id}/question/answer",
    "method": "addQuestionAndAnswer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Chat",
    "typeScriptTag": "chat",
    "description": "Add Question And Answer Handler",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
      },
      {
        "name": "question",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUESTION"
      },
      {
        "name": "answer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANSWER"
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
    "url": "/crawl/healthz",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Healthz",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/crawl",
    "method": "websiteDataProcessor",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Crawl",
    "typeScriptTag": "crawl",
    "description": "Crawl Endpoint",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brain",
        "example": "BRAIN_ID"
      },
      {
        "name": "chatId",
        "schema": "string",
        "required": false,
        "description": "The ID of the chat"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "js",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "depth",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 1
      },
      {
        "name": "max_pages",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 100
      },
      {
        "name": "max_time",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 60
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
    "url": "/onboarding",
    "method": "getUserInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Get User Onboarding Handler",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response when getting onboarding"
      }
    ]
  },
  {
    "url": "/onboarding",
    "method": "updateUserOnboarding",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Update User Onboarding Handler",
    "parameters": [
      {
        "name": "onboarding_a",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "onboarding_b1",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "onboarding_b2",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "onboarding_b3",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Response when getting onboarding"
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/",
    "method": "statusCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Root",
    "typeScriptTag": "root",
    "description": "Root",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/healthz",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Healthz",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/upload/healthz",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Healthz",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/upload",
    "method": "filePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Upload",
    "typeScriptTag": "upload",
    "description": "Upload File",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brain",
        "example": "BRAIN_ID"
      },
      {
        "name": "chatId",
        "schema": "string",
        "required": false,
        "description": "The ID of the chat"
      },
      {
        "name": "uploadFile",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPLOADFILE"
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
    "url": "/user",
    "method": "getUserInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get User Endpoint",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/identity",
    "method": "getIdentityRoute",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get User Identity Route",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user/identity",
    "method": "updateIdentityRoute",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update User Identity Route",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "onboarded",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "company_size",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usage_purpose",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-key",
    "method": "createNewKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Key",
    "typeScriptTag": "apiKey",
    "description": "Create Api Key",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api-key/{key_id}",
    "method": "deleteKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "API Key",
    "typeScriptTag": "apiKey",
    "description": "Delete Api Key",
    "parameters": [
      {
        "name": "keyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KEY_ID"
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
    "url": "/api-keys",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Key",
    "typeScriptTag": "apiKey",
    "description": "Get Api Keys",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/brains/{brain_id}/subscription",
    "method": "removeUserSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Remove User Subscription",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/subscription",
    "method": "getUserInvitation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BrainSubscription",
    "typeScriptTag": "brainSubscription",
    "description": "Get User Invitation",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/subscription",
    "method": "inviteUsersToBrain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BrainSubscription",
    "typeScriptTag": "brainSubscription",
    "description": "Invite Users To Brain",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
      },
      {
        "name": "origin",
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
    "url": "/brains/{brain_id}/subscription",
    "method": "updateSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Update Brain Subscription",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
      },
      {
        "name": "rights",
        "schema": "string",
        "required": false,
        "description": ""
      },
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
    "url": "/brains/{brain_id}/users",
    "method": "getUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Get Users With Brain Access",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/subscription/accept",
    "method": "acceptInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Accept Invitation",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/subscription/decline",
    "method": "declineInvitation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Decline Invitation",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/subscribe",
    "method": "brainHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Subscribe To Brain Handler",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}/unsubscribe",
    "method": "unregisterHandler",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "Unsubscribe From Brain Handler",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/prompts",
    "method": "getAllPublicPrompts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt",
    "typeScriptTag": "prompt",
    "description": "Get Prompts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/prompts",
    "method": "createPromptById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prompt",
    "typeScriptTag": "prompt",
    "description": "Create Prompt Route",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "status",
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
    "url": "/prompts/{prompt_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prompt",
    "typeScriptTag": "prompt",
    "description": "Get Prompt",
    "parameters": [
      {
        "name": "promptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROMPT_ID"
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
    "url": "/prompts/{prompt_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Prompt",
    "typeScriptTag": "prompt",
    "description": "Update Prompt",
    "parameters": [
      {
        "name": "promptId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROMPT_ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/{chat_id}",
    "method": "getByChatId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notification",
    "typeScriptTag": "notification",
    "description": "Get Notifications",
    "parameters": [
      {
        "name": "chatId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHAT_ID"
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
    "url": "/knowledge",
    "method": "getAllKnowledge",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge",
    "typeScriptTag": "knowledge",
    "description": "List Knowledge In Brain Endpoint",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "The ID of the brain",
        "example": "BRAIN_ID"
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
    "url": "/knowledge/{knowledge_id}",
    "method": "deleteSpecificBrainKnowledge",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Knowledge",
    "typeScriptTag": "knowledge",
    "description": "Delete Endpoint",
    "parameters": [
      {
        "name": "knowledgeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KNOWLEDGE_ID"
      },
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/knowledge/{knowledge_id}/signed_download_url",
    "method": "generateSignedUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Knowledge",
    "typeScriptTag": "knowledge",
    "description": "Generate Signed Url Endpoint",
    "parameters": [
      {
        "name": "knowledgeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "KNOWLEDGE_ID"
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
    "url": "/contact",
    "method": "createNewContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Post Contact",
    "parameters": [
      {
        "name": "customer_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMER_EMAIL"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
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
    "url": "/brains/integrations",
    "method": "getDescription",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Get Integration Brain Description",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/brains",
    "method": "getAllForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Retrieve All Brains For User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/brains",
    "method": "createNewBrain",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Create New Brain",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "default": "This is a description"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "default": "Default brain"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "default": "private"
      },
      {
        "name": "model",
        "schema": "string",
        "description": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "description": "",
        "default": 2000
      },
      {
        "name": "prompt_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brain_type",
        "schema": "string",
        "description": "",
        "default": "doc"
      },
      {
        "name": "brain_definition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "brain_secrets_values",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "connected_brains_ids",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "integration",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/brains/default",
    "method": "getDefaultBrain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Retrieve Default Brain",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/brains/{brain_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Retrieve Brain By Id",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
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
    "url": "/brains/{brain_id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Brain",
    "typeScriptTag": "brain",
    "description": "Update Existing Brain",
    "parameters": [
      {
        "name": "brainId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BRAIN_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "temperature",
        "schema": "number",
        "description": ""
      },
      {
        "name": "model",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_tokens",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prompt_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brain_definition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "connected_brains_ids",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "integration",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="FastAPI"
      apiBaseUrl="https://api.quivr.app"
      apiVersion="0.1.0"
      endpoints={43}
      sdkMethods={53}
      schemas={99}
      parameters={105}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/quivr/openapi.yaml"
      developerDocumentation="docs.quivr.app"
    />
  );
}
  