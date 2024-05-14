import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function RadixTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="radix-typescript-sdk"
      metaDescription={`Radix is a Belgian AI solution provider committed to driving progress through the transformative power of artificial intelligence.

We believe that AI should be viewed as a co-pilot for people, helping them to do more and ultimately allowing us to be more human.

We provide expert guidance and support on every step of the journey towards a tailored portfolio of AI solutions.

As a leading AI consultancy with a presence in Belgium, the Netherlands, Germany, the Nordics, the US, and Italy, we pride ourselves on our rapid growth, exceptional team of over 50 experts, and the ability to collaborate with some of the world's most influential organizations.

Our client portfolio includes GSK, Atlas Copco, Yara International, Brussels Airport Company, Port-of-Antwerp Bruges, United Nations, Carrefour, and more.`}
      company="Radix"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/logo.png"
      companyKebabCase="radix"
      clientNameCamelCase="radix"
      homepage="radix.ai"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai"]}
      methods={[
  {
    "url": "/auth",
    "method": "accessTokenPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Authenticate with the Talent API.",
    "parameters": [
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
      },
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "tapi/ALL"
      },
      {
        "name": "type",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend/job/{job_id}/profiles",
    "method": "jobProfilesPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend profiles for a given job.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      },
      {
        "name": "xResponseTarget",
        "schema": "string",
        "required": false,
        "description": "An identifier for the usage of the response matches. In this way, the different use cases can be analyzed separately. For example, if TalentAPI is called within a web application, then, the URL of the page on which the matches will be displayed, can be used as the value of X-Response-Target. Thus, the API calls can be separated according to the target URL."
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend/profile/{profile_id}/jobs",
    "method": "jobsForProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend jobs for a given profile.",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      },
      {
        "name": "xResponseTarget",
        "schema": "string",
        "required": false,
        "description": "An identifier for the usage of the response matches. In this way, the different use cases can be analyzed separately. For example, if TalentAPI is called within a web application, then, the URL of the page on which the matches will be displayed, can be used as the value of X-Response-Target. Thus, the API calls can be separated according to the target URL."
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend-master/profile/{profile_id}/jobs",
    "method": "jobsForProfileMaster",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend jobs for a given profile (https://api.talentapi.com/.",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend-master/job/{job_id}/profiles",
    "method": "profilesForJobMasterPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend profiles for a given job (https://api.talentapi.com/.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend-master/job/{job_id}/jobs",
    "method": "jobMasterJobs",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend jobs for a given job (https://api.talentapi.com/.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend-master/profile/{profile_id}/profiles",
    "method": "profilesForProfileMaster",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend profiles for a given profile (https://api.talentapi.com/.",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend/job/{job_id}/jobs",
    "method": "jobForJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend job for a given job.",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      },
      {
        "name": "xResponseTarget",
        "schema": "string",
        "required": false,
        "description": "An identifier for the usage of the response matches. In this way, the different use cases can be analyzed separately. For example, if TalentAPI is called within a web application, then, the URL of the page on which the matches will be displayed, can be used as the value of X-Response-Target. Thus, the API calls can be separated according to the target URL."
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend/profile/{profile_id}/profiles",
    "method": "profilesForProfile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Recommend profiles for a given profile.",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      },
      {
        "name": "xResponseTarget",
        "schema": "string",
        "required": false,
        "description": "An identifier for the usage of the response matches. In this way, the different use cases can be analyzed separately. For example, if TalentAPI is called within a web application, then, the URL of the page on which the matches will be displayed, can be used as the value of X-Response-Target. Thus, the API calls can be separated according to the target URL."
      },
      {
        "name": "filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "max_distance",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "location_filters",
        "schema": "array",
        "description": ""
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 10
      },
      {
        "name": "interactions_to_filter",
        "schema": "array",
        "description": ""
      },
      {
        "name": "show_explanation",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "experimental",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "model_version_id",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommend/available-matchers",
    "method": "clientMatchersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recommend",
    "typeScriptTag": "recommend",
    "description": "Get the recommendation matchers for a given client.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/search/profiles",
    "method": "profilesPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Find profiles for the given query.",
    "parameters": [
      {
        "name": "search_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "search_query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "broaden_search",
        "schema": "undefined",
        "description": "",
        "default": true
      },
      {
        "name": "fields_to_return",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page_size",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pagination_offset",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/search/jobs",
    "method": "jobsForQueryPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Find jobs for the given query.",
    "parameters": [
      {
        "name": "search_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "search_query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "broaden_search",
        "schema": "undefined",
        "description": "",
        "default": true
      },
      {
        "name": "fields_to_return",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page_size",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pagination_offset",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/search/jobs/v2",
    "method": "jobsForQueryPostV2",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Find jobs for the given query (https://api.talentapi.com/.",
    "parameters": [
      {
        "name": "search_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "search_query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "broaden_search",
        "schema": "undefined",
        "description": "",
        "default": true
      },
      {
        "name": "fields_to_return",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page_size",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pagination_offset",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/search/titles",
    "method": "jobTitlesPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Find job titles for the given query.",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "language",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/search/jobs/semantic",
    "method": "semanticJobsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Find jobs for the given query (https://api.talentapi.com/.",
    "parameters": [
      {
        "name": "search_metadata",
        "schema": "object",
        "description": ""
      },
      {
        "name": "search_query",
        "schema": "object",
        "description": ""
      },
      {
        "name": "broaden_search",
        "schema": "undefined",
        "description": "",
        "default": true
      },
      {
        "name": "fields_to_return",
        "schema": "array",
        "description": ""
      },
      {
        "name": "facets",
        "schema": "array",
        "description": ""
      },
      {
        "name": "page_size",
        "schema": "integer",
        "description": "",
        "default": 20
      },
      {
        "name": "continuation_token",
        "schema": "string",
        "description": ""
      },
      {
        "name": "order_by",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pagination_offset",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/status",
    "method": "getGlobalData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Status",
    "typeScriptTag": "status",
    "description": "Get global status",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/skills/feedback",
    "method": "manageSkill",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Skills",
    "typeScriptTag": "skills",
    "description": "Add or remove a skill.",
    "parameters": [
      {
        "name": "entity_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITY_TYPE"
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "feedback_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FEEDBACK_TYPE"
      },
      {
        "name": "skill",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SKILL"
      },
      {
        "name": "score",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "jobRecommendations",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Add or Update",
    "typeScriptTag": "addOrUpdate",
    "description": "Add or update a job.",
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
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "client_data",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "addresses",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "geocoordinates",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "publisher_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "publisher_vatin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "publisher_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employer_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employer_vatin",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employer_description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "department",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "required_qualifications",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "skill_tags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "offer_and_benefits_str",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "application_instructions_str",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "compensation_currency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hourly_gross_compensation",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "degrees",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "education_levels",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "seniority_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "relationship_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "location_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "employment_term_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "capacity_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "workday_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "hours_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "job_start_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "job_end_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "last_updated_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "publication_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "expiration_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "may_be_recommended",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "may_receive_recommendations",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles",
    "method": "profileData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Add or Update",
    "typeScriptTag": "addOrUpdate",
    "description": "Add or update a profile.",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "external_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EXTERNAL_ID"
      },
      {
        "name": "client_data",
        "schema": "object",
        "required": false,
        "description": "",
        "default": {}
      },
      {
        "name": "addresses",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "geocoordinates",
        "schema": "array",
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
        "name": "picture_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "website_url",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "social_media_profile_urls",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthdate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "highest_educational_level",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "languages",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "certificates",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "skills",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "skill_tags",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "interests",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "desired_jobs",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "undesired_jobs",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "desired_job_seniority_levels",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "degrees",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "experiences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "relationship_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "location_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "employment_term_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "capacity_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "workday_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "hours_preferences",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      },
      {
        "name": "last_updated_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "publication_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "expiration_datetime",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "may_be_recommended",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "may_receive_recommendations",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "attachments",
        "schema": "array",
        "required": false,
        "description": "",
        "default": []
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/matches",
    "method": "matchIndicator",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Add or Update",
    "typeScriptTag": "addOrUpdate",
    "description": "Add a match indicator.",
    "parameters": [
      {
        "name": "profile_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      },
      {
        "name": "job_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "JOB_ID"
      },
      {
        "name": "match_actor",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MATCH_ACTOR"
      },
      {
        "name": "match_datetime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MATCH_DATETIME"
      },
      {
        "name": "match_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MATCH_TYPE"
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{job_id}",
    "method": "jobById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete",
    "typeScriptTag": "delete",
    "description": "Delete a job.",
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/jobs/{job_id}",
    "method": "specificJob",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fetch",
    "typeScriptTag": "fetch",
    "description": "Fetch a specific job.",
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/{profile_id}",
    "method": "profileById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Delete",
    "typeScriptTag": "delete",
    "description": "Delete a profile.",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/profiles/{profile_id}",
    "method": "specificProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fetch",
    "typeScriptTag": "fetch",
    "description": "Fetch a specific profile.",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PROFILE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/evaluate",
    "method": "profileJobCompatibility",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Evaluate",
    "typeScriptTag": "evaluate",
    "description": "Endpoint to evaluate the compatibility of a profile & a job ",
    "parameters": [
      {
        "name": "job",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "profile",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The recommendation response.\n\nVersioning: available after version `2020-05-01` included."
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Talent API · API Reference"
      apiBaseUrl="https://api.talentapi.com"
      apiVersion="2024-04-02"
      endpoints={23}
      sdkMethods={25}
      schemas={83}
      parameters={106}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/radix/openapi.yaml"
      developerDocumentation="api.talentapi.com/"
    />
  );
}
  