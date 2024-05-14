import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierProfileManagementTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-profile-management-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="ProfileManagement"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/profile-management/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierProfileManagement"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/profile-management/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/profile-management/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/admin/profiles",
    "method": "getAllProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Retrieve a list of all profiles",
    "parameters": [],
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
    "url": "/v1/admin/profiles/accessible-tenants",
    "method": "getAnalyticProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Retrieve a list of analytic tenant profiles",
    "parameters": [],
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
    "url": "/v1/admin/profiles/accessible-tenants/{profileId}",
    "method": "getAnalyticProfileDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Retrieve the details of an analytic tenant profile",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the profile to retrieve details for.",
        "example": "PROFILEID"
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
    "url": "/v1/admin/profiles/accessible-tenants/{profileId}/assign",
    "method": "assignAnalyticProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Assign an analytic tenant profile to administrating tenant users",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the profile to assign.",
        "example": "PROFILEID"
      },
      {
        "name": "targetUserIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targetTenantCodes",
        "schema": "array",
        "description": ""
      },
      {
        "name": "validityStartTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validityEndTime",
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
    "url": "/v1/admin/profiles/accessible-tenants/{profileId}/remove",
    "method": "removeAnalyticProfile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Remove an analytic tenant profile from administrating tenant users",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the profile to remove.",
        "example": "PROFILEID"
      },
      {
        "name": "targetUserIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "targetTenantCodes",
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
    "url": "/v1/admin/profiles/{profileId}",
    "method": "getProfileDetail",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Retrieve the details of a profile",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the profile to retrieve details for.",
        "example": "PROFILEID"
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
    "url": "/v1/admin/profiles/{profileId}/assign",
    "method": "assignProfile",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Assign a profile to a list of users",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the profile to assign to a list of users.",
        "example": "PROFILEID"
      },
      {
        "name": "targetUserIds",
        "schema": "array",
        "description": ""
      },
      {
        "name": "validityStartTime",
        "schema": "string",
        "description": ""
      },
      {
        "name": "validityEndTime",
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
    "url": "/v1/admin/profiles/{profileId}/remove",
    "method": "removeProfile",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Remove a profile from a list of users",
    "parameters": [
      {
        "name": "profileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the profile to remove to a list of users.",
        "example": "PROFILEID"
      },
      {
        "name": "targetUserIds",
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
    "url": "/v1/admin/users/{userId}/accessible-tenant-profiles",
    "method": "getAnalyticUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Retrieve an administrating tenant user's analytic tenant profiles",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user you want to retrieve.",
        "example": "USERID"
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
    "url": "/v1/admin/users/{userId}/profiles",
    "method": "getUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProfileManagement",
    "typeScriptTag": "profileManagement",
    "description": "Retrieve a user's profiles",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "The ID of the user you want to retrieve.",
        "example": "USERID"
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
      apiTitle="Visier Profile Management APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={10}
      sdkMethods={10}
      schemas={30}
      parameters={18}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/profile-management/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/profile-management/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  