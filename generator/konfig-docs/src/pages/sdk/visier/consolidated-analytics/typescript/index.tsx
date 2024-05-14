import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierConsolidatedAnalyticsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-consolidated-analytics-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="ConsolidatedAnalytics"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/consolidated-analytics/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierConsolidatedAnalytics"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/consolidated-analytics/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/consolidated-analytics/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants",
    "method": "listTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Retrieve a list of all consolidated analytics tenants",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of tenants to return. The maximum value is 1000. Default is 400."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The starting index of the first tenant to return. Default is 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants",
    "method": "createTenant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Create a consolidated analytics tenant",
    "parameters": [
      {
        "name": "tenantCode",
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
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/excluded-sources",
    "method": "removeExcludedSources",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Remove excluded sources from a consolidated analytics tenants",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "excludedSources",
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
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/excluded-sources",
    "method": "listExcludedSources",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Retrieve a consolidated analytics tenant's excluded sources",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/excluded-sources",
    "method": "addExcludedSources",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Add excluded sources to a consolidated analytics tenant",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "excludedSources",
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
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/excluded-sources",
    "method": "setExcludedSources",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Set a consolidated analytics tenant's excluded sources",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "excludedSources",
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
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/source-tenants",
    "method": "removeSourceTenants",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Remove source tenants from a consolidated analytics tenants",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of source tenants to return. The maximum value is 1000. Default is 400."
      },
      {
        "name": "tenantCodes",
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
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/source-tenants",
    "method": "listSourceTenants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Retrieve a consolidated analytics tenant's source tenants",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of source tenants to return. The maximum value is 1000. Default is 400."
      },
      {
        "name": "start",
        "schema": "integer",
        "description": "The starting index of the first source tenant to return. Default is 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "default",
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/source-tenants",
    "method": "addSourceTenants",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Add source tenants to a consolidated analytics tenant",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of source tenants to return. The maximum value is 1000. Default is 400."
      },
      {
        "name": "tenantCodes",
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
        "description": "The response structure for errors."
      }
    ]
  },
  {
    "url": "/v1alpha/admin/consolidated-analytics/tenants/:tenantId/source-tenants",
    "method": "setSourceTenants",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "ConsolidatedAnalyticsV1Alpha",
    "typeScriptTag": "consolidatedAnalyticsV1Alpha",
    "description": "Set a consolidated analytics tenant's source tenants",
    "parameters": [
      {
        "name": "tenantId",
        "schema": "string",
        "description": "The ID of the tenant. For example, WFF_{XXX}~CA{YYY} where {XXX} is the administrating tenant code and {YYY}\n is the consolidated analytic tenant code."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of source tenants to return. The maximum value is 1000. Default is 400."
      },
      {
        "name": "tenantCodes",
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
        "description": "The response structure for errors."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Visier Consolidated Analytics APIs"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={3}
      sdkMethods={10}
      schemas={8}
      parameters={22}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/consolidated-analytics/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/consolidated-analytics/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  