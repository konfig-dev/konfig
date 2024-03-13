import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SlackWebTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="slack-web-typescript-sdk"
      metaDescription="Slack is a popular messaging platform designed for teams and workplaces. It offers real-time messaging, file sharing, and collaboration tools to help teams communicate and work together effectively. Users can create channels for different topics, send direct messages, and integrate with other apps for seamless workflow management."
      company="Slack"
      serviceName="Web"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/logo.png"
      clientNameCamelCase="slackWeb"
      homepage="slack.dev"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/favicon.png"
      contactUrl="https://api.slack.com/support"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["collaboration","messaging","automation"]}
      methods={[
  {
    "url": "/admin.apps.approve",
    "method": "approveAppInstallation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.apps",
    "typeScriptTag": "adminApps",
    "description": "Approve an app for installation on a workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.apps:write`",
        "example": "TOKEN"
      },
      {
        "name": "app_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "request_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.apps.approved.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.apps.approved",
    "typeScriptTag": "adminAppsApproved",
    "description": "List approved apps for an org or workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.apps:read`",
        "example": "TOKEN"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enterpriseId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.apps.requests.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.apps.requests",
    "typeScriptTag": "adminAppsRequests",
    "description": "List app requests for a team/workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.apps:read`",
        "example": "TOKEN"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.apps.restrict",
    "method": "restrictApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.apps",
    "typeScriptTag": "adminApps",
    "description": "Restrict an app for installation on a workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.apps:write`",
        "example": "TOKEN"
      },
      {
        "name": "app_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "request_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.apps.restricted.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.apps.restricted",
    "typeScriptTag": "adminAppsRestricted",
    "description": "List restricted apps for an org or workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.apps:read`",
        "example": "TOKEN"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enterpriseId",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.conversations.archive",
    "method": "archiveChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Archive a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.archive"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.archive"
      }
    ]
  },
  {
    "url": "/admin.conversations.convertToPrivate",
    "method": "convertToPrivateChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Convert a public channel to a private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.convertToPrivate"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.convertToPrivate"
      }
    ]
  },
  {
    "url": "/admin.conversations.create",
    "method": "createChannelBasedConversation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Create a public or private channel-based conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_private",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "org_wide",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.create"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.create"
      }
    ]
  },
  {
    "url": "/admin.conversations.delete",
    "method": "deleteChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Delete a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.delete"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.delete"
      }
    ]
  },
  {
    "url": "/admin.conversations.disconnectShared",
    "method": "disconnectSharedChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Disconnect a connected channel from one or more workspaces.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "leaving_team_ids",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.disconnectShared"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.disconnectShared"
      }
    ]
  },
  {
    "url": "/admin.conversations.ekm.listOriginalConnectedChannelInfo",
    "method": "listOriginalConnectedChannelInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.conversations.ekm",
    "typeScriptTag": "adminConversationsEkm",
    "description": "List all disconnected channels—i.e., channels that were once connected to other workspaces and then disconnected—and the corresponding original channel IDs for key revocation with EKM.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:read`",
        "example": "TOKEN"
      },
      {
        "name": "channelIds",
        "schema": "string",
        "description": "A comma-separated list of channels to filter to."
      },
      {
        "name": "teamIds",
        "schema": "string",
        "description": "A comma-separated list of the workspaces to which the channels you would like returned belong."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.conversations.getConversationPrefs",
    "method": "getConversationPrefs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Get conversation preferences for a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:read`",
        "example": "TOKEN"
      },
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The channel to get preferences for.",
        "example": "CHANNEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.getConversationPrefs"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.getConversationPrefs"
      }
    ]
  },
  {
    "url": "/admin.conversations.getTeams",
    "method": "getTeamsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Get all the workspaces a given public or private channel is connected to within this Enterprise org.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:read`",
        "example": "TOKEN"
      },
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "The channel to determine connected workspaces within the organization for.",
        "example": "CHANNEL_ID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.getTeams"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.getTeams"
      }
    ]
  },
  {
    "url": "/admin.conversations.invite",
    "method": "inviteUserToChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Invite a user to a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "user_ids",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_IDS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.invite"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.invite"
      }
    ]
  },
  {
    "url": "/admin.conversations.rename",
    "method": "renameChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Rename a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
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
        "description": "Schema for successful response of admin.conversations.rename"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.rename"
      }
    ]
  },
  {
    "url": "/admin.conversations.restrictAccess.addGroup",
    "method": "addGroupIdpGroups",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations.restrictAccess",
    "typeScriptTag": "adminConversationsRestrictAccess",
    "description": "Add an allowlist of IDP groups for accessing a channel",
    "parameters": [
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUP_ID"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.conversations.restrictAccess.listGroups",
    "method": "listGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.conversations.restrictAccess",
    "typeScriptTag": "adminConversationsRestrictAccess",
    "description": "List all IDP Groups linked to a channel",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:read`",
        "example": "TOKEN"
      },
      {
        "name": "channelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "The workspace where the channel exists. This argument is required for channels only tied to one workspace, and optional for channels that are shared across an organization."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.conversations.restrictAccess.removeGroup",
    "method": "removeIdpGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations.restrictAccess",
    "typeScriptTag": "adminConversationsRestrictAccess",
    "description": "Remove a linked IDP group linked from a private channel",
    "parameters": [
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "group_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GROUP_ID"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.conversations.search",
    "method": "searchChannels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Search for public or private channels in an Enterprise organization.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamIds",
        "schema": "string",
        "description": "Comma separated string of team IDs, signifying the workspaces to search through."
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Name of the the channel to query by."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of items to be returned. Must be between 1 - 20 both inclusive. Default is 10."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page."
      },
      {
        "name": "searchChannelTypes",
        "schema": "string",
        "description": "The type of channel to include or exclude in the search. For example `private` will search private channels, while `private_exclude` will exclude them. For a full list of types, check the [Types section](https://slack.dev)."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Possible values are `relevant` (search ranking based on what we think is closest), `name` (alphabetical), `member_count` (number of users in the channel), and `created` (date channel was created). You can optionally pair this with the `sort_dir` arg to change how it is sorted "
      },
      {
        "name": "sortDir",
        "schema": "string",
        "description": "Sort direction. Possible values are `asc` for ascending order like (1, 2, 3) or (a, b, c), and `desc` for descending order like (3, 2, 1) or (c, b, a)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.search"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.search"
      }
    ]
  },
  {
    "url": "/admin.conversations.setConversationPrefs",
    "method": "setConversationPrefs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Set the posting permissions for a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "prefs",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREFS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.setConversationPrefs"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.setConversationPrefs"
      }
    ]
  },
  {
    "url": "/admin.conversations.setTeams",
    "method": "setTeamsWorkspaceConnection",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Set the workspaces in an Enterprise grid org that connect to a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      },
      {
        "name": "org_channel",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "target_team_ids",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.conversations.unarchive",
    "method": "unarchiveChannel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.conversations",
    "typeScriptTag": "adminConversations",
    "description": "Unarchive a public or private channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.conversations:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of admin.conversations.unarchive"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from admin.conversations.unarchive"
      }
    ]
  },
  {
    "url": "/admin.emoji.add",
    "method": "addEmoji",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.emoji",
    "typeScriptTag": "adminEmoji",
    "description": "Add an emoji.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.emoji.addAlias",
    "method": "aliasAdd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.emoji",
    "typeScriptTag": "adminEmoji",
    "description": "Add an emoji alias.",
    "parameters": [
      {
        "name": "alias_for",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALIAS_FOR"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.emoji.list",
    "method": "listEnterpriseEmoji",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.emoji",
    "typeScriptTag": "adminEmoji",
    "description": "List emoji for an Enterprise Grid organization.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:read`",
        "example": "TOKEN"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.emoji.remove",
    "method": "removeEnterpriseEmoji",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.emoji",
    "typeScriptTag": "adminEmoji",
    "description": "Remove an emoji across an Enterprise Grid organization",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.emoji.rename",
    "method": "renameEmoji",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.emoji",
    "typeScriptTag": "adminEmoji",
    "description": "Rename an emoji.",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "new_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_NAME"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.inviteRequests.approve",
    "method": "approveRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.inviteRequests",
    "typeScriptTag": "adminInviteRequests",
    "description": "Approve a workspace invite request.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.invites:write`",
        "example": "TOKEN"
      },
      {
        "name": "invite_request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVITE_REQUEST_ID"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.inviteRequests.approved.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.inviteRequests.approved",
    "typeScriptTag": "adminInviteRequestsApproved",
    "description": "List all approved workspace invite requests.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.invites:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "ID for the workspace where the invite requests were made."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Value of the `next_cursor` field sent as part of the previous API response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.inviteRequests.denied.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.inviteRequests.denied",
    "typeScriptTag": "adminInviteRequestsDenied",
    "description": "List all denied workspace invite requests.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.invites:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "ID for the workspace where the invite requests were made."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Value of the `next_cursor` field sent as part of the previous api response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results that will be returned by the API on each invocation. Must be between 1 - 1000 both inclusive"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.inviteRequests.deny",
    "method": "denyRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.inviteRequests",
    "typeScriptTag": "adminInviteRequests",
    "description": "Deny a workspace invite request.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.invites:write`",
        "example": "TOKEN"
      },
      {
        "name": "invite_request_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INVITE_REQUEST_ID"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.inviteRequests.list",
    "method": "listPendingWorkspaceInviteRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.inviteRequests",
    "typeScriptTag": "adminInviteRequests",
    "description": "List all pending workspace invite requests.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.invites:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "ID for the workspace where the invite requests were made."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Value of the `next_cursor` field sent as part of the previous API response"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results that will be returned by the API on each invocation. Must be between 1 - 1000, both inclusive"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.admins.list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.teams.admins",
    "typeScriptTag": "adminTeamsAdmins",
    "description": "List all of the admins on a given workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:read`",
        "example": "TOKEN"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page."
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.create",
    "method": "createEnterpriseTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.teams",
    "typeScriptTag": "adminTeams",
    "description": "Create an Enterprise team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:write`",
        "example": "TOKEN"
      },
      {
        "name": "team_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_discoverability",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "team_domain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_DOMAIN"
      },
      {
        "name": "team_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_NAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.list",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.teams",
    "typeScriptTag": "adminTeams",
    "description": "List all teams on an Enterprise organization",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:read`",
        "example": "TOKEN"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 100 both inclusive."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.owners.list",
    "method": "listOwners",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.teams.owners",
    "typeScriptTag": "adminTeamsOwners",
    "description": "List all of the owners on a given workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Must be between 1 - 1000 both inclusive."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.settings.info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.teams.settings",
    "typeScriptTag": "adminTeamsSettings",
    "description": "Fetch information about settings in a workspace",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.settings.setDefaultChannels",
    "method": "setDefaultChannels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.teams.settings",
    "typeScriptTag": "adminTeamsSettings",
    "description": "Set the default channels of a workspace.",
    "parameters": [
      {
        "name": "channel_ids",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_IDS"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.settings.setDescription",
    "method": "setDescription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.teams.settings",
    "typeScriptTag": "adminTeamsSettings",
    "description": "Set the description of a given workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:write`",
        "example": "TOKEN"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.settings.setDiscoverability",
    "method": "setDiscoverabilityOfWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.teams.settings",
    "typeScriptTag": "adminTeamsSettings",
    "description": "An API method that allows admins to set the discoverability of a given workspace",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:write`",
        "example": "TOKEN"
      },
      {
        "name": "discoverability",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISCOVERABILITY"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.settings.setIcon",
    "method": "setIcon",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.teams.settings",
    "typeScriptTag": "adminTeamsSettings",
    "description": "Sets the icon of a workspace.",
    "parameters": [
      {
        "name": "image_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMAGE_URL"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.teams.settings.setName",
    "method": "setName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.teams.settings",
    "typeScriptTag": "adminTeamsSettings",
    "description": "Set the name of a given workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:write`",
        "example": "TOKEN"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.usergroups.addChannels",
    "method": "addDefaultChannels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.usergroups",
    "typeScriptTag": "adminUsergroups",
    "description": "Add one or more default channels to an IDP group.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_ids",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_IDS"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usergroup_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.usergroups.addTeams",
    "method": "associateDefaultWorkspaces",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.usergroups",
    "typeScriptTag": "adminUsergroups",
    "description": "Associate one or more default workspaces with an organization-wide IDP group.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.teams:write`",
        "example": "TOKEN"
      },
      {
        "name": "auto_provision",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team_ids",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_IDS"
      },
      {
        "name": "usergroup_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.usergroups.listChannels",
    "method": "listChannelsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.usergroups",
    "typeScriptTag": "adminUsergroups",
    "description": "List the channels linked to an org-level IDP group (user group).",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.usergroups:read`",
        "example": "TOKEN"
      },
      {
        "name": "usergroupId",
        "schema": "string",
        "required": true,
        "description": "ID of the IDP group to list default channels for.",
        "example": "USERGROUP_ID"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "ID of the the workspace."
      },
      {
        "name": "includeNumMembers",
        "schema": "boolean",
        "description": "Flag to include or exclude the count of members per channel."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.usergroups.removeChannels",
    "method": "removeChannels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.usergroups",
    "typeScriptTag": "adminUsergroups",
    "description": "Remove one or more default channels from an org-level IDP group (user group).",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_ids",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_IDS"
      },
      {
        "name": "usergroup_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.assign",
    "method": "addWorkspaceUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Add an Enterprise user to a workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_ids",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_restricted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_ultra_restricted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.invite",
    "method": "inviteUserToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Invite a user to a workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel_ids",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL_IDS"
      },
      {
        "name": "custom_message",
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
      },
      {
        "name": "guest_expiration_ts",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_restricted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_ultra_restricted",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "real_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resend",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.list",
    "method": "listWorkspaceUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "List users on a workspace",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:read`",
        "example": "TOKEN"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "The ID (`T1234`) of the workspace.",
        "example": "TEAM_ID"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Set `cursor` to `next_cursor` returned by the previous call to list items in the next page."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit for how many users to be retrieved per page"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.remove",
    "method": "removeUserFromWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Remove a user from a workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.session.invalidate",
    "method": "invalidateSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users.session",
    "typeScriptTag": "adminUsersSession",
    "description": "Invalidate a single session for a user by session_id",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "session_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.session.reset",
    "method": "resetSessions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users.session",
    "typeScriptTag": "adminUsersSession",
    "description": "Wipes all valid sessions on all devices for a given user",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "mobile_only",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      },
      {
        "name": "web_only",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.setAdmin",
    "method": "setAdminUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Set an existing guest, regular user, or owner to be an admin user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.setExpiration",
    "method": "setExpirationGuest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Set an expiration for a guest user",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "expiration_ts",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.setOwner",
    "method": "setWorkspaceOwner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Set an existing guest, regular user, or admin user to be a workspace owner.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/admin.users.setRegular",
    "method": "setRegularUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "admin.users",
    "typeScriptTag": "adminUsers",
    "description": "Set an existing guest user, admin user, or owner to be a regular user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin.users:write`",
        "example": "TOKEN"
      },
      {
        "name": "team_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEAM_ID"
      },
      {
        "name": "user_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/api.test",
    "method": "test",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "api",
    "typeScriptTag": "api",
    "description": "Checks API calling code.",
    "parameters": [
      {
        "name": "error",
        "schema": "string",
        "description": "Error response to return"
      },
      {
        "name": "foo",
        "schema": "string",
        "description": "example property to return"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response api.test method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response api.test method"
      }
    ]
  },
  {
    "url": "/apps.event.authorizations.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.event.authorizations",
    "typeScriptTag": "appsEventAuthorizations",
    "description": "Get a list of authorizations for the given event context. Each authorization represents an app installation that the event is visible to.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `authorizations:read`",
        "example": "TOKEN"
      },
      {
        "name": "eventContext",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT_CONTEXT"
      },
      {
        "name": "cursor",
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
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/apps.permissions.info",
    "method": "listPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.permissions",
    "typeScriptTag": "appsPermissions",
    "description": "Returns list of permissions this app has on a team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `none`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from apps.permissions.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from apps.permissions.info method"
      }
    ]
  },
  {
    "url": "/apps.permissions.request",
    "method": "additionalScopesRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.permissions",
    "typeScriptTag": "appsPermissions",
    "description": "Allows an app to request additional scopes",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "scopes",
        "schema": "string",
        "required": true,
        "description": "A comma separated list of scopes to request for",
        "example": "SCOPES"
      },
      {
        "name": "triggerId",
        "schema": "string",
        "required": true,
        "description": "Token used to trigger the permissions API",
        "example": "TRIGGER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from apps.permissions.request method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from apps.permissions.request method"
      }
    ]
  },
  {
    "url": "/apps.permissions.resources.list",
    "method": "getResourcesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.permissions.resources",
    "typeScriptTag": "appsPermissionsResources",
    "description": "Returns list of resource grants this app has on a team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response apps.permissions.resources.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from apps.permissions.resources.list method"
      }
    ]
  },
  {
    "url": "/apps.permissions.scopes.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.permissions.scopes",
    "typeScriptTag": "appsPermissionsScopes",
    "description": "Returns list of scopes this app has on a team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response api.permissions.scopes.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from apps.permissions.scopes.list method"
      }
    ]
  },
  {
    "url": "/apps.permissions.users.list",
    "method": "listUserGrants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.permissions.users",
    "typeScriptTag": "appsPermissionsUsers",
    "description": "Returns list of user grants and corresponding scopes this app has on a team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/apps.permissions.users.request",
    "method": "requestModal",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps.permissions.users",
    "typeScriptTag": "appsPermissionsUsers",
    "description": "Enables an app to trigger a permissions modal to grant an app access to a user access scope.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "scopes",
        "schema": "string",
        "required": true,
        "description": "A comma separated list of user scopes to request for",
        "example": "SCOPES"
      },
      {
        "name": "triggerId",
        "schema": "string",
        "required": true,
        "description": "Token used to trigger the request",
        "example": "TRIGGER_ID"
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "The user this scope is being requested for",
        "example": "USER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/apps.uninstall",
    "method": "uninstall",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "apps",
    "typeScriptTag": "apps",
    "description": "Uninstalls your app from a workspace.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `none`"
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": "Issued when you created your application."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from apps.uninstall method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from apps.uninstall method"
      }
    ]
  },
  {
    "url": "/auth.revoke",
    "method": "revoke",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "auth",
    "typeScriptTag": "auth",
    "description": "Revokes a token.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "test",
        "schema": "boolean",
        "description": "Setting this parameter to `1` triggers a _testing mode_ where the specified token will not actually be revoked."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from auth.revoke method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from auth.revoke method"
      }
    ]
  },
  {
    "url": "/auth.test",
    "method": "test",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "auth",
    "typeScriptTag": "auth",
    "description": "Checks authentication & identity.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response auth.test method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response auth.test method"
      }
    ]
  },
  {
    "url": "/bots.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bots",
    "typeScriptTag": "bots",
    "description": "Gets information about a bot user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users:read`",
        "example": "TOKEN"
      },
      {
        "name": "bot",
        "schema": "string",
        "description": "Bot user to get info on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from bots.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from bots.info method"
      }
    ]
  },
  {
    "url": "/calls.add",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calls",
    "typeScriptTag": "calls",
    "description": "Registers a new Call.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `calls:write`",
        "example": "TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_start",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "desktop_app_join_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_display_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_unique_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_UNIQUE_ID"
      },
      {
        "name": "join_url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOIN_URL"
      },
      {
        "name": "users",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/calls.end",
    "method": "end",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calls",
    "typeScriptTag": "calls",
    "description": "Ends a Call.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `calls:write`",
        "example": "TOKEN"
      },
      {
        "name": "duration",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/calls.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "calls",
    "typeScriptTag": "calls",
    "description": "Returns information about a Call.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `calls:read`",
        "example": "TOKEN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "`id` of the Call returned by the [`calls.add`](https://slack.dev) method.",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/calls.participants.add",
    "method": "addNewParticipant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calls.participants",
    "typeScriptTag": "callsParticipants",
    "description": "Registers new participants added to a Call.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `calls:write`",
        "example": "TOKEN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "users",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/calls.participants.remove",
    "method": "registerRemoved",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calls.participants",
    "typeScriptTag": "callsParticipants",
    "description": "Registers participants removed from a Call.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `calls:write`",
        "example": "TOKEN"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "users",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/calls.update",
    "method": "update",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calls",
    "typeScriptTag": "calls",
    "description": "Updates information about a Call.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `calls:write`",
        "example": "TOKEN"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "desktop_app_join_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "join_url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/chat.delete",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Deletes a message.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `chat:write`"
      },
      {
        "name": "as_user",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ts",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of chat.delete method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.delete method"
      }
    ]
  },
  {
    "url": "/chat.deleteScheduledMessage",
    "method": "deleteScheduledMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Deletes a pending scheduled message from the queue.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `chat:write`",
        "example": "TOKEN"
      },
      {
        "name": "as_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "scheduled_message_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEDULED_MESSAGE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from chat.deleteScheduledMessage method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.deleteScheduledMessage method"
      }
    ]
  },
  {
    "url": "/chat.getPermalink",
    "method": "getPermalink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Retrieve a permalink URL for a specific extant message",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "The ID of the conversation or channel containing the message",
        "example": "CHANNEL"
      },
      {
        "name": "messageTs",
        "schema": "string",
        "required": true,
        "description": "A message's `ts` value, uniquely identifying it within a channel",
        "example": "MESSAGE_TS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response chat.getPermalink"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.getPermalink method"
      }
    ]
  },
  {
    "url": "/chat.meMessage",
    "method": "meMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Share a me message into a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `chat:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from chat.meMessage method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.meMessage method"
      }
    ]
  },
  {
    "url": "/chat.postEphemeral",
    "method": "postEphemeral",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Sends an ephemeral message to a user in a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `chat:write`",
        "example": "TOKEN"
      },
      {
        "name": "as_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blocks",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "icon_emoji",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "icon_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "link_names",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parse",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "thread_ts",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USER"
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from chat.postEphemeral method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.postEphemeral method"
      }
    ]
  },
  {
    "url": "/chat.postMessage",
    "method": "postMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Sends a message to a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `chat:write`",
        "example": "TOKEN"
      },
      {
        "name": "as_user",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blocks",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "icon_emoji",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "icon_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "link_names",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "mrkdwn",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parse",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reply_broadcast",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "thread_ts",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "unfurl_links",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "unfurl_media",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of chat.postMessage method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response chat.postMessage method"
      }
    ]
  },
  {
    "url": "/chat.scheduleMessage",
    "method": "scheduleMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Schedules a message to be sent to a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `chat:write`"
      },
      {
        "name": "as_user",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blocks",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "link_names",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parse",
        "schema": "string",
        "description": ""
      },
      {
        "name": "post_at",
        "schema": "string",
        "description": ""
      },
      {
        "name": "reply_broadcast",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thread_ts",
        "schema": "number",
        "description": ""
      },
      {
        "name": "unfurl_links",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "unfurl_media",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of chat.scheduleMessage method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response chat.scheduleMessage method"
      }
    ]
  },
  {
    "url": "/chat.scheduledMessages.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "chat.scheduledMessages",
    "typeScriptTag": "chatScheduledMessages",
    "description": "Returns a list of scheduled messages.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `none`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "The channel of the scheduled messages"
      },
      {
        "name": "latest",
        "schema": "number",
        "description": "A UNIX timestamp of the latest value in the time range"
      },
      {
        "name": "oldest",
        "schema": "number",
        "description": "A UNIX timestamp of the oldest value in the time range"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Maximum number of original entries to return."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "For pagination purposes, this is the `cursor` value returned from a previous call to `chat.scheduledmessages.list` indicating where you want to start this call from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from chat.scheduledMessages.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.scheduledMessages.list method"
      }
    ]
  },
  {
    "url": "/chat.unfurl",
    "method": "unfurl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Provide custom unfurl behavior for user-posted URLs",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `links:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TS"
      },
      {
        "name": "unfurls",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_auth_message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "user_auth_required",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "user_auth_url",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from chat.unfurl method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from chat.unfurl method"
      }
    ]
  },
  {
    "url": "/chat.update",
    "method": "update",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "chat",
    "typeScriptTag": "chat",
    "description": "Updates a message.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `chat:write`",
        "example": "TOKEN"
      },
      {
        "name": "as_user",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blocks",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "link_names",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "parse",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ts",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response of chat.update method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response chat.update method"
      }
    ]
  },
  {
    "url": "/conversations.archive",
    "method": "archive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Archives a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response conversations.archive method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.archive method"
      }
    ]
  },
  {
    "url": "/conversations.close",
    "method": "close",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Closes a direct message or multi-person direct message.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response conversations.close method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.close method"
      }
    ]
  },
  {
    "url": "/conversations.create",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Initiates a public or private channel-based conversation",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "is_private",
        "schema": "boolean",
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
        "description": "Schema for successful response conversations.create method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.create method"
      }
    ]
  },
  {
    "url": "/conversations.history",
    "method": "history",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Fetches a conversation's history of messages and events.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:history`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Conversation ID to fetch history for."
      },
      {
        "name": "latest",
        "schema": "number",
        "description": "End of time range of messages to include in results."
      },
      {
        "name": "oldest",
        "schema": "number",
        "description": "Start of time range of messages to include in results."
      },
      {
        "name": "inclusive",
        "schema": "boolean",
        "description": "Include messages with latest or oldest timestamp in results only when either timestamp is specified."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.history method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.history method"
      }
    ]
  },
  {
    "url": "/conversations.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Retrieve information about a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:read`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Conversation ID to learn more about"
      },
      {
        "name": "includeLocale",
        "schema": "boolean",
        "description": "Set this to `true` to receive the locale for this conversation. Defaults to `false`"
      },
      {
        "name": "includeNumMembers",
        "schema": "boolean",
        "description": "Set to `true` to include the member count for the specified conversation. Defaults to `false`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response conversations.info"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.info method"
      }
    ]
  },
  {
    "url": "/conversations.invite",
    "method": "invite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Invites users to a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "users",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.invite method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.invite method"
      }
    ]
  },
  {
    "url": "/conversations.join",
    "method": "join",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Joins an existing conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `channels:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.join method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.join method"
      }
    ]
  },
  {
    "url": "/conversations.kick",
    "method": "kick",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Removes a user from a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response conversations.kick method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response conversations.kick method"
      }
    ]
  },
  {
    "url": "/conversations.leave",
    "method": "leave",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Leaves a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.leave method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.leave method"
      }
    ]
  },
  {
    "url": "/conversations.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Lists all channels in a Slack team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:read`"
      },
      {
        "name": "excludeArchived",
        "schema": "boolean",
        "description": "Set to `true` to exclude archived channels from the list"
      },
      {
        "name": "types",
        "schema": "string",
        "description": "Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.list method"
      }
    ]
  },
  {
    "url": "/conversations.mark",
    "method": "mark",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Sets the read cursor in a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ts",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response conversations.mark method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.mark method"
      }
    ]
  },
  {
    "url": "/conversations.members",
    "method": "members",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Retrieve members of a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:read`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "ID of the conversation to retrieve members for"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response conversations.members method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response conversations.members method"
      }
    ]
  },
  {
    "url": "/conversations.open",
    "method": "open",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Opens or resumes a direct message or multi-person direct message.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "return_im",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "users",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.open method when opening channels, ims, mpims"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.open method"
      }
    ]
  },
  {
    "url": "/conversations.rename",
    "method": "rename",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Renames a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
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
        "description": "Schema for successful response from conversations.rename method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.rename method"
      }
    ]
  },
  {
    "url": "/conversations.replies",
    "method": "replies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Retrieve a thread of messages posted to a conversation",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:history`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Conversation ID to fetch thread from."
      },
      {
        "name": "ts",
        "schema": "number",
        "description": "Unique identifier of a thread's parent message. `ts` must be the timestamp of an existing message with 0 or more replies. If there are no replies then just the single message referenced by `ts` will return - it is just an ordinary, unthreaded message."
      },
      {
        "name": "latest",
        "schema": "number",
        "description": "End of time range of messages to include in results."
      },
      {
        "name": "oldest",
        "schema": "number",
        "description": "Start of time range of messages to include in results."
      },
      {
        "name": "inclusive",
        "schema": "boolean",
        "description": "Include messages with latest or oldest timestamp in results only when either timestamp is specified."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.replies method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.replies method"
      }
    ]
  },
  {
    "url": "/conversations.setPurpose",
    "method": "setPurpose",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Sets the purpose for a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purpose",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.setPurpose method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.setPurpose method"
      }
    ]
  },
  {
    "url": "/conversations.setTopic",
    "method": "setTopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Sets the topic for a conversation.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "topic",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.setTopic method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.setTopic method"
      }
    ]
  },
  {
    "url": "/conversations.unarchive",
    "method": "unarchive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "conversations",
    "typeScriptTag": "conversations",
    "description": "Reverses conversation archival.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:write`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from conversations.unarchive method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from conversations.unarchive method"
      }
    ]
  },
  {
    "url": "/dialog.open",
    "method": "open",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dialog",
    "typeScriptTag": "dialog",
    "description": "Open a dialog with a user",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "dialog",
        "schema": "string",
        "required": true,
        "description": "The dialog definition. This must be a JSON-encoded string.",
        "example": "DIALOG"
      },
      {
        "name": "triggerId",
        "schema": "string",
        "required": true,
        "description": "Exchange a trigger to post to the user.",
        "example": "TRIGGER_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from dialog.open method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from dialog.open method"
      }
    ]
  },
  {
    "url": "/dnd.endDnd",
    "method": "endDnd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dnd",
    "typeScriptTag": "dnd",
    "description": "Ends the current user's Do Not Disturb session immediately.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `dnd:write`",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from dnd.endDnd method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from dnd.endDnd method"
      }
    ]
  },
  {
    "url": "/dnd.endSnooze",
    "method": "endSnooze",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dnd",
    "typeScriptTag": "dnd",
    "description": "Ends the current user's snooze mode immediately.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `dnd:write`",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from dnd.endSnooze method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from dnd.endSnooze method"
      }
    ]
  },
  {
    "url": "/dnd.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dnd",
    "typeScriptTag": "dnd",
    "description": "Retrieves a user's current Do Not Disturb status.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `dnd:read`"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "User to fetch status for (defaults to current user)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from dnd.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from dnd.info method"
      }
    ]
  },
  {
    "url": "/dnd.setSnooze",
    "method": "setSnooze",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "dnd",
    "typeScriptTag": "dnd",
    "description": "Turns on Do Not Disturb mode for the current user, or changes its duration.",
    "parameters": [
      {
        "name": "num_minutes",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NUM_MINUTES"
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from dnd.setSnooze method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from dnd.setSnooze method"
      }
    ]
  },
  {
    "url": "/dnd.teamInfo",
    "method": "teamInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "dnd",
    "typeScriptTag": "dnd",
    "description": "Retrieves the Do Not Disturb status for up to 50 users on a team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `dnd:read`"
      },
      {
        "name": "users",
        "schema": "string",
        "description": "Comma-separated list of users to fetch Do Not Disturb status for"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/emoji.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "emoji",
    "typeScriptTag": "emoji",
    "description": "Lists custom emoji for a team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `emoji:read`",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.comments.delete",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files.comments",
    "typeScriptTag": "filesComments",
    "description": "Deletes an existing comment on a file.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `files:write:user`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response files.comments.delete method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response files.comments.delete method"
      }
    ]
  },
  {
    "url": "/files.delete",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Deletes a file.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `files:write:user`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response files.delete method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response files.delete method"
      }
    ]
  },
  {
    "url": "/files.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Gets information about a file.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `files:read`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": "Specify a file by providing its ID."
      },
      {
        "name": "count",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Parameter for pagination. File comments are paginated for a single file. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection of comments. See [pagination](https://slack.dev) for more details."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from files.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from files.info method"
      }
    ]
  },
  {
    "url": "/files.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "List for a team, in a channel, or from a user with applied filters.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `files:read`"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "Filter files created by a single user."
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter files appearing in a specific channel, indicated by its ID."
      },
      {
        "name": "tsFrom",
        "schema": "number",
        "description": "Filter files created after this timestamp (inclusive)."
      },
      {
        "name": "tsTo",
        "schema": "number",
        "description": "Filter files created before this timestamp (inclusive)."
      },
      {
        "name": "types",
        "schema": "string",
        "description": "Filter files by type ([see below](https://slack.dev)). You can pass multiple values in the types argument, like `types=spaces,snippets`.The default value is `all`, which does not filter the list."
      },
      {
        "name": "count",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "showFilesHiddenByLimit",
        "schema": "boolean",
        "description": "Show truncated file info for files hidden due to being too old, and the team who owns the file being over the file limit."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from files.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from files.list method"
      }
    ]
  },
  {
    "url": "/files.remote.add",
    "method": "addFromRemote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files.remote",
    "typeScriptTag": "filesRemote",
    "description": "Adds a file from a remote service",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filetype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "indexable_file_contents",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preview_image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.remote.info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files.remote",
    "typeScriptTag": "filesRemote",
    "description": "Retrieve information about a remote file added to Slack",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `remote_files:read`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": "Specify a file by providing its ID."
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "Creator defined GUID for the file."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.remote.list",
    "method": "listRemoteFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files.remote",
    "typeScriptTag": "filesRemote",
    "description": "Retrieve information about a remote file added to Slack",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `remote_files:read`"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Filter files appearing in a specific channel, indicated by its ID."
      },
      {
        "name": "tsFrom",
        "schema": "number",
        "description": "Filter files created after this timestamp (inclusive)."
      },
      {
        "name": "tsTo",
        "schema": "number",
        "description": "Filter files created before this timestamp (inclusive)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.remote.remove",
    "method": "deleteFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files.remote",
    "typeScriptTag": "filesRemote",
    "description": "Remove a remote file.",
    "parameters": [
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.remote.share",
    "method": "shareRemoteFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files.remote",
    "typeScriptTag": "filesRemote",
    "description": "Share a remote file into a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `remote_files:share`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": "Specify a file registered with Slack by providing its ID. Either this field or `external_id` or both are required."
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "The globally unique identifier (GUID) for the file, as set by the app registering the file with Slack.  Either this field or `file` or both are required."
      },
      {
        "name": "channels",
        "schema": "string",
        "description": "Comma-separated list of channel IDs where the file will be shared."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.remote.update",
    "method": "updateRemoteFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files.remote",
    "typeScriptTag": "filesRemote",
    "description": "Updates an existing remote file.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filetype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "indexable_file_contents",
        "schema": "string",
        "description": ""
      },
      {
        "name": "preview_image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/files.revokePublicURL",
    "method": "revokePublicUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Revokes public/external sharing access for a file",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `files:write:user`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from files.revokePublicURL method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from files.revokePublicURL method"
      }
    ]
  },
  {
    "url": "/files.sharedPublicURL",
    "method": "sharedPublicUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Enables a file for public/external sharing.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `files:write:user`"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from files.sharedPublicURL method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from files.sharedPublicURL method"
      }
    ]
  },
  {
    "url": "/files.upload",
    "method": "upload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Uploads or creates a file.",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "channels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filename",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filetype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initial_comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "thread_ts",
        "schema": "number",
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response files.upload method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response files.upload method"
      }
    ]
  },
  {
    "url": "/migration.exchange",
    "method": "exchange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "migration",
    "typeScriptTag": "migration",
    "description": "For Enterprise Grid workspaces, map local user IDs to global user IDs",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `tokens.basic`",
        "example": "TOKEN"
      },
      {
        "name": "users",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of user ids, up to 400 per request",
        "example": "USERS"
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": "Specify team_id starts with `T` in case of Org Token"
      },
      {
        "name": "toOld",
        "schema": "boolean",
        "description": "Specify `true` to convert `W` global user IDs to workspace-specific `U` IDs. Defaults to `false`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from migration.exchange method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from migration.exchange method"
      }
    ]
  },
  {
    "url": "/oauth.access",
    "method": "access",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Exchanges a temporary OAuth verifier code for an access token.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "code",
        "schema": "string",
        "description": "The `code` param returned via the OAuth callback."
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "description": "This must match the originally submitted URI (if one was sent)."
      },
      {
        "name": "singleChannel",
        "schema": "boolean",
        "description": "Request the user to add your app only to a single channel. Only valid with a [legacy workspace app](https://api.slack.com/legacy-workspace-apps)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/oauth.token",
    "method": "token",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "Exchanges a temporary OAuth verifier code for a workspace token.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "code",
        "schema": "string",
        "description": "The `code` param returned via the OAuth callback."
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "description": "This must match the originally submitted URI (if one was sent)."
      },
      {
        "name": "singleChannel",
        "schema": "boolean",
        "description": "Request the user to add your app only to a single channel."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/oauth.v2.access",
    "method": "exchangeToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth.v2",
    "typeScriptTag": "oauthV2",
    "description": "Exchanges a temporary OAuth verifier code for an access token.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "description": "Issued when you created your application."
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The `code` param returned via the OAuth callback.",
        "example": "CODE"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "description": "This must match the originally submitted URI (if one was sent)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/pins.add",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pins",
    "typeScriptTag": "pins",
    "description": "Pins an item to a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `pins:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from pins.add method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from pins.add method"
      }
    ]
  },
  {
    "url": "/pins.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "pins",
    "typeScriptTag": "pins",
    "description": "Lists items pinned to a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `pins:read`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "Channel to get pinned items for.",
        "example": "CHANNEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from pins.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from pins.list method"
      }
    ]
  },
  {
    "url": "/pins.remove",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "pins",
    "typeScriptTag": "pins",
    "description": "Un-pins an item from a channel.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `pins:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from pins.remove method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from pins.remove method"
      }
    ]
  },
  {
    "url": "/reactions.add",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reactions",
    "typeScriptTag": "reactions",
    "description": "Adds a reaction to an item.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `reactions:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHANNEL"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMESTAMP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reactions.add method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reactions.add method"
      }
    ]
  },
  {
    "url": "/reactions.get",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reactions",
    "typeScriptTag": "reactions",
    "description": "Gets reactions for an item.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `reactions:read`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": "Channel where the message to get reactions for was posted."
      },
      {
        "name": "file",
        "schema": "string",
        "description": "File to get reactions for."
      },
      {
        "name": "fileComment",
        "schema": "string",
        "description": "File comment to get reactions for."
      },
      {
        "name": "full",
        "schema": "boolean",
        "description": "If true always return the complete reaction list."
      },
      {
        "name": "timestamp",
        "schema": "string",
        "description": "Timestamp of the message to get reactions for."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reactions.get method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reactions.get method"
      }
    ]
  },
  {
    "url": "/reactions.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reactions",
    "typeScriptTag": "reactions",
    "description": "Lists reactions made by a user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `reactions:read`",
        "example": "TOKEN"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "Show reactions made by this user. Defaults to the authed user."
      },
      {
        "name": "full",
        "schema": "boolean",
        "description": "If true always return the complete reaction list."
      },
      {
        "name": "count",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more details."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reactions.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reactions.list method"
      }
    ]
  },
  {
    "url": "/reactions.remove",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reactions",
    "typeScriptTag": "reactions",
    "description": "Removes a reaction from an item.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `reactions:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_comment",
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
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reactions.remove method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reactions.remove method"
      }
    ]
  },
  {
    "url": "/reminders.add",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reminders",
    "typeScriptTag": "reminders",
    "description": "Creates a reminder.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `reminders:write`",
        "example": "TOKEN"
      },
      {
        "name": "text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEXT"
      },
      {
        "name": "time",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIME"
      },
      {
        "name": "user",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reminders.add method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reminders.add method"
      }
    ]
  },
  {
    "url": "/reminders.complete",
    "method": "complete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reminders",
    "typeScriptTag": "reminders",
    "description": "Marks a reminder as complete.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `reminders:write`"
      },
      {
        "name": "reminder",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reminders.complete method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reminders.complete method"
      }
    ]
  },
  {
    "url": "/reminders.delete",
    "method": "delete",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reminders",
    "typeScriptTag": "reminders",
    "description": "Deletes a reminder.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `reminders:write`"
      },
      {
        "name": "reminder",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reminders.delete method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reminders.delete method"
      }
    ]
  },
  {
    "url": "/reminders.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reminders",
    "typeScriptTag": "reminders",
    "description": "Gets information about a reminder.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `reminders:read`"
      },
      {
        "name": "reminder",
        "schema": "string",
        "description": "The ID of the reminder"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reminders.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reminders.info method"
      }
    ]
  },
  {
    "url": "/reminders.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reminders",
    "typeScriptTag": "reminders",
    "description": "Lists all reminders created by or for a given user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `reminders:read`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from reminders.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from reminders.list method"
      }
    ]
  },
  {
    "url": "/rtm.connect",
    "method": "connect",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "rtm",
    "typeScriptTag": "rtm",
    "description": "Starts a Real Time Messaging session.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `rtm:stream`",
        "example": "TOKEN"
      },
      {
        "name": "batchPresenceAware",
        "schema": "boolean",
        "description": "Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events. See [batch presence](https://slack.dev)."
      },
      {
        "name": "presenceSub",
        "schema": "boolean",
        "description": "Only deliver presence events when requested by subscription. See [presence subscriptions](https://slack.dev)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from rtm.connect method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from rtm.connect method"
      }
    ]
  },
  {
    "url": "/search.messages",
    "method": "messages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Searches for messages matching a query.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `search:read`",
        "example": "TOKEN"
      },
      {
        "name": "count",
        "schema": "integer",
        "description": "Pass the number of results you want per \"page\". Maximum of `100`."
      },
      {
        "name": "highlight",
        "schema": "boolean",
        "description": "Pass a value of `true` to enable query highlight markers (see below)."
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "Search query.",
        "example": "QUERY"
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "Return matches sorted by either `score` or `timestamp`."
      },
      {
        "name": "sortDir",
        "schema": "string",
        "description": "Change sort direction to ascending (`asc`) or descending (`desc`)."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/stars.add",
    "method": "add",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "stars",
    "typeScriptTag": "stars",
    "description": "Adds a star to an item.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `stars:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from stars.add method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from stars.add method"
      }
    ]
  },
  {
    "url": "/stars.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "stars",
    "typeScriptTag": "stars",
    "description": "Lists stars for a user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `stars:read`"
      },
      {
        "name": "count",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Parameter for pagination. Set `cursor` equal to the `next_cursor` attribute returned by the previous request's `response_metadata`. This parameter is optional, but pagination is mandatory: the default value simply fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more details."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from stars.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from stars.list method"
      }
    ]
  },
  {
    "url": "/stars.remove",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "stars",
    "typeScriptTag": "stars",
    "description": "Removes a star from an item.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `stars:write`",
        "example": "TOKEN"
      },
      {
        "name": "channel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_comment",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from stars.remove method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from stars.remove method"
      }
    ]
  },
  {
    "url": "/team.accessLogs",
    "method": "accessLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Gets the access logs for the current team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin`",
        "example": "TOKEN"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "End of time range of logs to include in results (inclusive)."
      },
      {
        "name": "count",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from team.accessLogs method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from team.accessLogs method"
      }
    ]
  },
  {
    "url": "/team.billableInfo",
    "method": "billableInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Gets billable users information for the current team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin`",
        "example": "TOKEN"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "A user to retrieve the billable information for. Defaults to all users."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/team.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Gets information about the current team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `team:read`",
        "example": "TOKEN"
      },
      {
        "name": "team",
        "schema": "string",
        "description": "Team to get info on, if omitted, will return information about the current team. Will only return team that the authenticated token is allowed to see through external shared channels"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from team.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from team.info method"
      }
    ]
  },
  {
    "url": "/team.integrationLogs",
    "method": "integrationLogs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team",
    "typeScriptTag": "team",
    "description": "Gets the integration logs for the current team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `admin`",
        "example": "TOKEN"
      },
      {
        "name": "appId",
        "schema": "string",
        "description": "Filter logs to this Slack app. Defaults to all logs."
      },
      {
        "name": "changeType",
        "schema": "string",
        "description": "Filter logs with this change type. Defaults to all logs."
      },
      {
        "name": "count",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "serviceId",
        "schema": "string",
        "description": "Filter logs to this service. Defaults to all logs."
      },
      {
        "name": "user",
        "schema": "string",
        "description": "Filter logs generated by this user’s actions. Defaults to all logs."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from team.integrationLogs method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from team.integrationLogs method"
      }
    ]
  },
  {
    "url": "/team.profile.get",
    "method": "getProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "team.profile",
    "typeScriptTag": "teamProfile",
    "description": "Retrieve a team's profile.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users.profile:read`",
        "example": "TOKEN"
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": "Filter by visibility."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from team.profile.get method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from team.profile.get method"
      }
    ]
  },
  {
    "url": "/usergroups.create",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "usergroups",
    "typeScriptTag": "usergroups",
    "description": "Create a User Group",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channels",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "handle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "include_count",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
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
        "description": "Schema for successful response from usergroups.create method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.create method"
      }
    ]
  },
  {
    "url": "/usergroups.disable",
    "method": "disable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "usergroups",
    "typeScriptTag": "usergroups",
    "description": "Disable an existing User Group",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "include_count",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usergroup",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from usergroups.disable method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.disable method"
      }
    ]
  },
  {
    "url": "/usergroups.enable",
    "method": "enable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "usergroups",
    "typeScriptTag": "usergroups",
    "description": "Enable a User Group",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "include_count",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usergroup",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from usergroups.enable method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.enable method"
      }
    ]
  },
  {
    "url": "/usergroups.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "usergroups",
    "typeScriptTag": "usergroups",
    "description": "List all User Groups for a team",
    "parameters": [
      {
        "name": "includeUsers",
        "schema": "boolean",
        "description": "Include the list of users for each User Group."
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:read`",
        "example": "TOKEN"
      },
      {
        "name": "includeCount",
        "schema": "boolean",
        "description": "Include the number of users in each User Group."
      },
      {
        "name": "includeDisabled",
        "schema": "boolean",
        "description": "Include disabled User Groups."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from usergroups.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.list method"
      }
    ]
  },
  {
    "url": "/usergroups.update",
    "method": "update",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "usergroups",
    "typeScriptTag": "usergroups",
    "description": "Update an existing User Group",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "channels",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "handle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "include_count",
        "schema": "boolean",
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
        "name": "usergroup",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from usergroups.update method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.update method"
      }
    ]
  },
  {
    "url": "/usergroups.users.list",
    "method": "listAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "usergroups.users",
    "typeScriptTag": "usergroupsUsers",
    "description": "List all users in a User Group",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:read`",
        "example": "TOKEN"
      },
      {
        "name": "includeDisabled",
        "schema": "boolean",
        "description": "Allow results that involve disabled User Groups."
      },
      {
        "name": "usergroup",
        "schema": "string",
        "required": true,
        "description": "The encoded ID of the User Group to update.",
        "example": "USERGROUP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from usergroups.users.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.users.list method"
      }
    ]
  },
  {
    "url": "/usergroups.users.update",
    "method": "updateList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "usergroups.users",
    "typeScriptTag": "usergroupsUsers",
    "description": "Update the list of users for a User Group",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `usergroups:write`",
        "example": "TOKEN"
      },
      {
        "name": "include_count",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "usergroup",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERGROUP"
      },
      {
        "name": "users",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from usergroups.users.update method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from usergroups.users.update method"
      }
    ]
  },
  {
    "url": "/users.conversations",
    "method": "conversations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List conversations the calling user may access.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `conversations:read`"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "Browse conversations by a specific user ID's membership. Non-public channels are restricted to those where the calling user shares membership."
      },
      {
        "name": "types",
        "schema": "string",
        "description": "Mix and match channel types by providing a comma-separated list of any combination of `public_channel`, `private_channel`, `mpim`, `im`"
      },
      {
        "name": "excludeArchived",
        "schema": "boolean",
        "description": "Set to `true` to exclude archived channels from the list"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the list hasn't been reached. Must be an integer no larger than 1000."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.conversations method. Returned conversation objects do not include `num_members` or `is_member`"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.conversations method"
      }
    ]
  },
  {
    "url": "/users.deletePhoto",
    "method": "deletePhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Delete the user profile photo",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.deletePhoto method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.deletePhoto method"
      }
    ]
  },
  {
    "url": "/users.getPresence",
    "method": "getPresence",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Gets user presence information.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users:read`",
        "example": "TOKEN"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "User to get presence info on. Defaults to the authed user."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Generated from users.getPresence with shasum e7251aec575d8863f9e0eb38663ae9dc26655f65"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response users.getPresence method"
      }
    ]
  },
  {
    "url": "/users.identity",
    "method": "identity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get a user's identity.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `identity.basic`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.identity method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.identity method"
      }
    ]
  },
  {
    "url": "/users.info",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Gets information about a user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users:read`",
        "example": "TOKEN"
      },
      {
        "name": "includeLocale",
        "schema": "boolean",
        "description": "Set this to `true` to receive the locale for this user. Defaults to `false`"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "User to get info on"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.info method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.info method"
      }
    ]
  },
  {
    "url": "/users.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Lists all users in a Slack team.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "description": "Authentication token. Requires scope: `users:read`"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of items to return. Fewer than the requested number of items may be returned, even if the end of the users list hasn't been reached. Providing no `limit` value will result in Slack attempting to deliver you the entire result set. If the collection is too large you may experience `limit_required` or HTTP 500 errors."
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "Paginate through collections of data by setting the `cursor` parameter to a `next_cursor` attribute returned by a previous request's `response_metadata`. Default value fetches the first \"page\" of the collection. See [pagination](https://slack.dev) for more detail."
      },
      {
        "name": "includeLocale",
        "schema": "boolean",
        "description": "Set this to `true` to receive the locale for users. Defaults to `false`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.list method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.list method"
      }
    ]
  },
  {
    "url": "/users.lookupByEmail",
    "method": "lookupByEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Find a user with an email address.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users:read.email`",
        "example": "TOKEN"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "An email address belonging to a user in the workspace",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.lookupByEmail method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.lookupByEmail method"
      }
    ]
  },
  {
    "url": "/users.profile.get",
    "method": "getProfileInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users.profile",
    "typeScriptTag": "usersProfile",
    "description": "Retrieves a user's profile information.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users.profile:read`",
        "example": "TOKEN"
      },
      {
        "name": "includeLabels",
        "schema": "boolean",
        "description": "Include labels for each ID in custom profile fields"
      },
      {
        "name": "user",
        "schema": "string",
        "description": "User to retrieve profile info for"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.profile.get method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.profile.get method"
      }
    ]
  },
  {
    "url": "/users.profile.set",
    "method": "setProfileInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users.profile",
    "typeScriptTag": "usersProfile",
    "description": "Set the profile information for a user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users.profile:write`",
        "example": "TOKEN"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.profile.set method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.profile.set method"
      }
    ]
  },
  {
    "url": "/users.setActive",
    "method": "setActive",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Marked a user as active. Deprecated and non-functional.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users:write`",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.setActive method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.setActive method"
      }
    ]
  },
  {
    "url": "/users.setPhoto",
    "method": "setPhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Set the user profile photo",
    "parameters": [
      {
        "name": "crop_w",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "crop_x",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "crop_y",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "image",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.setPhoto method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.setPhoto method"
      }
    ]
  },
  {
    "url": "/users.setPresence",
    "method": "setPresence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Manually sets user presence.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `users:write`",
        "example": "TOKEN"
      },
      {
        "name": "presence",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRESENCE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Schema for successful response from users.setPresence method"
      },
      {
        "statusCode": "default",
        "description": "Schema for error response from users.setPresence method"
      }
    ]
  },
  {
    "url": "/views.open",
    "method": "open",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "views",
    "typeScriptTag": "views",
    "description": "Open a view for a user.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "triggerId",
        "schema": "string",
        "required": true,
        "description": "Exchange a trigger to post to the user.",
        "example": "TRIGGER_ID"
      },
      {
        "name": "view",
        "schema": "string",
        "required": true,
        "description": "A [view payload](https://slack.dev). This must be a JSON-encoded string.",
        "example": "VIEW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/views.publish",
    "method": "publish",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "views",
    "typeScriptTag": "views",
    "description": "Publish a static view for a User.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "`id` of the user you want publish a view to.",
        "example": "USER_ID"
      },
      {
        "name": "view",
        "schema": "string",
        "required": true,
        "description": "A [view payload](https://slack.dev). This must be a JSON-encoded string.",
        "example": "VIEW"
      },
      {
        "name": "hash",
        "schema": "string",
        "description": "A string that represents view state to protect against possible race conditions."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/views.push",
    "method": "push",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "views",
    "typeScriptTag": "views",
    "description": "Push a view onto the stack of a root view.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "triggerId",
        "schema": "string",
        "required": true,
        "description": "Exchange a trigger to post to the user.",
        "example": "TRIGGER_ID"
      },
      {
        "name": "view",
        "schema": "string",
        "required": true,
        "description": "A [view payload](https://slack.dev). This must be a JSON-encoded string.",
        "example": "VIEW"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/views.update",
    "method": "update",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "views",
    "typeScriptTag": "views",
    "description": "Update an existing view.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `none`",
        "example": "TOKEN"
      },
      {
        "name": "viewId",
        "schema": "string",
        "description": "A unique identifier of the view to be updated. Either `view_id` or `external_id` is required."
      },
      {
        "name": "externalId",
        "schema": "string",
        "description": "A unique identifier of the view set by the developer. Must be unique for all views on a team. Max length of 255 characters. Either `view_id` or `external_id` is required."
      },
      {
        "name": "view",
        "schema": "string",
        "description": "A [view object](https://slack.dev). This must be a JSON-encoded string."
      },
      {
        "name": "hash",
        "schema": "string",
        "description": "A string that represents view state to protect against possible race conditions."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/workflows.stepCompleted",
    "method": "stepCompleted",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workflows",
    "typeScriptTag": "workflows",
    "description": "Indicate that an app's step in a workflow completed execution.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `workflow.steps:execute`",
        "example": "TOKEN"
      },
      {
        "name": "workflowStepExecuteId",
        "schema": "string",
        "required": true,
        "description": "Context identifier that maps to the correct workflow step execution.",
        "example": "WORKFLOW_STEP_EXECUTE_ID"
      },
      {
        "name": "outputs",
        "schema": "string",
        "description": "Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](https://slack.dev) array from your `workflow_step` object."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/workflows.stepFailed",
    "method": "stepFailed",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workflows",
    "typeScriptTag": "workflows",
    "description": "Indicate that an app's step in a workflow failed to execute.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `workflow.steps:execute`",
        "example": "TOKEN"
      },
      {
        "name": "workflowStepExecuteId",
        "schema": "string",
        "required": true,
        "description": "Context identifier that maps to the correct workflow step execution.",
        "example": "WORKFLOW_STEP_EXECUTE_ID"
      },
      {
        "name": "error",
        "schema": "string",
        "required": true,
        "description": "A JSON-based object with a `message` property that should contain a human readable error message.",
        "example": "ERROR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  },
  {
    "url": "/workflows.updateStep",
    "method": "updateStep",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "workflows",
    "typeScriptTag": "workflows",
    "description": "Update the configuration for a workflow extension step.",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "Authentication token. Requires scope: `workflow.steps:execute`",
        "example": "TOKEN"
      },
      {
        "name": "workflowStepEditId",
        "schema": "string",
        "required": true,
        "description": "A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`.",
        "example": "WORKFLOW_STEP_EDIT_ID"
      },
      {
        "name": "inputs",
        "schema": "string",
        "description": "A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](https://slack.dev)."
      },
      {
        "name": "outputs",
        "schema": "string",
        "description": "An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed."
      },
      {
        "name": "stepName",
        "schema": "string",
        "description": "An optional field that can be used to override the step name that is shown in the Workflow Builder."
      },
      {
        "name": "stepImageUrl",
        "schema": "string",
        "description": "An optional field that can be used to override app image that is shown in the Workflow Builder."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This method either only returns a brief _OK_ response or a verbose schema is not available for this method."
      },
      {
        "statusCode": "default",
        "description": "This method either only returns a brief _not OK_ response or a verbose schema is not available for this method."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Slack Web API"
      apiBaseUrl="https://slack.com/api"
      apiVersion="1.7.0"
      endpoints={174}
      sdkMethods={174}
      schemas={486}
      parameters={671}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slack/web/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slack/web/openapi.yaml"
      
    />
  );
}
  