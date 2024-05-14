import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function AshbyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ashby-typescript-sdk"
      metaDescription={`Ashby is a California-based SaaS platform that provides solutions such as recruitment management and data analytics for enterprises.`}
      company="Ashby"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/logo.png"
      companyKebabCase="ashby"
      clientNameCamelCase="ashby"
      homepage="ashbyhq.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/favicon.png"
      contactUrl="https://app.ashbyhq.com/support"
      contactEmail="support@ashbyhq.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruitment"]}
      methods={[
  {
    "url": "/apiKey.info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "API Key",
    "typeScriptTag": "apiKey",
    "description": "apiKey.info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/application.change_source",
    "method": "changeSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "application.changeSource",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "undefined",
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
    "url": "/application.change_stage",
    "method": "changeStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "application.changeStage",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "interviewStageId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "archiveReasonId",
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
    "url": "/application.create",
    "method": "considerCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "application.create",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "interviewPlanId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "interviewStageId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "creditedToUserId",
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
    "url": "/application.info",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "application.info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/application.list",
    "method": "getAllSchedules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application",
    "typeScriptTag": "application",
    "description": "application.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applicationFeedback.list",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application Feedback",
    "typeScriptTag": "applicationFeedback",
    "description": "applicationFeedback.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applicationFeedback.submit",
    "method": "submitFeedback",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application Feedback",
    "typeScriptTag": "applicationFeedback",
    "description": "applicationFeedback.submit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/applicationForm.submit",
    "method": "submitForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application Form",
    "typeScriptTag": "applicationForm",
    "description": "applicationForm.submit",
    "parameters": [
      {
        "name": "jobPostingId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "applicationForm",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "utmData",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "<file  key>",
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
    "url": "/archiveReason.list",
    "method": "list",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Archive Reason",
    "typeScriptTag": "archiveReason",
    "description": "archiveReason.list",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment.addCompletedToCandidate",
    "method": "addCompletedToCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment",
    "typeScriptTag": "assessment",
    "description": "assessment.addCompletedToCandidate",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "assessment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "undefined",
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
    "url": "/assessment.start",
    "method": "partnerStart",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment",
    "typeScriptTag": "assessment",
    "description": "assessment.start (Implemented by Partner)",
    "parameters": [
      {
        "name": "assessment_type_id",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "candidate",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "application",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "job",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment.list",
    "method": "listPartnerSupport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment",
    "typeScriptTag": "assessment",
    "description": "assessment.list (Implemented by Partner)",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment.update",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment",
    "typeScriptTag": "assessment",
    "description": "assessment.update",
    "parameters": [
      {
        "name": "assessment_id",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "assessment_status",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "assessment_profile_url",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 1665680638489
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessment.cancel",
    "method": "cancelPartnerAssessment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Assessment",
    "typeScriptTag": "assessment",
    "description": "assessment.cancel (Implemented by Partner)",
    "parameters": [
      {
        "name": "assessment_id",
        "schema": "undefined",
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
    "url": "/candidate.addTag",
    "method": "addTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.addTag",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "5b591aed-88e3-4395-b9c6-7d529f93354a"
      },
      {
        "name": "tagId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "38430ede-5bd2-41fc-b474-87591cb98cbc"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/canidate.anonymize",
    "method": "anonymizeCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.anonymize",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
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
    "url": "/candidate.create",
    "method": "createNewCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.create",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Adam Hart"
      },
      {
        "name": "email",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "linkedInUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://linkedin.com/in/user"
      },
      {
        "name": "githubUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://github.com/user"
      },
      {
        "name": "website",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://twitter.com/user"
      },
      {
        "name": "alternateEmailAddresses",
        "schema": "array",
        "required": false,
        "description": "",
        "example": [
          "test.email@ashbyhq.com"
        ]
      },
      {
        "name": "sourceId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "creditedToUserId",
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
    "url": "/candidate.createNote",
    "method": "createNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.createNote",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "e9ed20fd-d45f-4aad-8a00-a19bfba0083e"
      },
      {
        "name": "note",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "sendNotifications",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidate.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidate.list",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.list",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "",
        "example": "G8"
      },
      {
        "name": "syncToken",
        "schema": "string",
        "description": "",
        "example": "jYnEBmjzR"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "example": 25
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidate.listNotes",
    "method": "getAllNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.listNotes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidate.search",
    "method": "searchByEmailAndName",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.search",
    "parameters": [
      {
        "name": "email",
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
    "url": "/candidate.update",
    "method": "updateExistingCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.update",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Adam Hart"
      },
      {
        "name": "email",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "linkedInUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://linkedin.com/in/user"
      },
      {
        "name": "githubUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://github.com/user"
      },
      {
        "name": "websiteUrl",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://twitter.com/user"
      },
      {
        "name": "alternateEmail",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "test.email@ashbyhq.com"
      },
      {
        "name": "socialLinks",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "creditedToUserId",
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
    "url": "/candidate.uploadFile",
    "method": "attachFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.uploadFile",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
        "required": true,
        "description": ""
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
      }
    ]
  },
  {
    "url": "/candidate.uploadResume",
    "method": "uploadResumeData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "candidate.uploadResume",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "resume",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESUME"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidateTag.create",
    "method": "createNewTag",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate Tag",
    "typeScriptTag": "candidateTag",
    "description": "candidateTag.create",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Strong candidate"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidateTag.list",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate Tag",
    "typeScriptTag": "candidateTag",
    "description": "candidateTag.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customField.create",
    "method": "createNewField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Field",
    "typeScriptTag": "customField",
    "description": "customField.create",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELDTYPE"
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "selectableValues",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "isDateOnlyField",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isExposableToCandidate",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customField.list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Field",
    "typeScriptTag": "customField",
    "description": "customField.list",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "",
        "example": "G8"
      },
      {
        "name": "syncToken",
        "schema": "string",
        "description": "",
        "example": "jYnEBmjzR"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "example": 25
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customField.setValue",
    "method": "setValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Field",
    "typeScriptTag": "customField",
    "description": "customField.setValue",
    "parameters": [
      {
        "name": "objectId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "objectType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OBJECTTYPE"
      },
      {
        "name": "fieldId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fieldValue",
        "schema": "undefined",
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
    "url": "/department.create",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Department & Team",
    "typeScriptTag": "department &Team",
    "description": "department.create",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Engineering"
      },
      {
        "name": "parentId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1be42b8e-cafd-4beb-8121-f4981eb20f42"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/department.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "department.info",
    "parameters": [
      {
        "name": "departmentId",
        "schema": "undefined",
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
    "url": "/department.list",
    "method": "getAllDepartments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "department.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/file.info",
    "method": "getUrlCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "File",
    "typeScriptTag": "file",
    "description": "file.info",
    "parameters": [
      {
        "name": "fileHandle",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "eyJoYW5kbGUiOnsidHlwZSI6IkNhbmRpZGF0ZUZpbGUiLCJmaWxlSWQiOiIxNTk1ZTRmYy04MTQwLTQ1NGUtYTI1ZC04NTNiOTQ3ZWNmYzgiLCJvd25lcklkIjoiYmY5NGZlNmMtMjU3MS00NzQ1LWE1OWEtNTA5MjE3ODI3MDVlIn0sInNpZ25hdHVyZSI6IkFqclpjT0VlTXUwdWxLZlRCS05iMWRkbDdHcjVIWFVmZzNrS0NPL1dWWjg9IiwidmVyc2lvbiI6IjEilQ\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/feedbackFormDefinition.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feedback Form Definition",
    "typeScriptTag": "feedbackFormDefinition",
    "description": "feedbackFormDefinition.info",
    "parameters": [
      {
        "name": "feedbackFormDefinitionId",
        "schema": "undefined",
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
    "url": "/feedbackFormDefinition.list",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Feedback Form Definition",
    "typeScriptTag": "feedbackFormDefinition",
    "description": "feedbackFormDefinition.list",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "cursor",
        "schema": "string",
        "description": "",
        "example": "G8"
      },
      {
        "name": "syncToken",
        "schema": "string",
        "description": "",
        "example": "jYnEBmjzR"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "example": 25
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/hiringTeam.addMember",
    "method": "addMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hiring Team",
    "typeScriptTag": "hiringTeam",
    "description": "hiringTeam.addMember",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/hiringTeamRole.list",
    "method": "listRoles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hiring Team Role",
    "typeScriptTag": "hiringTeamRole",
    "description": "hiringTeamRole.list",
    "parameters": [
      {
        "name": "namesOnly",
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
    "url": "/interview.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview",
    "typeScriptTag": "interview",
    "description": "interview.info",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
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
    "url": "/interview.list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview",
    "typeScriptTag": "interview",
    "description": "interview.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviewEvent.list",
    "method": "listAssociatedEvents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Event",
    "typeScriptTag": "interviewEvent",
    "description": "interviewEvent.list",
    "parameters": [
      {
        "name": "interviewScheduleId",
        "schema": "undefined",
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
    "url": "/interviewPlan.list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Plan",
    "typeScriptTag": "interviewPlan",
    "description": "interviewPlan.list",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviewSchedule.cancel",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Schedule",
    "typeScriptTag": "interviewSchedule",
    "description": "interviewSchedule.cancel",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "allowReschedule",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviewSchedule.create",
    "method": "createScheduledInterview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Schedule",
    "typeScriptTag": "interviewSchedule",
    "description": "interviewSchedule.create",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "interviewEvents",
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
    "url": "/interviewSchedule.list",
    "method": "getAllSchedules",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Schedule",
    "typeScriptTag": "interviewSchedule",
    "description": "interviewSchedule.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviewSchedule.update",
    "method": "updateEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Schedule",
    "typeScriptTag": "interviewSchedule",
    "description": "interviewSchedule.update",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviewStage.list",
    "method": "listAllInOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Stage",
    "typeScriptTag": "interviewStage",
    "description": "interviewStage.list",
    "parameters": [
      {
        "name": "interviewPlanId",
        "schema": "undefined",
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
    "url": "/interviewStage.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Interview Stage",
    "typeScriptTag": "interviewStage",
    "description": "interviewStage.info",
    "parameters": [
      {
        "name": "interviewStageId",
        "schema": "undefined",
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
    "url": "/job.create",
    "method": "newCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "job.create",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "teamId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "locationId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "defaultInterviewPlanId",
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
    "url": "/job.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "job.info",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "expand",
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
    "url": "/job.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "job.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/job.setStatus",
    "method": "setStatusById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "job.setStatus",
    "parameters": [
      {
        "name": "jobId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "undefined",
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
    "url": "/job.update",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "job.update",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "jobId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "locationId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultInterviewPlanId",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "customRequisitionId",
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
    "url": "/job.search",
    "method": "searchByTitle",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "job.search",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Software Engineer"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobInterviewPlan.info",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Interview Plan",
    "typeScriptTag": "jobInterviewPlan",
    "description": "jobInterviewPlan.info",
    "parameters": [
      {
        "name": "jobId",
        "schema": "undefined",
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
    "url": "/jobPosting.info",
    "method": "getIndividual",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Posting",
    "typeScriptTag": "jobPosting",
    "description": "jobPosting.info",
    "parameters": [
      {
        "name": "jobPostingId",
        "schema": "undefined",
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
    "url": "/jobPosting.list",
    "method": "getAllPublished",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Posting",
    "typeScriptTag": "jobPosting",
    "description": "jobPosting.list",
    "parameters": [
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "description": ""
      },
      {
        "name": "listedOnly",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobPosting.update",
    "method": "updateExisting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job Posting",
    "typeScriptTag": "jobPosting",
    "description": "jobPosting.update",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "Software Engineer"
      },
      {
        "name": "description",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobPostingId",
        "schema": "undefined",
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
    "url": "/location.create",
    "method": "createHierarchy",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "location.create",
    "parameters": [
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
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "parentLocationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isRemote",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/location.info",
    "method": "detailsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "location.info",
    "parameters": [
      {
        "name": "locationId",
        "schema": "undefined",
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
    "url": "/location.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Location",
    "typeScriptTag": "location",
    "description": "location.list",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offer.create",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer",
    "typeScriptTag": "offer",
    "description": "offer.create",
    "parameters": [
      {
        "name": "offerProcessId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "offerFormId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "offerForm",
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
    "url": "/offer.info",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer",
    "typeScriptTag": "offer",
    "description": "offer.info",
    "parameters": [
      {
        "name": "offerId",
        "schema": "undefined",
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
    "url": "/offer.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer",
    "typeScriptTag": "offer",
    "description": "offer.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/offer.start",
    "method": "startCreationInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer",
    "typeScriptTag": "offer",
    "description": "offer.start",
    "parameters": [
      {
        "name": "offerProcessId",
        "schema": "undefined",
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
    "url": "/offerProcess.start",
    "method": "startProcessForCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offer Process",
    "typeScriptTag": "offerProcess",
    "description": "offerProcess.start",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "undefined",
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
    "url": "/opening.info",
    "method": "getByUuid",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.info",
    "parameters": [
      {
        "name": "openingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPENINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opening.list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.list",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": ""
      },
      {
        "name": "syncToken",
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
    "url": "/opening.search",
    "method": "searchByIdentifier",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.search",
    "parameters": [
      {
        "name": "identifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opening.create",
    "method": "createInstance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.create",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "locationIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targetHireDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isBackfill",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "employmentType",
        "schema": "string",
        "description": "",
        "default": "FullTime"
      },
      {
        "name": "openingState",
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
    "url": "/opening.addJob",
    "method": "addJobAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.addJob",
    "parameters": [
      {
        "name": "openingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPENINGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opening.removeJob",
    "method": "removeJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.removeJob",
    "parameters": [
      {
        "name": "openingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OPENINGID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/opening.setOpeningState",
    "method": "setState",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.setOpeningState",
    "parameters": [
      {
        "name": "openingId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "openingState",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closeReasonId",
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
    "url": "/opening.setArchived",
    "method": "setArchived",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.setArchived",
    "parameters": [
      {
        "name": "openingId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "archive",
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
    "url": "/opening.update",
    "method": "updateOpening",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "opening.update",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "openingId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "identifier",
        "schema": "string",
        "description": ""
      },
      {
        "name": "teamId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetHireDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "targetStartDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "isBackfill",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "employmentType",
        "schema": "string",
        "description": "",
        "default": "FullTime"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/referral.create",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Referral",
    "typeScriptTag": "referral",
    "description": "referral.create",
    "parameters": [
      {
        "name": "id",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "creditedToUserId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fieldSubmissions",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "createdAt",
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
    "url": "/referralForm.info",
    "method": "getDefaultForm",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Referral Form",
    "typeScriptTag": "referralForm",
    "description": "referralForm.info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/source.list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Source",
    "typeScriptTag": "source",
    "description": "source.list",
    "parameters": [
      {
        "name": "includeArchived",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/surveyFormDefinition.info",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Form Definition",
    "typeScriptTag": "surveyFormDefinition",
    "description": "surveyFormDefinition.info",
    "parameters": [
      {
        "name": "surveyFormDefinitionId",
        "schema": "undefined",
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
    "url": "/surveyFormDefinition.list",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Form Definition",
    "typeScriptTag": "surveyFormDefinition",
    "description": "surveyFormDefinition.list",
    "parameters": [
      {
        "name": "cursor",
        "schema": "string",
        "description": "",
        "example": "G8"
      },
      {
        "name": "syncToken",
        "schema": "string",
        "description": "",
        "example": "jYnEBmjzR"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "example": 25
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/surveyRequest.create",
    "method": "generateUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Request",
    "typeScriptTag": "surveyRequest",
    "description": "surveyRequest.create",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "applicationId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "surveyFormDefinitionId",
        "schema": "undefined",
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
    "url": "/surveySubmission.list",
    "method": "listBySurveyType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Survey Submission",
    "typeScriptTag": "surveySubmission",
    "description": "surveySubmission.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user.info",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "user.info",
    "parameters": [
      {
        "name": "userId",
        "schema": "undefined",
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
    "url": "/user.list",
    "method": "getAshbyUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "user.list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/user.search",
    "method": "searchByEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "user.search",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "test@ashbyhq.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook.create",
    "method": "createSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "webhook.create",
    "parameters": [
      {
        "name": "webhookType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WEBHOOKTYPE"
      },
      {
        "name": "requestUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REQUESTURL"
      },
      {
        "name": "secretToken",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SECRETTOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook.update",
    "method": "updateSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "webhook.update",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "requestUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "secretToken",
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
    "url": "/webhook.delete",
    "method": "removeSetting",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "webhook.delete",
    "parameters": [
      {
        "name": "webhookId",
        "schema": "undefined",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Ashby API"
      apiBaseUrl="https://api.ashbyhq.com"
      apiVersion="1.0.0"
      endpoints={90}
      sdkMethods={90}
      schemas={175}
      parameters={191}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ashby/openapi.yaml"
      developerDocumentation="developers.ashbyhq.com/reference"
    />
  );
}
  