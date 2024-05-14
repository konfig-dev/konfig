import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function UkgTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ukg-typescript-sdk"
      metaDescription={`At UKG, our purpose is people. As strong believers in the power of culture and belonging as the secret to success, we champion great workplaces and build lifelong partnerships with our customers to show what's possible when businesses invest in their people. One of the world's leading HCM cloud companies today, UKG and our Life-work Technology approach to HR, pay, time, and culture solutions for all people helps  80,000 organizations around the globe and across every industry anticipate and adapt to their employees' needs beyond just work. To learn more, visit ukg.com.

UKG Social Media Guidelines available at https://www.ukg.com/ukg-social-media-guidelines.`}
      company="UKG"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/logo.png"
      companyKebabCase="ukg"
      clientNameCamelCase="ukg"
      homepage="ukg.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","workforce_management","payroll"]}
      methods={[
  {
    "url": "/personnel/v1/audit-details",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AuditDetails",
    "typeScriptTag": "auditDetails",
    "description": "Get Audit Details Data",
    "parameters": [
      {
        "name": "startDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATETIME"
      },
      {
        "name": "endDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATETIME"
      },
      {
        "name": "tableName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TABLENAME"
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELDNAME"
      },
      {
        "name": "action",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "400",
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
    "url": "/configuration/v1/businessruleimport-tool/fileupload",
    "method": "businessRuleImportFileUpload",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BusinessRuleImportTool",
    "typeScriptTag": "businessRuleImportTool",
    "description": "Takes an XML transaction and feeds it into the Business Rule Import Tool",
    "parameters": [
      {
        "name": "transaction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uniqueFileName",
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
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/v1/businessruleimport-tool/filestatus/{fileId}",
    "method": "getFileUploadStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BusinessRuleImportTool",
    "typeScriptTag": "businessRuleImportTool",
    "description": "Retrieves the status of an Business Rule Import Tool transaction",
    "parameters": [
      {
        "name": "fileId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/v1/businessruleimport-tool/transactionstatus/{stagingId}",
    "method": "getStagingStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BusinessRuleImportTool",
    "typeScriptTag": "businessRuleImportTool",
    "description": "Retrieves the status of an Business Rule Import Tool transaction",
    "parameters": [
      {
        "name": "stagingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/v1/businessruleimport-tool/transaction",
    "method": "importsBusinessRuleStagingData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "BusinessRuleImportTool",
    "typeScriptTag": "businessRuleImportTool",
    "description": "Takes an XML transaction and feeds it into the Business Rule Import Tool (https://developer.ukg.com/hcm/reference",
    "parameters": [
      {
        "name": "transaction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uniqueFileName",
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
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/{tenant-alias}/api/candidates/{candidate-id}/background-checks",
    "method": "addBackgroundCheck",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Candidate Request",
    "typeScriptTag": "candidateRequest",
    "description": "Background Check Request",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE-ID"
      },
      {
        "name": "tenantAlias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANT-ALIAS"
      },
      {
        "name": "author",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "application",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "order_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_NUMBER"
      },
      {
        "name": "packages",
        "schema": "object",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/{tenant-alias}/api/candidates/{candidate-id}/background-checks/{background-check-id}",
    "method": "updateBackgroundCheck",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Candidate Request",
    "typeScriptTag": "candidateRequest",
    "description": "Background Check Status",
    "parameters": [
      {
        "name": "candidateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CANDIDATE-ID"
      },
      {
        "name": "backgroundCheckId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "BACKGROUND-CHECK-ID"
      },
      {
        "name": "tenantAlias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANT-ALIAS"
      },
      {
        "name": "author",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "application",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "order_number",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ORDER_NUMBER"
      },
      {
        "name": "packages",
        "schema": "object",
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
        "description": ""
      }
    ]
  },
  {
    "url": "/{tenant-alias}/api/background-check-order-requests",
    "method": "backgroundCheckDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Order Requests",
    "typeScriptTag": "orderRequests",
    "description": "Background Check Details",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "A temporary Background Check Request tokena ssociated with the background check request that has been previously provided in the Background Check Request Redirect URL",
        "example": "TOKEN"
      },
      {
        "name": "tenantAlias",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TENANT-ALIAS"
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
    "url": "/configuration/v1/code-tables",
    "method": "getInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CodeTables",
    "typeScriptTag": "codeTables",
    "description": "Get Code Tables information",
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
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/v1/code-tables",
    "method": "createCodeTables",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CodeTables",
    "typeScriptTag": "codeTables",
    "description": "Post Code Tables information",
    "parameters": [],
    "responses": [
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/integration/kronos/business-structure-status",
    "method": "listEmployeesChangeBusinessStructure",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "BusinessStructureStatus",
    "typeScriptTag": "businessStructureStatus",
    "description": "Gets a list of Employees for which there is a change in business structure",
    "parameters": [
      {
        "name": "modifiedAfterDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODIFIEDAFTERDATETIME"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/configuration/v1/company-details",
    "method": "getCompanyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CompanyDetails",
    "typeScriptTag": "companyDetails",
    "description": "Get Company Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": "5 character value represents a UKG Pro CompanyID"
      },
      {
        "name": "masterCompanyId",
        "schema": "string",
        "required": false,
        "description": "5 character value represents a UKG Pro Master CompanyID"
      },
      {
        "name": "companyCode",
        "schema": "string",
        "required": false,
        "description": "5 character value represents a UKG Pro Company Code"
      },
      {
        "name": "isMasterCompany",
        "schema": "string",
        "required": false,
        "description": "true/false values represent if this company is a UKG Pro Master Company"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/emp-deductions",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmpDeductions",
    "typeScriptTag": "empDeductions",
    "description": "Get employee deductions",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dedCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEDCODE"
      },
      {
        "name": "benStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "benefitOption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDateTime",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/compensation-details",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CompensationDetails",
    "typeScriptTag": "compensationDetails",
    "description": "Get all compensation details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salaryOrHourlyCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryShiftCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryShiftGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateInJob",
        "schema": "string",
        "required": false,
        "description": "Used to find date in job less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateLastPaid",
        "schema": "string",
        "required": false,
        "description": "Used to find date last paid less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "datePaidThru",
        "schema": "string",
        "required": false,
        "description": "Used to find date paid through less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "isAutoAllocated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isAutoPaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isSeasonalWorker",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHighlyCompensated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isMultipleJob",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceReviewRating",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceReviewType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/compensation-details",
    "method": "getAllByCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CompensationDetails",
    "typeScriptTag": "compensationDetails",
    "description": "Get all compensation details by company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salaryOrHourlyCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryShiftCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryShiftGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateInJob",
        "schema": "string",
        "required": false,
        "description": "Used to find date in job less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateLastPaid",
        "schema": "string",
        "required": false,
        "description": "Used to find date last paid less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "datePaidThru",
        "schema": "string",
        "required": false,
        "description": "Used to find date paid through less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "isAutoAllocated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isAutoPaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isSeasonalWorker",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHighlyCompensated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isMultipleJob",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceReviewRating",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceReviewType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/compensation-details",
    "method": "getByCompanyAndEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CompensationDetails",
    "typeScriptTag": "compensationDetails",
    "description": "Get all compensation details by company and employee",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "salaryOrHourlyCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryShiftCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryShiftGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateInJob",
        "schema": "string",
        "required": false,
        "description": "Used to find date in job less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateLastPaid",
        "schema": "string",
        "required": false,
        "description": "Used to find date last paid less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "datePaidThru",
        "schema": "string",
        "required": false,
        "description": "Used to find date paid through less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "isAutoAllocated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isAutoPaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isSeasonalWorker",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHighlyCompensated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isMultipleJob",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceReviewRating",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "performanceReviewType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/compensation-details/{employeeId}",
    "method": "getByEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "CompensationDetails",
    "typeScriptTag": "compensationDetails",
    "description": "Get all compensation details by employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/dep-deductions",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DependentDeductions",
    "typeScriptTag": "dependentDeductions",
    "description": "Get Dependent Deductions",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "currentCoid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/payroll/v1/earnings-history-base-elements",
    "method": "getInsRate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EarningsHistory",
    "typeScriptTag": "earningsHistory",
    "description": "Get Earnings History Base Elements",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startPerControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endPerControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensationHours",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/employee-changes",
    "method": "getAllEmployeeChangesSinceLastCall",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Changes By Date",
    "typeScriptTag": "changesByDate",
    "description": "Changes By Date",
    "parameters": [
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Used to lookup employee changes within time span"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Used to lookup employee changes within time span"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Pagination, which page you want to see"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Pagination, how many records per page you want to see"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-changes/{employeeId}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Changes",
    "typeScriptTag": "employeeChanges",
    "description": "Changes By Employee ID",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
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
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/configuration/v1/earnings",
    "method": "listEarningsConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get a list of all earnings configurations",
    "parameters": [
      {
        "name": "calculationRule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxCategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useDeductionOffset",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInShiftDiffrential",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInManualCheck",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInAccruals",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensationHours",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/v1/earnings/{calculationRule}/{taxCategory}/{useDeductionOffset}/{countryCode}/{includeInShiftDiffrential}/{includeInManualCheck}",
    "method": "getConfigurationsFilteredByParameter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get list of earnings configurations filtered by Parameter including pagination params",
    "parameters": [
      {
        "name": "calculationRule",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALCULATIONRULE"
      },
      {
        "name": "taxCategory",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TAXCATEGORY"
      },
      {
        "name": "useDeductionOffset",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USEDEDUCTIONOFFSET"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COUNTRYCODE"
      },
      {
        "name": "includeInShiftDiffrential",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCLUDEINSHIFTDIFFRENTIAL"
      },
      {
        "name": "includeInManualCheck",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INCLUDEINMANUALCHECK"
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInAccruals",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensationHours",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/configuration/v1/earnings/{earningCode}",
    "method": "specificConfigurationGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get a specific earning configuration",
    "parameters": [
      {
        "name": "earningCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EARNINGCODE"
      },
      {
        "name": "calculationRule",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxCategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "useDeductionOffset",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInShiftDiffrential",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInManualCheck",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInAccruals",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensation",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "includeInDeferredCompensationHours",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-contract-details",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeContract",
    "typeScriptTag": "employeeContract",
    "description": "Get all employment contract details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contractTypeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": "Used to find contracts effective date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": "Used to find contract record created date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "rowLastChanged",
        "schema": "string",
        "required": false,
        "description": "Used to find contract record changed date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-cobra-details",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeCobraDetails",
    "typeScriptTag": "employeeCobraDetails",
    "description": "Get Employee Cobra Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraIsActive",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfCobraEvent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/contacts",
    "method": "getPersonnelDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Get all details for a person assigned to an employee as a contact",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "relationshipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraIsActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isBeneficiary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isDependent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfCobraEvent",
        "schema": "string",
        "required": false,
        "description": "Used to find date of COBRA event less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "statusAsOfDate",
        "schema": "string",
        "required": false,
        "description": "Used to find contact status as of date less than, greater than,equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/contacts/{contactId}",
    "method": "getPersonnelContactDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contact",
    "typeScriptTag": "contact",
    "description": "Get all details for a single person assigned to an employee as a contact",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTACTID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "relationshipCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contactId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraIsActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isBeneficiary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isDependent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfCobraEvent",
        "schema": "string",
        "required": false,
        "description": "Used to find date of COBRA event less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "statusAsOfDate",
        "schema": "string",
        "required": false,
        "description": "Used to find contact status as of date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/emp-deductions-benefit-option-change-date",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmpDedBenOptionDate",
    "typeScriptTag": "empDedBenOptionDate",
    "description": "Get Employee Deduction Benefit Option Change Date",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/payroll/v1/direct-deposit",
    "method": "listEmployeeDirectDepositDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DirectDeposit",
    "typeScriptTag": "directDeposit",
    "description": "Get list of direct deposit details for US and Canadian employees",
    "parameters": [
      {
        "name": "accountIsInactive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeBankRoutingNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": "Used to find direct deposit record changed date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/payroll/v1/companies/{companyId}/direct-deposit",
    "method": "listDirectDepositDetailsByCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DirectDeposit",
    "typeScriptTag": "directDeposit",
    "description": "Get list of direct deposit details for US and Canadian employees by company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "accountIsInactive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeBankRoutingNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": "Used to find direct deposit record changed date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/deduction-history-effective-change-dates",
    "method": "getByDeductionCodeAndField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Deduction History Effective Date",
    "typeScriptTag": "employeeDeductionHistoryEffectiveDate",
    "description": "Deductions History Effective Change Date",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sessionDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIELDNAME"
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEDUCTIONCODE"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "400",
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
    "url": "/personnel/v1/employee-demographic-details",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Demographic Details",
    "typeScriptTag": "employeeDemographicDetails",
    "description": "Get Employee Demographic Details",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
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
    "url": "/personnel/v1/employee-education",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeEducation",
    "typeScriptTag": "employeeEducation",
    "description": "Get all education details",
    "parameters": [
      {
        "name": "systemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-extended-elements",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeExtendedElements",
    "typeScriptTag": "employeeExtendedElements",
    "description": "Get Employee Extended Elements",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/employee-employment-details",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeEmploymentDetails",
    "typeScriptTag": "employeeEmploymentDetails",
    "description": "Get Employee Employment Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryWorkLocationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryProjectCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeTypeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originalHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfTermination",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfRetirement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateLastPayDatePaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHomeCompany",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/employee-job-history-details",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeJobHistoryDetail",
    "typeScriptTag": "employeeJobHistoryDetail",
    "description": "Get all employee job history details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isOrgChange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isJobChange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isRateChange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isPromotion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "systemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobEffectiveDate",
        "schema": "string",
        "required": false,
        "description": "Used to find job history effective date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": "Used to find job history created less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-job-history-details/{systemId}",
    "method": "getSingleRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeJobHistoryDetail",
    "typeScriptTag": "employeeJobHistoryDetail",
    "description": "Get a single job history detail record",
    "parameters": [
      {
        "name": "systemId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SYSTEMID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isOrgChange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isJobChange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isRateChange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isPromotion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "systemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobEffectiveDate",
        "schema": "string",
        "required": false,
        "description": "Used to find job history effective date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": "Used to find job history created less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-ids",
    "method": "byCompanyIds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee ID Lookup",
    "typeScriptTag": "employeeIdLookup",
    "description": "Employee ID Lookup",
    "parameters": [],
    "responses": [
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/empl-multiple-jobs",
    "method": "listDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeMultipleJobsOPP",
    "typeScriptTag": "employeeMultipleJobsOpp",
    "description": "Get employee multiple jobs details",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isPrimaryJob",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobIsInActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/employee-multi-phone-numbers",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeMultiPhoneNumbers",
    "typeScriptTag": "employeeMultiPhoneNumbers",
    "description": "Get employee multiple phone numbers",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "systemId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/empl-multiple-positions",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmpMultiplePositions",
    "typeScriptTag": "empMultiplePositions",
    "description": "Get Employee Multiple Positions",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "positionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isPrimary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/national-documents",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "NationalDocument",
    "typeScriptTag": "nationalDocument",
    "description": "All employee national document details",
    "parameters": [
      {
        "name": "contactId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationalDocumentIssuingCountryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/integration/kronos/employee-profiles",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KronosEmployeeProfiles",
    "typeScriptTag": "kronosEmployeeProfiles",
    "description": "Get list of employees profile",
    "parameters": [
      {
        "name": "product",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCT"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "changeWindow",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "includeHistoryIfChangeDetected",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/employee-security-user-details",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Security User Details",
    "typeScriptTag": "employeeSecurityUserDetails",
    "description": "Get employee security user details",
    "parameters": [
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/integration/kronos/employee-status",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "KronosEmployeeStatus",
    "typeScriptTag": "kronosEmployeeStatus",
    "description": "Get Employee Status",
    "parameters": [
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeIds",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "inactiveTermWindow",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "inactiveDisabledWindow",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/payroll/v1/companies/pay-statements-summary",
    "method": "getPaySummaries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CompanyPayStatement",
    "typeScriptTag": "companyPayStatement",
    "description": "Get employee(https://developer.ukg.com/hcm/reference pay statement(https://developer.ukg.com/hcm/reference summary for a company or pay group for a given date range.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "per_Page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pagesCount",
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
        "statusCode": "400",
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/payroll/v1/companies/pay-statements",
    "method": "getByDateRange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "CompanyPayStatement",
    "typeScriptTag": "companyPayStatement",
    "description": "Get employee(https://developer.ukg.com/hcm/reference pay statement(https://developer.ukg.com/hcm/reference for a company or pay group for a given date range.",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATE"
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "per_Page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pagesCount",
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
        "statusCode": "400",
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/payroll/v1/employees/pay-statements",
    "method": "getByDateRange",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EmployeePayStatement",
    "typeScriptTag": "employeePayStatement",
    "description": "Get employee pay statement(https://developer.ukg.com/hcm/reference based on the passed employee identifier for a given date range.",
    "parameters": [
      {
        "name": "employeeIdentifier",
        "schema": "object",
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
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "per_Page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pagesCount",
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
        "statusCode": "400",
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/payroll/v1/employees/pay-statement/last",
    "method": "getLastPayStatement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "EmployeePayStatement",
    "typeScriptTag": "employeePayStatement",
    "description": "Get employee last pay statement based on the passed employee identifier.",
    "parameters": [
      {
        "name": "employeeIdentifier",
        "schema": "object",
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
        "name": "page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "per_Page",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "pagesCount",
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
        "statusCode": "400",
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/payroll/v1/employees/pay-statement/{PayIdentifier}",
    "method": "getByPayIdentifier",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeePayStatement",
    "typeScriptTag": "employeePayStatement",
    "description": "Get employee pay statement based on the given pay identifier.",
    "parameters": [
      {
        "name": "payIdentifier",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYIDENTIFIER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "BadRequest"
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-supervisor-details",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeSupervisorDetails",
    "typeScriptTag": "employeeSupervisorDetails",
    "description": "Get Employee Supervisor Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorCompanyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorEmployeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorCompanyCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/employment-details",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmploymentDetails",
    "typeScriptTag": "employmentDetails",
    "description": "Get Employment Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryWorkLocationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryProjectCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeTypeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originalHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfTermination",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfRetirement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateLastPayDatePaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHomeCompany",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employment-details",
    "method": "listByCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmploymentDetails",
    "typeScriptTag": "employmentDetails",
    "description": "Get Employment Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryWorkLocationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryProjectCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeTypeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originalHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfTermination",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfRetirement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateLastPayDatePaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHomeCompany",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/employment-details",
    "method": "getByCompanyIdAndEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmploymentDetails",
    "typeScriptTag": "employmentDetails",
    "description": "Get Employment Details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryJobCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobTitle",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fullTimeOrPartTimeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryWorkLocationCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "primaryProjectCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "earningGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeTypeCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "supervisorId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "originalHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastHireDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfTermination",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfRetirement",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateLastPayDatePaid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHomeCompany",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "429",
        "description": "429"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/payroll/v2/general-ledger",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GeneralLedgerRunDetailsV2",
    "typeScriptTag": "generalLedgerRunDetailsV2",
    "description": "Returns a list of details for a general ledger run, filterable by runId and blockId",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blockId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mostRecent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/payroll/v2/general-ledger/{runId}",
    "method": "getByRunId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GeneralLedgerRunDetailsV2",
    "typeScriptTag": "generalLedgerRunDetailsV2",
    "description": "Returns a list of details for a general ledger run, filterable by runId and blockId",
    "parameters": [
      {
        "name": "runId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RUNID"
      },
      {
        "name": "runId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "blockId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mostRecent",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-global-banks",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeeGlobalBank",
    "typeScriptTag": "employeeGlobalBank",
    "description": "Get all direct deposit details for global employees",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateModified",
        "schema": "string",
        "required": false,
        "description": "Used to find global employee's direct deposit modified date less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-pay-deduction-elements",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmployeePayDeductionElement",
    "typeScriptTag": "employeePayDeductionElement",
    "description": "Get Global Employee Payments and Deductions Service",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payDeductionName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodStartName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentOrDeductionIndicator",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "modifiedDate",
        "schema": "string",
        "required": false,
        "description": "Used to find a payment or deduction modified less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": "Used to find a payment or deduction where the pay period start is less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": "Used to find a payment or deduction where the pay period end is less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/import-tool",
    "method": "post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ImportTool",
    "typeScriptTag": "importTool",
    "description": "Takes an XML transaction and feeds it into the Import Tool",
    "parameters": [
      {
        "name": "transaction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uniqueFileName",
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
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/import-tool/status/{stagingId}",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ImportTool",
    "typeScriptTag": "importTool",
    "description": "Retrieves the status of an import tool transaction",
    "parameters": [
      {
        "name": "stagingId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STAGINGID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/employee-global-localization-elements",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "EmpGlobalLocalizationElement",
    "typeScriptTag": "empGlobalLocalizationElement",
    "description": "Get all global employee localization fields added to UKG Pro",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "Used to find employee localization fields created less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "effective",
        "schema": "string",
        "required": false,
        "description": "Used to find employee localization fields effective less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/configuration/v1/insurance-rate",
    "method": "getInsRate",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InsRate",
    "typeScriptTag": "insRate",
    "description": "Get Insurance Rate",
    "parameters": [
      {
        "name": "deductionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
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
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/tenants/{tenantIdentifier}/new-hires/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "New Hires",
    "typeScriptTag": "newHires",
    "description": "Gets a single New Hire by Id",
    "parameters": [
      {
        "name": "tenantIdentifier",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the tenant to interact with. Can be either the tenant alias or tenant ID.",
        "example": "TENANTIDENTIFIER"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Unique identifier for the New Hire",
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
    "url": "/tenants/{tenantIdentifier}/new-hires",
    "method": "createSingleNewHire",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "New Hires",
    "typeScriptTag": "newHires",
    "description": "Creates a single New Hire",
    "parameters": [
      {
        "name": "tenantIdentifier",
        "schema": "string",
        "required": true,
        "description": "Unique identifier of the tenant to interact with. Can be either the tenant alias or tenant ID.",
        "example": "TENANTIDENTIFIER"
      },
      {
        "name": "contactInformation",
        "schema": "object",
        "description": "",
        "example": {
          "name": {
            "prefix": {
              "code": "MR"
            },
            "first": "Firstname",
            "middle": "Middlename",
            "last": "Lastname",
            "formerLast": "Formerlastname",
            "suffix": {
              "id": "ba00d403-e240-4c16-b894-92036dbb4b0fX"
            }
          },
          "emailAddress": "first@last.com",
          "primaryPhone": "954-687-8909",
          "secondaryPhone": "9545554567",
          "address": {
            "line1": "Line 1",
            "line2": "Line 2",
            "city": "Weston",
            "zipCode": "33326",
            "county": "Broward",
            "stateCode": "FL",
            "countryCode": "USA"
          }
        }
      },
      {
        "name": "job",
        "schema": "object",
        "description": "",
        "example": {
          "code": "MGT",
          "requisitionId": "1234",
          "selectedFLSAStatus": 1,
          "componentCompany": {
            "code": "FZAJ2"
          },
          "workLocation": {
            "code": "QU4FL"
          },
          "supervisor": {
            "code": "89F8FA04-7055-47D2-943B-D2A409FFA3BF"
          },
          "employeeType": {
            "code": "INT"
          }
        }
      },
      {
        "name": "organizationLevels",
        "schema": "array",
        "description": ""
      },
      {
        "name": "compensation",
        "schema": "object",
        "description": "",
        "example": {
          "isFullTime": true,
          "isSalaried": false,
          "workHours": 40,
          "weeklyHours": 168,
          "currencyCode": "USD",
          "payRate": 20,
          "ratePer": "H"
        }
      },
      {
        "name": "onboardingOwnerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "hireDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "orientationDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pastStartDateReason",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mentor",
        "schema": "object",
        "description": "",
        "example": {
          "prefix": {
            "description": "Suzie is THE person who knows the product best. She loves helping new team members.",
            "id": "ba00d403-e240-4c16-b894-92036dbb4b0fX",
            "code": "MR"
          }
        }
      },
      {
        "name": "personalMessage",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/hoursWorked",
    "method": "addTimeEntries",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "time",
    "typeScriptTag": "time",
    "description": "Add hours worked entries",
    "parameters": [
      {
        "name": "xCorrelationId",
        "schema": "string",
        "required": true,
        "description": "This value MUST be supplied by the originator, used for tracing",
        "example": "X-CORRELATION-ID"
      },
      {
        "name": "usTenantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US-TENANT-ID"
      },
      {
        "name": "timeData",
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
        "description": "Bad Request"
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
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/personnel/v1/integration-audit-configuration",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "IntegrationAuditConfiguration",
    "typeScriptTag": "integrationAuditConfiguration",
    "description": "Get Integration Audit Configuration Data",
    "parameters": [
      {
        "name": "tableName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fieldName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "400",
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
    "url": "/personnel/v1/international-employees",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InternationalEmployee",
    "typeScriptTag": "internationalEmployee",
    "description": "Get international employee details for all employees",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/international-employees/{employeeId}",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "InternationalEmployee",
    "typeScriptTag": "internationalEmployee",
    "description": "Get a single employees international details",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/configuration/v1/jobgroup",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "JobGroup",
    "typeScriptTag": "jobGroup",
    "description": "Get All Job Groups",
    "parameters": [
      {
        "name": "jobGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "jobGroupCountryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/locations/{code}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locations",
    "typeScriptTag": "locations",
    "description": "Retrieve a single location configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "location code.",
        "example": "CODE"
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
    "url": "/jobs/{code}",
    "method": "getConfiguration",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieve a single job configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Job code.",
        "example": "CODE"
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
    "url": "/configuration/v1/option-rate",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OptionRate",
    "typeScriptTag": "optionRate",
    "description": "Get Option Rate Data",
    "parameters": [
      {
        "name": "deductionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "benefitOption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveDate",
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
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/open-enrollment-emp-deductions",
    "method": "getAuditDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenEnrollmentEmployeeDeductions",
    "typeScriptTag": "openEnrollmentEmployeeDeductions",
    "description": "Get Open Enrollment Employee Deductions",
    "parameters": [
      {
        "name": "startDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATETIME"
      },
      {
        "name": "endDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATETIME"
      },
      {
        "name": "sessionType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONTYPE"
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEDUCTIONCODE"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/signin/oauth2/t/{tenant-name}/access_token",
    "method": "obtainOAuthToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Post new token request",
    "typeScriptTag": "postNewTokenRequest",
    "description": "Obtain new oAuth token",
    "parameters": [
      {
        "name": "tenantName",
        "schema": "string",
        "required": true,
        "description": "Tenant Name provided to you from UltiPro",
        "example": "TENANT-NAME"
      },
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
      },
      {
        "name": "scope",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCOPE"
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
    "url": "/personnel/v1/open-enrollment-dep-deductions",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OpenEnrollmentDependentDeductions",
    "typeScriptTag": "openEnrollmentDependentDeductions",
    "description": "Get Open Enrollment Dependent Deductions Data",
    "parameters": [
      {
        "name": "startDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATETIME"
      },
      {
        "name": "endDateTime",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDDATETIME"
      },
      {
        "name": "sessionType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SESSIONTYPE"
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEDUCTIONCODE"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "400",
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
    "url": "/configuration/v1/org-levels/{level}/{code}",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Single Organization Level",
    "typeScriptTag": "singleOrganizationLevel",
    "description": "Get single org-level",
    "parameters": [
      {
        "name": "level",
        "schema": "string",
        "required": true,
        "description": "Description of the org-level.",
        "example": "LEVEL"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Organization code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/configuration/v1/org-levels/{level}/{code}",
    "method": "updateProperties",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Single Organization Level",
    "typeScriptTag": "singleOrganizationLevel",
    "description": "Patch one org-level",
    "parameters": [
      {
        "name": "level",
        "schema": "string",
        "required": true,
        "description": "Description of the org-level.",
        "example": "LEVEL"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Organization code.",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "budgetGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "currentYearBudgetFTE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "currentYearBudgetSalary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "glSegment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastYearBudgetFTE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lastYearBudgetSalary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "level",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "levelDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reportingCategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isActive",
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
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/configuration/v1/org-levels/{level}/{code}",
    "method": "updateOrgLevel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Single Organization Level",
    "typeScriptTag": "singleOrganizationLevel",
    "description": "Update one org-level",
    "parameters": [
      {
        "name": "level",
        "schema": "string",
        "required": true,
        "description": "Description of the org-level.",
        "example": "LEVEL"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Organization code.",
        "example": "CODE"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "budgetGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "currentYearBudgetFTE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "currentYearBudgetSalary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "glSegment",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastYearBudgetFTE",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "lastYearBudgetSalary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "level",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "levelDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reportingCategory",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isActive",
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
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/configuration/v1/org-levels",
    "method": "getAllOrgLevels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "View or Create Organization Levels",
    "typeScriptTag": "viewOrCreateOrganizationLevels",
    "description": "Get all org-levels",
    "parameters": [
      {
        "name": "levelDescription",
        "schema": "string",
        "required": false,
        "description": "Description of the org-level."
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "Organization code."
      },
      {
        "name": "budgetGroup",
        "schema": "string",
        "required": false,
        "description": "Organizational budget group."
      },
      {
        "name": "reportingCategory",
        "schema": "string",
        "required": false,
        "description": "Reporting category."
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "Active status."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/configuration/v1/org-levels",
    "method": "createOrgLevelConfig",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "View or Create Organization Levels",
    "typeScriptTag": "viewOrCreateOrganizationLevels",
    "description": "Create org-level configuration",
    "parameters": [],
    "responses": [
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/payroll/v1/pay-register",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayRegister",
    "typeScriptTag": "payRegister",
    "description": "Get Pay Register",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "checkId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodEndDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodStartDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/payroll/v1/paygroup-payperiods",
    "method": "getPayGroupPayPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayGroupPayPeriod",
    "typeScriptTag": "payGroupPayPeriod",
    "description": "Get PayGroup PayPeriods",
    "parameters": [
      {
        "name": "payDateSeq",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "periodEndDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodStartDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startPerControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endPerControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/configuration/v1/organization-reporting-category",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Organization Reporting Category",
    "typeScriptTag": "organizationReportingCategory",
    "description": "Get Organization Reporting Category",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
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
    "url": "/payroll/v1/payroll-deductions-history",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PayrollDeductionsHistory",
    "typeScriptTag": "payrollDeductionsHistory",
    "description": "Get Payroll Deductions History",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "checkId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeNumber",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "deductionType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "benefitOption",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "benefitProvider",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "periodControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is401K",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is403B",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is408K",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is408P",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is457",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is457B",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is457F",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is501C",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isD125",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isDeductionOffSet",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isDeferredCompensation",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isDependentCare",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isHousing",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isNonQualifiedPlan",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startPerControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endPerControl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/platform-configuration-fields/class-name/{className}",
    "method": "getFieldsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v1 PlatformConfigurationCustomFieldsData",
    "typeScriptTag": "v1PlatformConfigurationCustomFieldsData",
    "description": "Platform Configuration Fields Data v1",
    "parameters": [
      {
        "name": "className",
        "schema": "string",
        "required": true,
        "description": "The name of a supported class, as listed above, to pull custom fields from.",
        "example": "CLASSNAME"
      },
      {
        "name": "keyName",
        "schema": "string",
        "required": false,
        "description": "Optional keyName to allow filtering results by the corresponding keyValue. keyNames are specific IDs that apply to the class in question."
      },
      {
        "name": "keyValue",
        "schema": "string",
        "required": false,
        "description": "Optional keyValue. Allows filtering results to only include a specific keyValue(https://developer.ukg.com/hcm/reference. keyValues correspond to a supplied keyName."
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "The exact name of a custom field or fields in a comma seperated list. Filters results to only fields with those names."
      },
      {
        "name": "employmentStatus",
        "schema": "string",
        "required": false,
        "description": "Use in junction with employment specific queries to filter custom field results by an internal employment status."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Offsets results. Used with page number to allow filtering results to a specific range of custom fields."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Offsets results. Used with page to allow filtering results to a specific range of custom fields."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v2/platform-configuration-fields/class-name/{className}",
    "method": "getFieldsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "v2 PlatformConfigurationCustomFieldsData",
    "typeScriptTag": "v2PlatformConfigurationCustomFieldsData",
    "description": "Platform Configuration Fields Data v2",
    "parameters": [
      {
        "name": "className",
        "schema": "string",
        "required": true,
        "description": "The name of a supported class, as listed above, to pull custom fields from.",
        "example": "CLASSNAME"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "The exact name of a custom field or fields in a comma seperated list. Filters results to only fields with those names."
      },
      {
        "name": "keyValue",
        "schema": "string",
        "required": false,
        "description": "keyValue to filter results by, allowing filtering by specific Ids. This value is dependent on the className, as listed in the implementation notes."
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Offsets results. Used with page number to allow filtering results to a certain range of custom fields."
      },
      {
        "name": "perPage",
        "schema": "integer",
        "required": false,
        "description": "Offsets results. Used with page to allow filtering results to a certain range of custom fields."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/person-details",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PersonDetails",
    "typeScriptTag": "personDetails",
    "description": "Get all person details",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraIsActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfCobraEvent",
        "schema": "string",
        "required": false,
        "description": "Used to find date of COBRA event less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": "Used to find person record created less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": "Used to find person record changed less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "nationalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationalIdCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/person-details",
    "method": "getSingleCompanyDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PersonDetails",
    "typeScriptTag": "personDetails",
    "description": "Get all person details for a single company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraIsActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfCobraEvent",
        "schema": "string",
        "required": false,
        "description": "Used to find date of COBRA event less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": "Used to find person record created less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": "Used to find person record changed less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "nationalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationalIdCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/person-details",
    "method": "getSingleRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PersonDetails",
    "typeScriptTag": "personDetails",
    "description": "Get a single person detail record for a single company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailAddress",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressState",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "addressCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraIsActive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cobraStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfCobraEvent",
        "schema": "string",
        "required": false,
        "description": "Used to find date of COBRA event less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeCreated",
        "schema": "string",
        "required": false,
        "description": "Used to find person record created less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "dateTimeChanged",
        "schema": "string",
        "required": false,
        "description": "Used to find person record changed less than, greater than, equal to, or between passed date(https://developer.ukg.com/hcm/reference"
      },
      {
        "name": "nationalId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationalIdCountry",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/personnel/v1/person-details/{employeeId}",
    "method": "getSingleDetailRecord",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PersonDetails",
    "typeScriptTag": "personDetails",
    "description": "Get a single person detail record",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/services/payroll/v1/import-pay-items/earnings",
    "method": "addTimeClockData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Add UKG Pro time clock data",
    "parameters": [
      {
        "name": "xCorrelationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-CORRELATION-ID"
      },
      {
        "name": "usClientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US-CLIENT-ID"
      },
      {
        "name": "failAllOnRequest",
        "schema": "boolean",
        "description": "failAllOnRequest, evaluating this to true will cause the entire request to fail given any errors, otherwise valid earnings will be staged for import.",
        "default": true
      },
      {
        "name": "earnings",
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
        "statusCode": "207",
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
    "url": "/services/payroll/v1/import-pay-items/earnings/{refId}",
    "method": "deleteEarning",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Delete a earning",
    "parameters": [
      {
        "name": "xCorrelationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-CORRELATION-ID"
      },
      {
        "name": "usClientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US-CLIENT-ID"
      },
      {
        "name": "refId",
        "schema": "string",
        "required": true,
        "description": "Earning unique Identifier for earning",
        "example": "REFID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Deleted"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "405",
        "description": "Method not allowed"
      }
    ]
  },
  {
    "url": "/services/payroll/v1/import-pay-items/earnings/{refId}",
    "method": "getStatusDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Earnings",
    "typeScriptTag": "earnings",
    "description": "Get status details for specified earning",
    "parameters": [
      {
        "name": "xCorrelationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "X-CORRELATION-ID"
      },
      {
        "name": "usClientId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "US-CLIENT-ID"
      },
      {
        "name": "refId",
        "schema": "string",
        "required": true,
        "description": "Earning unique Identifier for earning",
        "example": "REFID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      }
    ]
  },
  {
    "url": "/configuration/v1/platform-configuration/custom-fields-schema",
    "method": "getFieldsSchema",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlatformConfigurationCustomFieldsSchema",
    "typeScriptTag": "platformConfigurationCustomFieldsSchema",
    "description": "Gets Platform Configuration standard classes custom fields schema",
    "parameters": [
      {
        "name": "className",
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
        "statusCode": "404",
        "description": "NotFound"
      },
      {
        "statusCode": "500",
        "description": "InternalServerError"
      }
    ]
  },
  {
    "url": "/personnel/v1/position-report",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PositionReport",
    "typeScriptTag": "positionReport",
    "description": "Get Position Report",
    "parameters": [
      {
        "name": "positionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reportsToPositionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveStartDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "effectiveStopDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/configuration/v1/positions",
    "method": "listFiltered",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Positions",
    "typeScriptTag": "positions",
    "description": "Returns list of employee position information filtered on various parameters",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeType",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "payGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "positionCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "projectCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shiftGroupCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "isProrated",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isApproved",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "isEligibleForBenefits",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
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
    "url": "/personnel/v1/pto-plans",
    "method": "information",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get All PTO Plans",
    "typeScriptTag": "getAllPtoPlans",
    "description": "Get all pto-plans",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Pagination, which page you want to see"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Pagination, how many records per page you want to see"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/pto-plans",
    "method": "ultiproRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "PTO Plan Post",
    "typeScriptTag": "ptoPlanPost",
    "description": "Create A PTO Plan",
    "parameters": [],
    "responses": [
      {
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/pto-plans/{ptoPlan}",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Specific PTO Plan",
    "typeScriptTag": "getSpecificPtoPlan",
    "description": "Get a specific pto-plan",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company Identifier",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee Identifier",
        "example": "EMPLOYEEID"
      },
      {
        "name": "ptoPlan",
        "schema": "string",
        "required": true,
        "description": "PTO Plan Identifier",
        "example": "PTOPLAN"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/pto-plans/{ptoPlan}",
    "method": "onePtoPlan",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "PTO Plan Patch",
    "typeScriptTag": "ptoPlanPatch",
    "description": "Patch one PTO Plan",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company Identifier",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee Identifier",
        "example": "EMPLOYEEID"
      },
      {
        "name": "ptoPlan",
        "schema": "string",
        "required": true,
        "description": "PTO Plan Identifier",
        "example": "PTOPLAN"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "ptoPlan",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PTOPLAN"
      },
      {
        "name": "earned",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "taken",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "pendingBalance",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "earnedThroughDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reset",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pendingMoveDate",
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
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/pto-plans",
    "method": "info",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Specific Employees PTO Plans",
    "typeScriptTag": "getSpecificEmployeesPtoPlans",
    "description": "Get a specific employees pto-plans",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "Company Identifier",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee Identifier",
        "example": "EMPLOYEEID"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Pagination, which page you want to see"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Pagination, how many records per page you want to see"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/configuration/v1/roles",
    "method": "securityRoles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "RolesGet",
    "typeScriptTag": "rolesGet",
    "description": "Gets Roles from security roles table",
    "parameters": [
      {
        "name": "rolName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/configuration/v1/shift-codes",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ShiftCode",
    "typeScriptTag": "shiftCode",
    "description": "Shift Codes API Data",
    "parameters": [
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
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
    "url": "/configuration/v1/tax-groups",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tax Groups",
    "typeScriptTag": "taxGroups",
    "description": "Get all tax group details",
    "parameters": [
      {
        "name": "taxCalcGroupIdCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "taxGroupIsInactive",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
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
    "url": "/talent/recruiting/v2/third-party-job-board-integrations/{integrationId}/postings",
    "method": "details",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Get Job Postings",
    "typeScriptTag": "getJobPostings",
    "description": "Get job postings",
    "parameters": [
      {
        "name": "integrationId",
        "schema": "string",
        "required": true,
        "description": "A unique integration id provided by Ultimate Software to the Partner during the integration registration process.\n",
        "example": "INTEGRATIONID"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Pagination page number"
      },
      {
        "name": "perPage",
        "schema": "number",
        "required": false,
        "description": "Pagination amount of records per page to display",
        "default": 30
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      },
      {
        "statusCode": "404",
        "description": "Not Found"
      },
      {
        "statusCode": "429",
        "description": "Too Many Requests (Exceeded Rate Limit)"
      }
    ]
  },
  {
    "url": "/personnel/v1/user-details",
    "method": "getUserDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserDetails",
    "typeScriptTag": "userDetails",
    "description": "Get User Details",
    "parameters": [
      {
        "name": "userName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/user-preferences",
    "method": "getUserPreferencesDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Preferences",
    "typeScriptTag": "userPreferences",
    "description": "Get User Preferences Details",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/simpleschedule/activities",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Activities",
    "typeScriptTag": "activities",
    "description": "Obtains all activities.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/simpleschedule/assigned_holidays",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Assigned Holidays",
    "typeScriptTag": "assignedHolidays",
    "description": "Obtains all assigned holidays.",
    "parameters": [
      {
        "name": "empName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "empId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start range for holidays",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End range for holidays",
        "example": "TO"
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
    "url": "/simpleschedule/employee_jobs",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Jobs",
    "typeScriptTag": "employeeJobs",
    "description": "Obtains all jobs for an employee.",
    "parameters": [
      {
        "name": "empName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "empId",
        "schema": "integer",
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
    "url": "/simpleschedule/employees",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Obtains all employees.",
    "parameters": [
      {
        "name": "index",
        "schema": "integer",
        "required": false,
        "description": "Index when paging is to be used."
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": "Max elements per page"
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
    "url": "/simpleschedule/hour_types",
    "method": "obtainAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Hour Types",
    "typeScriptTag": "hourTypes",
    "description": "Obtains all hour types.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/simpleschedule/schedule_details",
    "method": "publishDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Schedule Details",
    "typeScriptTag": "scheduleDetails",
    "description": "Publish schedule details.",
    "parameters": [
      {
        "name": "scheduleDetails",
        "schema": "array",
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
        "statusCode": "207",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/simpleschedule/teams",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Teams",
    "typeScriptTag": "teams",
    "description": "Obtains all teams.",
    "parameters": [
      {
        "name": "index",
        "schema": "integer",
        "required": false,
        "description": "Index when paging is to be used."
      },
      {
        "name": "max",
        "schema": "integer",
        "required": false,
        "description": "Max elements per page"
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
    "url": "/simpleschedule/time_codes",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Codes",
    "typeScriptTag": "timeCodes",
    "description": "Obtains all time codes.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/simpleschedule/timeoff_requests",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Off Requests",
    "typeScriptTag": "timeOffRequests",
    "description": "Obtains all time off requests.",
    "parameters": [
      {
        "name": "empName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "empId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start range for requests",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End range for requests",
        "example": "TO"
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
    "url": "/simpleschedule/{coid}/employees/{eeid}",
    "method": "getByCoIdAndEeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UTA Employee",
    "typeScriptTag": "utaEmployee",
    "description": "Obtains a UTA Employee by coId and eeId.",
    "parameters": [
      {
        "name": "coid",
        "schema": "string",
        "required": true,
        "description": "coid of employee.",
        "example": "COID"
      },
      {
        "name": "eeid",
        "schema": "string",
        "required": true,
        "description": "eeid of employee.",
        "example": "EEID"
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
    "url": "/allergy/{code}",
    "method": "updateSingleConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "allergy",
    "typeScriptTag": "allergy",
    "description": "Update a single allergy configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/awardType/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "awardType",
    "typeScriptTag": "awardType",
    "description": "Update a single awardType configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/careerProvider/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "careerProvider",
    "typeScriptTag": "careerProvider",
    "description": "Update a single careerProvider configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/childSupportType/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "childSupportType",
    "typeScriptTag": "childSupportType",
    "description": "Update a single childSupportType configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/cobraStatus/{code}",
    "method": "updateSingleConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "cobraStatus",
    "typeScriptTag": "cobraStatus",
    "description": "Update a single cobraStatus configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/companyProperty/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "companyProperty",
    "typeScriptTag": "companyProperty",
    "description": "Update a single companyProperty configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseCategory/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "courseCategory",
    "typeScriptTag": "courseCategory",
    "description": "Update a single courseCategory configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseDeliveryMet/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "courseDeliveryMet",
    "typeScriptTag": "courseDeliveryMet",
    "description": "Update a single courseDeliveryMet configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseSubCategory/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "courseSubCategory",
    "typeScriptTag": "courseSubCategory",
    "description": "Update a single courseSubCategory configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/disability/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "disability",
    "typeScriptTag": "disability",
    "description": "Update a single disability configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/employeeType/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "employeeType",
    "typeScriptTag": "employeeType",
    "description": "Update a single employeeType configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/jobFamily/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "jobFamily",
    "typeScriptTag": "jobFamily",
    "description": "Update a single jobFamily configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/licenseType/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "licenseType",
    "typeScriptTag": "licenseType",
    "description": "Update a single licenseType configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/loanType/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "loanType",
    "typeScriptTag": "loanType",
    "description": "Update a single loanType configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/maritalStatus/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "maritalStatus",
    "typeScriptTag": "maritalStatus",
    "description": "Update a single maritalStatus configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/militaryBranches/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "militaryBranches",
    "typeScriptTag": "militaryBranches",
    "description": "Update a single militaryBranches configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/militaryEra/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "militaryEra",
    "typeScriptTag": "militaryEra",
    "description": "Update a single militaryEra configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/namePrefix/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "namePrefix",
    "typeScriptTag": "namePrefix",
    "description": "Update a single namePrefix configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/otherPhoneTypes/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "otherPhoneTypes",
    "typeScriptTag": "otherPhoneTypes",
    "description": "Update a single otherPhoneTypes configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/project/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Update a single project configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/school/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "school",
    "typeScriptTag": "school",
    "description": "Update a single school configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/skillProficiencyLevel/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "skillProficiencyLevel",
    "typeScriptTag": "skillProficiencyLevel",
    "description": "Update a single skillProficiencyLevel configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/skills/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "skills",
    "typeScriptTag": "skills",
    "description": "Update a single skills configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/termType/{code}",
    "method": "updateConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "termType",
    "typeScriptTag": "termType",
    "description": "Update a single termType configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/waiveReason/{code}",
    "method": "updateSingleConfiguration",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "waiveReason",
    "typeScriptTag": "waiveReason",
    "description": "Update a single waiveReason configuration",
    "parameters": [
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "Project code.",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/personnel/v1/user-profile-details",
    "method": "getAllDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Profile Details",
    "typeScriptTag": "userProfileDetails",
    "description": "Get all user profile details",
    "parameters": [
      {
        "name": "masterCompany",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "roleId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
        "statusCode": "404",
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
    "url": "/time/clock_transactions",
    "method": "getProcessedTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "time",
    "typeScriptTag": "time",
    "description": "Get processed clock transactions.",
    "parameters": [
      {
        "name": "empName",
        "schema": "string",
        "required": false,
        "description": "Employee can be specified by their emp_name or emp_id.  At least one parameter must be specified."
      },
      {
        "name": "empId",
        "schema": "integer",
        "required": false,
        "description": "Employee can be specified by their emp_name or emp_id.  At least one parameter must be specified."
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "Date of clock transaction",
        "example": "DATE"
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
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/time/pending_clock_transactions",
    "method": "getPendingTransactions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "time",
    "typeScriptTag": "time",
    "description": "Get pending clock transactions.",
    "parameters": [
      {
        "name": "empName",
        "schema": "string",
        "required": false,
        "description": "Employee can be specified by their emp_name or emp_id.  At least one parameter must be specified."
      },
      {
        "name": "empId",
        "schema": "integer",
        "required": false,
        "description": "Employee can be specified by their emp_name or emp_id.  At least one parameter must be specified."
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
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/time/work_summaries",
    "method": "getWorkSummaries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "time",
    "typeScriptTag": "time",
    "description": "Obtain work summaries.",
    "parameters": [
      {
        "name": "empName",
        "schema": "string",
        "required": false,
        "description": "Employee can be specified by their emp_name or emp_id.  At least one parameter must be specified."
      },
      {
        "name": "empId",
        "schema": "integer",
        "required": false,
        "description": "Employee can be specified by their emp_name or emp_id.  At least one parameter must be specified."
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Start range for work summaries",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "End range for work summaries",
        "example": "TO"
      },
      {
        "name": "full",
        "schema": "boolean",
        "required": false,
        "description": "Specifies if both clock and work detail data should be loaded",
        "default": false
      },
      {
        "name": "authStatus",
        "schema": "boolean",
        "required": false,
        "description": "If specified will load only work summaries with Authorized status equal to true or false"
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
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/time/work_summary",
    "method": "getWorkSummaryById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "time",
    "typeScriptTag": "time",
    "description": "Obtain a work summary.",
    "parameters": [
      {
        "name": "workSummaryId",
        "schema": "integer",
        "required": true,
        "description": "Work Summary id",
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
        "statusCode": "429",
        "description": "Too many requests"
      }
    ]
  },
  {
    "url": "/personnel/v1/user-defined-fields",
    "method": "get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserDefinedFields",
    "typeScriptTag": "userDefinedFields",
    "description": "Get User Defined Fields",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/companies/{companyId}/user-defined-fields",
    "method": "getSingleCompany",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserDefinedFields",
    "typeScriptTag": "userDefinedFields",
    "description": "Get User Defined Fields for single company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/personnel/v1/companies/{companyId}/employees/{employeeId}/user-defined-fields",
    "method": "getSingleEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserDefinedFields",
    "typeScriptTag": "userDefinedFields",
    "description": "Get User Defined Fields for a single employee in a single company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "perPage",
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
    "url": "/locations",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "locations",
    "typeScriptTag": "locations",
    "description": "Retrieve all locations configurations",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "location country code."
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "Active status."
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/jobs",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobs",
    "typeScriptTag": "jobs",
    "description": "Retrieve all jobs configurations",
    "parameters": [
      {
        "name": "countryCode",
        "schema": "string",
        "required": false,
        "description": "Job country code."
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": "Active status."
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
        "description": "Unauthorized"
      },
      {
        "statusCode": "403",
        "description": "Forbidden"
      }
    ]
  },
  {
    "url": "/allergy",
    "method": "configurationsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "allergy",
    "typeScriptTag": "allergy",
    "description": "Retrieve all allergy configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/allergy",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "allergy",
    "typeScriptTag": "allergy",
    "description": "Create a new allergy configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The allergy provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/awardType",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "awardType",
    "typeScriptTag": "awardType",
    "description": "Retrieve all awardType configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/awardType",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "awardType",
    "typeScriptTag": "awardType",
    "description": "Create a new awardType configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The awardType provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/careerProvider",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "careerProvider",
    "typeScriptTag": "careerProvider",
    "description": "Retrieve all careerProvider configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/careerProvider",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "careerProvider",
    "typeScriptTag": "careerProvider",
    "description": "Create a new careerProvider configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The careerProvider provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/childSupportType",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "childSupportType",
    "typeScriptTag": "childSupportType",
    "description": "Retrieve all childSupportType configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/childSupportType",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "childSupportType",
    "typeScriptTag": "childSupportType",
    "description": "Create a new childSupportType configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The childSupportType provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/cobraStatus",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "cobraStatus",
    "typeScriptTag": "cobraStatus",
    "description": "Retrieve all cobraStatus configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/cobraStatus",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "cobraStatus",
    "typeScriptTag": "cobraStatus",
    "description": "Create a new cobraStatus configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The cobraStatus provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/companyProperty",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "companyProperty",
    "typeScriptTag": "companyProperty",
    "description": "Retrieve all companyProperty configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/companyProperty",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "companyProperty",
    "typeScriptTag": "companyProperty",
    "description": "Create a new companyProperty configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The companyProperty provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseCategory",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "courseCategory",
    "typeScriptTag": "courseCategory",
    "description": "Retrieve all courseCategory configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseCategory",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "courseCategory",
    "typeScriptTag": "courseCategory",
    "description": "Create a new courseCategory configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The courseCategory provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseDeliveryMet",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "courseDeliveryMet",
    "typeScriptTag": "courseDeliveryMet",
    "description": "Retrieve all courseDeliveryMet configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseDeliveryMet",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "courseDeliveryMet",
    "typeScriptTag": "courseDeliveryMet",
    "description": "Create a new courseDeliveryMet configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The courseDeliveryMet provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseSubCategory",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "courseSubCategory",
    "typeScriptTag": "courseSubCategory",
    "description": "Retrieve all courseSubCategory configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/courseSubCategory",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "courseSubCategory",
    "typeScriptTag": "courseSubCategory",
    "description": "Create a new courseSubCategory configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The courseSubCategory provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/disability",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "disability",
    "typeScriptTag": "disability",
    "description": "Retrieve all disability configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/disability",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "disability",
    "typeScriptTag": "disability",
    "description": "Create a new disability configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The disability provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/employeeType",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "employeeType",
    "typeScriptTag": "employeeType",
    "description": "Retrieve all employeeType configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/employeeType",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "employeeType",
    "typeScriptTag": "employeeType",
    "description": "Create a new employeeType configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The employeeType provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/jobFamily",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "jobFamily",
    "typeScriptTag": "jobFamily",
    "description": "Retrieve all jobFamily configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/jobFamily",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "jobFamily",
    "typeScriptTag": "jobFamily",
    "description": "Create a new jobFamily configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The jobFamily provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/licenseType",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "licenseType",
    "typeScriptTag": "licenseType",
    "description": "Retrieve all licenseType configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/licenseType",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "licenseType",
    "typeScriptTag": "licenseType",
    "description": "Create a new licenseType configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The licenseType provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/loanType",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "loanType",
    "typeScriptTag": "loanType",
    "description": "Retrieve all loanType configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/loanType",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "loanType",
    "typeScriptTag": "loanType",
    "description": "Create a new loanType configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The loanType provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/maritalStatus",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "maritalStatus",
    "typeScriptTag": "maritalStatus",
    "description": "Retrieve all maritalStatus configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/maritalStatus",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "maritalStatus",
    "typeScriptTag": "maritalStatus",
    "description": "Create a new maritalStatus configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The maritalStatus provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/militaryBranches",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "militaryBranches",
    "typeScriptTag": "militaryBranches",
    "description": "Retrieve all militaryBranches configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/militaryBranches",
    "method": "configureUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "militaryBranches",
    "typeScriptTag": "militaryBranches",
    "description": "Create a new militaryBranches configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The militaryBranches provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/militaryEra",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "militaryEra",
    "typeScriptTag": "militaryEra",
    "description": "Retrieve all militaryEra configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/militaryEra",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "militaryEra",
    "typeScriptTag": "militaryEra",
    "description": "Create a new militaryEra configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The militaryEra provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/namePrefix",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "namePrefix",
    "typeScriptTag": "namePrefix",
    "description": "Retrieve all namePrefix configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/namePrefix",
    "method": "configureNamePrefix",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "namePrefix",
    "typeScriptTag": "namePrefix",
    "description": "Create a new namePrefix configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The namePrefix provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/otherPhoneTypes",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "otherPhoneTypes",
    "typeScriptTag": "otherPhoneTypes",
    "description": "Retrieve all otherPhoneTypes configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/otherPhoneTypes",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "otherPhoneTypes",
    "typeScriptTag": "otherPhoneTypes",
    "description": "Create a new otherPhoneTypes configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The otherPhoneTypes provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/project",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Retrieve all Project configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/project",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "project",
    "typeScriptTag": "project",
    "description": "Create a new project configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The project provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/school",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "school",
    "typeScriptTag": "school",
    "description": "Retrieve all school configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/school",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "school",
    "typeScriptTag": "school",
    "description": "Create a new school configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The school provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/skillProficiencyLevel",
    "method": "getAllConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "skillProficiencyLevel",
    "typeScriptTag": "skillProficiencyLevel",
    "description": "Retrieve all skillProficiencyLevel configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/skillProficiencyLevel",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "skillProficiencyLevel",
    "typeScriptTag": "skillProficiencyLevel",
    "description": "Create a new skillProficiencyLevel configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The skillProficiencyLevel provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/skills",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "skills",
    "typeScriptTag": "skills",
    "description": "Retrieve all skills configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/skills",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "skills",
    "typeScriptTag": "skills",
    "description": "Create a new skills configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The skills provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/termType",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "termType",
    "typeScriptTag": "termType",
    "description": "Retrieve all termType configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/termType",
    "method": "createConfiguration",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "termType",
    "typeScriptTag": "termType",
    "description": "Create a new termType configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The termType provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/waiveReason",
    "method": "getConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "waiveReason",
    "typeScriptTag": "waiveReason",
    "description": "Retrieve all waiveReason configurations",
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
        "description": "Unauthorized"
      }
    ]
  },
  {
    "url": "/waiveReason",
    "method": "createConfigurationUkgPro",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "waiveReason",
    "typeScriptTag": "waiveReason",
    "description": "Create a new waiveReason configuration",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The waiveReason provided has been created."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": "Unauthorized"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="User Profile Details"
      apiBaseUrl="{tenantId}.{hostname}"
      apiVersion="v1"
      endpoints={239}
      sdkMethods={374}
      schemas={488}
      parameters={1389}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ukg/openapi.yaml"
      developerDocumentation="developer.ukg.com/hcm/reference"
    />
  );
}
  