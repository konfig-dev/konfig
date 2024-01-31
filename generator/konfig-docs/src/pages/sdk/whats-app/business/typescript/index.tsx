import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function WhatsAppBusinessTypeScriptSdk() {
  return (
    <Sdk
      sdkName="whatsapp-typescript-sdk"
      metaDescription="Use WhatsApp Messenger to stay in touch with friends and family. WhatsApp is free and offers simple, secure, reliable messaging and calling, available on phones all over the world."
      company="WhatsApp"
      serviceName="Business"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/logo.png"
      clientNameCamelCase="whatsApp"
      homepage="developers.facebook.com/docs/whatsapp"
      lastUpdated={new Date("2024-01-31T00:37:43.049Z")}
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
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
        "description": ""
      },
      {
        "name": "cert",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "method",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": ""
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
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "pin",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "shards",
        "schema": "integer",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/account/verify",
    "method": "registerAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Registration",
    "typeScriptTag": "registration",
    "description": "Register-Account",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/certificates/external",
    "method": "uploadCertificate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Upload-Certificate",
    "parameters": [],
    "responses": []
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
    "method": "deleteWebhookCaCertificate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Certificates",
    "typeScriptTag": "certificates",
    "description": "Delete Webhook CA Certificate",
    "parameters": [],
    "responses": []
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
    "responses": []
  },
  {
    "url": "/contacts",
    "method": "checkContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Check-Contact",
    "parameters": [
      {
        "name": "blocking",
        "schema": "string",
        "required": false,
        "description": ""
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
    "method": "getAllGroups",
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
    "url": "/groups/{GroupId}",
    "method": "getGroupInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-Group-Info",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
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
    "url": "/groups/{GroupId}",
    "method": "updateGroupInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update-Group-Info",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{GroupId}/admins",
    "method": "demoteGroupAdmin",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Demote-Group-Admin",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "wa_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{GroupId}/admins",
    "method": "promoteToGroupAdmin",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Promote-To-Group-Admin",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "wa_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
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
        "description": ""
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{GroupId}/icon",
    "method": "getGroupIconBinary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-Group-Icon-Binary",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
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
        "description": ""
      },
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{GroupId}/invite",
    "method": "deleteGroupInvite",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete-Group-Invite",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{GroupId}/invite",
    "method": "getGroupInvite",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get-Group-Invite",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
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
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/groups/{GroupId}/participants",
    "method": "removeGroupParticipant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Remove-Group-Participant",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "wa_ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/health",
    "method": "checkHealth",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Check-Health",
    "parameters": [],
    "responses": []
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
    "method": "deleteMedia",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Delete-Media",
    "parameters": [
      {
        "name": "mediaId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/media/{MediaId}",
    "method": "downloadMedia",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Media",
    "typeScriptTag": "media",
    "description": "Download-Media",
    "parameters": [
      {
        "name": "mediaId",
        "schema": "string",
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
        "description": ""
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
        "description": ""
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
        "description": ""
      },
      {
        "name": "text",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": ""
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
        "description": ""
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
    "method": "markMessageAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Mark-Message-As-Read",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Message ID from Webhook"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/metrics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Health",
    "typeScriptTag": "health",
    "description": "Get-Metrics (since v2.21.3)",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
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
    "url": "/settings/account/two-step",
    "method": "disableTwoStep",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Two-Step Verification",
    "typeScriptTag": "twoStepVerification",
    "description": "Disable-Two-Step",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/settings/account/two-step",
    "method": "enableTwoStep",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Two-Step Verification",
    "typeScriptTag": "twoStepVerification",
    "description": "Enable-Two-Step",
    "parameters": [
      {
        "name": "pin",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/settings/application",
    "method": "resetApplicationSettings",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Reset-Application-Settings",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/settings/application",
    "method": "getApplicationSettings",
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
    "method": "updateApplicationSettings",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Update-Application-Settings",
    "parameters": [
      {
        "name": "callback_backoff_delay_ms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callback_persist",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "heartbeat_interval",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "max_callback_backoff_delay_ms",
        "schema": "string",
        "description": ""
      },
      {
        "name": "media",
        "schema": "object",
        "description": ""
      },
      {
        "name": "on_call_pager",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pass_through",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sent_status",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "unhealthy_interval",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "webhooks",
        "schema": "object",
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
    "url": "/settings/application/media/providers",
    "method": "getMediaProviders",
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
    "responses": []
  },
  {
    "url": "/settings/application/media/providers/{ProviderName}",
    "method": "deleteMediaProviders",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "Delete-Media-Providers",
    "parameters": [
      {
        "name": "providerName",
        "schema": "string",
        "required": true,
        "description": "Provider Name"
      }
    ],
    "responses": []
  },
  {
    "url": "/settings/backup",
    "method": "backupSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Backup/Restore",
    "typeScriptTag": "backup/restore",
    "description": "Backup-Settings",
    "parameters": [
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
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
    "method": "getBusinessProfile",
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
    "method": "updateBusinessProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Business Profile",
    "typeScriptTag": "businessProfile",
    "description": "Update-Business-Profile",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "vertical",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "websites",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/settings/profile/about",
    "method": "getProfileAbout",
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
    "method": "updateProfileAbout",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Update-Profile-About",
    "parameters": [
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/settings/profile/photo",
    "method": "deleteProfilePhoto",
    "httpMethod": HttpMethodsEnum.DELETE,
    "description": "Delete-Profile-Photo",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/settings/profile/photo",
    "method": "getProfilePhoto",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Get-Profile-Photo",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
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
    "url": "/settings/profile/photo",
    "method": "updateProfilePhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Profile",
    "typeScriptTag": "profile",
    "description": "Update-Profile-Photo",
    "parameters": [
      {
        "name": "File",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
  },
  {
    "url": "/settings/restore",
    "method": "restoreSettings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Backup/Restore",
    "typeScriptTag": "backup/restore",
    "description": "Restore-Settings",
    "parameters": [
      {
        "name": "data",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": []
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
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
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
    "url": "/users/login",
    "method": "loginUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Login-User",
    "parameters": [
      {
        "name": "new_password",
        "schema": "string",
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
    "url": "/users/logout",
    "method": "logoutUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Logout-User",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/users/{UserUsername}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete-User",
    "parameters": [
      {
        "name": "userUsername",
        "schema": "string",
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
    "url": "/users/{UserUsername}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get-User",
    "parameters": [
      {
        "name": "userUsername",
        "schema": "string",
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
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
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
  }
]
    }
      language="TypeScript"
      apiTitle="WhatsApp Business API"
      apiBaseUrl="http://whatsapp.local"
      apiVersion="1.0"
      endpoints={36}
      sdkMethods={55}
      schemas={113}
      parameters={80}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/whatsapp/business/openapi.yaml"
    />
  );
}
  