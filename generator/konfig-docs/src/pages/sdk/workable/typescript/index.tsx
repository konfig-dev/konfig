import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WorkableTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="workable-typescript-sdk"
      metaDescription={`Workable develops a cloud-based recruitment platform for companies to post jobs, track applicants and schedule interviews.`}
      company="Workable"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/logo.png"
      companyKebabCase="workable"
      clientNameCamelCase="workable"
      homepage="workable.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","hr","applicant_tracking"]}
      methods={[
  {
    "url": "/accounts",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "/accounts",
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
    "url": "/members",
    "method": "listOfMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Member",
    "typeScriptTag": "member",
    "description": "/members",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of members to try and retrieve per page (https://workable.readme.io/reference",
        "default": 50
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "role",
        "schema": "string",
        "description": "Filters for members of the specified role. Can be `simple`, `admin` or `reviewer`"
      },
      {
        "name": "shortcode",
        "schema": "string",
        "description": "Filters for a specific job, only collaborators will be returned"
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
    "url": "/recruiters",
    "method": "listExternalRecruiters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruiter",
    "typeScriptTag": "recruiter",
    "description": "/recruiters",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "description": "The job's shortcode. If provided only recruiters collaborating on the correlated job will be returned."
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
    "url": "/stages",
    "method": "collectionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Stage",
    "typeScriptTag": "stage",
    "description": "/stages",
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
    "url": "/departments",
    "method": "listDepartments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Department",
    "typeScriptTag": "department",
    "description": "/departments",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
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
    "url": "/legal_entities",
    "method": "entities",
    "httpMethod": HttpMethodsEnum.GET,
    "description": "/legal_entities",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
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
    "url": "/requisitions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition",
    "typeScriptTag": "requisition",
    "description": "/requisitions",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "Returns requisitions with the current state. Possible values (processing, draft, pending, approved, open, filled, rejected, cancelled, reserved, on_hold)."
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "Returns requisitions for the job with the specified ID."
      },
      {
        "name": "planDateFrom",
        "schema": "string",
        "description": "Returns requisitions with plan date after the specified month. Format is YYYY-MM (example: 2022-01)."
      },
      {
        "name": "planDateTo",
        "schema": "string",
        "description": "Returns requisitions with plan date before the specified month. Format is YYYY-MM (example: 2022-12)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of requisitions to try and retrieve per page (https://workable.readme.io/reference",
        "default": 50
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "Returns results created after the specified timestamp. (https://workable.readme.io/reference"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "Returns results updated after the specified timestamp."
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
    "url": "/requisitions/{code}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisition",
    "typeScriptTag": "requisition",
    "description": "/requisitions/:code",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code of the requisition",
        "example": "CODE"
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
    "url": "/requisitions/{code}/approve",
    "method": "approveRequisition",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Requisition",
    "typeScriptTag": "requisition",
    "description": "/requisitions/:code/approve",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code of the requisition",
        "example": "CODE"
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
    "url": "/requisitions/{code}/reject",
    "method": "rejectRequest",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Requisition",
    "typeScriptTag": "requisition",
    "description": "/requisitions/:code/reject",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "The code of the requisition",
        "example": "CODE"
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offer",
    "typeScriptTag": "offer",
    "description": "/offers/:id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the offer",
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
    "url": "/offers/{id}/approve (https://workable.readme.io/reference",
    "method": "approveAction",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Offer",
    "typeScriptTag": "offer",
    "description": "/offers/:id/approve",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the offer",
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
    "url": "/jobs",
    "method": "collectionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "description": "Returns jobs with the current state. Possible values (draft, published, archived & closed)."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of jobs to try and retrieve per page (https://workable.readme.io/reference",
        "default": 50
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "Returns results created after the specified timestamp. (https://workable.readme.io/reference"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "Returns results updated after the specified timestamp."
      },
      {
        "name": "includeFields",
        "schema": "string",
        "description": "Includes additional fields in each job (description, full_description, requirements and benefits)."
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
    "url": "/jobs/{shortcode}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs/:shortcode",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/jobs/{shortcode}/activities",
    "method": "getActivityStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs/:shortcode/activities",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of members to try and retrieve per page (https://workable.readme.io/reference",
        "default": 50
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID. (https://workable.readme.io/reference"
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
    "url": "/jobs/{shortcode}/application_form",
    "method": "form",
    "httpMethod": HttpMethodsEnum.GET,
    "description": "/jobs/:shortcode/application_form",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/jobs/{shortcode}/questions",
    "method": "getQuestions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs/:shortcode/questions",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/jobs/{shortcode}/stages",
    "method": "getStages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs/:shortcode/stages",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/jobs/{shortcode}/custom_attributes",
    "method": "getCustomAttributes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs/:shortcode/custom_attributes",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/jobs/{shortcode}/members",
    "method": "getMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Member",
    "typeScriptTag": "member",
    "description": "/jobs/:shortcode/members",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/jobs/{shortcode}/recruiters",
    "method": "getRecruiters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/jobs/:shortcode/recruiters",
    "parameters": [
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
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
    "url": "/candidates",
    "method": "listCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates",
    "parameters": [
      {
        "name": "email",
        "schema": "string",
        "description": "The email of the candidate to filter by"
      },
      {
        "name": "shortcode",
        "schema": "string",
        "description": "The job's system generated code"
      },
      {
        "name": "stage",
        "schema": "string",
        "description": "The job's stage slug, can be retrieved from the `/stages` endpoint"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of candidates to try and retrieve per page"
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID."
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID."
      },
      {
        "name": "createdAfter",
        "schema": "string",
        "description": "Returns results created after the specified timestamp."
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "Returns results updated after the specified timestamp."
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
    "url": "/candidates",
    "method": "updatePartialCandidate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{shortcode}/candidates",
    "method": "createCandidateAtJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "/candidates",
    "parameters": [
      {
        "name": "stage",
        "schema": "string",
        "description": "Depending on the value of the `sourced` flag, candidates are put into the `sourced` or `applied` stage. But you can set this if you want to create a candidate directly in another stage. Values can be retrieved from the `jobs/:shortcode/stages` endpoint"
      },
      {
        "name": "shortcode",
        "schema": "string",
        "required": true,
        "description": "The job's shortcode",
        "example": "SHORTCODE"
      },
      {
        "name": "RAW_BODY",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/talent_pool/{stage}/candidates",
    "method": "createCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Stage",
    "typeScriptTag": "stage",
    "description": "/talent_pool/candidates",
    "parameters": [
      {
        "name": "stage",
        "schema": "string",
        "description": "Depending on the value of the `sourced` flag, candidates are put into the `sourced` or `applied` stage. But you can set this if you want to create a candidate directly in another stage. Values can be retrieved from the `jobs/:shortcode/stages` endpoint"
      },
      {
        "name": "RAW_BODY",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{id}",
    "method": "getCandidateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidates's id",
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
    "url": "/candidates/{id}/activities",
    "method": "getActivityStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/activities",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of activities to try and retrieve per page (https://workable.readme.io/reference",
        "default": 50
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID. (https://workable.readme.io/reference"
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
    "url": "/candidates/{id}/offer",
    "method": "getOfferData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/offer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
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
    "url": "/candidates/{id}/comments",
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/comments",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMMENT"
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
    "url": "/candidates/{id}/tags",
    "method": "updateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/tags",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": true,
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
      }
    ]
  },
  {
    "url": "/candidates/{id}/disqualify",
    "method": "disqualifyCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/disqualify",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
      },
      {
        "name": "disqualification_reason",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{id}/revert",
    "method": "revertDisqualification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/revert",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
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
    "url": "/candidates/{id}/copy",
    "method": "copyToJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/copy",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
      },
      {
        "name": "target_job_shortcode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_JOB_SHORTCODE"
      },
      {
        "name": "target_stage",
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
    "url": "/candidates/{id}/relocate",
    "method": "relocateCandidateToJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/relocate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
      },
      {
        "name": "target_job_shortcode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET_JOB_SHORTCODE"
      },
      {
        "name": "target_stage",
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
    "url": "/candidates/{id}/move",
    "method": "moveToStage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/move",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
      },
      {
        "name": "target_stage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fill_reserved_requisition",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "requisition",
        "schema": "object",
        "required": false,
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
      }
    ]
  },
  {
    "url": "/candidates/{id}/ratings",
    "method": "createRating",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/ratings",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "member_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MEMBER_ID"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
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
    "url": "/candidates/{id}/update_custom_attribute_value",
    "method": "updateCustomAttributeValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Candidate",
    "typeScriptTag": "candidate",
    "description": "/candidates/:id/update_custom_attribute_value",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The candidate's id",
        "example": "ID"
      },
      {
        "name": "custom_attribute_key",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOM_ATTRIBUTE_KEY"
      },
      {
        "name": "checked",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "value",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "file",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "file_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "choices",
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
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/custom_attributes",
    "method": "attributes",
    "httpMethod": HttpMethodsEnum.GET,
    "description": "/custom_attributes",
    "parameters": [],
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
    "url": "/events",
    "method": "collectionGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "/events",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": "Returns events of the provided type. Available types are (call, interview & meeting)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Specifies the number of jobs to try and retrieve per page (https://workable.readme.io/reference",
        "default": 50
      },
      {
        "name": "sinceId",
        "schema": "string",
        "description": "Returns results with an ID greater than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "maxId",
        "schema": "string",
        "description": "Returns results with an ID less than or equal to the specified ID. (https://workable.readme.io/reference"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Returns events that are scheduled for after the specified date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Returns events that are scheduled for before the specified date"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "description": "Filters events for specified candidate"
      },
      {
        "name": "shortcode",
        "schema": "string",
        "description": "Filters events for specified job shortcode"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Filters events for specified member"
      },
      {
        "name": "context",
        "schema": "string",
        "description": "Specifies the source of the events fetched (applicable only for user tokens) `user`: Events the user is attending to(default behavior). `team`: Events from any job the user has access"
      },
      {
        "name": "includeCancelled",
        "schema": "boolean",
        "description": "When set `true` will also include cancelled events",
        "default": false
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
    "url": "/events/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Event",
    "typeScriptTag": "event",
    "description": "/events/:id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The id of the event",
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
    "url": "/employees",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "/employees",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limits the number of the returned results",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "Skips the first n entries. Using limit and offset one can navigate through the entire employee database",
        "default": 0
      },
      {
        "name": "query",
        "schema": "string",
        "description": "Query the list using firstname, lastname and email"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Optional query param to order by division or department"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Optional member_id that can be retrieved by GET /members. Needed to see information with elevated access."
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
    "url": "/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "/employees",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Optional value, this can be retrieved by GET /members endpoint"
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
      }
    ]
  },
  {
    "url": "/employee_fields",
    "method": "fields",
    "httpMethod": HttpMethodsEnum.GET,
    "description": "/employee_fields",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Optional member id that can be derived from GET /members endpoint"
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
    "url": "/employees/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "/employees/:id",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Optional member id for user tokens. Required for account tokens. Members endpoint GET /members"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "ID"
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
    "url": "/employees/{id}",
    "method": "updateExistingEmployee",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "/employees/:id",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Optional value, this can be retrieved by GET /members endpoint"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/employees/{id}/documents",
    "method": "getDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "/employees/:id/documents",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": "Optional member id for user tokens. Required for account tokens. Members endpoint GET /members"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "ID"
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
    "url": "/employees/{id}/documents",
    "method": "uploadDocuments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "/employees/:id/documents",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
      },
      {
        "name": "memberId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The employee id",
        "example": "ID"
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
      }
    ]
  },
  {
    "url": "/work_schedules",
    "method": "schedules",
    "httpMethod": HttpMethodsEnum.GET,
    "description": "/work_schedules",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "The account subdomain",
        "example": "SUBDOMAIN"
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
    "url": "/subscriptions",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "/subscriptions",
    "parameters": [],
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
    "url": "/subscriptions",
    "method": "registerEventSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "/subscriptions",
    "parameters": [
      {
        "name": "target",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGET"
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "args",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "unsubscribeEvent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Subscription",
    "typeScriptTag": "subscription",
    "description": "/subscriptions/:id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the webhook subscription",
        "example": "ID"
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
    "url": "/accounts/{subdomain}",
    "method": "getPublicJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "api/accounts/:subdomain",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
      },
      {
        "name": "details",
        "schema": "boolean",
        "description": "Includes description field for jobs",
        "default": false
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
    "url": "/accounts/{subdomain}/locations",
    "method": "publicJobLocationsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "api/accounts/:subdomain/locations",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
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
    "url": "/accounts/{subdomain}/departments",
    "method": "getDepartmentCollection",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Account",
    "typeScriptTag": "account",
    "description": "api/accounts/:subdomain/departments",
    "parameters": [
      {
        "name": "subdomain",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBDOMAIN"
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
      apiTitle="public"
      apiBaseUrl="https://www.workable.com/api"
      apiVersion="3.8"
      endpoints={50}
      sdkMethods={55}
      schemas={153}
      parameters={141}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workable/openapi.yaml"
      developerDocumentation="workable.readme.io/reference"
    />
  );
}
  