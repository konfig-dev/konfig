import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function AblyPlatformTypeScriptSdk() {
  return (
    <Sdk
      sdkName="ably-platform-typescript-sdk"
      metaDescription="Ably provides a suite of APIs to build, extend, and deliver powerful digital experiences in realtime. Organizations like Toyota, Bloomberg, HubSpot, and Hopin depend on Ably’s platform to offload the growing complexity of business-critical realtime data synchronization at global scale."
      company="Ably"
      serviceName="Platform"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ably/platform/logo.png"
      clientNameCamelCase="ably"
      homepage="ably.com"
      lastUpdated={new Date("2024-01-29T23:27:20.789Z")}
      contactUrl="https://www.ably.io/contact"
      contactEmail="support@ably.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ably/platform/imagePreview.jpeg"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/channels",
    "method": "getMetadataOfAllChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Enumerate all active channels of the application",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "prefix",
        "schema": "string",
        "description": "Optionally limits the query to only those channels whose name starts with the given prefix"
      },
      {
        "name": "by",
        "schema": "string",
        "description": "optionally specifies whether to return just channel names (by=id) or ChannelDetails (by=value)"
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/channels/{channel_id}",
    "method": "getMetadataOfChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Get metadata of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/messages",
    "method": "getMessagesByChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "Get message history for a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels)."
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/messages",
    "method": "publishMessagesToChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Publishing",
    "typeScriptTag": "publishing",
    "description": "Publish a message to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels)."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "string",
        "description": ""
      },
      {
        "name": "encoding",
        "schema": "string",
        "description": ""
      },
      {
        "name": "extras",
        "schema": "object",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/presence",
    "method": "getPresenceOfChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Get presence of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels)."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "connectionId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/presence/history",
    "method": "getPresenceHistoryOfChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "History",
    "typeScriptTag": "history",
    "description": "Get presence history of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The [Channel's ID](https://www.ably.io/documentation/rest/channels)."
      },
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/keys/{keyName}/requestToken",
    "method": "requestAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Request an access token",
    "parameters": [
      {
        "name": "keyName",
        "schema": "string",
        "required": true,
        "description": "The [key name](https://www.ably.io/documentation/rest-api/token-request-spec#api-key-format) comprises of the app ID and key ID of an API key."
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/channelSubscriptions",
    "method": "deletePushDeviceDetails",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Delete a registered device's update token",
    "parameters": [
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter to restrict to subscriptions associated with that channel."
      },
      {
        "name": "deviceId",
        "schema": "string",
        "description": "Must be set when clientId is empty, cannot be used with clientId."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "Must be set when deviceId is empty, cannot be used with deviceId."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/channelSubscriptions",
    "method": "getPushSubscriptionsOnChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "List channel subscriptions",
    "parameters": [
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter to restrict to subscriptions associated with that channel."
      },
      {
        "name": "deviceId",
        "schema": "string",
        "description": "Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return."
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/channelSubscriptions",
    "method": "subscribePushDeviceToChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Subscribe a device to a channel",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/channels",
    "method": "getChannelsWithPushSubscribers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "List all channels with at least one subscribed device",
    "parameters": [],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations",
    "method": "unregisterAllPushDevices",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Unregister matching devices for push notifications",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "description": "Optional filter to restrict to devices associated with that deviceId. Cannot be used with clientId."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "Optional filter to restrict to devices associated with that clientId. Cannot be used with deviceId."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations",
    "method": "getRegisteredPushDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "List devices registered for receiving push notifications",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "description": "Optional filter to restrict to devices associated with that deviceId."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "Optional filter to restrict to devices associated with that clientId."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of records to return."
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations",
    "method": "registerPushDevice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Register a device for receiving push notifications",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deviceSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formFactor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "platform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "push.recipient",
        "schema": "object",
        "description": ""
      },
      {
        "name": "push.state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations/{device_id}",
    "method": "unregisterPushDevice",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Unregister a single device for push notifications",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations/{device_id}",
    "method": "getPushDeviceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Get a device registration",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations/{device_id}",
    "method": "patchPushDeviceDetails",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Update a device registration",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's ID."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deviceSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formFactor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "platform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "push.recipient",
        "schema": "object",
        "description": ""
      },
      {
        "name": "push.state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations/{device_id}",
    "method": "putPushDeviceDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Update a device registration",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's ID."
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "deviceSecret",
        "schema": "string",
        "description": ""
      },
      {
        "name": "formFactor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "platform",
        "schema": "string",
        "description": ""
      },
      {
        "name": "push.recipient",
        "schema": "object",
        "description": ""
      },
      {
        "name": "push.state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/deviceRegistrations/{device_id}/resetUpdateToken",
    "method": "updatePushDeviceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Reset a registered device's update token",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": true,
        "description": "Device's ID."
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/push/publish",
    "method": "publishPushNotificationToDevices",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Push",
    "typeScriptTag": "push",
    "description": "Publish a push notification to device(s)",
    "parameters": [
      {
        "name": "push",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "recipient",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/stats",
    "method": "getStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Retrieve usage statistics for an application",
    "parameters": [
      {
        "name": "start",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "direction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "unit",
        "schema": "string",
        "description": "Specifies the unit of aggregation in the returned results."
      }
    ],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  },
  {
    "url": "/time",
    "method": "getTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stats",
    "typeScriptTag": "stats",
    "description": "Get the service time",
    "parameters": [],
    "responses": [
      {
        "statusCode": "2XX",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "Returned error from failed REST."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Platform API"
      apiBaseUrl="https://rest.ably.io"
      apiVersion="1.1.0"
      endpoints={14}
      sdkMethods={36}
      schemas={14}
      parameters={76}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ably/platform/openapi.yaml"
    />
  );
}
  