import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TheirStackTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="their-stack-typescript-sdk"
      metaDescription={`TheirStack is a sales tool designed to discover purchase intent signals through job postings. It helps SaaS companies, recruiting agencies and consulting firms find their next customer by analyzing 40 million job listings across 100 countries.

It features instant alerts on new openings, identifies companies based on technology use, and pinpoints those with specific software needs.

Primarily used by sales and marketing teams, it facilitates lead generation and enrichment, targeted marketing, and offers data-driven insights while significantly reducing research time.`}
      company="TheirStack"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/logo.ico"
      companyKebabCase="their-stack"
      clientNameCamelCase="theirStack"
      homepage="theirstack.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["sales","lead_generation"]}
      methods={[
  {
    "url": "/v0/company_lists",
    "method": "getAllLists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Get Lists",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/company_lists",
    "method": "createList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Create List",
    "parameters": [
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
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/company_lists/{list_id}",
    "method": "removeList",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Delete List",
    "parameters": [
      {
        "name": "listId",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/company_lists/{list_id}",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Get List",
    "parameters": [
      {
        "name": "listId",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/company_lists/{list_id}",
    "method": "renameList",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Rename List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "new_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NEW_NAME"
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
    "url": "/v0/company_lists/{list_id}/companies",
    "method": "getListCompanies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Get List Companies",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Order by field",
        "default": "added_at_last_time"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "required": false,
        "description": "Order direction",
        "default": "desc"
      },
      {
        "name": "companyNamePartial",
        "schema": "string",
        "required": false,
        "description": "Pass a partial company name to filter the list of companies"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
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
    "url": "/v0/company_lists/{list_id}/add_companies",
    "method": "addCompaniesToList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Add Companies To List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company_names",
        "schema": "array",
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
    "url": "/v0/company_lists/{list_id}/remove_companies",
    "method": "removeCompaniesFromList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Remove Companies From List",
    "parameters": [
      {
        "name": "listId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "company_names",
        "schema": "array",
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
    "url": "/v0/company_lists/add_companies",
    "method": "addCompaniesToMultipleLists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Lists",
    "typeScriptTag": "companyLists",
    "description": "Add Companies To Multiple Lists",
    "parameters": [
      {
        "name": "list_ids",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_names",
        "schema": "array",
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
    "url": "/v0/saved_searches",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Saved Searches",
    "typeScriptTag": "savedSearches",
    "description": "Get Saved Searches",
    "parameters": [
      {
        "name": "userIds",
        "schema": "array",
        "required": false,
        "description": "Get saved searches from users with these IDs. The IDs must be from people in the current users' team."
      },
      {
        "name": "types",
        "schema": "array",
        "required": false,
        "description": "Filter by type of search. For example, 'jobs' or 'tech_details'"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "Order by field",
        "default": "updated_at"
      },
      {
        "name": "orderDirection",
        "schema": "string",
        "required": false,
        "description": "Order direction",
        "default": "desc"
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
    "url": "/v0/saved_searches",
    "method": "createSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Saved Searches",
    "typeScriptTag": "savedSearches",
    "description": "Create Saved Search",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_alert_active",
        "schema": "boolean",
        "description": "",
        "default": false
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
    "url": "/v0/saved_searches",
    "method": "upsertSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Saved Searches",
    "typeScriptTag": "savedSearches",
    "description": "Upsert Saved Search",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_alert_active",
        "schema": "boolean",
        "description": "",
        "default": false
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
    "url": "/v0/saved_searches/{search_id}",
    "method": "deleteSearch",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Saved Searches",
    "typeScriptTag": "savedSearches",
    "description": "Delete Saved Search",
    "parameters": [
      {
        "name": "searchId",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/saved_searches/{search_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Saved Searches",
    "typeScriptTag": "savedSearches",
    "description": "Get Saved Search",
    "parameters": [
      {
        "name": "searchId",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v0/saved_searches/{search_id}",
    "method": "updateSearch",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Saved Searches",
    "typeScriptTag": "savedSearches",
    "description": "Update Saved Search",
    "parameters": [
      {
        "name": "searchId",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      },
      {
        "name": "body",
        "schema": "object",
        "description": "",
        "default": {}
      },
      {
        "name": "method",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "is_alert_active",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "frequency",
        "schema": "string",
        "description": ""
      },
      {
        "name": "emails_subscribed",
        "schema": "array",
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
    "url": "/v0/catalog/technologies",
    "method": "getTechnologies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Catalog",
    "typeScriptTag": "catalog",
    "description": "Get Technologies",
    "parameters": [
      {
        "name": "namePattern",
        "schema": "string",
        "required": false,
        "description": "Regex pattern of a technology name, case-insensitive"
      },
      {
        "name": "categoryPattern",
        "schema": "string",
        "required": false,
        "description": "Regex pattern of a technology category, case-insensitive. For example, `data|storage|queue` to find data tools."
      },
      {
        "name": "slug",
        "schema": "array",
        "required": false,
        "description": "Slug of one or many technologies"
      },
      {
        "name": "slugs",
        "schema": "array",
        "required": false,
        "description": "Slugs of one or many technologies"
      },
      {
        "name": "categorySlug",
        "schema": "string",
        "required": false,
        "description": "Slug of a technology category"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
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
    "url": "/v0/catalog/industries",
    "method": "getIndustries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Catalog",
    "typeScriptTag": "catalog",
    "description": "Get Industries",
    "parameters": [
      {
        "name": "industry",
        "schema": "string",
        "required": false,
        "description": "Name of an industry, case-insensitive. Will return industries that contain the given string either in their name, hierarchy or description"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
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
    "url": "/v0/catalog/jobs_companies_per_job_country_code",
    "method": "getJobsAndCompaniesPerJobCountryCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Catalog",
    "typeScriptTag": "catalog",
    "description": "Get Jobs And Companies Per Job Country Code",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Name of a country. Will return any countries that contain the given string"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
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
    "url": "/v0/catalog/companies_per_company_country_code",
    "method": "getCompaniesPerCountryCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Catalog",
    "typeScriptTag": "catalog",
    "description": "Get Companies Per Company Country Code",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Name of a country. Will return any countries that contain the given string"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
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
    "url": "/v0/catalog/technologies/categories",
    "method": "listTechnologyCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Catalog",
    "typeScriptTag": "catalog",
    "description": "Get Technology Categories",
    "parameters": [
      {
        "name": "categorySlug",
        "schema": "string",
        "required": false,
        "description": "Category slug"
      },
      {
        "name": "numTechnologiesPerCategory",
        "schema": "integer",
        "required": false,
        "description": "Number of technologies per category",
        "default": 5
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
    "url": "/v1/jobs/search",
    "method": "searchByCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs",
    "typeScriptTag": "jobs",
    "description": "Search Jobs",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Page number. Will only apply when not passed in the body"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results per page. Will only apply when not passed in the body."
      },
      {
        "name": "includeTotalResults",
        "schema": "boolean",
        "required": false,
        "description": "Whether to include the total number of results in the response. Will only apply when not passed in the body."
      },
      {
        "name": "groupBy",
        "schema": "array",
        "required": false,
        "description": "Group results by a given field and get the number of jobs per group. If you pass `company`, you'll get the number of jobs per company. If you pass `job_title`, you'll get the number of jobs per job title. If you pass `location`, you'll get the number of jobs per location. Will only apply when not passed in the body"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format of the response. One of `json` or `csv`. Defaults to `json`.",
        "default": "json"
      },
      {
        "name": "order_by",
        "schema": "array",
        "description": "",
        "default": [
          {
            "desc": true,
            "field": "date_posted"
          },
          {
            "desc": true,
            "field": "discovered_at"
          }
        ]
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "example": 25,
        "default": 25
      },
      {
        "name": "company_description_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_description_pattern_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_description_pattern_accent_insensitive",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "min_revenue_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_revenue_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_employee_count",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_employee_count",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_employee_count_or_null",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_employee_count_or_null",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_funding_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_funding_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "funding_stage_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_id_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_id_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_tags_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_type",
        "schema": "string",
        "description": "",
        "default": "all"
      },
      {
        "name": "company_investors_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_investors_partial_match_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_and",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "only_yc_companies",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "company_location_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_country_code_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_country_code_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_list_id_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_list_id_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_domain_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_domain_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_partial_match_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_partial_match_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_title_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_title_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_title_pattern_and",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_title_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_title_pattern_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_country_code_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_country_code_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "posted_at_max_age_days",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "posted_at_gte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "posted_at_lte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "discovered_at_max_age_days",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "discovered_at_min_age_days",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "discovered_at_gte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "discovered_at_lte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "job_description_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_description_pattern_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_description_pattern_is_case_insensitive",
        "schema": "boolean",
        "description": "",
        "default": true
      },
      {
        "name": "remote",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "only_jobs_with_reports_to",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "only_jobs_with_hiring_managers",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "job_ids",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "min_salary_usd",
        "schema": "number",
        "description": "",
        "example": null
      },
      {
        "name": "max_salary_usd",
        "schema": "number",
        "description": "",
        "example": null
      },
      {
        "name": "job_technology_slug_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_technology_slug_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_technology_slug_and",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_location_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "job_location_pattern_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "scraper_name_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "include_total_results",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "group_by",
        "schema": "array",
        "description": "",
        "example": []
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
    "url": "/v1/companies/search",
    "method": "searchFilteredData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Search Companies",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format of the response. One of `json` or `csv`. Defaults to `json`.",
        "default": "json"
      },
      {
        "name": "order_by",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "example": 25,
        "default": 25
      },
      {
        "name": "company_description_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_description_pattern_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_description_pattern_accent_insensitive",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "min_revenue_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_revenue_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_employee_count",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_employee_count",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_employee_count_or_null",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_employee_count_or_null",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_funding_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_funding_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "funding_stage_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_id_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_id_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_tags_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_type",
        "schema": "string",
        "description": "",
        "default": "all"
      },
      {
        "name": "company_investors_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_investors_partial_match_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_and",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "only_yc_companies",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "company_location_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_country_code_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_country_code_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_list_id_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_list_id_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_domain_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_domain_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_partial_match_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_partial_match_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "include_total_results",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "job_filters",
        "schema": "object",
        "description": ""
      },
      {
        "name": "tech_filters",
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
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/tech_details",
    "method": "listTechDetails",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Tech Details",
    "parameters": [
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format of the response. One of `json` or `csv`. Defaults to `json`.",
        "default": "json"
      },
      {
        "name": "order_by",
        "schema": "array",
        "description": "",
        "default": [
          {
            "desc": true,
            "field": "theirstack_score"
          }
        ]
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "",
        "example": 0,
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "",
        "example": 25,
        "default": 25
      },
      {
        "name": "include_total_results",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "company_description_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_description_pattern_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_description_pattern_accent_insensitive",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "min_revenue_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_revenue_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_employee_count",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_employee_count",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_employee_count_or_null",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_employee_count_or_null",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_funding_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_funding_usd",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "funding_stage_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_id_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "industry_id_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_tags_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_type",
        "schema": "string",
        "description": "",
        "default": "all"
      },
      {
        "name": "company_investors_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_investors_partial_match_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_and",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_technology_slug_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "only_yc_companies",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "company_location_pattern_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_country_code_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_country_code_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_list_id_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_list_id_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_domain_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_domain_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_partial_match_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "company_name_partial_match_not",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "technology_slug_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "technology_category_slug_or",
        "schema": "array",
        "description": "",
        "default": []
      },
      {
        "name": "max_rank",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_jobs",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "max_jobs",
        "schema": "integer",
        "description": "",
        "example": null
      },
      {
        "name": "min_relative_occurrence",
        "schema": "number",
        "description": "",
        "example": null
      },
      {
        "name": "first_date_found_gte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "first_date_found_lte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "last_date_found_gte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "last_date_found_lte",
        "schema": "string",
        "description": "",
        "example": null
      },
      {
        "name": "confidence_or",
        "schema": "array",
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
    "url": "/v0/companies/search_by_url",
    "method": "searchByDomain",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Search Companies By Domain",
    "parameters": [
      {
        "name": "domains",
        "schema": "string",
        "required": false,
        "description": "Comma-sep rated list of domains. Deprecated - use the `companies_urls` parameter instead. You can pass domains, emails or full URLs to it directly."
      },
      {
        "name": "emails",
        "schema": "string",
        "required": false,
        "description": "Comma-sep rated list of emails. Deprecated - use the `companies_urls` parameter instead. You can pass domains, emails or full URLs to it directly."
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format of the response. One of `json` or `csv`. Defaults to `json`.",
        "default": "json"
      },
      {
        "name": "companiesUrls",
        "schema": "array",
        "required": false,
        "description": "Array or comma-separated string containing domains, emails or full URLs.",
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
    "url": "/v0/decision_makers/search",
    "method": "findByCriteria",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Decision makers",
    "typeScriptTag": "decisionMakers",
    "description": "Search Decision Makers",
    "parameters": [
      {
        "name": "technologyPattern",
        "schema": "string",
        "required": false,
        "description": "Regex pattern to match any of the technologies we track, listed on the /technologies endpoint"
      },
      {
        "name": "jobTitlePattern",
        "schema": "string",
        "required": false,
        "description": "Regex pattern to match job titles"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "Country name of the company to filter by. Case sensitive"
      },
      {
        "name": "minEmployeeCount",
        "schema": "integer",
        "required": false,
        "description": "Minimum number of employees"
      },
      {
        "name": "maxEmployeeCount",
        "schema": "integer",
        "required": false,
        "description": "Minimum number of employees"
      },
      {
        "name": "descriptionPattern",
        "schema": "string",
        "required": false,
        "description": "Regex pattern to search in job descriptions. Case insensitive"
      },
      {
        "name": "companiesPattern",
        "schema": "string",
        "required": false,
        "description": "Regex pattern to match company names"
      },
      {
        "name": "fromage",
        "schema": "integer",
        "required": false,
        "description": "Number of days to look back for jobs"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "Format of the response. One of `json` or `csv`. Defaults to `json`.",
        "default": "json"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": 25
      },
      {
        "name": "newCompanies",
        "schema": "string",
        "required": false,
        "description": "If `true`, only companies that haven't been fetched by the user will be returned. Credits will be consumed.\n\nIf `false`, only companies that have been fetched by the user will be returned. In this case, your call won't consume credits.\n\nIf `all`, both new and fetched companies may be returned.\n\nDefaults to `all`",
        "default": "all"
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
  }
]
    }
      language="TypeScript"
      apiTitle="TheirStack API Reference"
      apiBaseUrl="https://api.theirstack.com/"
      apiVersion="1.0.0"
      endpoints={18}
      sdkMethods={25}
      schemas={54}
      parameters={248}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/theirstack/openapi.yaml"
      developerDocumentation="api.theirstack.com/"
    />
  );
}
  