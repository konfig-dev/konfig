import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CustomerIoDataPipelinesTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="customer-io-data-pipelines-typescript-sdk"
      metaDescription={`Customer.io is a versatile marketing automation tool for sending relevant messages based on behavior across web and mobile products.

Impersonal messages lead to bad experiences. That's why we use real-time data to help you deliver the right message, exactly when it's needed — like sending an event reminder over SMS or the perfect onboarding email.

Our robust platform enables you to:
- Automate your product messaging, with the ability to build, test, and send messages from one platform.
- Create and manage newsletters, transactional messages, and behavioral messages
- Do more with your behavior and data -- connect our powerful segmentation and automation engine with other apps to drive user behavior and save time.

Learn more: https://customer.io`}
      company="Customer.io"
      serviceName="Data Pipelines"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/logo.png"
      companyKebabCase="customer-io"
      clientNameCamelCase="customerIoDataPipelines"
      homepage="customer.io/"
      lastUpdated={new Date("2024-04-16T19:21:46.323Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["marketing","big_data_analytics","customer_data_platform"]}
      methods={[
  {
    "url": "/identify",
    "method": "personTraitsAssignment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Identification",
    "typeScriptTag": "identification",
    "description": "Identify",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/track",
    "method": "eventSubmission",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tracking",
    "typeScriptTag": "tracking",
    "description": "Track",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/page",
    "method": "recordPageView",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Page",
    "typeScriptTag": "page",
    "description": "Page",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/screen",
    "method": "eventCreate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Screenshot",
    "typeScriptTag": "screenshot",
    "description": "Screen",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/group",
    "method": "addPeopleToGroup",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Group",
    "typeScriptTag": "group",
    "description": "Group",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/alias",
    "method": "reconcileIdentities",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Alias",
    "typeScriptTag": "alias",
    "description": "Alias",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "previousId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PREVIOUSID"
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "USERID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  },
  {
    "url": "/batch",
    "method": "executeRequests",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Batch",
    "typeScriptTag": "batch",
    "description": "Batch",
    "parameters": [
      {
        "name": "batch",
        "schema": "array",
        "description": ""
      },
      {
        "name": "context",
        "schema": "undefined",
        "description": ""
      },
      {
        "name": "integrations",
        "schema": "object",
        "description": "",
        "example": {
          "All": true,
          "Salesforce": false
        }
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A successful request returns an empty object response."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Data Pipelines API"
      apiBaseUrl="https://cdp.customer.io/v1"
      apiVersion="1.0.0"
      endpoints={7}
      sdkMethods={7}
      schemas={173}
      parameters={6}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/data-pipelines/openapi.yaml"
      developerDocumentation="customer.io/docs/api/cdp/"
    />
  );
}
  