import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ZapierAiActionsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="zapier-actions-typescript-sdk"
      metaDescription="AI Actions is a tool for builders to equip AI platforms (or custom integrations) with the ability to run any Zapier action! The 20,000+ searches and actions you know and love from the Zapier automation platform can be used with your favorite AI tool."
      company="Zapier"
      doesNotHaveApiDescription={true}
      serviceName="AI Actions"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/ai-actions/logo.png"
      clientNameCamelCase="zapierActions"
      homepage="zapier.com"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/ai-actions/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/ai-actions/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["automation","ai","developer_tools"]}
      methods={[
  {
    "url": "/api/v1/check",
    "method": "authTestGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Check",
    "typeScriptTag": "check",
    "description": "Check",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v1/configuration-link",
    "method": "getConfigurationLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Configuration",
    "typeScriptTag": "configuration",
    "description": "Get Configuration Link",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      }
    ]
  },
  {
    "url": "/api/v1/exposed",
    "method": "listExposedActions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "List Exposed Actions",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/exposed/{exposed_app_action_id}/execute",
    "method": "executeAppAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Action",
    "typeScriptTag": "action",
    "description": "Execute App Action Endpoint",
    "parameters": [
      {
        "name": "exposedAppActionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "01ARZ3NDEKTSV4RRFFQ69G5FAV"
      },
      {
        "name": "instructions",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "INSTRUCTIONS"
      },
      {
        "name": "preview_only",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This is a summary of the results given the action that was executed."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/api/v1/execution-log/{execution_log_id}",
    "method": "getExecutionLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Log",
    "typeScriptTag": "log",
    "description": "Get Execution Log Endpoint",
    "parameters": [
      {
        "name": "executionLogId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "01ARZ3NDEKTSV4RRFFQ69G5FAV"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "This is a summary of the results given the action that was executed."
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Zapier AI Actions API"
      apiBaseUrl="https://actions.zapier.com"
      apiVersion="1.0.0"
      endpoints={5}
      sdkMethods={5}
      schemas={5}
      parameters={4}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zapier/ai-actions/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zapier/ai-actions/openapi.yaml"
      
    />
  );
}
  