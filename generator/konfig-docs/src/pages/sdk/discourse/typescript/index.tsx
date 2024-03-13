import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DiscourseTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="discourse-typescript-sdk"
      metaDescription="Discourse is a modern forum software designed for community engagement and discussion. It offers a user-friendly interface, powerful moderation tools, and extensive customization options. Discourse fosters healthy conversations, promotes user participation, and provides a platform for sharing knowledge and ideas across diverse communities."
      company="Discourse"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/logo.png"
      clientNameCamelCase="discourse"
      homepage="discourse.org"
      lastUpdated={new Date("2024-03-13T01:40:02.817Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["collaboration","media","forum","community_engagement","discussion","moderation","customization","conversations","user_participation","knowledge_sharing","ideas"]}
      methods={[
  {
    "url": "/admin/backups.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Backups",
    "typeScriptTag": "backups",
    "description": "List backups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/backups.json",
    "method": "createBackupRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Backups",
    "typeScriptTag": "backups",
    "description": "Create backup",
    "parameters": [
      {
        "name": "with_uploads",
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
      }
    ]
  },
  {
    "url": "/admin/backups/{filename}",
    "method": "downloadBackup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Backups",
    "typeScriptTag": "backups",
    "description": "Download backup",
    "parameters": [
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
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
        "description": "success response"
      }
    ]
  },
  {
    "url": "/admin/backups/{filename}",
    "method": "sendDownloadBackupEmail",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Backups",
    "typeScriptTag": "backups",
    "description": "Send download backup email",
    "parameters": [
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "success response"
      }
    ]
  },
  {
    "url": "/admin/badges.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Badges",
    "typeScriptTag": "badges",
    "description": "List badges",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/badges.json",
    "method": "createBadge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Badges",
    "typeScriptTag": "badges",
    "description": "Create badge",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "badge_type_id",
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
    "url": "/admin/badges/{id}.json",
    "method": "deleteByIdJson",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Badges",
    "typeScriptTag": "badges",
    "description": "Delete badge",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "success response"
      }
    ]
  },
  {
    "url": "/admin/badges/{id}.json",
    "method": "updateBadgeByIdJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Badges",
    "typeScriptTag": "badges",
    "description": "Update badge",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "badge_type_id",
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
    "url": "/categories.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Retrieves a list of categories",
    "parameters": [
      {
        "name": "includeSubcategories",
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
    "url": "/categories.json",
    "method": "createCategoryRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Creates a category",
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
        "required": false,
        "description": "",
        "example": "49d9e9"
      },
      {
        "name": "text_color",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "f0fcfd"
      },
      {
        "name": "parent_category_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_badges",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "topic_featured_links_allowed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "search_priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "form_template_ids",
        "schema": "array",
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
    "url": "/categories/{id}.json",
    "method": "updateCategoryByIdJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Updates a category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
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
        "required": false,
        "description": "",
        "example": "49d9e9"
      },
      {
        "name": "text_color",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "f0fcfd"
      },
      {
        "name": "parent_category_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "allow_badges",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "topic_featured_links_allowed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "permissions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "search_priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "form_template_ids",
        "schema": "array",
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
    "url": "/c/{slug}/{id}.json",
    "method": "listTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "List topics",
    "parameters": [
      {
        "name": "slug",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SLUG"
      },
      {
        "name": "id",
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
    "url": "/c/{id}/show.json",
    "method": "getCategoryByIdJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Show category",
    "parameters": [
      {
        "name": "id",
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
    "url": "/admin/groups.json",
    "method": "createNewGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Create a group",
    "parameters": [
      {
        "name": "group",
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
    "url": "/admin/groups/{id}.json",
    "method": "deleteGroupByIdJson",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Delete a group",
    "parameters": [
      {
        "name": "id",
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
    "url": "/groups/{id}.json",
    "method": "getGroupById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Get a group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Use group name instead of id",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{id}.json",
    "method": "updateGroupByIdJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Update a group",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "group",
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
    "url": "/groups/{id}/members.json",
    "method": "removeMembers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Remove group members",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "usernames",
        "schema": "string",
        "description": "",
        "example": "username1,username2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{id}/members.json",
    "method": "listMembersJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List group members",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Use group name instead of id",
        "example": "name"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups/{id}/members.json",
    "method": "addMembersToGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "Add group members",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "usernames",
        "schema": "string",
        "description": "",
        "example": "username1,username2"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/groups.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Groups",
    "typeScriptTag": "groups",
    "description": "List groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/invites.json",
    "method": "createInvite",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "Create an invite",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "not-a-user-yet@example.com"
      },
      {
        "name": "skip_email",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "custom_message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_redemptions_allowed",
        "schema": "integer",
        "description": "",
        "example": 5,
        "default": 1
      },
      {
        "name": "topic_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "string",
        "description": "",
        "example": "42,43"
      },
      {
        "name": "group_names",
        "schema": "string",
        "description": "",
        "example": "foo,bar"
      },
      {
        "name": "expires_at",
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
    "url": "/invites/create-multiple.json",
    "method": "createMultipleInvites",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Invites",
    "typeScriptTag": "invites",
    "description": "Create multiple invites",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": [
          "not-a-user-yet-1@example.com",
          "not-a-user-yet-2@example.com"
        ]
      },
      {
        "name": "skip_email",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "custom_message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "max_redemptions_allowed",
        "schema": "integer",
        "description": "",
        "example": 5,
        "default": 1
      },
      {
        "name": "topic_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "group_ids",
        "schema": "string",
        "description": "",
        "example": "42,43"
      },
      {
        "name": "group_names",
        "schema": "string",
        "description": "",
        "example": "foo,bar"
      },
      {
        "name": "expires_at",
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
    "url": "/notifications.json",
    "method": "getUserNotifications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Get the notifications that belong to the current user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/notifications/mark-read.json",
    "method": "markAsRead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notifications",
    "typeScriptTag": "notifications",
    "description": "Mark notifications as read",
    "parameters": [
      {
        "name": "id",
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
    "url": "/posts.json",
    "method": "listLatestPostsAcrossTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "List latest posts across topics",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Load posts with an id lower than this value. Useful for pagination."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/posts.json",
    "method": "createTopicPostMessage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Creates a new topic, a new post, or a private message",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "raw",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RAW"
      },
      {
        "name": "topic_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "target_recipients",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "blake,sam"
      },
      {
        "name": "target_usernames",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "archetype",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "private_message"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reply_to_post_number",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "embed_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
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
    "url": "/posts/{id}.json",
    "method": "deleteSinglePost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "delete a single post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "force_destroy",
        "schema": "boolean",
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "success response"
      }
    ]
  },
  {
    "url": "/posts/{id}.json",
    "method": "getSinglePostLikes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Retrieve a single post",
    "parameters": [
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
        "description": ""
      }
    ]
  },
  {
    "url": "/posts/{id}.json",
    "method": "updateSinglePostJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Update a single post",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "post",
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
    "url": "/posts/{id}/replies.json",
    "method": "listRepliesToPost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "List replies to a post",
    "parameters": [
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
        "description": ""
      }
    ]
  },
  {
    "url": "/posts/{id}/locked.json",
    "method": "lockPostAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Lock a post from being edited",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "locked",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCKED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/post_actions.json",
    "method": "likePostAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posts",
    "typeScriptTag": "posts",
    "description": "Like a post and other actions",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "post_action_type_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "flag_topic",
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
    "url": "/topics/private-messages/{username}.json",
    "method": "listForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Private Messages",
    "typeScriptTag": "privateMessages",
    "description": "Get a list of private messages for a user",
    "parameters": [
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
    "url": "/topics/private-messages-sent/{username}.json",
    "method": "listSentForUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Private Messages",
    "typeScriptTag": "privateMessages",
    "description": "Get a list of private messages sent for a user",
    "parameters": [
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
    "url": "/search.json",
    "method": "termResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for a term",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The query string needs to be url encoded and is made up of the following options:\n- Search term. This is just a string. Usually it would be the first item in the query.\n- `@<username>`: Use the `@` followed by the username to specify posts by this user.\n- `#<category>`: Use the `#` followed by the category slug to search within this category.\n- `tags:`: `api,solved` or for posts that have all the specified tags `api+solved`.\n- `before:`: `yyyy-mm-dd`\n- `after:`: `yyyy-mm-dd`\n- `order:`: `latest`, `likes`, `views`, `latest_topic`\n- `assigned:`: username (without `@`)\n- `in:`: `title`, `likes`, `personal`, `messages`, `seen`, `unseen`, `posted`, `created`, `watching`, `tracking`, `bookmarks`, `assigned`, `unassigned`, `first`, `pinned`, `wiki`\n- `with:`: `images`\n- `status:`: `open`, `closed`, `public`, `archived`, `noreplies`, `single_user`, `solved`, `unsolved`\n- `group:`: group_name or group_id\n- `group_messages:`: group_name or group_id\n- `min_posts:`: 1\n- `max_posts:`: 10\n- `min_views:`: 1\n- `max_views:`: 10\n\nIf you are using cURL you can use the `-G` and the `--data-urlencode` flags to encode the query:\n\n```\ncurl -i -sS -X GET -G \"http://localhost:4200/search.json\" \\\n--data-urlencode 'q=wordpress @scossar #fun after:2020-01-01'\n```\n",
        "example": "api @blake #support tags:api after:2021-06-04 in:unseen in:open\norder:latest_topic"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
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
    "url": "/site.json",
    "method": "getCategoriesAndSubcategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Site",
    "typeScriptTag": "site",
    "description": "Get site info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag_groups.json",
    "method": "getTagGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get a list of tag groups",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag_groups.json",
    "method": "createTagGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Creates a tag group",
    "parameters": [
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
        "description": ""
      }
    ]
  },
  {
    "url": "/tag_groups/{id}.json",
    "method": "getSingleTagGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get a single tag group",
    "parameters": [
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
        "description": ""
      }
    ]
  },
  {
    "url": "/tag_groups/{id}.json",
    "method": "updateTagGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Update tag group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/tags.json",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get a list of tags",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/tag/{name}.json",
    "method": "getSpecificTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get a specific tag",
    "parameters": [
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
        "description": ""
      }
    ]
  },
  {
    "url": "/t/{id}/posts.json",
    "method": "getSpecificPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Get specific posts from a topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "post_ids[]",
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
    "url": "/t/{id}.json",
    "method": "removeTopicById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Remove a topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
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
        "description": "specific posts"
      }
    ]
  },
  {
    "url": "/t/{id}.json",
    "method": "getSingleTopic",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Get a single topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/t/-/{id}.json",
    "method": "updateTopicByIdJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Update a topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "topic",
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
    "url": "/t/{id}/invite.json",
    "method": "sendInviteToTopic",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Invite to topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "user",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
    "url": "/t/{id}/bookmark.json",
    "method": "updateBookmark",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Bookmark topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
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
        "description": "topic updated"
      }
    ]
  },
  {
    "url": "/t/{id}/status.json",
    "method": "updateStatusOfTopic",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Update the status of a topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "enabled",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENABLED"
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2030-12-31"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/latest.json",
    "method": "getLatestTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Get the latest topics",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "order",
        "schema": "string",
        "description": "Enum: `default`, `created`, `activity`, `views`, `posts`, `category`,\n`likes`, `op_likes`, `posters`"
      },
      {
        "name": "ascending",
        "schema": "string",
        "description": "Defaults to `desc`, add `ascending=true` to sort asc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/top.json",
    "method": "getTopTopicsByPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Get the top topics filtered by period",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "period",
        "schema": "string",
        "description": "Enum: `all`, `yearly`, `quarterly`, `monthly`, `weekly`, `daily`"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/t/{id}/notifications.json",
    "method": "setNotificationLevel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Set notification level",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "notification_level",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATION_LEVEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/t/{id}/change-timestamp.json",
    "method": "updateTimestampJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Update topic timestamp",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "1594291380"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/t/{id}/timer.json",
    "method": "createTopicTimer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Create topic timer",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "time",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "status_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "based_on_last_post",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "category_id",
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
    "url": "/t/external_id/{external_id}.json",
    "method": "getByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Topics",
    "typeScriptTag": "topics",
    "description": "Get topic by external_id",
    "parameters": [
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": "redirects to /t/{topic_id}.json"
      }
    ]
  },
  {
    "url": "/uploads.json",
    "method": "createNewUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Creates an upload",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "user_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "synchronous",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
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
    "url": "/uploads/generate-presigned-put.json",
    "method": "initiateDirectExternalUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Initiates a direct external upload",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMG_2021.jpeg"
      },
      {
        "name": "file_size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4096
      },
      {
        "name": "metadata",
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
    "url": "/uploads/complete-external-upload.json",
    "method": "completeExternalUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Completes a direct external upload",
    "parameters": [
      {
        "name": "unique_identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "66e86218-80d9-4bda-b4d5-2b6def968705"
      },
      {
        "name": "for_private_message",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "true"
      },
      {
        "name": "for_site_setting",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "true"
      },
      {
        "name": "pasted",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/create-multipart.json",
    "method": "createMultipartExternalUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Creates a multipart external upload",
    "parameters": [
      {
        "name": "upload_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPLOAD_TYPE"
      },
      {
        "name": "file_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IMG_2021.jpeg"
      },
      {
        "name": "file_size",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 4096
      },
      {
        "name": "metadata",
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
    "url": "/uploads/batch-presign-multipart-parts.json",
    "method": "generatePresignedUrlsForMultipartParts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Generates batches of presigned URLs for multipart parts",
    "parameters": [
      {
        "name": "part_numbers",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          1,
          2,
          3
        ]
      },
      {
        "name": "unique_identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "66e86218-80d9-4bda-b4d5-2b6def968705"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/abort-multipart.json",
    "method": "abortMultipartUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Abort multipart upload",
    "parameters": [
      {
        "name": "external_upload_identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "84x83tmxy398t3y._Q_z8CoJYVr69bE6D7f8J6Oo0434QquLFoYdGVerWFx9X5HDEI_TP_95c34n853495x35345394.d.ghQ"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/uploads/complete-multipart.json",
    "method": "completeMultipartUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Uploads",
    "typeScriptTag": "uploads",
    "description": "Complete multipart upload",
    "parameters": [
      {
        "name": "unique_identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "66e86218-80d9-4bda-b4d5-2b6def968705"
      },
      {
        "name": "parts",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "part_number": 1,
            "etag": "0c376dcfcc2606f4335bbc732de93344"
          },
          {
            "part_number": 2,
            "etag": "09ert8cfcc2606f4335bbc732de91122"
          }
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user-badges/{username}.json",
    "method": "listUserBadges",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Badges",
    "typeScriptTag": "badges",
    "description": "List badges for a user",
    "parameters": [
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
    "url": "/users.json",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Creates a user",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
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
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "approved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "user_fields[1]",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "external_ids",
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
    "url": "/u/{username}.json",
    "method": "getUserByUsername",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a single user by username",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
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
    "url": "/u/{username}.json",
    "method": "updateUserDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "external_ids",
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
    "url": "/u/by-external/{external_id}.json",
    "method": "getUserByExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user by external_id",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/u/by-external/{provider}/{external_id}.json",
    "method": "getIdentityProviderExternalId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user by identity provider external ID",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-KEY"
      },
      {
        "name": "apiUsername",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "API-USERNAME"
      },
      {
        "name": "provider",
        "schema": "string",
        "required": true,
        "description": "Authentication provider name. Can be found in the provider callback\nURL: `/auth/{provider}/callback`",
        "example": "PROVIDER"
      },
      {
        "name": "externalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/u/{username}/preferences/avatar/pick.json",
    "method": "updateAvatar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update avatar",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "upload_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/u/{username}/preferences/email.json",
    "method": "updateEmailPreferences",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update email",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "email updated"
      }
    ]
  },
  {
    "url": "/u/{username}/preferences/username.json",
    "method": "updatePreferencesJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Update username",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "new_username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_USERNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "username updated"
      }
    ]
  },
  {
    "url": "/directory_items.json",
    "method": "listPublicUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a public list of users",
    "parameters": [
      {
        "name": "period",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERIOD"
      },
      {
        "name": "order",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER"
      },
      {
        "name": "asc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
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
    "url": "/admin/users/{id}.json",
    "method": "deleteUserByIdJson",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "delete_posts",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "block_email",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "block_urls",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "block_ip",
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
    "url": "/admin/users/{id}.json",
    "method": "getUserByIdJson",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a user by id",
    "parameters": [
      {
        "name": "id",
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
    "url": "/admin/users/{id}/activate.json",
    "method": "activateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Activate a user",
    "parameters": [
      {
        "name": "id",
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
    "url": "/admin/users/{id}/deactivate.json",
    "method": "deactivateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Deactivate a user",
    "parameters": [
      {
        "name": "id",
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
    "url": "/admin/users/{id}/suspend.json",
    "method": "suspendByIdJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Suspend a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "suspend_until",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "2121-02-22"
      },
      {
        "name": "reason",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REASON"
      },
      {
        "name": "message",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "post_action",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/users/{id}/silence.json",
    "method": "silenceById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Silence a user",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "silenced_till",
        "schema": "string",
        "description": "",
        "example": "2022-06-01T08:00:00.000Z"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "post_action",
        "schema": "string",
        "description": "",
        "example": "delete"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/admin/users/{id}/anonymize.json",
    "method": "anonymizeByIdJson",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Anonymize a user",
    "parameters": [
      {
        "name": "id",
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
    "url": "/admin/users/{id}/log_out.json",
    "method": "logOutUserAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Log a user out",
    "parameters": [
      {
        "name": "id",
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
    "url": "/user_avatar/{username}/refresh_gravatar.json",
    "method": "refreshGravatarPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Refresh gravatar",
    "parameters": [
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
    "url": "/admin/users/list/{flag}.json",
    "method": "getListOfUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a list of users",
    "parameters": [
      {
        "name": "flag",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FLAG"
      },
      {
        "name": "order",
        "schema": "string",
        "description": ""
      },
      {
        "name": "asc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "showEmails",
        "schema": "boolean",
        "description": "Include user email addresses in response. These requests will\nbe logged in the staff action logs."
      },
      {
        "name": "stats",
        "schema": "boolean",
        "description": "Include user stats information"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Filter to the user with this email address"
      },
      {
        "name": "ip",
        "schema": "string",
        "description": "Filter to users with this IP address"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user_actions.json",
    "method": "listUserActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get a list of user actions",
    "parameters": [
      {
        "name": "offset",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/session/forgot_password.json",
    "method": "sendPasswordResetEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Send password reset email",
    "parameters": [
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOGIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/password-reset/{token}.json",
    "method": "changePasswordAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Change password",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKEN"
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
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
        "description": "success response"
      }
    ]
  },
  {
    "url": "/u/{username}/emails.json",
    "method": "getEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get email addresses belonging to a user",
    "parameters": [
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
  }
]
    }
      language="TypeScript"
      apiTitle="Discourse API Documentation"
      apiBaseUrl="https://{defaultHost}"
      apiVersion="latest"
      endpoints={71}
      sdkMethods={87}
      schemas={120}
      parameters={250}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/discourse/openapi.yaml"
    />
  );
}
  