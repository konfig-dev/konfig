import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SesameHrTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="sesame-hr-typescript-sdk"
      metaDescription={`Sesame HR provides a comprehensive HR management platform that streamlines processes such as employee onboarding, time tracking, performance management, and payroll. Their intuitive interface and automation tools help businesses of all sizes efficiently manage their human resources tasks.`}
      company="Sesame HR"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/logo.svg"
      companyKebabCase="sesame-hr"
      clientNameCamelCase="sesameHr"
      homepage="sesamehr.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr"]}
      methods={[
  {
    "url": "/core/v3/info",
    "method": "getTokenInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Security",
    "typeScriptTag": "security",
    "description": "Show Token Info",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/core/v3/companies/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Update a company",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Company ID",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "notificationEmail",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NOTIFICATIONEMAIL"
      },
      {
        "name": "language",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "es-ES"
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
    "url": "/core/v3/employees",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "List employees",
    "parameters": [
      {
        "name": "code",
        "schema": "integer",
        "description": "Find Employee by code"
      },
      {
        "name": "dni",
        "schema": "string",
        "description": "Find Employee by dni"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "Find Employee by email"
      },
      {
        "name": "departmentIds",
        "schema": "array",
        "description": "Find Employee by department Ids"
      },
      {
        "name": "officeIds",
        "schema": "array",
        "description": "Find Employee by office Ids"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit employees"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "<b>Supported operators:</b> in",
        "example": "active"
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
    "url": "/core/v3/employees",
    "method": "createNewEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Create an employee",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
        "name": "invitation",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "gender",
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
        "name": "contractId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pin",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "nid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "identityNumberType",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emergencyPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "childrenCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disability",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "personalEmail",
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
        "name": "province",
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
        "name": "salaryRange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "studyLevel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "professionalCategoryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "professionalCategoryDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bic",
        "schema": "string",
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
    "url": "/core/v3/employees/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Delete an employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "ID"
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
    "url": "/core/v3/employees/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Get an employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "ID"
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
    "url": "/core/v3/employees/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Employees",
    "typeScriptTag": "employees",
    "description": "Update an employee",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
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
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
      },
      {
        "name": "gender",
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
        "name": "contractId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "code",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "pin",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "nid",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "identityNumberType",
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
        "name": "phone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dateOfBirth",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customFields",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "maritalStatus",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "postalCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emergencyPhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "childrenCount",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "disability",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "personalEmail",
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
        "name": "province",
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
        "name": "salaryRange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "studyLevel",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "professionalCategoryCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "professionalCategoryDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "bic",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "accountNumber",
        "schema": "string",
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
    "url": "/core/v3/employee-managers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Managers",
    "typeScriptTag": "employeeManagers",
    "description": "List employee managers",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Find employee managers by employeeId"
      },
      {
        "name": "managerId",
        "schema": "string",
        "description": "Find employee managers by managerId"
      },
      {
        "name": "permission",
        "schema": "string",
        "required": false,
        "description": "<b>Supported operators:</b> in",
        "example": "check"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit departments"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/core/v3/employee-managers",
    "method": "assign",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Managers",
    "typeScriptTag": "employeeManagers",
    "description": "Assign an employee manager",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "managerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANAGERID"
      },
      {
        "name": "permission",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PERMISSION"
      },
      {
        "name": "order",
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
      }
    ]
  },
  {
    "url": "/core/v3/employee-managers/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Managers",
    "typeScriptTag": "employeeManagers",
    "description": "Delete an employee manager",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Employee manager ID",
        "example": "ID"
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
    "url": "/core/v3/roles",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Roles",
    "typeScriptTag": "roles",
    "description": "List Roles",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit departments"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/core/v3/roles/assignation/{employeeId}",
    "method": "listByEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Assignations Roles",
    "typeScriptTag": "employeeAssignationsRoles",
    "description": "List Assignations Roles by Employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee Id",
        "example": "EMPLOYEEID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit departments"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/core/v3/roles/assignation",
    "method": "unassignRole",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Assignations Roles",
    "typeScriptTag": "employeeAssignationsRoles",
    "description": "Unassign Role",
    "parameters": [
      {
        "name": "assignationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ASSIGNATIONID"
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
    "url": "/core/v3/roles/assignation",
    "method": "assignRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Assignations Roles",
    "typeScriptTag": "employeeAssignationsRoles",
    "description": "Assign Role",
    "parameters": [
      {
        "name": "roleId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ROLEID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "entityAffectedId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENTITYAFFECTEDID"
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
    "url": "/core/v3/departments",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "List departments",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Find Department by name"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit departments"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/core/v3/departments",
    "method": "createNewDepartment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Create a department",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/core/v3/departments/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Delete a department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Department ID",
        "example": "ID"
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
    "url": "/core/v3/departments/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Departments",
    "typeScriptTag": "departments",
    "description": "Update a department",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Department ID",
        "example": "ID"
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
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/core/v3/employee-department-assignations",
    "method": "unassign",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Department Assignations",
    "typeScriptTag": "employeeDepartmentAssignations",
    "description": "Unassign employee from department",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEPARTMENTID"
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
    "url": "/core/v3/employee-department-assignations",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Department Assignations",
    "typeScriptTag": "employeeDepartmentAssignations",
    "description": "List employee department assignation",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Find Assignation by employeeId"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "description": "Find Assignation by departmentId"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit assignations"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/core/v3/employee-department-assignations",
    "method": "assignDepartmentToEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Department Assignations",
    "typeScriptTag": "employeeDepartmentAssignations",
    "description": "Assign an employee to a department",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "departmentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DEPARTMENTID"
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
    "url": "/core/v3/offices",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "List offices",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "description": "Find office by name"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit offices"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/core/v3/offices",
    "method": "createOffice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Create a office",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "coordinates",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "radio",
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
    "url": "/core/v3/offices/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Delete an office",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Office ID",
        "example": "ID"
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
    "url": "/core/v3/offices/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Offices",
    "typeScriptTag": "offices",
    "description": "Update an office",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Office ID",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "coordinates",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "radio",
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
    "url": "/core/v3/employee-office-assignations",
    "method": "unassignEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Office Assignations",
    "typeScriptTag": "employeeOfficeAssignations",
    "description": "Unassign employee from office",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "officeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OFFICEID"
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
    "url": "/core/v3/employee-office-assignations",
    "method": "listAssignations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Office Assignations",
    "typeScriptTag": "employeeOfficeAssignations",
    "description": "List employee office assignation",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Find Assignation by employeeId"
      },
      {
        "name": "officeId",
        "schema": "string",
        "description": "Find Assignation by officeId"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit assignations"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/core/v3/employee-office-assignations",
    "method": "assignEmployeeToOffice",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Office Assignations",
    "typeScriptTag": "employeeOfficeAssignations",
    "description": "Assign an employee to an office",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "officeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "OFFICEID"
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
    "url": "/core/v3/custom-fields",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "List custom fields",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit custom fields"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/core/v3/custom-fields",
    "method": "createField",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Create a custom field",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cf_preferred_os"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
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
    "url": "/core/v3/custom-fields/{id}",
    "method": "deleteField",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Delete a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Custom field ID",
        "example": "ID"
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
    "url": "/core/v3/custom-fields/{id}",
    "method": "updateFieldById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Custom Fields",
    "typeScriptTag": "customFields",
    "description": "Update a custom field",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Custom field ID",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "slug",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "cf_preferred_os"
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
    "url": "/schedule/v1/work-entries/clock-in",
    "method": "startNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Work Entries",
    "typeScriptTag": "workEntries",
    "description": "Starts a new work entry right now",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "workEntryIn",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "workCheckTypeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workBreakId",
        "schema": "string",
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
    "url": "/schedule/v1/work-entries/clock-out",
    "method": "endLastEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Work Entries",
    "typeScriptTag": "workEntries",
    "description": "Ends the last work entry",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "workEntryOut",
        "schema": "undefined",
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
    "url": "/schedule/v1/work-entries",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Entries",
    "typeScriptTag": "workEntries",
    "description": "List Company Work Entries",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "The id of the employee"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Y-m-d"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Y-m-d"
      },
      {
        "name": "updatedAt[gte]",
        "schema": "string",
        "description": "UpdatedAt greater or equal",
        "example": "2020-01-01T10:00:00+01:00"
      },
      {
        "name": "updatedAt[lte]",
        "schema": "string",
        "description": "UpdatedAt lesser or equal",
        "example": "2020-01-01T10:00:00+01:00"
      },
      {
        "name": "onlyReturn",
        "schema": "string",
        "description": "Return specific users",
        "default": "not_deleted"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit work entries",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/schedule/v1/work-entries",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Work Entries",
    "typeScriptTag": "workEntries",
    "description": "Create Work Entry",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "workEntryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKENTRYTYPE"
      },
      {
        "name": "workBreakId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workCheckTypeId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workEntryIn",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "workEntryOut",
        "schema": "undefined",
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
    "url": "/schedule/v1/work-entries/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Work Entries",
    "typeScriptTag": "workEntries",
    "description": "Delete Work Entry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Entry ID",
        "example": "ID"
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
    "url": "/schedule/v1/work-entries/{id}",
    "method": "updateWorkEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Work Entries",
    "typeScriptTag": "workEntries",
    "description": "Update Work Entry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Work Entry ID",
        "example": "ID"
      },
      {
        "name": "workEntryType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKENTRYTYPE"
      },
      {
        "name": "workEntryIn",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "workEntryOut",
        "schema": "undefined",
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
    "url": "/schedule/v1/check-types",
    "method": "listTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check Types",
    "typeScriptTag": "checkTypes",
    "description": "List Check Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/work-breaks",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Work Breaks",
    "typeScriptTag": "workBreaks",
    "description": "List Work Breaks",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/check-validation",
    "method": "listByEmployeesAndStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check Validation",
    "typeScriptTag": "checkValidation",
    "description": "List Check Validation By Employees and Status",
    "parameters": [
      {
        "name": "employeeIds[in]",
        "schema": "array",
        "description": "EmployeeIds to query"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Allowed Status",
        "example": "unsent - sent - accepted - rejected"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "Request a date from",
        "example": "2021-01-01"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Request a date to",
        "example": "2021-12-31"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/reports/worked-hours",
    "method": "listWorkedHoursByEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "List Worked Hours By Employee",
    "parameters": [
      {
        "name": "employeeIds[in]",
        "schema": "array",
        "description": "Array of employee ids"
      },
      {
        "name": "withChecks",
        "schema": "boolean",
        "required": false,
        "description": "true or false"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "TO"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit employees"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/reports/worked-hours-by-week-day",
    "method": "listWorkedHoursByWeekDay",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "List Worked Hours By Employee and Week Day",
    "parameters": [
      {
        "name": "employeeIds[in]",
        "schema": "array",
        "description": "Array of employee ids"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "TO"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit employees"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/reports/worked-night-hours",
    "method": "listWorkedNightHours",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "List Worked Hours By Employee In Night Hours",
    "parameters": [
      {
        "name": "employeeIds[in]",
        "schema": "array",
        "description": "Array of employee ids"
      },
      {
        "name": "withChecks",
        "schema": "boolean",
        "required": false,
        "description": "true or false"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "TO"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit employees"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/reports/worked-absence-days",
    "method": "listWorkedAbsenceDaysByEmployee",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Statistics",
    "typeScriptTag": "statistics",
    "description": "List Worked Absence Days By Employee",
    "parameters": [
      {
        "name": "employeeIds[in]",
        "schema": "array",
        "description": "Array of employee ids"
      },
      {
        "name": "from",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "FROM"
      },
      {
        "name": "to",
        "schema": "string",
        "required": true,
        "description": "Y-m-d",
        "example": "TO"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit employees"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/vacation-configurations",
    "method": "listConfigurations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vacation Configurations",
    "typeScriptTag": "vacationConfigurations",
    "description": "List Vacation Configurations",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/vacation-calendars",
    "method": "listCalendars",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vacation Calendars",
    "typeScriptTag": "vacationCalendars",
    "description": "List Vacation Calendars",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Employee ID"
      },
      {
        "name": "year[in]",
        "schema": "array",
        "description": "Year calendar",
        "example": "2022"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/vacation-calendars",
    "method": "createNewCalendar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacation Calendars",
    "typeScriptTag": "vacationCalendars",
    "description": "Create Vacation Calendar",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "vacationConfigurationId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VACATIONCONFIGURATIONID"
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2021
      },
      {
        "name": "daysOff",
        "schema": "array",
        "required": true,
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
    "url": "/schedule/v1/vacation-calendars/{id}",
    "method": "updateCalendar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Vacation Calendars",
    "typeScriptTag": "vacationCalendars",
    "description": "Update Vacation Calendar",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Calendar ID",
        "example": "ID"
      },
      {
        "name": "daysOff",
        "schema": "array",
        "description": ""
      },
      {
        "name": "maxDaysOff",
        "schema": "integer",
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
    "url": "/schedule/v1/vacation-day-off",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vacation Day Off",
    "typeScriptTag": "vacationDayOff",
    "description": "List Vacation Day Off",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "array",
        "required": false,
        "description": "The id of the employees"
      },
      {
        "name": "from",
        "schema": "string",
        "required": false,
        "description": "First day of search period"
      },
      {
        "name": "to",
        "schema": "string",
        "required": false,
        "description": "Last day of search period"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit vacation requests"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "field1 asc, field2 desc"
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
    "url": "/schedule/v1/vacation-day-off-requests",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Vacation Day Off Requests",
    "typeScriptTag": "vacationDayOffRequests",
    "description": "List Vacation Day Off Requests",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": false,
        "description": "The id of the employee"
      },
      {
        "name": "absencesValidator",
        "schema": "string",
        "required": false,
        "description": "The id of the manager"
      },
      {
        "name": "fromDayOff",
        "schema": "string",
        "required": false,
        "description": "First day of search period"
      },
      {
        "name": "toDayOff",
        "schema": "string",
        "required": false,
        "description": "Last day of search period"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Request status"
      },
      {
        "name": "page",
        "schema": "integer",
        "required": false,
        "description": "Request a specific page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Limit vacation requests"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "required": false,
        "description": "field1 asc, field2 desc"
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
    "url": "/schedule/v1/vacation-day-off-requests",
    "method": "createRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacation Day Off Requests",
    "typeScriptTag": "vacationDayOffRequests",
    "description": "Create Vacation Day Off Request",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "calendarId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CALENDARID"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "daysOff",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
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
    "url": "/schedule/v1/vacation-day-off-requests/{id}/accept",
    "method": "acceptRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacation Day Off Requests",
    "typeScriptTag": "vacationDayOffRequests",
    "description": "Accept Vacation Day Off Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Day Off Request Id",
        "example": "ID"
      },
      {
        "name": "managerId",
        "schema": "string",
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
    "url": "/schedule/v1/vacation-day-off-requests/{id}/reject",
    "method": "rejectRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Vacation Day Off Requests",
    "typeScriptTag": "vacationDayOffRequests",
    "description": "Reject Vacation Day Off Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Day Off Request Id",
        "example": "ID"
      },
      {
        "name": "resolutionComment",
        "schema": "string",
        "description": "",
        "example": "No problem!"
      },
      {
        "name": "managerId",
        "schema": "string",
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
    "url": "/schedule/v1/vacation-day-off-requests/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Vacation Day Off Requests",
    "typeScriptTag": "vacationDayOffRequests",
    "description": "Delete Vacation Day Off Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Day Off Request Id",
        "example": "ID"
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
    "url": "/schedule/v1/absence-types",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absence Types",
    "typeScriptTag": "absenceTypes",
    "description": "List Absence Types",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/absence-calendars",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absence Calendars",
    "typeScriptTag": "absenceCalendars",
    "description": "List Absence Calendars",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Employee ID"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "Absence Type ID"
      },
      {
        "name": "year[in]",
        "schema": "array",
        "description": "Year calendar",
        "example": "2022"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/absence-calendars",
    "method": "createCalendar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absence Calendars",
    "typeScriptTag": "absenceCalendars",
    "description": "Create Absence Calendar",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "absenceTypeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ABSENCETYPEID"
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2023
      },
      {
        "name": "daysOff",
        "schema": "array",
        "required": true,
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
    "url": "/schedule/v1/absence-calendars/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Absence Calendars",
    "typeScriptTag": "absenceCalendars",
    "description": "Update Absence Calendar",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Calendar ID",
        "example": "ID"
      },
      {
        "name": "daysOff",
        "schema": "array",
        "required": true,
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
    "url": "/schedule/v1/absence-day-off",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absence Day Off",
    "typeScriptTag": "absenceDayOff",
    "description": "List Absence Day Off",
    "parameters": [
      {
        "name": "employeeIds",
        "schema": "array",
        "description": "The id of the employees"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "First day of search period"
      },
      {
        "name": "to",
        "schema": "string",
        "description": "Last day of search period"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit day offs"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/schedule/v1/absence-day-off-requests",
    "method": "listDayOffRequests",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Absence Day Off Requests",
    "typeScriptTag": "absenceDayOffRequests",
    "description": "List Absence Day Off Requests",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "The id of the employee"
      },
      {
        "name": "absencesValidator",
        "schema": "string",
        "required": false,
        "description": "The id of the manager"
      },
      {
        "name": "fromDayOff",
        "schema": "string",
        "description": "First day of search period"
      },
      {
        "name": "toDayOff",
        "schema": "string",
        "description": "Last day of search period"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "Request status"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit day offs"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/schedule/v1/absence-day-off-requests",
    "method": "createDayOffRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absence Day Off Requests",
    "typeScriptTag": "absenceDayOffRequests",
    "description": "Create Absence Day Off Request",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "absenceTypeId",
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
        "name": "daysOff",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "comment",
        "schema": "string",
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
    "url": "/schedule/v1/absence-day-off-requests/{id}/accept",
    "method": "acceptRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absence Day Off Requests",
    "typeScriptTag": "absenceDayOffRequests",
    "description": "Accept Absence Day Off Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Day Off Request Id",
        "example": "ID"
      },
      {
        "name": "managerId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "resolutionComment",
        "schema": "string",
        "description": "",
        "example": "No problem!"
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
    "url": "/schedule/v1/absence-day-off-requests/{id}/reject",
    "method": "rejectRequest",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Absence Day Off Requests",
    "typeScriptTag": "absenceDayOffRequests",
    "description": "Reject Absence Day Off Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Day Off Request Id",
        "example": "ID"
      },
      {
        "name": "resolutionComment",
        "schema": "string",
        "description": "",
        "example": "No problem!"
      },
      {
        "name": "managerId",
        "schema": "string",
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
    "url": "/schedule/v1/absence-day-off-requests/{id}",
    "method": "deleteRequestById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Absence Day Off Requests",
    "typeScriptTag": "absenceDayOffRequests",
    "description": "Delete Absence Day Off Request",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Day Off Request Id",
        "example": "ID"
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
    "url": "/schedule/v1/holiday-calendar",
    "method": "listCalendar",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holiday Calendars",
    "typeScriptTag": "holidayCalendars",
    "description": "List Holidays Calendar",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results",
        "default": 20
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "name[contains]",
        "schema": "string",
        "description": "Filter by name",
        "example": "Some name"
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
    "url": "/schedule/v1/holiday-calendar",
    "method": "createNewCalendar",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holiday Calendars",
    "typeScriptTag": "holidayCalendars",
    "description": "Create Holidays Calendar",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Zona Valencia"
      },
      {
        "name": "daysOff",
        "schema": "array",
        "required": true,
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
    "url": "/schedule/v1/holiday-calendar/{holidayCalendarId}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Holiday Calendars",
    "typeScriptTag": "holidayCalendars",
    "description": "Delete Holidays Calendar",
    "parameters": [
      {
        "name": "holidayCalendarId",
        "schema": "string",
        "required": true,
        "description": "Holiday Calendar Id",
        "example": "HOLIDAYCALENDARID"
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
    "url": "/schedule/v1/holiday-calendar/{holidayCalendarId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holiday Calendars",
    "typeScriptTag": "holidayCalendars",
    "description": "List Holiday Calendar",
    "parameters": [
      {
        "name": "holidayCalendarId",
        "schema": "string",
        "required": true,
        "description": "Holiday Calendar Id",
        "example": "HOLIDAYCALENDARID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/holiday-calendar/{holidayCalendarId}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Holiday Calendars",
    "typeScriptTag": "holidayCalendars",
    "description": "Update Holidays Calendar",
    "parameters": [
      {
        "name": "holidayCalendarId",
        "schema": "string",
        "required": true,
        "description": "Holiday Calendar Id",
        "example": "HOLIDAYCALENDARID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "Zona Valencia"
      },
      {
        "name": "daysOff",
        "schema": "array",
        "required": true,
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
    "url": "/schedule/v1/holidays",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holidays",
    "typeScriptTag": "holidays",
    "description": "List Holidays",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "EMPLOYEEID"
      },
      {
        "name": "year",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 2021
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/holidays/{holidayCalendarId}/employees",
    "method": "unassignHolidayCalendarToEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Holidays",
    "typeScriptTag": "holidays",
    "description": "Unassign Holiday Calendar To Employee",
    "parameters": [
      {
        "name": "holidayCalendarId",
        "schema": "string",
        "required": true,
        "description": "Holiday Calendar Id",
        "example": "HOLIDAYCALENDARID"
      },
      {
        "name": "employees",
        "schema": "array",
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
    "url": "/schedule/v1/holidays/{holidayCalendarId}/employees",
    "method": "getByHolidayCalendarEmployees",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Holidays",
    "typeScriptTag": "holidays",
    "description": "Get Employees By Holiday Calendar",
    "parameters": [
      {
        "name": "holidayCalendarId",
        "schema": "string",
        "required": true,
        "description": "Holiday Calendar Id",
        "example": "HOLIDAYCALENDARID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/holidays/{holidayCalendarId}/employees",
    "method": "assignToEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Holidays",
    "typeScriptTag": "holidays",
    "description": "Assign Holiday Calendar To Employee",
    "parameters": [
      {
        "name": "holidayCalendarId",
        "schema": "string",
        "required": true,
        "description": "Holiday Calendar Id",
        "example": "HOLIDAYCALENDARID"
      },
      {
        "name": "employees",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
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
    "url": "/schedule/v1/schedule-templates",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ScheduleTemplates",
    "typeScriptTag": "scheduleTemplates",
    "description": "List schedule templates",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/employees/{employeeId}/schedule-templates",
    "method": "listTemplates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Employee Schedule Templates",
    "typeScriptTag": "employeeScheduleTemplates",
    "description": "List employee schedule template",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "EMPLOYEEID"
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/entity-schedule-templates",
    "method": "createEmployeeScheduleTemplate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Schedule Templates",
    "typeScriptTag": "employeeScheduleTemplates",
    "description": "Create employee schedule template",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "scheduleTemplateId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SCHEDULETEMPLATEID"
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
    "url": "/schedule/v1/entity-schedule-templates/{entityScheduleTemplateId}",
    "method": "unassign",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Schedule Templates",
    "typeScriptTag": "employeeScheduleTemplates",
    "description": "Delete employee schedule template",
    "parameters": [
      {
        "name": "entityScheduleTemplateId",
        "schema": "string",
        "required": true,
        "description": "Employee schedule template UUID",
        "example": "ENTITYSCHEDULETEMPLATEID"
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
    "url": "/schedule/v1/agreements",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agreements",
    "typeScriptTag": "agreements",
    "description": "List agreements",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/agreements",
    "method": "createNewAgreement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Agreements",
    "typeScriptTag": "agreements",
    "description": "Create an agreement",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "annualHours",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/schedule/v1/agreements/{agreementId}",
    "method": "deleteAgreement",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Agreements",
    "typeScriptTag": "agreements",
    "description": "Delete agreement",
    "parameters": [
      {
        "name": "agreementId",
        "schema": "string",
        "required": true,
        "description": "Agreement UUID",
        "example": "AGREEMENTID"
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
    "url": "/schedule/v1/agreements/{agreementId}",
    "method": "getAgreement",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Agreements",
    "typeScriptTag": "agreements",
    "description": "Get agreement",
    "parameters": [
      {
        "name": "agreementId",
        "schema": "string",
        "required": true,
        "description": "Agreement UUID",
        "example": "AGREEMENTID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/schedule/v1/agreements/{agreementId}",
    "method": "updateAgreement",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Agreements",
    "typeScriptTag": "agreements",
    "description": "Update an agreement",
    "parameters": [
      {
        "name": "agreementId",
        "schema": "string",
        "required": true,
        "description": "Agreement UUID",
        "example": "AGREEMENTID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CODE"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COLOR"
      },
      {
        "name": "annualHours",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
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
    "url": "/schedule/v1/agreement-employees",
    "method": "assignEmployee",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Employee Agreements",
    "typeScriptTag": "employeeAgreements",
    "description": "Create employee agreement",
    "parameters": [
      {
        "name": "agreementId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "AGREEMENTID"
      },
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTDATE"
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
    "url": "/schedule/v1/agreement-employees/{agreementEmployeeId}",
    "method": "unassignEmployee",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Employee Agreements",
    "typeScriptTag": "employeeAgreements",
    "description": "Delete employee agreement",
    "parameters": [
      {
        "name": "agreementEmployeeId",
        "schema": "string",
        "required": true,
        "description": "Employee agreement UUID",
        "example": "AGREEMENTEMPLOYEEID"
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
    "url": "/contract/v1/contracts/{employeeId}",
    "method": "getByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get contracts by employee",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "EMPLOYEEID"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/contract/v1/contracts",
    "method": "createNewContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Create a contract",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTAT"
      },
      {
        "name": "endAt",
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
        "name": "comment",
        "schema": "string",
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
    "url": "/contract/v1/contracts/{contractId}",
    "method": "deleteContract",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Delete a contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Contract ID",
        "example": "CONTRACTID"
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
    "url": "/contract/v1/contracts/{contractId}",
    "method": "updateContract",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Update a contract",
    "parameters": [
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "Contract ID",
        "example": "CONTRACTID"
      },
      {
        "name": "startAt",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STARTAT"
      },
      {
        "name": "endAt",
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
        "name": "comment",
        "schema": "string",
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
    "url": "/contract/v1/contracts/{employeeId}/current-contract",
    "method": "getCurrentContractByEmployeeId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contracts",
    "typeScriptTag": "contracts",
    "description": "Get current contract by employeeId",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "EMPLOYEEID"
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
    "url": "/contract/v1/contribution-groups",
    "method": "listContributionGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Salaries",
    "typeScriptTag": "salaries",
    "description": "List Contribution Groups",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/contract/v1/salaries",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Salaries",
    "typeScriptTag": "salaries",
    "description": "List Salaries",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "Employee ID",
        "example": "EMPLOYEEID"
      },
      {
        "name": "salaryId",
        "schema": "string",
        "description": "Salary ID"
      },
      {
        "name": "payPeriod",
        "schema": "string",
        "description": "Pay Period"
      },
      {
        "name": "grossSalary",
        "schema": "integer",
        "description": "Gross Salary"
      },
      {
        "name": "payments",
        "schema": "integer",
        "description": "Payments"
      },
      {
        "name": "contributionGroup",
        "schema": "string",
        "description": "Contribution Group"
      },
      {
        "name": "startDate",
        "schema": "string",
        "description": "Start Date"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": "End Date"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/contract/v1/salaries",
    "method": "createSalary",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Salaries",
    "typeScriptTag": "salaries",
    "description": "Create Salary",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "payPeriod",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PAYPERIOD"
      },
      {
        "name": "currency",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EUR"
      },
      {
        "name": "grossSalary",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "payments",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "contributionGroupId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRIBUTIONGROUPID"
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
        "required": false,
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
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
    "url": "/contract/v1/salaries/{salaryId}",
    "method": "deleteSalary",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Salaries",
    "typeScriptTag": "salaries",
    "description": "Delete a salary",
    "parameters": [
      {
        "name": "salaryId",
        "schema": "string",
        "required": true,
        "description": "Salary ID",
        "example": "SALARYID"
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
    "url": "/contract/v1/salaries/{salaryId}",
    "method": "updateSalary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Salaries",
    "typeScriptTag": "salaries",
    "description": "Update a salary",
    "parameters": [
      {
        "name": "salaryId",
        "schema": "string",
        "required": true,
        "description": "Salary ID",
        "example": "SALARYID"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "comments",
        "schema": "string",
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
    "url": "/project/v1/time-entries/start",
    "method": "startEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Entries",
    "typeScriptTag": "timeEntries",
    "description": "Time Entry In",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
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
        "name": "coordinates",
        "schema": "undefined",
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
    "url": "/project/v1/time-entries/stop",
    "method": "stopTimeEntryOut",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Entries",
    "typeScriptTag": "timeEntries",
    "description": "Time Entry Out",
    "parameters": [
      {
        "name": "coordinates",
        "schema": "undefined",
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
    "url": "/project/v1/time-entries",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Time Entries",
    "typeScriptTag": "timeEntries",
    "description": "List Time Entries",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "from",
        "schema": "string",
        "description": ""
      },
      {
        "name": "to",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeStatus",
        "schema": "string",
        "description": "",
        "default": "active"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/project/v1/time-entries",
    "method": "createNewEntry",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Time Entries",
    "typeScriptTag": "timeEntries",
    "description": "Create Time Entry",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEEID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
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
        "name": "timeEntryIn",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "timeEntryOut",
        "schema": "undefined",
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
    "url": "/project/v1/time-entries/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Time Entries",
    "typeScriptTag": "timeEntries",
    "description": "Delete a Time Entry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Time Entry ID",
        "example": "ID"
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
    "url": "/project/v1/time-entries/{id}",
    "method": "updateEntry",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Time Entries",
    "typeScriptTag": "timeEntries",
    "description": "Update Time Entry",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Time Entry ID",
        "example": "ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tagIds",
        "schema": "array",
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
        "name": "timeEntryIn",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "timeEntryOut",
        "schema": "undefined",
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
    "url": "/project/v1/customers",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "List customers",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/project/v1/customers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Create a customer",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "customerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERNAME"
      },
      {
        "name": "firstName",
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
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
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
    "url": "/project/v1/customers/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Delete a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer ID",
        "example": "ID"
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
    "url": "/project/v1/customers/{id}",
    "method": "updateCustomer",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Update a customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Customer ID",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CUSTOMERNAME"
      },
      {
        "name": "firstName",
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
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "phone",
        "schema": "string",
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
    "url": "/project/v1/projects",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "List projects",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Company ID",
        "example": "ID"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "field1 asc, field2 desc"
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
    "url": "/project/v1/projects",
    "method": "createProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Create a project",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COMPANYID"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parentProjectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "managerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
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
    "url": "/project/v1/projects/{id}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Delete a project",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Project ID",
        "example": "ID"
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
    "url": "/project/v1/projects/{id}",
    "method": "updateProjectById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Projects",
    "typeScriptTag": "projects",
    "description": "Update a project",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Project ID",
        "example": "ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "parentProjectId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "price",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "startDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "endDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "managerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
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
    "url": "/document/v1/directories",
    "method": "listDirectories",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "List company directories",
    "parameters": [
      {
        "name": "employeeId",
        "schema": "string",
        "description": "Filter directories by employee id"
      },
      {
        "name": "parentDirectoryType",
        "schema": "string",
        "description": "Parent directory type"
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "Limit results"
      },
      {
        "name": "page",
        "schema": "integer",
        "description": "Request a specific page"
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
    "url": "/document/v1/directories/{directoryId}/documents",
    "method": "uploadNewDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documents",
    "typeScriptTag": "documents",
    "description": "Upload document",
    "parameters": [
      {
        "name": "directoryId",
        "schema": "string",
        "required": true,
        "description": "Directory UUID",
        "example": "DIRECTORYID"
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
      },
      {
        "name": "originalDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
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
    "url": "/recruitment/v1/vacancies",
    "method": "listVacancies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Get vacancies list",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/recruitment/v1/vacancies/{id}",
    "method": "getVacancy",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Get a vacancy",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Vacancy ID",
        "example": "ID"
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
    "url": "/recruitment/v1/candidates",
    "method": "createCandidate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Create a candidate",
    "parameters": [
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
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "linkedinURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "desiredSalary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startWorkDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "web",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vacancyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VACANCYID"
      },
      {
        "name": "statusId",
        "schema": "string",
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
    "url": "/recruitment/v1/candidates/{id}",
    "method": "getCandidateById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Get a candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID",
        "example": "ID"
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
    "url": "/recruitment/v1/candidates/{id}",
    "method": "uploadCandidateDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Upload candidate document",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID",
        "example": "ID"
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
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
    "url": "/recruitment/v1/candidates/{id}",
    "method": "updateCandidate",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Update a candidate",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Candidate ID",
        "example": "ID"
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
        "name": "phone",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONE"
      },
      {
        "name": "linkedinURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "desiredSalary",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "startWorkDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "web",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "vacancyId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VACANCYID"
      },
      {
        "name": "statusId",
        "schema": "string",
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
    "url": "/recruitment/v1/candidate-status/{vacancyId}",
    "method": "getCandidateStatusList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Recruitment",
    "typeScriptTag": "recruitment",
    "description": "Get candidate status list",
    "parameters": [
      {
        "name": "vacancyId",
        "schema": "string",
        "required": true,
        "description": "Vacancy ID",
        "example": "VACANCYID"
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
      apiTitle="Sesame Public API"
      apiBaseUrl="https://api-{region}.sesametime.com"
      apiVersion="3.0.0"
      endpoints={79}
      sdkMethods={119}
      schemas={173}
      parameters={497}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sesame-hr/openapi.yaml"
      developerDocumentation="apidocs.sesametime.com/"
    />
  );
}
  