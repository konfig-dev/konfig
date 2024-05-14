import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierUserManagementTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-user-management-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="UserManagement"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/user-management/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierUserManagement"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/user-management/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/user-management/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/admin/permissions/users",
    "method": "removePermissions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Remove permissions from users",
    "parameters": [
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the permission assignment or removal."
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions/users",
    "method": "assignPermissions",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Assign permissions to users",
    "parameters": [
      {
        "name": "permissions",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The results of the permission assignment or removal."
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/permissions/{permissionId}/users",
    "method": "getPermissionAssignedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve users that are assigned a specific permission",
    "parameters": [
      {
        "name": "permissionId",
        "schema": "string",
        "required": true,
        "description": "The unique identifier of the permission you want to retrieve users for.",
        "example": "PERMISSIONID"
      },
      {
        "name": "includeUserGroups",
        "schema": "boolean",
        "description": "If true, the response returns a list of all users that are assigned the permission, including users that are\n assigned the permission through a user group.\nIf false, the response returns a list of the users that are directly assigned the permission."
      },
      {
        "name": "tenantFilter",
        "schema": "string",
        "description": "Specify the tenant to retrieve the list of users from."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results to return. The maximum number of tenants to retrieve is 100."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Users that are assigned a specific permission."
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/user-groups",
    "method": "getAllUserGroups",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve a list of all user groups",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve the list of user groups from."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results to return. The maximum number of users to retrieve is 1000."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/user-groups/permissions",
    "method": "revokePermissionsFromUserGroups",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Remove permissions from user groups",
    "parameters": [
      {
        "name": "userGroups",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/user-groups/permissions",
    "method": "assignPermissionsToUserGroups",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Assign permissions to user groups",
    "parameters": [
      {
        "name": "userGroups",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/user-groups/users",
    "method": "removeUsersFromUserGroup",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Remove users from user groups",
    "parameters": [
      {
        "name": "userGroups",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/user-groups/users",
    "method": "addUsersToUserGroup",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Assign users to user groups",
    "parameters": [
      {
        "name": "userGroups",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/user-groups/{userGroupId}/users",
    "method": "getUserGroupUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve a list of user group users",
    "parameters": [
      {
        "name": "userGroupId",
        "schema": "string",
        "required": true,
        "description": "The ID of user group.",
        "example": "USERGROUPID"
      },
      {
        "name": "tenantFilter",
        "schema": "string",
        "description": "Specifies the tenant to retrieve the list of users from."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results to return. The maximum number of tenants to retrieve is 100."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users",
    "method": "getAllUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve a list of all users",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve a list of users from."
      },
      {
        "name": "assignedProfiles",
        "schema": "boolean",
        "description": "If true, the response returns a list of the user's assigned profiles."
      },
      {
        "name": "assignedPermissions",
        "schema": "boolean",
        "description": "If true, the response returns the user's assigned permissions."
      },
      {
        "name": "assignedUserGroups",
        "schema": "boolean",
        "description": "If true, the response returns the user's assigned user groups."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The number of results to return. The maximum number of users to retrieve is 1000."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users",
    "method": "addUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Add a user",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to create a user in."
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/{userId}",
    "method": "deleteUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Delete a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user you want to delete.",
        "example": "USERID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to delete a user in."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/{userId}",
    "method": "getUserDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve a user's details",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user you want to retrieve.",
        "example": "USERID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve a user from."
      },
      {
        "name": "assignedProfiles",
        "schema": "boolean",
        "description": "If true, the response returns a list of the user's assigned profiles."
      },
      {
        "name": "assignedPermissions",
        "schema": "boolean",
        "description": "If true, the response returns the user's assigned permissions."
      },
      {
        "name": "assignedUserGroups",
        "schema": "boolean",
        "description": "If true, the response returns the user's assigned user groups."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/{userId}",
    "method": "updateUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Update a user",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user you want to update.",
        "example": "USERID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to update a user in."
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employeeId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "accountEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "email",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v2/admin/users",
    "method": "deleteUsers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "UserManagementV2",
    "typeScriptTag": "userManagementV2",
    "description": "Delete users",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to delete a user in."
      },
      {
        "name": "userIds",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v2/admin/users",
    "method": "addUsers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "UserManagementV2",
    "typeScriptTag": "userManagementV2",
    "description": "Add users",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to create a user in."
      },
      {
        "name": "users",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v2/admin/users",
    "method": "updateUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "UserManagementV2",
    "typeScriptTag": "userManagementV2",
    "description": "Update users",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to update a user in."
      },
      {
        "name": "users",
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
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/reports/application-logs",
    "method": "getApplicationLogsXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve the Application Logs",
    "parameters": [
      {
        "name": "startTime",
        "schema": "string",
        "description": "An inclusive date-time to start retrieving Application Logs from."
      },
      {
        "name": "endTime",
        "schema": "string",
        "description": "An exclusive date-time to stop retrieving Application Logs from."
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve Application Logs from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/{userId}/reports/data-security",
    "method": "getDataSecurityReportXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve the Data Security Report",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user to retrieve the report for.",
        "example": "USERID"
      },
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve the Data Security Report from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/reports/profile-assignments",
    "method": "getProfileAssignmentsXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve user profile assignments in XLSX format",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve profile assignments from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/reports/permission-assignments",
    "method": "getUserPermissionsXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve user permissions in XLSX format",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve the permission assignments report from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  },
  {
    "url": "/v1/admin/users/reports/permissions-list",
    "method": "getAllPermissionsXlsx",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "UserManagement",
    "typeScriptTag": "userManagement",
    "description": "Retrieve a list of all permissions in XLSX format",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": "Specify the tenant to retrieve permissions from."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors)."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Visier User Management APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={14}
      sdkMethods={22}
      schemas={53}
      parameters={57}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/user-management/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/user-management/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  