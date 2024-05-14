import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function InsightlyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="insightly-typescript-sdk"
      metaDescription={`Insightly, the new breed of CRM, helps modern businesses of all sizes build lifelong customer relationships and grow faster than ever before. Insightly's out of the box capabilities allow you to tailor each user's experience for every customer facing role. It is easy to use, easy to set up, highly customizable to your industry, and offers fast time to value at a low total cost of ownership. Join more than 1.5M Insightly users who are already building better customer relationships.

Founded in 2009 and based in San Francisco, Insightly is backed by $38 million in funding over three rounds from leading venture capital firms: Emergence Capital Partners, Cloud Apps Capital Partners, Scott Bommer and Sozo Ventures.`}
      company="Insightly"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/logo.png"
      companyKebabCase="insightly"
      clientNameCamelCase="insightly"
      homepage="insightly.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["crm"]}
      methods={[
  {
    "url": "/{objectName}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Gets a list of records",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/{objectName}",
    "method": "addRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Adds a record",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "RECORD_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECORD_NAME"
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TO",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/{objectName}",
    "method": "updateRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Updates a record",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "RECORD_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECORD_NAME"
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TO",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/{objectName}/{id}",
    "method": "deleteRecord",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Deletes a Record",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/{objectName}/{id}",
    "method": "getRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Gets a record",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/{objectName}/{id}/Translations/{language}",
    "method": "getTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Gets a record's translation in a specific language",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "The requested language",
        "example": "LANGUAGE"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/{objectName}/{id}/Translations/{language}",
    "method": "addTranslation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Adds a Translation for a record in a specific language",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "The language of the translation to add",
        "example": "LANGUAGE"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "RECORD_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECORD_NAME"
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TO",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/{objectName}/{id}/Translations/{language}",
    "method": "updateTranslationRecord",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Updates a record's translation in a specific language",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "The language of the record's translation to update",
        "example": "LANGUAGE"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "RECORD_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECORD_NAME"
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TO",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBLE_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/{objectName}/Search",
    "method": "getFilteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomObjectsRecords",
    "typeScriptTag": "customObjectsRecords",
    "description": "Gets a filtered list of records",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/ActivitySets",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ActivitySets",
    "typeScriptTag": "activitySets",
    "description": "Gets a list of Activity Sets",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the activity set.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of activity sets to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of activity sets to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/ActivitySets/{id}",
    "method": "getActivitySet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ActivitySets",
    "typeScriptTag": "activitySets",
    "description": "Gets a single Activity Set",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "An Activity Set's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Activity Set not found."
      }
    ]
  },
  {
    "url": "/Comments",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Updates a Comment",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Comments/{id}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Deletes a Comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Comments/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Gets a Comment's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Comments/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Adds a File Attachment to a Comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Comments/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Comments",
    "typeScriptTag": "comments",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/CommunityComments",
    "method": "listComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Gets a list of Forum Comments",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CommunityComments",
    "method": "addCommentOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Adds a Forum Comment",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ANSWER",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OFFICIAL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "UPVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DOWNVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CREATED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "EDITED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_EDITED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/CommunityComments",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Updates a Forum Comment",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ANSWER",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OFFICIAL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "UPVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DOWNVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CREATED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "EDITED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_EDITED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/CommunityComments/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Gets a Forum Comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityComments/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Stop following a Forum Comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/CommunityComments/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Gets a Follow state for a Forum Comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityComments/{id}/Follow",
    "method": "startFollowingComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Start following a Forum Comment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityComments/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityComments/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/CommunityComments/Search",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumComments",
    "typeScriptTag": "forumComments",
    "description": "Gets a filtered list of Forum Comments",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CommunityForums",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Gets a list of Forums",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CommunityForums",
    "method": "addForumOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Adds a Forum",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "FORUM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_CATEGORY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "FORUM_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORUM_NAME"
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBILITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ORDER",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/CommunityForums",
    "method": "updateForum",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Updates a Forum",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "FORUM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_CATEGORY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "FORUM_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FORUM_NAME"
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VISIBILITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ORDER",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}",
    "method": "getForumById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Gets a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/CommunityPosts",
    "method": "getForumPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Gets a list of Forum Posts of a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/CommunityPosts",
    "method": "addPostToForum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Adds a Forum Post to a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "POST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MESSAGE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PINNED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FEATURED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CLOSED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/CommunityPosts",
    "method": "updateForumPost",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Updates a Forum Post of a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "POST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MESSAGE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PINNED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FEATURED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CLOSED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Stop following a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Gets a Follow state for a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/Follow",
    "method": "startFollowingForum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Start following a Forum",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/CommunityForums/Search",
    "method": "getFilteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Forums",
    "typeScriptTag": "forums",
    "description": "Gets a filtered list of Forums",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CommunityPosts",
    "method": "listForumPosts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Gets a list of Forum Posts",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CommunityPosts",
    "method": "addForumPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Adds a Forum Post",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "POST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MESSAGE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PINNED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FEATURED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CLOSED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/CommunityPosts",
    "method": "updatePost",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Updates a Forum Post",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "POST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MESSAGE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PINNED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FEATURED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CLOSED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}",
    "method": "getPost",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Gets a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/CommunityComments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Gets a list of Forum Comments of a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/CommunityComments",
    "method": "addComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Adds a Forum Comment to a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ANSWER",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OFFICIAL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "UPVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DOWNVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CREATED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "EDITED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_EDITED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/CommunityComments",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Updates a Forum Comment of a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ANSWER",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "SPAM",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PENDING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OFFICIAL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "UPVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DOWNVOTE_COUNT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "POST_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CREATED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "EDITED_CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_EDITED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FORUM_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/Follow",
    "method": "unfollowPost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Stop following a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Gets a Follow state for a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/Follow",
    "method": "startFollowingPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Start following a Forum Post",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/CommunityPosts/Search",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumPosts",
    "typeScriptTag": "forumPosts",
    "description": "Gets a filtered list of Forum Posts",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Contacts",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a list of Contacts",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Contacts",
    "method": "createContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds a Contact",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_OF_BIRTH",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_HOME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_OTHER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_ASSISTANT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_ADDRESS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSISTANT_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Contacts",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Contact",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_OF_BIRTH",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_HOME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_OTHER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_ASSISTANT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_ADDRESS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSISTANT_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Contacts/{id}",
    "method": "deleteContact",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}",
    "method": "getContact",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/ActivitySetAssignment",
    "method": "addActivitySetAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds an Activity Set to a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ACTIVITYSET_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "END_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ACTIVITY_ASSIGNMENTS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Activity Set or Activities not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Dates",
    "method": "getDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Dates",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Dates",
    "method": "updateDates",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Contact's Dates",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "DATE_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OCCASION_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OCCASION_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "REPEAT_YEARLY",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "CREATE_TASK_YEARLY",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Emails",
    "method": "getEmailsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a list of a Contact's Emails",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when email was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of emails to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of emails to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Events",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when event was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of events to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of events to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds a File Attachment to a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Stop following a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Follow state for a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Start following a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a Contact's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Image/{filename}",
    "method": "updateImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Contact's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "Name of Image File to be attached to Record",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a Contact's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Contact's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Links",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Note",
    "method": "getNoteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a list of Notes of a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Note",
    "method": "addNoteToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds a Note to a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_OF_BIRTH",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_HOME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_OTHER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_ASSISTANT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_ADDRESS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSISTANT_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Note",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Note of a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_OF_BIRTH",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_HOME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_OTHER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_ASSISTANT",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_ADDRESS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSISTANT_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_MAIL_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_OTHER_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Note/{childEntityId}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a Note of a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Notes",
    "method": "getNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when note was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of notes to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of notes to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Notes",
    "method": "addNoteToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds a Note to a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Notes",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a note of a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Tags",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Deletes a Tag from a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Tags",
    "method": "getTagList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a Contact's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Tags",
    "method": "addTagToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Adds a Tag to a Contact",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Updates a Contact's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/{id}/Tasks",
    "method": "getTasksList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a list of a Contact's Tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when task was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of tasks to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of tasks to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Contacts/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a filtered list of Contacts",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Contacts/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contacts",
    "typeScriptTag": "contacts",
    "description": "Gets a list of Contacts filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Countries",
    "method": "listOfCountries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Countries",
    "typeScriptTag": "countries",
    "description": "Gets a list of Countries used by Insightly",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Currencies",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Currencies",
    "typeScriptTag": "currencies",
    "description": "Gets a list of Currencies used by Insightly",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CustomFields/{objectName}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Gets a list of Custom Fields",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTNAME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CustomFields/{objectName}/Search",
    "method": "getFieldByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomFields",
    "typeScriptTag": "customFields",
    "description": "Gets a Custom Field by name",
    "parameters": [
      {
        "name": "objectName",
        "schema": "string",
        "required": true,
        "description": "The object name",
        "example": "OBJECTNAME"
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "The custom field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CustomObjects",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomObjects",
    "typeScriptTag": "customObjects",
    "description": "Gets a list of custom objects",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/CustomObjects/{customObjectName}",
    "method": "getObjectByName",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CustomObjects",
    "typeScriptTag": "customObjects",
    "description": "Gets a custom object by object name",
    "parameters": [
      {
        "name": "customObjectName",
        "schema": "string",
        "required": true,
        "description": "The custom object name",
        "example": "CUSTOMOBJECTNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/DocumentTemplates",
    "method": "listTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentTemplates",
    "typeScriptTag": "documentTemplates",
    "description": "Gets a list of Document Templates",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/DocumentTemplates/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentTemplates",
    "typeScriptTag": "documentTemplates",
    "description": "Gets a Document Template",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/DocumentTemplates/Search",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentTemplates",
    "typeScriptTag": "documentTemplates",
    "description": "Gets a filtered list of Document Templates",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Emails",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets a list of Emails",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Emails/{id}",
    "method": "deleteEmail",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Deletes an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Emails/{id}",
    "method": "getEmail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets an Email's Comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when comment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of comments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of comments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Comments",
    "method": "addComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Adds a Comment to an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets an Email's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Follow",
    "method": "unfollow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Stop following an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets a Follow state for an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Start following an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets an Email's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Tags",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Deletes a Tag from an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets an Email's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Tags",
    "method": "addTagToEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Adds a Tag to an Email",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Emails/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Updates an Email's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Emails/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets a filtered list of Emails",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Emails/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Emails",
    "typeScriptTag": "emails",
    "description": "Gets a list of Emails filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Events",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets a list of Events",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Events",
    "method": "addEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Adds an Event",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "EVENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LOCATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "START_DATE_UTC",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE_UTC"
      },
      {
        "name": "END_DATE_UTC",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE_UTC"
      },
      {
        "name": "ALL_DAY",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_SENT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Events",
    "method": "updateEvent",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Updates an Event",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "EVENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LOCATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "START_DATE_UTC",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE_UTC"
      },
      {
        "name": "END_DATE_UTC",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "END_DATE_UTC"
      },
      {
        "name": "ALL_DAY",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_SENT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Events/{id}",
    "method": "deleteEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Deletes an Event",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Events/{id}",
    "method": "getEvent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets an Event",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Events/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Deletes an Event's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Events/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets an Event's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Events/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Updates an Event's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Events/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets an Event's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Events/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Events/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Events/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Events/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Events/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Gets a filtered list of Events",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/FileAttachments/{id}",
    "method": "deleteAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FileAttachments",
    "typeScriptTag": "fileAttachments",
    "description": "Deletes a File Attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A File Attachment's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to File Attachment."
      },
      {
        "statusCode": "404",
        "description": "File Attachment not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/FileAttachments/{id}",
    "method": "getFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FileAttachments",
    "typeScriptTag": "fileAttachments",
    "description": "Gets a File Attachment",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A File Attachment's ID",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to File Attachment."
      },
      {
        "statusCode": "404",
        "description": "File Attachment not found."
      }
    ]
  },
  {
    "url": "/FileCategories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FileCategories",
    "typeScriptTag": "fileCategories",
    "description": "Gets a list of File Categories",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file categories to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file categories to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/FileCategories",
    "method": "addCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "FileCategories",
    "typeScriptTag": "fileCategories",
    "description": "Adds a File Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add File Categories."
      }
    ]
  },
  {
    "url": "/FileCategories",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "FileCategories",
    "typeScriptTag": "fileCategories",
    "description": "Updates a File Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to edit File Categories."
      },
      {
        "statusCode": "404",
        "description": "File Category not found."
      },
      {
        "statusCode": "409",
        "description": "File Category cannot be updated because it has been deactivated."
      }
    ]
  },
  {
    "url": "/FileCategories/{id}",
    "method": "deactivateCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "FileCategories",
    "typeScriptTag": "fileCategories",
    "description": "Deactivates a File Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A File Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Deactivation succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to deactivate File Categories."
      },
      {
        "statusCode": "404",
        "description": "File Category not found."
      },
      {
        "statusCode": "409",
        "description": "File Category cannot be deactivated because it's in use or already deactivated."
      },
      {
        "statusCode": "417",
        "description": "Deactivation failed."
      }
    ]
  },
  {
    "url": "/FileCategories/{id}",
    "method": "getGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FileCategories",
    "typeScriptTag": "fileCategories",
    "description": "Gets a File Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A File Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "File Category not found."
      }
    ]
  },
  {
    "url": "/Follows",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Follows",
    "typeScriptTag": "follows",
    "description": "Gets a list of followed records for the user",
    "parameters": [
      {
        "name": "recordType",
        "schema": "string",
        "required": false,
        "description": "Optional, filters followed records by a given record type."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid record_type specified."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/ForumCategories",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumCategories",
    "typeScriptTag": "forumCategories",
    "description": "Gets a list of Forum Categories",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/ForumCategories/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumCategories",
    "typeScriptTag": "forumCategories",
    "description": "Gets a Forum Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/ForumCategories/{id}/Follow",
    "method": "unfollowCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ForumCategories",
    "typeScriptTag": "forumCategories",
    "description": "Stop following a Forum Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/ForumCategories/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumCategories",
    "typeScriptTag": "forumCategories",
    "description": "Gets a Follow state for a Forum Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/ForumCategories/{id}/Follow",
    "method": "startFollowingCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ForumCategories",
    "typeScriptTag": "forumCategories",
    "description": "Start following a Forum Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/ForumCategories/Search",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ForumCategories",
    "typeScriptTag": "forumCategories",
    "description": "Gets a filtered list of Forum Categories",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Instance",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Instance",
    "typeScriptTag": "instance",
    "description": "Gets the Instance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle",
    "method": "listArticleObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a list of Knowledge Articles",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle",
    "method": "addKnowledgeArticle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Adds a Knowledge Article",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ARTICLE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FOLDER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "Body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "URL_SLUG",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL_SLUG"
      },
      {
        "name": "PROMOTED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ARCHIVED_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle",
    "method": "updateArticle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Updates a Knowledge Article",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ARTICLE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FOLDER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "Body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "URL_SLUG",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL_SLUG"
      },
      {
        "name": "PROMOTED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ARCHIVED_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}",
    "method": "deleteArticle",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Deletes a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Stop following a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a Follow state for a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Start following a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Deletes a Knowledge Article's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a Knowledge Article's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Updates a Knowledge Article's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Tags",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Deletes a Tag from a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a Knowledge Article's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Tags",
    "method": "addTagToArticle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Adds a Tag to a Knowledge Article",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Updates a Knowledge Article's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Translations/{language}",
    "method": "getTranslation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a Knowledge Article's translation in a specific language",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "The requested language",
        "example": "LANGUAGE"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Translations/{language}",
    "method": "addTranslation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Adds a Translation for a Knowledge Article in a specific language",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "The language of the translation to add",
        "example": "LANGUAGE"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ARTICLE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FOLDER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "Body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "URL_SLUG",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL_SLUG"
      },
      {
        "name": "PROMOTED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ARCHIVED_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/{id}/Translations/{language}",
    "method": "updateTranslation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Updates a Knowledge Article's translation in a specific language",
    "parameters": [
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "The language of the record's translation to update",
        "example": "LANGUAGE"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ARTICLE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FOLDER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "Title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "Body",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "URL_SLUG",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL_SLUG"
      },
      {
        "name": "PROMOTED",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ARCHIVED_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/Search",
    "method": "getListByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a filtered list of Knowledge Articles",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticle/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticles",
    "typeScriptTag": "knowledgeArticles",
    "description": "Gets a list of Knowledge Articles filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Gets a list of Knowledge Article Categories",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory",
    "method": "addCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Adds a Knowledge Article Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "DESCRIPTION",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Updates a Knowledge Article Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "DESCRIPTION",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory/{id}",
    "method": "getCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Gets a Knowledge Article Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleCategory/Search",
    "method": "filterList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticleCategories",
    "typeScriptTag": "knowledgeArticleCategories",
    "description": "Gets a filtered list of Knowledge Article Categories",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Gets a list of Knowledge Article Folders",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder",
    "method": "addFolder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Adds a Knowledge Article Folder",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "FOLDER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FOLDER_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FOLDER_NAME"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_ID"
      },
      {
        "name": "VISIBILITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORDER_ARTICLES",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder",
    "method": "updateFolder",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Updates a Knowledge Article Folder",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "FOLDER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FOLDER_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FOLDER_NAME"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_ID"
      },
      {
        "name": "VISIBILITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORDER_ARTICLES",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder/{id}",
    "method": "getFolder",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Gets a Knowledge Article Folder",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/KnowledgeArticleFolder/Search",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KnowledgeArticleFolders",
    "typeScriptTag": "knowledgeArticleFolders",
    "description": "Gets a filtered list of Knowledge Article Folders",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Leads",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a list of Leads",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Leads",
    "method": "createLead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds a Lead",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "LEAD_SOURCE_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LEAD_STATUS_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMPLOYEE_COUNT",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "INDUSTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_RATING",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Leads",
    "method": "updateLead",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a Lead",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "LEAD_SOURCE_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LEAD_STATUS_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMPLOYEE_COUNT",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "INDUSTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_RATING",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Leads/{id}",
    "method": "deleteLead",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Deletes a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}",
    "method": "getLead",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/ActivitySetAssignment",
    "method": "addActivitySetAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds an Activity Set to a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ACTIVITYSET_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "END_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ACTIVITY_ASSIGNMENTS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Activity Set or Activities not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Emails",
    "method": "getEmailsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a list of a Lead's Emails",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when email was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of emails to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of emails to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Events",
    "method": "getLeadEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's Events",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when event was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of events to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of events to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds a File Attachment to a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Follow",
    "method": "unfollowLead",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Stop following a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Follow state for a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Follow",
    "method": "startFollowingLead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Start following a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Image",
    "method": "deleteLeadImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Deletes a Lead's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Image/{filename}",
    "method": "updateImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a Lead's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "Name of Image File to be attached to Record",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Deletes a Lead's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/ImageField/{fieldName}",
    "method": "customImageFieldGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a Lead's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/LinkEmailAddress",
    "method": "linkEmailAddressGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets the email address to use for linking with the Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Links",
    "method": "getLeadLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Links",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Note",
    "method": "getLeadNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a list of Notes of a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Note",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds a Note to a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "LEAD_SOURCE_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LEAD_STATUS_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMPLOYEE_COUNT",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "INDUSTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_RATING",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Note",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a Note of a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "LEAD_SOURCE_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LEAD_STATUS_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMPLOYEE_COUNT",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "INDUSTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_RATING",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Note/{childEntityId}",
    "method": "deleteNoteChildEntity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Deletes a Note of a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Notes",
    "method": "getLeadNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's Notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when note was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of notes to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of notes to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds a Note to a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Notes",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a note of a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Tags",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Deletes a Tag from a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a Lead's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Tags",
    "method": "addTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Adds a Tag to a Lead",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Updates a Lead's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/{id}/Tasks",
    "method": "getLeadTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a list of a Lead's Tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when task was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of tasks to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of tasks to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Leads/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a filtered list of Leads",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Leads/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leads",
    "typeScriptTag": "leads",
    "description": "Gets a list of Leads filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/LeadSources",
    "method": "deleteSource",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LeadSources",
    "typeScriptTag": "leadSources",
    "description": "Deletes a Lead Source",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Lead Source's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to delete Lead Sources or Lead Management disabled."
      },
      {
        "statusCode": "404",
        "description": "Lead Source not found."
      },
      {
        "statusCode": "409",
        "description": "Lead Source cannot be deleted because it's in use or if it's the only Lead Source in you instance."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/LeadSources",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeadSources",
    "typeScriptTag": "leadSources",
    "description": "Gets a list of Lead Sources",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of lead sources to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of lead sources to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "Lead Management disabled."
      }
    ]
  },
  {
    "url": "/LeadSources",
    "method": "addLeadSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LeadSources",
    "typeScriptTag": "leadSources",
    "description": "Adds a Lead Source",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_SOURCE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_SOURCE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEAD_SOURCE"
      },
      {
        "name": "DEFAULT_VALUE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FIELD_ORDER",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add Lead Sources or Lead Management disabled."
      }
    ]
  },
  {
    "url": "/LeadSources",
    "method": "updateLeadSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LeadSources",
    "typeScriptTag": "leadSources",
    "description": "Updates a Lead Source",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_SOURCE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_SOURCE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEAD_SOURCE"
      },
      {
        "name": "DEFAULT_VALUE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "FIELD_ORDER",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to edit Lead Sources or Lead Management disabled."
      },
      {
        "statusCode": "404",
        "description": "Lead Source not found."
      }
    ]
  },
  {
    "url": "/LeadStatuses",
    "method": "deleteStatus",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "LeadStatuses",
    "typeScriptTag": "leadStatuses",
    "description": "Deletes a Lead Status",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Lead Status's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to delete Lead Statuses or Lead Management disabled."
      },
      {
        "statusCode": "404",
        "description": "Lead Status not found."
      },
      {
        "statusCode": "409",
        "description": "Lead Status cannot be deleted because it's in use or if you only have one OPEN and one CLOSED Lead Status in your instance."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/LeadStatuses",
    "method": "listStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeadStatuses",
    "typeScriptTag": "leadStatuses",
    "description": "Gets a list of Lead Statuses",
    "parameters": [
      {
        "name": "includeConverted",
        "schema": "boolean",
        "required": false,
        "description": "Optional, by default converted status is not included, pass in \"true\" to include it in the response",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of lead statuses to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of lead statuses to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "Lead Management disabled."
      }
    ]
  },
  {
    "url": "/LeadStatuses",
    "method": "addStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "LeadStatuses",
    "typeScriptTag": "leadStatuses",
    "description": "Adds a Lead Status",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_STATUS_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEAD_STATUS"
      },
      {
        "name": "DEFAULT_STATUS",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS_TYPE",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FIELD_ORDER",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add Lead Statuses or Lead Management disabled."
      }
    ]
  },
  {
    "url": "/LeadStatuses",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "LeadStatuses",
    "typeScriptTag": "leadStatuses",
    "description": "Updates a Lead Status",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LEAD_STATUS_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "LEAD_STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LEAD_STATUS"
      },
      {
        "name": "DEFAULT_STATUS",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS_TYPE",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FIELD_ORDER",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to edit Lead Statuses or Lead Management disabled."
      },
      {
        "statusCode": "404",
        "description": "Lead Status not found."
      }
    ]
  },
  {
    "url": "/MarketingCustomEvent",
    "method": "addStructuredEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "MarketingCustomEvents",
    "typeScriptTag": "marketingCustomEvents",
    "description": "Adds a Structured Custom Event",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROSPECT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CATEGORY",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "ACTION",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACTION"
      },
      {
        "name": "LABEL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROPERTY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "VALUE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IPADDRESS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      }
    ]
  },
  {
    "url": "/MarketingVisits",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "MarketingVisits",
    "typeScriptTag": "marketingVisits",
    "description": "Gets a list of Marketing Visits",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of marketing visits to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of marketing visits to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/MarketingVisits/{id}",
    "method": "getListByProspect",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "MarketingVisits",
    "typeScriptTag": "marketingVisits",
    "description": "Gets a list of Marketing Visits by prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A prospect ID",
        "example": 0
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of marketing visits to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of marketing visits to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Marketing Visit not found."
      }
    ]
  },
  {
    "url": "/Milestones",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Gets a list of Milestones",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Milestones/{id}",
    "method": "getMilestone",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Gets a Milestone",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Milestones/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Milestones",
    "typeScriptTag": "milestones",
    "description": "Gets a filtered list of Milestones",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Notes",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a list of Notes",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Notes",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Updates a Note",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Notes/{id}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Deletes a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Notes/{id}",
    "method": "getNote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Comment",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a list of Comments of a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Comment",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Updates a Comment of a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Comment/{childEntityId}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Deletes a Comment of a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a Note's Comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when comment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of comments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of comments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Comments",
    "method": "addCommentToNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Adds a Comment to a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a Note's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Adds a File Attachment to a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Stop following a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a Follow state for a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Start following a Note",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a Note's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Notes/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Notes/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Gets a filtered list of Notes",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Opportunities",
    "method": "listOpportunities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a list of Opportunities",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Opportunities",
    "method": "addOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds an Opportunity",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_NAME"
      },
      {
        "name": "OPPORTUNITY_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_CURRENCY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_AMOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_DURATION",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTUAL_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROBABILITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORECAST_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Opportunities",
    "method": "updateOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates an Opportunity",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_NAME"
      },
      {
        "name": "OPPORTUNITY_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_CURRENCY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_AMOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_DURATION",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTUAL_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROBABILITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORECAST_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}",
    "method": "deleteOpportunity",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/ActivitySetAssignment",
    "method": "addActivitySet",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds an Activity Set to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ACTIVITYSET_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "END_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ACTIVITY_ASSIGNMENTS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Activity Set or Activities not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Emails",
    "method": "getEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a list of an Opportunity's Emails",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when email was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of emails to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of emails to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's Events",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when event was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of events to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of events to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds a File Attachment to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Follow",
    "method": "unfollow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Stop following an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a Follow state for an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Start following an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes an Opportunity's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Image/{filename}",
    "method": "updateImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates an Opportunity's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "Name of Image File to be attached to Record",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes an Opportunity's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates an Opportunity's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/LinkEmailAddress",
    "method": "getLinkEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets the email address to use for linking with the Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Links",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Note",
    "method": "getNoteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a list of Notes of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Note",
    "method": "addNoteToOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds a Note to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_NAME"
      },
      {
        "name": "OPPORTUNITY_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_CURRENCY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_AMOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_DURATION",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTUAL_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROBABILITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORECAST_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Note",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates a Note of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_NAME"
      },
      {
        "name": "OPPORTUNITY_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_CURRENCY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_AMOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_DURATION",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTUAL_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROBABILITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORECAST_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Note/{childEntityId}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes a Note of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Notes",
    "method": "getNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's Notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when note was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of notes to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of notes to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds a Note to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Notes",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates a note of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/OpportunityLineItem",
    "method": "getOpportunityLineItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a list of Opportunity Products of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/OpportunityLineItem",
    "method": "addOpportunityProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds an Opportunity Product to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ITEM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "UNIT_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUANTITY",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SERVICE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TOTAL_PRICE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LIST_PRICE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "SUBTOTAL",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DISCOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/OpportunityLineItem",
    "method": "updateOpportunityProduct",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates an Opportunity Product of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ITEM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "UNIT_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUANTITY",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SERVICE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TOTAL_PRICE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LIST_PRICE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "SUBTOTAL",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DISCOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/OpportunityLineItem/{childEntityId}",
    "method": "deleteOpportunityProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes an Opportunity Product of an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Pipeline",
    "method": "clearPipeline",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Clears pipeline for the Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Pipeline",
    "method": "changePipeline",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Changes current pipeline for the Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PIPELINE_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "PIPELINE_STAGE_CHANGE",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to record."
      },
      {
        "statusCode": "404",
        "description": "Record, Pipeline or Pipeline Stage not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/PipelineStage",
    "method": "updatePipelineStage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Changes current pipeline stage for the Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PIPELINE_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "PIPELINE_STAGE_CHANGE",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Pipeline or Pipeline Stage not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Pricebook",
    "method": "updatePriceBook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Changes current Price Book for the Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPPORTUNITY_NAME"
      },
      {
        "name": "OPPORTUNITY_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_CURRENCY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_AMOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "BID_DURATION",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTUAL_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROBABILITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "FORECAST_CLOSE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to record."
      },
      {
        "statusCode": "404",
        "description": "Record, Pricebook not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/StateChange",
    "method": "updateState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates an Opportunity State",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Opportunity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "DATE_CHANGED_UTC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "FOR_OPPORTUNITY_STATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "STATE_REASON_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "STATE_REASON",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Opportunity."
      },
      {
        "statusCode": "404",
        "description": "Opportunity not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/StateHistory",
    "method": "getStateHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets the history of States and Reasons for an Opportunity.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "An Opportunity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Opportunity."
      },
      {
        "statusCode": "404",
        "description": "Opportunity not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Sync",
    "method": "syncQuotation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Tags",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Deletes a Tag from an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets an Opportunity's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Tags",
    "method": "addTagToOpportunity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Adds a Tag to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Updates an Opportunity's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/{id}/Tasks",
    "method": "getTasksList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a list of an Opportunity's Tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when task was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of tasks to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of tasks to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Opportunities/Search",
    "method": "getListFiltered",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a filtered list of Opportunities",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Opportunities/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Opportunities",
    "typeScriptTag": "opportunities",
    "description": "Gets a list of Opportunities filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/OpportunityCategories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityCategories",
    "typeScriptTag": "opportunityCategories",
    "description": "Gets a list of Opportunity Categories",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of categories to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of categories to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/OpportunityCategories",
    "method": "addNewCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OpportunityCategories",
    "typeScriptTag": "opportunityCategories",
    "description": "Adds an Opportunity Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add Opportunity Categories."
      }
    ]
  },
  {
    "url": "/OpportunityCategories",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "OpportunityCategories",
    "typeScriptTag": "opportunityCategories",
    "description": "Updates an Opportunity Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to edit Opportunity Categories."
      },
      {
        "statusCode": "404",
        "description": "Opportunity Category not found."
      },
      {
        "statusCode": "409",
        "description": "Opportunity Category cannot be updated because it has been deactivated."
      }
    ]
  },
  {
    "url": "/OpportunityCategories/{id}",
    "method": "deactivateCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OpportunityCategories",
    "typeScriptTag": "opportunityCategories",
    "description": "Deactivates an Opportunity Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "An Opportunity Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Deactivation succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to deactivate Opportunity Categories."
      },
      {
        "statusCode": "404",
        "description": "Opportunity Category not found."
      },
      {
        "statusCode": "409",
        "description": "Opportunity Category cannot be deactivated because it's in use or already deactivated."
      },
      {
        "statusCode": "417",
        "description": "Deactivation failed."
      }
    ]
  },
  {
    "url": "/OpportunityCategories/{id}",
    "method": "getGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityCategories",
    "typeScriptTag": "opportunityCategories",
    "description": "Gets an Opportunity Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "An Opportunity Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Opportunity Category not found."
      }
    ]
  },
  {
    "url": "/OpportunityLineItem",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityProducts",
    "typeScriptTag": "opportunityProducts",
    "description": "Gets a list of Opportunity Products",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/OpportunityLineItem/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityProducts",
    "typeScriptTag": "opportunityProducts",
    "description": "Gets an Opportunity Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/OpportunityLineItem/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "OpportunityProducts",
    "typeScriptTag": "opportunityProducts",
    "description": "Deletes an Opportunity Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/OpportunityLineItem/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityProducts",
    "typeScriptTag": "opportunityProducts",
    "description": "Gets an Opportunity Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/OpportunityLineItem/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "OpportunityProducts",
    "typeScriptTag": "opportunityProducts",
    "description": "Updates an Opportunity Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/OpportunityLineItem/Search",
    "method": "filteredListGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityProducts",
    "typeScriptTag": "opportunityProducts",
    "description": "Gets a filtered list of Opportunity Products",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/OpportunityStateReasons",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpportunityStateReasons",
    "typeScriptTag": "opportunityStateReasons",
    "description": "Gets a list of Opportunity State Reasons",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of states to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of states to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Organisations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a list of Organisations",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Organisations",
    "method": "createOrganisation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds an Organisation",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANISATION_NAME"
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Organisations",
    "method": "updateOrganisation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an Organisation",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANISATION_NAME"
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Organisations/{id}",
    "method": "removeOrganisation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}",
    "method": "getOrganisation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/ActivitySetAssignment",
    "method": "addActivitySetAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds an Activity Set to an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ACTIVITYSET_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "END_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ACTIVITY_ASSIGNMENTS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Activity Set or Activities not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Dates",
    "method": "getDates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Dates",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Dates",
    "method": "updateDates",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an Organisation's Dates",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "DATE_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OCCASION_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OCCASION_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "REPEAT_YEARLY",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "CREATE_TASK_YEARLY",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/EmailDomains",
    "method": "getEmailDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Email Domains",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/EmailDomains",
    "method": "updateEmailDomains",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an Organisation's Email Domains",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "EMAIL_DOMAIN_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_DOMAIN",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_DOMAIN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Email Domain not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Emails",
    "method": "getEmailList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a list of an Organisation's Emails",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when email was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of emails to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of emails to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Events",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when event was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of events to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of events to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds a File Attachment to an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Stop following an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a Follow state for an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Start following an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes an Organisation's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Image/{filename}",
    "method": "updateImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an Organisation's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "Name of Image File to be attached to Record",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/ImageField/{fieldName}",
    "method": "deleteImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes an Organisation's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an Organisation's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Links",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Note",
    "method": "getNoteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a list of Notes of an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Note",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds a Note to an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANISATION_NAME"
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Note",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates a Note of an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANISATION_NAME"
      },
      {
        "name": "BACKGROUND",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PHONE_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIP_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_LINKEDIN",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_FACEBOOK",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SOCIAL_TWITTER",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Note/{childEntityId}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes a Note of an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Notes",
    "method": "getNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when note was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of notes to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of notes to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Notes",
    "method": "addNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds a Note to an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Notes",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates a note of an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Tags",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Deletes a Tag from an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets an Organisation's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Tags",
    "method": "addTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Adds a Tag to an Organisation",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Updates an Organisation's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/{id}/Tasks",
    "method": "listTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a list of an Organisation's Tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when task was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of tasks to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of tasks to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Organisations/Search",
    "method": "filterList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a filtered list of Organisations",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Organisations/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organisations",
    "typeScriptTag": "organisations",
    "description": "Gets a list of Organisations filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Permissions",
    "method": "getUserPermissions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Permissions",
    "typeScriptTag": "permissions",
    "description": "Gets the Permissions for a User",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Pipelines",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Gets a list of Pipelines",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of pipelines to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of pipelines to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Pipelines/{id}",
    "method": "getGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pipelines",
    "typeScriptTag": "pipelines",
    "description": "Gets a Pipeline",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Pipeline's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Pipeline not found."
      }
    ]
  },
  {
    "url": "/PipelineStages",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PipelineStages",
    "typeScriptTag": "pipelineStages",
    "description": "Gets a list of Pipeline Stages",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of stages to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of stages to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/PipelineStages/{id}",
    "method": "getGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PipelineStages",
    "typeScriptTag": "pipelineStages",
    "description": "Gets a Pipeline Stage",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Pipeline Stage's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Pipeline Stage not found."
      }
    ]
  },
  {
    "url": "/Pricebook",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Gets a list of Price Books",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Pricebook",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Adds a Price Book",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Pricebook",
    "method": "updatePriceBook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Updates a Price Book",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Gets a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Stop following a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Gets a Follow state for a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Start following a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/PricebookEntry",
    "method": "getPricebookEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Gets a list of Price Book Entries of a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/PricebookEntry",
    "method": "addEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Adds a Price Book Entry to a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PRODUCT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "USE_STANDARD_PRICE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CREATED_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/PricebookEntry",
    "method": "updatePriceBookEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Updates a Price Book Entry of a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PRODUCT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "USE_STANDARD_PRICE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CREATED_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/PricebookEntry/{childEntityId}",
    "method": "deletePriceBookEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Deletes a Price Book Entry of a Price Book",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Pricebook/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Pricebook/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBooks",
    "typeScriptTag": "priceBooks",
    "description": "Gets a filtered list of Price Books",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/PricebookEntry",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBookEntries",
    "typeScriptTag": "priceBookEntries",
    "description": "Gets a list of Price Book Entries",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/PricebookEntry/{id}",
    "method": "getEntry",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBookEntries",
    "typeScriptTag": "priceBookEntries",
    "description": "Gets a Price Book Entry",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/PricebookEntry/{id}/ImageField/{fieldName}",
    "method": "deleteImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "PriceBookEntries",
    "typeScriptTag": "priceBookEntries",
    "description": "Deletes a Price Book Entry's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/PricebookEntry/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBookEntries",
    "typeScriptTag": "priceBookEntries",
    "description": "Gets a Price Book Entry's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/PricebookEntry/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "PriceBookEntries",
    "typeScriptTag": "priceBookEntries",
    "description": "Updates a Price Book Entry's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/PricebookEntry/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PriceBookEntries",
    "typeScriptTag": "priceBookEntries",
    "description": "Gets a filtered list of Price Book Entries",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Product",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a list of Products",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Product",
    "method": "createProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Adds a Product",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRODUCT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_NAME"
      },
      {
        "name": "PRODUCT_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_SKU",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_FAMILY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DEFAULT_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Product",
    "method": "updateProduct",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Updates a Product",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRODUCT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT_NAME"
      },
      {
        "name": "PRODUCT_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_SKU",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_FAMILY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRODUCT_IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DEFAULT_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Product/{id}",
    "method": "deleteProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Deletes a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Product/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Stop following a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Product/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a Follow state for a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/Follow",
    "method": "startFollowingProduct",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Start following a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/Image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Deletes a Product's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Product/{id}/Image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a Product's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/Image/{filename}",
    "method": "updateImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Updates a Product's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "Name of Image File to be attached to Record",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Product/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Deletes a Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Product/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Updates a Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Product/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/PricebookEntry",
    "method": "getPricebookEntries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a list of Price Book Entries of a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/PricebookEntry",
    "method": "addPriceBookEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Adds a Price Book Entry to a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PRODUCT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "USE_STANDARD_PRICE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CREATED_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/PricebookEntry",
    "method": "updatePriceBookEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Updates a Price Book Entry of a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PRODUCT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "USE_STANDARD_PRICE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "CREATED_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Product/{id}/PricebookEntry/{childEntityId}",
    "method": "deletePriceBookEntry",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Deletes a Price Book Entry of a Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Product/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Product/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Gets a filtered list of Products",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/ProjectCategories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectCategories",
    "typeScriptTag": "projectCategories",
    "description": "Gets a list of Project Categories",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of categories to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of categories to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/ProjectCategories",
    "method": "addCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ProjectCategories",
    "typeScriptTag": "projectCategories",
    "description": "Adds a Project Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add Project Categories."
      }
    ]
  },
  {
    "url": "/ProjectCategories",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProjectCategories",
    "typeScriptTag": "projectCategories",
    "description": "Updates a Project Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to edit Project Categories."
      },
      {
        "statusCode": "404",
        "description": "Project Category not found."
      },
      {
        "statusCode": "409",
        "description": "Project Category cannot be updated because it has been deactivated."
      }
    ]
  },
  {
    "url": "/ProjectCategories/{id}",
    "method": "deactivateCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProjectCategories",
    "typeScriptTag": "projectCategories",
    "description": "Deactivates a Project Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Project Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Deactivation succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to deactivate Project Categories."
      },
      {
        "statusCode": "404",
        "description": "Project Category not found."
      },
      {
        "statusCode": "409",
        "description": "Project Category cannot be deactivated because it's in use or already deactivated."
      },
      {
        "statusCode": "417",
        "description": "Deactivation failed."
      }
    ]
  },
  {
    "url": "/ProjectCategories/{id}",
    "method": "getGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProjectCategories",
    "typeScriptTag": "projectCategories",
    "description": "Gets a Project Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Project Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Project Category not found."
      }
    ]
  },
  {
    "url": "/Projects",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a list of Projects",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Projects",
    "method": "addProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a Project",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PROJECT_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECT_NAME"
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "PROJECT_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STARTED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Projects",
    "method": "updateProject",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Project",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PROJECT_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECT_NAME"
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "PROJECT_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STARTED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Projects/{id}",
    "method": "deleteProject",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}",
    "method": "getProject",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/ActivitySetAssignment",
    "method": "addActivityAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds an Activity Set to a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "ACTIVITYSET_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "END_DATE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "ACTIVITY_ASSIGNMENTS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Activity Set or Activities not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Emails",
    "method": "getListEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a list of a Project's Emails",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when email was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of emails to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of emails to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Events",
    "method": "getEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's Events",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when event was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of events to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of events to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/FileAttachments",
    "method": "getFileAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's File Attachments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when file attachment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of file attachments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of file attachments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/FileAttachments",
    "method": "addFileAttachment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a File Attachment to a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Record ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file_category_id",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record or storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "File Attachment insert failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Stop following a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Follow state for a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Start following a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Image",
    "method": "deleteImage",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Project's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Image",
    "method": "getImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Image/{filename}",
    "method": "updateProjectImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Project's Image",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "filename",
        "schema": "string",
        "required": true,
        "description": "Name of Image File to be attached to Record",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/ImageField/{fieldName}",
    "method": "deleteImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Project's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Project's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/LinkEmailAddress",
    "method": "linkEmailAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets the email address to use for linking with the Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Links",
    "method": "updateLink",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Milestones",
    "method": "listMilestones",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a list of a Project's Milestones",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Milestones",
    "method": "addMilestone",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a Milestone",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "MILESTONE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DUE_DATE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DUE_DATE"
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Milestones",
    "method": "updateMilestone",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Milestone",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "MILESTONE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DUE_DATE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DUE_DATE"
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Milestone not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Milestones/{milestoneId}",
    "method": "deleteMilestone",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Milestone",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "milestoneId",
        "schema": "integer",
        "required": true,
        "description": "A Milestone's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Milestone not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Note",
    "method": "getNoteList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a list of Notes of a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Note",
    "method": "addNoteToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a Note to a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PROJECT_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECT_NAME"
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "PROJECT_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STARTED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Note",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Note of a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "PROJECT_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROJECT_NAME"
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "PROJECT_DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STARTED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "IMAGE_URL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Note/{childEntityId}",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Note of a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Notes",
    "method": "getNotes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's Notes",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when note was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of notes to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of notes to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Notes",
    "method": "addNoteToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a Note to a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Notes",
    "method": "updateNoteOperation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a note of a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "NOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "BODY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Pipeline",
    "method": "clearPipeline",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Clears pipeline for the Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Pipeline",
    "method": "changePipeline",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Changes current pipeline for the Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PIPELINE_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "PIPELINE_STAGE_CHANGE",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to record."
      },
      {
        "statusCode": "404",
        "description": "Record, Pipeline or Pipeline Stage not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/PipelineStage",
    "method": "changeStage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Changes current pipeline stage for the Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PIPELINE_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "PIPELINE_STAGE_CHANGE",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record, Pipeline or Pipeline Stage not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Tags",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Deletes a Tag from a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a Project's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Tags",
    "method": "addTagToProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Adds a Tag to a Project",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Updates a Project's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/{id}/Tasks",
    "method": "getTaskList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a list of a Project's Tasks",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when task was last updated."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of tasks to return."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of tasks to skip."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "true if only top level properties needs to be returned.",
        "default": false
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Projects/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a filtered list of Projects",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Projects/SearchByTag",
    "method": "listByTag",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Gets a list of Projects filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Prospect",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a list of Prospects",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Prospect",
    "method": "addProspect",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Adds a Prospect",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROSPECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_ADDRESS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "INDUSTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMPLOYEE_COUNT",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DO_NOT_EMAIL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "DO_NOT_CALL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DO_NOT_SYNC",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "GRADE_PROFILE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Prospect",
    "method": "updateProspect",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Updates a Prospect",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PROSPECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "SALUTATION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FIRST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "LAST_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMAIL_ADDRESS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL_ADDRESS"
      },
      {
        "name": "PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MOBILE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "WEBSITE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "INDUSTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "EMPLOYEE_COUNT",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DO_NOT_EMAIL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "DO_NOT_CALL",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OPTED_OUT",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DO_NOT_SYNC",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "GRADE_PROFILE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Prospect/{id}",
    "method": "deleteProspect",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Deletes a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Prospect/{id}",
    "method": "getProspectById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Stop following a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a Follow state for a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Start following a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Deletes a Prospect's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a Prospect's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Updates a Prospect's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/StaticListMembership",
    "method": "removeFromStaticList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Removes a Prospect from a static list",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Prospect's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LIST_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "400",
        "description": "Provided static list ID was not found."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record"
      },
      {
        "statusCode": "404",
        "description": "Prospect not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/StaticListMembership",
    "method": "getStaticListMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a Prospect's static list memberships",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Prospect's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record"
      },
      {
        "statusCode": "404",
        "description": "Prospect not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/StaticListMembership",
    "method": "addToStaticList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Adds a Prospect to a static list",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Prospect's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LIST_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record"
      },
      {
        "statusCode": "404",
        "description": "Prospect not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/StaticListMembership",
    "method": "updateStaticListMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Updates a Prospect's static list memberships",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Prospect's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record"
      },
      {
        "statusCode": "404",
        "description": "Prospect not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Tags",
    "method": "deleteTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Deletes a Tag from a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a Prospect's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Tags",
    "method": "addTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Adds a Tag to a Prospect",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Prospect/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Updates a Prospect's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Prospect/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a filtered list of Prospects",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Prospect/SearchByTag",
    "method": "searchByTagList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Prospects",
    "typeScriptTag": "prospects",
    "description": "Gets a list of Prospects filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Quotation",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a list of Quotes",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Quotation",
    "method": "addQuoteOperation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Adds a Quote",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "QUOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUOTATION_NAME"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_EMAIL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTE_STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_EXPIRATION_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IS_SYNCING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "SHIPPING_HANDLING",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "TAX",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Quotation",
    "method": "updateQuote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Updates a Quote",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "QUOTE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "QUOTATION_NAME"
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_PHONE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_EMAIL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_FAX",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTE_STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTATION_EXPIRATION_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "IS_SYNCING",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "SHIPPING_HANDLING",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "TAX",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_BILLING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_NAME",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_STREET",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_CITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_STATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_POSTCODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ADDRESS_SHIPPING_COUNTRY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Quotation/{id}",
    "method": "deleteQuoteOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Deletes a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Quotation/{id}",
    "method": "getQuote",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/Follow",
    "method": "stopFollowingQuote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Stop following a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a Follow state for a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/Follow",
    "method": "startFollowingQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Start following a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Deletes a Quote's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a Quote's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Updates a Quote's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/QuotationDocument",
    "method": "getQuoteDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a list of Quote Documents of a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/QuotationDocument/{childEntityId}",
    "method": "deleteDocument",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Deletes a Quote Document of a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/QuotationLineItem",
    "method": "getQuoteLineItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a list of Quote Products of a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/QuotationLineItem",
    "method": "addProductToQuote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Adds a Quote Product to a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "QUOTATION_ITEM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTE_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "OPPORTUNITY_ITEM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUANTITY",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LIST_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "UNIT_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SUBTOTAL",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DISCOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "TOTAL_PRICE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SORT_ORDER",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/QuotationLineItem",
    "method": "updateQuotationLineItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Updates a Quote Product of a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "QUOTATION_ITEM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "QUOTE_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "OPPORTUNITY_ITEM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PRICEBOOK_ENTRY_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "DESCRIPTION",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CURRENCY_CODE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "QUANTITY",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "LIST_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "UNIT_PRICE",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "SUBTOTAL",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DISCOUNT",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "TOTAL_PRICE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SORT_ORDER",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/QuotationLineItem/{childEntityId}",
    "method": "deleteQuoteProduct",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Deletes a Quote Product of a Quote",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Quotation/{id}/Sync",
    "method": "syncToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Quotation/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quotes",
    "typeScriptTag": "quotes",
    "description": "Gets a filtered list of Quotes",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/QuotationLineItem",
    "method": "listQuoteProducts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QuoteProducts",
    "typeScriptTag": "quoteProducts",
    "description": "Gets a list of Quote Products",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/QuotationLineItem/{id}",
    "method": "getProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QuoteProducts",
    "typeScriptTag": "quoteProducts",
    "description": "Gets a Quote Product",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/QuotationLineItem/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "QuoteProducts",
    "typeScriptTag": "quoteProducts",
    "description": "Deletes a Quote Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/QuotationLineItem/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QuoteProducts",
    "typeScriptTag": "quoteProducts",
    "description": "Gets a Quote Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/QuotationLineItem/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "QuoteProducts",
    "typeScriptTag": "quoteProducts",
    "description": "Updates a Quote Product's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/QuotationLineItem/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "QuoteProducts",
    "typeScriptTag": "quoteProducts",
    "description": "Gets a filtered list of Quote Products",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Relationships",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Relationships",
    "typeScriptTag": "relationships",
    "description": "Gets a list of Relationships",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Tags",
    "method": "getListByRecordType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tags",
    "typeScriptTag": "tags",
    "description": "Gets a list of Tags used for a record type",
    "parameters": [
      {
        "name": "recordType",
        "schema": "string",
        "required": true,
        "description": "Required, filters tags by a given record type.",
        "example": "RECORD_TYPE"
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Invalid id specified."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/TaskCategories",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskCategories",
    "typeScriptTag": "taskCategories",
    "description": "Gets a list of Task Categories",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/TaskCategories",
    "method": "createCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TaskCategories",
    "typeScriptTag": "taskCategories",
    "description": "Adds a Task Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add Task Categories."
      }
    ]
  },
  {
    "url": "/TaskCategories",
    "method": "updateCategory",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TaskCategories",
    "typeScriptTag": "taskCategories",
    "description": "Updates a Task Category",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CATEGORY_NAME",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY_NAME"
      },
      {
        "name": "ACTIVE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "BACKGROUND_COLOR",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND_COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to edit Task Categories."
      },
      {
        "statusCode": "404",
        "description": "Task Category not found."
      },
      {
        "statusCode": "409",
        "description": "Task Category cannot be updated because it has been deactivated."
      }
    ]
  },
  {
    "url": "/TaskCategories/{id}",
    "method": "deactivateCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TaskCategories",
    "typeScriptTag": "taskCategories",
    "description": "Deactivates a Task Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Task Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Deactivation succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to deactivate Task Categories."
      },
      {
        "statusCode": "404",
        "description": "Task Category not found."
      },
      {
        "statusCode": "409",
        "description": "Task Category cannot be deactivated because it's in use or already deactivated."
      },
      {
        "statusCode": "417",
        "description": "Deactivation failed."
      }
    ]
  },
  {
    "url": "/TaskCategories/{id}",
    "method": "getGraph",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TaskCategories",
    "typeScriptTag": "taskCategories",
    "description": "Gets a Task Category",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Task Category's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Task Category not found."
      }
    ]
  },
  {
    "url": "/Tasks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a list of Tasks",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Tasks",
    "method": "addTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Adds a Task",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TASK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DUE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRIORITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PERCENT_COMPLETE",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MILESTONE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "EMAIL_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_VISIBLE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PARENT_TASK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RECURRENCE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSIGNED_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Tasks",
    "method": "updateTask",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Updates a Task",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TASK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DUE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRIORITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PERCENT_COMPLETE",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MILESTONE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "EMAIL_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_VISIBLE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PARENT_TASK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RECURRENCE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSIGNED_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Tasks/{id}",
    "method": "deleteTask",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Deletes a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Tasks/{id}",
    "method": "getTask",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Comment",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a list of Comments of a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Comment",
    "method": "addCommentToTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Adds a Comment to a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TASK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DUE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRIORITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PERCENT_COMPLETE",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MILESTONE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "EMAIL_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_VISIBLE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PARENT_TASK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RECURRENCE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSIGNED_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Comment",
    "method": "updateComment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Updates a Comment of a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TASK_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "TITLE",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "CATEGORY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "DUE_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "COMPLETED",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "STATUS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "PRIORITY",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PERCENT_COMPLETE",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "START_DATE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "MILESTONE_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RESPONSIBLE_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "EMAIL_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "PROJECT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "REMINDER_DATE_UTC",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_VISIBLE",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "PARENT_TASK_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "RECURRENCE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "OPPORTUNITY_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ASSIGNED_TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Comment/{childEntityId}",
    "method": "deleteComment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Deletes a Comment of a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "childEntityId",
        "schema": "integer",
        "required": true,
        "description": "A child entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a Task's Comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when comment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of comments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of comments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Comments",
    "method": "addComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Adds a Comment to a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Stop following a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a Follow state for a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Follow",
    "method": "startFollowingTask",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Start following a Task",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Deletes a Task's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a Task's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Updates a Task's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Links",
    "method": "getLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a Task's Links",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Links",
    "method": "addLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Adds a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "LINK_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "LINK_OBJECT_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "ROLE",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DETAILS",
        "schema": "string",
        "description": ""
      },
      {
        "name": "RELATIONSHIP_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "IS_FORWARD",
        "schema": "boolean",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Links/{linkId}",
    "method": "deleteLink",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Deletes a Link",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "linkId",
        "schema": "integer",
        "required": true,
        "description": "A Link's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record or Link not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Tasks/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Tasks/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tasks",
    "typeScriptTag": "tasks",
    "description": "Gets a filtered list of Tasks",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/TeamMembers",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TeamMembers",
    "typeScriptTag": "teamMembers",
    "description": "Gets a list of Team Members",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of team members to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of team members to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/TeamMembers",
    "method": "addNewMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TeamMembers",
    "typeScriptTag": "teamMembers",
    "description": "Adds a new Team Member",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PERMISSION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "MEMBER_USER_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to add Teams Members."
      }
    ]
  },
  {
    "url": "/TeamMembers/{id}",
    "method": "deleteMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TeamMembers",
    "typeScriptTag": "teamMembers",
    "description": "Deletes a Team Member",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Team Member's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have permission to delete Teams Members."
      },
      {
        "statusCode": "404",
        "description": "Team Member not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/TeamMembers/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TeamMembers",
    "typeScriptTag": "teamMembers",
    "description": "Gets a Team Member",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Team Member's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Team Member not found."
      }
    ]
  },
  {
    "url": "/Teams",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Gets a list of Teams.",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the team.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of teams to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of teams to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      }
    ]
  },
  {
    "url": "/Teams",
    "method": "addTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Adds a Team",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TEAM_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "TEAM_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TEAMMEMBERS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      }
    ]
  },
  {
    "url": "/Teams",
    "method": "updateTeamMembers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Updates a Team",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if you wish to do a partial update containing only top level properties of the Team. When true, all sub-collections are ignored.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TEAM_ID",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "TEAM_NAME",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DATE_CREATED_UTC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "DATE_UPDATED_UTC",
        "schema": "string",
        "description": ""
      },
      {
        "name": "TEAMMEMBERS",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      },
      {
        "statusCode": "404",
        "description": "Team not found."
      }
    ]
  },
  {
    "url": "/Teams/{id}",
    "method": "removeTeam",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Deletes a Team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Team's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      },
      {
        "statusCode": "404",
        "description": "Team not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Teams/{id}",
    "method": "getTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Gets a Team",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Team's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      },
      {
        "statusCode": "404",
        "description": "Team not found."
      }
    ]
  },
  {
    "url": "/Teams/{id}/TeamMembers",
    "method": "addTeamMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Adds a Team Member",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Team's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "PERMISSION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TEAM_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "MEMBER_USER_ID",
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
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      },
      {
        "statusCode": "404",
        "description": "Team not found."
      }
    ]
  },
  {
    "url": "/Teams/{id}/TeamMembers/{permissionId}",
    "method": "deleteTeamMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Deletes a Team Member",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Team's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "permissionId",
        "schema": "integer",
        "required": true,
        "description": "A Team Members's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Invalid api key provided."
      },
      {
        "statusCode": "404",
        "description": "Team or Team Member not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Ticket",
    "method": "listObjects",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a list of Tickets",
    "parameters": [
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional,true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Ticket",
    "method": "createTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Adds a Ticket",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TICKET_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TICKET_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SUBJECT",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "TICKET_STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TICKET_STATUS"
      },
      {
        "name": "PRIORITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TO_EMAIL_ADDRESS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TicketCommentBodyHtml",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Ticket",
    "method": "updateTicket",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Updates a Ticket",
    "parameters": [
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TICKET_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "ORGANISATION_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "TICKET_TYPE",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "SUBJECT",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBJECT"
      },
      {
        "name": "TICKET_STATUS",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TICKET_STATUS"
      },
      {
        "name": "PRIORITY",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "TO_EMAIL_ADDRESS",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "CONTACT_ID",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "CUSTOMFIELDS",
        "schema": "array",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      }
    ]
  },
  {
    "url": "/Ticket/{id}",
    "method": "deleteTicketOperation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Deletes a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "Entity's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Ticket/{id}",
    "method": "getTicket",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a Ticket's Comments",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when comment was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of comments to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of comments to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Comments",
    "method": "addComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Adds a Comment to a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "COMMENT_ID",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "OWNER_USER_ID",
        "schema": "integer",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Record limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Follow",
    "method": "stopFollowing",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Stop following a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Follow",
    "method": "getFollowState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a Follow state for a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Follow",
    "method": "startFollowing",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Start following a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/ImageField/{fieldName}",
    "method": "deleteCustomImageField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Deletes a Ticket's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/ImageField/{fieldName}",
    "method": "getCustomImageField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a Ticket's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Request succeeded."
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/ImageField/{fieldName}/{fileName}",
    "method": "updateCustomImageField",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Updates a Ticket's Custom Image Field",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "An image field name",
        "example": "FIELDNAME"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "An image file name",
        "example": "FILENAME"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "402",
        "description": "Storage limit reached."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      },
      {
        "statusCode": "417",
        "description": "Image update failed."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Merge",
    "method": "mergeInto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Merges the Ticket into another Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TARGET_TICKET_NUMBER",
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
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/MergeDocument/{documentTemplateId}",
    "method": "generateMergeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Generates a new Merge Document",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A Record's ID (https://api.na1.insightly.com/v3.1",
        "example": 0
      },
      {
        "name": "documentTemplateId",
        "schema": "integer",
        "required": true,
        "description": "A Document Template Id",
        "example": 0
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Binary(https://api.na1.insightly.com/v3.1 or JSON"
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Document Template."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Sync",
    "method": "syncQuotationToOpportunity",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Sync Quotation to an Opportunity",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The Quotation's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "Quotation not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Tags",
    "method": "removeTag",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Deletes a Tag from a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": "Delete succeeded."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "417",
        "description": "Delete failed."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a Ticket's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Tags",
    "method": "addTagToTicket",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Adds a Tag to a Ticket",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      }
    ]
  },
  {
    "url": "/Ticket/{id}/Tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Updates a Ticket's Tags",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "The record's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      },
      {
        "name": "TAG_NAME",
        "schema": "string",
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
        "description": "Data validation error."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "403",
        "description": "API User does not have access to Record."
      },
      {
        "statusCode": "404",
        "description": "Record not found."
      }
    ]
  },
  {
    "url": "/Ticket/Search",
    "method": "filterList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a filtered list of Tickets",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, field name for object"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the record"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when a record was last updated."
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Ticket/SearchByTag",
    "method": "filterByTagList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tickets",
    "typeScriptTag": "tickets",
    "description": "Gets a list of Tickets filtered by tags",
    "parameters": [
      {
        "name": "tagName",
        "schema": "string",
        "required": true,
        "description": "Tag name to filter on",
        "example": "TAGNAME"
      },
      {
        "name": "brief",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if response should only contain top level properties of the record.",
        "default": false
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of records to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of records to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Users",
    "method": "listUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Gets a list of Users",
    "parameters": [
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of users to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of users to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Users/{id}",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Gets a User",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "A User's ID",
        "example": 0
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      },
      {
        "statusCode": "404",
        "description": "User not found."
      }
    ]
  },
  {
    "url": "/Users/Me",
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Gets the User object for the calling user.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  },
  {
    "url": "/Users/Search",
    "method": "filteredList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Gets a filtered list of Users",
    "parameters": [
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": "Optional, standard field name of Users"
      },
      {
        "name": "fieldValue",
        "schema": "string",
        "required": false,
        "description": "Optional, field value of the user"
      },
      {
        "name": "updatedAfterUtc",
        "schema": "string",
        "required": false,
        "description": "Optional, earliest date when note was last updated."
      },
      {
        "name": "skip",
        "schema": "integer",
        "required": false,
        "description": "Optional, number of users to skip."
      },
      {
        "name": "top",
        "schema": "integer",
        "required": false,
        "description": "Optional, maximum number of users to return in the response."
      },
      {
        "name": "countTotal",
        "schema": "boolean",
        "required": false,
        "description": "Optional, true if total number of records should be returned in the response headers.",
        "default": false
      },
      {
        "name": "authorization",
        "schema": "string",
        "required": true,
        "description": "Authorization",
        "example": "AUTHORIZATION",
        "default": "{{Authorization}}"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Often missing or invalid parameter."
      },
      {
        "statusCode": "401",
        "description": "Authentication failed."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Insightly API v3.1"
      apiBaseUrl="https://api.insightly.com/v3.1"
      apiVersion="v3.1"
      endpoints={323}
      sdkMethods={557}
      schemas={787}
      parameters={3070}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/insightly/openapi.yaml"
      developerDocumentation="api.na1.insightly.com/v3.1"
    />
  );
}
  