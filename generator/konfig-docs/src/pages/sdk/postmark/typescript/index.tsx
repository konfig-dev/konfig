import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PostmarkTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="postmark-typescript-sdk"
      metaDescription="Send transactional and marketing emails and get them to the inbox on time, every time. Postmark is a fast and reliable email delivery service for developers."
      company="Postmark"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/logo.svg"
      clientNameCamelCase="postmark"
      homepage="postmarkapp.com"
      lastUpdated={new Date("2024-03-13T01:42:38.840Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["email"]}
      methods={[
  {
    "url": "/bounces",
    "method": "listBounces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Get bounces",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of bounces to return per request. Max 500.",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of bounces to skip.",
        "example": 0
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Filter by type of bounce"
      },
      {
        "name": "inactive",
        "schema": "boolean",
        "description": "Filter by emails that were deactivated by Postmark due to the bounce. Set to true or false. If this isn't specified it will return both active and inactive."
      },
      {
        "name": "emailFilter",
        "schema": "string",
        "description": "Filter by email address"
      },
      {
        "name": "messageId",
        "schema": "string",
        "description": "Filter by messageID"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter messages up to the date specified. e.g. `2014-02-01`"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter messages starting from the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/bounces/{bounceid}",
    "method": "getBounce",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Get a single bounce",
    "parameters": [
      {
        "name": "bounceid",
        "schema": "integer",
        "required": true,
        "description": "The ID of the bounce to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/bounces/{bounceid}/activate",
    "method": "activateBounce",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Activate a bounce",
    "parameters": [
      {
        "name": "bounceid",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Bounce to activate.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/bounces/{bounceid}/dump",
    "method": "getDump",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Get bounce dump",
    "parameters": [
      {
        "name": "bounceid",
        "schema": "integer",
        "required": true,
        "description": "The ID for the bounce dump to retrieve.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/deliverystats",
    "method": "getDeliveryStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Bounces API",
    "typeScriptTag": "bouncesApi",
    "description": "Get delivery stats",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/email",
    "method": "sendSingleEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sending API",
    "typeScriptTag": "sendingApi",
    "description": "Send a single email",
    "parameters": [
      {
        "name": "Attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "Bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Cc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "From",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Headers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "HtmlBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ReplyTo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Tag",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TextBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "To",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackLinks",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackOpens",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The standard response when a postmark message is sent"
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/email/batch",
    "method": "sendBatchEmails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sending API",
    "typeScriptTag": "sendingApi",
    "description": "Send a batch of emails",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/email/batchWithTemplates",
    "method": "sendBatchWithTemplates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sending API",
    "typeScriptTag": "sendingApi",
    "description": "Send a batch of email using templates.",
    "parameters": [
      {
        "name": "Messages",
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
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/email/withTemplate",
    "method": "sendEmailTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sending API",
    "typeScriptTag": "sendingApi",
    "description": "Send an email using a Template",
    "parameters": [
      {
        "name": "Attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "Bcc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Cc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "From",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FROM"
      },
      {
        "name": "Headers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "InlineCss",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "ReplyTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Tag",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TemplateAlias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATEALIAS"
      },
      {
        "name": "TemplateId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TemplateModel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "To",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO"
      },
      {
        "name": "TrackLinks",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TrackOpens",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The standard response when a postmark message is sent"
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/inbound",
    "method": "searchInboundMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Inbound message search",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to return per request. Max 500.",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to skip",
        "example": 0
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "Filter by the user who was receiving the email"
      },
      {
        "name": "fromemail",
        "schema": "string",
        "description": "Filter by the sender email address"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "Filter by email subject"
      },
      {
        "name": "mailboxhash",
        "schema": "string",
        "description": "Filter by mailboxhash"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by status (`blocked`, `processed`, `queued`, `failed`, `scheduled`)"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter messages up to the date specified. e.g. `2014-02-01`"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter messages starting from the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/inbound/{messageid}/bypass",
    "method": "updateBypassRulesForInboundMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Bypass rules for a blocked inbound message",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the message which should bypass inbound rules.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/inbound/{messageid}/details",
    "method": "getInboundMessageDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Inbound message details",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the message for which to details will be retrieved.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/inbound/{messageid}/retry",
    "method": "retryInboundMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Retry a failed inbound message for processing",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the inbound message on which we should retry processing.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound",
    "method": "searchOutboundMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Outbound message search",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to return per request. Max 500.",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to skip",
        "example": 0
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "Filter by the user who was receiving the email"
      },
      {
        "name": "fromemail",
        "schema": "string",
        "description": "Filter by the sender email address"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by status (`queued` or `sent`)"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter messages up to the date specified. e.g. `2014-02-01`"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter messages starting from the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound/clicks",
    "method": "getAllClicks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Clicks for a all messages",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of message clicks to return per request. Max 500.",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to skip",
        "example": 0
      },
      {
        "name": "recipient",
        "schema": "string",
        "required": false,
        "description": "Filter by To, Cc, Bcc"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Filter by tag"
      },
      {
        "name": "clientName",
        "schema": "string",
        "required": false,
        "description": "Filter by client name, i.e. Outlook, Gmail"
      },
      {
        "name": "clientCompany",
        "schema": "string",
        "required": false,
        "description": "Filter by company, i.e. Microsoft, Apple, Google"
      },
      {
        "name": "clientFamily",
        "schema": "string",
        "required": false,
        "description": "Filter by client family, i.e. OS X, Chrome"
      },
      {
        "name": "osName",
        "schema": "string",
        "required": false,
        "description": "Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7"
      },
      {
        "name": "osFamily",
        "schema": "string",
        "required": false,
        "description": "Filter by kind of OS used without specific version, i.e. OS X, Windows"
      },
      {
        "name": "osCompany",
        "schema": "string",
        "required": false,
        "description": "Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation"
      },
      {
        "name": "platform",
        "schema": "string",
        "required": false,
        "description": "Filter by platform, i.e. webmail, desktop, mobile"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Filter by country messages were opened in, i.e. Denmark, Russia"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Filter by full name of region messages were opened in, i.e. Moscow, New York"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter by full name of region messages were opened in, i.e. Moscow, New York"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound/clicks/{messageid}",
    "method": "getMessageClicks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Retrieve Message Clicks",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the Outbound Message for which click statistics should be retrieved.",
        "example": "MESSAGEID"
      },
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of message clicks to return per request. Max 500.",
        "example": 0,
        "default": 1
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to skip.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound/opens",
    "method": "listOpensForOutbound",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Opens for all messages",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of message opens to return per request. Max 500.",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to skip",
        "example": 0
      },
      {
        "name": "recipient",
        "schema": "string",
        "required": false,
        "description": "Filter by To, Cc, Bcc"
      },
      {
        "name": "tag",
        "schema": "string",
        "required": false,
        "description": "Filter by tag"
      },
      {
        "name": "clientName",
        "schema": "string",
        "required": false,
        "description": "Filter by client name, i.e. Outlook, Gmail"
      },
      {
        "name": "clientCompany",
        "schema": "string",
        "required": false,
        "description": "Filter by company, i.e. Microsoft, Apple, Google"
      },
      {
        "name": "clientFamily",
        "schema": "string",
        "required": false,
        "description": "Filter by client family, i.e. OS X, Chrome"
      },
      {
        "name": "osName",
        "schema": "string",
        "required": false,
        "description": "Filter by full OS name and specific version, i.e. OS X 10.9 Mavericks, Windows 7"
      },
      {
        "name": "osFamily",
        "schema": "string",
        "required": false,
        "description": "Filter by kind of OS used without specific version, i.e. OS X, Windows"
      },
      {
        "name": "osCompany",
        "schema": "string",
        "required": false,
        "description": "Filter by company which produced the OS, i.e. Apple Computer, Inc., Microsoft Corporation"
      },
      {
        "name": "platform",
        "schema": "string",
        "required": false,
        "description": "Filter by platform, i.e. webmail, desktop, mobile"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Filter by country messages were opened in, i.e. Denmark, Russia"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "Filter by full name of region messages were opened in, i.e. Moscow, New York"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "Filter by full name of region messages were opened in, i.e. Moscow, New York"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound/opens/{messageid}",
    "method": "getMessageOpens",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Retrieve Message Opens",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the Outbound Message for which open statistics should be retrieved.",
        "example": "MESSAGEID"
      },
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of message opens to return per request. Max 500.",
        "example": 0,
        "default": 1
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of messages to skip.",
        "example": 0,
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound/{messageid}/details",
    "method": "getOutboundMessageDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Outbound message details",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the message for which to retrieve details.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/outbound/{messageid}/dump",
    "method": "getMessageDump",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages API",
    "typeScriptTag": "messagesApi",
    "description": "Outbound message dump",
    "parameters": [
      {
        "name": "messageid",
        "schema": "string",
        "required": true,
        "description": "The ID of the message for which to retrieve a dump.",
        "example": "MESSAGEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/server",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Server Configuration API",
    "typeScriptTag": "serverConfigurationApi",
    "description": "Get Server Configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/server",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Server Configuration API",
    "typeScriptTag": "serverConfigurationApi",
    "description": "Edit Server Configuration",
    "parameters": [
      {
        "name": "BounceHookUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ClickHookUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "Color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DeliveryHookUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InboundDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InboundHookUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InboundSpamThreshold",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OpenHookUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "PostFirstOpenOnly",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "RawEmailEnabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "SmtpApiActivated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "TrackLinks",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TrackOpens",
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
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound",
    "method": "getOutboundOverview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get outbound overview",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/bounces",
    "method": "getBounceCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get bounce counts",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/clicks",
    "method": "getOutboundClickCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get click counts",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/clicks/browserfamilies",
    "method": "getOutboundClicksBrowserFamilies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get browser usage by family",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/clicks/location",
    "method": "getOutboundClicksLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get clicks by body location",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/clicks/platforms",
    "method": "getBrowserPlatformUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get browser plaform usage",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/opens",
    "method": "getEmailOpenCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get email open counts",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/opens/emailclients",
    "method": "getEmailClientUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get email client usage",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/opens/platforms",
    "method": "getEmailPlatformUsage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get email platform usage",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/sends",
    "method": "getSentCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get sent counts",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The result of a get sent counts operation."
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/spam",
    "method": "getSpamComplaints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get spam complaints",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats up to the date specified. e.g. `2014-02-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/stats/outbound/tracked",
    "method": "getTrackedEmailCounts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats API",
    "typeScriptTag": "statsApi",
    "description": "Get tracked email counts",
    "parameters": [
      {
        "name": "tag",
        "schema": "string",
        "description": "Filter by tag"
      },
      {
        "name": "fromdate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      },
      {
        "name": "todate",
        "schema": "string",
        "description": "Filter stats starting from the date specified. e.g. `2014-01-01`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates",
    "method": "listTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates API",
    "typeScriptTag": "templatesApi",
    "description": "Get the Templates associated with this Server",
    "parameters": [
      {
        "name": "count",
        "schema": "number",
        "required": true,
        "description": "The number of Templates to return",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "number",
        "required": true,
        "description": "The number of Templates to \"skip\" before returning results.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates",
    "method": "createTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates API",
    "typeScriptTag": "templatesApi",
    "description": "Create a Template",
    "parameters": [
      {
        "name": "Alias",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "HtmlBody",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "Subject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "TextBody",
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
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/validate",
    "method": "validateTemplateContent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Templates API",
    "typeScriptTag": "templatesApi",
    "description": "Test Template Content",
    "parameters": [
      {
        "name": "HtmlBody",
        "schema": "string",
        "description": ""
      },
      {
        "name": "InlineCssForHtmlTestRender",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "Subject",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TestRenderModel",
        "schema": "object",
        "description": ""
      },
      {
        "name": "TextBody",
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
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{templateIdOrAlias}",
    "method": "deleteTemplate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Templates API",
    "typeScriptTag": "templatesApi",
    "description": "Delete a Template",
    "parameters": [
      {
        "name": "templateIdOrAlias",
        "schema": "string",
        "required": true,
        "description": "The 'TemplateID' or 'Alias' value for the Template you wish to delete.",
        "example": "TEMPLATEIDORALIAS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{templateIdOrAlias}",
    "method": "getTemplateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Templates API",
    "typeScriptTag": "templatesApi",
    "description": "Get a Template",
    "parameters": [
      {
        "name": "templateIdOrAlias",
        "schema": "string",
        "required": true,
        "description": "The 'TemplateID' or 'Alias' value for the Template you wish to retrieve.",
        "example": "TEMPLATEIDORALIAS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/templates/{templateIdOrAlias}",
    "method": "updateTemplate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Templates API",
    "typeScriptTag": "templatesApi",
    "description": "Update a Template",
    "parameters": [
      {
        "name": "templateIdOrAlias",
        "schema": "string",
        "required": true,
        "description": "The 'TemplateID' or 'Alias' value for the Template you wish to update.",
        "example": "TEMPLATEIDORALIAS"
      },
      {
        "name": "Alias",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "HtmlBody",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "Subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TextBody",
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
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/triggers/inboundrules",
    "method": "listTriggers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Inbound Rules API",
    "typeScriptTag": "inboundRulesApi",
    "description": "List inbound rule triggers",
    "parameters": [
      {
        "name": "count",
        "schema": "integer",
        "required": true,
        "description": "Number of records to return per request.",
        "example": 0
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "Number of records to skip.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/triggers/inboundrules",
    "method": "createTrigger",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Inbound Rules API",
    "typeScriptTag": "inboundRulesApi",
    "description": "Create an inbound rule trigger",
    "parameters": [
      {
        "name": "Rule",
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
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/triggers/inboundrules/{triggerid}",
    "method": "deleteSingleTrigger",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Inbound Rules API",
    "typeScriptTag": "inboundRulesApi",
    "description": "Delete a single trigger",
    "parameters": [
      {
        "name": "triggerid",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Inbound Rule that should be deleted.",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "422",
        "description": "A Postmark API error."
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Postmark API"
      apiBaseUrl="https://api.postmarkapp.com"
      apiVersion="1.0.0"
      endpoints={38}
      sdkMethods={43}
      schemas={75}
      parameters={214}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/postmark/openapi.yaml"
    />
  );
}
  