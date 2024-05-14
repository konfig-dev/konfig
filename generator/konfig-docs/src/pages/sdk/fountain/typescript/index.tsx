import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function FountainTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="fountain-typescript-sdk"
      metaDescription={`Fountain's all-in-one high volume hiring platform empowers the world's leading enterprises to find the right people through smart, fast, and seamless recruiting. Candidates can apply anytime, anywhere in minutes, right from their phone. Automated and customizable processes streamline the candidate experience and save time for recruitment teams so they can scale with growing hiring needs. Advanced analytics provide end-to-end process visibility so managers can make swift, data-driven decisions. Throughout the candidate journey, the openly integrated platform enables companies to find, qualify and convert more applicants. Fountain's global customers hire over 1.2 million workers annually in 78 countries.

Why Work with Us:

- Generous compensation, San Francisco rate compensation regardless of location in US
- 100% Remote and Flexible Hours
- Unlimited PTO
- Equity grants
- Comprehensive healthcare benefits
- 16 weeks paid parental leave for all parents
- Wellness and gym reimbursement
- Home office stipend
- Phone stipend
- 401K plan
- Learning and development reimbursement
- Company events
- FSA & HSA
- Life Insurance & Long-Term Disability/Short-Term Disability

Visit us at https://get.fountain.com to learn more.`}
      company="Fountain"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/logo.png"
      companyKebabCase="fountain"
      clientNameCamelCase="fountain"
      homepage="fountain.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","remote_work","hr"]}
      methods={[
  {
    "url": "/v2/applicants",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "List All Applicants",
    "parameters": [
      {
        "name": "funnelId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastTransitionedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customDataField[key]",
        "schema": "string",
        "required": false,
        "description": "The key of the custom data field to filter by. Used with `custom_data_field[value]`. Must also use one of created_at, last_transitioned_at, updated_at, stage_id, or funnel_id. Does not support secure fields or standard questions."
      },
      {
        "name": "customDataField[value]",
        "schema": "string",
        "required": false,
        "description": "The value of the custom data field to filter by. Used with `custom_data_field[key]`."
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
    "url": "/v2/applicants",
    "method": "createNewApplicant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Create an Applicant",
    "parameters": [
      {
        "name": "applicant",
        "schema": "object",
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
    "url": "/v2/applicants/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Delete an Applicant",
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Get Applicant Info",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}",
    "method": "updateInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Update Applicant Info",
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
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "secure_data",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rejection_reason",
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
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/advance",
    "method": "advanceApplicant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Advance an Applicant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "stage_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_automated_actions",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/advance",
    "method": "bulkAdvanceMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Bulk Advance Multiple Applicants",
    "parameters": [
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "Destination stage's external id. All specified applicants will advance to this stage.",
        "example": "STAGE_ID"
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_automated_actions",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/transitions",
    "method": "getTransitionHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Get Transition History",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "page",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/transitions",
    "method": "bulkTransitionHistory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Bulk Transition History for Multiple Applicants",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_automated_actions",
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
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/booked_slots",
    "method": "getInterviewSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Get Interview Sesssions",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/booked_slots",
    "method": "bulkInterviewSessions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Bulk Interview Sessions for Multiple Applicants",
    "parameters": [
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      },
      {
        "name": "funnel_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "skip_automated_actions",
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
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/labels",
    "method": "listForApplicant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "List Labels for Applicant",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/labels/{title}",
    "method": "updateForApplicant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "Update Label for Applicant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "completed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "completedAt",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/notes",
    "method": "getApplicant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Get Applicant Notes",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/notes",
    "method": "createApplicantNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Create Applicant Note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "last_updated_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/notes/{note_id}",
    "method": "deleteApplicantNote",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Delete Applicant Note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE_ID"
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
    "url": "/v2/applicants/{id}/notes/{note_id}",
    "method": "updateApplicantNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Notes",
    "typeScriptTag": "notes",
    "description": "Update Applicant Note",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "noteId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTE_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "created_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CREATED_AT"
      },
      {
        "name": "updated_at",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "UPDATED_AT"
      },
      {
        "name": "last_updated_by",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "user",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/secure_documents",
    "method": "getSecureDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Get Applicant Files",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/secure_documents/upload",
    "method": "uploadSecureDocumentToS3",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "File Upload to S3",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "filename",
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
      }
    ]
  },
  {
    "url": "/v2/applicants/{id}/secure_documents/link_upload",
    "method": "linkUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Applicants",
    "typeScriptTag": "applicants",
    "description": "Link Applicant to Files in S3",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "s3_key",
        "schema": "string",
        "description": ""
      },
      {
        "name": "key",
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
      }
    ]
  },
  {
    "url": "/v2/available_slots",
    "method": "createNewAvailable",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar Slots",
    "typeScriptTag": "calendarSlots",
    "description": "Create Calendar Slots",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recruiter_email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RECRUITER_EMAIL"
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
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "max_attendees",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "instructions",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "split",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "period",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stage_ids",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "opening_stage_ids",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/available_slots/{id}/confirm",
    "method": "confirmBooking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar Slots",
    "typeScriptTag": "calendarSlots",
    "description": "Book an Available Slot",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Available Slot ID",
        "example": "ID"
      },
      {
        "name": "applicantId",
        "schema": "string",
        "description": "The unique identifier for the applicant to be associated with the booked slot"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
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
    "url": "/v2/available_slots/{id}",
    "method": "destroyById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Calendar Slots",
    "typeScriptTag": "calendarSlots",
    "description": "Delete Calendar Slots",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Available Slot ID",
        "example": "ID"
      },
      {
        "name": "deleteAllSiblings",
        "schema": "boolean",
        "required": false,
        "description": "If set, will destroy all slots with the same key"
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
    "url": "/v2/booked_slots/{id}/cancel",
    "method": "cancelSlot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Calendar Slots",
    "typeScriptTag": "calendarSlots",
    "description": "Cancel a booked slot",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identifier of the booked slot to cancel",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to view"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/data_keys",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Data Keys",
    "typeScriptTag": "dataKeys",
    "description": "List data keys",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to retrieve."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The number of results to retrieve per page. The endpoint returns 20 results per page by default."
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "required": false,
        "description": "A filter to limit which data_keys will be returned based on the last_updated_at data on the data_key."
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
    "url": "/v2/exports",
    "method": "listCustomExports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "List all Custom Exports",
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
    "url": "/v2/exports",
    "method": "createCustomExport",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "Create Custom Export",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/exports/{id}",
    "method": "downloadCustomExport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "Download Custom Export",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/exports/templates",
    "method": "listCustomTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "List all Custom Export Templates",
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
    "url": "/v2/funnels",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "List All Openings",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "description": "The page of results to view"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "The number of results to return per page"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "The field by which to sort results"
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction in which results are sorted"
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": "Filter by whether the opening is active or not"
      },
      {
        "name": "brandName",
        "schema": "string",
        "description": "Filter by the name of the brand"
      },
      {
        "name": "locationAddress",
        "schema": "string",
        "description": "Filter by the address associated with the opening"
      },
      {
        "name": "locationName",
        "schema": "string",
        "description": "Filter by the name of the location associated with the opening"
      },
      {
        "name": "locationGroupName",
        "schema": "string",
        "description": "Filter by the name of the location group associated with the opening"
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Text-based query of the opening attributes"
      },
      {
        "name": "shiftName",
        "schema": "string",
        "description": "Filter by the name of the shift associated with the opening"
      },
      {
        "name": "shiftDays[]",
        "schema": "array",
        "description": "Filter by the days of the shift associated with the opening"
      },
      {
        "name": "shiftStartTime",
        "schema": "string",
        "description": "Filter by the start time of the shift associated with the opening using the 24 hour clock (i.e. 10 PM is 2200)"
      },
      {
        "name": "shiftEndTime",
        "schema": "string",
        "description": "Filter by the end time of the shift associated with the opening using the 24 hour clock (i.e. 10 PM is 2200)"
      },
      {
        "name": "sourcingPurchaseType",
        "schema": "string",
        "description": "Filter by the sourcing type of the opening"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "Filter by the title of the opening"
      },
      {
        "name": "updatedAtGt",
        "schema": "string",
        "description": "Filter for funnels updated after this"
      },
      {
        "name": "updatedAtLt",
        "schema": "string",
        "description": "Filter for funnels updated before this"
      },
      {
        "name": "userOpenings",
        "schema": "boolean",
        "description": "Filter to account owner"
      },
      {
        "name": "workflowId",
        "schema": "string",
        "description": "Filter for funnels with a specific workflow identifier"
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
    "url": "/v2/funnels",
    "method": "createOpening",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "Create a new opening",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "location_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LOCATION_ID"
      },
      {
        "name": "position_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITION_ID"
      },
      {
        "name": "use_workflow",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workflow_attributes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "clone_workflow_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "additional_info",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "alternative_locales",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation_currency_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "custom_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "do_launch_portal_from_form",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "force_applicant_identity",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_private",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_hiring_funnel",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "is_sourcing_funnel",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "job_hours",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "job_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "job_industry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shift_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "use_obiq_form",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_attributes",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "shift_attributes",
        "schema": "object",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/funnels/{id}",
    "method": "deleteOpening",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "Delete an opening",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Opening ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v2/funnels/{id}",
    "method": "getOpeningById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "Retrieve Opening",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Opening ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/funnels/{id}",
    "method": "updateOpening",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "Update opening",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Opening ID",
        "example": "ID"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "position_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "workflow_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "additional_info",
        "schema": "string",
        "description": ""
      },
      {
        "name": "alternative_locales",
        "schema": "array",
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compensation_currency_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "compensation_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "do_launch_portal_from_form",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "force_applicant_identity",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_private",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_hiring_funnel",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "is_sourcing_funnel",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "job_hours",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job_type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "job_industry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shift_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "use_obiq_form",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "customer_attributes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "shift_attributes",
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
    "url": "/v2/hiring_goals",
    "method": "listGoals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hiring Goals",
    "typeScriptTag": "hiringGoals",
    "description": "List Hiring Goals",
    "parameters": [
      {
        "name": "openingId",
        "schema": "integer",
        "description": "Filter by a particular Opening (also known as Funnel)"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "The page of results to view"
      },
      {
        "name": "perPage",
        "schema": "integer",
        "description": "The number of results to return per page"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "The field by which to sort results"
      },
      {
        "name": "sortDirection",
        "schema": "string",
        "description": "The direction in which results are sorted"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Filter by the Hiring Goal status"
      },
      {
        "name": "current",
        "schema": "boolean",
        "description": "Filter to current Hiring Goals. Current is defined by Hiring Goals with a `hire_by` date greater and or equal to today."
      },
      {
        "name": "past",
        "schema": "boolean",
        "description": "Filter to past Hiring Goals. Current is defined by Hiring Goals with a `hire_by` date before today."
      },
      {
        "name": "open",
        "schema": "boolean",
        "description": "Filter to open Hiring Goals. Open Hiring Goals are Hiring Goals who have not been closed (`closed_at == nil`)"
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
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/hiring_goals",
    "method": "createNewGoal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Hiring Goals",
    "typeScriptTag": "hiringGoals",
    "description": "Create a new hiring goal",
    "parameters": [
      {
        "name": "start_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "START_DATE"
      },
      {
        "name": "hire_by",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HIRE_BY"
      },
      {
        "name": "goal",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GOAL"
      },
      {
        "name": "opening_id",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/hiring_goals/{id}",
    "method": "deleteGoal",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Hiring Goals",
    "typeScriptTag": "hiringGoals",
    "description": "Delete a Hiring Goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Hiring Goal ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/hiring_goals/{id}",
    "method": "updateExistingGoal",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Hiring Goals",
    "typeScriptTag": "hiringGoals",
    "description": "Update Hiring Goal",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Hiring Goal ID",
        "example": "ID"
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hire_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "goal",
        "schema": "string",
        "description": ""
      },
      {
        "name": "opening_id",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "501",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/location_groups",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "List Location Groups",
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
    "url": "/v2/location_groups",
    "method": "createLocationGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Create a new Location Group",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "owner_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_attributes",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/location_groups/{id}",
    "method": "deleteLocationGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Delete a Location Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Location Group ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v2/location_groups/{id}",
    "method": "getLocationGroup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Retrieve Location Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Location Group ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/location_groups/{id}",
    "method": "updateLocationGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Update Location Group",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Location Group ID",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "owner_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "move_to_group_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_attributes",
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
    "url": "/v2/locations",
    "method": "listLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "List Locations",
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
    "url": "/v2/locations",
    "method": "createNewLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Create a new Location",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twilio_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "whats_app_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customer_attributes",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/locations/{id}",
    "method": "deleteLocation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Delete a Location",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Location ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v2/locations/{id}",
    "method": "getLocationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Retrieve Location",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Location ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/locations/{id}",
    "method": "updateLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations and Location Groups",
    "typeScriptTag": "locationsAndLocationGroups",
    "description": "Update Location",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Location ID",
        "example": "ID"
      },
      {
        "name": "address",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country_code",
        "schema": "string",
        "description": ""
      },
      {
        "name": "language",
        "schema": "string",
        "description": ""
      },
      {
        "name": "group_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "owner_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "time_zone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twilio_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "whats_app_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customer_attributes",
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
    "url": "/api/v2/openings/workflow_reassignment",
    "method": "reassignToWorkflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Openings",
    "typeScriptTag": "openings",
    "description": "Reassign Opening to Different Workflow (https://developer.fountain.com",
    "parameters": [
      {
        "name": "destination_workflow_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_WORKFLOW_ID"
      },
      {
        "name": "destination_workflow_title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESTINATION_WORKFLOW_TITLE"
      },
      {
        "name": "run_landing_actions",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "source_opening_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCE_OPENING_ID"
      },
      {
        "name": "stage_mappings",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/v2/option_banks/{id}",
    "method": "deleteBank",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "Delete Option Bank",
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
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/option_banks/{id}",
    "method": "getOptionBankById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "Get Option Bank",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/option_banks/{id}",
    "method": "replaceBank",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "Replace Option Bank",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/option_banks/{id}/remove",
    "method": "removeOption",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "Remove from Option Bank",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "options",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/option_banks/{id}/append",
    "method": "appendOption",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "Append to Option Bank",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "options",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/positions",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "List Positions",
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
    "url": "/v2/positions",
    "method": "createNewPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Create a new Position",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "confirmation_message",
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
        "name": "requirements",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer_attributes",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/positions/{id}",
    "method": "deletePosition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Delete a Position",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Position ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
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
    "url": "/v2/positions/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Retrieve Position",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Position ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/positions/{id}",
    "method": "updateExistingPosition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Update Position",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Position ID",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "confirmation_message",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requirements",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customer_attributes",
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
    "url": "/v2/sessions",
    "method": "listBooked",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar Slots",
    "typeScriptTag": "calendarSlots",
    "description": "List calendar slots",
    "parameters": [
      {
        "name": "funnelId",
        "schema": "string",
        "required": false,
        "description": "Identifier of opening to filter calendar slots on"
      },
      {
        "name": "withUnbooked",
        "schema": "boolean",
        "required": false,
        "description": "Indicates whether to include available slots in response"
      },
      {
        "name": "stageId",
        "schema": "string",
        "required": false,
        "description": "Identifier of stage to filter slots on"
      },
      {
        "name": "cursor",
        "schema": "string",
        "required": false,
        "description": "Cursor for the next page to view"
      },
      {
        "name": "time",
        "schema": "string",
        "required": false,
        "description": "Filter by date, options are past, upcoming, a specific date with date=, or a date range with range="
      },
      {
        "name": "page",
        "schema": "boolean",
        "required": false,
        "description": "The page results to retrieve. The endpoint returns 10 results per page. Use the cursor option to view very old results."
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
    "url": "/v2/shifts",
    "method": "listShifts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shifts",
    "typeScriptTag": "shifts",
    "description": "List shifts",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to retrieve."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "The number of results to retrieve per page. The endpoint returns 20 results per page by default."
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
    "url": "/v2/stages/{id}/available_slots",
    "method": "getAvailableSlots",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Calendar Slots",
    "typeScriptTag": "calendarSlots",
    "description": "List available slots",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identifier of stage to list available slots for",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "The page of results to view"
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
    "url": "/v2/stages/{stage_id}/labels",
    "method": "listInStage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Labels",
    "typeScriptTag": "labels",
    "description": "List All Labels in Stage",
    "parameters": [
      {
        "name": "stageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGE_ID"
      },
      {
        "name": "funnelId",
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
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/funnels/{funnel_id}/stages",
    "method": "listOpeningStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "List All Opening Stages",
    "parameters": [
      {
        "name": "funnelId",
        "schema": "string",
        "required": true,
        "description": "The Opening ID",
        "example": "FUNNEL_ID"
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
    "url": "/v2/stages/{id}",
    "method": "getStage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Openings and Stages",
    "typeScriptTag": "openingsAndStages",
    "description": "Retrieve stage",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Stage ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/timestamped_exports/templates",
    "method": "listTimestampedExportTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "List All Timestamped Export Templates",
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
    "url": "/v2/timestamped_exports/{id}",
    "method": "downloadTimestampedExport",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "Download Timestamped Export",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/timestamped_exports",
    "method": "listAllTimestampedExports",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "List all Timestamped Exports",
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
    "url": "/v2/timestamped_exports",
    "method": "createTimestampedExports",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Export Management",
    "typeScriptTag": "exportManagement",
    "description": "Create Timestamped Exports",
    "parameters": [
      {
        "name": "templateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TEMPLATE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/user_activities/{id}",
    "method": "getActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User Activities",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The User ID",
        "example": "ID"
      },
      {
        "name": "startTime",
        "schema": "string",
        "required": true,
        "description": "Start must be within 30 days of End Time",
        "example": "2024-01-01T12:00:00-05:00"
      },
      {
        "name": "endTime",
        "schema": "string",
        "required": true,
        "description": "The end date of the activities",
        "example": "END_TIME"
      },
      {
        "name": "activityType",
        "schema": "string",
        "description": "The key describing the activity",
        "example": "stage.transitioned"
      },
      {
        "name": "perPage",
        "schema": "integer",
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
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/users",
    "method": "listAccessedAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get Users",
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
    "url": "/v2/workers",
    "method": "listWorkers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posthire Worker Management",
    "typeScriptTag": "posthireWorkerManagement",
    "description": "Get Workers",
    "parameters": [
      {
        "name": "funnelId",
        "schema": "string",
        "description": "The opening ID"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Optional integer to indicate the page of pagination"
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
    "url": "/v2/workers/{id}",
    "method": "getWorkerData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Posthire Worker Management",
    "typeScriptTag": "posthireWorkerManagement",
    "description": "Get A Worker",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Worker ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workers/{id}",
    "method": "updateWorker",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Posthire Worker Management",
    "typeScriptTag": "posthireWorkerManagement",
    "description": "Update A Worker",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Worker ID",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/workers/{id}/activate",
    "method": "activateWorker",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posthire Worker Management",
    "typeScriptTag": "posthireWorkerManagement",
    "description": "Activate A Worker",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Worker ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
    "url": "/v2/workers/{id}/deactivate",
    "method": "deactivateWorker",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Posthire Worker Management",
    "typeScriptTag": "posthireWorkerManagement",
    "description": "Deactivate A Worker",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The Worker ID",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
    "url": "/api/v2/workflows",
    "method": "getAllWorkflows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "List all Workflows",
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
    "url": "/api/v2/workflows/{id}",
    "method": "deleteWorkflow",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Workflows",
    "typeScriptTag": "workflows",
    "description": "Delete a Workflow",
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
        "statusCode": "202",
        "description": "No Content"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/option_banks",
    "method": "listAllBanks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "List All Option Banks",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "Optional integer to indicate the page of pagination"
      },
      {
        "name": "perPage",
        "schema": "string",
        "description": "Optional integer to define page size for pagination"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/v2/option_banks",
    "method": "createApplicantNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Option Bank",
    "typeScriptTag": "optionBank",
    "description": "Create Option Bank",
    "parameters": [
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
        "statusCode": "201",
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
      apiTitle="Fountain Public API"
      apiBaseUrl="https://api.fountain.com"
      apiVersion="v2"
      endpoints={55}
      sdkMethods={80}
      schemas={97}
      parameters={269}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fountain/openapi.yaml"
      developerDocumentation="developer.fountain.com"
    />
  );
}
  