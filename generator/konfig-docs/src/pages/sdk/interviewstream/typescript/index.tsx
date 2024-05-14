import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function InterviewstreamTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="interviewstream-typescript-sdk"
      metaDescription={`interviewstream exists to simplify your hiring process through our video interviewing and scheduling platform. We help you cut time, improve candidate experience, and automate scheduling so you can focus on what matters most–your candidates.

interviewstream is dedicated to the success of more than 900 clients from emerging businesses, midsize companies, large enterprises, colleges, and universities.`}
      company="interviewstream"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/logo.png"
      companyKebabCase="interviewstream"
      clientNameCamelCase="interviewstream"
      homepage="interviewstream.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["video","hr_management","scheduling","recruitment_software"]}
      methods={[
  {
    "url": "/incoming-assessment",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Incoming Assessment",
    "typeScriptTag": "incomingAssessment",
    "description": "",
    "parameters": [
      {
        "name": "ats",
        "schema": "string",
        "required": true,
        "description": "ATS integration name",
        "example": "ATS"
      },
      {
        "name": "companyId",
        "schema": "integer",
        "required": true,
        "description": "ID of the company",
        "example": 0
      },
      {
        "name": "assessmentOrderId",
        "schema": "integer",
        "required": true,
        "description": "ID of the Assessment Order",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Perform an Incoming Assessment from the ATS SuccessFactors to IVS application. This General API changes the status of an interview."
      },
      {
        "statusCode": "400",
        "description": "Bad request: ATS, companyId, and assessmentOrderId are required. If ATS is present, greenhouse is not supported yet"
      },
      {
        "statusCode": "404",
        "description": "Not found: ATS was not found"
      }
    ]
  },
  {
    "url": "/candidates",
    "method": "listAccessible",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Returns a list of candidates that the API token has access to.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of candidates that the API token has access to."
      },
      {
        "statusCode": "401",
        "description": "Unauthenticated"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/candidates/{iCandidate}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Candidates",
    "typeScriptTag": "candidates",
    "description": "Gets a candidate by ID.",
    "parameters": [
      {
        "name": "iCandidate",
        "schema": "integer",
        "required": true,
        "description": "Candidate ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns detailed information about the specified Candidate."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/requisitions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Gets a list of Requisitions.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of requisitions that the API token has access to."
      },
      {
        "statusCode": "401",
        "description": "Unauthenticated"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/requisitions/{iRequisition}",
    "method": "getRequisitionCandidate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Gets a Requisition Candidate by ID.",
    "parameters": [
      {
        "name": "iRequisition",
        "schema": "integer",
        "required": true,
        "description": "Requisition ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns detailed information about the specified Requisition."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/requisitions/{iRequisition}/candidates",
    "method": "listCandidates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Requisitions",
    "typeScriptTag": "requisitions",
    "description": "Returns a list of RequisitionCandidates belonging to the specified Requisition.",
    "parameters": [
      {
        "name": "iRequisition",
        "schema": "integer",
        "required": true,
        "description": "Requisition ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of RequisitionCandidates belonging to the specified Requisition."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/requisitionCandidates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequisitionCandidate",
    "typeScriptTag": "requisitionCandidate",
    "description": "Returns a list of requisition candidates that the API token has access to.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of requisitions-candidates that the API token has access to."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/requisitionCandidates/{iRequisitionCandidates}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequisitionCandidate",
    "typeScriptTag": "requisitionCandidate",
    "description": "Returns detailed information about the specified requisition candidates.",
    "parameters": [
      {
        "name": "iRequisitionCandidates",
        "schema": "integer",
        "required": true,
        "description": "Requisition Candidate ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of requisitions-candidates that the API token has access to."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/requisitionCandidates/{iRequisitionCandidates}/shareLinks",
    "method": "getShareLinks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequisitionCandidate",
    "typeScriptTag": "requisitionCandidate",
    "description": "Returns a list of RequisitionCandidateShareLinks belonging to this RequisitionCandidate.",
    "parameters": [
      {
        "name": "iRequisitionCandidates",
        "schema": "integer",
        "required": true,
        "description": "Requisition Candidate ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of requisitions-candidates that the API token has access to."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/requisitionCandidates/{iRequisitionCandidates}/requests",
    "method": "getRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RequisitionCandidate",
    "typeScriptTag": "requisitionCandidate",
    "description": "Returns a list of RequisitionCandidateRequests belonging to this RequisitionCandidate.",
    "parameters": [
      {
        "name": "iRequisitionCandidates",
        "schema": "integer",
        "required": true,
        "description": "Requisition Candidate ID",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Returns a list of requisitions-candidates that the API token has access to."
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="General API"
      apiBaseUrl="https://api.interviewstream.com/"
      apiVersion="0.3.0"
      endpoints={10}
      sdkMethods={10}
      schemas={0}
      parameters={9}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/interviewstream/openapi.yaml"
      developerDocumentation="api.interviewstream.com/"
    />
  );
}
  