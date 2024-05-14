import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierTenantManagementTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-tenant-management-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="TenantManagement"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/tenant-management/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierTenantManagement"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/tenant-management/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/tenant-management/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/admin/tenants",
    "method": "getTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Retrieve a list of all analytic tenants",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of analytic tenant details to retrieve."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. The index begins at 0."
      },
      {
        "name": "details",
        "schema": "boolean",
        "description": "If true, the response returns information about the data version and modules."
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
    "url": "/v1/admin/tenants",
    "method": "addTenant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Add an analytic tenant",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "purchasedModules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "industryCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "embeddableDomains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customProperties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssoInstanceIssuers",
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
    "url": "/v1/admin/tenants/:tenantId",
    "method": "deleteTenant",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Deprovision an analytic tenant",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the analytic tenant code."
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
    "url": "/v1/admin/tenants/:tenantId",
    "method": "getTenant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Retrieve an analytic tenant's details",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the analytic tenant code."
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
    "url": "/v1/admin/tenants/:tenantId",
    "method": "updateTenant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Update an analytic tenant",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant to update."
      },
      {
        "name": "tenantDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "industryCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "purchasedModules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embeddableDomains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customProperties",
        "schema": "object",
        "description": ""
      },
      {
        "name": "ssoInstanceIssuers",
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
    "url": "/v1/admin/tenants/:tenantId/disable",
    "method": "disableTenant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Disable an analytic tenant",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the analytic tenant code."
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
    "url": "/v1/admin/tenants/:tenantId/enable",
    "method": "enableTenant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Enable an analytic tenant",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the analytic tenant code."
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
    "url": "/v1/op/validation/tenants",
    "method": "validateTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Validate metric values for all analytic tenants",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The limit of analytic tenant details to retrieve."
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
    "url": "/v1/op/validation/tenants/:tenantId",
    "method": "validateTenant",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TenantManagementV1",
    "typeScriptTag": "tenantManagementV1",
    "description": "Validate an analytic tenant's metric values",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the analytic tenant code."
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
    "url": "/v2/admin/tenants",
    "method": "listTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TenantManagement",
    "typeScriptTag": "tenantManagement",
    "description": "Retrieve a list of all analytic tenants",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of tenants to return. Default is 400."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The starting index of the first tenant to return. Default is 0."
      },
      {
        "name": "mask",
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
    "url": "/v2/admin/tenants",
    "method": "createTenant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "TenantManagement",
    "typeScriptTag": "tenantManagement",
    "description": "Add an analytic tenant",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantShortName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vanityUrlName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "industryCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "primaryBusinessLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purchasedModules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embeddableDomains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customProperties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssoInstanceIssuers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "homeAnalysisId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "homeAnalysisByUserGroup",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updateAction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "clickThroughLink",
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
    "url": "/v2/admin/tenants/:tenantId",
    "method": "updateTenant",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "TenantManagement",
    "typeScriptTag": "tenantManagement",
    "description": "Update an analytic tenant",
    "parameters": [
      {
        "name": "tenantCode",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantDisplayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tenantShortName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "vanityUrlName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "industryCode",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "primaryBusinessLocation",
        "schema": "object",
        "description": ""
      },
      {
        "name": "purchasedModules",
        "schema": "array",
        "description": ""
      },
      {
        "name": "embeddableDomains",
        "schema": "array",
        "description": ""
      },
      {
        "name": "customProperties",
        "schema": "array",
        "description": ""
      },
      {
        "name": "ssoInstanceIssuers",
        "schema": "array",
        "description": ""
      },
      {
        "name": "homeAnalysisId",
        "schema": "string",
        "description": ""
      },
      {
        "name": "homeAnalysisByUserGroup",
        "schema": "array",
        "description": ""
      },
      {
        "name": "updateAction",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enabled",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "clickThroughLink",
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
    "url": "/v2/admin/tenants/{tenantId}",
    "method": "tenantInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TenantManagement",
    "typeScriptTag": "tenantManagement",
    "description": "Retrieve an analytic tenant's details",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "required": true,
        "description": "The ID of the tenant to retrieve.",
        "example": "TENANTID"
      },
      {
        "name": "mask",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Visier Tenant Management APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={9}
      sdkMethods={13}
      schemas={21}
      parameters={59}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/tenant-management/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/tenant-management/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  