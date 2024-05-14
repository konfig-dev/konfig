import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TextRequestTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="text-request-typescript-sdk"
      metaDescription={`Text Request is the business texting platform built to ignite customer engagement. We've crafted plug-and-play messaging solutions to your everyday communication problems, so you can cut through the noise and connect with customers anytime, anywhere.

Text Request is designed to scale with you, from one person handling a few conversations, to thousands of employees sending millions of messages, to custom solutions built on our API.

Learn more about how we help busy business leaders like you with conversational texting and customer engagement at textrequest.com.`}
      company="Text Request"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/logo.png"
      companyKebabCase="text-request"
      clientNameCamelCase="textRequest"
      homepage="www.textrequest.com/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["messaging","communications","platform","text_embeddings","mobile","communications_software","text_messaging","sms_marketing","business_texting","customer_engagement"]}
      methods={[
  {
    "url": "/mms",
    "method": "postMmsAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Post an MMS attachment to Text Request.",
    "parameters": [
      {
        "name": "file",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages",
    "method": "sendMessageWithLocationRequestCallback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Sends a message",
    "parameters": [
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 4232180111
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 4239309346
      },
      {
        "name": "body",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Don't forget the Family and Friends sale at our Toledo location on 6-15-2021 at 8:00PM!"
      },
      {
        "name": "sender_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Bill Cassidy"
      },
      {
        "name": "status_callback",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "enter-url-here"
      },
      {
        "name": "location_callback",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "enter-url-here"
      },
      {
        "name": "mms_media",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "authvia_conversation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "geolocation_requested",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards",
    "method": "listAllDashboards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboard",
    "typeScriptTag": "dashboard",
    "description": "Get all dashboards in an account.",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards",
    "method": "createNewDashboard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Dashboard",
    "typeScriptTag": "dashboard",
    "description": "Create a new dashboard with the given name and phone number",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Doe's Line"
      },
      {
        "name": "phone",
        "schema": "string",
        "description": "",
        "example": "+1(https://www.textrequest.com/api/v3-123-4567"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}",
    "method": "deleteDashboardById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Dashboard",
    "typeScriptTag": "dashboard",
    "description": "Deletes the specified dashboard.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The dashboard was deleted."
      },
      {
        "statusCode": "400",
        "description": "Thrown if the dashboard id or phone number is invalid."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Thrown if no dashboard with that id exists in the account."
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboard",
    "typeScriptTag": "dashboard",
    "description": "Get info on this specific dashboard",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}",
    "method": "updateName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Dashboard",
    "typeScriptTag": "dashboard",
    "description": "Update a specific dashboard's name",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "John Doe's Line"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/provisioning",
    "method": "getProvisionedNumbers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Dashboard",
    "typeScriptTag": "dashboard",
    "description": "Get available provisioned numbers for hosting with a dashboard",
    "parameters": [
      {
        "name": "areaCode",
        "schema": "integer",
        "required": true,
        "description": "Area code to search for provisioned numbers of",
        "example": 423
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/conversations",
    "method": "getAllDashboardMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Retrieves all conversations for this dashboard.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "List or singular guid referencing the contact tags you want to filter by"
      },
      {
        "name": "showUnresolvedOnly",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "search",
        "schema": "string",
        "required": false,
        "description": "Search term for filtering conversations by phone number or display name. If the search term is less than a full name or phone number, the search will return all conversations that partially match it."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No conversations exist in the provided dashboard.'"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}/messages",
    "method": "getConversationMessagesByContactPhone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get a conversation's messages by contact phone.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No contact in the dashboard matches the provided number.'"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}/messages",
    "method": "sendMessageToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Send a message to the contact with the given phone number",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "I am reaching back out."
      },
      {
        "name": "sender_name",
        "schema": "string",
        "description": "",
        "example": "Bill Cassidy"
      },
      {
        "name": "status_callback",
        "schema": "string",
        "description": "",
        "example": "enter-url-here"
      },
      {
        "name": "location_callback",
        "schema": "string",
        "description": "",
        "example": "enter-url-here"
      },
      {
        "name": "mms_media",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/messages",
    "method": "getDashboardMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Get all messages for a dashboard.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Start date to filter messages in this dashboard by"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "End date to filter messages in this dashboard by"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No contact in the dashboard matches the provided number.'"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}/conversations/archive",
    "method": "archiveConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Archive a Conversation",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success. No content is returned."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}/conversations/unarchive",
    "method": "unarchiveConversation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Conversations",
    "typeScriptTag": "conversations",
    "description": "Unarchive a Conversation",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success. No content is returned."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{message_id}/redact",
    "method": "redactMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Redact a message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Id of message to redact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success. No content is returned."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/messages/{message_id}/unredact",
    "method": "unredactMessage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Unredact a message",
    "parameters": [
      {
        "name": "messageId",
        "schema": "string",
        "required": true,
        "description": "Id of message to unredact",
        "example": "00000000-0000-0000-0000-000000000000"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success. No content is returned."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts",
    "method": "getMatches",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Retrieves all contacts that match the specified filtering criterion.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "contactPhoneNumber",
        "schema": "string",
        "required": false,
        "description": "The phone number that you're searching for. This uses \"starts with\" searching."
      },
      {
        "name": "lastMessageTimestampBeforeUtc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastMessageTimestampAfterUtc",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactCreatedBefore",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactCreatedAfter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isResolved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hasMessageHistory",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isBlocked",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isArchived",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isSuppressed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hasOptedOut",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "lastMessageSentBefore",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastMessageSentAfter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastMessageReceivedBefore",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastMessageReceivedAfter",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "List or singular guid referencing the contact tags you want to filter by"
      },
      {
        "name": "groups",
        "schema": "string",
        "required": false,
        "description": "List or singular ids referencing the groups you want to filter by"
      },
      {
        "name": "customFieldId1",
        "schema": "string",
        "required": false,
        "description": "Id of custom field to filter by. Requires value for custom_field_value_1 to specify the desired custom field value"
      },
      {
        "name": "customFieldValue1",
        "schema": "string",
        "required": false,
        "description": "Filter value of the custom field specied in custom_field_id_1. Requires value for custom_field_id_1 to specify which custom field to filter by"
      },
      {
        "name": "customFieldId2",
        "schema": "string",
        "required": false,
        "description": "Id of custom field to filter by. Requires value for custom_field_value_2 to specify the desired custom field value"
      },
      {
        "name": "customFieldValue2",
        "schema": "string",
        "required": false,
        "description": "Filter value of the custom field specied in custom_field_id_2. Requires value for custom_field_id_2 to specify which custom field to filter by"
      },
      {
        "name": "customFieldId3",
        "schema": "string",
        "required": false,
        "description": "Id of custom field to filter by. Requires value for custom_field_value_3 to specify the desired custom field value"
      },
      {
        "name": "customFieldValue3",
        "schema": "string",
        "required": false,
        "description": "Filter value of the custom field specied in custom_field_id_3. Requires value for custom_field_id_3 to specify which custom field to filter by"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts",
    "method": "bulkUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Bulk update contacts, updating contacts with matching phone numbers or creating new contacts for new phone numbers.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}",
    "method": "deleteByPhoneNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes the contact with the specified phone number.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The contact was deleted."
      },
      {
        "statusCode": "400",
        "description": "Thrown if the dashboard id or phone number is invalid, or if the contact exists, but has a message history."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Thrown if no contact with the specified phone number exists in the dashboard."
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}",
    "method": "getByPhoneNumber",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Retrieves the contact with the specified phone number.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No contact in the dashboard matches the provided number.'"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/contacts/{phone_number}",
    "method": "createOrUpdateByPhoneNumber",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Create or update a contact with the given phone number",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "Phone number",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": "",
        "example": "John"
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": "",
        "example": "Smith"
      },
      {
        "name": "display_name",
        "schema": "string",
        "description": "",
        "example": "John Smith"
      },
      {
        "name": "is_suppressed",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "is_blocked",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "suppressed_reason",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "note",
        "schema": "string",
        "description": "",
        "example": "Contact from newsletter."
      },
      {
        "name": "groups",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contact_tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "is_resolved",
        "schema": "boolean",
        "description": "",
        "example": false
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/groups",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Retrieves all groups.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/groups",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Creates a new group",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employees"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This list will hold all current employees."
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/groups/{group_id}",
    "method": "deleteGroupById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Deletes the group with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Id of group",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The group was deleted."
      },
      {
        "statusCode": "400",
        "description": "Thrown if the dashboard id or group id is invalid."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Thrown if no group with that id exists in the dashboard."
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/groups/{group_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Retrieves the group with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Id of group",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No group in the dashboard matches the provided id."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/groups/{group_id}",
    "method": "updateGroupName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update a group with the given id",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "groupId",
        "schema": "integer",
        "required": true,
        "description": "Id of group",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employees"
      },
      {
        "name": "notes",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This list will hold all current employees."
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieves all users.",
    "parameters": [
      {
        "name": "externalUserId",
        "schema": "string",
        "required": false,
        "description": "External User Id to filter the results by. The External User Id is a custom value that can only be set from within the API. Multiple users can have the same external user id."
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "User's email address to filter the results by. A user's email address cannot be changed. Only one user can exist in an account for an email address."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
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
    "description": "Creates a new user",
    "parameters": [
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Doe"
      },
      {
        "name": "is_administrator",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "john.doe@wefixwindows.com"
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "8aw5vm232b4xkjdr"
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "johndoe_1"
      },
      {
        "name": "permissions",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "deleteUserWithPermissions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deletes the user with the specified id",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of user",
        "example": 508
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The user was deleted."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "No user in the account matches the provided id."
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Retrieves the user with the specified id.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of user",
        "example": 508
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No user in the account matches the provided id."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "updateUserDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a user with the given id",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "Id of user",
        "example": 508
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "John"
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Doe"
      },
      {
        "name": "is_administrator",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "external_user_id",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "johndoe_1"
      },
      {
        "name": "permissions",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/keywords",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keywords",
    "typeScriptTag": "keywords",
    "description": "Retrieves all keywords.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/keywords",
    "method": "createNewKeyword",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Keywords",
    "typeScriptTag": "keywords",
    "description": "Creates a new keyword",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "keyword_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employees"
      },
      {
        "name": "response",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This list will hold all current employees."
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/keywords/{keyword_id}",
    "method": "deleteKeywordById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Keywords",
    "typeScriptTag": "keywords",
    "description": "Deletes the keywood with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "keywordId",
        "schema": "integer",
        "required": true,
        "description": "Id of keyword",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The keyword was deleted."
      },
      {
        "statusCode": "400",
        "description": "Thrown if the dashboard id or keyword id is invalid."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Thrown if no keyword with that id exists in the dashboard."
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/keywords/{keyword_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Keywords",
    "typeScriptTag": "keywords",
    "description": "Retrieves the keyword with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "keywordId",
        "schema": "integer",
        "required": true,
        "description": "Id of keyword",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No keyword in the dashboard matches the provided id."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/keywords/{keyword_id}",
    "method": "updateKeywordById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Keywords",
    "typeScriptTag": "keywords",
    "description": "Update the keyword with the given id",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "keywordId",
        "schema": "integer",
        "required": true,
        "description": "Id of keyword",
        "example": 0
      },
      {
        "name": "keyword_value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Employees"
      },
      {
        "name": "response",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "This list will hold all current employees."
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/tags",
    "method": "getAllDashboardTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Retrieves all the tags for this dashboard.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/tags",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Creates a new tag",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "tag_color",
        "schema": "string",
        "description": "",
        "example": "#1EB1C4"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "",
        "example": "Partners"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/tags/{tag_id}",
    "method": "deleteTagById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Deletes the tag with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "Id of tag",
        "example": "TAG_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The tag was deleted."
      },
      {
        "statusCode": "400",
        "description": "Thrown if the dashboard id or tag id is invalid."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Thrown if no tag with that id exists in the dashboard."
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/tags/{tag_id}",
    "method": "getTagById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Retrieves the tag with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "Id of tag",
        "example": "TAG_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No tag in the dashboard matches the provided id."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/tags/{tag_id}",
    "method": "updateTagById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update a tag with the given id",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "Id of tag",
        "example": "TAG_ID"
      },
      {
        "name": "tag_color",
        "schema": "string",
        "description": "",
        "example": "#1EB1C4"
      },
      {
        "name": "tag",
        "schema": "string",
        "description": "",
        "example": "Partners"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/fields/{field_id}",
    "method": "deleteFieldById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Deletes the field with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Id of field",
        "example": "f0d364d4-52e7-44a7-a1bb-b7ce0ccb5ead"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Either the field was deleted, or no field with that guid existed in the dashboard."
      },
      {
        "statusCode": "400",
        "description": "Thrown if the dashboard id or field id is invalid, or if the field exists, but some contacts have a value for that field."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Thrown if no field with that id exists in the dashboard."
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/fields/{field_id}",
    "method": "getFieldById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieves the custom field with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Id of field",
        "example": "f0d364d4-52e7-44a7-a1bb-b7ce0ccb5ead"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No custom field in the dashboard matches the provided Guid."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/fields/{field_id}",
    "method": "updateFieldName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update a custom field's name",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Id of field",
        "example": "f0d364d4-52e7-44a7-a1bb-b7ce0ccb5ead"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Email"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/fields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Retrieves all custom fields.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/fields",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a new custom field.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Email"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/payments",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Retrieves all payments.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "referenceNumber",
        "schema": "string",
        "required": false,
        "description": "User-defined id defined when payments are created that can be used to quickly find payments. Reference numbers are not unique; many payments can have the same reference."
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": false,
        "description": "Phone number"
      },
      {
        "name": "sortType",
        "schema": "string",
        "required": false,
        "description": "Property to sort payments by.",
        "default": "date"
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "required": false,
        "description": "Direction to sort payments in. Either greatest to smallest, or smallest to greatest.",
        "default": "desc"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/payments",
    "method": "createNewPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Creates a new payment",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Housecall for plumbing services"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Thank you for choosing Generic Plumbing! Please click the link below to pay the balance for today's appointment."
      },
      {
        "name": "customer_phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "321-654-7890"
      },
      {
        "name": "amount_requested",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 220.5
      },
      {
        "name": "reference_number",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "receipt-chicago"
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/payments/{payment_id}",
    "method": "getPaymentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Retrieves the payment with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "paymentId",
        "schema": "integer",
        "required": true,
        "description": "Id of payment",
        "example": 2510
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No payment in the dashboard matches the provided id."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/payments/{payment_id}/mark_as_paid",
    "method": "markAsPaid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Mark a payment as paid",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "paymentId",
        "schema": "integer",
        "required": true,
        "description": "Id of payment",
        "example": 2510
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/payments/{payment_id}/resend",
    "method": "sendReminder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Send a follow-up text reminding the user to pay the specified payment.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "paymentId",
        "schema": "integer",
        "required": true,
        "description": "Id of payment",
        "example": 2510
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/payments/{payment_id}/cancel",
    "method": "cancelPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Cancels the specified payment.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "paymentId",
        "schema": "integer",
        "required": true,
        "description": "Id of payment",
        "example": 2510
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/activate_payments",
    "method": "activateDashboardPayments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payments",
    "typeScriptTag": "payments",
    "description": "Activates payments for a dashboard.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The activation was successful"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/reviews",
    "method": "getMatchingReviews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reviews",
    "typeScriptTag": "reviews",
    "description": "Retrieves all reviews that match the specified filtering criterion.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/campaigns",
    "method": "getAllCampaigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reviews",
    "typeScriptTag": "reviews",
    "description": "Retrieves all campaigns.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/campaigns/{campaign_id}",
    "method": "getCampaignById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reviews",
    "typeScriptTag": "reviews",
    "description": "Retrieves the campaign with the specified id.",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "campaignId",
        "schema": "integer",
        "required": true,
        "description": "Id of campaign",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "No campaign in the dashboard matches the provided id."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/eventTypes",
    "method": "getAllTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve all available web hooks types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/hooks",
    "method": "getAllForDashboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Retrieve all web hooks for a dashboard",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "default": 0
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "description": "",
        "default": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/hooks",
    "method": "registerNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Register Web Hook",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "target_url",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "enter-url-here"
      },
      {
        "name": "event",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "msg_sent"
      },
      {
        "name": "http_verb",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "PUT",
        "default": "POST"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/dashboards/{dashboard_id}/hooks/{webhook_id}",
    "method": "deleteWebhookFromPhoneNumber",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Deletes a web hook",
    "parameters": [
      {
        "name": "dashboardId",
        "schema": "integer",
        "required": true,
        "description": "Id of dashboard",
        "example": 121
      },
      {
        "name": "webhookId",
        "schema": "integer",
        "required": true,
        "description": "Id of the web hook that you want to delete",
        "example": 56
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The webhook was deleted successfully."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Text Request API v3"
      apiBaseUrl="https://api.textrequest.com/api/v3/"
      apiVersion="3.0.0"
      endpoints={36}
      sdkMethods={67}
      schemas={65}
      parameters={215}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/text-request/openapi.yaml"
      developerDocumentation="www.textrequest.com/api/v3"
    />
  );
}
  