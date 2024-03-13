import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function ClickUpTypeScriptSdk() {
  return (
    <Sdk
      sdkName="click-up-typescript-sdk"
      metaDescription="ClickUp is a productivity platform that allows teams to manage tasks, documents, goals, and chat all in one place. With customizable features and integrations, ClickUp aims to streamline workflows and improve collaboration within organizations of all sizes."
      company="ClickUp"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/logo.png"
      clientNameCamelCase="clickUp"
      homepage="clickup.com"
      lastUpdated={new Date("2024-03-13T01:35:30.474Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["productivity","collaboration","planning","agile","automation","docs","documentation","okr","goals","gantt","kanban","forms","wikis","roadmap","reporting"]}
      methods={[
  {
    "url": "/task/{task_id}/attachment",
    "method": "uploadFileToTaskAsAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Attachments",
    "typeScriptTag": "attachments",
    "description": "Create Task Attachment",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "attachment",
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
    "url": "/oauth/token",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Get Access Token",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "Oauth app client id",
        "example": "CLIENT_ID"
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "required": true,
        "description": "Oauth app client secret",
        "example": "CLIENT_SECRET"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Code given in redirect url",
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
    "url": "/user",
    "method": "viewAccountDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Get Authorized User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team",
    "method": "getWorkspaceList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Authorization",
    "typeScriptTag": "authorization",
    "description": "Get Authorized Teams (Workspaces)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/checklist",
    "method": "createNewChecklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Checklists",
    "typeScriptTag": "taskChecklists",
    "description": "Create Checklist",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
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
        "description": ""
      }
    ]
  },
  {
    "url": "/checklist/{checklist_id}",
    "method": "removeChecklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task Checklists",
    "typeScriptTag": "taskChecklists",
    "description": "Delete Checklist",
    "parameters": [
      {
        "name": "checklistId",
        "schema": "string",
        "required": true,
        "description": "b8a8-48d8-a0c6-b4200788a683 (uuid)",
        "example": "b955c4dc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/checklist/{checklist_id}",
    "method": "updateChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Task Checklists",
    "typeScriptTag": "taskChecklists",
    "description": "Edit Checklist",
    "parameters": [
      {
        "name": "checklistId",
        "schema": "string",
        "required": true,
        "description": "b8a8-48d8-a0c6-b4200788a683 (uuid)",
        "example": "b955c4dc"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position",
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
    "url": "/checklist/{checklist_id}/checklist_item",
    "method": "addLineItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Checklists",
    "typeScriptTag": "taskChecklists",
    "description": "Create Checklist Item",
    "parameters": [
      {
        "name": "checklistId",
        "schema": "string",
        "required": true,
        "description": "b8a8-48d8-a0c6-b4200788a683 (uuid)",
        "example": "b955c4dc"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignee",
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
    "url": "/checklist/{checklist_id}/checklist_item/{checklist_item_id}",
    "method": "removeChecklistItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task Checklists",
    "typeScriptTag": "taskChecklists",
    "description": "Delete Checklist Item",
    "parameters": [
      {
        "name": "checklistId",
        "schema": "string",
        "required": true,
        "description": "b8a8-48d8-a0c6-b4200788a683 (uuid)",
        "example": "b955c4dc"
      },
      {
        "name": "checklistItemId",
        "schema": "string",
        "required": true,
        "description": "e491-47f5-9fd8-d1dc4cedcc6f (uuid)",
        "example": "21e08dc8"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/checklist/{checklist_id}/checklist_item/{checklist_item_id}",
    "method": "updateChecklistItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Task Checklists",
    "typeScriptTag": "taskChecklists",
    "description": "Edit Checklist Item",
    "parameters": [
      {
        "name": "checklistId",
        "schema": "string",
        "required": true,
        "description": "b8a8-48d8-a0c6-b4200788a683 (uuid)",
        "example": "b955c4dc"
      },
      {
        "name": "checklistItemId",
        "schema": "string",
        "required": true,
        "description": "e491-47f5-9fd8-d1dc4cedcc6f (uuid)",
        "example": "21e08dc8"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resolved",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent",
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
    "url": "/task/{task_id}/comment",
    "method": "getTaskComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get Task Comments",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Enter the `date` of a task comment using Unix time in milliseconds."
      },
      {
        "name": "startId",
        "schema": "string",
        "description": "Enter the Comment `id` of a task comment."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/comment",
    "method": "createNewTaskComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create Task Comment",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "comment_text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT_TEXT"
      },
      {
        "name": "assignee",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "notify_all",
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
    "url": "/view/{view_id}/comment",
    "method": "getViewComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get Chat View Comments",
    "parameters": [
      {
        "name": "viewId",
        "schema": "string",
        "required": true,
        "description": "105 (string)",
        "example": "3c"
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Enter the `date` of a Chat view comment using Unix time in milliseconds."
      },
      {
        "name": "startId",
        "schema": "string",
        "description": "Enter the Comment `id` of a Chat view comment."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/view/{view_id}/comment",
    "method": "createChatViewComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create Chat View Comment",
    "parameters": [
      {
        "name": "viewId",
        "schema": "string",
        "required": true,
        "description": "105 (string)",
        "example": "3c"
      },
      {
        "name": "comment_text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT_TEXT"
      },
      {
        "name": "notify_all",
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
    "url": "/list/{list_id}/comment",
    "method": "getListComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Get List Comments",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 124
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "Enter the `date` of a List info comment using Unix time in milliseconds."
      },
      {
        "name": "startId",
        "schema": "string",
        "description": "Enter the Comment `id` of a List info comment."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/comment",
    "method": "addToListComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Create List Comment",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 124
      },
      {
        "name": "comment_text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT_TEXT"
      },
      {
        "name": "assignee",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "notify_all",
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
    "url": "/comment/{comment_id}",
    "method": "deleteTaskComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Delete Comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 456
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/comment/{comment_id}",
    "method": "updateTaskComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Update Comment",
    "parameters": [
      {
        "name": "commentId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 456
      },
      {
        "name": "comment_text",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT_TEXT"
      },
      {
        "name": "assignee",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "resolved",
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
    "url": "/list/{list_id}/field",
    "method": "getListFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get Accessible Custom Fields",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/field/{field_id}",
    "method": "removeFieldValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Remove Custom Field Value",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "b8a8-48d8-a0c6-b4200788a683 (uuid)",
        "example": "b955c4dc"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/field/{field_id}",
    "method": "setFieldValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Set Custom Field Value",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "Enter the task ID of the task you want to update.",
        "example": "9hv"
      },
      {
        "name": "fieldId",
        "schema": "string",
        "required": true,
        "description": "Enter the universal unique identifier (UUID) of the Custom Field you want to set.",
        "example": "b955c4dc"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by its Custom Task ID, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/dependency",
    "method": "removeDependency",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task Relationships",
    "typeScriptTag": "taskRelationships",
    "description": "Delete Dependency",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "dependsOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "dependencyOf",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/dependency",
    "method": "addDependency",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Relationships",
    "typeScriptTag": "taskRelationships",
    "description": "Add Dependency",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "This is the task which is waiting on or blocking another task.",
        "example": "9hv"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\n\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "depends_on",
        "schema": "string",
        "description": ""
      },
      {
        "name": "depedency_of",
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
    "url": "/task/{task_id}/link/{links_to}",
    "method": "removeLinkBetweenTasks",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Task Relationships",
    "typeScriptTag": "taskRelationships",
    "description": "Delete Task Link",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "linksTo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/link/{links_to}",
    "method": "linkTasks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Relationships",
    "typeScriptTag": "taskRelationships",
    "description": "Add Task Link",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "linksTo",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}/folder",
    "method": "getContentsOf",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Get Folders",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 789
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}/folder",
    "method": "createNewFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Create Folder",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 789
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
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}",
    "method": "removeFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Delete Folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 457
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}",
    "method": "getFolderContent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Get Folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 457
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}",
    "method": "renameFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Folders",
    "typeScriptTag": "folders",
    "description": "Update Folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 457
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
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/goal",
    "method": "getWorkspaceGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Goals",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "includeCompleted",
        "schema": "boolean",
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
    "url": "/team/{team_id}/goal",
    "method": "addNewGoalToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create Goal",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "due_date",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "multiple_owners",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "owners",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/goal/{goal_id}",
    "method": "removeGoal",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete Goal",
    "parameters": [
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "900e-462d-a849-4a216b06d930 (uuid)",
        "example": "e53a033c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/goal/{goal_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Get Goal",
    "parameters": [
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "900e-462d-a849-4a216b06d930 (uuid)",
        "example": "e53a033c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/goal/{goal_id}",
    "method": "updateGoalDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Update Goal",
    "parameters": [
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "900e-462d-a849-4a216b06d930 (uuid)",
        "example": "e53a033c"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "due_date",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "rem_owners",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "add_owners",
        "schema": "array",
        "required": true,
        "description": ""
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
    "url": "/goal/{goal_id}/key_result",
    "method": "addKeyResult",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Create Key Result",
    "parameters": [
      {
        "name": "goalId",
        "schema": "string",
        "required": true,
        "description": "900e-462d-a849-4a216b06d930 (uuid)",
        "example": "e53a033c"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "owners",
        "schema": "array",
        "required": true,
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
        "name": "steps_start",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "steps_end",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UNIT"
      },
      {
        "name": "task_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "list_ids",
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
    "url": "/key_result/{key_result_id}",
    "method": "removeTarget",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Delete Key Result",
    "parameters": [
      {
        "name": "keyResultId",
        "schema": "string",
        "required": true,
        "description": "8480-49bc-8c57-e569747efe93 (uuid)",
        "example": "947d46ed"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/key_result/{key_result_id}",
    "method": "updateKeyResult",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Goals",
    "typeScriptTag": "goals",
    "description": "Edit Key Result",
    "parameters": [
      {
        "name": "keyResultId",
        "schema": "string",
        "required": true,
        "description": "8480-49bc-8c57-e569747efe93 (uuid)",
        "example": "947d46ed"
      },
      {
        "name": "steps_current",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "note",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/guest",
    "method": "inviteToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Invite Guest To Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "can_edit_tags",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "can_see_time_spent",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "can_see_time_estimated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "can_create_views",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "custom_role_id",
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
    "url": "/team/{team_id}/guest/{guest_id}",
    "method": "revokeGuestAccessToWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Remove Guest From Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/guest/{guest_id}",
    "method": "getGuestInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Get Guest",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/guest/{guest_id}",
    "method": "editGuestOnWorkspace",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Edit Guest On Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "can_edit_tags",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "can_see_time_spent",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "can_see_time_estimated",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "can_create_views",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "custom_role_id",
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
    "url": "/task/{task_id}/guest/{guest_id}",
    "method": "revokeAccessToTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Remove Guest From Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "c04"
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "includeShared",
        "schema": "boolean",
        "required": false,
        "description": "Exclude details of items shared with the guest by setting this parameter to `false`. By default this parameter is set to `true`.",
        "example": false
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/guest/{guest_id}",
    "method": "addToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Add Guest To Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "c04"
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "includeShared",
        "schema": "boolean",
        "required": false,
        "description": "Exclude details of items shared with the guest by setting this parameter to `false`. By default this parameter is set to `true`.",
        "example": false
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "permission_level",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION_LEVEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/guest/{guest_id}",
    "method": "removeFromList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Remove Guest From List",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1427
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "includeShared",
        "schema": "boolean",
        "required": false,
        "description": "Exclude details of items shared with the guest by setting this parameter to `false`. By default this parameter is set to `true`.",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/guest/{guest_id}",
    "method": "shareListWith",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Add Guest To List",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1427
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "includeShared",
        "schema": "boolean",
        "required": false,
        "description": "Exclude details of items shared with the guest by setting this parameter to `false`. By default this parameter is set to `true`.",
        "example": false
      },
      {
        "name": "permission_level",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION_LEVEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}/guest/{guest_id}",
    "method": "revokeAccessFromFolder",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Remove Guest From Folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1057
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "includeShared",
        "schema": "boolean",
        "required": false,
        "description": "Exclude details of items shared with the guest by setting this parameter to `false`. By default this parameter is set to `true`.",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}/guest/{guest_id}",
    "method": "addGuestToFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Guests",
    "typeScriptTag": "guests",
    "description": "Add Guest To Folder",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 1057
      },
      {
        "name": "guestId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "includeShared",
        "schema": "boolean",
        "required": false,
        "description": "Exclude details of items shared with the guest by setting this parameter to `false`. By default this parameter is set to `true`.",
        "example": false
      },
      {
        "name": "permission_level",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION_LEVEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}/list",
    "method": "getFolderLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get Lists",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 456
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}/list",
    "method": "addToFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create List",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 456
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date_time",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
    "url": "/space/{space_id}/list",
    "method": "getFolderless",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get Folderless Lists",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 789
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}/list",
    "method": "createFolderlessList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Create Folderless List",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 789
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "content",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date_time",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "assignee",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
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
    "url": "/list/{list_id}",
    "method": "removeList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Delete List",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 124
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}",
    "method": "getListDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Get List",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 124
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}",
    "method": "updateListInfoDueDatePriorityAssigneeColor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Update List",
    "parameters": [
      {
        "name": "listId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "124"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "due_date",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "due_date_time",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "assignee",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSIGNEE"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "unset_status",
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
    "url": "/list/{list_id}/task/{task_id}",
    "method": "removeTaskFromList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Remove Task From List",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/task/{task_id}",
    "method": "addTaskToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Lists",
    "typeScriptTag": "lists",
    "description": "Add Task To List",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/member",
    "method": "getTaskAccess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Get Task Members",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/member",
    "method": "getListUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Members",
    "typeScriptTag": "members",
    "description": "Get List Members",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/customroles",
    "method": "listAvailableCustomRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "Get Custom Roles",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "includeMembers",
        "schema": "boolean",
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
    "url": "/team/{team_id}/shared",
    "method": "viewTasksListsFolders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shared Hierarchy",
    "typeScriptTag": "sharedHierarchy",
    "description": "Shared Hierarchy",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/space",
    "method": "getSpaceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Get Spaces",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/space",
    "method": "addNewSpaceToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Create Space",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "multiple_assignees",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "tags": {
            "enabled": true
          },
          "due_dates": {
            "enabled": true,
            "start_date": false,
            "remap_due_dates": true,
            "remap_closed_due_date": false
          },
          "time_tracking": {
            "enabled": false
          },
          "time_estimates": {
            "enabled": true
          },
          "checklists": {
            "enabled": true
          },
          "custom_fields": {
            "enabled": true
          },
          "remap_dependencies": {
            "enabled": true
          },
          "dependency_warning": {
            "enabled": true
          },
          "portfolios": {
            "enabled": true
          }
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
    "url": "/space/{space_id}",
    "method": "removeSpace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Delete Space",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 790
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Get Space",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 790
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}",
    "method": "updateDetailsAndEnableClickApps",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Spaces",
    "typeScriptTag": "spaces",
    "description": "Update Space",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 790
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
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "private",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "admin_can_manage",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "multiple_assignees",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "features",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "tags": {
            "enabled": true
          },
          "due_dates": {
            "enabled": true,
            "start_date": false,
            "remap_due_dates": true,
            "remap_closed_due_date": false
          },
          "time_tracking": {
            "enabled": false
          },
          "time_estimates": {
            "enabled": true
          },
          "checklists": {
            "enabled": true
          },
          "custom_fields": {
            "enabled": true
          },
          "remap_dependencies": {
            "enabled": true
          },
          "dependency_warning": {
            "enabled": true
          },
          "portfolios": {
            "enabled": true
          }
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
    "url": "/space/{space_id}/tag",
    "method": "getSpace",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Get Space Tags",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 512
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}/tag",
    "method": "createSpaceTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Create Space Tag",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 512
      },
      {
        "name": "tag",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "name": "Tag Name",
          "tag_fg": "#000000",
          "tag_bg": "#000000"
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
    "url": "/space/{space_id}/tag/{tag_name}",
    "method": "removeSpaceTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Delete Space Tag",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 512
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "name"
      },
      {
        "name": "tag",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "name": "Tag Name",
          "tag_fg": "#000000",
          "tag_bg": "#000000"
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
    "url": "/space/{space_id}/tag/{tag_name}",
    "method": "updateSpaceTag",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Edit Space Tag",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 512
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "name"
      },
      {
        "name": "tag",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "name": "Updated Tag",
          "fg_color": "#ffffff",
          "bg_color": "#ffffff"
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
    "url": "/task/{task_id}/tag/{tag_name}",
    "method": "removeFromTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Remove Tag From Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "abc"
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "name"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/tag/{tag_name}",
    "method": "addToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Add Tag To Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "abc"
      },
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "name"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/task",
    "method": "getListTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get Tasks",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "To find the list_id:<br> 1. In the Sidebar, hover over the List and click the **ellipsis ...** menu.<br> 2. Select **Copy link.**<br> 3. Use the copied URL to find the list_id. The list_id is the number that follows /li in the URL.",
        "example": 123
      },
      {
        "name": "archived",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "includeMarkdownDescription",
        "schema": "boolean",
        "description": "To return task descriptions in Markdown format, use `?include_markdown_description=true`.",
        "example": true
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page to fetch (starts at 0)."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Order by a particular field. By default, tasks are ordered by `created`.\\\n \\\nOptions include: `id`, `created`, `updated`, and `due_date`."
      },
      {
        "name": "reverse",
        "schema": "boolean",
        "description": "Tasks are displayed in reverse order."
      },
      {
        "name": "subtasks",
        "schema": "boolean",
        "description": "Include or exclude subtasks. By default, subtasks are excluded."
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "Filter by statuses. To include closed tasks, use the `include_closed` parameter. \\\n \\\nFor example: \\\n \\\n`?statuses[]=to%20do&statuses[]=in%20progress`"
      },
      {
        "name": "includeClosed",
        "schema": "boolean",
        "description": "Include or excluse closed tasks. By default, they are excluded.\\\n \\\nTo include closed tasks, use `include_closed: true`."
      },
      {
        "name": "assignees",
        "schema": "array",
        "description": "Filter by Assignees. For example: \\\n \\\n`?assignees[]=1234&assignees[]=5678`"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "Filter by tags. For example: \\\n \\\n`?tags[]=tag1&tags[]=this%20tag`"
      },
      {
        "name": "dueDateGt",
        "schema": "integer",
        "description": "Filter by due date greater than Unix time in milliseconds."
      },
      {
        "name": "dueDateLt",
        "schema": "integer",
        "description": "Filter by due date less than Unix time in milliseconds."
      },
      {
        "name": "dateCreatedGt",
        "schema": "integer",
        "description": "Filter by date created greater than Unix time in milliseconds."
      },
      {
        "name": "dateCreatedLt",
        "schema": "integer",
        "description": "Filter by date created less than Unix time in milliseconds."
      },
      {
        "name": "dateUpdatedGt",
        "schema": "integer",
        "description": "Filter by date updated greater than Unix time in milliseconds."
      },
      {
        "name": "dateUpdatedLt",
        "schema": "integer",
        "description": "Filter by date updated less than Unix time in milliseconds."
      },
      {
        "name": "dateDoneGt",
        "schema": "integer",
        "description": "Filter by date done greater than Unix time in milliseconds."
      },
      {
        "name": "dateDoneLt",
        "schema": "integer",
        "description": "Filter by date done less than Unix time in milliseconds."
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "Include tasks with specific values in multiple Custom Fields.\\\n \\\nFor example: `?custom_fields=[{\"field_id\":\"abcdefghi12345678\",\"operator\":\"=\",\"value\":\"1234\"},{\"field_id\":\"jklmnop123456\",\"operator\":\"<\",\"value\":\"5\"}]`\\\n \\\nIf you want to include tasks with specific values in only one Custom Field, use `custom_field` instead.\\\n \\\nLearn more about [filtering using Custom Fields.](https://clickup.com/api)"
      },
      {
        "name": "customItems",
        "schema": "array",
        "description": "Filter by custom task types. For example: \\\n \\\n`?custom_items[]=0&custom_items[]=1300` \\\n \\\nIncluding `0` returns tasks. Including `1` returns Milestones. Including any other number returns the custom task type as defined in your Workspace."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/task",
    "method": "createNewTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Create Task",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 123
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
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
        "name": "assignees",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "due_date_time",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "time_estimate",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "start_date_time",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notify_all",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "links_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "check_required_custom_fields",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_item_id",
        "schema": "number",
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
    "url": "/task/{task_id}",
    "method": "removeTaskById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Delete Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9xh"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}",
    "method": "getTaskDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "includeSubtasks",
        "schema": "boolean",
        "description": "Include subtasks, default false"
      },
      {
        "name": "includeMarkdownDescription",
        "schema": "boolean",
        "description": "To return task descriptions in Markdown format, use `?include_markdown_description=true`.",
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
    "url": "/task/{task_id}",
    "method": "updateTaskFields",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Update Task",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hx"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_item_id",
        "schema": "number",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "priority",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "due_date",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "due_date_time",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "parent",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_estimate",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "start_date_time",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "assignees",
        "schema": "object",
        "description": "",
        "example": {
          "add": [
            182
          ],
          "rem": [
            183
          ]
        }
      },
      {
        "name": "archived",
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
    "url": "/team/{team_Id}/task",
    "method": "filterTeamTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get Filtered Team Tasks",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Page to fetch (starts at 0)."
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Order by a particular field. By default, tasks are ordered by `created`.\\\n \\\nOptions include: `id`, `created`, `updated`, and `due_date`."
      },
      {
        "name": "reverse",
        "schema": "boolean",
        "description": "Tasks are displayed in reverse order."
      },
      {
        "name": "subtasks",
        "schema": "boolean",
        "description": "Include or exclude subtasks. By default, subtasks are excluded."
      },
      {
        "name": "spaceIds",
        "schema": "array",
        "description": "Filter by Spaces. For example: \\\n \\\n`?space_ids[]=1234&space_ids[]=6789`"
      },
      {
        "name": "projectIds",
        "schema": "array",
        "description": "Filter by Folders. For example: \\\n \\\n`?project_ids[]=1234&project_ids[]=6789`"
      },
      {
        "name": "listIds",
        "schema": "array",
        "description": "Filter by Lists. For example: \\\n \\\n`?list_ids[]=1234&list_ids[]=6789`"
      },
      {
        "name": "statuses",
        "schema": "array",
        "description": "Filter by statuses. Use `%20` to represent a space character. To include closed tasks, use the `include_closed` parameter. \\\n \\\nFor example: \\\n \\\n`?statuses[]=to%20do&statuses[]=in%20progress`"
      },
      {
        "name": "includeClosed",
        "schema": "boolean",
        "description": "Include or excluse closed tasks. By default, they are excluded.\\\n \\\nTo include closed tasks, use `include_closed: true`."
      },
      {
        "name": "assignees",
        "schema": "array",
        "description": "Filter by Assignees using people's ClickUp user id. For example: \\\n \\\n`?assignees[]=1234&assignees[]=5678`"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": "Filter by tags. User `%20` to represent a space character. For example: \\\n \\\n`?tags[]=tag1&tags[]=this%20tag`"
      },
      {
        "name": "dueDateGt",
        "schema": "integer",
        "description": "Filter by due date greater than Unix time in milliseconds."
      },
      {
        "name": "dueDateLt",
        "schema": "integer",
        "description": "Filter by due date less than Unix time in milliseconds."
      },
      {
        "name": "dateCreatedGt",
        "schema": "integer",
        "description": "Filter by date created greater than Unix time in milliseconds."
      },
      {
        "name": "dateCreatedLt",
        "schema": "integer",
        "description": "Filter by date created less than Unix time in milliseconds."
      },
      {
        "name": "dateUpdatedGt",
        "schema": "integer",
        "description": "Filter by date updated greater than Unix time in milliseconds."
      },
      {
        "name": "dateUpdatedLt",
        "schema": "integer",
        "description": "Filter by date updated less than Unix time in milliseconds."
      },
      {
        "name": "dateDoneGt",
        "schema": "integer",
        "description": "Filter by date done greater than Unix time in milliseconds."
      },
      {
        "name": "dateDoneLt",
        "schema": "integer",
        "description": "Filter by date done less than Unix time in milliseconds."
      },
      {
        "name": "customFields",
        "schema": "array",
        "description": "Include tasks with specific values in one or more Custom Fields.\\\n \\\nFor example: `?custom_fields=[{\"field_id\":\"abcdefghi12345678\",\"operator\":\"=\",\"value\":\"1234\"}{\"field_id\":\"jklmnop123456\",\"operator\":\"<\",\"value\":\"5\"}]`\\\n \\\nLearn more about [filtering using Custom Fields.](https://clickup.com/api)"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "parent",
        "schema": "string",
        "description": "Include the parent task ID to return subtasks."
      },
      {
        "name": "includeMarkdownDescription",
        "schema": "boolean",
        "description": "To return task descriptions in Markdown format, use `?include_markdown_description=true`.",
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
    "url": "/task/{task_id}/time_in_status",
    "method": "getTimeInStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get Task's Time in Status",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/bulk_time_in_status/task_ids",
    "method": "getTimeInStatusBulk",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Get Bulk Tasks' Time in Status",
    "parameters": [
      {
        "name": "taskIds",
        "schema": "string",
        "required": true,
        "description": "Include this paramater once per `task_id`.\nYou can include up to 100 task ids per request.\nFor example: `task_ids=3cuh&task_ids=g4fs`",
        "example": "TASK_IDS"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/taskTemplate",
    "method": "getTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Task Templates",
    "typeScriptTag": "taskTemplates",
    "description": "Get Task Templates",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "page",
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
    "url": "/list/{list_id}/taskTemplate/{template_id}",
    "method": "createFromTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Task Templates",
    "typeScriptTag": "taskTemplates",
    "description": "Create Task From Template",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 512
      },
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hz"
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
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/seats",
    "method": "getWorkspaceSeats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams - Workspaces",
    "typeScriptTag": "teamsWorkspaces",
    "description": "Get Workspace seats",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/plan",
    "method": "getWorkspacePlan",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams - Workspaces",
    "typeScriptTag": "teamsWorkspaces",
    "description": "Get Workspace Plan",
    "parameters": [
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": "TEAM_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/group",
    "method": "createTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams - User Groups",
    "typeScriptTag": "teamsUserGroups",
    "description": "Create Team",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "members",
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
    "url": "/team/{team_id}/custom_item",
    "method": "getAvailableTaskTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Task Types",
    "typeScriptTag": "customTaskTypes",
    "description": "Get Custom Task Types",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/group/{group_id}",
    "method": "removeGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams - User Groups",
    "typeScriptTag": "teamsUserGroups",
    "description": "Delete Team",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "7C73-4002-A6A9-310014852858 (string) - Team ID (user group)",
        "example": "C9C58BE9"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/group/{group_id}",
    "method": "updateUserGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams - User Groups",
    "typeScriptTag": "teamsUserGroups",
    "description": "Update Team",
    "parameters": [
      {
        "name": "groupId",
        "schema": "string",
        "required": true,
        "description": "7C73-4002-A6A9-310014852858 (string) - Team ID (user group)",
        "example": "C9C58BE9"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "handle",
        "schema": "string",
        "description": ""
      },
      {
        "name": "members",
        "schema": "object",
        "description": "",
        "example": {
          "add": [
            123456,
            987654
          ],
          "rem": [
            159753
          ]
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
    "url": "/group",
    "method": "getUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams - User Groups",
    "typeScriptTag": "teamsUserGroups",
    "description": "Get Teams",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "groupIds",
        "schema": "string",
        "description": "Enter one or more Team ids (user groups) to retrieve information about specific Teams.",
        "example": "C9C58BE9-7C73-4002-A6A9-310014852858"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/time",
    "method": "getTrackedTime",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking (Legacy)",
    "typeScriptTag": "timeTrackingLegacy",
    "description": "Get tracked time",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/time",
    "method": "recordTimeForTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking (Legacy)",
    "typeScriptTag": "timeTrackingLegacy",
    "description": "Track time",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "time",
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
    "url": "/task/{task_id}/time/{interval_id}",
    "method": "removeTrackedTime",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Tracking (Legacy)",
    "typeScriptTag": "timeTrackingLegacy",
    "description": "Delete time tracked",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "intervalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/task/{task_id}/time/{interval_id}",
    "method": "editTimeTracked",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Tracking (Legacy)",
    "typeScriptTag": "timeTrackingLegacy",
    "description": "Edit time tracked",
    "parameters": [
      {
        "name": "taskId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "9hv"
      },
      {
        "name": "intervalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "123"
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "end",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "time",
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
    "url": "/team/{team_Id}/time_entries",
    "method": "getTimeEntriesWithinDateRange",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get time entries within a date range",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "startDate",
        "schema": "number",
        "description": "Unix time in milliseconds"
      },
      {
        "name": "endDate",
        "schema": "number",
        "description": "Unix time in milliseconds"
      },
      {
        "name": "assignee",
        "schema": "number",
        "description": "Filter by `user_id`. For multiple assignees, separate `user_id` using commas.\\\n \\\n **Example:** `assignee=1234,9876`\\\n \\\n***Note:** Only Workspace Owners/Admins have access to do this.*"
      },
      {
        "name": "includeTaskTags",
        "schema": "boolean",
        "description": "Include task tags in the response for time entries associated with tasks."
      },
      {
        "name": "includeLocationNames",
        "schema": "boolean",
        "description": "Include the names of the List, Folder, and Space along with the `list_id`,`folder_id`, and `space_id`."
      },
      {
        "name": "spaceId",
        "schema": "number",
        "description": "Only include time entries associated with tasks in a specific Space."
      },
      {
        "name": "folderId",
        "schema": "number",
        "description": "Only include time entries associated with tasks in a specific Folder."
      },
      {
        "name": "listId",
        "schema": "number",
        "description": "Only include time entries associated with tasks in a specific List."
      },
      {
        "name": "taskId",
        "schema": "string",
        "description": "Only include time entries associated with a specific task."
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_Id}/time_entries",
    "method": "createTimeEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Create a time entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "stop",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "billable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "assignee",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "tid",
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
    "url": "/team/{team_id}/time_entries/{timer_id}",
    "method": "removeEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Delete a time Entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "timerId",
        "schema": "number",
        "required": true,
        "description": "Array of timer ids to delete separated by commas",
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
    "url": "/team/{team_id}/time_entries/{timer_id}",
    "method": "getSingleTimeEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get singular time entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "timerId",
        "schema": "string",
        "required": true,
        "description": "The ID of a time entry. \\\n \\\nThis can be found using the [Get Time Entries Within a Date Range](https://clickup.com/api) endpoint.",
        "example": "1963465985517105840"
      },
      {
        "name": "includeTask",
        "schema": "boolean",
        "description": "Include task  in the response for time entries associated with tasks."
      },
      {
        "name": "includeLocationNames",
        "schema": "boolean",
        "description": "Include the names of the List, Folder, and Space along with `list_id`,`folder_id`, and `space_id`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/time_entries/{timer_id}",
    "method": "updateTimeEntryDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Update a time Entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "timerId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 2004673344540003600
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the parameter is set to `custom_task_ids=true`\\\n \\\nFor example: `custom_task_ids=true&team_id=123`",
        "example": 123
      },
      {
        "name": "tags",
        "schema": "array",
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
        "name": "tag_action",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "end",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "tid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "billable",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "duration",
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
    "url": "/team/{team_id}/time_entries/{timer_id}/history",
    "method": "getTimeEntryHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get time entry history",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "timerId",
        "schema": "string",
        "required": true,
        "description": "The ID of a time entry. \\\n \\\nThis can be found using the [Get Time Entries Within a Date Range](https://clickup.com/api/clickupreference/operation/Gettimeentrieswithinadaterange/) endpoint.",
        "example": "1963465985517105840"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/time_entries/current",
    "method": "getCurrentTimeEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get running time entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "assignee",
        "schema": "number",
        "description": "user id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/time_entries/tags",
    "method": "removeTagsFromTimeEntries",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Remove tags from time entries",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "time_entry_ids",
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
    "url": "/team/{team_id}/time_entries/tags",
    "method": "getAllTagsFromTimeEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Get all tags from time entries",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/time_entries/tags",
    "method": "addTagsFromTimeEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Add tags from time entries",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "time_entry_ids",
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
    "url": "/team/{team_id}/time_entries/tags",
    "method": "changeTagNames",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Change tag names from time entries",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
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
        "name": "tag_bg",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG_BG"
      },
      {
        "name": "tag_fg",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAG_FG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_Id}/time_entries/start",
    "method": "startTimer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Start a time Entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "customTaskIds",
        "schema": "boolean",
        "description": "If you want to reference a task by it's custom task id, this value must be `true`.",
        "example": true
      },
      {
        "name": "teamId",
        "schema": "number",
        "description": "Only used when the `custom_task_ids` parameter is set to `true`.\\\n \\\nFor example: `custom_task_ids=true&team_id=123`.",
        "example": 123
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "billable",
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
    "url": "/team/{team_id}/time_entries/stop",
    "method": "stopTimeEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Tracking",
    "typeScriptTag": "timeTracking",
    "description": "Stop a time Entry",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/user",
    "method": "inviteUserToWorkspace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Invite User To Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "admin",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "custom_role_id",
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
    "url": "/team/{team_id}/user/{user_id}",
    "method": "deactivateFromWorkspace",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Remove User From Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/user/{user_id}",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/user/{user_id}",
    "method": "updateUserDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Edit User On Workspace",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "userId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 403
      },
      {
        "name": "username",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERNAME"
      },
      {
        "name": "admin",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "custom_role_id",
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
    "url": "/team/{team_id}/view",
    "method": "getEverythingLevel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Get Workspace (Everything level) Views",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/view",
    "method": "createWorkspaceViewEverythingLevel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Create Workspace (Everything level) View",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "grouping",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": "status",
          "dir": 1,
          "collapsed": [],
          "ignore": false
        }
      },
      {
        "name": "divide",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": null,
          "dir": null,
          "collapsed": []
        }
      },
      {
        "name": "sorting",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": [
            {
              "field": "cf_624a423a-c1d1-4467-99e2-63e225658cb2",
              "dir": -1,
              "idx": 0
            }
          ]
        }
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "op": "AND",
          "fields": [],
          "search": "",
          "show_closed": false
        }
      },
      {
        "name": "columns",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": []
        }
      },
      {
        "name": "team_sidebar",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "assignees": [],
          "assigned_comments": false,
          "unassigned_tasks": false
        }
      },
      {
        "name": "settings",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "show_task_locations": false,
          "show_subtasks": 3,
          "show_subtask_parent_names": false,
          "show_closed_subtasks": false,
          "show_assignees": true,
          "show_images": true,
          "collapse_empty_columns": null,
          "me_comments": true,
          "me_subtasks": true,
          "me_checklists": true
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
    "url": "/space/{space_id}/view",
    "method": "spaceViewsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Get Space Views",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 790
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/space/{space_id}/view",
    "method": "addViewToSpace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Create Space View",
    "parameters": [
      {
        "name": "spaceId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 790
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "grouping",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": "status",
          "dir": 1,
          "collapsed": [],
          "ignore": false
        }
      },
      {
        "name": "divide",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": null,
          "dir": null,
          "collapsed": []
        }
      },
      {
        "name": "sorting",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": [
            {
              "field": "cf_624a423a-c1d1-4467-99e2-63e225658cb2",
              "dir": -1,
              "idx": 0
            }
          ]
        }
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "op": "AND",
          "fields": [],
          "search": "",
          "show_closed": false
        }
      },
      {
        "name": "columns",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": []
        }
      },
      {
        "name": "team_sidebar",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "assignees": [],
          "assigned_comments": false,
          "unassigned_tasks": false
        }
      },
      {
        "name": "settings",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "show_task_locations": false,
          "show_subtasks": 3,
          "show_subtask_parent_names": false,
          "show_closed_subtasks": false,
          "show_assignees": true,
          "show_images": true,
          "collapse_empty_columns": null,
          "me_comments": true,
          "me_subtasks": true,
          "me_checklists": true
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
    "url": "/folder/{folder_id}/view",
    "method": "folderViewsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Get Folder Views",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 457
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/folder/{folder_id}/view",
    "method": "addViewToFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Create Folder View",
    "parameters": [
      {
        "name": "folderId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 457
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "grouping",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": "status",
          "dir": 1,
          "collapsed": [],
          "ignore": false
        }
      },
      {
        "name": "divide",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": null,
          "dir": null,
          "collapsed": []
        }
      },
      {
        "name": "sorting",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": [
            {
              "field": "cf_624a423a-c1d1-4467-99e2-63e225658cb2",
              "dir": -1,
              "idx": 0
            }
          ]
        }
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "op": "AND",
          "fields": [],
          "search": "",
          "show_closed": false
        }
      },
      {
        "name": "columns",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": []
        }
      },
      {
        "name": "team_sidebar",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "assignees": [],
          "assigned_comments": false,
          "unassigned_tasks": false
        }
      },
      {
        "name": "settings",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "show_task_locations": false,
          "show_subtasks": 3,
          "show_subtask_parent_names": false,
          "show_closed_subtasks": false,
          "show_assignees": true,
          "show_images": true,
          "collapse_empty_columns": null,
          "me_comments": true,
          "me_subtasks": true,
          "me_checklists": true
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
    "url": "/list/{list_id}/view",
    "method": "getListViews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Get List Views",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 124
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/list/{list_id}/view",
    "method": "addViewToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Create List View",
    "parameters": [
      {
        "name": "listId",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 124
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "grouping",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": "status",
          "dir": 1,
          "collapsed": [],
          "ignore": false
        }
      },
      {
        "name": "divide",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": null,
          "dir": null,
          "collapsed": []
        }
      },
      {
        "name": "sorting",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": [
            {
              "field": "cf_624a423a-c1d1-4467-99e2-63e225658cb2",
              "dir": -1,
              "idx": 0
            }
          ]
        }
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "op": "AND",
          "fields": [],
          "search": "",
          "show_closed": false
        }
      },
      {
        "name": "columns",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": []
        }
      },
      {
        "name": "team_sidebar",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "assignees": [],
          "assigned_comments": false,
          "unassigned_tasks": false
        }
      },
      {
        "name": "settings",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "show_task_locations": false,
          "show_subtasks": 3,
          "show_subtask_parent_names": false,
          "show_closed_subtasks": false,
          "show_assignees": true,
          "show_images": true,
          "collapse_empty_columns": null,
          "me_comments": true,
          "me_subtasks": true,
          "me_checklists": true
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
    "url": "/view/{view_id}",
    "method": "deleteViewById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Delete View",
    "parameters": [
      {
        "name": "viewId",
        "schema": "string",
        "required": true,
        "description": "105 (string)",
        "example": "3c"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/view/{view_id}",
    "method": "getViewInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Get View",
    "parameters": [
      {
        "name": "viewId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3c-105"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/view/{view_id}",
    "method": "updateViewDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Update View",
    "parameters": [
      {
        "name": "viewId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "3c"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "parent",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "id": "512X",
          "type": 7
        }
      },
      {
        "name": "grouping",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": "status",
          "dir": 1,
          "collapsed": [],
          "ignore": false
        }
      },
      {
        "name": "divide",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "field": null,
          "dir": null,
          "collapsed": []
        }
      },
      {
        "name": "sorting",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": [
            {
              "field": "cf_624a423a-c1d1-4467-99e2-63e225658cb2",
              "dir": -1,
              "idx": 0
            }
          ]
        }
      },
      {
        "name": "filters",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "op": "AND",
          "fields": [],
          "search": "",
          "show_closed": false
        }
      },
      {
        "name": "columns",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "fields": []
        }
      },
      {
        "name": "team_sidebar",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "assignees": [],
          "assigned_comments": false,
          "unassigned_tasks": false
        }
      },
      {
        "name": "settings",
        "schema": "object",
        "required": true,
        "description": "",
        "example": {
          "show_task_locations": false,
          "show_subtasks": 3,
          "show_subtask_parent_names": false,
          "show_closed_subtasks": false,
          "show_assignees": true,
          "show_images": true,
          "collapse_empty_columns": null,
          "me_comments": true,
          "me_subtasks": true,
          "me_checklists": true
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
    "url": "/view/{view_id}/task",
    "method": "getTasksInView",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Views",
    "typeScriptTag": "views",
    "description": "Get View Tasks",
    "parameters": [
      {
        "name": "viewId",
        "schema": "string",
        "required": true,
        "description": "105 (string)",
        "example": "3c"
      },
      {
        "name": "page",
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
    "url": "/team/{team_id}/webhook",
    "method": "workspaceGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhooks",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/team/{team_id}/webhook",
    "method": "createWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create Webhook",
    "parameters": [
      {
        "name": "teamId",
        "schema": "number",
        "required": true,
        "description": "Team ID (Workspace)",
        "example": 123
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINT"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "space_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "folder_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "list_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "task_id",
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
    "url": "/webhook/{webhook_id}",
    "method": "removeWebhookById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "e506-4a29-9d42-26e504e3435e (uuid)",
        "example": "4b67ac88"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook/{webhook_id}",
    "method": "updateEventsToMonitor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update Webhook",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "string",
        "required": true,
        "description": "e506-4a29-9d42-26e504e3435e (uuid)",
        "example": "4b67ac88"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINT"
      },
      {
        "name": "events",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENTS"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
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
      apiTitle="ClickUp API Reference"
      apiBaseUrl="https://api.clickup.com/api/v2"
      apiVersion="2.0"
      endpoints={72}
      sdkMethods={197}
      schemas={335}
      parameters={541}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickup/openapi.yaml"
    />
  );
}
  