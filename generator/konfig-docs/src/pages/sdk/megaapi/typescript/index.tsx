import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MegaapiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="megaapi-typescript-sdk"
      metaDescription={`Está precisando de uma API para integrar o sistema da empresa em que você trabalha ao WhatsApp?
A MEGAAPI é a melhor api whatsapp do Brasil.
Utilize a nossa API no seu sistema para enviar catálogos de produtos, cobranças automáticas, agendamento de consultas, enviar pesquisas de satisfação e outras inúmeras feautures para você escolher a que encaixa no perfil da sua empresa.
Integre seu sistema agora mesmo no Whatsapp
Api muito simples e fácil de utilizar
🎧 Suporte Nacional
💰 Pagamento Nacional e Internacional`}
      company="Megaapi"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/logo.png"
      companyKebabCase="megaapi"
      clientNameCamelCase="megaapi"
      homepage="mega-api.app.br/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/favicon.png"
      contactUrl="https://mega-api.app.br"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["api","messaging","whatsapp","communication"]}
      methods={[
  {
    "url": "/rest/instance/{instance_key}",
    "method": "getInstanceStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Get an status of instance",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/downloadMediaMessage/{instance_key}",
    "method": "downloadMediaMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageKeys",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/isOnWhatsApp/{instance_key}",
    "method": "checkIfNumberExistsInWhatsApp",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Check if the number exists in whatsapp",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "jid",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/qrcode/{instance_key}",
    "method": "getQrCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Get the qrcode",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/qrcode_base64/{instance_key}",
    "method": "getQrCodeBase64",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Get the qrcode in base64 format",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/pairingCode/{instance_key}",
    "method": "getPairingCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Get the pairing code to login",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/{instance_key}/logout",
    "method": "logoutInstanceKey",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Logout from an instance",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/instance/{instance_key}/restart",
    "method": "restartInstance",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "InstanceController",
    "typeScriptTag": "instanceController",
    "description": "Restart an instance",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/webhook/{instance_key}",
    "method": "getInstanceData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WebhookController",
    "typeScriptTag": "webhookController",
    "description": "Get an instance webhook data",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/webhook/{instance_key}/configWebhook",
    "method": "configureWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WebhookController",
    "typeScriptTag": "webhookController",
    "description": "",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/text",
    "method": "sendTextMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send a text message to an WhatsApp User",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/mediaUrl",
    "method": "sendMediaViaUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send a media message via a URL",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/mediaBase64",
    "method": "sendMediaBase64",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send a media message via Base64",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/location",
    "method": "sendLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send an location to an WhatsApp User",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/sendLinkPreview",
    "method": "sendMessageLinkPreview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send a message with link preview",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/listMessage",
    "method": "listMessageToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send an List Message to an User",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/contactMessage",
    "method": "sendVcardMessageToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Send an Vcard message to an User",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/forwardMessage",
    "method": "forwardToUserMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Forward message to User",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/sendMessage/{instance_key}/quoteMessage",
    "method": "quoteUserMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "SendMessageController",
    "typeScriptTag": "sendMessageController",
    "description": "Quote message for User",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/chat/{instance_key}/presenceUpdateChat",
    "method": "changePresenceForChat",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ChatController",
    "typeScriptTag": "chatController",
    "description": "Change presence for chat",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "option",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/chat/{instance_key}/deleteMessage",
    "method": "deleteMessageInstanceKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ChatController",
    "typeScriptTag": "chatController",
    "description": "Delete message in chat",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/chat/{instance_key}/deleteMessageFromMe",
    "method": "deleteMessageFromMe",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ChatController",
    "typeScriptTag": "chatController",
    "description": "Delete message fromMe in chat",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "messageData",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/group/list/{instance_key}",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GroupController",
    "typeScriptTag": "groupController",
    "description": "List all groups and communitys",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/group/{instance_key}/group",
    "method": "getGroupInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GroupController",
    "typeScriptTag": "groupController",
    "description": "Get a group info",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "jid",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/group/{instance_key}/create",
    "method": "createGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GroupController",
    "typeScriptTag": "groupController",
    "description": "Create a group",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "group_data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/group/{instance_key}/addParticipants",
    "method": "addParticipantsToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GroupController",
    "typeScriptTag": "groupController",
    "description": "Add participants to a group",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "group_data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/group/{instance_key}/removeParticipants",
    "method": "removeParticipants",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "GroupController",
    "typeScriptTag": "groupController",
    "description": "Remove participants from group",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "group_data",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  },
  {
    "url": "/rest/group/{instance_key}/leaveGroup",
    "method": "leaveGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "GroupController",
    "typeScriptTag": "groupController",
    "description": "Leave group",
    "parameters": [
      {
        "name": "instanceKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTANCE_KEY"
      },
      {
        "name": "jid",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Documentation MegaAPI"
      apiBaseUrl="https://apistart01.megaapi.com.br"
      apiVersion="6.1"
      endpoints={29}
      sdkMethods={29}
      schemas={35}
      parameters={54}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/megaapi/openapi.yaml"
      developerDocumentation="apistart01.megaapi.com.br/docs/"
    />
  );
}
  