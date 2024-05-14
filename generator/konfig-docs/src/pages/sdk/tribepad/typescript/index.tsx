import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TribepadTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="tribepad-typescript-sdk"
      metaDescription={`Tribepad is the trusted tech ally to smart(er) recruiters everywhere, designed to help you fall back in love with recruiting. Our simple, flexible talent acquisition platform takes your recruitment headaches away - giving power to the people finders.

Combining ATS, CRM, Video Interviewing, and Onboarding plus a strong integration ecosystem and a switched-on, passionate team cheering you on, our tech is a springboard for faster, fairer, better hiring.

Trusted by organisations like the Tesco, NHS Professionals, KFC, Subway, Sodexo, G4S and Local Authorities across the UK, 25 million people in 16 languages use Tribepad.

Cast-iron security with G-Cloud 12 approved suppliers and data stored in ISO27001-compliant UK data centres.`}
      company="Tribepad"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/logo.png"
      companyKebabCase="tribepad"
      clientNameCamelCase="tribepad"
      homepage="tribepad.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["recruiting","hr","talent_management_analytics"]}
      methods={[
  {
    "url": "/v2/oauth/token",
    "method": "requestToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Request Token",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "description": "",
        "example": "{{grant_type}}"
      },
      {
        "name": "client_id",
        "schema": "string",
        "description": "",
        "example": "{{client_id}}"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "description": "",
        "example": "{{client_secret}}"
      },
      {
        "name": "scope",
        "schema": "string",
        "description": "",
        "example": "*"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/jobs/{job_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "Job Retrieve",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/jobs/search",
    "method": "searchJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Job",
    "typeScriptTag": "job",
    "description": "Job Search",
    "parameters": [
      {
        "name": "filter[keywords]",
        "schema": "string",
        "description": "STRING | Free text key words ",
        "example": "test"
      },
      {
        "name": "filter[jobType]",
        "schema": "integer",
        "description": "INTEGER | ID from Options > Job > Types API",
        "example": 5
      },
      {
        "name": "filter[category]",
        "schema": "integer",
        "description": "INTEGER | ID from Options > Job > Category API",
        "example": 105
      },
      {
        "name": "filter[salaryRangeFrom]",
        "schema": "integer",
        "description": "INTEGER | Monetary value in integer format",
        "example": 0
      },
      {
        "name": "filter[salaryRangeTo]",
        "schema": "integer",
        "description": "INTEGER | Monetary value in integer format",
        "example": 10000
      },
      {
        "name": "filter[location]",
        "schema": "string",
        "description": "STRING | Free text location search. You must include location_country when using location",
        "example": "Canol Dinas Caerdydd"
      },
      {
        "name": "filter[evergreen]",
        "schema": "integer",
        "description": "BOOLEAN | Only show jobs that do not expire",
        "example": 0
      },
      {
        "name": "filter[locationRange]",
        "schema": "integer",
        "description": "INTEGER | Radius in miles ",
        "example": 100
      },
      {
        "name": "filter[locationCountry]",
        "schema": "integer",
        "description": "INTEGER | A integer value from the country options API., this must be set when filtering by filter[location].  ",
        "example": 1
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "",
        "example": "created_date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application Retrieve",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}/files",
    "method": "listFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application Files",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}/files/cv",
    "method": "getCvFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application CV Files",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}/files/contract",
    "method": "getApplicationContract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application Contract Files",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}/files/profile",
    "method": "getProfileFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application Profile Files",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}/files/onboarding",
    "method": "getOnboardingFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application Onboarding Files",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications/{application_id}/files/integrations",
    "method": "getIntegrationFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Application Integration Files",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "APPLICATION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/applications",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Applications",
    "typeScriptTag": "applications",
    "description": "Applications",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/all",
    "method": "listValues",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "List options",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/piwik",
    "method": "getJobPiwik",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Job > Piwik",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/job/custom-fields",
    "method": "getJobCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Job > Custom Fields",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/job/category",
    "method": "getJobCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Job > Category",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/job/type",
    "method": "getJobTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Job > Types",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/business-unit",
    "method": "getBusinessUnit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Job > Business Unit",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/business-region",
    "method": "getBusinessRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Job > Business Region",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/mapping",
    "method": "getMapping",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Mapping",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/currency",
    "method": "getCurrencyOptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Currency",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/job/options/business-unit",
    "method": "getBusinessUnit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Language",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/withdraw-reason",
    "method": "getWithdrawReason",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Withdraw Reason",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/reject-reason",
    "method": "getRejectReason",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Reject Reason",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/anonymous-policies",
    "method": "getAnonymousPolicies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Anonymous Policies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/salary-frequency",
    "method": "getSalaryFrequency",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Salary Frequency",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/region",
    "method": "getRegion",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Region",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/country",
    "method": "getCountryList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Country",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/options/application/status",
    "method": "getApplicationStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Options",
    "typeScriptTag": "options",
    "description": "Options > Application Status",
    "parameters": [
      {
        "name": "filter[id]",
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
    "url": "/v2/api/v1/data-security/preference",
    "method": "dataSecurityPreferencesList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Register And Apply",
    "typeScriptTag": "registerAndApply",
    "description": "Data Security Preferences",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/api/v1/register-and-apply",
    "method": "candidateApplicationCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Register And Apply",
    "typeScriptTag": "registerAndApply",
    "description": "Register And Apply",
    "parameters": [
      {
        "name": "name_first",
        "schema": "string",
        "description": "",
        "example": "Candidate First Name"
      },
      {
        "name": "name_last",
        "schema": "string",
        "description": "",
        "example": "Last Name"
      },
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "candidateemail@yopmail.com"
      },
      {
        "name": "address_1",
        "schema": "string",
        "description": "",
        "example": "Address line 1"
      },
      {
        "name": "address_2",
        "schema": "string",
        "description": "",
        "example": "Address line 2"
      },
      {
        "name": "address_city",
        "schema": "string",
        "description": "",
        "example": "City"
      },
      {
        "name": "address_postcode",
        "schema": "integer",
        "description": "",
        "example": 12233
      },
      {
        "name": "address_country",
        "schema": "string",
        "description": "",
        "example": "address country"
      },
      {
        "name": "dob",
        "schema": "string",
        "description": "",
        "example": "2023-01-01"
      },
      {
        "name": "role_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "role_client_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "job_id",
        "schema": "integer",
        "description": "",
        "example": 130
      },
      {
        "name": "mobile",
        "schema": "integer",
        "description": "",
        "example": 9089878767
      },
      {
        "name": "telephone",
        "schema": "integer",
        "description": "",
        "example": 9182928393
      },
      {
        "name": "team_id",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "created_user_id",
        "schema": "integer",
        "description": "",
        "example": 15
      },
      {
        "name": "data_security_preferences[4]",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "data_security_preferences[6]",
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
  }
]
    }
      language="TypeScript"
      apiTitle="V2"
      apiBaseUrl="https://{example.com}"
      apiVersion="1.0.0"
      endpoints={48}
      sdkMethods={53}
      schemas={32}
      parameters={146}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tribepad/openapi.yaml"
      developerDocumentation="docs.tribepad.com/reference"
    />
  );
}
  