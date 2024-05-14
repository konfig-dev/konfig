import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CustomerIoJourneysAppTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="customer-io-journeys-app-typescript-sdk"
      metaDescription={`Customer.io is a versatile marketing automation tool for sending relevant messages based on behavior across web and mobile products.

Impersonal messages lead to bad experiences. That's why we use real-time data to help you deliver the right message, exactly when it's needed — like sending an event reminder over SMS or the perfect onboarding email.

Our robust platform enables you to:
- Automate your product messaging, with the ability to build, test, and send messages from one platform.
- Create and manage newsletters, transactional messages, and behavioral messages
- Do more with your behavior and data -- connect our powerful segmentation and automation engine with other apps to drive user behavior and save time.

Learn more: https://customer.io`}
      company="Customer.io"
      serviceName="Journeys App"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-app/logo.png"
      companyKebabCase="customer-io"
      clientNameCamelCase="customerIoJourneysApp"
      homepage="customer.io"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-app/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-app/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["messaging","email","marketing"]}
      methods={[
  {
    "url": "/v1/campaigns/{broadcast_id}/triggers",
    "method": "triggerBroadcast",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Send Messages",
    "typeScriptTag": "sendMessages",
    "description": "Trigger a broadcast",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "404",
        "description": "The `broadcast_id` does not exist."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/campaigns/{broadcast_id}/triggers/{trigger_id}/errors",
    "method": "getBroadcastErrors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get broadcast error descriptions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "404",
        "description": "The campaign ID or trigger ID from your request do not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/send/email",
    "method": "transactionalEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Send Messages",
    "typeScriptTag": "sendMessages",
    "description": "Send a transactional email",
    "parameters": [],
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
    "url": "/v1/send/push",
    "method": "transactionalPush",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Send Messages",
    "typeScriptTag": "sendMessages",
    "description": "Send a transactional push",
    "parameters": [],
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
    "url": "/v1/activities",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "List activities",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "The token for the page of results you want to return. Responses contain a `next` property. Use this property as the `start` value to return the next page of results."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of activity you want to search for.",
        "example": "sent_email"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "The name of the event or attribute you want to return.",
        "example": "something_happened"
      },
      {
        "name": "deleted",
        "schema": "boolean",
        "required": false,
        "description": "If true, return results for deleted people.",
        "default": false
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": "The `identifier` of the person you want to look up. By default, this is a person's `id`. You can use the `id_type` parameter to look up a person by `email` or `cio_id`.\n\nIf you use a person's `cio_id`, you must prefix the value value with `cio_` when using it to find or reference a person (i.e. `cio_03000010` for a `cio_id` value of 03000010).\n"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": "The type of `customer_id` you want to use to reference a person. If you don't provide this parameter, we assume that the `customer_id` in your request is a person's `id`."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results you want to retrieve per page.",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "List broadcasts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get a broadcast",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{broadcast_id}/triggers/{trigger_id}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get the status of a broadcast",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "You can get triggers to know when you triggered a broadcast and whether or not it's been processed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/metrics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get broadcast metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/metrics/links",
    "method": "getLinkMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get broadcast link metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/actions",
    "method": "getActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "List broadcast actions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/messages",
    "method": "getMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get messages for a broadcast",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/actions/{action_id}",
    "method": "getActionDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get a broadcast action",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The broadcast or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/actions/{action_id}",
    "method": "updateActionContents",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Update a broadcast action",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The broadcast or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}",
    "method": "getTranslationMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get a translation of a broadcast message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The broadcast or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/language/{language}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Update a translation of a broadcast message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The broadcast or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcast/{broadcast_id}/actions/{action_id}/metrics",
    "method": "getActionMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get broadcast action metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast and/or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/actions/{action_id}/metrics/links",
    "method": "getActionLinkMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get broadcast action link metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast and/or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/broadcasts/{broadcast_id}/triggers",
    "method": "getTriggers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Broadcasts",
    "typeScriptTag": "broadcasts",
    "description": "Get broadcast triggers",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The broadcast does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "List campaigns",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get a campaign",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/metrics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get campaign metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/metrics/links",
    "method": "getLinkMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get campaign link metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions",
    "method": "listActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "List campaign actions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/messages",
    "method": "getMessageMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get campaign message metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions/{action_id}",
    "method": "getActionInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get a campaign action",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The campaign or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions/{action_id}",
    "method": "updateActionContents",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Update a campaign action",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The campaign or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}",
    "method": "getMessageTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get a translation of a campaign message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The campaign or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions/{action_id}/language/{language}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Update a translation of a campaign message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist for this action."
      },
      {
        "statusCode": "404",
        "description": "The campaign or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions/{action_id}/metrics",
    "method": "getActionMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get campaign action metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign and/or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/actions/{action_id}/metrics/links",
    "method": "getLinkMetricsForAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get link metrics for an action",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The campaign and/or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/campaigns/{campaign_id}/journey_metrics",
    "method": "getJourneyMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaigns",
    "typeScriptTag": "campaigns",
    "description": "Get campaign journey metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "You may have omitted query parameters or the `start` time occurred after the `end` time."
      },
      {
        "statusCode": "404",
        "description": "The campaign and/or action does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "List your collections",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Create a collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Your request was malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections/{collection_id}",
    "method": "removeCollection",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Delete a collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The collection is deleted."
      },
      {
        "statusCode": "404",
        "description": "The collection `id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections/{collection_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Lookup a collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The collection `id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections/{collection_id}",
    "method": "updateCollection",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Update a collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Your request was malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections/{collection_id}/content",
    "method": "getContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Lookup collection contents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The collection `id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/collections/{collection_id}/content",
    "method": "updateContents",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Update the contents of a collection",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The collection `id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "findByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Get customers by email",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "The email address you want to search for.",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "searchFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Search for customers",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "The token for the page of results you want to return. Responses contain a `next` property. Use this property as the `start` value to return the next page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results you want to retrieve per page.",
        "default": 50
      },
      {
        "name": "filter",
        "schema": "undefined",
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
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/attributes",
    "method": "getAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Lookup a customer's attributes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `customer_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/relationships",
    "method": "lookupRelationships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Lookup a customer's relationships",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `customer_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/attributes",
    "method": "listAttributesDevices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "List customers, attributes, and devices",
    "parameters": [
      {
        "name": "ids",
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
        "statusCode": "400",
        "description": "The request is malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/segments",
    "method": "lookupSegments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Lookup a customer's segments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `customer_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/messages",
    "method": "getMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Lookup messages sent to a customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `customer_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/activities",
    "method": "getActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Lookup a customer's activities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request parameters are malformed."
      },
      {
        "statusCode": "404",
        "description": "The `customer_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/subscription_preferences",
    "method": "getSubscriptionPreferences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Lookup a customer's subscription preferences",
    "parameters": [],
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
        "statusCode": "404",
        "description": "The `customer_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/esp/search_suppression/{email_address}",
    "method": "lookupAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ESP Suppression",
    "typeScriptTag": "espSuppression",
    "description": "Look up an ESP-suppressed address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/esp/suppression/{suppression_type}",
    "method": "getEmailsByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ESP Suppression",
    "typeScriptTag": "espSuppression",
    "description": "Get ESP-suppressed emails by type",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/esp/suppression/{suppression_type}/{email_address}",
    "method": "unSuppressAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ESP Suppression",
    "typeScriptTag": "espSuppression",
    "description": "Un-suppress an ESP-suppressed address",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful request produces no content."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/esp/suppression/{suppression_type}/{email_address}",
    "method": "emailAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ESP Suppression",
    "typeScriptTag": "espSuppression",
    "description": "Suppress an email at the ESP",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/exports",
    "method": "listMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exports",
    "typeScriptTag": "exports",
    "description": "List exports",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/exports/{export_id}",
    "method": "getExportInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exports",
    "typeScriptTag": "exports",
    "description": "Get an export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The export ID does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/exports/{export_id}/download",
    "method": "downloadExportSignedLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Exports",
    "typeScriptTag": "exports",
    "description": "Download an export",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The export ID does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/exports/customers",
    "method": "createCustomerExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exports",
    "typeScriptTag": "exports",
    "description": "Export customer data",
    "parameters": [
      {
        "name": "filters",
        "schema": "undefined",
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
        "statusCode": "400",
        "description": "The request is malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/exports/deliveries",
    "method": "exportDeliveriesInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Exports",
    "typeScriptTag": "exports",
    "description": "Export information about deliveries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request is malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/imports",
    "method": "bulkUploadCsv",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Import items in bulk",
    "parameters": [
      {
        "name": "import",
        "schema": "undefined",
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
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/imports/{import_id}",
    "method": "getBulkImport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Imports",
    "typeScriptTag": "imports",
    "description": "Retrieve a bulk import",
    "parameters": [
      {
        "name": "importId",
        "schema": "integer",
        "required": true,
        "description": "The `id` of the import you want to lookup. This value is [returned from a successful import](https://customer.io/docs/api/app/).",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/info/ip_addresses",
    "method": "listIpAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Info",
    "typeScriptTag": "info",
    "description": "List IP addresses",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/messages",
    "method": "listDeliveries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "List messages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request was malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/messages/{message_id}",
    "method": "getMessageMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get a message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes an individual message delivery. The object contains keys for all possible parents of the message (`newsletter_id`, `broadcast_id`, etc) but only the parents of the delivery are populated. Other parent IDs are null."
      },
      {
        "statusCode": "404",
        "description": "The message does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/messages/{message_id}/archived_message",
    "method": "getArchivedMessage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Messages",
    "typeScriptTag": "messages",
    "description": "Get an archived message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Describes an archived message delivery."
      },
      {
        "statusCode": "404",
        "description": "The message does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters",
    "method": "listNewsletters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "List newsletters",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}",
    "method": "getMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get a newsletter",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/metrics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get newsletter metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/metrics/links",
    "method": "getLinkMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get newsletter link metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/contents",
    "method": "listVariants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "List newsletter variants",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/messages",
    "method": "getMessageMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get newsletter message metadata",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/contents/{content_id}",
    "method": "getVariantInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get a newsletter variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/contents/{content_id}",
    "method": "updateVariantContents",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Update a newsletter variant",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "newsletter_id",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "deduplicate_id",
        "schema": "string",
        "description": "",
        "example": "15:1492548073"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "newsletter variant A"
      },
      {
        "name": "layout",
        "schema": "string",
        "description": "",
        "example": "<html><body>{{ content }}</body></html>"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "<strong>Hello from the API</strong>"
      },
      {
        "name": "body_amp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "email"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "sentFrom@example.com"
      },
      {
        "name": "from_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "reply_to",
        "schema": "string",
        "description": "",
        "example": "replyto@example.com"
      },
      {
        "name": "reply_to_id",
        "schema": "integer",
        "description": "",
        "example": 38
      },
      {
        "name": "preprocessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "",
        "example": "{{customer.email}}"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Did you get that thing I sent you?"
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fake_bcc",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "preheader_text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
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
        "description": "The request is malformed."
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/language/{language}",
    "method": "getTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get a translation of a newsletter variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist."
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/language/{language}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Update a translation of a newsletter variant",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "newsletter_id",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "deduplicate_id",
        "schema": "string",
        "description": "",
        "example": "15:1492548073"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "newsletter variant A"
      },
      {
        "name": "layout",
        "schema": "string",
        "description": "",
        "example": "<html><body>{{ content }}</body></html>"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "<strong>Hello from the API</strong>"
      },
      {
        "name": "body_amp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "email"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "sentFrom@example.com"
      },
      {
        "name": "from_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "reply_to",
        "schema": "string",
        "description": "",
        "example": "replyto@example.com"
      },
      {
        "name": "reply_to_id",
        "schema": "integer",
        "description": "",
        "example": 38
      },
      {
        "name": "preprocessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "",
        "example": "{{customer.email}}"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Did you get that thing I sent you?"
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fake_bcc",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "preheader_text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
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
        "description": "The `language` does not exist."
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/test_groups",
    "method": "listTestGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "List A/B test groups in a newsletter",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
    "method": "getTranslationInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get a translation in a newsletter test group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` does not exist."
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/test_group/{test_group_id}/language/{language}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Update a translation in a newsletter test group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "newsletter_id",
        "schema": "integer",
        "description": "",
        "example": 10
      },
      {
        "name": "deduplicate_id",
        "schema": "string",
        "description": "",
        "example": "15:1492548073"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "newsletter variant A"
      },
      {
        "name": "layout",
        "schema": "string",
        "description": "",
        "example": "<html><body>{{ content }}</body></html>"
      },
      {
        "name": "body",
        "schema": "string",
        "description": "",
        "example": "<strong>Hello from the API</strong>"
      },
      {
        "name": "body_amp",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "email"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "sentFrom@example.com"
      },
      {
        "name": "from_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "reply_to",
        "schema": "string",
        "description": "",
        "example": "replyto@example.com"
      },
      {
        "name": "reply_to_id",
        "schema": "integer",
        "description": "",
        "example": 38
      },
      {
        "name": "preprocessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "",
        "example": "{{customer.email}}"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Did you get that thing I sent you?"
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fake_bcc",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "preheader_text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
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
        "description": "The `language` does not exist."
      },
      {
        "statusCode": "404",
        "description": "The newsletter or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/contents/{content_id}/metrics",
    "method": "getVariantMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get metrics for a variant",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter and/or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/newsletters/{newsletter_id}/contents/{content_id}/metrics/links",
    "method": "getNewsletterVariantLinkMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Newsletters",
    "typeScriptTag": "newsletters",
    "description": "Get newsletter variant link metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The newsletter and/or variant does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/object_types",
    "method": "getAllObjectTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "List object types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/objects",
    "method": "findObjectsFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Find objects",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "The token for the page of results you want to return. Responses contain a `next` property. Use this property as the `start` value to return the next page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results you want to retrieve per page."
      },
      {
        "name": "object_type_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1"
      },
      {
        "name": "filter",
        "schema": "undefined",
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
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/objects/{object_type_id}/{object_id}/relationships",
    "method": "getObjectRelationships",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Get Object Relationships",
    "parameters": [
      {
        "name": "objectTypeId",
        "schema": "integer",
        "required": true,
        "description": "The object type an object belongs to—like \"Companies\" or \"Accounts\". Object type IDs begin at `1` and increment for each new type.",
        "example": 1
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "The `object_id` or `cio_object_id` of an object, depending on the `id_type` specified in query params. `id_type` defaults to `object_id`.",
        "example": "abc123"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "The token for the page of results you want to return. Responses contain a `next` property. Use this property as the `start` value to return the next page of results."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of results you want to retrieve per page."
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "object_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/objects/{object_type_id}/{object_id}/attributes",
    "method": "getAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Objects",
    "typeScriptTag": "objects",
    "description": "Get Object Attributes",
    "parameters": [
      {
        "name": "objectTypeId",
        "schema": "integer",
        "required": true,
        "description": "The object type an object belongs to—like \"Companies\" or \"Accounts\". Object type IDs begin at `1` and increment for each new type.",
        "example": 1
      },
      {
        "name": "objectId",
        "schema": "string",
        "required": true,
        "description": "The `object_id` or `cio_object_id` of an object, depending on the `id_type` specified in query params. `id_type` defaults to `object_id`.",
        "example": "abc123"
      },
      {
        "name": "idType",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "object_id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized request. Make sure that you provided the right credentials."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/reporting_webhooks",
    "method": "listReportingWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting Webhooks",
    "typeScriptTag": "reportingWebhooks",
    "description": "List reporting webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/reporting_webhooks",
    "method": "createWebhookConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reporting Webhooks",
    "typeScriptTag": "reportingWebhooks",
    "description": "Create a reporting webhook",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my cool webhook"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 4
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://example.com/webhook"
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "full_resolution",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "with_content",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "email_failed",
          "webhook_failed"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request was malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/reporting_webhooks/{webhook_id}",
    "method": "deleteWebhookConfiguration",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Reporting Webhooks",
    "typeScriptTag": "reportingWebhooks",
    "description": "Delete a reporting webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request has no response."
      },
      {
        "statusCode": "404",
        "description": "The webhook ID does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/reporting_webhooks/{webhook_id}",
    "method": "getWebhookInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reporting Webhooks",
    "typeScriptTag": "reportingWebhooks",
    "description": "Get a reporting webhook",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The webhook ID does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/reporting_webhooks/{webhook_id}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Reporting Webhooks",
    "typeScriptTag": "reportingWebhooks",
    "description": "Update a webhook configuration",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "my cool webhook"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 4
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "http://example.com/webhook"
      },
      {
        "name": "disabled",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "full_resolution",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": true,
        "default": false
      },
      {
        "name": "with_content",
        "schema": "boolean",
        "required": false,
        "description": "",
        "example": false
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "email_failed",
          "webhook_failed"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The request was malformed."
      },
      {
        "statusCode": "404",
        "description": "The webhook ID does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "List segments",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments",
    "method": "createManualSegment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Create a manual segment",
    "parameters": [
      {
        "name": "segment",
        "schema": "object",
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
        "statusCode": "400",
        "description": "The request was malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments/{segment_id}",
    "method": "deleteManualSegment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Delete a segment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The segment is deleted."
      },
      {
        "statusCode": "404",
        "description": "The `segment_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments/{segment_id}",
    "method": "getSegmentInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get a segment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `segment_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments/{segment_id}/used_by",
    "method": "getDependencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get a segment's dependencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `segment_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments/{segment_id}/customer_count",
    "method": "getCustomerCount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "Get a segment customer count",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `segment_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/segments/{segment_id}/membership",
    "method": "listMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Segments",
    "typeScriptTag": "segments",
    "description": "List customers in a segment",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The `segment_id` does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/sender_identities",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Identities",
    "typeScriptTag": "senderIdentities",
    "description": "List sender identities",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/sender_identities/{sender_id}",
    "method": "getSenderInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Identities",
    "typeScriptTag": "senderIdentities",
    "description": "Get a sender",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The sender does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/sender_identities/{sender_id}/used_by",
    "method": "getUsageData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sender Identities",
    "typeScriptTag": "senderIdentities",
    "description": "Get sender usage data",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The sender does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/snippets",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "List snippets",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/snippets",
    "method": "createOrUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Create or update snippets",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VALUE"
      },
      {
        "name": "updated_at",
        "schema": "integer",
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
        "description": "The request is malformed."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/snippets/{snippet_name}",
    "method": "removeSnippet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Snippets",
    "typeScriptTag": "snippets",
    "description": "Delete a snippet",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "A successful delete operation returns no content."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The snippet does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/subscription_topics",
    "method": "listTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Center",
    "typeScriptTag": "subscriptionCenter",
    "description": "List subscription topics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/transactional",
    "method": "listMessages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "List transactional messages",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}",
    "method": "getMessageInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Get a transactional message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The transactional message does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/contents",
    "method": "listContentVariants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "List all variants of a transactional message",
    "parameters": [],
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
        "statusCode": "404",
        "description": "The `transactional_id` or `content_id` in your request do not exist."
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/content/{content_id}",
    "method": "updateMessageContent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Update a transactional message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": "",
        "example": 96
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Receipt"
      },
      {
        "name": "created",
        "schema": "integer",
        "description": "",
        "example": 1552341937
      },
      {
        "name": "updated",
        "schema": "integer",
        "description": "",
        "example": 1552341937
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "sentFrom@example.com"
      },
      {
        "name": "from_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "reply_to",
        "schema": "string",
        "description": "",
        "example": "replyto@example.com"
      },
      {
        "name": "reply_to_id",
        "schema": "integer",
        "description": "",
        "example": 38
      },
      {
        "name": "preprocessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "",
        "example": "{{customer.email}}"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Did you get that thing I sent you?"
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fake_bcc",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "preheader_text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "body_amp",
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
        "statusCode": "404",
        "description": "The `transactional_id` or `content_id` in your request do not exist"
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/language/{language}",
    "method": "getMessageTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Get a translation of a transactional message",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "The `language` in your request does not exist."
      },
      {
        "statusCode": "404",
        "description": "The transactional message does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/language/{language}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Update a translation of a transactional message",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "description": "",
        "example": 96
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Receipt"
      },
      {
        "name": "created",
        "schema": "integer",
        "description": "",
        "example": 1552341937
      },
      {
        "name": "updated",
        "schema": "integer",
        "description": "",
        "example": 1552341937
      },
      {
        "name": "body",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": "",
        "example": "fr"
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "sentFrom@example.com"
      },
      {
        "name": "from_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "reply_to",
        "schema": "string",
        "description": "",
        "example": "replyto@example.com"
      },
      {
        "name": "reply_to_id",
        "schema": "integer",
        "description": "",
        "example": 38
      },
      {
        "name": "preprocessor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "string",
        "description": "",
        "example": "{{customer.email}}"
      },
      {
        "name": "subject",
        "schema": "string",
        "description": "",
        "example": "Did you get that thing I sent you?"
      },
      {
        "name": "bcc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fake_bcc",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "preheader_text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "headers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "body_amp",
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
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/metrics",
    "method": "getMessageMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Get transactional message metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The transactional message you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/metrics/links",
    "method": "getMessageLinkMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Get transactional message link metrics",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The transactional message you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/transactional/{transactional_id}/messages",
    "method": "getMessageDeliveries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactional",
    "typeScriptTag": "transactional",
    "description": "Get transactional message deliveries",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "The transactional message you requested does not exist."
      },
      {
        "statusCode": "429",
        "description": "Your request is over the 10-per-second limit."
      }
    ]
  },
  {
    "url": "/v1/workspaces",
    "method": "listWorkspaces",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workspaces",
    "typeScriptTag": "workspaces",
    "description": "List workspaces",
    "parameters": [],
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
      apiTitle="Journeys App API"
      apiBaseUrl="https://api.customer.io"
      apiVersion="1.0.0"
      endpoints={91}
      sdkMethods={268}
      schemas={439}
      parameters={143}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/journeys-app/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-app/openapi.yaml"
      developerDocumentation="customer.io/docs/api/app/"
    />
  );
}
  