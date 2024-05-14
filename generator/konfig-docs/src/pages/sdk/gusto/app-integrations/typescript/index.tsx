import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function GustoAppIntegrationsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="gusto-app-integrations-typescript-sdk"
      metaDescription={`Launched in 2011 as ZenPayroll, Gusto serves more than 300,000 businesses nationwide. Each year we process tens of billions of dollars of payroll and provide employee benefits—like health insurance and 401(k) accounts—while helping companies create incredible work places.

Through one refreshingly easy, integrated platform, we automate and simplify your payroll, benefits, and HR, all while providing expert support. You and your employees will get the peace of mind you need to do your best work.`}
      company="Gusto"
      serviceName="App Integrations"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/logo.png"
      companyKebabCase="gusto"
      clientNameCamelCase="gustoAppIntegrations"
      homepage="gusto.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/favicon.png"
      // Missing contactUrl
      contactEmail="developer@gusto.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payroll","hr","benefits","human_resources","health_insurance","compliance"]}
      methods={[
  {
    "url": "/v1/token_info",
    "method": "accessTokenInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Introspection",
    "typeScriptTag": "introspection",
    "description": "Get info about the current access token",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/oauth/token",
    "method": "exchangeRefreshToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Introspection",
    "typeScriptTag": "introspection",
    "description": "Refresh access token",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "REFRESH_TOKEN"
      },
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "GRANT_TYPE"
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
    "url": "/v1/provision",
    "method": "createCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Create a company",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "user",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "company",
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
        "description": "Authorization information is missing or invalid."
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}",
    "method": "getCompanyInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/custom_fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Companies",
    "typeScriptTag": "companies",
    "description": "Get the custom fields of a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/locations",
    "method": "listCompanyLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get company locations",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/locations",
    "method": "createCompanyLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Create a company location",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "phone_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE_NUMBER"
      },
      {
        "name": "street_1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STREET_1"
      },
      {
        "name": "street_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CITY"
      },
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATE"
      },
      {
        "name": "zip",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ZIP"
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "USA"
      },
      {
        "name": "mailing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "filing_address",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of an address in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/locations/{location_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get a location",
    "parameters": [
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the location",
        "example": "LOCATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an address in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/locations/{location_id}",
    "method": "updateLocation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Update a location",
    "parameters": [
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the location",
        "example": "LOCATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an address in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/locations/{location_uuid}/minimum_wages",
    "method": "getMinimumWages",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Locations",
    "typeScriptTag": "locations",
    "description": "Get minimum wages for a location",
    "parameters": [
      {
        "name": "locationUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the location",
        "example": "LOCATION_UUID"
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_schedules",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get the pay schedules for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_schedules/{pay_schedule_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get a pay schedule",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payScheduleId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the pay schedule",
        "example": "PAY_SCHEDULE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/pay_periods",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get pay periods for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2020-01-31"
      },
      {
        "name": "payrollTypes",
        "schema": "string",
        "required": false,
        "description": "regular and/or transition. Multiple options are comma separated. The default is regular pay periods if nothing is passed in."
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_periods/unprocessed_termination_pay_periods",
    "method": "listUnprocessedTerminationPayPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get termination pay periods for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/pay_schedules/assignments",
    "method": "getAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Pay Schedules",
    "typeScriptTag": "paySchedules",
    "description": "Get pay schedule assignments for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a pay schedule assignment."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/employees",
    "method": "getCompanyEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get employees of a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "terminated",
        "schema": "boolean",
        "description": "Filters employees by the provided boolean"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute(https://docs.gusto.com/app-integrations/docs/introduction in each employee response, multiple options are comma separated. Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation\n- custom_fields: Include employees' custom fields"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/employees",
    "method": "createEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create an employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRST_NAME"
      },
      {
        "name": "middle_initial",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LAST_NAME"
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "self_onboarding",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of an employee in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_uuid}/departments",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get all departments of a company",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_uuid}/departments",
    "method": "createDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Create a department",
    "parameters": [
      {
        "name": "companyUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}",
    "method": "deleteDepartment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Delete a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}",
    "method": "getByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Get a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/departments/{department_uuid}",
    "method": "updateDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Update a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
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
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}/add",
    "method": "addPeopleToDepartment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Add people to a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contractors",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/departments/{department_uuid}/remove",
    "method": "removeEmployees",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Remove people from a department",
    "parameters": [
      {
        "name": "departmentUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the department",
        "example": "DEPARTMENT_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employees",
        "schema": "array",
        "description": ""
      },
      {
        "name": "contractors",
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
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}",
    "method": "deleteOnboardingEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Delete an onboarding employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute(https://docs.gusto.com/app-integrations/docs/introduction in each employee response, multiple options are comma separated. Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation\n- custom_fields: Include employees' custom fields"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}",
    "method": "updateEmployee",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "first_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "middle_initial",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "last_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "date_of_birth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/terminations",
    "method": "deleteTermination",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Delete an employee termination",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/terminations",
    "method": "listTerminationsForEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Get terminations for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/terminations",
    "method": "createTermination",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Create an employee termination",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVE_DATE"
      },
      {
        "name": "run_termination_payroll",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a termination in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/terminations/{employee_id}",
    "method": "updateTermination",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Update an employee termination",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a termination in Gusto."
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "deleteRehire",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Delete an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "getRehireInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Get an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "createRehire",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Create an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EFFECTIVE_DATE"
      },
      {
        "name": "file_new_hire_report",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "work_location_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORK_LOCATION_UUID"
      },
      {
        "name": "employment_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_percent_shareholder",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/rehire",
    "method": "updateRehire",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Update an employee rehire",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/employment_history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Employments",
    "typeScriptTag": "employeeEmployments",
    "description": "Get employment history for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/home_addresses",
    "method": "getHomeAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee's home addresses",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/home_addresses",
    "method": "createHomeAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Create an employee's home address",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "street_1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "street_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "courtesy_withholding",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/home_addresses/{home_address_uuid}",
    "method": "deleteEmployeeHomeAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Delete an employee's home address",
    "parameters": [
      {
        "name": "homeAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the home address",
        "example": "HOME_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/home_addresses/{home_address_uuid}",
    "method": "getHomeAddress",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee's home address",
    "parameters": [
      {
        "name": "homeAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the home address",
        "example": "HOME_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/home_addresses/{home_address_uuid}",
    "method": "updateHomeAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Update an employee's home address",
    "parameters": [
      {
        "name": "homeAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the home address",
        "example": "HOME_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "street_1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "street_2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "courtesy_withholding",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/work_addresses",
    "method": "getWorkAddresses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee's work addresses",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/work_addresses",
    "method": "createWorkAddress",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Create an employee work address",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "location_uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effective_date",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/work_addresses/{work_address_uuid}",
    "method": "deleteEmployeeWorkAddress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Delete an employee's work address",
    "parameters": [
      {
        "name": "workAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the work address",
        "example": "WORK_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/work_addresses/{work_address_uuid}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Get an employee work address",
    "parameters": [
      {
        "name": "workAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the work address",
        "example": "WORK_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/work_addresses/{work_address_uuid}",
    "method": "updateWorkAddress",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Addresses",
    "typeScriptTag": "employeeAddresses",
    "description": "Update an employee work address",
    "parameters": [
      {
        "name": "workAddressUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the work address",
        "example": "WORK_ADDRESS_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_uuid",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effective_date",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/custom_fields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get an employee's custom fields",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/jobs",
    "method": "getEmployeeJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get jobs for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/jobs",
    "method": "createJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Create a job",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TITLE"
      },
      {
        "name": "hire_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HIRE_DATE"
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_covered",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_class_code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a job in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_uuid}/time_off_activities",
    "method": "getTimeOffActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get employee time off activities",
    "parameters": [
      {
        "name": "employeeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_UUID"
      },
      {
        "name": "timeOffType",
        "schema": "string",
        "required": true,
        "description": "The time off type name you want to query data for. ex: 'sick' or 'vacation'",
        "example": "TIME_OFF_TYPE"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Representation of a Time Off Activity"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}",
    "method": "deleteSpecificJob",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Delete an individual job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Available options:\n- all_compensations: Include all effective dated compensations for the job instead of only the current compensation"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a job in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}",
    "method": "updateJob",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Update a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "hire_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "two_percent_shareholder",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_covered",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "state_wc_class_code",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a job in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/jobs/{job_id}/compensations",
    "method": "getCompensationsByJobId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get compensations for a job",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Available options:\n- all_compensations: Include all effective dated compensations for each job instead of only the current compensation"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/jobs/{job_id}/compensations",
    "method": "createCompensation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Create a compensation",
    "parameters": [
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the job",
        "example": "JOB_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_unit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYMENT_UNIT"
      },
      {
        "name": "effective_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "flsa_status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FLSA_STATUS"
      },
      {
        "name": "adjust_for_minimum_wage",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum_wages",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of compensation in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/compensations/{compensation_id}",
    "method": "deleteCompensation",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Delete a compensation",
    "parameters": [
      {
        "name": "compensationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the compensation",
        "example": "COMPENSATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/compensations/{compensation_id}",
    "method": "getCompensationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Get a compensation",
    "parameters": [
      {
        "name": "compensationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the compensation",
        "example": "COMPENSATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of compensation in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/compensations/{compensation_id}",
    "method": "updateCompensation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Jobs and Compensations",
    "typeScriptTag": "jobsAndCompensations",
    "description": "Update a compensation",
    "parameters": [
      {
        "name": "compensationId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the compensation",
        "example": "COMPENSATION_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "rate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payment_unit",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "flsa_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "adjust_for_minimum_wage",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "minimum_wages",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of compensation in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/earning_types",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Get all earning types for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/earning_types",
    "method": "createCustomEarningType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Create a custom earning type",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/earning_types/{earning_type_uuid}",
    "method": "deactivate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Deactivate an earning type",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "earningTypeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the earning type",
        "example": "EARNING_TYPE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/earning_types/{earning_type_uuid}",
    "method": "updateTypeById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Earning Types",
    "typeScriptTag": "earningTypes",
    "description": "Update an earning type",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "earningTypeUuid",
        "schema": "string",
        "required": true,
        "description": "The UUID of the earning type",
        "example": "EARNING_TYPE_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/contractors",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Get contractors of a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/contractors",
    "method": "createIndividualOrBusiness",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Create a contractor",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a contractor (individual or business) in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_id}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Get a contractor",
    "parameters": [
      {
        "name": "contractorId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a contractor (individual or business) in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/contractors/{contractor_id}",
    "method": "updateContractor",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contractors",
    "typeScriptTag": "contractors",
    "description": "Update a contractor",
    "parameters": [
      {
        "name": "contractorId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor",
        "example": "CONTRACTOR_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a contractor (individual or business) in Gusto."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions",
    "method": "listSubscriptions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List webhook subscriptions",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/webhook_subscriptions",
    "method": "createSubscription",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Create a webhook subscription",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URL"
      },
      {
        "name": "subscription_types",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
    "method": "deleteSubscriptionByUuid",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete a webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The resource was deleted successfully."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
    "method": "getSubscriptionByUuid",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get a webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}",
    "method": "updateSubscriptionByUuid",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Update a webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "subscription_types",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}/verify",
    "method": "verifySubscriptionToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Verify the webhook subscription",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "verification_token",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERIFICATION_TOKEN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of webhook subscription."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/webhook_subscriptions/{webhook_subscription_uuid}/request_verification_token",
    "method": "requestVerificationToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Request the webhook subscription verification_token",
    "parameters": [
      {
        "name": "webhookSubscriptionUuid",
        "schema": "string",
        "required": true,
        "description": "The webhook subscription UUID.",
        "example": "WEBHOOK_SUBSCRIPTION_UUID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "No Content. The `verification_token` is POSTed to the Subscription URL."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payrolls",
    "method": "getAllForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get all payrolls for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "processingStatuses",
        "schema": "string",
        "description": "Whether to include processed and/or unprocessed payrolls in the response, defaults to processed, for multiple attributes comma separate the values, i.e. `?processing_statuses=processed,unprocessed`"
      },
      {
        "name": "payrollTypes",
        "schema": "string",
        "description": "Whether to include regular and/or off_cycle payrolls in the response, defaults to regular, for multiple attributes comma separate the values, i.e. `?payroll_types=regular,off_cycle`"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute in the response. In v2023-04-01 totals are no longer included by default. For multiple attributes comma separate the values, i.e. `?include=totals,payroll_status_meta`"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Return payrolls whose pay period is after the start date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "Return payrolls whose pay period is before the end date"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}",
    "method": "getSinglePayroll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Get a single payroll",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "include",
        "schema": "string",
        "description": "Include the requested attribute in the response, for multiple attributes comma separate the values, i.e. `?include=benefits,deductions,taxes`"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Update a payroll by ID",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "employee_compensations",
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
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/payrolls/{payroll_id}/prepare",
    "method": "prepareForUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Payrolls",
    "typeScriptTag": "payrolls",
    "description": "Prepare a payroll for update",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/payrolls/{payroll_id}/employees/{employee_id}/calculate_accruing_time_off_hours",
    "method": "calculateAccruingTimeOffHours",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Off Policies",
    "typeScriptTag": "timeOffPolicies",
    "description": "Calculate accruing time off hours",
    "parameters": [
      {
        "name": "payrollId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the payroll",
        "example": "PAYROLL_ID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "regular_hours_worked",
        "schema": "number",
        "description": ""
      },
      {
        "name": "overtime_hours_worked",
        "schema": "number",
        "description": ""
      },
      {
        "name": "double_overtime_hours_worked",
        "schema": "number",
        "description": ""
      },
      {
        "name": "pto_hours_used",
        "schema": "number",
        "description": ""
      },
      {
        "name": "sick_hours_used",
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
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/contractor_payments",
    "method": "listForCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Get contractor payments for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "The time period for which to retrieve contractor payments",
        "example": "2020-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "The time period for which to retrieve contractor payments",
        "example": "2020-12-31"
      },
      {
        "name": "contractorUuid",
        "schema": "string",
        "description": "The UUID of the contractor. When specified, will load all payments for that contractor."
      },
      {
        "name": "groupByDate",
        "schema": "boolean",
        "description": "Display contractor payments results group by check date if set to true."
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/contractor_payments/{contractor_payment_id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contractor Payments",
    "typeScriptTag": "contractorPayments",
    "description": "Get a single contractor payment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "contractorPaymentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the contractor payment",
        "example": "CONTRACTOR_PAYMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a single contractor payment."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{company_id}/company_benefits",
    "method": "getByCompanyId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get benefits for a company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "enrollmentCount",
        "schema": "boolean",
        "description": "Whether to return employee enrollment count"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/companies/{company_id}/company_benefits",
    "method": "createCompanyBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Create a company benefit",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company",
        "example": "COMPANY_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "benefit_type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "responsible_for_employer_taxes",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "responsible_for_employee_w2",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of a company benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/company_benefits/{company_benefit_id}",
    "method": "removeBenefit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Delete a company benefit",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No content"
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
    "url": "/v1/company_benefits/{company_benefit_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get a company benefit",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "withEmployeeBenefits",
        "schema": "boolean",
        "description": "Whether to return employee benefits associated with the benefit"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company_benefits/{company_benefit_id}",
    "method": "updateBenefit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Update a company benefit",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of a company benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/benefits",
    "method": "getAllSupportedBenefits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get all benefits supported by Gusto",
    "parameters": [
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/benefits/{benefit_id}",
    "method": "getSupportedBenefitById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get a supported benefit by ID",
    "parameters": [
      {
        "name": "benefitId",
        "schema": "string",
        "required": true,
        "description": "The benefit type in Gusto.",
        "example": "BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/company_benefits/{company_benefit_id}/summary",
    "method": "getSummaryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get company benefit summary by company benefit id.",
    "parameters": [
      {
        "name": "companyBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the company benefit",
        "example": "COMPANY_BENEFIT_ID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "The start date for which to retrieve company benefit summary",
        "example": "2022-01-01"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "The end date for which to retrieve company benefit summary",
        "example": "2022-12-31"
      },
      {
        "name": "detailed",
        "schema": "boolean",
        "description": "Display employee payroll item summary"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/benefits/{benefit_id}/requirements",
    "method": "getFieldsRequirementsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Benefits",
    "typeScriptTag": "companyBenefits",
    "description": "Get benefit fields requirements by ID",
    "parameters": [
      {
        "name": "benefitId",
        "schema": "string",
        "required": true,
        "description": "The benefit type in Gusto.",
        "example": "BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/employee_benefits",
    "method": "getAllForEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Get all benefits for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/employee_benefits",
    "method": "createBenefit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Create an employee benefit",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "company_benefit_uuid",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANY_BENEFIT_UUID"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "employee_deduction",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "employee_deduction_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contribution",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "elective",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "company_contribution_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit_option",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "catch_up",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "coverage_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "coverage_salary_multiplier",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "deduction_reduces_taxable_income",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company_contribution",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "contribute_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representation of an employee benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employee_benefits/{employee_benefit_id}",
    "method": "removeBenefit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Delete an employee benefit",
    "parameters": [
      {
        "name": "employeeBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee benefit.",
        "example": "EMPLOYEE_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employee_benefits/{employee_benefit_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Get an employee benefit",
    "parameters": [
      {
        "name": "employeeBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee benefit.",
        "example": "EMPLOYEE_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/employee_benefits/{employee_benefit_id}",
    "method": "updateBenefit",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Update an employee benefit",
    "parameters": [
      {
        "name": "employeeBenefitId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee benefit.",
        "example": "EMPLOYEE_BENEFIT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_deduction",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "employee_deduction_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contribution",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "elective",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "company_contribution_annual_maximum",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit_option",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "catch_up",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "coverage_amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deduction_reduces_taxable_income",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "unset"
      },
      {
        "name": "coverage_salary_multiplier",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "company_contribution",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "0.00"
      },
      {
        "name": "contribute_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representation of an employee benefit."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/ytd_benefit_amounts_from_different_company",
    "method": "createYtdBenefitAmountsFromDifferentCompany",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Benefits",
    "typeScriptTag": "employeeBenefits",
    "description": "Create year-to-date benefit amounts from a different company",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "benefit_type",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "tax_year",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "ytd_employee_deduction_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YTD_EMPLOYEE_DEDUCTION_AMOUNT",
        "default": "0.00"
      },
      {
        "name": "ytd_company_contribution_amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "YTD_COMPANY_CONTRIBUTION_AMOUNT",
        "default": "0.00"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "No Content"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/employees/{employee_id}/garnishments",
    "method": "getEmployeeGarnishments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Get garnishments for an employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page that is requested. When unspecified, will load all objects unless endpoint forces pagination."
      },
      {
        "name": "per",
        "schema": "number",
        "description": "Number of objects per page. For majority of endpoints will default to 25"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
    "url": "/v1/employees/{employee_id}/garnishments",
    "method": "createGarnishment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Create a garnishment",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the employee",
        "example": "EMPLOYEE_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "amount",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AMOUNT"
      },
      {
        "name": "court_ordered",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "times",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "annual_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "pay_period_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/garnishments/{garnishment_id}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Get a garnishment",
    "parameters": [
      {
        "name": "garnishmentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the garnishment",
        "example": "GARNISHMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments."
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/garnishments/{garnishment_id}",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Garnishments",
    "typeScriptTag": "garnishments",
    "description": "Update a garnishment",
    "parameters": [
      {
        "name": "garnishmentId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the garnishment",
        "example": "GARNISHMENT_ID"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "active",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": true
      },
      {
        "name": "amount",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "court_ordered",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "times",
        "schema": "integer",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "recurring",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "annual_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "pay_period_maximum",
        "schema": "string",
        "required": false,
        "description": "",
        "default": null
      },
      {
        "name": "deduct_as_percentage",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Garnishments, or employee deductions, are fixed amounts or percentages deducted from an employee’s pay. They can be deducted a specific number of times or on a recurring basis. Garnishments can also have maximum deductions on a yearly or per-pay-period bases. Common uses for garnishments are court-ordered payments for child support or back taxes. Some companies provide loans to their employees that are repaid via garnishments."
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": "Unprocessable Entity\n  \nThis may happen when the body of your request contains errors such as `invalid_attribute_value`, or the request fails due to an `invalid_operation`. See the [Errors Categories](https://docs.gusto.com/embedded-payroll/docs/error-categories) guide for more details.\n"
      }
    ]
  },
  {
    "url": "/v1/events",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Events",
    "typeScriptTag": "events",
    "description": "Get all events",
    "parameters": [
      {
        "name": "startingAfterUuid",
        "schema": "string",
        "required": false,
        "description": "A cursor for pagination. Returns all events occuring after the specified UUID (https://docs.gusto.com/app-integrations/docs/introduction"
      },
      {
        "name": "resourceUuid",
        "schema": "string",
        "required": false,
        "description": "The UUID of the company. If not specified, will return all events for all companies."
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "Limits the number of objects returned in a single response, between 1 and 100. The default is 25"
      },
      {
        "name": "eventType",
        "schema": "string",
        "required": false,
        "description": "A string containing the exact event name (e.g. `employee.created`), or use a wildcard match to filter for a group of events (e.g. `employee.*`, `*.created`, `notification.*.created` etc.)"
      },
      {
        "name": "xGustoApiVersion",
        "schema": "string",
        "required": false,
        "description": "Determines the date-based API version associated with your API call. If none is provided, your application's [minimum API version](https://docs.gusto.com/embedded-payroll/docs/api-versioning#minimum-api-version) is used."
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
      apiTitle="Gusto API"
      apiBaseUrl="https://api.gusto-demo.com"
      apiVersion="2024-04-01"
      endpoints={59}
      sdkMethods={100}
      schemas={198}
      parameters={416}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gusto/app-integrations/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gusto/app-integrations/openapi.yaml"
      developerDocumentation="docs.gusto.com/app-integrations/docs/introduction"
    />
  );
}
  