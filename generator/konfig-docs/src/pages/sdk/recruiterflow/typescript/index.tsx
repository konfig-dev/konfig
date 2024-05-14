import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RecruiterflowTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="recruiterflow-typescript-sdk"
      metaDescription={`Recruiterflow is a dedicated Applicant Tracking, CRM and Recruiting platform for Ambitious Recruiting & executive search firms. What makes Recruiterflow different from other ATS and recruiting CRM products, is Recruiting automation, simplicity and ease of use.

It offers drag-and-drop workflows, email and text messaging,  API integrations, and ATS capabilities. It also encompasses advanced functionalities like candidate portals, company blocking, automatic email tracking, job board posting, built-in report analytics and more. With its G Suite and office365 integration, you can two-way sync emails to clients and candidates.

With Recruiterflow you can manage & maintain your candidate and client pipeline,  post jobs across multiple job boards and track candidates, write personalized well-crafted email sequences, deliver candidate experience without extra efforts and get a detailed insight about the performance of your team and recruiting effort.

You can review your recruiting strategy and performance in real time using Recruiterflow's real-time statistics. You can also build your own custom apps on Recruiterflow using open APIs.

Recruiterflow's user interface is designed to be effortlessly navigable, ensuring recruiters can quickly adapt to the platform without extensive training. You just need to sign in with your work email id and you are good to go. We provide a free trial of the product for 7 days.`}
      company="Recruiterflow"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/logo.png"
      companyKebabCase="recruiterflow"
      clientNameCamelCase="recruiterflow"
      homepage="recruiterflow.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","crm"]}
      methods={[
  {
    "url": "/api/external/campaign/add-to-campaign",
    "method": "addToCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign APIs",
    "typeScriptTag": "campaignApIs",
    "description": "Add candidate/contact to campaign",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "campaign_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user_id",
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
    "url": "/api/external/campaign/get-campaign-report",
    "method": "listCampaignCommunications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign APIs",
    "typeScriptTag": "campaignApIs",
    "description": "This endpoint lists all communications sent in a particular campaign",
    "parameters": [
      {
        "name": "campaignId",
        "schema": "string",
        "required": false,
        "description": "Campaign id you want to fetch.",
        "example": 10
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/campaign/list",
    "method": "getAllCampaigns",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign APIs",
    "typeScriptTag": "campaignApIs",
    "description": "This endpoint lists all campaigns created within Recruiterflow",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/campaign/remove-from-campaign",
    "method": "removeCandidateFromCampaign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Campaign APIs",
    "typeScriptTag": "campaignApIs",
    "description": "Remove candidate/contact from campaign.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "campaign_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
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
    "url": "/api/external/campaign/status/list",
    "method": "getCampaignStatusList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Campaign APIs",
    "typeScriptTag": "campaignApIs",
    "description": "This endpoint lists all campaign-related statuses",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/activities/stage-movement/list",
    "method": "getStageMovements",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all stage movements for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the data is needed.",
        "example": 157877
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/add",
    "method": "addRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Add a candidate record.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "angellist_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebook_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lead_owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "linkedin_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "array",
        "description": ""
      },
      {
        "name": "skills",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "websites",
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
    "url": "/api/external/candidate/add-application-form",
    "method": "exportApplicationInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "The add application form endpoint allows you to export application information about a job to Recruiterflow.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "job_id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "personal_info.email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_info.first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_info.last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_info.linkedin_profile",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_info.name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personal_info.phone",
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
    "url": "/api/external/candidate/add-to-job",
    "method": "addToJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Add a candidate to a job, candidates will show up under the Sourced stage",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "job_id",
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
    "url": "/api/external/candidate/calendar-event/list",
    "method": "getCalendarEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all calendar events for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the tasks are needed.",
        "example": 157877
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/calls/list",
    "method": "getCallsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all calls list for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the calls are needed.",
        "example": 22
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/custom-field/list",
    "method": "getCustomFieldList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "The endpoint lists all candidate custom fields.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/disqualify",
    "method": "disqualifyCandidateWithReason",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Disqualify a candidate with a reason.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "job_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
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
    "url": "/api/external/candidate/emails/list",
    "method": "getAllCandidateEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all emails list for a Candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the calls are needed.",
        "example": 22
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/file/add",
    "method": "attachFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Please add ARGUMENTS (AS A FORM), the api is used to attach files to candidates.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "file_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "files",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "url",
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
    "url": "/api/external/candidate/get",
    "method": "getCandidateInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Fields are the same as the candidate list API above.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Prospect id you want to fetch.",
        "example": 10
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/candidate/list",
    "method": "getCandidateDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get details of a particular candidate record",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeFiles",
        "schema": "integer",
        "required": false,
        "description": "Include candidate files in response, defaults to False.",
        "example": 0
      },
      {
        "name": "includeNotes",
        "schema": "integer",
        "required": false,
        "description": "Include candidate notes in response, defaults to False.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/move-to-stage",
    "method": "moveToStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Move a candidate to a stage in a job",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "job_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "stage",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user_id",
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
    "url": "/api/external/candidate/notes/add",
    "method": "addCandidateNotes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "The endpoint adds notes to the specified candidate.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "created_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "mentions",
        "schema": "array",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/candidate/placement-record/list",
    "method": "getPlacementRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all placement records for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the placement records are needed.",
        "example": 157877
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/profile-image/upload",
    "method": "updateProfilePicture",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Update profile picture for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the image is being updated",
        "example": 157877
      },
      {
        "name": "img",
        "schema": "string",
        "required": true,
        "description": "Content of the profile image in base64-encoded format",
        "example": "abcdef=="
      },
      {
        "name": "filename",
        "schema": "string",
        "required": false,
        "description": "File name of the profile image",
        "example": "profile-picture.png"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/external/candidate/scorecard/get",
    "method": "getScorecardDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "This API returns scorecard details specified.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "scorecard id.",
        "example": 111
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/candidate/scorecard/list",
    "method": "getScorecards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all scorecards for a candidate and job_id",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the scorecards are needed.",
        "example": 157877
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "Job ID for which the scorecard is needed.",
        "example": 784
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/search",
    "method": "findSearchTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Find all search types in the link below.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "conjunction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONJUNCTION"
      },
      {
        "name": "current_page",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENT_PAGE"
      },
      {
        "name": "filters",
        "schema": "array",
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
        "name": "items_per_page",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMS_PER_PAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/candidate/task/list",
    "method": "getCandidateTaskList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "Get all tasks for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID for which the tasks are needed.",
        "example": 157877
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/candidate/update",
    "method": "completeUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate APIs",
    "typeScriptTag": "candidateApIs",
    "description": "This API implements a complete update which means that any existing data in the provided key will be wiped out and replaced with the data provided, in case a key is not provided no update happens to it.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "angellist_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebook_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "linkedin_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "array",
        "description": ""
      },
      {
        "name": "skills",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "websites",
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
    "url": "/api/external/client/add",
    "method": "addCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "This enpoint is used to add client company.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "added_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "careers_page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "company_size",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "domain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "industry_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lead_owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "linkedin_page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "description": ""
      },
      {
        "name": "revenue",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status_id",
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
    "url": "/api/external/client/custom-field/list",
    "method": "getAllCompanyCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Lists all company custom fields.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/client/get",
    "method": "companyDetailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Get client company details for the specified client.",
    "parameters": [
      {
        "name": "id",
        "schema": "integer",
        "required": false,
        "description": "company id.",
        "example": 1
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/client/list",
    "method": "listAllClients",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Lists all client company in the account.",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/client/notes/add",
    "method": "addNoteToCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Adds note to the specified client company",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "created_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "mentions",
        "schema": "array",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/client/search",
    "method": "searchClientTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Find all search types in the link below.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "conjunction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONJUNCTION"
      },
      {
        "name": "current_page",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENT_PAGE"
      },
      {
        "name": "filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "items_per_page",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMS_PER_PAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/client/update",
    "method": "updateClientDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Updates existing client company details, including custom fields",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "added_by",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "careers_page",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company_size",
        "schema": "string",
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
        "name": "domain",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "industry_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "lead_owner_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "linkedin_page",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
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
        "name": "parent_company_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "revenue",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "status_id",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "subsidiary_company_ids",
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
    "url": "/api/external/company-size/list",
    "method": "listCompanySize",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Lists all company size.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/add",
    "method": "addContactInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "The contacts endpoint allows you to export all contact-related information from Recruiterflow.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "angellist_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebook_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "first_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "linkedin_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "array",
        "description": ""
      },
      {
        "name": "skills",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter_profile",
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
    "url": "/api/external/contact/calendar-event/list",
    "method": "getCalendarEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Get all calendar events for a contact",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact ID for which the tasks are needed.",
        "example": 157877
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/calls/list",
    "method": "getAllCallsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Get all calls list for a Contact",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact ID for which the calls are needed.",
        "example": 22
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/custom-field/list",
    "method": "listCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "The endpoint lists all contact custom fields.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/emails/list",
    "method": "getAllContactEmails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Get all emails list for a Contact",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact ID for which the calls are needed.",
        "example": 22
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/get",
    "method": "getContactInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Returns the contacts info for the specified id.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Prospect id you want to fetch.",
        "example": 10
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/contact/list",
    "method": "getContactList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Lists all contacts and their details.",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeFiles",
        "schema": "integer",
        "required": false,
        "description": "Include contact files in response, defaults to False.",
        "example": 0
      },
      {
        "name": "includeNotes",
        "schema": "integer",
        "required": false,
        "description": "Include contact notes in response, defaults to False.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/notes/add",
    "method": "addNotesToContact",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "The endpoint adds notes to the specified contact.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "created_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "mentions",
        "schema": "array",
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
        "description": "Auto generated using Swagger Inspector"
      }
    ]
  },
  {
    "url": "/api/external/contact/profile-image/upload",
    "method": "updateProfilePicture",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Update profile picture for a contact",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact ID for which the image is being updated",
        "example": 157877
      },
      {
        "name": "img",
        "schema": "string",
        "required": true,
        "description": "Content of the profile image in base64-encoded format",
        "example": "abcdef=="
      },
      {
        "name": "filename",
        "schema": "string",
        "required": false,
        "description": "File name of the profile image",
        "example": "profile-picture.png"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/external/contact/search",
    "method": "findSearchTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Find all search types in the link below.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "conjunction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "current_page",
        "schema": "string",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "include_count",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "items_per_page",
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
    "url": "/api/external/contact/task/list",
    "method": "getAllCandidateTasks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "Get all tasks for a candidate",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Contact ID for which the tasks are needed.",
        "example": 157877
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": "After time for which the calls are needed in ISO format.",
        "example": "2023-04-30T10:30:00"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "Before time for which the calls are needed in ISO format.",
        "example": "2023-05-01T15:00:00"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/contact/update",
    "method": "completeUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contact APIs",
    "typeScriptTag": "contactApIs",
    "description": "This API implements a complete update which means that any existing data in the provided key will be wiped out and replaced with the data provided, in case a key is not provided no update happens to it.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "tags",
        "schema": "array",
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "angellist_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "description": ""
      },
      {
        "name": "email",
        "schema": "array",
        "description": ""
      },
      {
        "name": "experience",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facebook_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "github_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "linkedin_profile",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phone_number",
        "schema": "array",
        "description": ""
      },
      {
        "name": "skills",
        "schema": "array",
        "description": ""
      },
      {
        "name": "source",
        "schema": "string",
        "description": ""
      },
      {
        "name": "twitter_profile",
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
    "url": "/api/external/deal/create",
    "method": "createNewDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Create a New Deal.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RF-API-KEY"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "amount_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closed_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deal_owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "entities",
        "schema": "array",
        "description": ""
      },
      {
        "name": "lost_reason",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stage_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "won_reason",
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
    "url": "/api/external/deal/custom-field/list",
    "method": "listCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Lists all Deal custom fields available.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/deal/get",
    "method": "detailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Get details of a particular deal.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Deal id you want to fetch.",
        "example": 10
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID fetching deal.",
        "example": 10
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/deal/list-stages",
    "method": "getStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Get all stages for deal pipeline",
    "parameters": [
      {
        "name": "rfApiKey",
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
    "url": "/api/external/deal/move-stage",
    "method": "moveStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Move a deal to a new stage",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RF-API-KEY"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "closed_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lost_reason",
        "schema": "array",
        "description": ""
      },
      {
        "name": "to_stage",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "won_reason",
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
    "url": "/api/external/deal/search",
    "method": "searchDealTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Find all search types in the link below.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "conjunction",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONJUNCTION"
      },
      {
        "name": "current_page",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CURRENT_PAGE"
      },
      {
        "name": "filters",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "items_per_page",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ITEMS_PER_PAGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/deal/update",
    "method": "updateDeal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Update the Deal.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RF-API-KEY"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "amount",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "amount_currency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_company",
        "schema": "string",
        "description": ""
      },
      {
        "name": "closed_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deal_owner_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "entities",
        "schema": "array",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "lost_reason",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "stage_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "stage_name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "won_reason",
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
    "url": "/api/external/deals/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deal APIs",
    "typeScriptTag": "dealApIs",
    "description": "Get List of Deals.",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "User ID listing deals.",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/document/get",
    "method": "downloadDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other APIs",
    "typeScriptTag": "otherApIs",
    "description": "Download a document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "ID of the document that you want to download",
        "example": 10
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/external/industry/list",
    "method": "getAllIndustries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Lists all industries.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/job",
    "method": "getAllJobInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "The jobs endpoint allows you to export all jobs-related information from Recruiterflow.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "includeStages",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/job/close",
    "method": "closeJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Close a job in Recruiterflow",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead24924121328b"
      },
      {
        "name": "job_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "user_id",
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
    "url": "/api/external/job/count",
    "method": "filterOptionsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "All filters available in the /api/external/job/list API except current_page, items_per_page",
    "parameters": [
      {
        "name": "onlyOpen",
        "schema": "integer",
        "required": false,
        "description": "1 -> True, 0-> False"
      },
      {
        "name": "departments",
        "schema": "string",
        "required": false,
        "description": "department ids."
      },
      {
        "name": "locations",
        "schema": "string",
        "required": false,
        "description": "location ids."
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/job/create",
    "method": "createNewJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Create a new job.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "about_position",
        "schema": "string",
        "description": ""
      },
      {
        "name": "client_company_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "created_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "department_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "employment_type_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "experience_range_end",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "experience_range_start",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "hiring_team",
        "schema": "object",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "number_of_openings",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "salary_range_end",
        "schema": "number",
        "description": ""
      },
      {
        "name": "salary_range_start",
        "schema": "number",
        "description": ""
      },
      {
        "name": "skills",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Auto generated using Swagger Inspector"
      }
    ]
  },
  {
    "url": "/api/external/job/custom-field/list",
    "method": "getCustomFieldList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Lists all job custom fields available.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/job/department/list",
    "method": "getJobDepartmentsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Lists all job departments.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/job/engagement-type/list",
    "method": "listEngagementTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Lists all job engagement type.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/job/list",
    "method": "listJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Lists all jobs in the account.",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
        "example": true
      },
      {
        "name": "includeDescription",
        "schema": "string",
        "required": false,
        "description": "Job Description",
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
    "url": "/api/external/job/notes/add",
    "method": "addJobNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Adds note to the specified job record.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "created_by",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "mentions",
        "schema": "array",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/job/open",
    "method": "openJobRecruiterflow",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Open a job in Recruiterflow",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead24924121328b"
      },
      {
        "name": "job_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "user_id",
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
    "url": "/api/external/job/pipeline",
    "method": "getJobPipelineInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Returns detailed information about a job's pipeline",
    "parameters": [
      {
        "name": "jobId",
        "schema": "integer",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "rfApiKey",
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
    "url": "/api/external/job/placement-record/list",
    "method": "getPlacementRecordList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement APIs",
    "typeScriptTag": "placementApIs",
    "description": "Lists all placements for specified job.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": 10
      },
      {
        "name": "detailed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/job/search",
    "method": "searchJobWithFilter",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Searches job with a specific filter or query",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "83f5e5e4a6429af12b420d7f3908d3c6"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "conjunction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "current_page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "include_count",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "include_description",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "items_per_page",
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
    "url": "/api/external/job/stage_names",
    "method": "listDistinctStageNames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Lists all job distinct stage names in the account.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/job/update",
    "method": "updateJobDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "External API for Job Update",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "83f5e5e4a6429af12b420d7f3908d3c6"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "title",
        "schema": "string",
        "description": ""
      },
      {
        "name": "about_position",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contacts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "custom_fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "department_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "employment_type_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "experience_range_end",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "experience_range_start",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "hiring_team",
        "schema": "object",
        "description": ""
      },
      {
        "name": "job_id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "locations",
        "schema": "array",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "number_of_openings",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "salary_range_end",
        "schema": "number",
        "description": ""
      },
      {
        "name": "salary_range_start",
        "schema": "number",
        "description": ""
      },
      {
        "name": "skills",
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
    "url": "/api/external/location/create",
    "method": "createJobLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Create a job location that is not present in the system, use location list api to see all available locations.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "details",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_zipcode",
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
    "url": "/api/external/location/delete",
    "method": "deleteLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Deletes the specified job location from the system",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
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
    "url": "/api/external/location/list",
    "method": "getAllJobLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Lists all job locations in the account.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
        "example": true
      },
      {
        "name": "openJobsOnly",
        "schema": "string",
        "required": false,
        "description": "to fetch locations of open jobs only",
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
    "url": "/api/external/location/update",
    "method": "updateJobLocationDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job APIs",
    "typeScriptTag": "jobApIs",
    "description": "Updates job location details(name, state, city, country, zip code)",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "description": ""
      },
      {
        "name": "details",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_state",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_zipcode",
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
    "url": "/api/external/notes/delete",
    "method": "deleteNote",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Other APIs",
    "typeScriptTag": "otherApIs",
    "description": "End point to delete any notes",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "deleted_by",
        "schema": "integer",
        "description": ""
      },
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
    "url": "/api/external/organization/employment-type/list",
    "method": "getEmploymentTypesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other APIs",
    "typeScriptTag": "otherApIs",
    "description": "List of employment types.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/organization/location/list",
    "method": "getOrganizationLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other APIs",
    "typeScriptTag": "otherApIs",
    "description": "List of organization locations.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/placement-record/create",
    "method": "createPlacementRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement APIs",
    "typeScriptTag": "placementApIs",
    "description": "Create a placement.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "placements",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "Integer",
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
    "url": "/api/external/placement-record/get",
    "method": "getPlacementInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement APIs",
    "typeScriptTag": "placementApIs",
    "description": "Returns the placement info for specified placement record.",
    "parameters": [
      {
        "name": "placementId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "detailed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/external/placement-record/list",
    "method": "getAllPlacementRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Placement APIs",
    "typeScriptTag": "placementApIs",
    "description": "Lists all placements in the account.",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "detailed",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": "",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/placement-record/update",
    "method": "updatePlacementRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Placement APIs",
    "typeScriptTag": "placementApIs",
    "description": "Update a placement.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "e0fb97af10fe90c9e4ead2492a12938b"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "application/json"
      },
      {
        "name": "placements",
        "schema": "array",
        "description": ""
      },
      {
        "name": "user_id",
        "schema": "Integer",
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
    "url": "/api/external/reference/phone-types",
    "method": "listPhoneTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other APIs",
    "typeScriptTag": "otherApIs",
    "description": "This endpoint lists all phone types available",
    "parameters": [
      {
        "name": "rfApiKey",
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
    "url": "/api/external/status/list",
    "method": "listCompanyStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Client APIs",
    "typeScriptTag": "clientApIs",
    "description": "Lists all Company statuses.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
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
    "url": "/api/external/tags/list",
    "method": "getTagsList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Other APIs",
    "typeScriptTag": "otherApIs",
    "description": "List all tags for candidates and contacts.",
    "parameters": [
      {
        "name": "itemsPerPage",
        "schema": "string",
        "required": false,
        "description": "Number of records per page.",
        "example": 10
      },
      {
        "name": "currentPage",
        "schema": "string",
        "required": false,
        "description": "The page number.",
        "example": 1
      },
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total tags",
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
    "url": "/api/external/user/list",
    "method": "exportUserInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User APIs",
    "typeScriptTag": "userApIs",
    "description": "The Users endpoint allows you to export all user related information from Recruiterflow.",
    "parameters": [
      {
        "name": "rfApiKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeCount",
        "schema": "string",
        "required": false,
        "description": "Count of total records",
        "example": true
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
      apiTitle="Recruiterflow API Documentation"
      apiBaseUrl="https://recruiterflow.com"
      apiVersion="0.0.1"
      endpoints={89}
      sdkMethods={89}
      schemas={116}
      parameters={534}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/recruiterflow/openapi.yaml"
      developerDocumentation="recruiterflow.com/api"
    />
  );
}
  