import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierObjectConfigurationTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-object-configuration-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="ObjectConfiguration"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/object-configuration/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierObjectConfiguration"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/object-configuration/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/object-configuration/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1/admin/calculation-concepts",
    "method": "getCalculationConcepts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ObjectConfiguration",
    "typeScriptTag": "objectConfiguration",
    "description": "Retrieve all calculation concepts",
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
    "url": "/v1/admin/calculation-concepts/{conceptId}",
    "method": "getCalculationConcept",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ObjectConfiguration",
    "typeScriptTag": "objectConfiguration",
    "description": "Retrieve the configuration of a calculation concept",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The ID of the concept to retrieve the configuration for.",
        "example": "CONCEPTID"
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
    "url": "/v1/admin/calculation-concepts/{conceptId}/configure",
    "method": "mapCalculationConcept",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ObjectConfiguration",
    "typeScriptTag": "objectConfiguration",
    "description": "Map dimension members to nodes in a calculation concept",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the concept to configure.",
        "example": "CONCEPTID"
      },
      {
        "name": "perspectivesToMap",
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
    "url": "/v1/admin/selection-concepts",
    "method": "getSelectionConcepts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ObjectConfiguration",
    "typeScriptTag": "objectConfiguration",
    "description": "Retrieve all selection concepts",
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
    "url": "/v1/admin/selection-concepts/{conceptId}",
    "method": "getSelectionConcept",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ObjectConfiguration",
    "typeScriptTag": "objectConfiguration",
    "description": "Retrieve the configuration of a selection concept",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The ID of the concept to retrieve the configuration for.",
        "example": "CONCEPTID"
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
    "url": "/v1/admin/selection-concepts/{conceptId}/configure",
    "method": "mapSelectionConcept",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ObjectConfiguration",
    "typeScriptTag": "objectConfiguration",
    "description": "Map dimension members to a selection concept",
    "parameters": [
      {
        "name": "conceptId",
        "schema": "string",
        "required": true,
        "description": "The UUID of the concept to configure.",
        "example": "CONCEPTID"
      },
      {
        "name": "analyticObjectFiltersToMap",
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
  }
]
    }
      language="TypeScript"
      apiTitle="Visier Object Configuration APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={6}
      sdkMethods={6}
      schemas={16}
      parameters={6}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/object-configuration/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/object-configuration/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  