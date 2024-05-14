import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PipedriveTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pipedrive-typescript-sdk"
      metaDescription={`Founded in 2010, Pipedrive is an easy and effective sales CRM that drives small business growth.

Today, Pipedrive is used by revenue teams at more than 100,000 companies worldwide. Pipedrive is headquartered in New York and has offices across Europe and the US.

The company is backed by majority holder Vista Equity Partners, Bessemer Venture Partners, Insight Partners, Atomico, and DTCP.

Learn more at www.pipedrive.com.`}
      company="Pipedrive"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/logo.png"
      companyKebabCase="pipedrive"
      clientNameCamelCase="pipedrive"
      homepage="pipedrive.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm","sales"]}
      methods={[
  {
    "url": "/oauth/authorize",
    "method": "requestAuthorization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Oauth",
    "typeScriptTag": "oauth",
    "description": "Requesting authorization",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client ID provided to you by the Pipedrive Marketplace when you register your app",
        "example": "CLIENT_ID"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": true,
        "description": "The callback URL you provided when you registered your app. Authorization code will be sent to that URL (if it matches with the value you entered in the registration form) if a user approves the app install. Or, if a customer declines, the corresponding error will also be sent to this URL.",
        "example": "REDIRECT_URI"
      },
      {
        "name": "state",
        "schema": "string",
        "description": "You may pass any random string as the state parameter and the same string will be returned to your app after a user authorizes access. It may be used to store the user's session ID from your app or distinguish different responses. Using state may increase security; see RFC-6749. The state parameter is not automatically available in Marketplace Manager. To enable it for your app, please write to us at marketplace.devs@pipedrive.com.\n"
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
    "url": "/oauth/token",
    "method": "refreshToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Oauth",
    "typeScriptTag": "oauth",
    "description": "Refreshing the tokens",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "description": "",
        "default": "refresh_token"
      },
      {
        "name": "refresh_token",
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
    "url": "/activities",
    "method": "deleteBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Delete multiple activities in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated IDs of activities that will be deleted",
        "example": "IDS"
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
    "url": "/activities",
    "method": "listUserActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get all activities assigned to a particular user",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the user whose activities will be fetched. If omitted, the user associated with the API token will be used. If 0, activities for all company users will be fetched based on the permission sets."
      },
      {
        "name": "filterId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the filter to use (will narrow down results if used together with `user_id` parameter)"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.",
        "example": 100
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "For pagination, the position that represents the first result for the page",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Use the activity due date where you wish to begin fetching activities from. Insert due date in YYYY-MM-DD format."
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Use the activity due date where you wish to stop fetching activities from. Insert due date in YYYY-MM-DD format."
      },
      {
        "name": "done",
        "schema": "number",
        "description": "Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both done and not done activities."
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
    "url": "/activities",
    "method": "addNewActivity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Add an activity",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/activities/collection",
    "method": "getAllActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get all activities (https://developers.pipedrive.com/docs/api/v1",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.",
        "example": 100
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the user whose activities will be fetched. If omitted, all activities are returned."
      },
      {
        "name": "done",
        "schema": "boolean",
        "description": "Whether the activity is done or not. `false` = Not done, `true` = Done. If omitted, returns both done and not done activities."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of the activity, can be one type or multiple types separated by a comma. This is in correlation with the `key_string` parameter of ActivityTypes."
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
    "url": "/activities/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Delete an activity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity",
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
    "url": "/activities/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Get details of an activity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity",
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
    "url": "/activities/{id}",
    "method": "updateActivityDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Update an activity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity",
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
    "url": "/activityFields",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ActivityFields",
    "typeScriptTag": "activityFields",
    "description": "Get all activity fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activityTypes",
    "method": "markAsDeletedBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ActivityTypes",
    "typeScriptTag": "activityTypes",
    "description": "Delete multiple activity types in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated activity type IDs",
        "example": "IDS"
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
    "url": "/activityTypes",
    "method": "listAllActivityTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ActivityTypes",
    "typeScriptTag": "activityTypes",
    "description": "Get all activity types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/activityTypes",
    "method": "addNewType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ActivityTypes",
    "typeScriptTag": "activityTypes",
    "description": "Add new activity type",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "call"
      },
      {
        "name": "icon_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ICON_KEY"
      },
      {
        "name": "color",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "FFFFFF"
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
    "url": "/activityTypes/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ActivityTypes",
    "typeScriptTag": "activityTypes",
    "description": "Delete an activity type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity type",
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
    "url": "/activityTypes/{id}",
    "method": "updateType",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ActivityTypes",
    "typeScriptTag": "activityTypes",
    "description": "Update an activity type",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity type",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "icon_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order_nr",
        "schema": "integer",
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
    "url": "/billing/subscriptions/addons",
    "method": "getAddonsForSingleCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Billing",
    "typeScriptTag": "billing",
    "description": "Get all add-ons for a single company",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/callLogs",
    "method": "getAllLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CallLogs",
    "typeScriptTag": "callLogs",
    "description": "Get all call logs assigned to a particular user",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. The upper limit is 50."
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
    "url": "/callLogs",
    "method": "addNewLog",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CallLogs",
    "typeScriptTag": "callLogs",
    "description": "Add a call log",
    "parameters": [
      {
        "name": "user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "activity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subject",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "outcome",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OUTCOME"
      },
      {
        "name": "from_phone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "to_phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TO_PHONE_NUMBER"
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_TIME"
      },
      {
        "name": "end_time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_TIME"
      },
      {
        "name": "person_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "org_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "deal_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "lead_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "note",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/callLogs/{id}",
    "method": "deleteLog",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CallLogs",
    "typeScriptTag": "callLogs",
    "description": "Delete a call log",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID received when you create the call log",
        "example": "3cde3b05035cae14dcfc172bd8000d08"
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/callLogs/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CallLogs",
    "typeScriptTag": "callLogs",
    "description": "Get details of a call log",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID received when you create the call log",
        "example": "3cde3b05035cae14dcfc172bd8000d08"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/callLogs/{id}/recordings",
    "method": "attachRecording",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CallLogs",
    "typeScriptTag": "callLogs",
    "description": "Attach an audio file to the call log",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID received when you create the call log",
        "example": "3cde3b05035cae14dcfc172bd8000d08"
      },
      {
        "name": "file",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels",
    "method": "createNewChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Add a channel",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "My Channel"
      },
      {
        "name": "provider_channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROVIDER_CHANNEL_ID"
      },
      {
        "name": "avatar_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "template_support",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "provider_type",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "other"
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{id}",
    "method": "deleteChannelById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Delete a channel",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the channel provided by the integration",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/channels/messages/receive",
    "method": "receiveMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Receives an incoming message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "sender_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SENDER_ID"
      },
      {
        "name": "conversation_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONVERSATION_ID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "reply_by",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "conversation_link",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
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
      }
    ]
  },
  {
    "url": "/channels/{channel-id}/conversations/{conversation-id}",
    "method": "deleteConversation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels",
    "typeScriptTag": "channels",
    "description": "Delete a conversation",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The ID of the channel provided by the integration",
        "example": "CHANNEL-ID"
      },
      {
        "name": "conversationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the conversation provided by the integration",
        "example": "CONVERSATION-ID"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/currencies",
    "method": "getAllSupported",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Get all supported currencies",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "description": "Optional search term that is searched for from currency's name and/or code"
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
    "url": "/deals",
    "method": "deleteBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Delete multiple deals in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated IDs that will be deleted",
        "example": "IDS"
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
    "url": "/deals",
    "method": "getAllDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get all deals",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, only deals matching the given user will be returned. However, `filter_id` and `owned_by_you` takes precedence over `user_id` when supplied."
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "The ID of the filter to use"
      },
      {
        "name": "stageId",
        "schema": "integer",
        "description": "If supplied, only deals within the given stage will be returned"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.",
        "default": "all_not_deleted"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys)."
      },
      {
        "name": "ownedByYou",
        "schema": "number",
        "description": "When supplied, only deals owned by you are returned. However, `filter_id` takes precedence over `owned_by_you` when both are supplied."
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
    "url": "/deals",
    "method": "createDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Add a deal",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/deals/collection",
    "method": "getAllDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get all deals (https://developers.pipedrive.com/docs/api/v1",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.",
        "example": 100
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "userId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only deals matching the given user will be returned"
      },
      {
        "name": "stageId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only deals within the given stage will be returned"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included."
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
    "url": "/deals/search",
    "method": "searchByTitleAndNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Search deals",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>."
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive."
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "Will filter deals by the provided person ID. The upper limit of found deals associated with the person is 2000."
      },
      {
        "name": "organizationId",
        "schema": "integer",
        "description": "Will filter deals by the provided organization ID. The upper limit of found deals associated with the organization is 2000."
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Will filter deals by the provided specific status. open = Open, won = Won, lost = Lost. The upper limit of found deals associated with the status is 2000."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "Supports including optional fields in the results which are not provided by default"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/deals/summary",
    "method": "getSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get deals summary",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "Only fetch deals with a specific status. open = Open, won = Won, lost = Lost."
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "<code>user_id</code> will not be considered. Only deals matching the given filter will be returned."
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "Only deals matching the given user will be returned. `user_id` will not be considered if you use `filter_id`."
      },
      {
        "name": "stageId",
        "schema": "integer",
        "description": "Only deals within the given stage will be returned"
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
    "url": "/deals/timeline",
    "method": "getTimelineData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get deals timeline",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The date when the first interval starts. Format: YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "The type of the interval<table><tr><th>Value</th><th>Description</th></tr><tr><td>`day`</td><td>Day</td></tr><tr><td>`week`</td><td>A full week (7 days) starting from `start_date`</td></tr><tr><td>`month`</td><td>A full month (depending on the number of days in given month) starting from `start_date`</td></tr><tr><td>`quarter`</td><td>A full quarter (3 months) starting from `start_date`</td></tr></table>",
        "example": "INTERVAL"
      },
      {
        "name": "amount",
        "schema": "integer",
        "required": true,
        "description": "The number of given intervals, starting from `start_date`, to fetch. E.g. 3 (https://developers.pipedrive.com/docs/api/v1.",
        "example": 0
      },
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The date field key which deals will be retrieved from",
        "example": "FIELD_KEY"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, only deals matching the given user will be returned"
      },
      {
        "name": "pipelineId",
        "schema": "integer",
        "description": "If supplied, only deals matching the given pipeline will be returned"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "If supplied, only deals matching the given filter will be returned"
      },
      {
        "name": "excludeDeals",
        "schema": "number",
        "description": "Whether to exclude deals list (https://developers.pipedrive.com/docs/api/v1 or not (https://developers.pipedrive.com/docs/api/v1. Note that when deals are excluded, the timeline summary (counts and values) is still returned."
      },
      {
        "name": "totalsConvertCurrency",
        "schema": "string",
        "description": "The 3-letter currency code of any of the supported currencies. When supplied, `totals_converted` is returned per each interval which contains the currency-converted total amounts in the given currency. You may also set this parameter to `default_currency` in which case the user's default currency is used."
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
    "url": "/deals/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Delete a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Get details of a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Update a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}/activities",
    "method": "listActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List activities associated with a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "done",
        "schema": "number",
        "description": "Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities."
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": "A comma-separated string of activity IDs to exclude from result"
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
    "url": "/deals/{id}/duplicate",
    "method": "duplicateDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Duplicate deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}/files",
    "method": "listDealFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List files attached to a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`."
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
    "url": "/deals/{id}/flow",
    "method": "listDealUpdates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List updates about a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "allChanges",
        "schema": "string",
        "description": "Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates."
      },
      {
        "name": "items",
        "schema": "string",
        "description": "A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change)."
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
    "url": "/deals/{id}/participantsChangelog",
    "method": "listParticipantsChangelog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List updates about participants of a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
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
    "url": "/deals/{id}/followers",
    "method": "listFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List followers of a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}/followers",
    "method": "addFollower",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Add a follower to a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "user_id",
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
    "url": "/deals/{id}/followers/{follower_id}",
    "method": "removeFollower",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Delete a follower from a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "followerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the follower",
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
    "url": "/deals/{id}/mailMessages",
    "method": "listMailMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List mail messages associated with a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/deals/{id}/merge",
    "method": "mergeDeals",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Merge two deals",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "merge_with_id",
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
    "url": "/deals/{id}/participants",
    "method": "listParticipants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List participants of a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/deals/{id}/participants",
    "method": "addParticipant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Add a participant to a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "person_id",
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
    "url": "/deals/{id}/participants/{deal_participant_id}",
    "method": "deleteParticipant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Delete a participant from a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "dealParticipantId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the participant of the deal",
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
    "url": "/deals/{id}/permittedUsers",
    "method": "listPermittedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List permitted users",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}/persons",
    "method": "listPersonsAssociated",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List all persons associated with a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/deals/{id}/products",
    "method": "listDealProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "List products attached to a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "includeProductData",
        "schema": "number",
        "description": "Whether to fetch product data along with each attached product (https://developers.pipedrive.com/docs/api/v1 or not (0, default)"
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
    "url": "/deals/{id}/products",
    "method": "addProductToDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Add a product to a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/deals/{id}/products/{product_attachment_id}",
    "method": "deleteAttachedProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Delete an attached product from a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "productAttachmentId",
        "schema": "integer",
        "required": true,
        "description": "The product attachment ID",
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
    "url": "/deals/{id}/products/{product_attachment_id}",
    "method": "updateProductAttachment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Deals",
    "typeScriptTag": "deals",
    "description": "Update the product attached to a deal",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
        "example": 0
      },
      {
        "name": "productAttachmentId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal-product (the ID of the product attached to the deal)",
        "example": 0
      },
      {
        "name": "product_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "item_price",
        "schema": "number",
        "description": ""
      },
      {
        "name": "quantity",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "discount",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "discount_type",
        "schema": "string",
        "description": "",
        "default": "percentage"
      },
      {
        "name": "duration",
        "schema": "number",
        "description": "",
        "default": 1
      },
      {
        "name": "duration_unit",
        "schema": "string",
        "description": ""
      },
      {
        "name": "product_variation_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tax",
        "schema": "number",
        "description": "",
        "default": 0
      },
      {
        "name": "tax_method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled_flag",
        "schema": "boolean",
        "description": "",
        "default": true
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
    "url": "/dealFields",
    "method": "deleteMultipleBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DealFields",
    "typeScriptTag": "dealFields",
    "description": "Delete multiple deal fields in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated field IDs to delete",
        "example": "IDS"
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
    "url": "/dealFields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DealFields",
    "typeScriptTag": "dealFields",
    "description": "Get all deal fields",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/dealFields",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "DealFields",
    "typeScriptTag": "dealFields",
    "description": "Add a new deal field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/dealFields/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "DealFields",
    "typeScriptTag": "dealFields",
    "description": "Delete a deal field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
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
    "url": "/dealFields/{id}",
    "method": "getOneField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DealFields",
    "typeScriptTag": "dealFields",
    "description": "Get one deal field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
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
    "url": "/dealFields/{id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "DealFields",
    "typeScriptTag": "dealFields",
    "description": "Update a deal field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "add_visible_flag",
        "schema": "boolean",
        "description": "",
        "default": true
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
    "url": "/files",
    "method": "getAllFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get all files",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`."
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
    "url": "/files",
    "method": "uploadAndAssociate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Add file",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "deal_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "person_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "org_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "product_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "activity_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "lead_id",
        "schema": "string",
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
    "url": "/files/remote",
    "method": "createRemoteFileAndLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Create a remote file and link it to an item",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "file_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE_TYPE"
      },
      {
        "name": "item_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEM_TYPE"
      },
      {
        "name": "item_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "remote_location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REMOTE_LOCATION"
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
    "url": "/files/remoteLink",
    "method": "linkRemoteFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Link a remote file to an item",
    "parameters": [
      {
        "name": "item_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEM_TYPE"
      },
      {
        "name": "item_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "remote_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REMOTE_ID"
      },
      {
        "name": "remote_location",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REMOTE_LOCATION"
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
    "url": "/files/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Delete a file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the file",
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
    "url": "/files/{id}",
    "method": "getOneFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Get one file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the file",
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
    "url": "/files/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Update file details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the file",
        "example": 0
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
    "url": "/files/{id}/download",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Files",
    "typeScriptTag": "files",
    "description": "Download one file",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the file",
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
    "url": "/filters",
    "method": "deleteBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Delete multiple filters in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated filter IDs to delete",
        "example": "IDS"
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
    "url": "/filters",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get all filters",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "The types of filters to fetch"
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
    "url": "/filters",
    "method": "addNewFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Add a new filter",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "conditions",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
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
    "url": "/filters/helpers",
    "method": "getHelpers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get all filter helpers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "The rules for filters"
      }
    ]
  },
  {
    "url": "/filters/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Delete a filter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter",
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
    "url": "/filters/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Get one filter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter",
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
    "url": "/filters/{id}",
    "method": "updateFilter",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Filters",
    "typeScriptTag": "filters",
    "description": "Update filter",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the filter",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "conditions",
        "schema": "object",
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
    "url": "/goals",
    "method": "createReport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Add a new goal",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "expected_outcome",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "interval",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INTERVAL"
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
    "url": "/goals/find",
    "method": "getByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Find goals",
    "parameters": [
      {
        "name": "typeName",
        "schema": "string",
        "description": "The type of the goal. If provided, everyone's goals will be returned."
      },
      {
        "name": "title",
        "schema": "string",
        "description": "The title of the goal"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": "Whether the goal is active or not",
        "default": true
      },
      {
        "name": "assigneeId",
        "schema": "integer",
        "description": "The ID of the user who's goal to fetch. When omitted, only your goals will be returned."
      },
      {
        "name": "assigneeType",
        "schema": "string",
        "description": "The type of the goal's assignee. If provided, everyone's goals will be returned."
      },
      {
        "name": "expectedOutcomeTarget",
        "schema": "number",
        "description": "The numeric value of the outcome. If provided, everyone's goals will be returned."
      },
      {
        "name": "expectedOutcomeTrackingMetric",
        "schema": "string",
        "description": "The tracking metric of the expected outcome of the goal. If provided, everyone's goals will be returned."
      },
      {
        "name": "expectedOutcomeCurrencyId",
        "schema": "integer",
        "description": "The numeric ID of the goal's currency. Only applicable to goals with `expected_outcome.tracking_metric` with value `sum`. If provided, everyone's goals will be returned."
      },
      {
        "name": "typeParamsPipelineId",
        "schema": "array",
        "description": "An array of pipeline IDs or `null` for all pipelines. If provided, everyone's goals will be returned."
      },
      {
        "name": "typeParamsStageId",
        "schema": "integer",
        "description": "The ID of the stage. Applicable to only `deals_progressed` type of goals. If provided, everyone's goals will be returned."
      },
      {
        "name": "typeParamsActivityTypeId",
        "schema": "array",
        "description": "An array of IDs or `null` for all activity types. Only applicable for `activities_completed` and/or `activities_added` types of goals. If provided, everyone's goals will be returned."
      },
      {
        "name": "periodStart",
        "schema": "string",
        "description": "The start date of the period for which to find goals. Date in format of YYYY-MM-DD. When `period.start` is provided, `period.end` must be provided too."
      },
      {
        "name": "periodEnd",
        "schema": "string",
        "description": "The end date of the period for which to find goals. Date in format of YYYY-MM-DD."
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
    "url": "/goals/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete existing goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the goal",
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
    "url": "/goals/{id}",
    "method": "updateExistingGoal",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update existing goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the goal",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "object",
        "description": ""
      },
      {
        "name": "type",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expected_outcome",
        "schema": "object",
        "description": ""
      },
      {
        "name": "duration",
        "schema": "object",
        "description": ""
      },
      {
        "name": "interval",
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
    "url": "/goals/{id}/results",
    "method": "getResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get result of a goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the goal that the results are looked for",
        "example": "ID"
      },
      {
        "name": "periodStart",
        "schema": "string",
        "required": true,
        "description": "The start date of the period for which to find the goal's progress. Format: YYYY-MM-DD. This date must be the same or after the goal duration start date.\n",
        "example": "PERIOD.START"
      },
      {
        "name": "periodEnd",
        "schema": "string",
        "required": true,
        "description": "The end date of the period for which to find the goal's progress. Format: YYYY-MM-DD. This date must be the same or before the goal duration end date.\n",
        "example": "PERIOD.END"
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
    "url": "/itemSearch",
    "method": "searchMultipleItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ItemSearch",
    "typeScriptTag": "itemSearch",
    "description": "Perform a search from multiple item types",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "itemTypes",
        "schema": "string",
        "description": "A comma-separated string array. The type of items to perform the search from. Defaults to all."
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "A comma-separated string array. The fields to perform the search from. Defaults to all. Relevant for each item type are:<br> <table> <tr><th><b>Item type</b></th><th><b>Field</b></th></tr> <tr><td>Deal</td><td>`custom_fields`, `notes`, `title`</td></tr> <tr><td>Person</td><td>`custom_fields`, `email`, `name`, `notes`, `phone`</td></tr> <tr><td>Organization</td><td>`address`, `custom_fields`, `name`, `notes`</td></tr> <tr><td>Product</td><td>`code`, `custom_fields`, `name`</td></tr> <tr><td>Lead</td><td>`custom_fields`, `notes`, `email`, `organization_name`, `person_name`, `phone`, `title`</td></tr> <tr><td>File</td><td>`name`</td></tr> <tr><td>Mail attachment</td><td>`name`</td></tr> <tr><td>Project</td><td> `custom_fields`, `notes`, `title`, `description` </td></tr> </table> <br> Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.<br/> When searching for leads, the email, organization_name, person_name, and phone fields will return results only for leads not linked to contacts. For searching leads by person or organization values, please use `search_for_related_items`."
      },
      {
        "name": "searchForRelatedItems",
        "schema": "boolean",
        "description": "When enabled, the response will include up to 100 newest related leads and 100 newest related deals for each found person and organization and up to 100 newest related persons for each found organization"
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "A comma-separated string array. Supports including optional fields in the results which are not provided by default."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/itemSearch/field",
    "method": "byFieldValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ItemSearch",
    "typeScriptTag": "itemSearch",
    "description": "Perform a search using a specific field from an item type",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "fieldType",
        "schema": "string",
        "required": true,
        "description": "The type of the field to perform the search from",
        "example": "FIELD_TYPE"
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. The search <b>is</b> case sensitive.",
        "default": false
      },
      {
        "name": "fieldKey",
        "schema": "string",
        "required": true,
        "description": "The key of the field to search from. The field key can be obtained by fetching the list of the fields using any of the fields' API GET methods (dealFields, personFields, etc.). Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.",
        "example": "FIELD_KEY"
      },
      {
        "name": "returnItemIds",
        "schema": "boolean",
        "description": "Whether to return the IDs of the matching items or not. When not set or set to `0` or `false`, only distinct values of the searched field are returned. When set to `1` or `true`, the ID of each found item is returned."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/leads",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Get all leads",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.",
        "example": 100
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "For pagination, the position that represents the first result for the page",
        "example": 0
      },
      {
        "name": "archivedStatus",
        "schema": "string",
        "description": "Filtering based on the archived status of a lead. If not provided, `All` is used."
      },
      {
        "name": "ownerId",
        "schema": "integer",
        "description": "If supplied, only leads matching the given user will be returned. However, `filter_id` takes precedence over `owner_id` when supplied.",
        "example": 1
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "If supplied, only leads matching the given person will be returned. However, `filter_id` takes precedence over `person_id` when supplied.",
        "example": 1
      },
      {
        "name": "organizationId",
        "schema": "integer",
        "description": "If supplied, only leads matching the given organization will be returned. However, `filter_id` takes precedence over `organization_id` when supplied.",
        "example": 1
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "The ID of the filter to use",
        "example": 1
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys)."
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
    "url": "/leads",
    "method": "createLead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Add a lead",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "label_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "person_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "expected_close_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "visible_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "was_seen",
        "schema": "boolean",
        "required": false,
        "description": ""
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
    "url": "/leads/{id}",
    "method": "deleteLead",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Delete a lead",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the lead",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Get one lead",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the lead",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{id}",
    "method": "updateLeadProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Update a lead",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the lead",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "label_ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "person_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "organization_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "is_archived",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "value",
        "schema": "object",
        "description": ""
      },
      {
        "name": "expected_close_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "visible_to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "was_seen",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/leads/{id}/permittedUsers",
    "method": "listPermittedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "List permitted users",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the lead",
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
    "url": "/leads/search",
    "method": "searchLeads",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Search leads",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "A comma-separated string array. The fields to perform the search from. Defaults to all of them."
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive."
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "Will filter leads by the provided person ID. The upper limit of found leads associated with the person is 2000."
      },
      {
        "name": "organizationId",
        "schema": "integer",
        "description": "Will filter leads by the provided organization ID. The upper limit of found leads associated with the organization is 2000."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "Supports including optional fields in the results which are not provided by default"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/leadLabels",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeadLabels",
    "typeScriptTag": "leadLabels",
    "description": "Get all lead labels",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/leadLabels",
    "method": "addNewLabel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LeadLabels",
    "typeScriptTag": "leadLabels",
    "description": "Add a lead label",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
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
    "url": "/leadLabels/{id}",
    "method": "deleteLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LeadLabels",
    "typeScriptTag": "leadLabels",
    "description": "Delete a lead label",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the lead label",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/leadLabels/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "LeadLabels",
    "typeScriptTag": "leadLabels",
    "description": "Update a lead label",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the lead label",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "color",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/leadSources",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeadSources",
    "typeScriptTag": "leadSources",
    "description": "Get all lead sources",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams",
    "method": "getAllTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Get all teams",
    "parameters": [
      {
        "name": "orderBy",
        "schema": "string",
        "description": "The field name to sort returned teams by",
        "default": "id"
      },
      {
        "name": "skipUsers",
        "schema": "number",
        "description": "When enabled, the teams will not include IDs of member users",
        "default": 0
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
    "url": "/legacyTeams",
    "method": "addNewTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Add a new team",
    "parameters": [
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
        "description": "",
        "example": "NAME"
      },
      {
        "name": "manager_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "users",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams/{id}",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Get a single team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team",
        "example": 0
      },
      {
        "name": "skipUsers",
        "schema": "number",
        "description": "When enabled, the teams will not include IDs of member users",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams/{id}",
    "method": "updateTeamObject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Update a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team",
        "example": 0
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams/{id}/users",
    "method": "removeUsers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Delete users from a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team",
        "example": 0
      },
      {
        "name": "users",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams/{id}/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Get all users in a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams/{id}/users",
    "method": "addUsersToTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Add users to a team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the team",
        "example": 0
      },
      {
        "name": "users",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/legacyTeams/user/{id}",
    "method": "getUserTeams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LegacyTeams",
    "typeScriptTag": "legacyTeams",
    "description": "Get all teams of a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
        "example": 0
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "The field name to sort returned teams by",
        "default": "id"
      },
      {
        "name": "skipUsers",
        "schema": "number",
        "description": "When enabled, the teams will not include IDs of member users",
        "default": 0
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
    "url": "/mailbox/mailMessages/{id}",
    "method": "getMailMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mailbox",
    "typeScriptTag": "mailbox",
    "description": "Get one mail message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the mail message to fetch",
        "example": 0
      },
      {
        "name": "includeBody",
        "schema": "number",
        "description": "Whether to include the full message body or not. `0` = Don't include, `1` = Include.",
        "default": 0
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
    "url": "/mailbox/mailThreads",
    "method": "getMailThreads",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mailbox",
    "typeScriptTag": "mailbox",
    "description": "Get mail threads",
    "parameters": [
      {
        "name": "folder",
        "schema": "string",
        "required": true,
        "description": "The type of folder to fetch",
        "example": "FOLDER",
        "default": "inbox"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/mailbox/mailThreads/{id}",
    "method": "markThreadDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Mailbox",
    "typeScriptTag": "mailbox",
    "description": "Delete mail thread",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the mail thread",
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
    "url": "/mailbox/mailThreads/{id}",
    "method": "getMailThread",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mailbox",
    "typeScriptTag": "mailbox",
    "description": "Get one mail thread",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the mail thread",
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
    "url": "/mailbox/mailThreads/{id}",
    "method": "updateMailThreadDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Mailbox",
    "typeScriptTag": "mailbox",
    "description": "Update mail thread details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the mail thread",
        "example": 0
      },
      {
        "name": "deal_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lead_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shared_flag",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "read_flag",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "archived_flag",
        "schema": "undefined",
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
    "url": "/mailbox/mailThreads/{id}/mailMessages",
    "method": "getAllMailMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Mailbox",
    "typeScriptTag": "mailbox",
    "description": "Get all mail messages of mail thread",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the mail thread",
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
    "url": "/meetings/userProviderLinks",
    "method": "linkUserProvider",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Link a user with the installed video call integration",
    "parameters": [
      {
        "name": "user_provider_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1e3943c9-6395-462b-b432-1f252c017f3d"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "company_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 456
      },
      {
        "name": "marketplace_client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "57da5c3c55a82bb4"
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
    "url": "/meetings/userProviderLinks/{id}",
    "method": "removeUserProviderLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Meetings",
    "typeScriptTag": "meetings",
    "description": "Delete the link between a user and the installed video call integration",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique identifier linking a user to the installed integration",
        "example": "ID"
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
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get all notes",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "description": "The ID of the user whose notes to fetch. If omitted, notes by all users will be returned."
      },
      {
        "name": "leadId",
        "schema": "string",
        "description": "The ID of the lead which notes to fetch. If omitted, notes about all leads will be returned."
      },
      {
        "name": "dealId",
        "schema": "integer",
        "description": "The ID of the deal which notes to fetch. If omitted, notes about all deals will be returned."
      },
      {
        "name": "personId",
        "schema": "integer",
        "description": "The ID of the person whose notes to fetch. If omitted, notes about all persons will be returned."
      },
      {
        "name": "orgId",
        "schema": "integer",
        "description": "The ID of the organization which notes to fetch. If omitted, notes about all organizations will be returned."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `content`, `add_time`, `update_time`."
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "The date in format of YYYY-MM-DD from which notes to fetch"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "The date in format of YYYY-MM-DD until which notes to fetch to"
      },
      {
        "name": "pinnedToLeadFlag",
        "schema": "number",
        "description": "If set, the results are filtered by note to lead pinning state"
      },
      {
        "name": "pinnedToDealFlag",
        "schema": "number",
        "description": "If set, the results are filtered by note to deal pinning state"
      },
      {
        "name": "pinnedToOrganizationFlag",
        "schema": "number",
        "description": "If set, the results are filtered by note to organization pinning state"
      },
      {
        "name": "pinnedToPersonFlag",
        "schema": "number",
        "description": "If set, the results are filtered by note to person pinning state"
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
    "url": "/notes",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Add a note",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notes/{id}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete a note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
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
    "url": "/notes/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get one note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
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
    "url": "/notes/{id}",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update a note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
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
    "url": "/notes/{id}/comments",
    "method": "getAllComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get all comments for a note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/notes/{id}/comments",
    "method": "addNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Add a comment to a note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
        "example": 0
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
      }
    ]
  },
  {
    "url": "/notes/{id}/comments/{commentId}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete a comment related to a note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
        "example": 0
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment",
        "example": "COMMENTID"
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
    "url": "/notes/{id}/comments/{commentId}",
    "method": "getCommentDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get one comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
        "example": 0
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment",
        "example": "COMMENTID"
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
    "url": "/notes/{id}/comments/{commentId}",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update a comment related to a note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the note",
        "example": 0
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the comment",
        "example": "COMMENTID"
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
      }
    ]
  },
  {
    "url": "/noteFields",
    "method": "getAllNoteFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NoteFields",
    "typeScriptTag": "noteFields",
    "description": "Get all note fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "deleteMultipleBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete multiple organizations in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated IDs that will be deleted",
        "example": "IDS"
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
    "url": "/organizations",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get all organizations",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, only organizations owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied."
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "The ID of the filter to use"
      },
      {
        "name": "firstChar",
        "schema": "string",
        "description": "If supplied, only organizations whose name starts with the specified letter will be returned (https://developers.pipedrive.com/docs/api/v1"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys)."
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
    "url": "/organizations",
    "method": "addNewOrganization",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Add an organization",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizations/collection",
    "method": "listAllOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get all organizations (https://developers.pipedrive.com/docs/api/v1",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.",
        "example": 100
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "ownerId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only organizations owned by the given user will be returned"
      },
      {
        "name": "firstChar",
        "schema": "string",
        "required": false,
        "description": "If supplied, only organizations whose name starts with the specified letter will be returned (https://developers.pipedrive.com/docs/api/v1"
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
    "url": "/organizations/search",
    "method": "searchByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Search organizations",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>."
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/organizations/{id}",
    "method": "deleteMarkedOrganization",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
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
    "url": "/organizations/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Get details of an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
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
    "url": "/organizations/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Update an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
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
    "url": "/organizations/{id}/activities",
    "method": "listActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List activities associated with an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "done",
        "schema": "number",
        "description": "Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted returns both Done and Not done activities."
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": "A comma-separated string of activity IDs to exclude from result"
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
    "url": "/organizations/{id}/deals",
    "method": "listDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List deals associated with an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.",
        "default": "all_not_deleted"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys)."
      },
      {
        "name": "onlyPrimaryAssociation",
        "schema": "number",
        "description": "If set, only deals that are directly associated to the organization are fetched. If not set (https://developers.pipedrive.com/docs/api/v1, all deals are fetched that are either directly or indirectly related to the organization. Indirect relations include relations through custom, organization-type fields and through persons of the given organization."
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
    "url": "/organizations/{id}/files",
    "method": "listAttachedFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List files attached to an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`."
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
    "url": "/organizations/{id}/flow",
    "method": "listUpdatesAbout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List updates about an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "allChanges",
        "schema": "string",
        "description": "Whether to show custom field updates or not. 1 = Include custom field changes. If omitted, returns changes without custom field updates."
      },
      {
        "name": "items",
        "schema": "string",
        "description": "A comma-separated string for filtering out item specific updates. (Possible values - activity, plannedActivity, note, file, change, deal, follower, participant, mailMessage, mailMessageWithAttachment, invoice, activityFile, document)."
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
    "url": "/organizations/{id}/followers",
    "method": "listFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List followers of an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
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
    "url": "/organizations/{id}/followers",
    "method": "addFollower",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Add a follower to an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "user_id",
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
    "url": "/organizations/{id}/followers/{follower_id}",
    "method": "deleteFollower",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Delete a follower from an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "followerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the follower",
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
    "url": "/organizations/{id}/mailMessages",
    "method": "listMailMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List mail messages associated with an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/organizations/{id}/merge",
    "method": "mergeTwo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "Merge two organizations",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "merge_with_id",
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
    "url": "/organizations/{id}/permittedUsers",
    "method": "listPermittedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List permitted users",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
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
    "url": "/organizations/{id}/persons",
    "method": "listPersons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organizations",
    "typeScriptTag": "organizations",
    "description": "List persons of an organization",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/organizationFields",
    "method": "deleteMultipleBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OrganizationFields",
    "typeScriptTag": "organizationFields",
    "description": "Delete multiple organization fields in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated field IDs to delete",
        "example": "IDS"
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
    "url": "/organizationFields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationFields",
    "typeScriptTag": "organizationFields",
    "description": "Get all organization fields",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/organizationFields",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationFields",
    "typeScriptTag": "organizationFields",
    "description": "Add a new organization field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/organizationFields/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OrganizationFields",
    "typeScriptTag": "organizationFields",
    "description": "Delete an organization field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
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
    "url": "/organizationFields/{id}",
    "method": "getSpecificField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationFields",
    "typeScriptTag": "organizationFields",
    "description": "Get one organization field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
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
    "url": "/organizationFields/{id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "OrganizationFields",
    "typeScriptTag": "organizationFields",
    "description": "Update an organization field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "add_visible_flag",
        "schema": "boolean",
        "description": "",
        "default": true
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
    "url": "/organizationRelationships",
    "method": "getAllRelationships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationRelationships",
    "typeScriptTag": "organizationRelationships",
    "description": "Get all relationships for organization",
    "parameters": [
      {
        "name": "orgId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization to get relationships for",
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
    "url": "/organizationRelationships",
    "method": "createNewRelationship",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OrganizationRelationships",
    "typeScriptTag": "organizationRelationships",
    "description": "Create an organization relationship",
    "parameters": [
      {
        "name": "org_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "rel_owner_org_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "rel_linked_org_id",
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
    "url": "/organizationRelationships/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OrganizationRelationships",
    "typeScriptTag": "organizationRelationships",
    "description": "Delete an organization relationship",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization relationship",
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
    "url": "/organizationRelationships/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OrganizationRelationships",
    "typeScriptTag": "organizationRelationships",
    "description": "Get one organization relationship",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization relationship",
        "example": 0
      },
      {
        "name": "orgId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the base organization for the returned calculated values"
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
    "url": "/organizationRelationships/{id}",
    "method": "updateAndReturn",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "OrganizationRelationships",
    "typeScriptTag": "organizationRelationships",
    "description": "Update an organization relationship",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the organization relationship",
        "example": 0
      },
      {
        "name": "org_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rel_owner_org_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "rel_linked_org_id",
        "schema": "integer",
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
    "url": "/permissionSets",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionSets",
    "typeScriptTag": "permissionSets",
    "description": "Get all permission sets",
    "parameters": [
      {
        "name": "app",
        "schema": "string",
        "description": "The app to filter the permission sets by"
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
    "url": "/permissionSets/{id}",
    "method": "getOne",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionSets",
    "typeScriptTag": "permissionSets",
    "description": "Get one permission set",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the permission set",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/permissionSets/{id}/assignments",
    "method": "listAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PermissionSets",
    "typeScriptTag": "permissionSets",
    "description": "List permission set assignments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the permission set",
        "example": "ID"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/persons",
    "method": "deleteMultipleBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Delete multiple persons in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated IDs that will be deleted",
        "example": "IDS"
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
    "url": "/persons",
    "method": "listAllPersons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get all persons",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, only persons owned by the given user will be returned. However, `filter_id` takes precedence over `user_id` when both are supplied."
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "The ID of the filter to use"
      },
      {
        "name": "firstChar",
        "schema": "string",
        "description": "If supplied, only persons whose name starts with the specified letter will be returned (https://developers.pipedrive.com/docs/api/v1"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys)."
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
    "url": "/persons",
    "method": "createNewPerson",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Add a person",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/persons/collection",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get all persons (https://developers.pipedrive.com/docs/api/v1",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned. Please note that a maximum value of 500 is allowed.",
        "example": 100
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the start of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "The time boundary that points to the end of the range of data. Datetime in ISO 8601 format. E.g. 2022-11-01 08:55:59. Operates on the `update_time` field."
      },
      {
        "name": "ownerId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only persons owned by the given user will be returned"
      },
      {
        "name": "firstChar",
        "schema": "string",
        "required": false,
        "description": "If supplied, only persons whose name starts with the specified letter will be returned (https://developers.pipedrive.com/docs/api/v1"
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
    "url": "/persons/search",
    "method": "searchByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Search persons",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>."
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive."
      },
      {
        "name": "organizationId",
        "schema": "integer",
        "description": "Will filter persons by the provided organization ID. The upper limit of found persons associated with the organization is 2000."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "Supports including optional fields in the results which are not provided by default"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/persons/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Delete a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
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
    "url": "/persons/{id}",
    "method": "getPersonDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Get details of a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
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
    "url": "/persons/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Update a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
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
    "url": "/persons/{id}/activities",
    "method": "listActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List activities associated with a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "done",
        "schema": "number",
        "description": "Whether the activity is done or not. 0 = Not done, 1 = Done. If omitted, returns both Done and Not done activities."
      },
      {
        "name": "exclude",
        "schema": "string",
        "description": "A comma-separated string of activity IDs to exclude from result"
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
    "url": "/persons/{id}/deals",
    "method": "listDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List deals associated with a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.",
        "default": "all_not_deleted"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys)."
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
    "url": "/persons/{id}/files",
    "method": "listPersonFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List files attached to a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field names and sorting mode separated by a comma (`field_name_1 ASC`, `field_name_2 DESC`). Only first-level field keys are supported (no nested keys). Supported fields: `id`, `user_id`, `deal_id`, `person_id`, `org_id`, `product_id`, `add_time`, `update_time`, `file_name`, `file_type`, `file_size`, `comment`."
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
    "url": "/persons/{id}/flow",
    "method": "listUpdatesAbout",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List updates about a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "allChanges",
        "schema": "string",
        "description": "Whether to show custom field updates or not. 1 = Include custom field changes. If omitted returns changes without custom field updates."
      },
      {
        "name": "items",
        "schema": "string",
        "description": "A comma-separated string for filtering out item specific updates. (Possible values - call, activity, plannedActivity, change, note, deal, file, dealChange, personChange, organizationChange, follower, dealFollower, personFollower, organizationFollower, participant, comment, mailMessage, mailMessageWithAttachment, invoice, document, marketing_campaign_stat, marketing_status_change)."
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
    "url": "/persons/{id}/followers",
    "method": "listFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List followers of a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
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
    "url": "/persons/{id}/followers",
    "method": "addFollower",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Add a follower to a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "user_id",
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
    "url": "/persons/{id}/followers/{follower_id}",
    "method": "deleteFollower",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Delete a follower from a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "followerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the follower",
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
    "url": "/persons/{id}/mailMessages",
    "method": "listMailMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List mail messages associated with a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/persons/{id}/merge",
    "method": "mergeTwo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Merge two persons",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "merge_with_id",
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
    "url": "/persons/{id}/permittedUsers",
    "method": "listPermittedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List permitted users",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
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
    "url": "/persons/{id}/picture",
    "method": "deletePicture",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Delete person picture",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
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
    "url": "/persons/{id}/picture",
    "method": "addPicture",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "Add person picture",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "crop_x",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "crop_y",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "crop_width",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "crop_height",
        "schema": "integer",
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
    "url": "/persons/{id}/products",
    "method": "listProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Persons",
    "typeScriptTag": "persons",
    "description": "List products associated with a person",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the person",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/personFields",
    "method": "deleteMultipleBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PersonFields",
    "typeScriptTag": "personFields",
    "description": "Delete multiple person fields in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated field IDs to delete",
        "example": "IDS"
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
    "url": "/personFields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PersonFields",
    "typeScriptTag": "personFields",
    "description": "Get all person fields",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/personFields",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PersonFields",
    "typeScriptTag": "personFields",
    "description": "Add a new person field",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/personFields/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PersonFields",
    "typeScriptTag": "personFields",
    "description": "Delete a person field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
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
    "url": "/personFields/{id}",
    "method": "getSpecificField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PersonFields",
    "typeScriptTag": "personFields",
    "description": "Get one person field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
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
    "url": "/personFields/{id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PersonFields",
    "typeScriptTag": "personFields",
    "description": "Update a person field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the field",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
        "description": ""
      },
      {
        "name": "add_visible_flag",
        "schema": "boolean",
        "description": "",
        "default": true
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
    "url": "/pipelines",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get all pipelines",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/pipelines",
    "method": "createNewPipeline",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Add a new pipeline",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "deal_probability",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "order_nr",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "undefined",
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
    "url": "/pipelines/{id}",
    "method": "deletePipeline",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Delete a pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the pipeline",
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
    "url": "/pipelines/{id}",
    "method": "getOnePipelineSummary",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get one pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the pipeline",
        "example": 0
      },
      {
        "name": "totalsConvertCurrency",
        "schema": "string",
        "description": "The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned in `deals_summary` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used."
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
    "url": "/pipelines/{id}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Update a pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the pipeline",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deal_probability",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "order_nr",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "active",
        "schema": "undefined",
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
    "url": "/pipelines/{id}/conversion_statistics",
    "method": "getConversionStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get deals conversion rates in pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the pipeline",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start of the period. Date in format of YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The end of the period. Date in format of YYYY-MM-DD.",
        "example": "END_DATE"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "The ID of the user who's pipeline metrics statistics to fetch. If omitted, the authorized user will be used."
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
    "url": "/pipelines/{id}/deals",
    "method": "listDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get deals in a pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the pipeline",
        "example": 0
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "If supplied, only deals matching the given filter will be returned"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned."
      },
      {
        "name": "everyone",
        "schema": "number",
        "description": "If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned"
      },
      {
        "name": "stageId",
        "schema": "integer",
        "description": "If supplied, only deals within the given stage will be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "getSummary",
        "schema": "number",
        "description": "Whether to include a summary of the pipeline in the `additional_data` or not"
      },
      {
        "name": "totalsConvertCurrency",
        "schema": "string",
        "description": "The 3-letter currency code of any of the supported currencies. When supplied, `per_stages_converted` is returned inside `deals_summary` inside `additional_data` which contains the currency-converted total amounts in the given currency per each stage. You may also set this parameter to `default_currency` in which case users default currency is used. Only works when `get_summary` parameter flag is enabled."
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
    "url": "/pipelines/{id}/movement_statistics",
    "method": "getMovementStatistics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Get deals movements in pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the pipeline",
        "example": 0
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The start of the period. Date in format of YYYY-MM-DD.",
        "example": "START_DATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The end of the period. Date in format of YYYY-MM-DD.",
        "example": "END_DATE"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "The ID of the user who's pipeline statistics to fetch. If omitted, the authorized user will be used."
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
    "url": "/products",
    "method": "getAllProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get all products",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, only products owned by the given user will be returned"
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "The ID of the filter to use"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": "An array of integers with the IDs of the products that should be returned in the response"
      },
      {
        "name": "firstChar",
        "schema": "string",
        "description": "If supplied, only products whose name starts with the specified letter will be returned (https://developers.pipedrive.com/docs/api/v1"
      },
      {
        "name": "getSummary",
        "schema": "boolean",
        "description": "If supplied, the response will return the total numbers of products in the `additional_data.summary.total_count` property"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/products",
    "method": "createProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Add a product",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/products/search",
    "method": "searchByFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Search products",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for. Minimum 2 characters (or 1 if using `exact_match`). Please note that the search term has to be URL encoded.",
        "example": "TERM"
      },
      {
        "name": "fields",
        "schema": "string",
        "description": "A comma-separated string array. The fields to perform the search from. Defaults to all of them. Only the following custom field types are searchable: `address`, `varchar`, `text`, `varchar_auto`, `double`, `monetary` and `phone`. Read more about searching by custom fields <a href=\"https://support.pipedrive.com/en/article/search-finding-what-you-need#searching-by-custom-fields\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>."
      },
      {
        "name": "exactMatch",
        "schema": "boolean",
        "description": "When enabled, only full exact matches against the given term are returned. It is <b>not</b> case sensitive."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "Supports including optional fields in the results which are not provided by default"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start. Note that the pagination is based on main results and does not include related items when using `search_for_related_items` parameter.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/products/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Delete a product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
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
    "url": "/products/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get one product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
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
    "url": "/products/{id}",
    "method": "updateProductData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Update a product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
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
    "url": "/products/{id}/deals",
    "method": "getDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get deals where a product is attached to",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Only fetch deals with a specific status. If omitted, all not deleted deals are returned. If set to deleted, deals that have been deleted up to 30 days ago will be included.",
        "default": "all_not_deleted"
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
    "url": "/products/{id}/files",
    "method": "listProductFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List files attached to a product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The field name and sorting mode (`field_name_1 ASC` or `field_name_1 DESC`). Supported fields: `update_time`, `id`."
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
    "url": "/products/{id}/followers",
    "method": "listProductFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List followers of a product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/products/{id}/followers",
    "method": "addFollower",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Add a follower to a product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
        "example": 0
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/products/{id}/followers/{follower_id}",
    "method": "deleteFollower",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Delete a follower from a product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
        "example": 0
      },
      {
        "name": "followerId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the relationship between the follower and the product",
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
    "url": "/products/{id}/permittedUsers",
    "method": "listPermittedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "List permitted users",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product",
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
    "url": "/productFields",
    "method": "deleteMultipleBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProductFields",
    "typeScriptTag": "productFields",
    "description": "Delete multiple product fields in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated field IDs to delete",
        "example": "IDS"
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
    "url": "/productFields",
    "method": "getAllFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductFields",
    "typeScriptTag": "productFields",
    "description": "Get all product fields",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/productFields",
    "method": "addNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProductFields",
    "typeScriptTag": "productFields",
    "description": "Add a new product field",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "options",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "field_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELD_TYPE"
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
    "url": "/productFields/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProductFields",
    "typeScriptTag": "productFields",
    "description": "Delete a product field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product field",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/productFields/{id}",
    "method": "getOneField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductFields",
    "typeScriptTag": "productFields",
    "description": "Get one product field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product field",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      }
    ]
  },
  {
    "url": "/productFields/{id}",
    "method": "updateField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProductFields",
    "typeScriptTag": "productFields",
    "description": "Update a product field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the product field",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "options",
        "schema": "array",
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
    "url": "/projects",
    "method": "getAllProjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all projects",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "For pagination, the limit of entries to be returned. If not provided, 100 items will be returned.",
        "example": 100
      },
      {
        "name": "filterId",
        "schema": "integer",
        "required": false,
        "description": "The ID of the filter to use"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "If supplied, includes only projects with the specified statuses. Possible values are `open`, `completed`, `canceled` and `deleted`. By default `deleted` projects are not returned.",
        "example": "open,completed"
      },
      {
        "name": "phaseId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only projects in specified phase are returned"
      },
      {
        "name": "includeArchived",
        "schema": "boolean",
        "required": false,
        "description": "If supplied with `true` then archived projects are also included in the response. By default only not archived projects are returned."
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
    "url": "/projects",
    "method": "createProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Add a project",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete a project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get details of a project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}",
    "method": "updateProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}/archive",
    "method": "archiveProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Archive a project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}/plan",
    "method": "getProjectPlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns project plan",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}/plan/activities/{activityId}",
    "method": "updateProjectPlanActivity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update activity in project plan",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
        "example": 0
      },
      {
        "name": "activityId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the activity",
        "example": 0
      },
      {
        "name": "phase_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "number",
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
    "url": "/projects/{id}/plan/tasks/{taskId}",
    "method": "updatePlanTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update task in project plan",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
        "example": 0
      },
      {
        "name": "taskId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the task",
        "example": 0
      },
      {
        "name": "phase_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "number",
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
    "url": "/projects/{id}/groups",
    "method": "getGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns project groups",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}/tasks",
    "method": "getProjectTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns project tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/{id}/activities",
    "method": "getProjectActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Returns project activities",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project",
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
    "url": "/projects/boards",
    "method": "getAllBoards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get all project boards",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/projects/boards/{id}",
    "method": "getBoardDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectTemplates",
    "typeScriptTag": "projectTemplates",
    "description": "Get details of a board",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project board",
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
    "url": "/projects/phases",
    "method": "getPhases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Get project phases",
    "parameters": [
      {
        "name": "boardId",
        "schema": "integer",
        "required": true,
        "description": "ID of the board for which phases are requested",
        "example": 1
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
    "url": "/projects/phases/{id}",
    "method": "getPhaseDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectTemplates",
    "typeScriptTag": "projectTemplates",
    "description": "Get details of a phase",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project phase",
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
    "url": "/projectTemplates",
    "method": "getAllTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectTemplates",
    "typeScriptTag": "projectTemplates",
    "description": "Get all project templates",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.",
        "example": 500
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
    "url": "/projectTemplates/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectTemplates",
    "typeScriptTag": "projectTemplates",
    "description": "Get details of a template",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the project template",
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
    "url": "/recents",
    "method": "getChangesAfter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recents",
    "typeScriptTag": "recents",
    "description": "Get recents",
    "parameters": [
      {
        "name": "sinceTimestamp",
        "schema": "string",
        "required": true,
        "description": "The timestamp in UTC. Format: YYYY-MM-DD HH:MM:SS.",
        "example": "SINCE_TIMESTAMP"
      },
      {
        "name": "items",
        "schema": "string",
        "description": "Multiple selection of item types to include in the query (https://developers.pipedrive.com/docs/api/v1"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/roles",
    "method": "getAllRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Get all roles",
    "parameters": [
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/roles",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Add a role",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parent_role_id",
        "schema": "integer",
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
    "url": "/roles/{id}",
    "method": "markAsDeleted",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Delete a role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
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
    "url": "/roles/{id}",
    "method": "getOneRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Get one role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
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
    "url": "/roles/{id}",
    "method": "updateRoleDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Update role details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "parent_role_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "name",
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
    "url": "/roles/{id}/assignments",
    "method": "removeAssignment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Delete a role assignment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "user_id",
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
    "url": "/roles/{id}/assignments",
    "method": "listRoleAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List role assignments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/roles/{id}/assignments",
    "method": "assignUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Add role assignment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "user_id",
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
    "url": "/roles/{id}/settings",
    "method": "getRoleSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List role settings",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
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
    "url": "/roles/{id}/settings",
    "method": "addOrUpdateSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Add or update role setting",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "setting_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SETTING_KEY"
      },
      {
        "name": "value",
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
    "url": "/roles/{id}/pipelines",
    "method": "listPipelineVisibility",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List pipeline visibility for a role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "visible",
        "schema": "boolean",
        "description": "Whether to return the visible or hidden pipelines for the role",
        "default": true
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
    "url": "/roles/{id}/pipelines",
    "method": "updatePipelineVisibility",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Update pipeline visibility for a role",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the role",
        "example": 0
      },
      {
        "name": "visible_pipeline_ids",
        "schema": "object",
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
    "url": "/stages",
    "method": "deleteBulk",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Delete multiple stages in bulk",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": "The comma-separated stage IDs to delete",
        "example": "IDS"
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
    "url": "/stages",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Get all stages",
    "parameters": [
      {
        "name": "pipelineId",
        "schema": "integer",
        "description": "The ID of the pipeline to fetch stages for. If omitted, stages for all pipelines will be fetched."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/stages",
    "method": "createNewStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Add a new stage",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "pipeline_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "deal_probability",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "rotten_flag",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "rotten_days",
        "schema": "integer",
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
    "url": "/stages/{id}",
    "method": "deleteStage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Delete a stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the stage",
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
    "url": "/stages/{id}",
    "method": "getOneStage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Get one stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the stage",
        "example": 0
      },
      {
        "name": "everyone",
        "schema": "number",
        "description": "If `everyone=1` is provided, deals summary will return deals owned by every user"
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
    "url": "/stages/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Update stage details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the stage",
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
    "url": "/stages/{id}/deals",
    "method": "getStageDeals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stages",
    "typeScriptTag": "stages",
    "description": "Get deals in a stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the stage",
        "example": 0
      },
      {
        "name": "filterId",
        "schema": "integer",
        "description": "If supplied, only deals matching the given filter will be returned"
      },
      {
        "name": "userId",
        "schema": "integer",
        "description": "If supplied, `filter_id` will not be considered and only deals owned by the given user will be returned. If omitted, deals owned by the authorized user will be returned."
      },
      {
        "name": "everyone",
        "schema": "number",
        "description": "If supplied, `filter_id` and `user_id` will not be considered – instead, deals owned by everyone will be returned"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/subscriptions/{id}",
    "method": "deleteMarked",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete a subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription",
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
    "url": "/subscriptions/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get details of a subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription",
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
    "url": "/subscriptions/find/{dealId}",
    "method": "findByDealId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Find subscription by deal",
    "parameters": [
      {
        "name": "dealId",
        "schema": "integer",
        "required": true,
        "description": "The ID of the deal",
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
    "url": "/subscriptions/{id}/payments",
    "method": "getPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Get all payments of a subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription",
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
    "url": "/subscriptions/recurring",
    "method": "addRecurring",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Add a recurring subscription",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deal_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "cadence_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CADENCE_TYPE"
      },
      {
        "name": "cycles_count",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "cycle_amount",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "infinite",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "payments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "update_deal_value",
        "schema": "boolean",
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
    "url": "/subscriptions/installment",
    "method": "addInstallmentSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Add an installment subscription",
    "parameters": [
      {
        "name": "deal_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENCY"
      },
      {
        "name": "payments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "update_deal_value",
        "schema": "boolean",
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
    "url": "/subscriptions/recurring/{id}",
    "method": "updateRecurring",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update a recurring subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription",
        "example": 0
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cycle_amount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "payments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "update_deal_value",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVE_DATE"
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
    "url": "/subscriptions/installment/{id}",
    "method": "updateInstallmentSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Update an installment subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription",
        "example": 0
      },
      {
        "name": "payments",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "update_deal_value",
        "schema": "boolean",
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
    "url": "/subscriptions/recurring/{id}/cancel",
    "method": "cancelRecurringSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Cancel a recurring subscription",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the subscription",
        "example": 0
      },
      {
        "name": "end_date",
        "schema": "string",
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
    "url": "/tasks",
    "method": "listAllTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get all tasks",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "For pagination, the marker (an opaque string value) representing the first item on the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "For pagination, the limit of entries to be returned. If not provided, up to 500 items will be returned.",
        "example": 500
      },
      {
        "name": "assigneeId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only tasks that are assigned to this user are returned"
      },
      {
        "name": "projectId",
        "schema": "integer",
        "required": false,
        "description": "If supplied, only tasks that are assigned to this project are returned"
      },
      {
        "name": "parentTaskId",
        "schema": "integer",
        "required": false,
        "description": "If `null` is supplied then only parent tasks are returned. If integer is supplied then only subtasks of a specific task are returned. By default all tasks are returned."
      },
      {
        "name": "done",
        "schema": "number",
        "required": false,
        "description": "Whether the task is done or not. `0` = Not done, `1` = Done. If not omitted then returns both done and not done tasks."
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
    "url": "/tasks",
    "method": "createTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Add a task",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/tasks/{id}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete a task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the task",
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
    "url": "/tasks/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get details of a task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the task",
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
    "url": "/tasks/{id}",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update a task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the task",
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
    "url": "/users",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get all users",
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
    "method": "addNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Add a new user",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "access",
        "schema": "array",
        "required": false,
        "description": "",
        "default": [
          {
            "app": "sales"
          }
        ]
      },
      {
        "name": "active_flag",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
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
    "url": "/users/find",
    "method": "findByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Find users by name",
    "parameters": [
      {
        "name": "term",
        "schema": "string",
        "required": true,
        "description": "The search term to look for",
        "example": "TERM"
      },
      {
        "name": "searchByEmail",
        "schema": "number",
        "description": "When enabled, the term will only be matched against email addresses of users. Default: `false`.",
        "default": 0
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
    "url": "/users/me",
    "method": "getCurrentUserData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get current user data",
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
    "url": "/users/{id}",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get one user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update user details",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
        "example": 0
      },
      {
        "name": "active_flag",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/followers",
    "method": "listFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List followers of a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
        "example": 0
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
    "url": "/users/{id}/permissions",
    "method": "listPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List user permissions",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
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
    "url": "/users/{id}/roleAssignments",
    "method": "listRoleAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List role assignments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
        "example": 0
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Pagination start",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Items shown per page"
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
    "url": "/users/{id}/roleSettings",
    "method": "listRoleSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "List user role settings",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the user",
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
    "url": "/userConnections",
    "method": "getAllConnections",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserConnections",
    "typeScriptTag": "userConnections",
    "description": "Get all user connections",
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
    "url": "/userSettings",
    "method": "listAuthorizedSettings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserSettings",
    "typeScriptTag": "userSettings",
    "description": "List settings of an authorized user",
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
    "url": "/webhooks",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get all Webhooks",
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
    "url": "/webhooks",
    "method": "createNewWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a new Webhook",
    "parameters": [
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "1.0"
      },
      {
        "name": "subscription_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBSCRIPTION_URL"
      },
      {
        "name": "event_action",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_ACTION"
      },
      {
        "name": "event_object",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_OBJECT"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "http_auth_user",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "http_auth_password",
        "schema": "string",
        "required": false,
        "description": ""
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
      }
    ]
  },
  {
    "url": "/webhooks/{id}",
    "method": "deleteExistingWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete existing Webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The ID of the Webhook to delete",
        "example": 0
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Pipedrive API v1"
      apiBaseUrl="https://api.pipedrive.com/v1"
      apiVersion="1.0.0"
      endpoints={179}
      sdkMethods={279}
      schemas={415}
      parameters={748}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipedrive/openapi.yaml"
      developerDocumentation="developers.pipedrive.com/docs/api/v1"
    />
  );
}
  