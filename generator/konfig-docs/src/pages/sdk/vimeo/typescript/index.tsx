import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function VimeoTypeScriptSdk() {
  return (
    <Sdk
      sdkName="vimeo-typescript-sdk"
      metaDescription="Join the world's leading professional video platform and grow your business with easy-to-use, high-quality video creation, hosting, and marketing tools."
      company="Vimeo"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/logo.avif"
      clientNameCamelCase="vimeo"
      homepage="developer.vimeo.com"
      lastUpdated={new Date("2024-02-25T09:49:43.849Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/favicon.jpg"
      contactUrl="https://developer.vimeo.com/help"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/",
    "method": "endpoints",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "API Information\\Essentials",
    "typeScriptTag": "apiInformationEssentials",
    "description": "Get the API specification",
    "parameters": [
      {
        "name": "openapi",
        "schema": "boolean",
        "required": false,
        "description": "Return an OpenAPI specification."
      },
      {
        "name": "version",
        "schema": "string",
        "required": false,
        "description": "Return an OpenAPI specification for the specified API version. This overwrites the **version** field provided in the **Accept** header."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/albums/{album_id}/available_videos",
    "method": "listInShowcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Get all the user's videos that can be added to or removed from a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `default` - Sort the results by the default method.\n * `duration` - Sort the results by duration.\n * `last_user_action_event_date` - Sort the results by most recent user interaction.\n * `likes` - Sort the results by number of likes.\n * `modified_time` - Sort the results by last modification.\n * `plays` - Sort the results by number of plays.\n"
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
    "url": "/categories",
    "method": "categories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Essentials",
    "typeScriptTag": "categoriesEssentials",
    "description": "Get all categories",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/categories/{category}",
    "method": "category",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Essentials",
    "typeScriptTag": "categoriesEssentials",
    "description": "Get a specific category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
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
    "url": "/categories/{category}/channels",
    "method": "listInCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Channels",
    "typeScriptTag": "categoriesChannels",
    "description": "Get all the channels in a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `followers` - Sort the results by number of followers.\n * `videos` - Sort the results by number of videos.\n"
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
    "url": "/categories/{category}/groups",
    "method": "getAllGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Groups",
    "typeScriptTag": "categoriesGroups",
    "description": "Get all the groups in a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `members` - Sort the results by number of members.\n * `videos` - Sort the results by number of videos.\n"
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
    "url": "/categories/{category}/videos",
    "method": "listVideosInCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Videos",
    "typeScriptTag": "categoriesVideos",
    "description": "Get all the videos in a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `conditional_featured` - Return featured videos.\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `duration` - Sort the results by duration.\n * `featured` - Sort the results by featured status.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n * `relevant` - Sort the results by relevance.\n"
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
    "url": "/categories/{category}/videos/{video_id}",
    "method": "getVideoInCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Videos",
    "typeScriptTag": "categoriesVideos",
    "description": "Get a specific video in a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/channels",
    "method": "channels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Get all channels",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `featured` - Return featured channels.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `default` - Sort the results by creation date.\n * `followers` - Sort the results by number of followers.\n * `relevant` - Sort the results by relevance. This option is available for search queries only.\n * `videos` - Sort the results by number of videos.\n"
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
    "url": "/channels",
    "method": "channel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Create a channel",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "link",
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
        "name": "privacy",
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
    "url": "/channels/{channel_id}",
    "method": "channel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Delete a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}",
    "method": "channel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Get a specific channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}",
    "method": "channel",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Edit a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacy",
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
    "url": "/channels/{channel_id}/categories",
    "method": "getBelongingCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Categories",
    "typeScriptTag": "channelsCategories",
    "description": "Get all the categories to which a channel belongs",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
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
    "url": "/channels/{channel_id}/categories",
    "method": "addChannelToMultipleCategories",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Categories",
    "typeScriptTag": "channelsCategories",
    "description": "Add a channel to a list of categories",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "channels",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
  },
  {
    "url": "/channels/{channel_id}/categories/{category}",
    "method": "removeChannelFromCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Categories",
    "typeScriptTag": "channelsCategories",
    "description": "Remove a channel from a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
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
  },
  {
    "url": "/channels/{channel_id}/categories/{category}",
    "method": "channel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Categories",
    "typeScriptTag": "channelsCategories",
    "description": "Add a channel to a specific category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
  },
  {
    "url": "/channels/{channel_id}/moderators",
    "method": "removeMultipleFromChannel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Remove a list of moderators from a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "user_uri",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/moderators",
    "method": "listByChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Get all the moderators of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date added.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/moderators",
    "method": "replaceModerators",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Replace the moderators of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "user_uri",
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
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/moderators",
    "method": "bulkAddModerators",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Add a list of moderators to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/moderators/{user_id}",
    "method": "removeModerator",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Remove a specific moderator from a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/moderators/{user_id}",
    "method": "getSpecificModerator",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Get a specific moderator of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/moderators/{user_id}",
    "method": "addModeratorToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Moderators",
    "typeScriptTag": "channelsModerators",
    "description": "Add a specific moderator to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/privacy/users",
    "method": "getAccessibleUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Private channel members",
    "typeScriptTag": "channelsPrivateChannelMembers",
    "description": "Get all the users who can access a private channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/channels/{channel_id}/privacy/users",
    "method": "permitUserAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Private channel members",
    "typeScriptTag": "channelsPrivateChannelMembers",
    "description": "Permit a list of users to access a private channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
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
        "statusCode": "400",
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
  },
  {
    "url": "/channels/{channel_id}/privacy/users/{user_id}",
    "method": "restrictUserAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Private channel members",
    "typeScriptTag": "channelsPrivateChannelMembers",
    "description": "Restrict a user from accessing a private channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/privacy/users/{user_id}",
    "method": "permitUserAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Private channel members",
    "typeScriptTag": "channelsPrivateChannelMembers",
    "description": "Permit a specific user to access a private channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/tags",
    "method": "getAllChannelTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Tags",
    "typeScriptTag": "channelsTags",
    "description": "Get all the tags that have been added to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
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
    "url": "/channels/{channel_id}/tags",
    "method": "addMultipleTagsToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Tags",
    "typeScriptTag": "channelsTags",
    "description": "Add a list of tags to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "tag",
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
    "url": "/channels/{channel_id}/tags/{word}",
    "method": "removeTagFromChannel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Tags",
    "typeScriptTag": "channelsTags",
    "description": "Remove a tag from a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The word to use as the tag."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
    "url": "/channels/{channel_id}/tags/{word}",
    "method": "checkIfTagAddedToChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Tags",
    "typeScriptTag": "channelsTags",
    "description": "Check if a tag has been added to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The word to use as the tag."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/tags/{word}",
    "method": "addTagToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Tags",
    "typeScriptTag": "channelsTags",
    "description": "Add a specific tag to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The word to use as the tag."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
    "url": "/channels/{channel_id}/users",
    "method": "listChannelFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Get all the followers of a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `moderators` - Return moderators.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by follow date.\n"
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
    "url": "/channels/{channel_id}/videos",
    "method": "removeMultipleFromChannel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Remove a list of videos from a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "video_uri",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/videos",
    "method": "listInChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Get all the videos in a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by date added.\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `default` - Use the default sorting method.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `manual` - Sort the results as the user has arranged them.\n * `modified_time` - Sort the results by last modification.\n * `plays` - Sort the results by number of plays.\n"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos",
    "method": "addMultipleToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Add a list of videos to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "video_uri",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/videos/{video_id}",
    "method": "removeSpecificVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Remove a specific video from a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/videos/{video_id}",
    "method": "getSpecificVideoInChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Get a specific video in a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/channels/{channel_id}/videos/{video_id}",
    "method": "addVideoToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Add a specific video to a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/channels/{channel_id}/videos/{video_id}/comments",
    "method": "getAllReplies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Get all the video comments on a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/comments",
    "method": "addNewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Add a video comment to a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/credits",
    "method": "getAllCreditedUsersInVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Get all the credited users in a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/credits",
    "method": "addUserCreditInVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Credit a user in a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "user_uri",
        "schema": "string",
        "required": true,
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/likes",
    "method": "getUsersWhoLikedVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Get all the users who have liked a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by join date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/pictures",
    "method": "getAllByVideoId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Get all the thumbnails of a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/pictures",
    "method": "addThumbnailToVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Add a video thumbnail",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "time",
        "schema": "number",
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
    "url": "/channels/{channel_id}/videos/{video_id}/privacy/users",
    "method": "listAccessibleUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Unlisted videos",
    "typeScriptTag": "videosUnlistedVideos",
    "description": "Get the users who can access an unlisted video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/channels/{channel_id}/videos/{video_id}/privacy/users",
    "method": "grantAccessToUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Unlisted videos",
    "typeScriptTag": "videosUnlistedVideos",
    "description": "Permit a list of users to access an unlisted video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/texttracks",
    "method": "getAllTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Get all the text tracks of a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/channels/{channel_id}/videos/{video_id}/texttracks",
    "method": "addTextTrackToVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Add a text track to a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_auto_generated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_edited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/channels/{channel_id}/videos/{video_id}/versions",
    "method": "getAllVideoVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Versions",
    "typeScriptTag": "videosVersions",
    "description": "Get all the versions of a video",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/contentratings",
    "method": "getAllContentRatings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Content ratings",
    "typeScriptTag": "videosContentRatings",
    "description": "Get all content ratings",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/creativecommons",
    "method": "getAllCcLicenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Creative Commons",
    "typeScriptTag": "videosCreativeCommons",
    "description": "Get all Creative Commons licenses",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/destination/{destination_id}",
    "method": "deleteDestination",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Delete a live event destination",
    "parameters": [
      {
        "name": "destinationId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event destination."
      }
    ],
    "responses": [
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
  },
  {
    "url": "/destination/{destination_id}",
    "method": "getDestination",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get a live event destination",
    "parameters": [
      {
        "name": "destinationId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event destination."
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
  },
  {
    "url": "/destination/{destination_id}",
    "method": "updateDestination",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Update a live event destination",
    "parameters": [
      {
        "name": "destinationId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event destination."
      },
      {
        "name": "display_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "provider_destination_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "service_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/groups",
    "method": "groups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Essentials",
    "typeScriptTag": "groupsEssentials",
    "description": "Get all groups",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `featured` - Return featured groups.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `followers` - Sort the results by number of followers.\n * `relevant` - Sort the results by relevance. This option is available for search queries only.\n * `videos` - Sort the results by number of videos.\n"
      }
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
    "method": "group",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups\\Essentials",
    "typeScriptTag": "groupsEssentials",
    "description": "Create a group",
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
      }
    ]
  },
  {
    "url": "/groups/{group_id}",
    "method": "group",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups\\Essentials",
    "typeScriptTag": "groupsEssentials",
    "description": "Delete a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}",
    "method": "group",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Essentials",
    "typeScriptTag": "groupsEssentials",
    "description": "Get a specific group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/users",
    "method": "getGroupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Users",
    "typeScriptTag": "groupsUsers",
    "description": "Get all the members of a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `moderators` - Return group moderators.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n"
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
    "url": "/groups/{group_id}/videos",
    "method": "getAllGroupVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Videos",
    "typeScriptTag": "groupsVideos",
    "description": "Get all the videos in a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
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
    "url": "/groups/{group_id}/videos/{video_id}",
    "method": "removeFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups\\Videos",
    "typeScriptTag": "groupsVideos",
    "description": "Remove a video from a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{group_id}/videos/{video_id}",
    "method": "getSingleVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Videos",
    "typeScriptTag": "groupsVideos",
    "description": "Get a specific video in a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/groups/{group_id}/videos/{video_id}",
    "method": "addToGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups\\Videos",
    "typeScriptTag": "groupsVideos",
    "description": "Add a video to a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/languages",
    "method": "languages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Languages",
    "typeScriptTag": "videosLanguages",
    "description": "Get all languages",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `audiotracks` - Return languages that can be used for audio tracks.\n * `texttracks` - Return languages that can be used for text tracks.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/live_events",
    "method": "deleteMultipleEvents",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Delete a list of live events",
    "parameters": [
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
    "url": "/live_events",
    "method": "getUserLiveEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Get all the live events that belong to the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `not_in_folder` - Show only events that aren't in a folder.\n * `not_in_showcase` - Show only events that aren't in a showcase.\n * `not_in_webinar` - Show only events that aren't in a webinar.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of event to return.\n\nOption descriptions:\n * `all` - Return all events.\n * `one_time` - Return one-time events only.\n * `recurring` - Return recurring events only.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/live_events",
    "method": "createEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Create a live event",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "allow_share_link",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "automatically_title_stream",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "chat_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dvr",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interaction_tools_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "low_latency",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "playlist_sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rtmp_preview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_playback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/live_events/{live_event_id}",
    "method": "deleteSpecificLiveEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Delete a specific live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      }
    ],
    "responses": [
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
    "url": "/live_events/{live_event_id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Get a specific live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the event when the privacy is set to `password`."
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/live_events/{live_event_id}",
    "method": "updateEventBelongingToAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Update a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cc_language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "automatically_title_stream",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "chat_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dvr",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "interaction_tools_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "playlist_sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scheduled_playback",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "stream_description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "stream_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_privacy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "stream_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/live_events/{live_event_id}/activate",
    "method": "createRtmpLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event activation",
    "typeScriptTag": "liveEventActivation",
    "description": "Activate a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "cloud_composing_streaming",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "streaming_start_requested",
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
        "statusCode": "400",
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
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/live_events/{live_event_id}/auto_cc",
    "method": "editPreference",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event automated closed captions",
    "typeScriptTag": "liveEventAutomatedClosedCaptions",
    "description": "Edit the automated closed captions preference of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_lang",
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
      }
    ]
  },
  {
    "url": "/live_events/{live_event_id}/end",
    "method": "eventTermination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event end",
    "typeScriptTag": "liveEventEnd",
    "description": "End a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "clipId",
        "schema": "number",
        "required": false,
        "description": "The ID of the streamable video."
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
    "url": "/live_events/{live_event_id}/low_latency",
    "method": "toggleOption",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event low latency",
    "typeScriptTag": "liveEventLowLatency",
    "description": "Toggle the low-latency option of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "low_latency",
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
    "url": "/live_events/{live_event_id}/pictures",
    "method": "getAllThumbnails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Get all the thumbnails of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/live_events/{live_event_id}/pictures",
    "method": "createThumbnailForEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Create a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "deleteThumbnailForEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Delete a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      }
    ],
    "responses": [
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
    "url": "/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "getSpecificThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Get a specific live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
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
    "url": "/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "editLiveEventThumbnail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Edit a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
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
    "url": "/live_events/{live_event_id}/privacy/domains",
    "method": "getWhitelistDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Embed privacy",
    "typeScriptTag": "liveEmbedPrivacy",
    "description": "Get all the domains on which a live event can be embedded",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/live_events/{live_event_id}/privacy/domains",
    "method": "embedEventOnDomains",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Live\\Embed privacy",
    "typeScriptTag": "liveEmbedPrivacy",
    "description": "Embed a live event on one or more domains",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "allowed_domains",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/live_events/{live_event_id}/videos",
    "method": "removeMultipleVideos",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Remove a list of videos from a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "videos",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/live_events/{live_event_id}/videos",
    "method": "listLiveEventVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Get all the videos in a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable events.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added videos.\n * `alphabetical` - Sort the results alphabetically.\n * `arranged` - Sort the results in the order that the user has arranged the videos.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/live_events/{live_event_id}/videos",
    "method": "addMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Add a list of videos to a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "videos",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/live_events/{live_event_id}/videos/{video_id}",
    "method": "specificEventVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Get a specific video in a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Essentials",
    "typeScriptTag": "usersEssentials",
    "description": "Get the user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me",
    "method": "editVimeoAccount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users\\Essentials",
    "typeScriptTag": "usersEssentials",
    "description": "Edit the user",
    "parameters": [
      {
        "name": "bio",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "videos",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums",
    "method": "getAllUserShowcases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Get all the showcases that belong to the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date of creation.\n * `duration` - Sort the results by duration.\n * `videos` - Sort the results by the number of videos.\n"
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
    "url": "/me/albums",
    "method": "createUserShowcase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Create a showcase",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "brand_color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_from_vimeo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_nav",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_upcoming",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "layout",
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
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "review_mode",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "theme",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums/{album_id}",
    "method": "deleteShowcase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Delete a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      }
    ],
    "responses": [
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
    "url": "/me/albums/{album_id}",
    "method": "getSpecificShowcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Get a specific showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
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
    "url": "/me/albums/{album_id}",
    "method": "editShowcase",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Edit a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hide_nav",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hide_upcoming",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "review_mode",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "theme",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_custom_domain",
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
      }
    ]
  },
  {
    "url": "/me/albums/{album_id}/videos",
    "method": "listInShowcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Get all the videos in a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page containing the video URI."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Filter the results by the **embeddable** attribute.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the showcase."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `default` - Sort the results by the default method.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `manual` - Sort the results by their manual order.\n * `modified_time` - Sort the results by last modification.\n * `plays` - Sort the results by number of plays.\n"
      },
      {
        "name": "weakSearch",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name."
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
    "url": "/me/albums/{album_id}/videos",
    "method": "replaceVideos",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Replace all the videos in a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "videos",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/me/albums/{album_id}/videos/{video_id}",
    "method": "removeFromShowcase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Remove a video from a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/me/albums/{album_id}/videos/{video_id}",
    "method": "getSpecificVideoInShowcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Get a specific video in a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the showcase."
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
    "url": "/me/albums/{album_id}/videos/{video_id}",
    "method": "addToShowcase",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Add a specific video to a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/me/albums/{album_id}/videos/{video_id}/set_album_thumbnail",
    "method": "createShowcaseThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Create a thumbnail for a showcase from a showcase video",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "time_code",
        "schema": "number",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums/{album_id}/videos/{video_id}/set_featured_video",
    "method": "setFeaturedVideo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Set the featured video of a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/me/analytics",
    "method": "getUserMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Analytics",
    "typeScriptTag": "usersAnalytics",
    "description": "Get analytics for the user",
    "parameters": [
      {
        "name": "dimension",
        "schema": "string",
        "required": true,
        "description": "The data dimension by which to group the results.\n\nOption descriptions:\n * `country` - Group the results by country.\n * `embed_domain` - Group the results by embed domain.\n * `total` - Group the results by the time range provided.\n * `video` - Group the results by video.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filterContent",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of video, folder, or event URIs to filter."
      },
      {
        "name": "filterCountries",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of country codes in ISO-3166 format to filter on."
      },
      {
        "name": "filterDeviceTypes",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of device types to filter on."
      },
      {
        "name": "filterEmbedDomains",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of domain names to filter on."
      },
      {
        "name": "filterStreamingTypes",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of streaming types to filter on."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The start date of the range of results in ISO 8601 format."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The maximum number of items returned from the request, up to a limit of 1000 items. The default value is `50`."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `average_percent_watched` - Sort the results by mean seconds played.\n * `average_time_watched` - Sort the results by mean percentage played.\n * `comments` - Sort the results by the number of comments.\n * `country` - Sort the results by country.\n * `default` - Sort the results by the values of both the **dimension** and **time_interval** fields.\n * `downloads` - Sort the results by the number of downloads.\n * `embed_domain` - Sort the results by embed domain.\n * `finishes` - Sort the results by the number of complete plays.\n * `impressions` - Sort the results by the number of impressions.\n * `like` - Sort the results by the number of likes.\n * `time` - Sort the results by the value of the **start_date** field. This option is available only when the value of **time_interval** isn't `none`.\n * `total_time_watched` - Sort the results by total seconds played.\n * `unique_impressions` - Sort the results by unique impressions.\n * `unique_viewers` - Sort the results by unique viewers.\n * `video` - Sort the results by video ID.\n * `views` - Sort the results by the number of views.\n"
      },
      {
        "name": "timeInterval",
        "schema": "string",
        "required": false,
        "description": "The interval by which to aggregate the data according to the specified data dimension. The default value is `none`.\n\nOption descriptions:\n * `day` - Aggregate the results by day according to the specified data dimension.\n * `month` - Aggregate the results by month according to the specified data dimension.\n * `none` - The results are not aggregated by time interval.\n * `week` - Aggregate the results by week according to the specified data dimension.\n * `year` - Aggregate the results by year according to the specified data dimension.\n"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The end date of the range of results in ISO 8601 format."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/appearances",
    "method": "getUserAppearances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Get all the videos in which the user appears",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/categories",
    "method": "listFollowedCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Get all the categories that the user follows",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `name` - Sort the results by name.\n"
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
    "url": "/me/categories/{category}",
    "method": "stopFollowingCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Cause the user to stop following a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/categories/{category}",
    "method": "checkFollowedCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Check if the user follows a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/categories/{category}",
    "method": "followCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Cause the user to follow a specific category",
    "parameters": [
      {
        "name": "category",
        "schema": "number",
        "required": true,
        "description": "The name of the category."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/channels",
    "method": "getUserSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Get all the channels to which a user subscribes",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `moderated` - Return moderated channels.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `followers` - Sort the results by number of followers.\n * `videos` - Sort the results by number of videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/channels/{channel_id}",
    "method": "unsubscribeUserFromChannel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Unsubscribe the user from a specific channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/channels/{channel_id}",
    "method": "checkIfUserFollowsChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Check if a user follows a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/channels/{channel_id}",
    "method": "subscribeUserToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Subscribe the user to a specific channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/customlogos",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Get all the custom logos that belong to the user",
    "parameters": [],
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
    "url": "/me/customlogos",
    "method": "addUserLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Add a custom user logo",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/customlogos/{logo_id}",
    "method": "deleteUserLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Delete a custom user logo",
    "parameters": [
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/customlogos/{logo_id}",
    "method": "getSpecificUserLogo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Get a specific custom user logo",
    "parameters": [
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
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
    "url": "/me/destinations",
    "method": "getAllAvailableDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all available live event destinations for the user to stream to",
    "parameters": [],
    "responses": [
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
    "url": "/me/feed",
    "method": "getUserFeedVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Feeds",
    "typeScriptTag": "usersFeeds",
    "description": "Get all the videos in the user's feed",
    "parameters": [
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter)."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The feed type.\n\nOption descriptions:\n * `appears` - Videos in which the user appears.\n * `category_featured` - Featured videos.\n * `channel` - Channel videos.\n * `facebook_feed` - Videos from the user's Facebook feed.\n * `following` - Videos from accounts that the user follows.\n * `group` - Group videos.\n * `likes` - Liked videos.\n * `ondemand_publish` - On Demand videos.\n * `share` - Shared videos.\n * `tagged_with` - Tagged videos.\n * `twitter_timeline` - Videos from the user's Twitter timeline.\n * `uploads` - Uploaded videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followers",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Get all the followers of the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date followed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following",
    "method": "listOfFollowingUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Get all the users that the user is following",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `online` - Return users who are currently online.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date followed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following",
    "method": "followMultipleUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Follow a list of users",
    "parameters": [
      {
        "name": "users",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following/{follow_user_id}",
    "method": "stopFollowingUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Unfollow a user",
    "parameters": [
      {
        "name": "followUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user to unfollow."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/following/{follow_user_id}",
    "method": "checkFollowingUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Check if the user is following another user",
    "parameters": [
      {
        "name": "followUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user to follow."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following/{follow_user_id}",
    "method": "followSpecificUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Follow a specific user",
    "parameters": [
      {
        "name": "followUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user to follow."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/groups",
    "method": "getUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Users",
    "typeScriptTag": "groupsUsers",
    "description": "Get all the groups that the user has joined",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `moderated` - Return moderated groups.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `members` - Sort the results by number of members.\n * `videos` - Sort the results by number of videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/groups/{group_id}",
    "method": "removeUserFromGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups\\Subscriptions",
    "typeScriptTag": "groupsSubscriptions",
    "description": "Remove the user from a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/groups/{group_id}",
    "method": "checkUserJoinedGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Users",
    "typeScriptTag": "groupsUsers",
    "description": "Check if a user has joined a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/groups/{group_id}",
    "method": "addUserToGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups\\Subscriptions",
    "typeScriptTag": "groupsSubscriptions",
    "description": "Add the user to a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/likes",
    "method": "getUserLikedVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Get all the videos that a user has liked",
    "parameters": [
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/likes/{video_id}",
    "method": "unlikeVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Cause a user to unlike a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/likes/{video_id}",
    "method": "checkUserLikedVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Check if the user has liked a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/likes/{video_id}",
    "method": "likeVideo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Cause the user to like a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/me/live_events",
    "method": "deleteMultipleEvents",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Delete a list of live events",
    "parameters": [
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
    "url": "/me/live_events",
    "method": "getAllUserLiveEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Get all the live events that belong to the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `not_in_folder` - Show only events that aren't in a folder.\n * `not_in_showcase` - Show only events that aren't in a showcase.\n * `not_in_webinar` - Show only events that aren't in a webinar.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of event to return.\n\nOption descriptions:\n * `all` - Return all events.\n * `one_time` - Return one-time events only.\n * `recurring` - Return recurring events only.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/live_events",
    "method": "createLiveEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Create a live event",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "allow_share_link",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "automatically_title_stream",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "chat_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dvr",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interaction_tools_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "low_latency",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "playlist_sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rtmp_preview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_playback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/me/live_events/{live_event_id}",
    "method": "deleteSingleEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Delete a specific live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      }
    ],
    "responses": [
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
    "url": "/me/live_events/{live_event_id}",
    "method": "getSpecificLiveEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Get a specific live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the event when the privacy is set to `password`."
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}",
    "method": "updateEventBelongingToAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Update a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cc_language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "automatically_title_stream",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "chat_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dvr",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "interaction_tools_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "playlist_sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scheduled_playback",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "stream_description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "stream_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_privacy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "stream_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/me/live_events/{live_event_id}/activate",
    "method": "createRtmpLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event activation",
    "typeScriptTag": "liveEventActivation",
    "description": "Activate a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "cloud_composing_streaming",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "streaming_start_requested",
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
        "statusCode": "400",
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
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}/auto_cc",
    "method": "editPreferenceForEvent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event automated closed captions",
    "typeScriptTag": "liveEventAutomatedClosedCaptions",
    "description": "Edit the automated closed captions preference of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_lang",
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
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}/destinations",
    "method": "listAllAvailableDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all the destinations of a recurring live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/me/live_events/{live_event_id}/destinations",
    "method": "createDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Create a live event destination",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_destination_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_video_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "service_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
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
        "statusCode": "400",
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
  },
  {
    "url": "/me/live_events/{live_event_id}/end",
    "method": "eventTerminationAlt1",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event end",
    "typeScriptTag": "liveEventEnd",
    "description": "End a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "clipId",
        "schema": "number",
        "required": false,
        "description": "The ID of the streamable video."
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
    "url": "/me/live_events/{live_event_id}/low_latency",
    "method": "toggleOption",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event low latency",
    "typeScriptTag": "liveEventLowLatency",
    "description": "Toggle the low-latency option of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "low_latency",
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
    "url": "/me/live_events/{live_event_id}/m3u8_playback",
    "method": "getUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event M3U8 playback",
    "typeScriptTag": "liveEventM3U8Playback",
    "description": "Get an M3U8 playback URL for a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "maxFpsFhd",
        "schema": "number",
        "required": false,
        "description": "The requested maximum frames per second."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}/pictures",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Get all the thumbnails of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/me/live_events/{live_event_id}/pictures",
    "method": "addThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Create a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/me/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "deleteForEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Delete a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      }
    ],
    "responses": [
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
    "url": "/me/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "getSpecificThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Get a specific live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
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
    "url": "/me/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "updateEventThumbnail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Edit a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
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
    "url": "/me/live_events/{live_event_id}/privacy/domains",
    "method": "getWhitelistDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Embed privacy",
    "typeScriptTag": "liveEmbedPrivacy",
    "description": "Get all the domains on which a live event can be embedded",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
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
    "url": "/me/live_events/{live_event_id}/privacy/domains",
    "method": "embedEventOnDomains",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Live\\Embed privacy",
    "typeScriptTag": "liveEmbedPrivacy",
    "description": "Embed a live event on one or more domains",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "allowed_domains",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/me/live_events/{live_event_id}/videos",
    "method": "removeMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Remove a list of videos from a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "videos",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}/videos",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Get all the videos in a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable events.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added videos.\n * `alphabetical` - Sort the results alphabetically.\n * `arranged` - Sort the results in the order that the user has arranged the videos.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}/videos",
    "method": "uploadMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Add a list of videos to a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "videos",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/me/live_events/{live_event_id}/videos/{video_id}",
    "method": "specificVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Get a specific video in a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/ondemand/pages",
    "method": "getAllUserPages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Get all the On Demand pages of the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The type of the page to return.\n\nOption descriptions:\n * `film` - The page type is a film.\n * `series` - The page type is a series.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added page.\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `modified_time` - Sort the results by time of page modification.\n * `name` - Sort the results by page name.\n * `publish.time` - Sort the results by time of page publishing.\n * `rating` - Sort the results by content rating.\n"
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
    "url": "/me/ondemand/pages",
    "method": "createPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Create an On Demand page",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "accepted_currencies",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "buy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "domain_link",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "episodes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "link",
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
        "name": "rent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
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
    "url": "/me/ondemand/purchases",
    "method": "getAllUserPurchasesAndRentals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Purchases and rentals",
    "typeScriptTag": "onDemandPurchasesAndRentals",
    "description": "Get all of the user's On Demand purchases and rentals",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The type of the On Demand video to filter on.\n\nOption descriptions:\n * `all` - Filter by all video types.\n * `expiring_soon` - Filter by videos that expire soon.\n * `film` - Filter by film.\n * `important` - Filter by pages that are about to expire.\n * `purchased` - Filter by purchased videos.\n * `rented` - Filter by rented videos.\n * `series` - Filter by series.\n * `subscription` - Filter by video subscription.\n * `unwatched` - Filter by unwatched videos.\n * `watched` - Filter by watched videos.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added video.\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `name` - Sort the results by video name.\n * `purchase_time` - Sort the results by time of video purchase.\n * `rating` - Sort the results by content rating.\n * `release_date` - Sort the results by video release date.\n"
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
    "url": "/me/ondemand/purchases/{ondemand_id}",
    "method": "checkUserPurchasesAndRentals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Purchases and rentals",
    "typeScriptTag": "onDemandPurchasesAndRentals",
    "description": "Check if a user has made a purchase or rental from an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/me/payment_methods",
    "method": "listPaymentMethods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments\\Essentials",
    "typeScriptTag": "paymentsEssentials",
    "description": "Get a list of all payments service payment methods",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "required": false,
        "description": "The ID associated with the account."
      },
      {
        "name": "cardmemberName",
        "schema": "string",
        "required": false,
        "description": "The name of the card member."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "showDisabled",
        "schema": "boolean",
        "required": false,
        "description": "Whether to return disabled payment methods."
      },
      {
        "name": "type",
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
    "url": "/me/payment_methods/{payment_method_id}",
    "method": "getPaymentMethodInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payments\\Essentials",
    "typeScriptTag": "paymentsEssentials",
    "description": "Get information about a payments service payment method",
    "parameters": [
      {
        "name": "paymentMethodId",
        "schema": "string",
        "required": true,
        "description": "The ID of the payment method."
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
    "url": "/me/pictures",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Get all the pictures that belong to the user",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/pictures",
    "method": "addPortraitImage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Add a picture to the user's account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/pictures/{portraitset_id}",
    "method": "removePortraitImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Delete a picture from the user's account",
    "parameters": [
      {
        "name": "portraitsetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the picture."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/pictures/{portraitset_id}",
    "method": "getSpecificPictureBelongingToUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Get a specific picture that belongs to the user",
    "parameters": [
      {
        "name": "portraitsetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the picture."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/pictures/{portraitset_id}",
    "method": "editPortraitImage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Edit a picture in the user's account",
    "parameters": [
      {
        "name": "portraitsetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the picture."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/me/portfolios",
    "method": "getAllUserPortfolios",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Essentials",
    "typeScriptTag": "portfoliosEssentials",
    "description": "Get all the portfolios that belong to the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/portfolios/{portfolio_id}",
    "method": "getUserPortfolio",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Essentials",
    "typeScriptTag": "portfoliosEssentials",
    "description": "Get a specific portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/portfolios/{portfolio_id}/videos",
    "method": "getAllPortfolioVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Get all the videos in a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI."
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `default` - Use the default sorting method.\n * `likes` - Sort the results by number of likes.\n * `manual` - Sort the results by their user-specified order.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/portfolios/{portfolio_id}/videos/{video_id}",
    "method": "removeFromPortfolio",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Remove a video from a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/portfolios/{portfolio_id}/videos/{video_id}",
    "method": "getSpecificVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Get a specific video in a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/portfolios/{portfolio_id}/videos/{video_id}",
    "method": "putVideoToPortfolio",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Add a video to a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/presets",
    "method": "getAllUserCreatedEmbedPresets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Get all the embed presets that a user has created",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/presets",
    "method": "createPreset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Create an embed preset",
    "parameters": [
      {
        "name": "embed",
        "schema": "object",
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
    "url": "/me/presets/{preset_id}",
    "method": "getSpecificPreset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Get a specific embed preset",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the preset."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/presets/{preset_id}",
    "method": "editPreset",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Edit an embed preset",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the preset."
      },
      {
        "name": "outro",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/me/presets/{preset_id}/videos",
    "method": "getSpecificPresetVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Videos",
    "typeScriptTag": "embedPresetsVideos",
    "description": "Get all the videos that have a specific embed preset",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the embed preset."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects",
    "method": "getAllUserFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Get all the folders that belong to the user",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `date` - Sort the results by date.\n * `default` - Use the default sort order.\n * `modified_time` - Sort the results by last modification.\n * `name` - Sort the results by name.\n * `pinned_on` - Sort the results by pinned timestamp.\n"
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
    "url": "/me/projects",
    "method": "createFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Create a folder",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "parent_folder_uri",
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
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}",
    "method": "deleteFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Delete a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "shouldDeleteClips",
        "schema": "boolean",
        "required": false,
        "description": "Whether to delete all the videos in the folder along with the folder itself."
      }
    ],
    "responses": [
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
  },
  {
    "url": "/me/projects/{project_id}",
    "method": "getSpecificFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Get a specific folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}",
    "method": "editFolder",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Edit a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
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
        "statusCode": "400",
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
  },
  {
    "url": "/me/projects/{project_id}/items",
    "method": "removeFromFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Items",
    "typeScriptTag": "foldersItems",
    "description": "Remove items from a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "shouldDeleteItems",
        "schema": "boolean",
        "required": false,
        "description": "Whether to delete the items when removing them from the folder."
      },
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of video or event URIs to remove."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}/items",
    "method": "getFolderItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Items",
    "typeScriptTag": "foldersItems",
    "description": "Get all the items in a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `folder` - Filter the results by folder.\n * `live_event` - Filter the results by event.\n * `video` - Filter the results by video.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `default` - Use the default sort order.\n * `duration` - Sort the results by duration. Items without a duration, namely events and folders, are grouped by type in ascending alphabetical order, with events first.\n * `last_user_action_event_date` - Sort the results by the date of the last user action.\n"
      }
    ],
    "responses": []
  },
  {
    "url": "/me/projects/{project_id}/videos",
    "method": "removeMultipleFromFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Remove a list of videos from a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "shouldDeleteClips",
        "schema": "boolean",
        "required": false,
        "description": "Whether to delete the videos when removing them from the folder."
      },
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of the video URIs to remove."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}/videos",
    "method": "getVideosInFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Get all the videos in a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filterTag",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include at least one of these tags. The use of this parameter triggers a search."
      },
      {
        "name": "filterTagAllOf",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include all of these tags. The use of this parameter triggers a search."
      },
      {
        "name": "filterTagExclude",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to exclude. The use of this parameter triggers a search."
      },
      {
        "name": "includeSubfolders",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include subfolders."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "queryFields",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `default` - Use the default sort order.\n * `duration` - Sort the results by duration.\n * `last_user_action_event_date` - Sort the results by the date of the last user action.\n"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}/videos",
    "method": "addMultipleToFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Add a list of videos to a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of video URIs to add."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}/videos/{video_id}",
    "method": "removeSingleVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Remove a video from a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/projects/{project_id}/videos/{video_id}",
    "method": "addToFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Add a video to a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/videos",
    "method": "deleteUserVideos",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Delete a user's videos",
    "parameters": [
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of the video URIs to delete."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/videos",
    "method": "getAllUserVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Get all the videos that the user has uploaded",
    "parameters": [
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI. The field is available only when not paired with **query**."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `app_only` - Return app-only videos.\n * `embeddable` - Return embeddable videos.\n * `featured` - Return featured videos.\n * `live` - Return only live videos.\n * `no_placeholder` - Return no placeholder videos.\n * `nolive` - Return no live videos.\n * `playable` - Return playable videos.\n * `screen_recorded` - Return screen-recorded videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "filterPlayable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by playable videos (`true`) or non-playable videos (`false`)."
      },
      {
        "name": "filterScreenRecorded",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded videos (`false`)."
      },
      {
        "name": "filterTag",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include at least one of these tags."
      },
      {
        "name": "filterTagAllOf",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include all of these tags."
      },
      {
        "name": "filterTagExclude",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to exclude. All results must exclude all of these tags."
      },
      {
        "name": "includeTeamContent",
        "schema": "string",
        "required": false,
        "description": "Whether to include content from the user's teams when searching. _This field is deprecated._"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "queryFields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.\n\nOption descriptions:\n * `chapters` - Query by chapter titles that have been added to the video.\n * `description` - Query by the description of the video.\n * `tags` - Query by tag names that have been added to the video.\n * `title` - Query by the title of the video.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically by title.\n * `date` - Sort the results by date.\n * `default` - Use the default sorting method.\n * `duration` - Sort the results by duration.\n * `last_user_action_event_date` - Sort the results by last user interaction. If a result hasn't had an interaction, the upload date is used instead.\n * `likes` - Sort the results by number of likes. To use this option, **direction** must be `desc`.\n * `modified_time` - Sort the results by last modification.\n * `plays` - Sort the results by number of plays. To use this option, **direction** must be `desc`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/videos",
    "method": "beginVideoUploadProcess",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Uploads",
    "typeScriptTag": "videosUploads",
    "description": "Upload a video",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "embed_domains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_from_vimeo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "license",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
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
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "review_page",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "spatial",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "upload",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/videos/{video_id}",
    "method": "checkUserOwnsVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Check if the user owns a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/me/videos/{video_id}/destinations",
    "method": "getAllDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all the destinations of a one-time live event",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
  },
  {
    "url": "/me/videos/{video_id}/destinations",
    "method": "createOneTimeLiveEventDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Create a one-time live event destination",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_destination_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_video_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "service_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
  },
  {
    "url": "/me/videos/{video_id}/m3u8_playback",
    "method": "getPlaybackUrl",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Live M3U8 playback",
    "typeScriptTag": "videosLiveM3U8Playback",
    "description": "Get an M3U8 playback URL for a one-time live event",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
  },
  {
    "url": "/me/watched/videos",
    "method": "deleteEntireWatchHistory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users\\Watch history",
    "typeScriptTag": "usersWatchHistory",
    "description": "Delete the user's watch history",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/me/watched/videos",
    "method": "getWatchedVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Watch history",
    "typeScriptTag": "usersWatchHistory",
    "description": "Get all the videos that a user has watched",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/me/watched/videos/{video_id}",
    "method": "deleteSpecificVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users\\Watch history",
    "typeScriptTag": "usersWatchHistory",
    "description": "Delete a specific video from the user's watch history",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/watchlater",
    "method": "getVideosInQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Get all the videos in the user's Watch Later queue",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date added.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/watchlater/{video_id}",
    "method": "removeVideoFromQueue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Remove a video from the user's Watch Later queue",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/watchlater/{video_id}",
    "method": "checkVideoInQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Check if the user has added a video to their Watch Later queue",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/me/watchlater/{video_id}",
    "method": "addVideoToQueue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Add a video to the user's Watch Later queue",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/me/webinars",
    "method": "createWebinar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Create a webinar",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "time_zone",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/webinars/{webinar_id}",
    "method": "getSpecificWebinar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Get a specific webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
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
    "url": "/me/webinars/{webinar_id}",
    "method": "updateWebinarBelongingToAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Update a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/me/webinars/{webinar_id}/email_settings",
    "method": "getCustomizationData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Emails",
    "typeScriptTag": "webinarEmails",
    "description": "Get customization email data for a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/me/webinars/{webinar_id}/email_settings",
    "method": "customizePreferences",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinar\\Emails",
    "typeScriptTag": "webinarEmails",
    "description": "Customize the email preferences of a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "accent_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_event_reminder_24_hrs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email_post_event_thank_you",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email_preferences",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email_registration_confirmation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reply_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender_policy_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_custom_link",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_reply_email",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_sender_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_sender_policy_url",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/webinars/{webinar_id}/registrants",
    "method": "getUserRegistrationsByWebinarId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Get user registration data associated with a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `registration_date` - Sort the results by registration date.\n"
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
      }
    ]
  },
  {
    "url": "/me/webinars/{webinar_id}/registrants",
    "method": "captureUserRegistrationList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Capture the user registration list associated with a webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "registrants",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/webinars/{webinar_id}/registrants/{registrant_id}",
    "method": "deleteRegistrantRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Delete a registrant record associated with a webinar",
    "parameters": [
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar registrant."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      }
    ],
    "responses": [
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/webinars/{webinar_id}/registrants/{registrant_id}",
    "method": "updateUserRegistrationData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Update user registration data associated with a webinar",
    "parameters": [
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar registrant."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "is_blocked",
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
      }
    ]
  },
  {
    "url": "/oauth/access_token",
    "method": "oAuthCodeExchange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication Extras\\Exchange",
    "typeScriptTag": "authenticationExtrasExchange",
    "description": "Exchange an authorization code for an access token",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "redirect_uri",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth/authorize/client",
    "method": "auth",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication Extras\\Authenticate",
    "typeScriptTag": "authenticationExtrasAuthenticate",
    "description": "Authorize a client with OAuth",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "scope",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth/authorize/vimeo_oauth1",
    "method": "oAuth1ToOAuth2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication Extras\\Convert",
    "typeScriptTag": "authenticationExtrasConvert",
    "description": "Convert an OAuth 1 access token to an OAuth 2 access token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "token_secret",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth/verify",
    "method": "token",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authentication Extras\\Essentials",
    "typeScriptTag": "authenticationExtrasEssentials",
    "description": "Verify an OAuth 2 access token",
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
    "url": "/ondemand/genres",
    "method": "getAllGenres",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Get all On Demand genres",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/genres/{genre_id}",
    "method": "specificGenreGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Get a specific On Demand genre",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "The ID of the genre."
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
    "url": "/ondemand/genres/{genre_id}/pages",
    "method": "getAllPagesInGenre",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Get all the On Demand pages in a genre",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "The ID of the genre."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `country` - Sort the results by country.\n * `my_region` - Sort the results by user's region.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `name` - Sort the results by name.\n * `publish.time` - Sort the results by time of publishing.\n * `videos` - Sort the results by video.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/genres/{genre_id}/pages/{ondemand_id}",
    "method": "getSpecificPageInGenre",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Get a specific On Demand page in a genre",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "The ID of the genre."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}",
    "method": "deleteOnDemandPage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Delete an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      }
    ],
    "responses": [
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
    "url": "/ondemand/pages/{ondemand_id}",
    "method": "vod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Get a specific On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}",
    "method": "vod",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Edit an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preorder",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publish",
        "schema": "object",
        "description": ""
      },
      {
        "name": "publish_when_ready",
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
    "url": "/ondemand/pages/{ondemand_id}/backgrounds",
    "method": "getAllBackgroundsOnPage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Backgrounds",
    "typeScriptTag": "onDemandBackgrounds",
    "description": "Get all the backgrounds on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/ondemand/pages/{ondemand_id}/backgrounds",
    "method": "addBackgroundToPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "On Demand\\Backgrounds",
    "typeScriptTag": "onDemandBackgrounds",
    "description": "Add a background to an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/backgrounds/{background_id}",
    "method": "deleteBackgroundFromPage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Backgrounds",
    "typeScriptTag": "onDemandBackgrounds",
    "description": "Delete a background on an On Demand page",
    "parameters": [
      {
        "name": "backgroundId",
        "schema": "number",
        "required": true,
        "description": "The ID of the background image."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      }
    ],
    "responses": [
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
    "url": "/ondemand/pages/{ondemand_id}/backgrounds/{background_id}",
    "method": "getSpecificBackground",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Backgrounds",
    "typeScriptTag": "onDemandBackgrounds",
    "description": "Get a specific background on an On Demand page",
    "parameters": [
      {
        "name": "backgroundId",
        "schema": "number",
        "required": true,
        "description": "The ID of the background image."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/backgrounds/{background_id}",
    "method": "editBackgroundOnPage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "On Demand\\Backgrounds",
    "typeScriptTag": "onDemandBackgrounds",
    "description": "Edit a background on an On Demand page",
    "parameters": [
      {
        "name": "backgroundId",
        "schema": "number",
        "required": true,
        "description": "The ID of the background image."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/genres",
    "method": "getGenres",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Get all the genres of an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/genres/{genre_id}",
    "method": "removeGenreFromPage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Remove a genre from an On Demand page",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "The ID of the genre."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/genres/{genre_id}",
    "method": "checkGenreAssociation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Check whether an On Demand page belongs to a specific genre",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "The ID of the genre."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/genres/{genre_id}",
    "method": "addGenreToPage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "On Demand\\Genres",
    "typeScriptTag": "onDemandGenres",
    "description": "Add a genre to an On Demand page",
    "parameters": [
      {
        "name": "genreId",
        "schema": "string",
        "required": true,
        "description": "The ID of the genre."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/likes",
    "method": "getAllUserLikes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Get all the users who have liked a video on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `extra` - Consider extra content only.\n * `main` - Consider main content only.\n * `trailer` - Consider trailer content only.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by join date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/pictures",
    "method": "getOnDemandPagePosters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Posters",
    "typeScriptTag": "onDemandPosters",
    "description": "Get all the posters on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/ondemand/pages/{ondemand_id}/pictures",
    "method": "addPosterToPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "On Demand\\Posters",
    "typeScriptTag": "onDemandPosters",
    "description": "Add a poster to an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/pictures/{poster_id}",
    "method": "getSpecificPoster",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Posters",
    "typeScriptTag": "onDemandPosters",
    "description": "Get a specific poster on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "posterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the poster."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/pictures/{poster_id}",
    "method": "updatePoster",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "On Demand\\Posters",
    "typeScriptTag": "onDemandPosters",
    "description": "Edit a poster on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "posterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the poster."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/promotions",
    "method": "getAllPagePromotions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Promotions",
    "typeScriptTag": "onDemandPromotions",
    "description": "Get all the promotions on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "The type of filter to apply to the results.\n\nOption descriptions:\n * `batch` - Filter the results by the `batch` promotion.\n * `default` - Filter the results by the default promotion.\n * `single` - Filter the results by the `single` promotion.\n * `vip` - Filter the results by the `vip` promotion.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/promotions",
    "method": "addPromotionToPage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "On Demand\\Promotions",
    "typeScriptTag": "onDemandPromotions",
    "description": "Add a promotion to an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "access_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "discount_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "download",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "end_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "percent_off",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "product_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_period",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "total",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
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
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}",
    "method": "deletePromotionOnPage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Promotions",
    "typeScriptTag": "onDemandPromotions",
    "description": "Delete a promotion on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "promotionId",
        "schema": "number",
        "required": true,
        "description": "The ID of the promotion."
      }
    ],
    "responses": [
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
    "url": "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}",
    "method": "specificPromotionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Promotions",
    "typeScriptTag": "onDemandPromotions",
    "description": "Get a specific promotion on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "promotionId",
        "schema": "number",
        "required": true,
        "description": "The ID of the promotion."
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
    "url": "/ondemand/pages/{ondemand_id}/promotions/{promotion_id}/codes",
    "method": "getAllPromotionCodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Promotions",
    "typeScriptTag": "onDemandPromotions",
    "description": "Get all the codes of a promotion on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "promotionId",
        "schema": "number",
        "required": true,
        "description": "The ID of the promotion."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/ondemand/pages/{ondemand_id}/regions",
    "method": "removeMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Remove a list of regions from an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "countries",
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
    "url": "/ondemand/pages/{ondemand_id}/regions",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Get all the regions on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/regions",
    "method": "addMultiple",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Add a list of regions to an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "countries",
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
    "url": "/ondemand/pages/{ondemand_id}/regions/{country}",
    "method": "removeSpecificRegion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Remove a specific region from an On Demand page",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "The country code of the region to remove."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      }
    ],
    "responses": [
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
    "url": "/ondemand/pages/{ondemand_id}/regions/{country}",
    "method": "getSpecificRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Get a specific region on an On Demand page",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "The country code of the region to return."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
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
    "url": "/ondemand/pages/{ondemand_id}/regions/{country}",
    "method": "addRegionToPage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Add a specific region to an On Demand page",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "The country code of the region to add."
      },
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/ondemand/pages/{ondemand_id}/seasons",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Seasons",
    "typeScriptTag": "onDemandSeasons",
    "description": "Get all the seasons on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `viewable` - Filter by viewable seasons.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `date` - Sort the results by date.\n * `manual` - Sort the results manually.\n"
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
    "url": "/ondemand/pages/{ondemand_id}/seasons/{season_id}",
    "method": "specificGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Seasons",
    "typeScriptTag": "onDemandSeasons",
    "description": "Get a specific season on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "seasonId",
        "schema": "number",
        "required": true,
        "description": "The ID of the season."
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
    "url": "/ondemand/pages/{ondemand_id}/seasons/{season_id}/videos",
    "method": "getAllVideosInSeason",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Seasons",
    "typeScriptTag": "onDemandSeasons",
    "description": "Get all the videos in a season on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "seasonId",
        "schema": "number",
        "required": true,
        "description": "The ID of the season."
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `viewable` - Filter by viewable videos.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `date` - Sort the results by date.\n * `default` - Use the default sorting method.\n * `manual` - Sort the results manually.\n * `name` - Sort the results by name.\n * `purchase_time` - Sort the results by time of purchase.\n * `release_date` - Sort the results by release date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/videos",
    "method": "getAllVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Videos",
    "typeScriptTag": "onDemandVideos",
    "description": "Get all the videos on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `all` - Filter for all videos.\n * `buy` - Filter for purchased videos.\n * `expiring_soon` - Filter for videos that expire soon.\n * `extra` - Filter for extra footage videos.\n * `main` - Filter for main videos.\n * `main.viewable` - Filter for videos that are both the main video and are viewable.\n * `rent` - Filter for rented videos.\n * `trailer` - Filter for trailer videos.\n * `unwatched` - Filter for unwatched videos.\n * `viewable` - Filter for videos that are viewable.\n * `watched` - Filter for watched videos.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `date` - Sort the results by date.\n * `default` - Use the default sorting method.\n * `episode` - Sort the results by episode.\n * `manual` - Sort the results manually.\n * `name` - Sort the results by name.\n * `purchase_time` - Sort the results by time of purchase.\n * `release_date` - Sort the results by release date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/videos/{video_id}",
    "method": "removeFromPage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "On Demand\\Videos",
    "typeScriptTag": "onDemandVideos",
    "description": "Remove a video from an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/videos/{video_id}",
    "method": "specificVideoGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Videos",
    "typeScriptTag": "onDemandVideos",
    "description": "Get a specific video on an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/pages/{ondemand_id}/videos/{video_id}",
    "method": "addVideoToPage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "On Demand\\Videos",
    "typeScriptTag": "onDemandVideos",
    "description": "Add a video to an On Demand page",
    "parameters": [
      {
        "name": "ondemandId",
        "schema": "number",
        "required": true,
        "description": "The ID of the On Demand page."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "buy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "release_year",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "rent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/ondemand/regions",
    "method": "regions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Get all the On Demand regions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ondemand/regions/{country}",
    "method": "region",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Regions",
    "typeScriptTag": "onDemandRegions",
    "description": "Get a specific On Demand region",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": true,
        "description": "The country code of the region to return."
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
    "url": "/subscription_plans/{tier}",
    "method": "plan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription Plans\\Essentials",
    "typeScriptTag": "subscriptionPlansEssentials",
    "description": "Get a single subscription plan",
    "parameters": [
      {
        "name": "tier",
        "schema": "string",
        "required": true,
        "description": "The type of subscription plan.\n\nOption descriptions:\n * `advanced` - The plan type is Vimeo Advanced.\n * `business` - The plan type is Vimeo Business.\n * `free` - The plan type is Vimeo Free.\n * `live_premium` - The plan type is Vimeo Premium.\n * `plus` - The plan type is Vimeo Plus.\n * `pro` - The plan type is Vimeo Pro.\n * `pro_unlimited` - The plan type is Vimeo Pro Unlimited.\n * `standard` - The plan type is Vimeo Standard.\n * `starter` - The plan type is Vimeo Starter.\n"
      }
    ],
    "responses": []
  },
  {
    "url": "/tags/{word}",
    "method": "tag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags\\Essentials",
    "typeScriptTag": "tagsEssentials",
    "description": "Get a tag",
    "parameters": [
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The tag to return."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tags/{word}/videos",
    "method": "getAllByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Tags",
    "typeScriptTag": "videosTags",
    "description": "Get all the videos with a specific tag",
    "parameters": [
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The tag word."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `created_time` - Sort the results by creation time.\n * `duration` - Sort the results by duration.\n * `name` - Sort the results by name.\n"
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
    "url": "/teammembers/{code}",
    "method": "getMembershipInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams\\Members",
    "typeScriptTag": "teamsMembers",
    "description": "Get membership information about a team",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code corresponding to the desired team. This value appears under `TeamUser` > `code`."
      }
    ],
    "responses": []
  },
  {
    "url": "/tokens",
    "method": "token",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Authentication Extras\\Essentials",
    "typeScriptTag": "authenticationExtrasEssentials",
    "description": "Revoke the current access token",
    "parameters": [],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/tutorial",
    "method": "tutorial",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tutorial\\Essentials",
    "typeScriptTag": "tutorialEssentials",
    "description": "Get started with the Vimeo API",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/users",
    "method": "users",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Search",
    "typeScriptTag": "usersSearch",
    "description": "Search for users",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `followers` - Sort the results by number of followers.\n * `relevant` - Sort the results by relevance.\n * `videos` - Sort the results by number of videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{owner_id}/folders/private_to_me",
    "method": "getUserPrivateToMeFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Get a user's private-to-me folder",
    "parameters": [
      {
        "name": "ownerId",
        "schema": "number",
        "required": true,
        "description": "The ID of the owner."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "user",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Essentials",
    "typeScriptTag": "usersEssentials",
    "description": "Get the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "user",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users\\Essentials",
    "typeScriptTag": "usersEssentials",
    "description": "Edit the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "bio",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "description": ""
      },
      {
        "name": "link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "videos",
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
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/albums",
    "method": "showcases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Get all the showcases that belong to the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date of creation.\n * `duration` - Sort the results by duration.\n * `videos` - Sort the results by the number of videos.\n"
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
    "url": "/users/{user_id}/albums",
    "method": "showcases",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Add videos and live events to showcases",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "albumItemUris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of video or event URIs."
      },
      {
        "name": "albumUris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of showcase URIs."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/albums",
    "method": "showcase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Create a showcase",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "brand_color",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_from_vimeo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_nav",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_upcoming",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "layout",
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
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "review_mode",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "theme",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/albums/{album_id}",
    "method": "showcase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Delete a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/albums/{album_id}",
    "method": "showcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Get a specific showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/albums/{album_id}",
    "method": "showcase",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Essentials",
    "typeScriptTag": "showcasesEssentials",
    "description": "Edit a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "brand_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hide_nav",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "hide_upcoming",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "layout",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "description": ""
      },
      {
        "name": "review_mode",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "theme",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_custom_domain",
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/albums/{album_id}/custom_thumbnails",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Custom showcase thumbnails",
    "typeScriptTag": "showcasesCustomShowcaseThumbnails",
    "description": "Get all the custom thumbnails of a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/users/{user_id}/albums/{album_id}/custom_thumbnails",
    "method": "addCustomThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Showcases\\Custom showcase thumbnails",
    "typeScriptTag": "showcasesCustomShowcaseThumbnails",
    "description": "Add a custom thumbnail to a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}",
    "method": "deleteCustomThumbnail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Showcases\\Custom showcase thumbnails",
    "typeScriptTag": "showcasesCustomShowcaseThumbnails",
    "description": "Delete a custom showcase thumbnail",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom thumbnail."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}",
    "method": "getSpecificThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Custom showcase thumbnails",
    "typeScriptTag": "showcasesCustomShowcaseThumbnails",
    "description": "Get a specific custom showcase thumbnail",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom thumbnail."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/albums/{album_id}/custom_thumbnails/{thumbnail_id}",
    "method": "replaceCustomThumbnail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Custom showcase thumbnails",
    "typeScriptTag": "showcasesCustomShowcaseThumbnails",
    "description": "Replace a custom showcase thumbnail",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom thumbnail."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/albums/{album_id}/logos",
    "method": "listAllCustomLogos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Custom showcase logos",
    "typeScriptTag": "showcasesCustomShowcaseLogos",
    "description": "Get all the custom logos of a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/users/{user_id}/albums/{album_id}/logos",
    "method": "addCustomLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Showcases\\Custom showcase logos",
    "typeScriptTag": "showcasesCustomShowcaseLogos",
    "description": "Add a custom logo to a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/users/{user_id}/albums/{album_id}/logos/{logo_id}",
    "method": "deleteCustomLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Showcases\\Custom showcase logos",
    "typeScriptTag": "showcasesCustomShowcaseLogos",
    "description": "Delete a custom showcase logo",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/albums/{album_id}/logos/{logo_id}",
    "method": "getSpecificLogo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Custom showcase logos",
    "typeScriptTag": "showcasesCustomShowcaseLogos",
    "description": "Get a specific custom showcase logo",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/albums/{album_id}/logos/{logo_id}",
    "method": "replaceLogo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Custom showcase logos",
    "typeScriptTag": "showcasesCustomShowcaseLogos",
    "description": "Replace a custom showcase logo",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/albums/{album_id}/videos",
    "method": "getShowcaseVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Get all the videos in a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page containing the video URI."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Filter the results by the **embeddable** attribute.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the showcase."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `default` - Sort the results by the default method.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `manual` - Sort the results by their manual order.\n * `modified_time` - Sort the results by last modification.\n * `plays` - Sort the results by number of plays.\n"
      },
      {
        "name": "weakSearch",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include private videos in the search. Please note that a separate search service provides this functionality. The service performs a partial text search on the video's name."
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
    "url": "/users/{user_id}/albums/{album_id}/videos",
    "method": "replaceShowcaseVideos",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Replace all the videos in a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videos",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/albums/{album_id}/videos/{video_id}",
    "method": "removeVideoFromShowcase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Remove a video from a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/albums/{album_id}/videos/{video_id}",
    "method": "getSpecificVideoInShowcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Get a specific video in a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the showcase."
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
    "url": "/users/{user_id}/albums/{album_id}/videos/{video_id}",
    "method": "addToShowcase",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Add a specific video to a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_album_thumbnail",
    "method": "createShowcaseThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Create a thumbnail for a showcase from a showcase video",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "time_code",
        "schema": "number",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/albums/{album_id}/videos/{video_id}/set_featured_video",
    "method": "setFeaturedVideo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Set the featured video of a showcase",
    "parameters": [
      {
        "name": "albumId",
        "schema": "number",
        "required": true,
        "description": "The ID of the showcase."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/users/{user_id}/analytics",
    "method": "getMetrics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Analytics",
    "typeScriptTag": "usersAnalytics",
    "description": "Get analytics for the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "dimension",
        "schema": "string",
        "required": true,
        "description": "The data dimension by which to group the results.\n\nOption descriptions:\n * `country` - Group the results by country.\n * `embed_domain` - Group the results by embed domain.\n * `total` - Group the results by the time range provided.\n * `video` - Group the results by video.\n"
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filterContent",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of video, folder, or event URIs to filter."
      },
      {
        "name": "filterCountries",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of country codes in ISO-3166 format to filter on."
      },
      {
        "name": "filterDeviceTypes",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of device types to filter on."
      },
      {
        "name": "filterEmbedDomains",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of domain names to filter on."
      },
      {
        "name": "filterStreamingTypes",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of streaming types to filter on."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "The start date of the range of results in ISO 8601 format."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The maximum number of items returned from the request, up to a limit of 1000 items. The default value is `50`."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `average_percent_watched` - Sort the results by mean seconds played.\n * `average_time_watched` - Sort the results by mean percentage played.\n * `comments` - Sort the results by the number of comments.\n * `country` - Sort the results by country.\n * `default` - Sort the results by the values of both the **dimension** and **time_interval** fields.\n * `downloads` - Sort the results by the number of downloads.\n * `embed_domain` - Sort the results by embed domain.\n * `finishes` - Sort the results by the number of complete plays.\n * `impressions` - Sort the results by the number of impressions.\n * `like` - Sort the results by the number of likes.\n * `time` - Sort the results by the value of the **start_date** field. This option is available only when the value of **time_interval** isn't `none`.\n * `total_time_watched` - Sort the results by total seconds played.\n * `unique_impressions` - Sort the results by unique impressions.\n * `unique_viewers` - Sort the results by unique viewers.\n * `video` - Sort the results by video ID.\n * `views` - Sort the results by the number of views.\n"
      },
      {
        "name": "timeInterval",
        "schema": "string",
        "required": false,
        "description": "The interval by which to aggregate the data according to the specified data dimension. The default value is `none`.\n\nOption descriptions:\n * `day` - Aggregate the results by day according to the specified data dimension.\n * `month` - Aggregate the results by month according to the specified data dimension.\n * `none` - The results are not aggregated by time interval.\n * `week` - Aggregate the results by week according to the specified data dimension.\n * `year` - Aggregate the results by year according to the specified data dimension.\n"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "The end date of the range of results in ISO 8601 format."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/appearances",
    "method": "appearances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Get all the videos in which the user appears",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/categories",
    "method": "listFollowedCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Get all the categories that the user follows",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `name` - Sort the results by name.\n"
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
    "url": "/users/{user_id}/categories/{category}",
    "method": "stopFollowingCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Cause the user to stop following a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/categories/{category}",
    "method": "checkFollowedCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Check if the user follows a category",
    "parameters": [
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/categories/{category}",
    "method": "followSpecificCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Categories\\Users",
    "typeScriptTag": "categoriesUsers",
    "description": "Cause the user to follow a specific category",
    "parameters": [
      {
        "name": "category",
        "schema": "number",
        "required": true,
        "description": "The name of the category."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/channels",
    "method": "getUserSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Essentials",
    "typeScriptTag": "channelsEssentials",
    "description": "Get all the channels to which a user subscribes",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `moderated` - Return moderated channels.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `followers` - Sort the results by number of followers.\n * `videos` - Sort the results by number of videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/channels/{channel_id}",
    "method": "unsubscribeUserFromChannel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Unsubscribe the user from a specific channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/channels/{channel_id}",
    "method": "checkUserFollowsChannel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Check if a user follows a channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/channels/{channel_id}",
    "method": "subscribeToChannel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Channels\\Subscriptions and subscribers",
    "typeScriptTag": "channelsSubscriptionsAndSubscribers",
    "description": "Subscribe the user to a specific channel",
    "parameters": [
      {
        "name": "channelId",
        "schema": "number",
        "required": true,
        "description": "The ID of the channel."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/customlogos",
    "method": "listUserLogos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Get all the custom logos that belong to the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/customlogos",
    "method": "addUserLogo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Add a custom user logo",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/customlogos/{logo_id}",
    "method": "deleteUserLogo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Delete a custom user logo",
    "parameters": [
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/customlogos/{logo_id}",
    "method": "getSpecificUserLogo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Custom logos",
    "typeScriptTag": "embedPresetsCustomLogos",
    "description": "Get a specific custom user logo",
    "parameters": [
      {
        "name": "logoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the custom logo."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/destinations",
    "method": "listAvailableDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all available live event destinations for the user to stream to",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/feed",
    "method": "feed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Feeds",
    "typeScriptTag": "usersFeeds",
    "description": "Get all the videos in the user's feed",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "offset",
        "schema": "string",
        "required": false,
        "description": "The pagination offset. We recommend that you use the pagination links in the feed response instead of working with this value directly. For more details, see our [pagination documentation](https://developer.vimeo.com/api/common-formats#using-the-pagination-parameter)."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The feed type.\n\nOption descriptions:\n * `appears` - Videos in which the user appears.\n * `category_featured` - Featured videos.\n * `channel` - Channel videos.\n * `facebook_feed` - Videos from the user's Facebook feed.\n * `following` - Videos from accounts that the user follows.\n * `group` - Group videos.\n * `likes` - Liked videos.\n * `ondemand_publish` - On Demand videos.\n * `share` - Shared videos.\n * `tagged_with` - Tagged videos.\n * `twitter_timeline` - Videos from the user's Twitter timeline.\n * `uploads` - Uploaded videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/followers",
    "method": "followers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Get all the followers of the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date followed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/following",
    "method": "listOfFollowedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Get all the users that the user is following",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `online` - Return users who are currently online.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date followed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/following",
    "method": "users",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Follow a list of users",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
        "statusCode": "400",
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
        "statusCode": "429",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/following/{follow_user_id}",
    "method": "user",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Unfollow a user",
    "parameters": [
      {
        "name": "followUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user to unfollow."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/following/{follow_user_id}",
    "method": "checkFollowingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Check if the user is following another user",
    "parameters": [
      {
        "name": "followUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user to follow."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/following/{follow_user_id}",
    "method": "user",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users\\Followers",
    "typeScriptTag": "usersFollowers",
    "description": "Follow a specific user",
    "parameters": [
      {
        "name": "followUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user to follow."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/groups",
    "method": "getUserGroupsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Users",
    "typeScriptTag": "groupsUsers",
    "description": "Get all the groups that the user has joined",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `moderated` - Return moderated groups.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n * `members` - Sort the results by number of members.\n * `videos` - Sort the results by number of videos.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/groups/{group_id}",
    "method": "group",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups\\Subscriptions",
    "typeScriptTag": "groupsSubscriptions",
    "description": "Remove the user from a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/groups/{group_id}",
    "method": "checkBelongGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups\\Users",
    "typeScriptTag": "groupsUsers",
    "description": "Check if a user has joined a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/groups/{group_id}",
    "method": "group",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups\\Subscriptions",
    "typeScriptTag": "groupsSubscriptions",
    "description": "Add the user to a group",
    "parameters": [
      {
        "name": "groupId",
        "schema": "number",
        "required": true,
        "description": "The ID of the group."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/likes",
    "method": "likes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Get all the videos that a user has liked",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/likes/{video_id}",
    "method": "video",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Cause a user to unlike a video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/likes/{video_id}",
    "method": "checkVideoLikedByUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Check if the user has liked a video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/likes/{video_id}",
    "method": "video",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Cause the user to like a video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/live_events",
    "method": "deleteMultipleEvents",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Delete a list of live events",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events",
    "method": "getUserLiveEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Get all the live events that belong to the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `not_in_folder` - Show only events that aren't in a folder.\n * `not_in_showcase` - Show only events that aren't in a showcase.\n * `not_in_webinar` - Show only events that aren't in a webinar.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "The type of event to return.\n\nOption descriptions:\n * `all` - Return all events.\n * `one_time` - Return one-time events only.\n * `recurring` - Return recurring events only.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events",
    "method": "createEventForUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Create a live event",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "allow_share_link",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_lang",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "automatically_title_stream",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "chat_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "dvr",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interaction_tools_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "low_latency",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "playlist_sort",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "rtmp_preview",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_playback",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/users/{user_id}/live_events/{live_event_id}",
    "method": "deleteSpecificEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Delete a specific live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/live_events/{live_event_id}",
    "method": "getEventById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Get a specific live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": "The password of the event when the privacy is set to `password`."
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}",
    "method": "updateEventBelongingToAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Essentials",
    "typeScriptTag": "liveEssentials",
    "description": "Update a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "description": ""
      },
      {
        "name": "auto_cc_language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "automatically_title_stream",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "chat_enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dvr",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "interaction_tools_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "playlist_sort",
        "schema": "string",
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "scheduled_playback",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "stream_description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "stream_mode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stream_privacy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "stream_title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/users/{user_id}/live_events/{live_event_id}/activate",
    "method": "createRtmpLinks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event activation",
    "typeScriptTag": "liveEventActivation",
    "description": "Activate a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "cloud_composing_streaming",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "streaming_start_requested",
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
        "statusCode": "400",
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
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/auto_cc",
    "method": "editPreferenceForEvent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event automated closed captions",
    "typeScriptTag": "liveEventAutomatedClosedCaptions",
    "description": "Edit the automated closed captions preference of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "auto_cc_enabled",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "auto_cc_keywords",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "auto_cc_lang",
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/destinations",
    "method": "getAllAvailableDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all the destinations of a recurring live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/destinations",
    "method": "createEventDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Create a live event destination",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_destination_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_video_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "service_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
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
        "statusCode": "400",
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
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/end",
    "method": "eventTerminationAlt2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event end",
    "typeScriptTag": "liveEventEnd",
    "description": "End a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "clipId",
        "schema": "number",
        "required": false,
        "description": "The ID of the streamable video."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/low_latency",
    "method": "toggleOption",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event low latency",
    "typeScriptTag": "liveEventLowLatency",
    "description": "Toggle the low-latency option of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "low_latency",
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
    "url": "/users/{user_id}/live_events/{live_event_id}/m3u8_playback",
    "method": "getUrlForEventStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event M3U8 playback",
    "typeScriptTag": "liveEventM3U8Playback",
    "description": "Get an M3U8 playback URL for a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "maxFpsFhd",
        "schema": "number",
        "required": false,
        "description": "The requested maximum frames per second."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
      },
      {
        "statusCode": "500",
        "description": ""
      },
      {
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/ott_destination/{destination_id}",
    "method": "deleteOttDestination",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Delete a live event OTT destination",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/ott_destinations",
    "method": "getAllOttDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all the OTT destinations of a recurring live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/ott_destinations",
    "method": "createOttDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Create a live event OTT destination",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/pictures",
    "method": "getAllThumbs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Get all the thumbnails of a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/pictures",
    "method": "createThumbnailForEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Create a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "deleteThumbnailForEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Delete a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "getSpecificThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Get a specific live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/pictures/{thumbnail_id}",
    "method": "editEventThumbnail",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Live\\Event thumbnails",
    "typeScriptTag": "liveEventThumbnails",
    "description": "Edit a live event thumbnail",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/privacy/domains",
    "method": "getWhitelistDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Embed privacy",
    "typeScriptTag": "liveEmbedPrivacy",
    "description": "Get all the domains on which a live event can be embedded",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
    "url": "/users/{user_id}/live_events/{live_event_id}/privacy/domains",
    "method": "embedEventOnDomains",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Live\\Embed privacy",
    "typeScriptTag": "liveEmbedPrivacy",
    "description": "Embed a live event on one or more domains",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "allowed_domains",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
    "url": "/users/{user_id}/live_events/{live_event_id}/videos",
    "method": "removeMultiple",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Remove a list of videos from a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videos",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/videos",
    "method": "listAllVideosInEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Get all the videos in a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable events.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added videos.\n * `alphabetical` - Sort the results alphabetically.\n * `arranged` - Sort the results in the order that the user has arranged the videos.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/videos",
    "method": "addMultipleVideos",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Add a list of videos to a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videos",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/live_events/{live_event_id}/videos/{video_id}",
    "method": "getSpecificVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event videos",
    "typeScriptTag": "liveEventVideos",
    "description": "Get a specific video in a live event",
    "parameters": [
      {
        "name": "liveEventId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/ondemand/pages",
    "method": "getAllUserPages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Get all the On Demand pages of the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The type of the page to return.\n\nOption descriptions:\n * `film` - The page type is a film.\n * `series` - The page type is a series.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added page.\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `modified_time` - Sort the results by time of page modification.\n * `name` - Sort the results by page name.\n * `publish.time` - Sort the results by time of page publishing.\n * `rating` - Sort the results by content rating.\n"
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
    "url": "/users/{user_id}/ondemand/pages",
    "method": "vod",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "On Demand\\Essentials",
    "typeScriptTag": "onDemandEssentials",
    "description": "Create an On Demand page",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "accepted_currencies",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "buy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "domain_link",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "episodes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "link",
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
        "name": "rent",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
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
    "url": "/users/{user_id}/ondemand/purchases",
    "method": "listUserPurchasesAndRentals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "On Demand\\Purchases and rentals",
    "typeScriptTag": "onDemandPurchasesAndRentals",
    "description": "Get all of the user's On Demand purchases and rentals",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The type of the On Demand video to filter on.\n\nOption descriptions:\n * `all` - Filter by all video types.\n * `expiring_soon` - Filter by videos that expire soon.\n * `film` - Filter by film.\n * `important` - Filter by pages that are about to expire.\n * `purchased` - Filter by purchased videos.\n * `rented` - Filter by rented videos.\n * `series` - Filter by series.\n * `subscription` - Filter by video subscription.\n * `unwatched` - Filter by unwatched videos.\n * `watched` - Filter by watched videos.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `added` - Sort the results by most recently added video.\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `name` - Sort the results by video name.\n * `purchase_time` - Sort the results by time of video purchase.\n * `rating` - Sort the results by content rating.\n * `release_date` - Sort the results by video release date.\n"
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
    "url": "/users/{user_id}/pictures",
    "method": "pictures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Get all the pictures that belong to the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/pictures",
    "method": "picture",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Add a picture to the user's account",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/pictures/{portraitset_id}",
    "method": "picture",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Delete a picture from the user's account",
    "parameters": [
      {
        "name": "portraitsetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the picture."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/pictures/{portraitset_id}",
    "method": "picture",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Get a specific picture that belongs to the user",
    "parameters": [
      {
        "name": "portraitsetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the picture."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/pictures/{portraitset_id}",
    "method": "picture",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Users\\Pictures",
    "typeScriptTag": "usersPictures",
    "description": "Edit a picture in the user's account",
    "parameters": [
      {
        "name": "portraitsetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the picture."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/portfolios",
    "method": "portfolios",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Essentials",
    "typeScriptTag": "portfoliosEssentials",
    "description": "Get all the portfolios that belong to the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by creation date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/portfolios/{portfolio_id}",
    "method": "portfolio",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Essentials",
    "typeScriptTag": "portfoliosEssentials",
    "description": "Get a specific portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/portfolios/{portfolio_id}/videos",
    "method": "getAllPortfolioVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Get all the videos in a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI."
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by creation date.\n * `default` - Use the default sorting method.\n * `likes` - Sort the results by number of likes.\n * `manual` - Sort the results by their user-specified order.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}",
    "method": "removeFromPortfolioVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Remove a video from a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}",
    "method": "getSpecificVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Get a specific video in a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/portfolios/{portfolio_id}/videos/{video_id}",
    "method": "addVideoToPortfolio",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Portfolios\\Videos",
    "typeScriptTag": "portfoliosVideos",
    "description": "Add a video to a portfolio",
    "parameters": [
      {
        "name": "portfolioId",
        "schema": "number",
        "required": true,
        "description": "The ID of the portfolio."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/presets",
    "method": "getUserEmbedPresets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Get all the embed presets that a user has created",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/presets",
    "method": "createEmbedPreset",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Create an embed preset",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "embed",
        "schema": "object",
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
    "url": "/users/{user_id}/presets/{preset_id}",
    "method": "getSpecificEmbedPreset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Get a specific embed preset",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the preset."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/presets/{preset_id}",
    "method": "editPreset",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Embed Presets\\Essentials",
    "typeScriptTag": "embedPresetsEssentials",
    "description": "Edit an embed preset",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the preset."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "outro",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/presets/{preset_id}/videos",
    "method": "getPresetVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Videos",
    "typeScriptTag": "embedPresetsVideos",
    "description": "Get all the videos that have a specific embed preset",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the embed preset."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects",
    "method": "projects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Get all the folders that belong to the user",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `date` - Sort the results by date.\n * `default` - Use the default sort order.\n * `modified_time` - Sort the results by last modification.\n * `name` - Sort the results by name.\n * `pinned_on` - Sort the results by pinned timestamp.\n"
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
    "url": "/users/{user_id}/projects",
    "method": "project",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Create a folder",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "parent_folder_uri",
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
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects/{project_id}",
    "method": "project",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Delete a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "shouldDeleteClips",
        "schema": "boolean",
        "required": false,
        "description": "Whether to delete all the videos in the folder along with the folder itself."
      }
    ],
    "responses": [
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
  },
  {
    "url": "/users/{user_id}/projects/{project_id}",
    "method": "project",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Get a specific folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects/{project_id}",
    "method": "project",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Folders\\Essentials",
    "typeScriptTag": "foldersEssentials",
    "description": "Edit a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
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
        "statusCode": "400",
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
  },
  {
    "url": "/users/{user_id}/projects/{project_id}/items",
    "method": "getFolderContents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Items",
    "typeScriptTag": "foldersItems",
    "description": "Get all the items in a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `folder` - Filter the results by folder.\n * `live_event` - Filter the results by event.\n * `video` - Filter the results by video.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `default` - Use the default sort order.\n * `duration` - Sort the results by duration. Items without a duration, namely events and folders, are grouped by type in ascending alphabetical order, with events first.\n * `last_user_action_event_date` - Sort the results by the date of the last user action.\n"
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/projects/{project_id}/videos",
    "method": "removeMultipleVideosFromFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Remove a list of videos from a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "shouldDeleteClips",
        "schema": "boolean",
        "required": false,
        "description": "Whether to delete the videos when removing them from the folder."
      },
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of the video URIs to remove."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects/{project_id}/videos",
    "method": "getAllFolderVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Get all the videos in a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filterTag",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include at least one of these tags. The use of this parameter triggers a search."
      },
      {
        "name": "filterTagAllOf",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include all of these tags. The use of this parameter triggers a search."
      },
      {
        "name": "filterTagExclude",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to exclude. The use of this parameter triggers a search."
      },
      {
        "name": "includeSubfolders",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include subfolders."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "queryFields",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n * `default` - Use the default sort order.\n * `duration` - Sort the results by duration.\n * `last_user_action_event_date` - Sort the results by the date of the last user action.\n"
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects/{project_id}/videos",
    "method": "addToFolderVideos",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Add a list of videos to a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of video URIs to add."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects/{project_id}/videos/{video_id}",
    "method": "removeFromFolderVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Remove a video from a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/projects/{project_id}/videos/{video_id}",
    "method": "addSingleFolderVideo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders\\Videos",
    "typeScriptTag": "foldersVideos",
    "description": "Add a video to a folder",
    "parameters": [
      {
        "name": "projectId",
        "schema": "number",
        "required": true,
        "description": "The ID of the folder."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/team/role",
    "method": "getUserTeamRole",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams\\Members",
    "typeScriptTag": "teamsMembers",
    "description": "Get information about the user's role on a team",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the team owner."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/team_users/{team_user_id}",
    "method": "getTeamMembershipInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams\\Members",
    "typeScriptTag": "teamsMembers",
    "description": "Get membership information about a team",
    "parameters": [
      {
        "name": "teamUserId",
        "schema": "number",
        "required": true,
        "description": "The ID of the team user."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the team owner."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/uploads/{upload_id}",
    "method": "completeStreamingUpload",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Uploads",
    "typeScriptTag": "videosUploads",
    "description": "Complete a streaming upload",
    "parameters": [
      {
        "name": "uploadId",
        "schema": "number",
        "required": true,
        "description": "The ID of the streaming upload."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "signature",
        "schema": "string",
        "required": true,
        "description": "The crypto signature of the completed upload."
      },
      {
        "name": "videoFileId",
        "schema": "number",
        "required": true,
        "description": "The ID of the uploaded file."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
    "url": "/users/{user_id}/uploads/{upload_id}",
    "method": "getUploadAttempt",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Uploads",
    "typeScriptTag": "videosUploads",
    "description": "Get an upload attempt",
    "parameters": [
      {
        "name": "uploadId",
        "schema": "number",
        "required": true,
        "description": "The ID of the upload attempt."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/videos",
    "method": "videos",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Delete a user's videos",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "uris",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of the video URIs to delete."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/videos",
    "method": "videos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Get all the videos that the user has uploaded",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "containingUri",
        "schema": "string",
        "required": false,
        "description": "The page that contains the video URI. The field is available only when not paired with **query**."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `app_only` - Return app-only videos.\n * `embeddable` - Return embeddable videos.\n * `featured` - Return featured videos.\n * `live` - Return only live videos.\n * `no_placeholder` - Return no placeholder videos.\n * `nolive` - Return no live videos.\n * `playable` - Return playable videos.\n * `screen_recorded` - Return screen-recorded videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "filterPlayable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by playable videos (`true`) or non-playable videos (`false`)."
      },
      {
        "name": "filterScreenRecorded",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by screen-recorded videos (`true`) or non-screen-recorded videos (`false`)."
      },
      {
        "name": "filterTag",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include at least one of these tags."
      },
      {
        "name": "filterTagAllOf",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to filter on. All results must include all of these tags."
      },
      {
        "name": "filterTagExclude",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of tags to exclude. All results must exclude all of these tags."
      },
      {
        "name": "includeTeamContent",
        "schema": "string",
        "required": false,
        "description": "Whether to include content from the user's teams when searching. _This field is deprecated._"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "queryFields",
        "schema": "array",
        "required": false,
        "description": "A comma-separated list of fields to query over. The default value is `title,description,chapters,tags`.\n\nOption descriptions:\n * `chapters` - Query by chapter titles that have been added to the video.\n * `description` - Query by the description of the video.\n * `tags` - Query by tag names that have been added to the video.\n * `title` - Query by the title of the video.\n"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically by title.\n * `date` - Sort the results by date.\n * `default` - Use the default sorting method.\n * `duration` - Sort the results by duration.\n * `last_user_action_event_date` - Sort the results by last user interaction. If a result hasn't had an interaction, the upload date is used instead.\n * `likes` - Sort the results by number of likes. To use this option, **direction** must be `desc`.\n * `modified_time` - Sort the results by last modification.\n * `plays` - Sort the results by number of plays. To use this option, **direction** must be `desc`.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/videos",
    "method": "video",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Uploads",
    "typeScriptTag": "videosUploads",
    "description": "Upload a video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "embed_domains",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hide_from_vimeo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "license",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
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
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "review_page",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "spatial",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "upload",
        "schema": "object",
        "required": true,
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
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/videos/{video_id}",
    "method": "checkUserOwnership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Check if the user owns a video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/users/{user_id}/videos/{video_id}/destinations",
    "method": "getAllAvailableDestinations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Get all the destinations of a one-time live event",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
  },
  {
    "url": "/users/{user_id}/videos/{video_id}/destinations",
    "method": "createOneTimeLiveEventDestination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Live\\Event destinations",
    "typeScriptTag": "liveEventDestinations",
    "description": "Create a one-time live event destination",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "display_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "is_enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_destination_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "provider_video_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduled_at",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "service_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "stream_key",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stream_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
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
  },
  {
    "url": "/users/{user_id}/videos/{video_id}/m3u8_playback",
    "method": "getPlaybackUrlForEventStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Live M3U8 playback",
    "typeScriptTag": "videosLiveM3U8Playback",
    "description": "Get an M3U8 playback URL for a one-time live event",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
  },
  {
    "url": "/users/{user_id}/watchlater",
    "method": "listUserQueueVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Get all the videos in the user's Watch Later queue",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `embeddable` - Return embeddable videos.\n"
      },
      {
        "name": "filterEmbeddable",
        "schema": "boolean",
        "required": false,
        "description": "Whether to filter the results by embeddable videos (`true`) or non-embeddable videos (`false`). This parameter is required only when **filter** is `embeddable`."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date added.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/watchlater/{video_id}",
    "method": "removeVideoFromQueue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Remove a video from the user's Watch Later queue",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/watchlater/{video_id}",
    "method": "checkVideoInQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Check if the user has added a video to their Watch Later queue",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/users/{user_id}/watchlater/{video_id}",
    "method": "addVideoToQueue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Watch Later Queue\\Essentials",
    "typeScriptTag": "watchLaterQueueEssentials",
    "description": "Add a video to the user's Watch Later queue",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/users/{user_id}/webinars",
    "method": "webinar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Create a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email_settings",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_uri",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "time_zone",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/webinars/{webinar_id}",
    "method": "webinar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Get a specific webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
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
    "url": "/users/{user_id}/webinars/{webinar_id}",
    "method": "webinar",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Update a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_settings",
        "schema": "object",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "schedule",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
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
    "url": "/users/{user_id}/webinars/{webinar_id}/email_settings",
    "method": "getCustomizationData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Emails",
    "typeScriptTag": "webinarEmails",
    "description": "Get customization email data for a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/webinars/{webinar_id}/email_settings",
    "method": "customizePreferences",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinar\\Emails",
    "typeScriptTag": "webinarEmails",
    "description": "Customize the email preferences of a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "accent_color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_link",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email_event_reminder_24_hrs",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email_post_event_thank_you",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email_preferences",
        "schema": "object",
        "description": ""
      },
      {
        "name": "email_registration_confirmation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "logo_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reply_email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender_address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sender_policy_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_custom_link",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_reply_email",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_sender_address",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "use_sender_policy_url",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/webinars/{webinar_id}/registrants",
    "method": "getUserRegistrationsByWebinarId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Get user registration data associated with a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `registration_date` - Sort the results by registration date.\n"
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
      }
    ]
  },
  {
    "url": "/users/{user_id}/webinars/{webinar_id}/registrants",
    "method": "captureUserRegistrationList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Capture the user registration list associated with a webinar",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "registrants",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/webinars/{webinar_id}/registrants/{registrant_id}",
    "method": "deleteRegistrantRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Delete a registrant record associated with a webinar",
    "parameters": [
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar registrant."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      }
    ],
    "responses": [
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/webinars/{webinar_id}/registrants/{registrant_id}",
    "method": "updateUserRegistrationData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webinar\\Registrations",
    "typeScriptTag": "webinarRegistrations",
    "description": "Update user registration data associated with a webinar",
    "parameters": [
      {
        "name": "registrantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar registrant."
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
      },
      {
        "name": "is_blocked",
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
      }
    ]
  },
  {
    "url": "/videos",
    "method": "videos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Search for videos",
    "parameters": [
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results. `CC` and related filters target videos with the corresponding Creative Commons licenses. For more information, see our [Creative Commons](https://vimeo.com/creativecommons) page.\n\nOption descriptions:\n * `CC` - Return videos under any Creative Commons license.\n * `CC-BY` - Return CC BY, or attribution-only, videos.\n * `CC-BY-NC` - Return CC BY-NC, or Attribution-NonCommercial, videos.\n * `CC-BY-NC-ND` - Return CC BY-NC-ND, or Attribution-NonCommercial-NoDerivs, videos.\n * `CC-BY-NC-SA` - Return CC BY-NC-SA, or Attribution-NonCommercial-ShareAlike, videos.\n * `CC-BY-ND` - Return CC BY-ND, or Attribution-NoDerivs, videos.\n * `CC-BY-SA` - Return CC BY-SA, or Attribution-ShareAlike, videos.\n * `CC0` - Return CC0, or public domain, videos.\n * `categories` - Filter by categories.\n * `duration` - Filter by duration.\n * `in-progress` - Return in-progress videos.\n * `minimum_likes` - Filter by minimum likes.\n * `trending` - Return trending videos.\n * `upload_date` - Filter by upload date.\n"
      },
      {
        "name": "links",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of video URLs to find. Querying, filtering, and sorting aren't supported when using this field."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "The search query."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `comments` - Sort the results by number of comments.\n * `date` - Sort the results by date.\n * `duration` - Sort the results by duration.\n * `likes` - Sort the results by number of likes.\n * `plays` - Sort the results by number of plays.\n * `relevant` - Sort the results by relevance.\n"
      },
      {
        "name": "uris",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of video URIs to find. Querying, filtering, and sorting aren't supported when using this field."
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
        "statusCode": "503",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}",
    "method": "video",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Delete a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}",
    "method": "video",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Get a specific video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}",
    "method": "video",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Essentials",
    "typeScriptTag": "videosEssentials",
    "description": "Edit a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_rating",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "embed",
        "schema": "object",
        "description": ""
      },
      {
        "name": "embed_domains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_domains_add",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embed_domains_delete",
        "schema": "array",
        "description": ""
      },
      {
        "name": "hide_from_vimeo",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "license",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "password",
        "schema": "string",
        "description": ""
      },
      {
        "name": "privacy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "review_page",
        "schema": "object",
        "description": ""
      },
      {
        "name": "spatial",
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
    "url": "/videos/{video_id}/albums",
    "method": "getAllContShowcases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Showcases",
    "typeScriptTag": "videosShowcases",
    "description": "Get all the showcases that contain a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/albums",
    "method": "addToMultipleShowcases",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Showcases",
    "typeScriptTag": "videosShowcases",
    "description": "Add or remove a video from a list of showcases",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "add",
        "schema": "array",
        "description": ""
      },
      {
        "name": "remove",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/animated_thumbsets",
    "method": "getAllSets",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Animated thumbnails",
    "typeScriptTag": "videosAnimatedThumbnails",
    "description": "Get all the animated thumbnails of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/animated_thumbsets",
    "method": "createSet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Animated thumbnails",
    "typeScriptTag": "videosAnimatedThumbnails",
    "description": "Create a set of animated thumbnails for a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "duration",
        "schema": "number",
        "required": true,
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "number",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/animated_thumbsets/{picture_id}",
    "method": "deleteSet",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Animated thumbnails",
    "typeScriptTag": "videosAnimatedThumbnails",
    "description": "Delete a set of animated thumbnails for a video",
    "parameters": [
      {
        "name": "pictureId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the set of animated thumbnails."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/animated_thumbsets/{picture_id}",
    "method": "specificSetGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Animated thumbnails",
    "typeScriptTag": "videosAnimatedThumbnails",
    "description": "Get a specific set of animated thumbnails",
    "parameters": [
      {
        "name": "pictureId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the set of animated thumbnails."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/animated_thumbsets/{picture_id}/status",
    "method": "getStatusOfSet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Animated thumbnails",
    "typeScriptTag": "videosAnimatedThumbnails",
    "description": "Get the status of a set of animated thumbnails",
    "parameters": [
      {
        "name": "pictureId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the set of animated thumbnails."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/available_albums",
    "method": "listAvailableShowcases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Showcases\\Showcase videos",
    "typeScriptTag": "showcasesShowcaseVideos",
    "description": "Get all the showcases to which the user can add or remove a specific video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/available_channels",
    "method": "getAccessibleChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Channels\\Videos",
    "typeScriptTag": "channelsVideos",
    "description": "Get all the channels to which the user can add or remove a specific video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/categories",
    "method": "getAllVideoCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories\\Videos",
    "typeScriptTag": "categoriesVideos",
    "description": "Get all the categories to which a video belongs",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/categories",
    "method": "setVideoCategories",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Categories\\Videos",
    "typeScriptTag": "categoriesVideos",
    "description": "Suggest categories for a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "category",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/videos/{video_id}/chapters",
    "method": "chapters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Get all the chapters of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/chapters",
    "method": "chapter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Add a chapter to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active_thumbnail_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thumbnail_uris",
        "schema": "array",
        "description": ""
      },
      {
        "name": "timecode",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/chapters/temporary/pictures",
    "method": "generateChapterThumbnail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Generate an upload link or timecode-based thumbnail for an unsaved video chapter",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "timecode",
        "schema": "number",
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
    "url": "/videos/{video_id}/chapters/temporary/pictures/{uid}",
    "method": "getSingleChapterThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Get a single chapter thumbnail associated with an unsaved video chapter",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/chapters/{chapter_id}",
    "method": "chapter",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Delete a chapter",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/chapters/{chapter_id}",
    "method": "chapter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Get a specific chapter",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/chapters/{chapter_id}",
    "method": "chapter",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Edit a chapter",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active_thumbnail_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timecode",
        "schema": "number",
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
    "url": "/videos/{video_id}/chapters/{chapter_id}/pictures",
    "method": "getChapterThumbnails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Get all the thumbnails associated with a saved video chapter",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/chapters/{chapter_id}/pictures",
    "method": "generateChapterThumbnailOrUploadLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Generate an upload link or timecode-based thumbnail for a saved video chapter",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "timecode",
        "schema": "number",
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
    "url": "/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}",
    "method": "deleteChapterThumbnail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Delete a chapter thumbnail",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "uid",
        "schema": "string",
        "required": true,
        "description": "The unique ID of the thumbnail."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}",
    "method": "getSingleChapterThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Get a single chapter thumbnail associated with a saved video chapter",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/chapters/{chapter_id}/pictures/{uid}",
    "method": "setChapterThumbnailActive",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Chapters",
    "typeScriptTag": "videosChapters",
    "description": "Set a chapter thumbnail as active",
    "parameters": [
      {
        "name": "chapterId",
        "schema": "number",
        "required": true,
        "description": "The ID of the chapter."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/comments",
    "method": "comments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Get all the video comments on a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/comments",
    "method": "comment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Add a video comment to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/comments/{comment_id}",
    "method": "comment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Delete a video comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "The ID of the comment."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/videos/{video_id}/comments/{comment_id}",
    "method": "comment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Get a specific video comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "The ID of the comment."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/comments/{comment_id}",
    "method": "comment",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Edit a video comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "The ID of the comment."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/comments/{comment_id}/replies",
    "method": "getAllReplies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Get all the replies to a video comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "The ID of the comment."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/comments/{comment_id}/replies",
    "method": "createReply",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Video comments",
    "typeScriptTag": "videosVideoComments",
    "description": "Add a reply to a video comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "The ID of the comment."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
        "statusCode": "201",
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
    "url": "/videos/{video_id}/credits",
    "method": "getAllCreditedUsersInVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Get all the credited users in a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/credits",
    "method": "addUserCredit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Credit a user in a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "role",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "user_uri",
        "schema": "string",
        "required": true,
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/credits/available_users",
    "method": "users",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Get users who can be credited on a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "query",
        "schema": "string",
        "required": false,
        "description": "The search query to use to filter the results."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by date followed.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/credits/{credit_id}",
    "method": "deleteUserCredit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Delete the credit for a user in a video",
    "parameters": [
      {
        "name": "creditId",
        "schema": "number",
        "required": true,
        "description": "The ID of the credit."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/credits/{credit_id}",
    "method": "getSpecificCreditedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Get a specific credited user in a video",
    "parameters": [
      {
        "name": "creditId",
        "schema": "number",
        "required": true,
        "description": "The ID of the credit."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/credits/{credit_id}",
    "method": "editUserCreditInVideo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Credits",
    "typeScriptTag": "videosCredits",
    "description": "Edit the credit for a user in a video",
    "parameters": [
      {
        "name": "creditId",
        "schema": "number",
        "required": true,
        "description": "The ID of the credit."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "role",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/fragments",
    "method": "fragments",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Fragments",
    "typeScriptTag": "videosFragments",
    "description": "Delete a video's fragments",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/videos/{video_id}/fragments",
    "method": "fragments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Fragments",
    "typeScriptTag": "videosFragments",
    "description": "Get all the fragments for a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/fragments",
    "method": "fragments",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Fragments",
    "typeScriptTag": "videosFragments",
    "description": "Update a video's fragments",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/videos/{video_id}/likes",
    "method": "getUserLikes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Likes\\Essentials",
    "typeScriptTag": "likesEssentials",
    "description": "Get all the users who have liked a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "direction",
        "schema": "string",
        "required": false,
        "description": "The sort direction of the results.\n\nOption descriptions:\n * `asc` - Sort the results in ascending order.\n * `desc` - Sort the results in descending order.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "The way to sort the results.\n\nOption descriptions:\n * `alphabetical` - Sort the results alphabetically.\n * `date` - Sort the results by join date.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/pictures",
    "method": "getAllByVideoId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Get all the thumbnails of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/pictures",
    "method": "addThumbnailToVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Add a video thumbnail",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "time",
        "schema": "number",
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
    "url": "/videos/{video_id}/pictures/{picture_id}",
    "method": "deleteThumbnailFromVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Delete a video thumbnail",
    "parameters": [
      {
        "name": "pictureId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/videos/{video_id}/pictures/{picture_id}",
    "method": "getThumbnailFromVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Get a specific video thumbnail",
    "parameters": [
      {
        "name": "pictureId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/pictures/{picture_id}",
    "method": "editThumbnailImage",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Thumbnails",
    "typeScriptTag": "videosThumbnails",
    "description": "Edit a video thumbnail",
    "parameters": [
      {
        "name": "pictureId",
        "schema": "number",
        "required": true,
        "description": "The ID of the thumbnail."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/presets/{preset_id}",
    "method": "removePresetFromVideo",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Embed Presets\\Videos",
    "typeScriptTag": "embedPresetsVideos",
    "description": "Remove an embed preset from a video",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the embed preset."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/presets/{preset_id}",
    "method": "checkIfPresetAddedToVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Videos",
    "typeScriptTag": "embedPresetsVideos",
    "description": "Check if an embed preset has been added to a video",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the embed preset."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/presets/{preset_id}",
    "method": "addPresetToVideo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Embed Presets\\Videos",
    "typeScriptTag": "embedPresetsVideos",
    "description": "Add an embed preset to a video",
    "parameters": [
      {
        "name": "presetId",
        "schema": "number",
        "required": true,
        "description": "The ID of the embed preset."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": []
  },
  {
    "url": "/videos/{video_id}/privacy/domains",
    "method": "listWhitelistDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Embed privacy",
    "typeScriptTag": "videosEmbedPrivacy",
    "description": "Get all the domains on a video's whitelist",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/privacy/domains/{domain}",
    "method": "removeDomainFromWhitelist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Embed privacy",
    "typeScriptTag": "videosEmbedPrivacy",
    "description": "Remove a domain from a video's whitelist",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "The domain name."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/videos/{video_id}/privacy/domains/{domain}",
    "method": "addDomainToWhitelist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Embed privacy",
    "typeScriptTag": "videosEmbedPrivacy",
    "description": "Add a domain to a video's whitelist",
    "parameters": [
      {
        "name": "domain",
        "schema": "string",
        "required": true,
        "description": "The domain name."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/privacy/users",
    "method": "listAccessibleUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Unlisted videos",
    "typeScriptTag": "videosUnlistedVideos",
    "description": "Get the users who can access an unlisted video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/privacy/users",
    "method": "grantAccessToUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Unlisted videos",
    "typeScriptTag": "videosUnlistedVideos",
    "description": "Permit a list of users to access an unlisted video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/privacy/users/{user_id}",
    "method": "restrictUserAccess",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Unlisted videos",
    "typeScriptTag": "videosUnlistedVideos",
    "description": "Restrict a user from viewing an unlisted video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/videos/{video_id}/privacy/users/{user_id}",
    "method": "grantUserAccess",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Unlisted videos",
    "typeScriptTag": "videosUnlistedVideos",
    "description": "Permit a single user to access an unlisted video",
    "parameters": [
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "The ID of the user."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/sessions/status",
    "method": "getIngestStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Live\\Event sessions",
    "typeScriptTag": "liveEventSessions",
    "description": "Get the ingest status of a one-time live event",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the event."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/tags",
    "method": "getVideoTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Tags",
    "typeScriptTag": "videosTags",
    "description": "Get all the tags of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/tags",
    "method": "addMultiple",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Tags",
    "typeScriptTag": "videosTags",
    "description": "Add a list of tags to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/tags/{word}",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Tags",
    "typeScriptTag": "videosTags",
    "description": "Remove a tag from a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The tag word."
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/tags/{word}",
    "method": "checkTagVideo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Tags",
    "typeScriptTag": "videosTags",
    "description": "Check if a tag has been added to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The tag word."
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
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/tags/{word}",
    "method": "addTagToVideo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Videos\\Tags",
    "typeScriptTag": "videosTags",
    "description": "Add a specific tag to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "word",
        "schema": "string",
        "required": true,
        "description": "The tag word."
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
    "url": "/videos/{video_id}/texttracks",
    "method": "getAllVideoTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Get all the text tracks of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/videos/{video_id}/texttracks",
    "method": "addTextTrack",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Add a text track to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_auto_generated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_edited",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/texttracks/{texttrack_id}",
    "method": "deleteTextTrack",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Delete a text track",
    "parameters": [
      {
        "name": "texttrackId",
        "schema": "number",
        "required": true,
        "description": "The ID of the text track."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
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
    "url": "/videos/{video_id}/texttracks/{texttrack_id}",
    "method": "getSpecificTextTrack",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Get a specific text track",
    "parameters": [
      {
        "name": "texttrackId",
        "schema": "number",
        "required": true,
        "description": "The ID of the text track."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/texttracks/{texttrack_id}",
    "method": "editTextTrack",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Text tracks",
    "typeScriptTag": "videosTextTracks",
    "description": "Edit a text track",
    "parameters": [
      {
        "name": "texttrackId",
        "schema": "number",
        "required": true,
        "description": "The ID of the text track."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
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
    "url": "/videos/{video_id}/timelinethumbnails",
    "method": "addThumbnailToVideo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Embed Presets\\Timeline events",
    "typeScriptTag": "embedPresetsTimelineEvents",
    "description": "Add a timeline event thumbnail to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/videos/{video_id}/timelinethumbnails/{thumbnail_id}",
    "method": "getSingleThumbnail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Embed Presets\\Timeline events",
    "typeScriptTag": "embedPresetsTimelineEvents",
    "description": "Get a timeline event thumbnail",
    "parameters": [
      {
        "name": "thumbnailId",
        "schema": "number",
        "required": true,
        "description": "The ID of the timeline event thumbnail."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/transcripts/{texttrack_id}",
    "method": "transcript",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Transcripts",
    "typeScriptTag": "videosTranscripts",
    "description": "Get transcript segments",
    "parameters": [
      {
        "name": "texttrackId",
        "schema": "number",
        "required": true,
        "description": "The ID of the text track."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/trim",
    "method": "trim",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Nondestructive trimming",
    "typeScriptTag": "videosNondestructiveTrimming",
    "description": "Get the status of a video's trim operation",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/trim",
    "method": "trim",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Nondestructive trimming",
    "typeScriptTag": "videosNondestructiveTrimming",
    "description": "Start a trim operation for a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "trim_end",
        "schema": "string",
        "description": ""
      },
      {
        "name": "trim_start",
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
    "url": "/videos/{video_id}/versions",
    "method": "getAllVideoVersions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Versions",
    "typeScriptTag": "videosVersions",
    "description": "Get all the versions of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/versions",
    "method": "addVideoVersion",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Videos\\Versions",
    "typeScriptTag": "videosVersions",
    "description": "Add a version to a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "upload",
        "schema": "object",
        "required": true,
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
    "url": "/videos/{video_id}/versions/{version_id}",
    "method": "deleteVideoVersion",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Videos\\Versions",
    "typeScriptTag": "videosVersions",
    "description": "Delete a video version",
    "parameters": [
      {
        "name": "versionId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video version."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/versions/{version_id}",
    "method": "getSpecificVersion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Versions",
    "typeScriptTag": "videosVersions",
    "description": "Get a specific video version",
    "parameters": [
      {
        "name": "versionId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video version."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
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
    "url": "/videos/{video_id}/versions/{version_id}",
    "method": "editVideoVersion",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Videos\\Versions",
    "typeScriptTag": "videosVersions",
    "description": "Edit a video version",
    "parameters": [
      {
        "name": "versionId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video version."
      },
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_current",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/videos/{video_id}/videos",
    "method": "getRelatedVideos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Videos\\Recommendations",
    "typeScriptTag": "videosRecommendations",
    "description": "Get all the related videos of a video",
    "parameters": [
      {
        "name": "videoId",
        "schema": "number",
        "required": true,
        "description": "The ID of the video."
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "The attribute by which to filter the results.\n\nOption descriptions:\n * `related` - Return related videos.\n"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "The page number of the results to show."
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "The number of items to show on each page of results, up to a maximum of 100."
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
    "url": "/webinars/{webinar_id}",
    "method": "getSpecificWebinar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webinar\\Essentials",
    "typeScriptTag": "webinarEssentials",
    "description": "Get a specific webinar",
    "parameters": [
      {
        "name": "webinarId",
        "schema": "string",
        "required": true,
        "description": "The ID of the webinar."
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
  }
]
    }
      language="TypeScript"
      apiTitle="Vimeo API"
      apiBaseUrl="https://api.vimeo.com"
      apiVersion="3.4"
      endpoints={269}
      sdkMethods={484}
      schemas={76}
      parameters={1763}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vimeo/openapi.yaml"
    />
  );
}
  