import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PaychexTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="paychex-typescript-sdk"
      metaDescription={`As the future of work continues to evolve, Paychex leads the way by making complex HR, payroll, and benefits brilliantly simple. Our unique combination of digital HR technology and advisory solutions meets the changing needs of employers and their employees. You can see the results in our growth as an HR leader and the positive returns we deliver to our shareholders.

Paychex, Inc. (Nasdaq:PAYX) is a leading provider of integrated human capital management solutions for payroll, benefits, human resources, and insurance services.

-Industry expertise since 1971
~740,000 business clients in the U.S. and Europe
-Pays 1 in 12 U.S. private sector employees
-A top HR outsourcer — serving 2.2M worksite employees through our HR outsourcing solutions

Information regarding licensing can be found on the NMLS consumer access website, www.nmlsconsumeraccess.org. The Commissioner of Financial Regulation for the State of Maryland will accept all questions or complaints from Maryland residents regarding Paychex, Inc. (1029977) at:

500 North Calvert Street, Suite 402
Baltimore, Maryland 21202
888-784-0136`}
      company="Paychex"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/logo.png"
      companyKebabCase="paychex"
      clientNameCamelCase="paychex"
      homepage="paychex.com"
      lastUpdated={new Date("2024-03-27T01:34:05.971Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll","benefits"]}
      methods={[
  {
    "url": "/auth/oauth/v2/token",
    "method": "createBearerToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Authentication",
    "typeScriptTag": "authentication",
    "description": "Create Bearer token",
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
        "description": "The Authentication Response"
      }
    ]
  },
  {
    "url": "/companies",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Companies",
    "parameters": [
      {
        "name": "displayid",
        "schema": "string",
        "required": false,
        "description": "The client account number used for identification purposes. (no dash or spaces allowed, only the last 8 characters  of the ID)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of a company"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "A Company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of a company"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "409",
        "description": "default response"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/calculationbases",
    "method": "getCalculationBases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Calculation Bases",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of CalculationBase"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/checks",
    "method": "getCompanyChecksByPayPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Company Checks",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "payperiodid",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the pay period that the check will be within.",
        "example": "PAYPERIODID"
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "The zero based offset of the next page of data to be presented.",
        "default": 0
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "The maximum number of elements to be returned in a page transition.",
        "default": 0
      },
      {
        "name": "filterbyuserid",
        "schema": "boolean",
        "required": false,
        "description": "Filter by User Id."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Labor Assignments within a company."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/checks",
    "method": "addCompanyChecks",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Company Checks",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "workerId",
        "schema": "string",
        "description": "",
        "example": "004UWBZQJ7GEB9TVWFR9"
      },
      {
        "name": "paycheckId",
        "schema": "string",
        "description": "",
        "example": "1020026552555444"
      },
      {
        "name": "payPeriodId",
        "schema": "string",
        "description": "",
        "example": "1020026427391732"
      },
      {
        "name": "checkCorrelationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "blockAutoDistribution",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "earnings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deductions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "checkDate",
        "schema": "string",
        "description": "",
        "example": "2019-05-12T20:00:00Z"
      },
      {
        "name": "informational",
        "schema": "array",
        "description": ""
      },
      {
        "name": "taxes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The state representation of Labor Assignments within a company."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "413",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contacttypes",
    "method": "getContactTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Contact Types",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Fields",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfields",
    "method": "createCustomFieldAtCompanyLevel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Field",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "description": "",
        "example": "1040014203417589"
      },
      {
        "name": "customFieldName",
        "schema": "string",
        "description": "",
        "example": "Hobbies"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": "",
        "example": "1040014179116276"
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "checkStub",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "employeeEditable",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "DROPDOWN"
      },
      {
        "name": "booleanValue",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "textValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxTextLength",
        "schema": "number",
        "description": ""
      },
      {
        "name": "numericValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "dropdown",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfields/{customFieldId}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Field",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired custom field.",
        "example": "CUSTOMFIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfields/{customfieldid}",
    "method": "deleteCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Field",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "customfieldid",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired custom field.",
        "example": "CUSTOMFIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfields/{customfieldid}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Field",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "customfieldid",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired custom field.",
        "example": "CUSTOMFIELDID"
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "description": "",
        "example": "1040014203417589"
      },
      {
        "name": "customFieldName",
        "schema": "string",
        "description": "",
        "example": "Hobbies"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": "",
        "example": "1040014179116276"
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "checkStub",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "employeeEditable",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "DROPDOWN"
      },
      {
        "name": "booleanValue",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "dateValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "textValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "maxTextLength",
        "schema": "number",
        "description": ""
      },
      {
        "name": "numericValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "dropdown",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfieldscategories",
    "method": "getCustomFieldCategories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Fields Categories",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfieldscategories",
    "method": "createCustomFieldCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Fields Category",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": "",
        "example": "970003868555304"
      },
      {
        "name": "categoryName",
        "schema": "string",
        "description": "",
        "example": "Social"
      },
      {
        "name": "links",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfieldscategories/{categoryId}",
    "method": "getCustomFieldsCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Fields Category",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired category.",
        "example": "CATEGORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfieldscategories/{categoryid}",
    "method": "deleteCustomFieldsCategory",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Fields Category",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "categoryid",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired category.",
        "example": "CATEGORYID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "successful operation"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/customfieldscategories/{categoryid}",
    "method": "updateCustomFieldsCategory",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Custom Fields Category",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "categoryid",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired custom field.",
        "example": "CATEGORYID"
      },
      {
        "name": "categoryId",
        "schema": "string",
        "description": "",
        "example": "970003868555304"
      },
      {
        "name": "categoryName",
        "schema": "string",
        "description": "",
        "example": "Social"
      },
      {
        "name": "links",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobs",
    "method": "getJobs",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Jobs",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all jobs as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Jobs within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobs",
    "method": "addJob",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Job",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "970001557916902"
      },
      {
        "name": "jobCorrelationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobName",
        "schema": "string",
        "description": "",
        "example": "My job A"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2018-12-20T00:00:00Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2025-12-20T00:00:00Z"
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobNumber",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The state representation of Jobs within a company."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobs/{jobId}",
    "method": "getJobInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Job",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The ID of the job.",
        "example": "JOBID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns job as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Jobs within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobs/{jobId}",
    "method": "updateJob",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Job",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "required": true,
        "description": "The ID of the job.",
        "example": "JOBID"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "970001557916902"
      },
      {
        "name": "jobCorrelationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "jobName",
        "schema": "string",
        "description": "",
        "example": "My job A"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2018-12-20T00:00:00Z"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "",
        "example": "2025-12-20T00:00:00Z"
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobNumber",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Jobs within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobsegments",
    "method": "getJobSegmentStructureSetup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Job Segments",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobtitles",
    "method": "listJobTitles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Job Titles",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of allowed worker job titles configured for the company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/jobtitles/{jobTitleId}",
    "method": "getJobTitle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Job Title",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "workerJobTitleId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worker job title.",
        "example": "WORKERJOBTITLEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of allowed worker job titles configured for the company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/laborassignments",
    "method": "listLaborAssignments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Labour Assignments",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all labour assignments as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Labor Assignments within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/laborassignments/{laborAssignmentId}",
    "method": "getLaborAssignment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Labour Assignment",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "laborAssignmentId",
        "schema": "string",
        "required": true,
        "description": "The ID of the labor assignment.",
        "example": "LABORASSIGNMENTID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns labour assignment as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Labor Assignments within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/locations",
    "method": "getLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Locations",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all locations as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Locations within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/locations/{locationId}",
    "method": "getLocation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Location",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired company.",
        "example": "COMPANYID"
      },
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the location.",
        "example": "LOCATIONID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns location as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Locations within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/organizations",
    "method": "getOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Organizations",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Organizations within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/organizations/{orgId}",
    "method": "getOrganization",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Organization",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "organizationId",
        "schema": "string",
        "required": true,
        "description": "The ID of the organization.",
        "example": "ORGANIZATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of Organizations within a company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/paycomponents",
    "method": "getCompanyPayComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Company Pay Components",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the company that is being requested for.",
        "example": "COMPANYID"
      },
      {
        "name": "effectonpay",
        "schema": "string",
        "required": false,
        "description": "The type of effect on pay that you are requested for."
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all PayComponent's as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      },
      {
        "name": "classificationtype",
        "schema": "string",
        "required": false,
        "description": "The category that this component falls into. (such as  EARNINGS  or   SICK_PAY )"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "The name of a pay component that a company has."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The earnings to apply to the check. Each earning needs to define as one of the following allowed values"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/paycomponents/{paycomponentId}",
    "method": "getCompanyPayComponent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Company Pay Component",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the company that is being requested for.",
        "example": "COMPANYID"
      },
      {
        "name": "paycomponentId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier used to identify a pay component.",
        "example": "PAYCOMPONENTID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns PayComponent as of the date used in the request.",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The earnings to apply to the check. Each earning needs to define as one of the following allowed values"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/payfrequencies",
    "method": "getPayFrequencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Pay Frequencies",
    "parameters": [
      {
        "name": "payfrequency",
        "schema": "string",
        "required": false,
        "description": "The frequency that you would like to search for."
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of generic pay frequencies."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/payperiods",
    "method": "getCompanyPayPeriods",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Company Pay Periods",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the company that is being requested for.",
        "example": "COMPANYID"
      },
      {
        "name": "status",
        "schema": "array",
        "required": false,
        "description": "Get PayPeriods that are in List of specific status."
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The beginning of the search date range using the Payperiod start date."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The ending of the search date range using the Payperiod end date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representational state of pay periods."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/payperiods/{payperiodId}",
    "method": "getPayPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Company Pay Period",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the company that is being requested for.",
        "example": "COMPANYID"
      },
      {
        "name": "payperiodId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the PayPeriod you are looking for.",
        "example": "PAYPERIODID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representational state of pay periods."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/workers",
    "method": "getWorkers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Workers",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the company that workers are being requested for.",
        "example": "COMPANYID"
      },
      {
        "name": "givenname",
        "schema": "string",
        "required": false,
        "description": "The given or first name of the workers to search for."
      },
      {
        "name": "familyname",
        "schema": "string",
        "required": false,
        "description": "The family or last name of the workers to search for."
      },
      {
        "name": "legallastfour",
        "schema": "string",
        "required": false,
        "description": "The last 4 digits of the workers federal level taxpayer id number of the worker to search for."
      },
      {
        "name": "employeeid",
        "schema": "string",
        "required": false,
        "description": "The assigned workers employee ID."
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "The beginning of the search date range using for when the worker was created."
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "The ending of the search date range using for then the worker was created."
      },
      {
        "name": "locationid",
        "schema": "string",
        "required": false,
        "description": "The location Id."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/workers",
    "method": "addInProgressWorkers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "In Progress Workers",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the company that workers are being requested for.",
        "example": "COMPANYID"
      },
      {
        "name": "workerId",
        "schema": "string",
        "description": "",
        "example": "00Z5V9BTIHRQF2CF7BTH"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "3052"
      },
      {
        "name": "workerType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employmentType",
        "schema": "string",
        "description": "",
        "example": "NON_EXEMPT"
      },
      {
        "name": "exemptionType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "sex",
        "schema": "string",
        "description": "",
        "example": "MALE"
      },
      {
        "name": "ethnicityCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hireDate",
        "schema": "string",
        "description": "",
        "example": "2015-06-15T00:00:00Z"
      },
      {
        "name": "clockId",
        "schema": "string",
        "description": "",
        "example": "4321"
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "legalId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "laborAssignmentId",
        "schema": "string",
        "description": "",
        "example": "970001557863345"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "970001557916904"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "",
        "example": "970001701620675"
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currentStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "communications",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workerCorrelationId",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/workerstatuses",
    "method": "listWorkerStatuses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Worker Statuses",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of allowed worker statuses configured for the company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/companies/{companyId}/workerstatuses/{statusId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Company Worker Status",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The ID of the company.",
        "example": "COMPANYID"
      },
      {
        "name": "workerStatusId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worker status.",
        "example": "WORKERSTATUSID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The state representation of allowed worker statuses configured for the company."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}",
    "method": "deleteInProgress",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Inprogress Worker successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}",
    "method": "updateUniqueWorker",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerId",
        "schema": "string",
        "description": "",
        "example": "00Z5V9BTIHRQF2CF7BTH"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": "",
        "example": "3052"
      },
      {
        "name": "workerType",
        "schema": "string",
        "description": "",
        "example": "EMPLOYEE"
      },
      {
        "name": "employmentType",
        "schema": "string",
        "description": "",
        "example": "FULL_TIME"
      },
      {
        "name": "exemptionType",
        "schema": "string",
        "description": "",
        "example": "NON_EXEMPT"
      },
      {
        "name": "birthDate",
        "schema": "string",
        "description": "",
        "example": "1988-07-01T00:00:00Z"
      },
      {
        "name": "sex",
        "schema": "string",
        "description": "",
        "example": "MALE"
      },
      {
        "name": "ethnicityCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hireDate",
        "schema": "string",
        "description": "",
        "example": "2015-06-15T00:00:00Z"
      },
      {
        "name": "clockId",
        "schema": "string",
        "description": "",
        "example": "4321"
      },
      {
        "name": "name",
        "schema": "object",
        "description": ""
      },
      {
        "name": "legalId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "laborAssignmentId",
        "schema": "string",
        "description": "",
        "example": "970001557863345"
      },
      {
        "name": "locationId",
        "schema": "string",
        "description": "",
        "example": "970001701620675"
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": "",
        "example": "970001557916904"
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "organization",
        "schema": "object",
        "description": ""
      },
      {
        "name": "supervisor",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currentStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "communications",
        "schema": "array",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workerCorrelationId",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/assignmentdistributions",
    "method": "listAssignmentDistributions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Assignments",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker Assignment Distributions"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/checks",
    "method": "getWorkerChecksByPayPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Worker Checks",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "payperiodid",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the pay period that the  check will be within.",
        "example": "PAYPERIODID"
      },
      {
        "name": "filterbyuserid",
        "schema": "boolean",
        "required": false,
        "description": "Filter by User Id."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Check resource"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/checks",
    "method": "addWorkerCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Worker Check",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerId",
        "schema": "string",
        "description": "",
        "example": "004UWBZQJ7GEB9TVWFR9"
      },
      {
        "name": "paycheckId",
        "schema": "string",
        "description": "",
        "example": "1020026552555444"
      },
      {
        "name": "payPeriodId",
        "schema": "string",
        "description": "",
        "example": "1020026427391732"
      },
      {
        "name": "checkCorrelationId",
        "schema": "string",
        "description": "",
        "example": "yourID_1"
      },
      {
        "name": "blockAutoDistribution",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "earnings",
        "schema": "array",
        "description": ""
      },
      {
        "name": "deductions",
        "schema": "array",
        "description": ""
      },
      {
        "name": "informational",
        "schema": "array",
        "description": ""
      },
      {
        "name": "taxes",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Check resource"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      },
      {
        "statusCode": "503",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/checks/{externalCheckId}",
    "method": "removeWorkerCheck",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Worker Check",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "paycheckId",
        "schema": "string",
        "required": true,
        "description": "The id of a single check that a workers has.",
        "example": "PAYCHECKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Check resource"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/checks/{externalCheckId}",
    "method": "getWorkerCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Worker Check",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "paycheckId",
        "schema": "string",
        "required": true,
        "description": "The id of a single check that a workers has.",
        "example": "PAYCHECKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Check resource"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      },
      {
        "statusCode": "503",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/communications",
    "method": "getCommunications",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Communications",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the worker that workers are being requested for.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/communications",
    "method": "addCommunication",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Communication",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the worker that workers are being requested for.",
        "example": "WORKERID"
      },
      {
        "name": "communicationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usageType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialCountry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialArea",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialExtension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "streetLineOne",
        "schema": "string",
        "description": ""
      },
      {
        "name": "streetLineTwo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postOfficeBox",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCodeExtension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrySubdivisionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "links",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/communications/{communicationId}",
    "method": "removeCommunication",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Communication",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the worker that workers are being requested for.",
        "example": "WORKERID"
      },
      {
        "name": "communicationId",
        "schema": "string",
        "required": true,
        "description": "The id of a single workers communication.",
        "example": "COMMUNICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/communications/{communicationId}",
    "method": "getCommunicationItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Communication",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the worker that workers are being requested for.",
        "example": "WORKERID"
      },
      {
        "name": "communicationId",
        "schema": "string",
        "required": true,
        "description": "The id of a single workers communication.",
        "example": "COMMUNICATIONID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/communications/{communicationId}",
    "method": "updateCommunicationItem",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Communication",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the worker that workers are being requested for.",
        "example": "WORKERID"
      },
      {
        "name": "communicationId",
        "schema": "string",
        "required": true,
        "description": "The id of a single workers communication.",
        "example": "COMMUNICATIONID"
      },
      {
        "name": "communicationId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "usageType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialCountry",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialArea",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dialExtension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "streetLineOne",
        "schema": "string",
        "description": ""
      },
      {
        "name": "streetLineTwo",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postOfficeBox",
        "schema": "string",
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "postalCodeExtension",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countrySubdivisionCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "links",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation",
    "method": "getCompensationInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Compensation",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation/payrates",
    "method": "getPayRatesByWorkerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Rates",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all pay rates as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker Pay Rate"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation/payrates",
    "method": "addPayRate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Rate",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Security2"
      },
      {
        "name": "rateId",
        "schema": "string",
        "description": "",
        "example": "970000054610137"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rateNumber",
        "schema": "string",
        "description": "",
        "example": "RATE_1"
      },
      {
        "name": "rateType",
        "schema": "string",
        "description": "",
        "example": "RATE_1"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "40.2"
      },
      {
        "name": "standardHours",
        "schema": "string",
        "description": "",
        "example": "25.25"
      },
      {
        "name": "standardOvertime",
        "schema": "string",
        "description": "",
        "example": "3.25"
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker Pay Rate"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "415",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation/payrates/{rateId}",
    "method": "removePayRate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Rate",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": true,
        "description": "The id of a single workers compensation rate.",
        "example": "RATEID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation/payrates/{rateId}",
    "method": "getPayRate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Rate",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": true,
        "description": "The id of a single workers compensation rate.",
        "example": "RATEID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns compensation as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker Pay Rate"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation/payrates/{rateId}",
    "method": "updateCompensationRate",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Rate",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "rateId",
        "schema": "string",
        "required": true,
        "description": "The id of a single workers compensation rate.",
        "example": "RATEID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Security2"
      },
      {
        "name": "rateId",
        "schema": "string",
        "description": "",
        "example": "970000054610137"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rateNumber",
        "schema": "string",
        "description": "",
        "example": "RATE_1"
      },
      {
        "name": "rateType",
        "schema": "string",
        "description": "",
        "example": "RATE_1"
      },
      {
        "name": "amount",
        "schema": "string",
        "description": "",
        "example": "40.2"
      },
      {
        "name": "standardHours",
        "schema": "string",
        "description": "",
        "example": "25.25"
      },
      {
        "name": "standardOvertime",
        "schema": "string",
        "description": "",
        "example": "3.25"
      },
      {
        "name": "default",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker Pay Rate"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "415",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/compensation/paystandards",
    "method": "getPayStandards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Standards",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker Pay Standard"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/contacts",
    "method": "getContacts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Contacts",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/contacts",
    "method": "addWorkerContacts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Contacts",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactType",
        "schema": "object",
        "description": ""
      },
      {
        "name": "relationship",
        "schema": "object",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/contacts/{contactId}",
    "method": "deleteContactByContactId",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Contact",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker contact.",
        "example": "CONTACTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful operation."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/contacts/{contactId}",
    "method": "getContactByContactId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Contact",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "The id of a single Contact.",
        "example": "CONTACTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/contacts/{contactId}",
    "method": "updateContact",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Contacts",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker contact.",
        "example": "CONTACTID"
      },
      {
        "name": "contactId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "contactType",
        "schema": "object",
        "description": ""
      },
      {
        "name": "relationship",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/customfields",
    "method": "getCustomFields",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Custom Fields",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all custom fields as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/customfields",
    "method": "createCustomField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Custom Field",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerCustomFieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "booleanValue",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "textValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "numericValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "dateValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dropdownId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dropdownValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFieldName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "checkStub",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "employeeEditable",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/customfields/{workerCustomFieldId}",
    "method": "deleteCustomField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Custom Field",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerCustomFieldId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker custom field.",
        "example": "WORKERCUSTOMFIELDID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/customfields/{workerCustomFieldId}",
    "method": "getCustomField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Custom Field",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerCustomFieldId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker custom field.",
        "example": "WORKERCUSTOMFIELDID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns custom field as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/customfields/{workerCustomFieldId}",
    "method": "updateCustomField",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker CustomField",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerCustomFieldId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker custom field.",
        "example": "WORKERCUSTOMFIELDID"
      },
      {
        "name": "workerCustomFieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFieldId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "booleanValue",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "textValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "numericValue",
        "schema": "number",
        "description": ""
      },
      {
        "name": "dateValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dropdownId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "dropdownValue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customFieldName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "required",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "checkStub",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "employeeEditable",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/directdeposits",
    "method": "listDirectDeposits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Direct Deposits",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "effectivitydate",
        "schema": "string",
        "required": false,
        "description": "The effectivity date"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all direct deposits as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker direct deposit"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/directdeposits",
    "method": "updateDirectDeposits",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Direct Deposits",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "effectivitydate",
        "schema": "string",
        "required": false,
        "description": "The effectivity date."
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "description": "",
        "example": "1020026420675252"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2017-09-11T00:00:00Z"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "description": "",
        "example": "PERCENTAGE"
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "",
        "example": "CHECKING"
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 75
      },
      {
        "name": "routingNumber",
        "schema": "string",
        "description": "",
        "example": "222371863"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker direct deposit"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/directdeposits",
    "method": "addDirectDeposit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Direct Deposit",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "description": "",
        "example": "1020026420675252"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2017-09-11T00:00:00Z"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "description": "",
        "example": "PERCENTAGE"
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "",
        "example": "CHECKING"
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 75
      },
      {
        "name": "routingNumber",
        "schema": "string",
        "description": "",
        "example": "222371863"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker direct deposit"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/directdeposits/{directDepositId}",
    "method": "removeDirectDeposit",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Direct Deposit",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the direct deposit for this worker.",
        "example": "DIRECTDEPOSITID"
      },
      {
        "name": "effectivitydate",
        "schema": "string",
        "required": false,
        "description": "The effectivity date."
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Direct Deposit successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/directdeposits/{directDepositId}",
    "method": "getDirectDeposit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Direct Deposit",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the direct deposit for this worker.",
        "example": "DIRECTDEPOSITID"
      },
      {
        "name": "effectivitydate",
        "schema": "string",
        "required": false,
        "description": "The effectivity date."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker direct deposit"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/directdeposits/{directDepositId}",
    "method": "updateDirectDeposit",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Direct Deposit",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "required": true,
        "description": "The id assigned to the direct deposit for this worker.",
        "example": "DIRECTDEPOSITID"
      },
      {
        "name": "effectivitydate",
        "schema": "string",
        "required": false,
        "description": "The effectivity date."
      },
      {
        "name": "directDepositId",
        "schema": "string",
        "description": "",
        "example": "1020026420675252"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2017-09-11T00:00:00Z"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "description": "",
        "example": "PERCENTAGE"
      },
      {
        "name": "accountType",
        "schema": "string",
        "description": "",
        "example": "CHECKING"
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 75
      },
      {
        "name": "routingNumber",
        "schema": "string",
        "description": "",
        "example": "222371863"
      },
      {
        "name": "accountNumber",
        "schema": "string",
        "description": "",
        "example": "123456"
      },
      {
        "name": "priority",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker direct deposit"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/federaltax",
    "method": "removeFederalTax",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Federal Tax",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Worker Federal Tax successfully deleted"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/federaltax",
    "method": "getFederalTaxSetup",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Federal Tax",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representational state of the a worker's federal tax setup."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/federaltax",
    "method": "updateFederalTaxSetup",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Federal Tax",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "taxId",
        "schema": "string",
        "description": "",
        "example": "3520000118851387"
      },
      {
        "name": "filingStatus",
        "schema": "string",
        "description": "",
        "example": "MARRIED_FILING_JOINTLY"
      },
      {
        "name": "multipleJobs",
        "schema": "string",
        "description": "",
        "example": "false"
      },
      {
        "name": "dependentsAmount",
        "schema": "string",
        "description": "",
        "example": "123.45"
      },
      {
        "name": "otherIncome",
        "schema": "string",
        "description": "",
        "example": "23.45"
      },
      {
        "name": "deductionsAmount",
        "schema": "string",
        "description": "",
        "example": "2.45"
      },
      {
        "name": "extraWithholdingAmount",
        "schema": "string",
        "description": "",
        "example": "3.45"
      },
      {
        "name": "taxesWithheld",
        "schema": "string",
        "description": "",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representational state of the a worker's federal tax setup."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/federaltax",
    "method": "addFederalTaxSetup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Federal Tax",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "taxId",
        "schema": "string",
        "description": "",
        "example": "3520000118851387"
      },
      {
        "name": "filingStatus",
        "schema": "string",
        "description": "",
        "example": "MARRIED_FILING_JOINTLY"
      },
      {
        "name": "multipleJobs",
        "schema": "string",
        "description": "",
        "example": "false"
      },
      {
        "name": "dependentsAmount",
        "schema": "string",
        "description": "",
        "example": "123.45"
      },
      {
        "name": "otherIncome",
        "schema": "string",
        "description": "",
        "example": "23.45"
      },
      {
        "name": "deductionsAmount",
        "schema": "string",
        "description": "",
        "example": "2.45"
      },
      {
        "name": "extraWithholdingAmount",
        "schema": "string",
        "description": "",
        "example": "3.45"
      },
      {
        "name": "taxesWithheld",
        "schema": "string",
        "description": "",
        "example": "true"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "The representational state of the a worker's federal tax setup."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/paycomponents",
    "method": "getPayComponents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Components",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "effectonpay",
        "schema": "string",
        "required": false,
        "description": "What the effect on pay will be (REDUCTION OR ADDITION), currently only reductions are available."
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns all pay components as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      },
      {
        "name": "name",
        "schema": "string",
        "required": false,
        "description": "The name of a pay component that a workers has."
      },
      {
        "name": "componentid",
        "schema": "string",
        "required": false,
        "description": "The unique identifier of the pay component."
      },
      {
        "name": "classificationtype",
        "schema": "string",
        "required": false,
        "description": "The classification type of a pay component that a worker has. (such as \"DEDUCTION\", or \"REGULAR\",)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker recurring deduction"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/paycomponents",
    "method": "updatePayComponents",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Components",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerComponentId",
        "schema": "string",
        "description": "",
        "example": "970000223656831"
      },
      {
        "name": "componentId",
        "schema": "string",
        "description": "",
        "example": "970000180599325"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Deduction - 1"
      },
      {
        "name": "calculationType",
        "schema": "string",
        "description": "",
        "example": "00H2A1IUJE7MXV6TQ37U"
      },
      {
        "name": "calculationBaseId",
        "schema": "string",
        "description": "",
        "example": "00H2A1IUJE7MXV6TQ37U"
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 5
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2018-03-01T00:00:00Z"
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectOnPay",
        "schema": "string",
        "description": "",
        "example": "REDUCTION"
      },
      {
        "name": "classificationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "object",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker recurring deduction"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "415",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/paycomponents",
    "method": "addPayComponent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Component",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerComponentId",
        "schema": "string",
        "description": "",
        "example": "970000223656831"
      },
      {
        "name": "componentId",
        "schema": "string",
        "description": "",
        "example": "970000180599325"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Deduction - 1"
      },
      {
        "name": "calculationType",
        "schema": "string",
        "description": "",
        "example": "00H2A1IUJE7MXV6TQ37U"
      },
      {
        "name": "calculationBaseId",
        "schema": "string",
        "description": "",
        "example": "00H2A1IUJE7MXV6TQ37U"
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 5
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2018-03-01T00:00:00Z"
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectOnPay",
        "schema": "string",
        "description": "",
        "example": "REDUCTION"
      },
      {
        "name": "classificationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "object",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Worker recurring deduction"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "415",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/paycomponents/{workerComponentId}",
    "method": "removePayComponent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Component",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerComponentId",
        "schema": "string",
        "required": true,
        "description": "The id of a single pay component that a workers has.",
        "example": "WORKERCOMPONENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful operation"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "422",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/paycomponents/{workerComponentId}",
    "method": "getPayComponent",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Component",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerComponentId",
        "schema": "string",
        "required": true,
        "description": "The id of a single pay component that a  \"Active\" worker has.",
        "example": "WORKERCOMPONENTID"
      },
      {
        "name": "asof",
        "schema": "string",
        "required": false,
        "description": "Returns pay component as of the date used in the request",
        "example": "2020-01-04T00:00:00Z"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker recurring deduction"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/paycomponents/{workerComponentId}",
    "method": "updatePayComponent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Pay Component",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      },
      {
        "name": "workerComponentId",
        "schema": "string",
        "required": true,
        "description": "The id of a single pay component that a workers has.",
        "example": "WORKERCOMPONENTID"
      },
      {
        "name": "workerComponentId",
        "schema": "string",
        "description": "",
        "example": "970000223656831"
      },
      {
        "name": "componentId",
        "schema": "string",
        "description": "",
        "example": "970000180599325"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Deduction - 1"
      },
      {
        "name": "calculationType",
        "schema": "string",
        "description": "",
        "example": "00H2A1IUJE7MXV6TQ37U"
      },
      {
        "name": "calculationBaseId",
        "schema": "string",
        "description": "",
        "example": "00H2A1IUJE7MXV6TQ37U"
      },
      {
        "name": "value",
        "schema": "number",
        "description": "",
        "example": 5
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "",
        "example": "2018-03-01T00:00:00Z"
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectOnPay",
        "schema": "string",
        "description": "",
        "example": "REDUCTION"
      },
      {
        "name": "classificationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "object",
        "description": ""
      },
      {
        "name": "links",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Worker recurring deduction"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "415",
        "description": "Representation of error"
      },
      {
        "statusCode": "423",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/status",
    "method": "getWorkerStatusList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Statuses",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The workers employment status information. This data field cannot be POSTED and PATCHED for IN_PROGRESS worker."
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/workers/{workerId}/timeoff",
    "method": "getTimeOffBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Worker",
    "typeScriptTag": "worker",
    "description": "Worker Time Off",
    "parameters": [
      {
        "name": "workerId",
        "schema": "string",
        "required": true,
        "description": "The ID of the worker.",
        "example": "WORKERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The representational state of a workers time off."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      },
      {
        "statusCode": "503",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/checks",
    "method": "deleteChecksByPayPeriodAndUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Checks by Pay Period and User",
    "parameters": [
      {
        "name": "payperiodid",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired pay period.",
        "example": "PAYPERIODID"
      },
      {
        "name": "deletebyuserid",
        "schema": "boolean",
        "required": true,
        "description": "Value for deletebyuserid parameter should be \"true\" ",
        "example": true
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Successful operation"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      },
      {
        "statusCode": "503",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/checks/{checkId}/checkcomponents",
    "method": "addPayComponentToCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Pay Component to a check.",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired check.",
        "example": "CHECKID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "componentId",
        "schema": "string",
        "description": "",
        "example": "970000053577899"
      },
      {
        "name": "checkComponentId",
        "schema": "string",
        "description": "",
        "example": "1020026552555441"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "classificationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectOnPay",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliesToWorkerTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "laborAssignmentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payRateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payRate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payHours",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payUnits",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "memoed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lineDate",
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
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      },
      {
        "statusCode": "503",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/checks/{checkId}/checkcomponents/{checkComponentId}",
    "method": "removePayComponent",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Pay Component of a check",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired check.",
        "example": "CHECKID"
      },
      {
        "name": "checkComponentId",
        "schema": "string",
        "required": true,
        "description": "ID associated with an Earning of this check",
        "example": "CHECKCOMPONENTID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/checks/{checkId}/checkcomponents/{checkComponentId}",
    "method": "updatePayComponent",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Payroll",
    "typeScriptTag": "payroll",
    "description": "Pay Component of a Check",
    "parameters": [
      {
        "name": "checkId",
        "schema": "string",
        "required": true,
        "description": "ID associated with desired check.",
        "example": "CHECKID"
      },
      {
        "name": "checkComponentId",
        "schema": "string",
        "required": true,
        "description": "ID associated with an Earning of this check",
        "example": "CHECKCOMPONENTID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "componentId",
        "schema": "string",
        "description": "",
        "example": "970000053577899"
      },
      {
        "name": "checkComponentId",
        "schema": "string",
        "description": "",
        "example": "1020026552555441"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "classificationType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "effectOnPay",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "appliesToWorkerTypes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "jobId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "laborAssignmentId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payRateId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payRate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payHours",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payUnits",
        "schema": "string",
        "description": ""
      },
      {
        "name": "payAmount",
        "schema": "string",
        "description": ""
      },
      {
        "name": "memoed",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lineDate",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Informational pay components on the check."
      },
      {
        "statusCode": "400",
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      },
      {
        "statusCode": "503",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/management/domains",
    "method": "getAvailableDomains",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Get Webhook domains",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "406",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/management/hooks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "List Webhooks",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/management/hooks",
    "method": "addWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Add Webhook",
    "parameters": [
      {
        "name": "hookId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "uri",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URI"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "authentication",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "domains",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "links",
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
        "description": "Representation of error"
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "403",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/management/hooks/{hookId}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Delete Webhook",
    "parameters": [
      {
        "name": "hookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/management/hooks/{hookId}",
    "method": "getSpecificHookById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Webhook",
    "parameters": [
      {
        "name": "hookId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "HOOKID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Representation of error"
      },
      {
        "statusCode": "404",
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  },
  {
    "url": "/management/requestclientaccess",
    "method": "linkPaychexClients",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Management",
    "typeScriptTag": "management",
    "description": "Request Client Access",
    "parameters": [
      {
        "name": "displayId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DISPLAYID"
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
        "description": "Representation of error"
      },
      {
        "statusCode": "405",
        "description": "Representation of error"
      },
      {
        "statusCode": "500",
        "description": "Representation of error"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="External API"
      apiBaseUrl="https://api.paychex.com"
      apiVersion="1.0"
      endpoints={59}
      sdkMethods={97}
      schemas={106}
      parameters={501}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paychex/openapi.yaml"
      developerDocumentation="developer.paychex.com/documentation"
    />
  );
}
  