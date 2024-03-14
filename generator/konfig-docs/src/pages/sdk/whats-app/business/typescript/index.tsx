import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WhatsAppBusinessTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="whats-app-business-typescript-sdk"
      metaDescription={`Use WhatsApp Messenger to stay in touch with friends and family. WhatsApp is free and offers simple, secure, reliable messaging and calling, available on phones all over the world.`}
      company="WhatsApp"
      serviceName="Business"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/logo.png"
      companyKebabCase="whats-app"
      clientNameCamelCase="whatsAppBusiness"
      homepage="developers.facebook.com/docs/whatsapp"
      lastUpdated={new Date("2024-03-14T08:10:33.678Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["messaging","sms"]}
      methods={[
  {
    "url": "/account",
    "method": "requestCode",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Registration",
    "typeScriptTag": "registration",
    "description": "Request-Code",
    "parameters": [
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CC"
      },
      {
        "name": "cert",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CERT"
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "METHOD"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "pin",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created: the account already exists. You are already registered, so you do not need to do anything else."
      },
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  },
  {
    "url": "/account/shards",
    "method": "setShards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Set-Shards",
    "parameters": [
      {
        "name": "cc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CC"
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "pin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIN"
      },
      {
        "name": "shards",
        "schema": "integer",
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
  },
  {
    "url": "/account/verify",
    "method": "verifyAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Registration",
    "typeScriptTag": "registration",
    "description": "Register-Account",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
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
    "url": "/certificates/external",
    "method": "uploadExternalCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Upload-Certificate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/external/ca",
    "method": "downloadCaCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Download-CA-Certificate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/webhooks/ca",
    "method": "deleteWebhookCa",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Delete Webhook CA Certificate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/webhooks/ca",
    "method": "downloadWebhookCaCertificate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Download Webhook CA Certificate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/certificates/webhooks/ca",
    "method": "uploadWebhookCaCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Upload Webhook CA Certificate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Check-Contact",
    "parameters": [
      {
        "name": "blocking",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "no_wait"
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-All-Groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups",
    "method": "createGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create-Group",
    "parameters": [
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
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
    "url": "/groups/{GroupId}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-Group-Info",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{GroupId}",
    "method": "updateInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update-Group-Info",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
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
    "url": "/groups/{GroupId}/admins",
    "method": "demoteAdmin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Demote-Group-Admin",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "wa_ids",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/groups/{GroupId}/admins",
    "method": "promoteToAdmin",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Promote-To-Group-Admin",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "wa_ids",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/groups/{GroupId}/icon",
    "method": "deleteGroupIcon",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete-Group-Icon",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "File",
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
      }
    ]
  },
  {
    "url": "/groups/{GroupId}/icon",
    "method": "getIconBinary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-Group-Icon-Binary",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{GroupId}/icon",
    "method": "setGroupIcon",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Set-Group-Icon",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "File",
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
      }
    ]
  },
  {
    "url": "/groups/{GroupId}/invite",
    "method": "deleteInvite",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete-Group-Invite",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{GroupId}/invite",
    "method": "getInviteDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-Group-Invite",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{GroupId}/leave",
    "method": "leaveGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Leave-Group",
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{GroupId}/participants",
    "method": "removeParticipant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Remove-Group-Participant",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUPID"
      },
      {
        "name": "wa_ids",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/health",
    "method": "checkStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Check-Health",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/media",
    "method": "uploadMedia",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Upload-Media",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/media/{MediaId}",
    "method": "removeMedia",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Delete-Media",
    "parameters": [
      {
        "name": "mediaId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEDIAID"
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
    "url": "/media/{MediaId}",
    "method": "download",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Download-Media",
    "parameters": [
      {
        "name": "mediaId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEDIAID"
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
    "url": "/messages",
    "method": "sendMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Send-Message",
    "parameters": [
      {
        "name": "audio",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "document",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "hsm",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "element_name": "hello_world",
          "language": {
            "code": "en",
            "policy": "deterministic"
          },
          "localizable_params": [
            {
              "default": "1234"
            }
          ],
          "namespace": "business_a_namespace"
        }
      },
      {
        "name": "image",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "address": "<Location's Address>",
          "latitude": "<Latitude>",
          "longitude": "<Longitude>",
          "name": "<Location Name>"
        }
      },
      {
        "name": "preview_url",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "recipient_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "individual"
      },
      {
        "name": "text",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "body": "<Message Text>"
        }
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "ttl",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "text"
      },
      {
        "name": "video",
        "schema": "object",
        "required": false,
        "description": ""
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
    "url": "/messages/{MessageID}",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Mark-Message-As-Read",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID from Webhook",
        "example": "MESSAGEID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS",
        "default": "read"
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
    "url": "/metrics",
    "method": "getMetricsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get-Metrics (since v2.21.3)",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "example": "prometheus"
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
    "url": "/settings/account/two-step",
    "method": "disable",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Two-Step Verification",
    "typeScriptTag": "twoStepVerification",
    "description": "Disable-Two-Step",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/account/two-step",
    "method": "enableAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Two-Step Verification",
    "typeScriptTag": "twoStepVerification",
    "description": "Enable-Two-Step",
    "parameters": [
      {
        "name": "pin",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PIN"
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
    "url": "/settings/application",
    "method": "resetSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Reset-Application-Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/application",
    "method": "getSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get-Application-Settings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/application",
    "method": "updateSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update-Application-Settings",
    "parameters": [
      {
        "name": "callback_backoff_delay_ms",
        "schema": "string",
        "description": "",
        "default": "3000"
      },
      {
        "name": "callback_persist",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "heartbeat_interval",
        "schema": "integer",
        "description": "",
        "default": 5
      },
      {
        "name": "max_callback_backoff_delay_ms",
        "schema": "string",
        "description": "",
        "default": "900000"
      },
      {
        "name": "media",
        "schema": "object",
        "description": "",
        "example": {
          "auto_download": [
            "image",
            "document",
            "audio"
          ]
        }
      },
      {
        "name": "on_call_pager",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pass_through",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "sent_status",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "unhealthy_interval",
        "schema": "integer",
        "description": "",
        "default": 30
      },
      {
        "name": "webhooks",
        "schema": "object",
        "description": "",
        "example": {
          "max_concurrent_requests": 12,
          "url": "<Webhook URL, https>"
        }
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
    "url": "/settings/application/media/providers",
    "method": "listMediaProviders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Get-Media-Providers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/application/media/providers",
    "method": "updateMediaProviders",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update-Media-Providers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/application/media/providers/{ProviderName}",
    "method": "removeProvider",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Delete-Media-Providers",
    "parameters": [
      {
        "name": "providerName",
        "schema": "string",
        "required": true,
        "description": "Provider Name",
        "example": "PROVIDERNAME"
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
    "url": "/settings/backup",
    "method": "settingsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Backup/Restore",
    "typeScriptTag": "backup/restore",
    "description": "Backup-Settings",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Save the data value as that will be used along with your password to restore the information."
      }
    ]
  },
  {
    "url": "/settings/business/profile",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Business Profile",
    "typeScriptTag": "businessProfile",
    "description": "Get-Business-Profile",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/business/profile",
    "method": "update",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Business Profile",
    "typeScriptTag": "businessProfile",
    "description": "Update-Business-Profile",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ADDRESS"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "vertical",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERTICAL"
      },
      {
        "name": "websites",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/settings/profile/about",
    "method": "getAbout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Get-Profile-About",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/profile/about",
    "method": "updateAbout",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Update-Profile-About",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
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
    "url": "/settings/profile/photo",
    "method": "removePhoto",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Delete-Profile-Photo",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/settings/profile/photo",
    "method": "getPhoto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Get-Profile-Photo",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "example": "link"
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
    "url": "/settings/profile/photo",
    "method": "updatePhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Update-Profile-Photo",
    "parameters": [
      {
        "name": "File",
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
      }
    ]
  },
  {
    "url": "/settings/restore",
    "method": "settingsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Backup/Restore",
    "typeScriptTag": "backup/restore",
    "description": "Restore-Settings",
    "parameters": [
      {
        "name": "data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATA"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
    "url": "/stats/app",
    "method": "getAppStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get-App-Stats",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "example": "prometheus"
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
    "url": "/stats/db",
    "method": "getDbStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get-DB-Stats",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "description": "",
        "example": "prometheus"
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
    "url": "/support",
    "method": "getSupportInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get-Support-Info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Create-User",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
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
    "url": "/users/login",
    "method": "performLogin",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Login-User",
    "parameters": [
      {
        "name": "new_password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_PASSWORD"
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
    "url": "/users/logout",
    "method": "performLogout",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Logout-User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{UserUsername}",
    "method": "removeUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete-User",
    "parameters": [
      {
        "name": "userUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERUSERNAME"
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
    "url": "/users/{UserUsername}",
    "method": "getByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get-User",
    "parameters": [
      {
        "name": "userUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERUSERNAME"
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
    "url": "/users/{UserUsername}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update-User",
    "parameters": [
      {
        "name": "userUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERUSERNAME"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
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
      apiTitle="WhatsApp Business API"
      apiBaseUrl="http://whatsapp.local"
      apiVersion="1.0"
      endpoints={36}
      sdkMethods={55}
      schemas={144}
      parameters={80}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/whatsapp/business/openapi.yaml"
      developerDocumentation="developers.facebook.com/docs/whatsapp/cloud-api/get-started"
    />
  );
}
  