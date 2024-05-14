import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SmartRecruitersTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="smart-recruiters-typescript-sdk"
      metaDescription={`SmartRecruiters is a California-based cloud platform that offers solutions including talent sourcing, recruitment and applicant tracking for businesses.`}
      company="SmartRecruiters"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/logo.png"
      companyKebabCase="smart-recruiters"
      clientNameCamelCase="smartRecruiters"
      homepage="smartrecruiters.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/favicon.png"
      contactUrl="https://developers.smartrecruiters.com"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","hr","applicant_tracking"]}
      methods={[
  {
    "url": "/postings/{uuid}/candidates",
    "method": "createNewCandidateApplication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "Create a New Candidate Application",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Posting UUID",
        "example": "UUID"
      },
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "createJoinLink",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "conditionalsIncluded",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "phoneNumber",
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
        "name": "web",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "experience",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "resume",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "avatar",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "answers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "messageToHiringManager",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "consent",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "consentDecisions",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internal",
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
        "description": ""
      },
      {
        "statusCode": "401",
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
    "url": "/postings/{uuid}/candidates/{candidateId}/status",
    "method": "getCandidateStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "Get candidate status",
    "parameters": [
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Posting UUID",
        "example": "UUID"
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATEID"
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
    "url": "/postings/{uuid}/configuration",
    "method": "getPostingConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application API",
    "typeScriptTag": "applicationApi",
    "description": "Get application configuration for posting",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "description": "Language for screening questions. By default 'en'."
      },
      {
        "name": "uuid",
        "schema": "string",
        "required": true,
        "description": "Posting UUID",
        "example": "UUID"
      },
      {
        "name": "conditionalsIncluded",
        "schema": "boolean",
        "description": "Specifies whether conditional questions should be returned in the response. 'false' if not specified\n- Only available for BETA customers\n"
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
    "url": "/approvals/{approvalRequestId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Get approval request by id",
    "parameters": [
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request identifier",
        "example": "APPROVALREQUESTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Approval request"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/approvals/{approvalRequestId}/comments",
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Get comments for given approval request",
    "parameters": [
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request identifier",
        "example": "APPROVALREQUESTID"
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
    "url": "/approvals/{approvalRequestId}/comments",
    "method": "addCommentToRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Add comment to given approval request",
    "parameters": [
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request identifier",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "authorId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AUTHORID"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Input validation fails"
      }
    ]
  },
  {
    "url": "/approvals",
    "method": "getPendingRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Get pending approvals requests where you are an approver.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "Identifier for the paged list of approval requests. To get the first page of approval request, leave it blank.\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Approval requests"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/approvals",
    "method": "createApprovalRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Create approval request",
    "parameters": [
      {
        "name": "baseId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BASEID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "decisionMode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DECISIONMODE"
      },
      {
        "name": "steps",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Approval request"
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
    "url": "/approvals/{approvalRequestId}/approve-decisions",
    "method": "approveDecisions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Approve the approval request by id",
    "parameters": [
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request identifier",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "approverId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPROVERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Approval request approved"
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
    "url": "/approvals/{approvalRequestId}/reject-decisions",
    "method": "rejectRequestById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "approvals",
    "typeScriptTag": "approvals",
    "description": "Reject the approval request by id",
    "parameters": [
      {
        "name": "approvalRequestId",
        "schema": "string",
        "required": true,
        "description": "Approval request identifier",
        "example": "APPROVALREQUESTID"
      },
      {
        "name": "approverId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPROVERID"
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
        "statusCode": "204",
        "description": "Approval request rejected"
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
    "url": "/partner/configuration",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "get partner configuration",
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
    "url": "/partner/configuration",
    "method": "savePartnerConfig",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "saves configuration for partner",
    "parameters": [
      {
        "name": "consentUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONSENTURL"
      },
      {
        "name": "consentDisplayMode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONSENTDISPLAYMODE"
      },
      {
        "name": "assessmentPackageListUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSESSMENTPACKAGELISTURL"
      },
      {
        "name": "singleAssessmentPackageUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SINGLEASSESSMENTPACKAGEURL"
      },
      {
        "name": "packageOrderUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inlineAssessmentPackageOrderUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "oauthTokenUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OAUTHTOKENURL"
      },
      {
        "name": "integrationDisableUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "supportedAssessmentTypes",
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
    "url": "/integration/company/{companyId}",
    "method": "integrationSetup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "integration",
    "typeScriptTag": "integration",
    "description": "enable the company integration",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTID"
      },
      {
        "name": "clientSecret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENTSECRET"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{orderId}/results",
    "method": "updatePackageResult",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "result",
    "typeScriptTag": "result",
    "description": "updates package result",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Order ID",
        "example": "ORDERID"
      },
      {
        "name": "summary",
        "schema": "string",
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "assessmentPackageDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "submissionDate",
        "schema": "string",
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
        "name": "score",
        "schema": "object",
        "description": "",
        "example": "{raw:28, min:20, max:80} gives a normalized 13% or label '28/80' (min is not presented in label)"
      },
      {
        "name": "scoreLabel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "description": ""
      },
      {
        "name": "assessmentResults",
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
        "statusCode": "415",
        "description": ""
      }
    ]
  },
  {
    "url": "/orders/{orderId}/results/attachment",
    "method": "addAttachmentToOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "result",
    "typeScriptTag": "result",
    "description": "add attachment to order",
    "parameters": [
      {
        "name": "orderId",
        "schema": "string",
        "required": true,
        "description": "Order ID",
        "example": "ORDERID"
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
    "url": "/integration",
    "method": "showConsentFormOnPartnerSide",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "integration",
    "typeScriptTag": "integration",
    "description": "Shows consent form on partner side",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "description": "id of company setting up the integration"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/integrations/companies/{companyId}",
    "method": "removeIntegrationOnPartnerSide",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "integration",
    "typeScriptTag": "integration",
    "description": "Removes integration on partner side",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "id of company with integration",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/packages",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "packages",
    "typeScriptTag": "packages",
    "description": "Retrieves a list of packages",
    "parameters": [
      {
        "name": "requester",
        "schema": "object",
        "required": false,
        "description": "Information about recruiter requesting list of packages"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "country code"
      },
      {
        "name": "regionAbbr",
        "schema": "string",
        "required": false,
        "description": "region abbreviation"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "city"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": "address"
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": "postal code"
      },
      {
        "name": "remote",
        "schema": "boolean",
        "required": false,
        "description": "describe whether job is remote or not"
      },
      {
        "name": "partnerFieldId",
        "schema": "string",
        "required": false,
        "description": "Example partner field. Partner defines list of allowed fields in configuration. Client binds job fields in his configuration. All fields with non-empty values will be included in this call."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "204",
        "description": "Returned when there are not packages to present"
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
    "url": "/packages/{assessmentPackageId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "packages",
    "typeScriptTag": "packages",
    "description": "Retrieves a package by id",
    "parameters": [
      {
        "name": "assessmentPackageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSESSMENTPACKAGEID"
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
    "url": "/packages/orders",
    "method": "assessPackageForCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Orders assessment package for candidate",
    "parameters": [
      {
        "name": "resultCallbackURL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULTCALLBACKURL"
      },
      {
        "name": "candidate",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "requester",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentPackageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSESSMENTPACKAGEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "fields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "partner-field-id": "partner-field-value"
        }
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
    "url": "/packages/inline/orders",
    "method": "assessPackageForCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "orders",
    "typeScriptTag": "orders",
    "description": "Orders inline assessment package for candidate",
    "parameters": [
      {
        "name": "resultCallbackURL",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RESULTCALLBACKURL"
      },
      {
        "name": "candidate",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "assessmentPackageId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSESSMENTPACKAGEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "completedAssessmentCallbackUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPLETEDASSESSMENTCALLBACKURL"
      },
      {
        "name": "fields",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "partner-field-id": "partner-field-value"
        }
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
    "url": "/oauth/token",
    "method": "exchangeCredentialsForAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "Exchange credentials for an access token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_SECRET"
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
    "url": "/assessment-orders",
    "method": "getAllForApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assessment orders",
    "typeScriptTag": "assessmentOrders",
    "description": "Retrieves all assessment orders for specified application",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application",
        "example": "APPLICATIONID"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/audit-events",
    "method": "listEvents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "audit",
    "typeScriptTag": "audit",
    "description": "List audit events",
    "parameters": [
      {
        "name": "eventDateAfter",
        "schema": "string",
        "description": "ISO8601-formatted time boundaries for the event time, Format: yyyy-MM-ddTHH:mm:ss.SSSZZ (example: 2023-01-21T12:50:02.594Z)"
      },
      {
        "name": "eventDateBefore",
        "schema": "string",
        "description": "ISO8601-formatted time boundaries for the event time, Format: yyyy-MM-ddTHH:mm:ss.SSSZZ (example: 2023-01-21T12:50:02.594Z)"
      },
      {
        "name": "eventName",
        "schema": "array",
        "description": "Name of the event",
        "default": [
          "USER_ACCOUNT_ACTIVATED",
          "USER_ACCOUNT_CREATED",
          "USER_ACCOUNT_DEACTIVATED",
          "USER_ACCOUNT_UPDATED",
          "USER_AUTHENTICATION_INVALID_CREDENTIALS",
          "USER_AUTHENTICATION_SUCCESS",
          "USER_PASSWORD_CHANGED",
          "USER_PASSWORD_RESET",
          "USER_ROLE_CHANGED",
          "USER_API_KEY_RENEWED",
          "CREDENTIALS_CREATED",
          "CREDENTIALS_CHANGED",
          "CREDENTIALS_REVOKED",
          "SEARCH",
          "JOB_DELETED",
          "HIRING_TEAM_MEMBER_ADDED",
          "HIRING_TEAM_MEMBER_REMOVED",
          "HIRING_TEAM_ROLE_UPDATED",
          "APPROVAL_DELEGATION_FROM_USER_CREATED",
          "APPROVAL_DELEGATION_FROM_USER_CANCELLED",
          "APPROVAL_DELEGATION_TO_USER_CREATED",
          "APPROVAL_DELEGATION_TO_USER_CANCELLED",
          "JOB_APPROVAL_REQUESTED",
          "JOB_APPROVAL_APPROVED",
          "JOB_APPROVAL_REJECTED",
          "JOB_APPROVAL_ABANDONED",
          "JOB_APPROVAL_STEP_APPROVED",
          "JOB_APPROVAL_STEP_REJECTED",
          "JOB_APPROVAL_STEP_SKIPPED",
          "JOB_APPROVAL_STEP_DELEGATED",
          "OFFER_APPROVAL_APPROVED",
          "OFFER_APPROVAL_REJECTED",
          "OFFER_APPROVAL_ABANDONED",
          "OFFER_APPROVAL_STEP_APPROVED",
          "OFFER_APPROVAL_STEP_REJECTED",
          "OFFER_APPROVAL_STEP_SKIPPED",
          "OFFER_APPROVAL_STEP_DELEGATED",
          "OFFER_ACCEPTED",
          "OFFER_DECLINED",
          "CANDIDATE_PERSONAL_DATA_MODIFIED",
          "CANDIDATE_PROFILE_MODIFIED",
          "CANDIDATE_DELETED",
          "CANDIDATE_PROFILE_OPENED",
          "CANDIDATE_EEO_FILLED",
          "CANDIDATE_PROFILE_UPDATED_DUE_TO_MERGE",
          "CANDIDATE_DELETED_DUE_TO_MERGE",
          "CANDIDATE_TAGS_MODIFIED",
          "APPLICATION_PROPERTIES_UPDATED",
          "APPLICATION_SOURCE_MODIFIED",
          "ONBOARDING_STATUS_UPDATED",
          "JOB_APPLICATION_CREATED",
          "JOB_APPLICATION_STATE_MODIFIED",
          "LRSC_CONSENT_GIVEN",
          "OAUTH_APPLICATION_ACCESS_GRANTED",
          "JOB_PROPERTY_CREATED",
          "JOB_PROPERTY_UPDATED",
          "JOB_PROPERTY_ACTIVATED",
          "JOB_PROPERTY_DEACTIVATED",
          "JOB_PROPERTY_UPDATED_VALUES",
          "JOB_PROPERTY_UPDATED_VALUE",
          "JOB_PROPERTY_ADDED_VALUE",
          "JOB_PROPERTY_ARCHIVED_VALUE",
          "JOB_PROPERTY_DEPENDENT_PROPERTIES_UPDATED",
          "JOB_PROPERTY_DEPENDENT_VALUES_UPDATED",
          "JOB_PROPERTIES_CHANGED",
          "POSITION_UPDATED",
          "POSITION_DELETED",
          "POSITION_CREATED",
          "POSITION_ASSIGNED",
          "CANCEL_NOT_FILLED_POSITION",
          "JOB_AD_CREATED",
          "JOB_AD_UPDATED",
          "JOB_AD_DELETED",
          "ONBOARDING_PROCESS_DELETED",
          "CUSTOMER_REPORT_DOWNLOADED"
        ]
      },
      {
        "name": "authorType",
        "schema": "array",
        "description": "Type of the author who generated the event",
        "default": [
          "USER",
          "SUPPORT_USER",
          "SYSTEM",
          "CANDIDATE"
        ]
      },
      {
        "name": "authorId",
        "schema": "string",
        "description": "Unique identifier of the author"
      },
      {
        "name": "entityType",
        "schema": "array",
        "description": "Type of the entity that the event is related to",
        "default": [
          "USER",
          "CANDIDATE",
          "APPLICATION",
          "OFFER",
          "JOB",
          "COMPANY",
          "JOB_PROPERTY",
          "JOB_AD",
          "CREDENTIAL",
          "REPORT_FILE",
          "ONBOARDING_PROCESS"
        ]
      },
      {
        "name": "entityId",
        "schema": "string",
        "description": "Unique identifier of the entity that the event is related to"
      },
      {
        "name": "nextPageId",
        "schema": "string",
        "description": "Unique identifier for the next page of events"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of audit events to return. Maximum value is 100.",
        "default": 10
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
    "url": "/candidates/{id}/tags",
    "method": "removeTags",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Delete tags for a candidate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Candidate's tags successfully deleted"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{id}/tags",
    "method": "getTags",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get tags for a candidate",
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
    "url": "/candidates/{id}/tags",
    "method": "addTagsToCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Add tags to a candidate",
    "parameters": [
      {
        "name": "tags",
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
    "url": "/candidates/{id}/tags",
    "method": "updateCandidateTags",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Update tags for a candidate",
    "parameters": [
      {
        "name": "tags",
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
      }
    ]
  },
  {
    "url": "/candidates/{id}/onboardingStatus",
    "method": "getOnboardingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get Onboarding Status for a candidate",
    "parameters": [],
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
    "url": "/candidates/{id}/onboardingStatus",
    "method": "setOnboardingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Set Onboarding Status for a candidate",
    "parameters": [
      {
        "name": "onboardingStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONBOARDINGSTATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Onboarding status successfully updated."
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
    "url": "/candidates/{id}/jobs/{jobId}/onboardingStatus",
    "method": "getOnboardingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get Onboarding Status for a candidate associated with given job",
    "parameters": [],
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
    "url": "/candidates/{id}/jobs/{jobId}/onboardingStatus",
    "method": "setOnboardingStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Sets Onboarding Status for a candidate associated with given job",
    "parameters": [
      {
        "name": "onboardingStatus",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ONBOARDINGSTATUS"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Onboarding status successfully updated."
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
    "url": "/candidates",
    "method": "searchResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Search candidates",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "keyword search, for more infromation see [SmartRecruiters HelpCenter](https://help.smartrecruiters.com/Getting_Started/Platform/Searching_candidates_via_Candidate_API)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return. max value is 100",
        "default": 10
      },
      {
        "name": "pageId",
        "schema": "string",
        "description": "page identifier of elements to return\n\nThe `pageId` param can be used to fetch multiple page response, in case\nthe number of results is higher than max number of elements to return (specified in the `limit` parameter).\nThe `pageId` should not be present when requesting the first page of results.\nThe pageId of the following page is returned either in the `nextPageId` property, or is available\nin the HTTP header `Link` value of relation type `next`.\nExample of the `Link` header:\n```\n</candidates?limit=10&pageId=SKYfn51wTboVGco6%2FvIsIC%2FYbyYP%2F4WgqHLArvCRtYhQEMCgvp1Zj0ya0wpjfKIblyGRcbHytMcvCehVazcjQA%3D%3D>; rel=\"next\"\n```\n"
      },
      {
        "name": "jobId",
        "schema": "array",
        "description": "job filter to display candidates who applied for a job [id]; can be used repeatedly;"
      },
      {
        "name": "location",
        "schema": "array",
        "description": "location keyword search which looks up a string in a candidate’s location data; can be used repeatedly; case insensitive; e.g. Krakow"
      },
      {
        "name": "averageRating",
        "schema": "array",
        "description": "average rating filter to display candidates with a specific average rating (https://developers.smartrecruiters.com/reference; can be used repeatedly; e.g. 4"
      },
      {
        "name": "status",
        "schema": "array",
        "description": "candidate’s status filter in a context of a job; can be used repeatedly"
      },
      {
        "name": "consentStatus",
        "schema": "array",
        "description": "candidate’s consent status filter; can be used repeatedly"
      },
      {
        "name": "subStatus",
        "schema": "string",
        "description": "candidate’s sub-status filter in a context of a job. Works only in a correlation with a set value for the \"status\" field."
      },
      {
        "name": "tag",
        "schema": "array",
        "description": "tag assigned to a candidate; can be used repeatedly; case insensitive; e.g. fluent english"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "ISO8601-formatted time boundaries for the candidate update time, Format: yyyy-MM-ddTHH:mm:ss.SSSZZ"
      },
      {
        "name": "onboardingStatus",
        "schema": "string",
        "description": "candidate's onboarding status"
      },
      {
        "name": "propertyId",
        "schema": "array",
        "description": "candidate's property id (https://developers.smartrecruiters.com/reference. Currently it is only possible to filter by single-select application fields. Other application field type filtering is not possible.",
        "default": []
      },
      {
        "name": "propertyValueId",
        "schema": "array",
        "description": "candidate's property value id (https://developers.smartrecruiters.com/reference",
        "default": []
      },
      {
        "name": "sourceType",
        "schema": "array",
        "description": "candidate's source type (https://developers.smartrecruiters.com/reference",
        "default": []
      },
      {
        "name": "sourceSubType",
        "schema": "array",
        "description": "candidate's source subtype (https://developers.smartrecruiters.com/reference",
        "default": []
      },
      {
        "name": "sourceValueId",
        "schema": "array",
        "description": "candidate's source value id (https://developers.smartrecruiters.com/reference",
        "default": []
      },
      {
        "name": "questionCategory",
        "schema": "array",
        "description": "screening question category (https://developers.smartrecruiters.com/reference",
        "default": []
      },
      {
        "name": "questionFieldId",
        "schema": "array",
        "description": "screening question field id (https://developers.smartrecruiters.com/reference",
        "default": []
      },
      {
        "name": "questionFieldValueId",
        "schema": "array",
        "description": "screening question field value id (https://developers.smartrecruiters.com/reference",
        "default": []
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
    "url": "/candidates",
    "method": "createWithSourceDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Create a new candidate and assign to a Talent Pool",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phoneNumber",
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
        "name": "web",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "experience",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "sourceDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internal",
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
    "url": "/candidates/cv",
    "method": "parseResumeAndAssignToTalentPool",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Parse a resume, create a candidate and assign to a Talent Pool.",
    "parameters": [
      {
        "name": "sourceTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceSubTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "internal",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "file",
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
    "url": "/candidates/consent-requests",
    "method": "requestConsentFromMultiple",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Request consent from multiple candidates",
    "parameters": [
      {
        "name": "content",
        "schema": "array",
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
    "url": "/candidates/{id}/consent",
    "method": "getStatusOfConsent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Status of candidate consent",
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
    "url": "/candidates/{id}/consents",
    "method": "getConsentDecisions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Candidate consent decisions",
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
    "url": "/candidates/{id}",
    "method": "removeCandidateById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Delete Candidate",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Candidate successfully deleted"
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
    "url": "/candidates/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get details of a candidate",
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
    "url": "/candidates/{id}",
    "method": "updatePersonalInfo",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Update candidate personal information",
    "parameters": [
      {
        "name": "firstName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "description": ""
      },
      {
        "name": "web",
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
    "url": "/candidates/{id}/attachments",
    "method": "listAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get list candidate's attachments.",
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
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{id}/attachments",
    "method": "attachFiles",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Attach files to a candidate.",
    "parameters": [
      {
        "name": "attachmentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENTTYPE",
        "default": "GENERIC_FILE"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{id}/attachments/{attachmentId}",
    "method": "getAttachmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get a candidate's attachment.",
    "parameters": [
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "Identifier of an attachment",
        "example": "ATTACHMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Attachment content"
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
    "url": "/candidates/{id}/jobs/{jobId}/attachments",
    "method": "getAttachmentsByJobId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get list of candidate's attachments in context of given job.",
    "parameters": [],
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
    "url": "/candidates/{id}/jobs/{jobId}/attachments",
    "method": "attachFileToJobCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Attach file to candidate in context of given job.",
    "parameters": [
      {
        "name": "attachmentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENTTYPE",
        "default": "GENERIC_FILE"
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/attachments/{attachmentId}",
    "method": "deleteAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Delete attachment.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Attachment successfully deleted"
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
    "url": "/candidates/attachments/{attachmentId}",
    "method": "getAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate's attachment.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Candidate's Attachment"
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
    "url": "/candidates/{id}/jobs/{jobId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Update a candidate's status",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "subStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startsOn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/candidates/{id}/status",
    "method": "updateStatusOnPrimaryAssignment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Update a candidate's status on primary assignment",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "subStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startsOn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reason",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/candidates/{id}/status/history",
    "method": "getStatusHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate's status history",
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
    "url": "/candidates/{id}/jobs/{jobId}/status/history",
    "method": "getStatusHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate's status history for a candidate's job",
    "parameters": [],
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
    "url": "/candidates/{id}/jobs/{jobId}/source",
    "method": "updateSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Update a candidate's source",
    "parameters": [
      {
        "name": "sourceTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCETYPEID"
      },
      {
        "name": "sourceSubTypeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SOURCEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/candidates/{id}/properties",
    "method": "getPropertyValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate property values for a candidate",
    "parameters": [
      {
        "name": "context",
        "schema": "string",
        "description": "context for candidate properties to display"
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
    "url": "/candidates/{id}/jobs/{jobId}/properties",
    "method": "getPropertyValuesForJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate property values for a candidate's job",
    "parameters": [
      {
        "name": "context",
        "schema": "string",
        "description": "context for candidate properties to display"
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
    "url": "/candidates/{id}/jobs/{jobId}/properties",
    "method": "updateCandidateProperties",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Add/update candidate properties values",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Properties successfully updated."
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
    "url": "/candidates/{id}/properties/{propertyId}",
    "method": "updatePropertyValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Add/update candidate property value",
    "parameters": [
      {
        "name": "propertyId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a Candidate Property",
        "example": "PROPERTYID"
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Property successfully updated."
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
    "url": "/candidates/{id}/jobs/{jobId}/properties/{propertyId}",
    "method": "updatePropertyValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Add/update candidate property value",
    "parameters": [
      {
        "name": "propertyId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a Candidate Property",
        "example": "PROPERTYID"
      },
      {
        "name": "value",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Property successfully updated."
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
    "url": "/candidates/{id}/jobs/{jobId}/screening-answers",
    "method": "getScreeningAnswersByJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get candidate screening answers for a candidate's job",
    "parameters": [],
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
    "url": "/jobs/{jobId}/candidates",
    "method": "createWithSource",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Create a new candidate and assign to a job",
    "parameters": [
      {
        "name": "tags",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phoneNumber",
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
        "name": "web",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "experience",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "sourceDetails",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "internal",
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
    "url": "/jobs/{jobId}/candidates/cv",
    "method": "parseResumeAndAssignToJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Parse a resume, create a candidate and assign to a job.",
    "parameters": [
      {
        "name": "sourceTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceSubTypeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sourceId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "internal",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "file",
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
    "url": "/candidates/{id}/jobs/{jobId}",
    "method": "getApplicationDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "candidates",
    "typeScriptTag": "candidates",
    "description": "Get details of a candidate's application to a job",
    "parameters": [],
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
    "url": "/configuration/company",
    "method": "getCompanyInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get company information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/job-properties",
    "method": "getAvailableProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get a list of available job properties",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/configuration/job-properties",
    "method": "createJobProperty",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Create a job property",
    "parameters": [
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "visible",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "required",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "With codes:\n* *JOB_PROPERTY_LIMIT_EXCEEDED* when job properties limit is reached,\n* *DEFINITION_NAME_IS_NOT_ALLOWED* when job property name is restricted.\n"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}",
    "method": "getPropertyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get job property by id",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/configuration/job-properties/{id}",
    "method": "updateJobProperty",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Update a job property",
    "parameters": [],
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
        "statusCode": "422",
        "description": "With code:\n* *DEFINITION_NAME_IS_NOT_ALLOWED* when job property name is restricted.\n"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/translations",
    "method": "addJobPropertyTranslations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Add a job property's translations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Translations accepted"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Invalid input: missing required data, invalid format"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/values",
    "method": "getJobPropertyValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get available job property values",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
      },
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "identifier of the next page of subscriptions"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "pageSize"
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
    "url": "/configuration/job-properties/{id}/values",
    "method": "createJobPropertyValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Create a job property value",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
      },
      {
        "name": "archived",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/values/{valueId}",
    "method": "archiveJobPropertyValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Archive a job property value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/job-properties/{id}/values/{valueId}",
    "method": "updateJobPropertyValue",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Update a job property value",
    "parameters": [],
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "with input validation fails or with codes:\n* *ACTIVE_VALUES_LIMIT_REACHED* when limit of active job property values is reached.\n* *JSON_PATCH_INVALID* when patch json is invalid.\n* *VALUE_LABEL_IS_BLANK* when provided label is blank\n* *VALUE_LABEL_IS_INVALID* when provided label is not valid, e.g. contains leading/trailing whitespaces\n"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/values/{valueId}",
    "method": "unarchiveJobPropertyValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Unarchive a job property value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/job-properties/{id}/values/{valueId}/translations",
    "method": "addJobPropertyValueTranslations",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Add a job property value's translations",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Translations accepted"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Invalid input: missing required data, invalid format"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/archive-values/{valueId}",
    "method": "unarchiveJobPropertyValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Unarchive a job property value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/archive-values/{valueId}",
    "method": "archiveJobPropertyValue",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Archive a job property value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/job-properties/{id}/activation",
    "method": "deactivateJobProperty",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Deactivate a job property",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/job-properties/{id}/activation",
    "method": "activateJobProperty",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Activate a job property",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/dependents",
    "method": "getJobPropertyDependents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get job property's dependents",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/configuration/job-properties/{id}/dependents",
    "method": "createJobPropertyDependents",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Create job property dependents",
    "parameters": [
      {
        "name": "ids",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "when input validation fails"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/dependents/{dependentId}",
    "method": "removeDependent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Remove job property's dependent",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/job-properties/{id}/dependents/{dependentId}/values",
    "method": "getDependentPropertyValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get dependent job property's values",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/configuration/job-properties/{id}/values/{valueId}/dependents/{dependentId}/values",
    "method": "getDependentValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get job property's dependent values",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
      },
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "identifier of the next page of subscriptions"
      },
      {
        "name": "pageSize",
        "schema": "integer",
        "required": false,
        "description": "pageSize"
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
    "url": "/configuration/job-properties/{id}/values/{valueId}/dependents/{dependentId}/values",
    "method": "addDependentValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Add job property's dependent value",
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "when input validation fails"
      }
    ]
  },
  {
    "url": "/configuration/job-properties/{id}/values/{valueId}/dependents/{dependentId}/values/{dependentValueId}",
    "method": "removeDependentValuesRelationship",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Remove job property's dependent values relationship",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/departments",
    "method": "getDepartments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get departments",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/departments",
    "method": "createDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Creates department",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
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
    "url": "/configuration/departments/{id}",
    "method": "getDepartmentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identifier of a department",
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
    "url": "/configuration/hiring-processes",
    "method": "getHiringProcesses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get list of hiring process",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/hiring-processes/{id}",
    "method": "getHiringProcess",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get hiring process",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identifier of a hiring process",
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
    "url": "/configuration/offer-properties",
    "method": "listOfferProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get a list of available offer properties",
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
    "url": "/configuration/candidate-properties",
    "method": "getCandidateProperties",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get a list of available candidate properties",
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
    "url": "/configuration/candidate-properties/{id}",
    "method": "getCandidatePropertyById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get candidate property by id",
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
    "url": "/configuration/candidate-properties/{id}/values",
    "method": "getCandidatePropertyValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get Candidate Property values",
    "parameters": [],
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
    "url": "/configuration/candidate-properties/{id}/values",
    "method": "createCandidatePropertyValue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Create candidate property value",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "value",
        "schema": "undefined",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/candidate-properties/{id}/values/{valueId}",
    "method": "removeValue",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Remove candidate property value",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/configuration/candidate-properties/{id}/values/{valueId}",
    "method": "getCandidatePropertyValueById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get Candidate Property value by id",
    "parameters": [],
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
    "url": "/configuration/candidate-properties/{id}/values/{valueId}",
    "method": "updatePropertyValueLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Update candidate property value label",
    "parameters": [
      {
        "name": "label",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LABEL"
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/sources",
    "method": "listCandidateSourceTypesWithSubtypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "List candidate source types with subtypes",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/sources/{sourceType}/values",
    "method": "listCandidateSourcesByType",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "List candidate sources",
    "parameters": [
      {
        "name": "sourceSubType",
        "schema": "string",
        "required": false,
        "description": "Source SubType from  /configuration/sources"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "number of elements to return. max value is 100",
        "default": 100
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "number of elements to skip while processing result",
        "default": 0
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
    "url": "/configuration/sources/{sourceType}/values/{sourceValueId}",
    "method": "getCandidateSource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get a candidate source",
    "parameters": [
      {
        "name": "sourceSubType",
        "schema": "string",
        "required": false,
        "description": "Source SubType from  /configuration/sources"
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
    "url": "/configuration/sources/{sourceIdentifier}",
    "method": "getCandidateSourceById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get a candidate source by identifier.",
    "parameters": [],
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
    "url": "/configuration/rejection-reasons",
    "method": "getRejectionReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get rejection reasons",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/withdrawal-reasons",
    "method": "getWithdrawalReasons",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configuration",
    "typeScriptTag": "configuration",
    "description": "Get withdrawal reasons",
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
    "url": "/publications/{postingId}",
    "method": "getPostingById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feed",
    "typeScriptTag": "feed",
    "description": "Get posting by id",
    "parameters": [
      {
        "name": "postingId",
        "schema": "integer",
        "required": true,
        "description": "Posting id to find",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/publications/{postingId}",
    "method": "updatePostingInfo",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "feed",
    "typeScriptTag": "feed",
    "description": "Update posting information",
    "parameters": [
      {
        "name": "postingId",
        "schema": "integer",
        "required": true,
        "description": "A single posting id. Allows updating information only for the defined postings.",
        "example": 0
      },
      {
        "name": "liveUrl",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Posting successfully updated"
      },
      {
        "statusCode": "400",
        "description": "Payload not valid"
      },
      {
        "statusCode": "401",
        "description": "Wrong token"
      },
      {
        "statusCode": "404",
        "description": "PostingId not found"
      }
    ]
  },
  {
    "url": "/publications",
    "method": "listPostings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "feed",
    "typeScriptTag": "feed",
    "description": "Get a list of postings",
    "parameters": [
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "List postings <b>created</b> after the specified date.<br/><br/>Date should be in ISO 8601 format: (e.g.: '2015-07-27T08:43:33.000Z').<br/><br/>If no value is provided, only postings created in the last 30 days will be returned."
      },
      {
        "name": "status",
        "schema": "array",
        "description": "List of posting statuses separated by comma.<br/><br/>Status definition:<br/><ul><li><b>Pending</b> - this is a new posting that is pending publication on your job board. You should always retrieve these postings, publish them, and then update the status via the <i>PUT</i> method.</li><li><b>UnderPosting</b> - this is a status that is only set by you. It indicates that a posting is currently being published but is not yet available on the job board. SmartRecruiters will never set this status ourselves.</li><li><b>Active</b> - this is a status that is only set by you. It indicates that the posting has been successfully published and is available on the job board. SmartRecruiters will never set this status ourselves.</li><li><b>toUnpost</b> - this posting has either expired or has manually been requested for removal by the client. As a job board, you should unpost these postings immediately, and then update the status to <i>Inactive</i> via the <i>PUT</i> method.</li><li><b>Inactive</b> - this is a status that is only set by you. It indicates that the posting has been successfully unpublished and is no longer available on the job board. SmartRecruiters will never set this status ourselves.</li><li><b>Error</b> - this is a status only set by you. It indicates that the posting could not be published. SmartRecruiters will never set this status ourselves.</li></ul><br/>Example: <i>status=Active,Error</i>"
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "Number of elements to skip while processing result.<br/>Allowed range: [0, 2^31-1].",
        "default": "0"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "Maximum number of postings returned.<br/>Allowed range: [0, 100].",
        "default": "100"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "404",
        "description": "Not found"
      }
    ]
  },
  {
    "url": "/interview-types",
    "method": "getTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "interview types",
    "typeScriptTag": "interviewTypes",
    "description": "Retrieves interview types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interview-types",
    "method": "addExistingTypes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "interview types",
    "typeScriptTag": "interviewTypes",
    "description": "Adds interview types to already existing ones",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Interview types updated"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "When input validation fails"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interview-types/{interviewType}",
    "method": "removeByType",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "interview types",
    "typeScriptTag": "interviewTypes",
    "description": "Removes interview type with given name",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Interview type deleted"
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
    "url": "/interviews",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "interviews",
    "typeScriptTag": "interviews",
    "description": "Retrieves a list of interviews",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "ID of the application",
        "example": "APPLICATIONID"
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
    "url": "/interviews",
    "method": "createNewInterview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "interviews",
    "typeScriptTag": "interviews",
    "description": "Creates an interview",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "candidate",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "organizerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORGANIZERID"
      },
      {
        "name": "timezone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TIMEZONE"
      },
      {
        "name": "timeslots",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "createdOn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "source",
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
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "interviews",
    "typeScriptTag": "interviews",
    "description": "Deletes an interview",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Interview was deleted"
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
    "url": "/interviews/{interviewId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "interviews",
    "typeScriptTag": "interviews",
    "description": "Retrieves an interview",
    "parameters": [],
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
    "url": "/interviews/{interviewId}",
    "method": "modifyInterview",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "interviews",
    "typeScriptTag": "interviews",
    "description": "Modifies an interview",
    "parameters": [
      {
        "name": "location",
        "schema": "string",
        "description": ""
      },
      {
        "name": "timezone",
        "schema": "string",
        "description": ""
      },
      {
        "name": "candidate",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Interview updated"
      },
      {
        "statusCode": "400",
        "description": "with codes:\n* **INVALID_TIMEZONE** when invalid timezone\n"
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
        "statusCode": "422",
        "description": "When input validation fails"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/timeslots",
    "method": "createNewTimeslot",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "timeslots",
    "typeScriptTag": "timeslots",
    "description": "Creates a timeslot",
    "parameters": [
      {
        "name": "interviewId",
        "schema": "string",
        "required": true,
        "description": "ID of the interview",
        "example": "INTERVIEWID"
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interviewType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "place",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startsOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTSON"
      },
      {
        "name": "endsOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDSON"
      },
      {
        "name": "interviewers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "candidateStatus",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "When input validation fails or with codes:\n* **INACTIVE_OR_DELETED_INTERVIEWERS** when at least one of the interviewers is inactive or deleted\n* **END_DATE_BEFORE_START_DATE** when end date of the timeslot is before start date\n* **NON_EXISTING_INTERVIEWERS** when at least one of the interviewers does not exist\n"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/timeslots/{timeslotId}",
    "method": "deleteTimeslot",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "timeslots",
    "typeScriptTag": "timeslots",
    "description": "Deletes a timeslot",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Timeslot deleted"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "with codes:\n* **INTERVIEW_NOT_FOUND** when no interview with given id\n* **TIMESLOT_NOT_FOUND** when no timeslot with given id\n"
      },
      {
        "statusCode": "409",
        "description": "with codes:\n* **CANNOT_DELETE_LAST_TIMESLOT** when cannot delete last timeslot\n"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/timeslots/{timeslotId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "timeslots",
    "typeScriptTag": "timeslots",
    "description": "Retrieves a timeslot",
    "parameters": [],
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
        "description": "with codes:\n* **INTERVIEW_NOT_FOUND** when no interview with given id\n* **TIMESLOT_NOT_FOUND** when no timeslot with given id\n"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/timeslots/{timeslotId}",
    "method": "modifyTimeSlot",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "timeslots",
    "typeScriptTag": "timeslots",
    "description": "Modifies a timeslot",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "interviewType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "place",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startsOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTSON"
      },
      {
        "name": "endsOn",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDSON"
      },
      {
        "name": "interviewers",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "candidateStatus",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Timeslot updated"
      },
      {
        "statusCode": "400",
        "description": "Missing data in timeslot object"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "with codes:\n* **INTERVIEW_NOT_FOUND** when no interview with given id\n* **TIMESLOT_NOT_FOUND** when no timeslot with given id\n"
      },
      {
        "statusCode": "422",
        "description": "When input validation fails or with codes:\n* **INACTIVE_OR_DELETED_INTERVIEWERS** when at least one of the interviewers is inactive or deleted\n* **END_DATE_BEFORE_START_DATE** when end date of the timeslot is before start date\n* **NON_EXISTING_INTERVIEWERS** when at least one of the interviewers does not exist\n"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/candidate/status",
    "method": "updateCandidateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "statuses",
    "typeScriptTag": "statuses",
    "description": "Changes a candidate's status.",
    "parameters": [
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
        "statusCode": "204",
        "description": "Status successfully changed"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "with codes:\n* **INTERVIEW_NOT_FOUND** when no interview with given id\n"
      },
      {
        "statusCode": "422",
        "description": "When input validation fails"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/timeslots/{timeslotId}/interviewers/{userId}/status",
    "method": "updateInterviewerStatusInSlot",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "statuses",
    "typeScriptTag": "statuses",
    "description": "Changes a interviewer's status in given timeslot",
    "parameters": [
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
        "statusCode": "204",
        "description": "Status successfully changed"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "with codes:\n* **INTERVIEW_NOT_FOUND** when no interview with given id * **TIMESLOT_NOT_FOUND** when no timeslot with given id * **NON_EXISTING_INTERVIEWERS** when no interviewer with given id exists in timeslot\n"
      },
      {
        "statusCode": "422",
        "description": "When input validation fails"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/interviews/{interviewId}/timeslots/{timeslotId}/candidateStatus",
    "method": "updateCandidateTimeslotStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "statuses",
    "typeScriptTag": "statuses",
    "description": "Changes a candidate's status in given timeslot",
    "parameters": [
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
        "statusCode": "204",
        "description": "Candidate status in a timeslot is successfully changed"
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "with codes:\n* **INTERVIEW_NOT_FOUND** when no interview with given id * **TIMESLOT_NOT_FOUND** when no timeslot with given id\n"
      },
      {
        "statusCode": "422",
        "description": "When input validation fails"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/positions",
    "method": "getPositionsForJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Positions for a job",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/positions",
    "method": "createNewPosition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Create a new position for a job",
    "parameters": [
      {
        "name": "positionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "incumbentName",
        "schema": "string",
        "required": false,
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
        "name": "positionOpenDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITIONOPENDATE"
      },
      {
        "name": "targetStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETSTARTDATE"
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
    "url": "/jobs/{jobId}/positions/{positionId}",
    "method": "deletePosition",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Delete position",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Position successfully removed"
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
    "url": "/jobs/{jobId}/positions/{positionId}",
    "method": "getSinglePosition",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get a single position",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/positions/{positionId}",
    "method": "updatePosition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Update position",
    "parameters": [
      {
        "name": "positionId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "incumbentName",
        "schema": "string",
        "required": false,
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
        "name": "positionOpenDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "POSITIONOPENDATE"
      },
      {
        "name": "targetStartDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TARGETSTARTDATE"
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
    "url": "/jobs/{jobId}/jobads",
    "method": "findJobAdsForJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Find and list job ads for a given job",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/jobads",
    "method": "createJobAd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Create a new job ad",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "language",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobAd",
        "schema": "object",
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
        "description": "with codes\n* **JOB_AD_LIMIT_REACHED** when job add limit (100 per job) is reached\n* **PROPERTY_INVALID** when one of job ad attribute contains invalid characters\n"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/jobads/{jobAdId}",
    "method": "getJobAd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get a job ad",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/jobads/{jobAdId}",
    "method": "updateJobAd",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Update a job ad",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "language",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobAd",
        "schema": "object",
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
        "description": "with code\n* **PROPERTY_INVALID** when one of job ad attribute contains invalid characters\n"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/jobads/{jobAdId}/postings",
    "method": "unpublishJobAd",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Unpublish a job ad",
    "parameters": [],
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
    "url": "/jobs/{jobId}/jobads/{jobAdId}/postings",
    "method": "listPublicationsForJobAd",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "List publications for a job ad",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
      },
      {
        "name": "activeOnly",
        "schema": "boolean",
        "required": false,
        "description": "publication status filter; when omitted, defaults to 'true' (only active publications are returned); 'false' returns active and inactive publications",
        "default": true
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
    "url": "/jobs/{jobId}/jobads/{jobAdId}/postings",
    "method": "publishJobAdPostings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Publishes a job ad",
    "parameters": [
      {
        "name": "aggregators",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": "",
        "default": "PUBLIC"
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
    "url": "/jobs/{jobId}/publication",
    "method": "unpublishJobFromAllSources",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Unpublishes a job from all sources",
    "parameters": [],
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
    "url": "/jobs/{jobId}/publication",
    "method": "findPublications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Find and list publications for a job",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
      },
      {
        "name": "activeOnly",
        "schema": "boolean",
        "required": false,
        "description": "publication status filter; defaults to 'true' (only active publications are returned); 'false' returns active and inactive publications",
        "default": true
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
    "url": "/jobs/{jobId}/publication",
    "method": "publishDefaultJobAd",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Publishes a default job ad",
    "parameters": [
      {
        "name": "aggregators",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "visibility",
        "schema": "string",
        "description": "",
        "default": "PUBLIC"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/jobs/{jobId}/hiring-team",
    "method": "getHiringTeam",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get hiring team of a job with a given id.",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/hiring-team",
    "method": "addHiringTeamMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Add hiring team member of a job with a given id.",
    "parameters": [],
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/hiring-team/{userId}",
    "method": "removeHiringTeamMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Removes hiring team member of a job with a given id.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
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
    "url": "/jobs/{jobId}/note",
    "method": "getNoteById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get note of a job.",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/note",
    "method": "updateNote",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Update note of a job.",
    "parameters": [
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
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
    "url": "/jobs/{jobId}/headcount",
    "method": "updateHeadcount",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Update job headcount.",
    "parameters": [
      {
        "name": "salaryRange",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "202",
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
    "url": "/jobs",
    "method": "searchJobsByParams",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Search jobs",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "full-text search query based on a job title; case insensitive; e.g. java developer"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "number of elements to return. max value is 100",
        "default": 10
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "number of elements to skip while processing result; this method of paging is very slow and is deprecated, please use `pageId` instead",
        "default": 0
      },
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "unique identifier for next page of jobs - returned as `nextPageId` in previous page result. You must set `job_id` value for `sort` parameter if you use `pageId`."
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "Order in which results are returned.\n- default - sorts results by creation date or by match score and creation date if query (https://developers.smartrecruiters.com/reference is set. Can't be used with pageId parameter (request might not return all results)\n- job_id - sorts results by job id. The only supported sorting order when using pageId based pagination."
      },
      {
        "name": "city",
        "schema": "array",
        "required": false,
        "description": "city filter (part of the location object); can be used repeatedly; case sensitive; e.g. San Francisco"
      },
      {
        "name": "department",
        "schema": "array",
        "required": false,
        "description": "department filter (by department label); can be used repeatedly; case sensitive; e.g. “Marketing”"
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "required": false,
        "description": "ISO8601-formatted time boundaries for the job update time, Format: yyyy-MM-ddTHH:mm:ss.SSSZZ"
      },
      {
        "name": "lastActivityAfter",
        "schema": "string",
        "required": false,
        "description": "ISO8601-formatted time boundaries for the job lastActivityOn time, Format: yyyy-MM-ddTHH:mm:ss.SSSZZ.\nlastActivityOn is updated when job is edited, new candidates apply or job is published.\n"
      },
      {
        "name": "language",
        "schema": "string",
        "required": false,
        "description": "Exceptions to the language code ISO format:\n* \"en-GB\" - \"English - English (https://developers.smartrecruiters.com/reference\"\n* \"es-MX\" - \"Spanish - español (México)\"\n* \"fr-CA\" - \"French - français (https://developers.smartrecruiters.com/reference\"\n* \"pt-BR\" - \"Portugal - português (https://developers.smartrecruiters.com/reference\"\n* \"zh-TW\" - \"Chinese (https://developers.smartrecruiters.com/reference - 中文 (香港)\"\n* \"zh-CN\" - \"Chinese (https://developers.smartrecruiters.com/reference - 中文 (简体)\"\n\n\nValue \"pt-PT\" is deprecated and will not work, use \"pt\" instead.\n"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status of a job\n"
      },
      {
        "name": "postingStatus",
        "schema": "string",
        "required": false,
        "description": "Posting status of a job\n"
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
    "url": "/jobs",
    "method": "createNewJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Create a new job",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "refNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetHiringDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "function",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "typeOfEmployment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experienceLevel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "eeoCategory",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobAd",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
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
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Input validation fails"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}",
    "method": "getContentById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get content of a job with a given id.",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}",
    "method": "updateJobAttributes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Update a job",
    "parameters": [],
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
        "statusCode": "422",
        "description": "Input validation fails"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}",
    "method": "updateJobAndJobAd",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Updates job",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "refNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetHiringDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "industry",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "function",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "typeOfEmployment",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "experienceLevel",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "eeoCategory",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "template",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobAd",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "properties",
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
        "statusCode": "422",
        "description": "Input validation fails"
      }
    ]
  },
  {
    "url": "/jobs/{jobId}/status",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Updates job status",
    "parameters": [
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
    "url": "/jobs/{jobId}/status/history",
    "method": "getStatusHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Job status history",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/jobs/{jobId}/approvals/latest",
    "method": "getLatestApprovals",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Get latest approval request for given job",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "language of returned content",
        "default": "en"
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
    "url": "/job-applications/{jobApplicationId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "job-applications",
    "typeScriptTag": "jobApplications",
    "description": "Get a job application",
    "parameters": [],
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
    "url": "/messages/shares",
    "method": "shareNewMessages",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Shares new messages on Hireloop with Users, Hiring Teams or Everyone and sends emails.",
    "parameters": [
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "correlationId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shareWith",
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
      }
    ]
  },
  {
    "url": "/messages/shares/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Delete a message",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "identifier of a message",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Message successfully deleted"
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
    "url": "/messages",
    "method": "getByCandidateAndJobId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "messages",
    "typeScriptTag": "messages",
    "description": "Fetch messages",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "identifier of a candidate",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": false,
        "description": "identifier of a job"
      },
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "identifier of next page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "limit",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "with codes:\n* **CANDIDATE_NOT_FOUND** when candidate with given id does not exist\n* **JOB_NOT_FOUND** when job with given id does not exist\n* **APPLICATION_NOT_FOUND** when candidate does not have application for given job\n"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/candidates/{id}/jobs/{jobId}/offers",
    "method": "getCandidateJobOffers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Get candidate's offers",
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
    "url": "/candidates/{id}/jobs/{jobId}/offers/{offerId}",
    "method": "getCandidateOffer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Get candidate's offer",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a Offer",
        "example": "OFFERID"
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
    "url": "/candidates/{id}/jobs/{jobId}/offers/{offerId}/approvals/latest",
    "method": "getLatestApprovalRequest",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Get latest approval request for candidate's offer",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a Offer",
        "example": "OFFERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Approval request"
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
    "url": "/offers",
    "method": "searchByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Search offers by criteria",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of offers to return. max number of offers returned by single call is 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "number of offers to skip while processing result"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "offer status; available values are: INACTIVE, UNDER_REVIEW, ACTIVE, REJECTED"
      },
      {
        "name": "q",
        "schema": "string",
        "description": "full text query. will match offers with name and description matching query string"
      },
      {
        "name": "postingId",
        "schema": "string",
        "description": "id of a job posting; allows getting offer information using Posting Id coming from Job Board API; not relevant for Assessment vendors"
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
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers",
    "method": "insertNewOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Create offer",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastUpdateDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "catalogId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATALOGID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "terms",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetMarket",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "availability",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{offerId}/documents",
    "method": "getRelatedDocuments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Get a list of documents related to sent offer.",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of an offer.",
        "example": "OFFERID"
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
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{offerId}/documents/{documentId}",
    "method": "getDocument",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Get a given document in a given sent offer",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "Identifier of an offer.",
        "example": "OFFERID"
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "Identifier of a document.",
        "example": "DOCUMENTID"
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/comments/{commentId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comments",
    "typeScriptTag": "comments",
    "description": "Get comment by id",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "commentId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment comment",
        "example": "COMMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/comments",
    "method": "listByAssessmentOrderId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "comments",
    "typeScriptTag": "comments",
    "description": "List comments",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "limit",
        "schema": "string",
        "description": "number of comments to return. max number of comments returned by single call is 100"
      },
      {
        "name": "offset",
        "schema": "string",
        "description": "number of comments to skip while processing result"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/comments",
    "method": "addNewCommentToAssessmentOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "comments",
    "typeScriptTag": "comments",
    "description": "Add new comment",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "messageToCandidate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results/{resultId}/attachments/{attachmentId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Get assessment attachment",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "resultId",
        "schema": "string",
        "required": true,
        "description": "unique result id",
        "example": "RESULTID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "unique id of an attachment",
        "example": "ATTACHMENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results/{resultId}/attachments/{attachmentId}",
    "method": "updateFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Update assessment attachment",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "resultId",
        "schema": "string",
        "required": true,
        "description": "unique result id",
        "example": "RESULTID"
      },
      {
        "name": "attachmentId",
        "schema": "string",
        "required": true,
        "description": "unique id of an attachment",
        "example": "ATTACHMENTID"
      },
      {
        "name": "attachment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results/{resultId}/attachments",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "List assessment results",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "resultId",
        "schema": "string",
        "required": true,
        "description": "unique result id",
        "example": "RESULTID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return. max value is 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "number of elements to skip while processing result"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results/{resultId}/attachments",
    "method": "submitNewAssessmentResultFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "attachments",
    "typeScriptTag": "attachments",
    "description": "Attach assessment results",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "resultId",
        "schema": "string",
        "required": true,
        "description": "unique result id",
        "example": "RESULTID"
      },
      {
        "name": "attachment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ATTACHMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results/{resultId}",
    "method": "findById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "results",
    "typeScriptTag": "results",
    "description": "Get assessment results by id",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "resultId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment result",
        "example": "RESULTID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results",
    "method": "listByAssessmentOrderId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "results",
    "typeScriptTag": "results",
    "description": "List assessment results",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return. max value is 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "number of elements to skip while processing result"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/results",
    "method": "submitNewAssessmentResult",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "results",
    "typeScriptTag": "results",
    "description": "Submit assessment results",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
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
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "passed",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "score",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "result",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "resultType",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/accept",
    "method": "acceptOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessments",
    "typeScriptTag": "assessments",
    "description": "Accept Assessment order",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "messageToCandidate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/complete",
    "method": "markAsCompleted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessments",
    "typeScriptTag": "assessments",
    "description": "Complete Assessment order",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "messageToCandidate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assessments",
    "typeScriptTag": "assessments",
    "description": "Get Assessment Order by id",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments",
    "method": "listByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assessments",
    "typeScriptTag": "assessments",
    "description": "Get Assessment orders by criteria",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return. max value is 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "number of elements to skip while processing result"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "assessment order status; available values: NEW, IN_PROGRESS, REJECTED, COMPLETED"
      },
      {
        "name": "fromDate",
        "schema": "string",
        "description": "createDate filter. search will return only orders created after given date. Date format need to comply with ISO8601 format: yyyy-MM-ddTHH:mm:ss.SSSZZ"
      },
      {
        "name": "toDate",
        "schema": "string",
        "description": "createDate filter. search will return only orders created before given date. Date format need to comply with ISO8601 format: yyyy-MM-ddTHH:mm:ss.SSSZZ"
      },
      {
        "name": "sortBy",
        "schema": "string",
        "description": "sorting criteria. Available options: createDate"
      },
      {
        "name": "sortDir",
        "schema": "string",
        "description": "sorting direction. Available options: asc, desc",
        "default": "asc"
      },
      {
        "name": "candidateUuid",
        "schema": "string",
        "description": "UUID of a candidate. Corresponds to candidate ID used in Customer API"
      },
      {
        "name": "jobUuid",
        "schema": "string",
        "description": "UUID of a job. Corresponds to job ID used in Customer API"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments",
    "method": "createNewOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessments",
    "typeScriptTag": "assessments",
    "description": "insert new Assessment order - end point for testing only - it will not create valid assessment order",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": ""
      },
      {
        "name": "requestor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "candidate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "description": ""
      },
      {
        "name": "offer",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/assessments/{assessmentOrderId}/reject",
    "method": "rejectOrder",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "assessments",
    "typeScriptTag": "assessments",
    "description": "Reject Assessment order",
    "parameters": [
      {
        "name": "assessmentOrderId",
        "schema": "string",
        "required": true,
        "description": "unique id of an assessment order",
        "example": "ASSESSMENTORDERID"
      },
      {
        "name": "message",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MESSAGE"
      },
      {
        "name": "messageToCandidate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "assessmentURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "author",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/configs",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configs",
    "typeScriptTag": "configs",
    "description": "Fetch list of vendor configs",
    "parameters": [],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/configs",
    "method": "addNewConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configs",
    "typeScriptTag": "configs",
    "description": "Add new config",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/configs/{configId}",
    "method": "getByConfigId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "configs",
    "typeScriptTag": "configs",
    "description": "Get config for vendor",
    "parameters": [
      {
        "name": "configId",
        "schema": "string",
        "required": true,
        "description": "unique id of a config entry",
        "example": "CONFIGID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/configs/{configId}",
    "method": "updateConfigById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "configs",
    "typeScriptTag": "configs",
    "description": "Update config",
    "parameters": [
      {
        "name": "configId",
        "schema": "string",
        "required": true,
        "description": "unique id of a config entry",
        "example": "CONFIGID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{offerId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Get offer by id",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "unique id of an offer",
        "example": "OFFERID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{offerId}",
    "method": "updateOffer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Update offer",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "unique id of an offer",
        "example": "OFFERID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastUpdateDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "catalogId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATALOGID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "terms",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "targetMarket",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "availability",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{offerId}/submit",
    "method": "submitForReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Submit offer",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "unique id of an offer",
        "example": "OFFERID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/offers/{offerId}/withdraw",
    "method": "withdrawal",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "offers",
    "typeScriptTag": "offers",
    "description": "Withdraw offer",
    "parameters": [
      {
        "name": "offerId",
        "schema": "string",
        "required": true,
        "description": "unique id of an offer",
        "example": "OFFERID"
      }
    ],
    "responses": [
      {
        "statusCode": "default",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyIdentifier}/postings",
    "method": "listByCompanyIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "postings",
    "typeScriptTag": "postings",
    "description": "Lists active postings published by given company",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "description": "Language of translation"
      },
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Identifier of a company",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "full-text search query based on a job title, location"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "number of elements to return. max value is 100"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "number of elements to skip while processing result"
      },
      {
        "name": "destination",
        "schema": "string",
        "required": false,
        "description": "Filter indicating which postings to return:\n* **PUBLIC**: response will include ONLY public postings\n* **INTERNAL**: response will include ONLY internal postings\n* **INTERNAL_OR_PUBLIC**: response will include internal postings or public postings, but not both for a single job. If a job has both types of postings, only internal postings will be returned. NOTE: when selected, all postings, internal and public, will be treated as internal. Among other things, this means that screening questions will not be displayed, and candidates will be marked with the EMPLOYEE label.\n"
      },
      {
        "name": "locationType",
        "schema": "string",
        "required": false,
        "description": "Filter indicating which postings to return:\n* **REMOTE**: response will include ONLY postings with remote location type\n* **ONSITE**: response will include ONLY postings with onsite location type\n* **ANY**: response will include ANY location type\n"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "country code filter (part of the location object)"
      },
      {
        "name": "region",
        "schema": "string",
        "required": false,
        "description": "region filter (part of the location object)"
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": "city filter (part of the location object)"
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": "department filter (department id)"
      },
      {
        "name": "language",
        "schema": "array",
        "required": false,
        "description": "Job ad language; accepts 2-letter ISO 639-1 language code; multiple codes can be provided, separated by comma (\",\")\nExceptions to the language code ISO format:\n* \"en-GB\" - \"English - English (https://developers.smartrecruiters.com/reference\"\n* \"fr-CA\" - \"French - français (https://developers.smartrecruiters.com/reference\"\n* \"pt-BR\" - \"Portugal - português (https://developers.smartrecruiters.com/reference\"\n* \"pt-PT\" - \"Portugal - português (https://developers.smartrecruiters.com/reference\"\n* \"zh-TW\" - \"Chinese (https://developers.smartrecruiters.com/reference - 中文 (香港)\"\n* \"zh-CN\" - \"Chinese (https://developers.smartrecruiters.com/reference - 中文 (简体)\"\n"
      },
      {
        "name": "releasedAfter",
        "schema": "string",
        "required": false,
        "description": "Released after filter (https://developers.smartrecruiters.com/reference\nFormat: yyyy-MM-ddTHH:mm:ss.SSSZZ\n"
      },
      {
        "name": "customField",
        "schema": "object",
        "required": false,
        "description": "Filters postings by custom fields. Multiple custom field values can be provided, separated by comma (\",\").\nFormat: custom_field.CUSTOM_FIELD_ID=CUSTOM_FIELD_VALUE1_ID,CUSTOM_FIELD_VALUE2_ID\n",
        "example": {
          "custom_field.52d95747e4b0ba7acb9217ea": "23aba1d4-4c81-48f7-9ae2-3ab84ee32a80"
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
    "url": "/v1/companies/{companyIdentifier}/postings/{postingId}",
    "method": "getByPostingIdOrUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "postings",
    "typeScriptTag": "postings",
    "description": "Get posting by posting id or uuid for given company",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "description": "Language of translation"
      },
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Identifier of a company",
        "example": "COMPANYIDENTIFIER"
      },
      {
        "name": "postingId",
        "schema": "string",
        "required": true,
        "description": "Posting identifier or uuid",
        "example": "POSTINGID"
      },
      {
        "name": "sourceTypeId",
        "schema": "string",
        "required": false,
        "description": "sourceTypeId can be retrieved using [get /configuration/sources](https://developers.smartrecruiters.com/reference/configurationsourcetypes-1) endpoint. Used together with **sourceId** and **sourceSubTypeId** to add source tracking parameter to **applyUrl**."
      },
      {
        "name": "sourceSubTypeId",
        "schema": "string",
        "required": false,
        "description": "sourceSubTypeId can be retrieved using [get /configuration/sources](https://developers.smartrecruiters.com/reference/configurationsourcetypes-1) endpoint. Used together with **sourceId** and **sourceTypeId** to add source tracking parameter to **applyUrl**."
      },
      {
        "name": "sourceId",
        "schema": "string",
        "required": false,
        "description": "sourceId can be retrieved using [get /configuration/sources/{sourceType}/values](https://developers.smartrecruiters.com/reference/configurationsourcevaluesall-1) endpoint. Used together with **sourceTypeId** and **sourceSubTypeId** to add source tracking parameter to **applyUrl**."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyIdentifier}/departments",
    "method": "listDepartmentsForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "postings",
    "typeScriptTag": "postings",
    "description": "List departments for given company",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "description": "Language of translation"
      },
      {
        "name": "companyIdentifier",
        "schema": "string",
        "required": true,
        "description": "Identifier of a company",
        "example": "COMPANYIDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/files/{reportFileId}/data",
    "method": "downloadReportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Download report file",
    "parameters": [
      {
        "name": "reportFileId",
        "schema": "string",
        "required": true,
        "description": "Report file identifier",
        "example": "REPORTFILEID"
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
    "url": "/files/{reportFileId}",
    "method": "getFileDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "files",
    "typeScriptTag": "files",
    "description": "Get report file",
    "parameters": [
      {
        "name": "reportFileId",
        "schema": "string",
        "required": true,
        "description": "Report file identifier",
        "example": "REPORTFILEID"
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
    "url": "/reports/{reportId}/files/recent/data",
    "method": "downloadRecentFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Download most recent report file",
    "parameters": [
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "description": "Report file ETag to be compared with the most recent report file"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report identifier",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "304",
        "description": "Returned when there's no newer report file available."
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
    "url": "/reports/{reportId}/files",
    "method": "getReportFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Get report files",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "Opaque page identifier to be returned."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of entities that should be returned per page.",
        "default": 10
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report identifier",
        "example": "REPORTID"
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
    "url": "/reports/{reportId}/files",
    "method": "generateAdhocReportFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Generate ad-hoc report",
    "parameters": [
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report identifier",
        "example": "REPORTID"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/reports/{reportId}/files/recent",
    "method": "getRecentFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Get most recent report file",
    "parameters": [
      {
        "name": "ifNoneMatch",
        "schema": "string",
        "description": "Report file ETag to be compared with the most recent report file"
      },
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report identifier",
        "example": "REPORTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "304",
        "description": "Returned when there's no newer report file available."
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
    "url": "/reports/{reportId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Get report",
    "parameters": [
      {
        "name": "reportId",
        "schema": "string",
        "required": true,
        "description": "Report identifier",
        "example": "REPORTID"
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
        "description": "Returned when there is no report with the given ID."
      }
    ]
  },
  {
    "url": "/reports",
    "method": "listByModificationDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reports",
    "typeScriptTag": "reports",
    "description": "Get reports",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "Opaque page identifier to be returned."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Number of entities that should be returned per page.",
        "default": 10
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
    "url": "/reviews",
    "method": "getAllForCandidateJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reviews",
    "typeScriptTag": "reviews",
    "description": "Retrieves all reviews for specified candidate and job",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "ID of the candidate",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "ID of the job",
        "example": "JOBID"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/reviews",
    "method": "createReview",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reviews",
    "typeScriptTag": "reviews",
    "description": "Creates a review",
    "parameters": [
      {
        "name": "reviewerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATEID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOBID"
      },
      {
        "name": "overallRating",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createdOn",
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/reviews/{reviewId}",
    "method": "deleteReviewById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "reviews",
    "typeScriptTag": "reviews",
    "description": "Deletes a review",
    "parameters": [
      {
        "name": "reviewerId",
        "schema": "string",
        "required": true,
        "description": "ID of the reviewer",
        "example": "REVIEWERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Review was deleted"
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
        "statusCode": "422",
        "description": "When input validation fails or with codes:\n* **NON_EXISTING_REVIEWER** when reviewer does not exist\n* **INACTIVE_OR_DELETED_REVIEWER** when reviewer is inactive or deleted\n* **REVIEWER_ID_DOES_NOT_MATCH** when reviewer id does not match reviewer id in review\n"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/reviews/{reviewId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "reviews",
    "typeScriptTag": "reviews",
    "description": "Retrieves a review",
    "parameters": [],
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
      }
    ]
  },
  {
    "url": "/reviews/{reviewId}",
    "method": "updateReviewById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "reviews",
    "typeScriptTag": "reviews",
    "description": "Updates a review",
    "parameters": [
      {
        "name": "overallRating",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reviewerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REVIEWERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Review was updated"
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
        "statusCode": "422",
        "description": "When input validation fails or with codes:\n* **INVALID_OVERALL** when invalid overall\n* **NON_EXISTING_REVIEWER** when reviewer does not exist\n* **INACTIVE_OR_DELETED_REVIEWER** when reviewer is inactive or deleted\n* **REVIEWER_ID_DOES_NOT_MATCH** when reviewer id does not match reviewer id in review\n"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/new-hires/{newHireId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "new-hires",
    "typeScriptTag": "newHires",
    "description": "Returns details for a single New Hire",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/onboarding-processes/{onboardingProcessId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "onboarding-processes",
    "typeScriptTag": "onboardingProcesses",
    "description": "Returns details of a single Onboarding Process",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/web-form-assignments/{webFormAssignmentId}/form-answers",
    "method": "getFormAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assignments-submissions",
    "typeScriptTag": "assignmentsSubmissions",
    "description": "Returns answers submitted for a single Web Form Assignment",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/web-form-assignments/{webFormAssignmentId}/fields-metadata",
    "method": "getFieldsMetadata",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assignments-submissions",
    "typeScriptTag": "assignmentsSubmissions",
    "description": "Returns metadata for the fields that belong to a single Web Form Assignment",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/fillable-pdf-form-assignments/{fillablePdfFormAssignmentId}/form-answers",
    "method": "getFormAnswers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assignments-submissions",
    "typeScriptTag": "assignmentsSubmissions",
    "description": "Returns answers submitted for a single Fillable PDF Form Assignment",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/onboarding-processes/{onboardingProcessId}/assignments",
    "method": "getByProcessId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assignments",
    "typeScriptTag": "assignments",
    "description": "Returns Assignments associated with a single Onboarding Process",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/activity-assignments/{activityAssignmentId}/attachments",
    "method": "listAttachments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assignments-submissions",
    "typeScriptTag": "assignmentsSubmissions",
    "description": "Returns list of Attachments submitted for a single Activity Assignment",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/activity-assignments/{activityAssignmentId}/attachments/{attachmentId}",
    "method": "getSingleAttachment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "assignments-submissions",
    "typeScriptTag": "assignmentsSubmissions",
    "description": "Returns single Attachment for specific Activity Assignment",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List users of your company",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "full-text search query based on firstName, lastName, email"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return. max value is 100",
        "default": 100
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "number of elements to skip while processing result",
        "default": 0
      },
      {
        "name": "updatedAfter",
        "schema": "string",
        "description": "ISO8601-formatted time boundaries for the user update time, Format: yyyy-MM-ddTHH:mm:ss.SSSZZ"
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
    "url": "/users",
    "method": "createNewUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Create a new user",
    "parameters": [],
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
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/me",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get details of my user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}",
    "method": "deactivateUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Deactivate a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully deactivated"
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
    "url": "/users/{id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Get details of a user with given id",
    "parameters": [],
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
    "url": "/users/{id}",
    "method": "updateUserById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update a user",
    "parameters": [],
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/reset-password",
    "method": "sendPasswordResetEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Send a password reset email to a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "The password reset email successfully sent"
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
    "url": "/users/{id}/activation-email",
    "method": "sendActivationEmail",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Send an activation email to a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Activation email successfully sent"
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/activation",
    "method": "deactivateUserById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Deactivate a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully deactivated"
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
    "url": "/users/{id}/activation",
    "method": "activateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Activate a user",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully activated"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{id}/avatar",
    "method": "updateAvatar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Update user avatar",
    "parameters": [
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
        "statusCode": "204",
        "description": "Avatar successfully updated"
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
    "url": "/system-roles",
    "method": "listSystemRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List system roles",
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
    "url": "/access-groups",
    "method": "listAccessGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "List access groups configured in your company",
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
    "url": "/access-groups/{accessGroupId}/users/{id}",
    "method": "removeFromAccessGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Remove user from access group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "User successfully removed from access group"
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
    "url": "/access-groups/{accessGroupId}/users",
    "method": "assignToAccessGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Assign users to access group",
    "parameters": [],
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
    "url": "/subscriptions",
    "method": "getWebhookSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Retrieve webhook subscriptions.",
    "parameters": [
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "identifier of the next page of subscriptions"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return",
        "default": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions",
    "method": "subscribeToWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Subscribe to a webhook.",
    "parameters": [
      {
        "name": "callbackUrl",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "https://server.com/send/callback/here"
      },
      {
        "name": "events",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "alertingEmailAddress",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "webhook.alerts@domain.com"
      },
      {
        "name": "callbackAuthentication",
        "schema": "object",
        "required": false,
        "description": "",
        "example": {
          "type": "header",
          "headerName": "X-TOKEN",
          "headerValue": "J?7HSgUKm7!MPm+EKm^P4BwW4ywRRRVu"
        }
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{id}",
    "method": "deleteWebhookSubscription",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Delete webhook subscription.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Webhook subscription deleted."
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
    "url": "/subscriptions/{id}",
    "method": "getSingleWebhook",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Retrieve single webhook subscription.",
    "parameters": [],
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
    "url": "/subscriptions/{id}/activation",
    "method": "activateWebhookSubscription",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Activate webhook subscription.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "204",
        "description": "Subscription activated."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "424",
        "description": ""
      }
    ]
  },
  {
    "url": "/subscriptions/{id}/secret-key",
    "method": "getSecretKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Retrieve subscription secret key",
    "parameters": [],
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
    "url": "/subscriptions/{id}/secret-key",
    "method": "generateSecretKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Generate secret key for a webhook subscription.",
    "parameters": [],
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
    "url": "/subscriptions/{id}/callbacks-log",
    "method": "getCallbackDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "subscriptions",
    "typeScriptTag": "subscriptions",
    "description": "Retrieve callback request details starting from newest.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "subscription identifier",
        "example": "ID"
      },
      {
        "name": "pageId",
        "schema": "string",
        "required": false,
        "description": "identifier of the next page of subscriptions"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "number of elements to return",
        "default": 10
      },
      {
        "name": "callbackStatus",
        "schema": "string",
        "description": "status of callback, whan absent all statuses will be returned"
      },
      {
        "name": "after",
        "schema": "string",
        "description": "Requests sent after timestamp. Min value is 30 days ago. Format ISO8601: yyyy-MM-ddTHH:mm:ss.SSSZZ\n"
      },
      {
        "name": "before",
        "schema": "string",
        "description": "Requests sent before timestamp. Min value is 30 days ago. Format ISO8601: yyyy-MM-ddTHH:mm:ss.SSSZZ\n"
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
      apiTitle="Webhooks"
      apiBaseUrl="https://api.smartrecruiters.com/webhooks-api/v201907"
      apiVersion="201911.1"
      endpoints={165}
      sdkMethods={318}
      schemas={373}
      parameters={528}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/smartrecruiters/openapi.yaml"
      developerDocumentation="developers.smartrecruiters.com/reference"
    />
  );
}
  