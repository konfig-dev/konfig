import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function PaylocityWeblinkTypeScriptSdk() {
  return (
    <Sdk
      sdkName="paylocity-typescript-sdk"
      metaDescription="Paylocity is the HR & Payroll provider that frees you from the tasks of today, so together, we can spend more time focused on the promise of tomorrow."
      company="Paylocity"
      serviceName="Weblink"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/logo.jpg"
      clientNameCamelCase="paylocity"
      homepage="developer.paylocity.com"
      lastUpdated={new Date("2024-02-25T09:49:43.849Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/favicon.jpg"
      // Missing contactUrl
      contactEmail="webservices@paylocity.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/v1/employee",
    "method": "createNewEmployeeRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee (v1)",
    "typeScriptTag": "employeeV1",
    "description": "Add new employee",
    "parameters": [
      {
        "name": "newEmployee",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/company/{companyId}/employee/{employeeId}",
    "method": "getEmployeeData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee (v1)",
    "typeScriptTag": "employeeV1",
    "description": "Get Employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Employee"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/update-employee",
    "method": "updateEmployeeDataToPaylocity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee (v1)",
    "typeScriptTag": "employeeV1",
    "description": "Update employee",
    "parameters": [
      {
        "name": "updateEmployee",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/deduction",
    "method": "addOrUpdateDeduction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Deduction",
    "typeScriptTag": "deduction",
    "description": "Add / Update Deduction",
    "parameters": [
      {
        "name": "deduction",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyId}/employees/{employeeId}/deductions/{deductionCode}/{startDate}",
    "method": "removeDeductionByCodeAndStartDate",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Deduction",
    "typeScriptTag": "deduction",
    "description": "Delete deduction for deduction code / start date",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": true,
        "description": "Deduction Code"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Start Date"
      }
    ],
    "responses": [
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyId}/employees/{employeeId}/deductions",
    "method": "getAllDeductions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deduction",
    "typeScriptTag": "deduction",
    "description": "Get All Deductions",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      }
    ],
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
    "url": "/v1/companies/{companyId}/employees/{employeeId}/deductions/{deductionCode}",
    "method": "getByCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Deduction",
    "typeScriptTag": "deduction",
    "description": "Get Deduction for Deduction Code",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": true,
        "description": "Deduction Code"
      }
    ],
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
    "url": "/v1/companies/{companyId}/onboarding/employees",
    "method": "addEmployeeToOnboarding",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Onboarding",
    "typeScriptTag": "onboarding",
    "description": "Add Employee to Onboarding",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "autoPayType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "baseRate",
        "schema": "number",
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
        "name": "costCenter1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "defaultHours",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employmentType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "federalFilingStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "sex",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "homePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personalMobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payFrequency",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "personalEmailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ratePer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salary",
        "schema": "number",
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
        "name": "ssn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "stateFilingStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "suiState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxForm",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workEmailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}",
    "method": "removeForTaxCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Local Tax",
    "typeScriptTag": "localTax",
    "description": "Delete Local Tax for Tax Code",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "Tax Code"
      }
    ],
    "responses": [
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}",
    "method": "getForTaxCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Local Tax",
    "typeScriptTag": "localTax",
    "description": "Get Local Tax for Tax Code",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "Tax Code"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The Local Tax model"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}",
    "method": "updateForTaxCode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Local Tax",
    "typeScriptTag": "localTax",
    "description": "Update Local Tax",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "Tax Code"
      },
      {
        "name": "exemptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exemptions2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filingStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "residentPSD",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workPSD",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/companies/{companyId}/employees/{employeeId}/localTaxes",
    "method": "getAllTaxesForEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Local Tax",
    "typeScriptTag": "localTax",
    "description": "Get All Local Taxes",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      }
    ],
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
    "url": "/v1/companies/{companyId}/employees/{employeeId}/localTaxes",
    "method": "createOrUpdateLocalTaxes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Local Tax",
    "typeScriptTag": "localTax",
    "description": "Add Local Tax",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "exemptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exemptions2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filingStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "residentPSD",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workPSD",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/additionalRates",
    "method": "updateEmployeeAdditionalRates",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Additional Rates",
    "typeScriptTag": "additionalRates",
    "description": "Add/update additional rates",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "changeReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "costCenter1",
        "schema": "object",
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "object",
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "endCheckDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "job",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rateCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "rateNotes",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ratePer",
        "schema": "object",
        "description": ""
      },
      {
        "name": "shift",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/credentials/secrets",
    "method": "obtainNewClientSecret",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client Credentials",
    "typeScriptTag": "clientCredentials",
    "description": "Obtain new client secret.",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/codes/{codeResource}",
    "method": "getAllByResource",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company Codes",
    "typeScriptTag": "companyCodes",
    "description": "Get All Company Codes",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "codeResource",
        "schema": "string",
        "required": true,
        "description": "Type of Company Code. Common values costcenter1, costcenter2, costcenter3, deductions, earnings, taxes, paygrade, positions."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/openapi",
    "method": "getOpenApiDoc",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company-Specific Schema",
    "typeScriptTag": "companySpecificSchema",
    "description": "Get Company-Specific Open API Documentation",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/customfields/{category}",
    "method": "getAllByCategory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Get All Custom Fields",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "Custom Fields Category"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/directDeposit",
    "method": "getAllDirectDeposits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Direct Deposit",
    "typeScriptTag": "directDeposit",
    "description": "Get All Direct Deposit",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/earnings",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get All Earnings",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      }
    ],
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
    "url": "/v2/companies/{companyId}/employees/{employeeId}/earnings",
    "method": "addOrUpdateEarning",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Add/Update Earning",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "agency",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "annualMaximum",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "calculationCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "costCenter3",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "earningCode",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "frequency",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "goal",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "hoursOrUnits",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "isSelfInsured",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "miscellaneousInfo",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paidTowardsGoal",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payPeriodMaximum",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "payPeriodMinimum",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "rate",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "rateCode",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}",
    "method": "deleteByCodeAndStart",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Delete Earning by Earning Code and Start Date",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": true,
        "description": "Earning Code"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Start Date"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}/{startDate}",
    "method": "getByCodeAndStart",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get Earning by Earning Code and Start Date",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": true,
        "description": "Earning Code"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "Start Date"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The employee earning model"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/earnings/{earningCode}",
    "method": "getByEarningCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get Earnings by Earning Code",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": true,
        "description": "Earning Code"
      }
    ],
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
    "url": "/v2/companies/{companyId}/employees/{employeeId}/emergencyContacts",
    "method": "addOrUpdate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Emergency Contacts",
    "typeScriptTag": "emergencyContacts",
    "description": "Add/update emergency contacts",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "address1",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "address2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "county",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "homePhone",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "notes",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "pager",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryPhone",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "priority",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "relationship",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "state",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "syncEmployeeInfo",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "workExtension",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "workPhone",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "zip",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/benefitSetup",
    "method": "addOrUpdateBenefitSetup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employee Benefit Setup",
    "typeScriptTag": "employeeBenefitSetup",
    "description": "Add/update employee's benefit setup",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "benefitClass",
        "schema": "object",
        "description": ""
      },
      {
        "name": "benefitClassEffectiveDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "benefitSalary",
        "schema": "object",
        "description": ""
      },
      {
        "name": "benefitSalaryEffectiveDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "doNotApplyAdministrativePeriod",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isMeasureAcaEligibility",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/weblinkstaging/companies/{companyId}/employees/newemployees",
    "method": "addNewEmployeeToWebLink",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Staging",
    "typeScriptTag": "employeeStaging",
    "description": "Add new employee to Web Link",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "additionalDirectDeposit",
        "schema": "array",
        "description": ""
      },
      {
        "name": "benefitSetup",
        "schema": "array",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customBooleanFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customDateFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customDropDownFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customNumberFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customTextFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "departmentPosition",
        "schema": "array",
        "description": ""
      },
      {
        "name": "disabilityDescription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ethnicity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "federalTax",
        "schema": "array",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "fitwExemptReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "futaExemptReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "array",
        "description": ""
      },
      {
        "name": "isEmployee943",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isSmoker",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "localTax",
        "schema": "array",
        "description": ""
      },
      {
        "name": "mainDirectDeposit",
        "schema": "array",
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "medExemptReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nonPrimaryStateTax",
        "schema": "array",
        "description": ""
      },
      {
        "name": "preferredName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primaryPayRate",
        "schema": "array",
        "description": ""
      },
      {
        "name": "primaryStateTax",
        "schema": "array",
        "description": ""
      },
      {
        "name": "priorLastName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "sitwExemptReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ssExemptReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "array",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "object",
        "description": ""
      },
      {
        "name": "suiExemptReason",
        "schema": "object",
        "description": ""
      },
      {
        "name": "suiState",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxDistributionCode1099R",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxForm",
        "schema": "object",
        "description": ""
      },
      {
        "name": "veteranDescription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "webTime",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workAddress",
        "schema": "array",
        "description": ""
      },
      {
        "name": "workEligibility",
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
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees",
    "method": "getAllEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get all employees",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": "Number of records per page. Default value is 25."
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "description": "Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0."
      },
      {
        "name": "includetotalcount",
        "schema": "boolean",
        "description": "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees",
    "method": "addToPaylocity",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Add new employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "additionalDirectDeposit",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additionalRate",
        "schema": "array",
        "description": ""
      },
      {
        "name": "benefitSetup",
        "schema": "object",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "companyFEIN",
        "schema": "object",
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customBooleanFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customDateFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customDropDownFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customNumberFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customTextFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "departmentPosition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disabilityDescription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emergencyContacts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ethnicity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "federalTax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isHighlyCompensated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isSmoker",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "localTax",
        "schema": "array",
        "description": ""
      },
      {
        "name": "mainDirectDeposit",
        "schema": "object",
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nonPrimaryStateTax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ownerPercent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "preferredName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primaryPayRate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primaryStateTax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "priorLastName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "object",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxSetup",
        "schema": "object",
        "description": ""
      },
      {
        "name": "veteranDescription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "webTime",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workEligibility",
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
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}",
    "method": "getEmployeeData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Get employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}",
    "method": "updateEmployeeData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Employee",
    "typeScriptTag": "employee",
    "description": "Update employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "additionalDirectDeposit",
        "schema": "array",
        "description": ""
      },
      {
        "name": "additionalRate",
        "schema": "array",
        "description": ""
      },
      {
        "name": "benefitSetup",
        "schema": "object",
        "description": ""
      },
      {
        "name": "birthDate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "companyFEIN",
        "schema": "object",
        "description": ""
      },
      {
        "name": "companyName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "currency",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customBooleanFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customDateFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customDropDownFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customNumberFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customTextFields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "departmentPosition",
        "schema": "object",
        "description": ""
      },
      {
        "name": "disabilityDescription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "emergencyContacts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ethnicity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "federalTax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "homeAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "isHighlyCompensated",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "isSmoker",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "localTax",
        "schema": "array",
        "description": ""
      },
      {
        "name": "mainDirectDeposit",
        "schema": "object",
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "middleName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nonPrimaryStateTax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ownerPercent",
        "schema": "object",
        "description": ""
      },
      {
        "name": "preferredName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primaryPayRate",
        "schema": "object",
        "description": ""
      },
      {
        "name": "primaryStateTax",
        "schema": "object",
        "description": ""
      },
      {
        "name": "priorLastName",
        "schema": "object",
        "description": ""
      },
      {
        "name": "salutation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ssn",
        "schema": "object",
        "description": ""
      },
      {
        "name": "status",
        "schema": "object",
        "description": ""
      },
      {
        "name": "suffix",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxSetup",
        "schema": "object",
        "description": ""
      },
      {
        "name": "veteranDescription",
        "schema": "object",
        "description": ""
      },
      {
        "name": "webTime",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workEligibility",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/localTaxes",
    "method": "getAllForEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Local Taxes",
    "typeScriptTag": "localTaxes",
    "description": "Get all local taxes",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      }
    ],
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
    "url": "/v2/companies/{companyId}/employees/{employeeId}/localTaxes",
    "method": "addNewTax",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Local Taxes",
    "typeScriptTag": "localTaxes",
    "description": "Add new local tax",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "exemptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exemptions2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filingStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "residentPSD",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "workPSD",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}",
    "method": "deleteByTaxCode",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Local Taxes",
    "typeScriptTag": "localTaxes",
    "description": "Delete local tax by tax code",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "Tax Code"
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/localTaxes/{taxCode}",
    "method": "getByTaxCode",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Local Taxes",
    "typeScriptTag": "localTaxes",
    "description": "Get local taxes by tax code",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "taxCode",
        "schema": "string",
        "required": true,
        "description": "Tax Code"
      }
    ],
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
    "url": "/v2/companies/{companyId}/employees/{employeeId}/nonprimaryStateTax",
    "method": "addOrUpdateStateTax",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Non-Primary State Tax",
    "typeScriptTag": "nonPrimaryStateTax",
    "description": "Add/update non-primary state tax",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deductionsAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "dependentsAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "exemptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exemptions2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filingStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "higherRate",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "otherIncomeAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "percentage",
        "schema": "object",
        "description": ""
      },
      {
        "name": "reciprocityCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "specialCheckCalc",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCalculationCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "w4FormYear",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}/{checkDate}",
    "method": "getDetailsByYearAndCheckDate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayStatements",
    "typeScriptTag": "payStatements",
    "description": "Get employee pay statement details data for the specified year and check date.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year for which to retrieve pay statement data"
      },
      {
        "name": "checkDate",
        "schema": "string",
        "required": true,
        "description": "The check date for which to retrieve pay statement data"
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": "Number of records per page. Default value is 25."
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "description": "Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0."
      },
      {
        "name": "includetotalcount",
        "schema": "boolean",
        "description": "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true."
      },
      {
        "name": "codegroup",
        "schema": "string",
        "description": "Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/paystatement/details/{year}",
    "method": "getDetailsByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayStatements",
    "typeScriptTag": "payStatements",
    "description": "Get employee pay statement details data for the specified year.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year for which to retrieve pay statement data"
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": "Number of records per page. Default value is 25."
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "description": "Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0."
      },
      {
        "name": "includetotalcount",
        "schema": "boolean",
        "description": "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true."
      },
      {
        "name": "codegroup",
        "schema": "string",
        "description": "Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}/{checkDate}",
    "method": "getSummaryData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayStatements",
    "typeScriptTag": "payStatements",
    "description": "Get employee pay statement summary data for the specified year and check date.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year for which to retrieve pay statement data"
      },
      {
        "name": "checkDate",
        "schema": "string",
        "required": true,
        "description": "The check date for which to retrieve pay statement data"
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": "Number of records per page. Default value is 25."
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "description": "Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0."
      },
      {
        "name": "includetotalcount",
        "schema": "boolean",
        "description": "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true."
      },
      {
        "name": "codegroup",
        "schema": "string",
        "description": "Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/paystatement/summary/{year}",
    "method": "getSummaryByYear",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayStatements",
    "typeScriptTag": "payStatements",
    "description": "Get employee pay statement summary data for the specified year.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "year",
        "schema": "string",
        "required": true,
        "description": "The year for which to retrieve pay statement data"
      },
      {
        "name": "pagesize",
        "schema": "integer",
        "description": "Number of records per page. Default value is 25."
      },
      {
        "name": "pagenumber",
        "schema": "integer",
        "description": "Page number to retrieve; page numbers are 0-based (so to get the first page of results, pass pagenumber=0). Default value is 0."
      },
      {
        "name": "includetotalcount",
        "schema": "boolean",
        "description": "Whether to include the total record count in the header's X-Pcty-Total-Count property. Default value is true."
      },
      {
        "name": "codegroup",
        "schema": "string",
        "description": "Retrieve pay statement details related to specific deduction, earning or tax types. Common values include 401k, Memo, Reg, OT, Cash Tips, FED and SITW."
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/primaryStateTax",
    "method": "addOrUpdateTax",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Primary State Tax",
    "typeScriptTag": "primaryStateTax",
    "description": "Add/update primary state tax",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "amount",
        "schema": "object",
        "description": ""
      },
      {
        "name": "deductionsAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "dependentsAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "exemptions",
        "schema": "object",
        "description": ""
      },
      {
        "name": "exemptions2",
        "schema": "object",
        "description": ""
      },
      {
        "name": "filingStatus",
        "schema": "object",
        "description": ""
      },
      {
        "name": "higherRate",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "otherIncomeAmount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "percentage",
        "schema": "object",
        "description": ""
      },
      {
        "name": "specialCheckCalc",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCalculationCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "taxCode",
        "schema": "object",
        "description": ""
      },
      {
        "name": "w4FormYear",
        "schema": "integer",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/sensitivedata",
    "method": "getEmployeeSensitiveData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sensitive Data",
    "typeScriptTag": "sensitiveData",
    "description": "Get sensitive data",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/companies/{companyId}/employees/{employeeId}/sensitivedata",
    "method": "addOrUpdateEmployeeSensitiveData",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Sensitive Data",
    "typeScriptTag": "sensitiveData",
    "description": "Add/update sensitive data",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Company Identifier. This is the unique value provided by Paylocity to each specific Payroll Entity.\r\n                **Allowable Values:**\r\n                9 char max"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "The Paylocity Employee ID. This is a unique value per Paylocity Company ID.\r\n**Allowable Values:**\r\n10 char max"
      },
      {
        "name": "disability",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ethnicity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "gender",
        "schema": "object",
        "description": ""
      },
      {
        "name": "veteran",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="WebLink API"
      apiBaseUrl="https://apisandbox.paylocity.com/api"
      apiVersion="v2"
      endpoints={33}
      sdkMethods={43}
      schemas={38}
      parameters={403}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paylocity/weblink/openapi.yaml"
    />
  );
}
  