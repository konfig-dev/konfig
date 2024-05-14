import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VisierDocumentSearchTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="visier-document-search-typescript-sdk"
      metaDescription={`Visier is the people impact platform that puts the right insights in the right hands, at the right time, throughout the business.

We help organizations of all sizes unlock the power of their people data for business impact. This includes enterprises using our category-leading people analytics software, partners embedding our solution into existing apps, and developers building on the Visier platform.

As the global leader in people analytics, Visier has over 25,000 customers in 75 countries around the world, including enterprises like BASF, Bridgestone, Electronic Arts, McKesson, MerckKGaA, and more. Visier is headquartered in Vancouver, BC with offices and team members worldwide.`}
      company="Visier"
      serviceName="DocumentSearch"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/document-search/logo.png"
      companyKebabCase="visier"
      clientNameCamelCase="visierDocumentSearch"
      homepage="visier.com"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/document-search/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/document-search/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["enterprise_software","people_analytics","business_impact","team_management","workforce_insights","human_resources","workforce_intelligence","workforce_analytics","hr_metrics","hr_analytics","hr_dashboard","hr_reporting","workforce_planning","human_capital_management","workforce_solutions","talent_acquisition_analytics"]}
      methods={[
  {
    "url": "/v1alpha/search/simple/document-headers",
    "method": "simpleSearchDocumentHeaders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DocumentSearch",
    "typeScriptTag": "documentSearch",
    "description": "Perform a simple search for Visier document headers",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "description": "The search query string."
      },
      {
        "name": "limit",
        "schema": "integer",
        "description": "The maximum number of results to return. Defaults to 100."
      },
      {
        "name": "offset",
        "schema": "integer",
        "description": "The index to start retrieving results from, also known as offset. Defaults to 0."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The response body structure for Simple document header search operations."
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
      apiTitle="Visier Document Search API"
      apiBaseUrl="https://{vanity-name}.api.visier.io"
      apiVersion="22222222.99201.1256"
      endpoints={1}
      sdkMethods={1}
      schemas={5}
      parameters={3}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/visier/document-search/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/visier/document-search/openapi.yaml"
      developerDocumentation="docs.visier.com/developer/apis/apis.htm"
    />
  );
}
  